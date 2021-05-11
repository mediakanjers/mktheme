<?php



/*

 * Bestands versie: 1.2

 */





/*

 * Create post type

 */

function create_post_type() {

  register_post_type( 'MKTemplate',

    array(
      'labels' => array(
        'name' => __( 'MK Templates' ),
        'singular_name' => __( 'mktemplate' )
      ),
      'public' => true,
      'has_archive' => false,
      'publicly_queryable'  => false,
    )
  );



  register_taxonomy(
		'cattemp',
		'mktemplate',
		array(
			'label' => __( 'Categorie template' ),
			'rewrite' => array( 'slug' => 'cattemp' ),
			'hierarchical' => true,
			// 'public' => false,
			// 'publicly_queryable'  => false,
		)
	);
}

add_action( 'init', 'create_post_type' );



/*
 * Get Template data
 */
function get_templates_eigen( $type ) {

	return get_posts( array(

		'posts_per_page' => -1,
		'post_type'      => 'mktemplate',
		'orderby'        => 'post_title',
		'order'          => 'ASC',

		'tax_query' => array(
			array(
			'taxonomy' => 'cattemp',
			'field' => 'name',
			'terms' =>  $type
			)
		),

		'post_status'    => array(
				'publish',
				'pending',
				'future',
				'private',
			)
		)

	);
}



/*
 * Array save templates
 */
function get_array_save_template() {

	if ( function_exists ( 'child_array_save_templates' ) ) {

		return child_array_save_templates();
	}
	else
	{
		return mk_array_save_templates();
	}
}





function mk_array_save_templates() {

	$results = array();

	if( have_rows('theme_templates', 'option') ): while ( have_rows('theme_templates', 'option') ) : the_row(); //groep

		$results[] = get_sub_field('post_type_slug');

	endwhile; endif; //end groep

	if($results != "") { return array($results); }

    return array("page");
}




/*
 * Create box op de pagina
 */

add_action('add_meta_boxes', 'add_your_meta_box'); 


//Add on all post types, from settings page.
function add_your_meta_box(){
	$mktheme_save_template = esc_attr( get_option( 'mktheme_save_template' ) );

  	$types = explode(",", $mktheme_save_template);

 	foreach($types as $type){
    	add_meta_box('templates-metabox', 'MK Theme Templates', 'function_of_metabox', $type, 'side', 'high');
	}
}



function function_of_metabox()
{
	global $post;

	$templates = get_templates_eigen(  $post->post_type );

	if ( empty($templates) ) {

		echo '<div style="padding-bottom: 10px; padding-top:5px;">Er zijn nog geen templates beschikbaar!</div>';

		//return;

	} else { ?>

	<div class="kiestemplate" style="text-align: right; padding-bottom: 15px;">



		<div class="selecteertemplate">

			<input class="button-primary" style="margin-top: 10px; width: 100%; padding: 15px;  line-height: 0;" name="selecteertemp" id="selecteertemp" type="button" value="Selecteer een Template" />

		</div>



		<div class="laadtemplate" style="display: none;">

			<div class="titel" style="padding-bottom: 10px; font-weight: 700; text-align: left;">Laad een template in!</div>



			<select name="mk_select_template" id="mk_select_template" style="width: 100%; padding: 6.5px 10px;; height: auto;">

				<?php foreach($templates as $template): ?>

					<option value="<?php echo $template->ID; ?>"><?php echo $template->post_title; ?></option>

				<?php endforeach; ?>

			</select>


			<input class="button-primary" style="margin-top: 10px; width: 100%; padding: 15px; line-height: 0;" name="mk_load_template" id="mk_load_template" type="button" value="Laad Template" />

		</div>

	</div>


<?php } ?>



<div class="savetemplate" style="padding-top: 15px; padding-bottom: 5px; border-top: 1px solid #ddd;">
	<div class="opensavetemplate">

		<input class="button-primary" style=" width: 100%; padding: 15px;  line-height: 0;" name="opensavetemp" id="opensavetemp" type="button" value="Sla dit Template op!" />

	</div>

	<div class="slaeentemplateop" style="display: none;">

		<div class="titel" style="padding-bottom: 10px; font-weight: 700;">Sla dit template op!</div>

		<div>
			<input class="text" style="width: 100%; padding: 10px 10px; margin-bottom: 10px; line-height: 0;" name="mk_save_titel" id="mk_save_titel" type="text" value="<?php echo $post->post_title; ?>" />
		</div>

		<div style=" text-align: right;">
			<input class="button-primary" style="width: 100%; padding: 15px; line-height: 0;" name="mk_save_template" id="mk_save_template" type="button" value="Template Opslaan" />
		</div>

		<span id="postid" style="display: none;"><?php echo $post->ID; ?></span>
		<span id="posttype" style="display: none;"><?php echo $post->post_type; ?></span>

	</div>
</div>



<?php

//echo '<div><a target="_blank" href="' . wp_nonce_url('admin.php?action=delete_eigen&post=' . $post->ID, basename(__FILE__), 'delete_data' ) . '" title="Duplicate this item" rel="permalink">Delete data</a></div>';

}




