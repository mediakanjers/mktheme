<?php 

/*
 * Create box op de pagina
 */

add_action('add_meta_boxes', 'add_builder_opslaan_laden'); 


//Add on all post types, from settings page.
function add_builder_opslaan_laden() 
{
	$mktheme_builder = esc_attr( get_option( 'mktheme_builder' ) );

  	$types = explode(",", $mktheme_builder);

 	foreach($types as $type){
    	add_meta_box('mk-builder-opslaan-laden', 'MK Theme Opslaan/Laden', 'mk_builder_opslaan_laden', $type, 'advanced', 'high');
	}
}


function mk_builder_opslaan_laden()
{
	$templates = get_mk_builder_modules(  'mktheme_sectie' );
	
	//$templates = get_mk_builder_pages(  'mktheme_sectie' );


	$mktheme_builder = esc_attr( get_option( 'mktheme_builder' ) );

	$types = explode(",", $mktheme_builder);

	foreach($types as $type){


	}


	?>

	<div class="mk_editor_titel_bar">

		<div class="mk_editor_module_naam">Template Laden & Opslaan</div>

		<div class="mk_editor_module_id"></div>

		<div class="mk_editor_url" domein="<?php bloginfo('url'); ?>"></div>

		<div id="close_mk_editor" class="close_mk_editor" onclick="close_mk_ladenopslaan()"></div>

	</div>


	<div class="mktheme_opslaanladen_menu">

		<ul>
			<?php if ( !empty($templates) ) { ?>
				<li id="op_secties" class="active">Sectie</li>
			<?php } ?>

			<?php  foreach($types as $type) {  
				$titel = "";
				if( $type == "post") { $titel = 'berichten'; }
				else if( $type == "page") { $titel = 'pagina\'s'; }
				else { $titel = $type; }
				?>

				<li id="op_<?php echo $type; ?>"><?php echo $titel; ?></li>
			<?php } ?>
		</ul>

	</div>

	<div class="mktheme_opslaanladen">
	
		<?php
		if ( !empty($templates) ) { ?>

            <div class="overzicht_opslaanladen secties" id="op_secties">
				<h1>Sectie's</h1>
				<div class="overzicht_inner">

					<?php foreach($templates as $template): ?>

						<div class="item" value="<?php echo $template->ID; ?>">
							<div class="inner">
								<?php echo $template->post_title; ?>
								<textarea><?php // echo $template->post_content; ?></textarea>
							</div>
						</div>

					<?php endforeach; ?>

				</div>
            </div>

		<?php } ?>


		<?php  foreach($types as $type) { 
			$titel = "";
			if( $type == "post") { $titel = 'berichten'; }
			else if( $type == "page") { $titel = 'pagina\'s'; }
			else { $titel = $type . ' pagina\'s'; }
			?>

			<div class="overzicht_opslaanladen secties hide" id="op_<?php echo $type; ?>">
				<h1><?php echo $titel; ?></h1>
				<div class="overzicht_inner">

					<?php $pages = get_mk_builder_pages( $type ); foreach($pages as $page): if(  $page->post_title != null ) {  ?>

						<div class="item" value="<?php echo $page->ID; ?>">
							<div class="inner">
								<?php echo $page->post_title; ?>
								<textarea><?php // echo $page->post_content; ?></textarea>
							</div>
						</div>

					<?php } endforeach; ?>

				</div>
            </div>


		<?php } ?>

			

    </div>
	
<?php
}



/*
 * Get Template data
 */
function get_mk_builder_modules( $type ) {

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


function get_mk_builder_pages( $type ) {

	return get_posts( array(

		'posts_per_page' => -1,
		'post_type'      =>  $type,
		'orderby'        => 'post_title',
		'order'          => 'ASC',

		'post_status'    => 'publish'

		)
	
	);
}










// register the ajax action for authenticated users
add_action('wp_ajax_mk_retrieve_content', 'mk_content_retrieve');

// register the ajax action for unauthenticated users
//add_action('wp_ajax_nopriv_mk_retrieve_content', 'mk_save_sectie_opslaan');

// handle the ajax request
function mk_content_retrieve() {

	$post_id = $_REQUEST['post_id'];

	$post_content = get_post($post_id);
	$content = $post_content->post_content;


	//$content = get_post_field('post_content', $post_id);
	

	wp_send_json_success( $content );
	
    wp_send_json_error([/* some data here */ ]);
}









// register the ajax action for authenticated users
add_action('wp_ajax_mk_save_sectie', 'mk_save_sectie_opslaan');

// register the ajax action for unauthenticated users
//add_action('wp_ajax_nopriv_mk_save_sectie', 'mk_save_sectie_opslaan');

// handle the ajax request
function mk_save_sectie_opslaan() {

	$content = $_REQUEST['content'];
	$title = $_REQUEST['title'];

    // Create post object
    $my_post = array(
        'post_title'    => $title,
        'post_content'  => $content,
        'post_status'   => 'publish',
        'post_author'   => 1,
		'post_type'     => 'mktemplate',
		
		'post_category' => array($new_cat_ID),


    );
        
    // Insert the post into the database
	$new_post_id = wp_insert_post( $my_post );

	//Add categorie!
	wp_set_object_terms($new_post_id, 'mktheme_sectie', 'cattemp', false);


    $message = 'oke';
    wp_send_json_success([ $message ]);
    wp_send_json_error([/* some data here */ ]);
}










?>