/*
Niet meer nodig
 * Delete alle metakey data!
 Niet meer nodig!
 */
add_action( 'admin_action_delete_eigen', 'delete_eigen' );

function delete_eigen()
{
	global $wpdb;

	$post_id = (isset($_GET['post']) ? absint( $_GET['post'] ) : absint( $_POST['post'] ) );

	//echo "Start Delete";
	$wpdb->delete( $wpdb->postmeta, array( 'post_id' => $post_id ) );

	$delete_post_meta = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");
}



/*
 * Laad Template!
 */
add_filter('default_excerpt', 'template_load_eigen', 10, 2);

function template_load_eigen($excerpt, $post)
{
	global $wpdb;

	$template = false;
	$template_id = 742;

	if( isset($_REQUEST['mk_template_load']) && is_numeric($_REQUEST['mk_template_load']) ) {

		$template = get_post( $_REQUEST['mk_template_load'] );
		$template_id = $_REQUEST['mk_template_load'];

	}


	// Only proceed if we have a template
	if( $template !== false) {

		ob_start();

		if( isset($_REQUEST['post_id']) ) {
			$post_id = $_REQUEST['post_id'];
		} 
		else 
		{ 
			$post_id = $post->ID;
		}


		if ( $post_id > 0 ) {
			$target_post = get_post($post_id);
		}


		$properties = get_object_vars($template);

		$excluded_properties = array(

			'ID',
			'post_author',
			'post_modified',
			'post_modified_gmt',
			'post_name',
			'guid',
			'post_status',
			'post_date',
			'post_date_gmt',
			'post_type',
			'post_status',

		);



		$temp_post = array();

		$temp_post['ID'] = $post_id;
		//$temp_post['post_title'] = $target_post->post_title;
		$temp_post['post_content'] = $template->post_content; //'post_content'   => $post->post_content,
		$temp_post['post_status'] = "publish"; //'post_status'    => 'publish',


		$new_post_id = $post_id;

		//Delete alle metakey data
		$wpdb->delete( $wpdb->postmeta, array( 'post_id' => $post_id ) );

		//Select die juiste row;
		$post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$template_id");

		wp_update_post($temp_post);

		if (count($post_meta_infos)!=0) {

			$sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";

			foreach ($post_meta_infos as $meta_info) {

				$meta_key = $meta_info->meta_key;

				if( $meta_key == '_wp_old_slug' ) continue;

				$meta_value = addslashes($meta_info->meta_value);

				$sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";

			}

			$sql_query.= implode(" UNION ALL ", $sql_query_sel);
			$wpdb->query($sql_query);

		}

		ob_end_clean();
		wp_redirect( admin_url( 'post.php?action=edit&post=' . $new_post_id ) );

		exit();
	}
	return $excerpt;
}



//$actions['save'] = '<a href="' . wp_nonce_url('admin.php?action=rd_duplicate_post_as_draft2&post=' . $post->ID, basename(__FILE__), 'duplicate_nonce' ) . '" title="Duplicate this item" rel="permalink">Save Template</a>';
//admin.php?action=mk_save_template

add_action( 'admin_action_mk_save_template', 'mk_save_template' );


function mk_save_template() {

	global $wpdb;

	if (! ( isset( $_GET['post']) || isset( $_POST['post'])  || ( isset($_REQUEST['action']) && 'mk_save_template' == $_REQUEST['action'] ) ) ) {

		wp_die('No post to duplicate has been supplied!');

	}

 
	//$test =  $_GET['titel'];
	//echo "Titel is: ". $test;
	//return; exit;


	/*
	 * Nonce verification
	 */


	//if ( !isset( $_GET['duplicate_nonce'] ) || !wp_verify_nonce( $_GET['duplicate_nonce'], basename( __FILE__ ) ) )
	//	return;


	/*
	 * get the original post id
	 */

	$post_id = (isset($_GET['post']) ? absint( $_GET['post'] ) : absint( $_POST['post'] ) );

	/*
	 * and all the original post data then
	 */

	$post = get_post( $post_id );

 
	/*
	 * if you don't want current user to be the new post author,
	 * then change next couple of lines to this: $new_post_author = $post->post_author;
	 */

	$current_user = wp_get_current_user();

	$new_post_author = $current_user->ID;

	/*
	 * if post data exists, create the post duplicate
	 */

	if (isset( $post ) && $post != null) {

		//$newtitle =  $post->post_type . ' - ' . $post->post_title;

		$newtitle = $_GET['titel'];

		//if( $newtitle == "" ) { $newtitle =  $post->post_title; }


		/*
		 * new post data array
		 */

		$args = array(

			'comment_status' => $post->comment_status,
			'ping_status'    => $post->ping_status,
			'post_author'    => $new_post_author,
			'post_content'   => $post->post_content,
			'post_excerpt'   => $post->post_excerpt,
			'post_name'      => $post->post_name,
			'post_parent'    => $post->post_parent,
			'post_password'  => $post->post_password,
			'post_status'    => 'publish',
			'post_title'     => $newtitle,
			'post_type'      => 'mktemplate',
			'to_ping'        => $post->to_ping,
			'menu_order'     => $post->menu_order

		);

 

		/*
		 * insert the post by wp_insert_post() function
		 */

		$new_post_id = wp_insert_post( $args );



		/*

		 * get all current post terms ad set them to the new post draft

		 */

		//$taxonomies = get_object_taxonomies($post->post_type); // returns array of taxonomy names for post type, ex array("category", "post_tag");

		//foreach ($taxonomies as $taxonomy) {
			//$post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
			//wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
		//}


		$post_terms = array( 'cattemp' => array(  'page'  ) );


		wp_set_object_terms($new_post_id, $post->post_type, 'cattemp', false);

 

		/*
		 * duplicate all post meta just in two SQL queries
		 */

		$post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");

		if (count($post_meta_infos)!=0) {

			$sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";

			foreach ($post_meta_infos as $meta_info) {

				$meta_key = $meta_info->meta_key;

				if( $meta_key == '_wp_old_slug' ) continue;

				$meta_value = addslashes($meta_info->meta_value);

				$sql_query_sel[]= "SELECT $new_post_id, '$meta_key', '$meta_value'";

			}

			$sql_query.= implode(" UNION ALL ", $sql_query_sel);

			$wpdb->query($sql_query);

		}

 
		/*
		 * finally, redirect to the edit post screen for the new draft
		 */

		wp_redirect( admin_url( 'post.php?action=edit&post=' . $post_id ) );

		exit;

	} else {

		wp_die('Post creation failed, could not find original post: ' . $post_id);

	}

}





?>