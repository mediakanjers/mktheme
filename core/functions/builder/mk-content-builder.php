<?php

/*
 * Bestands versie: 2.0
 */

/*
 * Create box op de pagina
 */

function add_mk_builder_meta_box()
{
	$mktheme_builder = esc_attr( get_option( 'mktheme_builder' ) );

	$types = explode(",", $mktheme_builder);

  foreach($types as $type){

      add_meta_box('mk_builder_metabox', 'MK Theme Builder', 'function_mk_builder_metabox', $type, 'advanced', 'high');

  }
}
add_action('add_meta_boxes', 'add_mk_builder_meta_box'); 



function add_mk_builder_editor_meta_box()
{
	$mktheme_builder = esc_attr( get_option( 'mktheme_builder' ) );

	$types = explode(",", $mktheme_builder);

  foreach($types as $type){

      add_meta_box('mk_builder_editor_metabox', 'MK Theme Builder Editor', 'function_mk_builder_editor_metabox', $type, 'advanced', 'high');

  }
}
add_action('add_meta_boxes', 'add_mk_builder_editor_meta_box'); 




function function_mk_builder_editor_metabox()
{
?>

<div class="mk_editor_container">

	<div class="mk_editor_inner">

		<div class="mk_editor_titel_bar">

			<div class="mk_editor_module_naam"></div>

			<div class="mk_editor_module_id"></div>

			<div id="close_mk_editor" class="close_mk_editor" onclick="close_mk_editor()"></div>

		</div>

		<div class="mk_editor_module_container">

			<div class="mk_editor_module_tekst mk_editor_section">

				<div class="mk_editor_section_titel">Tekst editor</div>

				<div id="mk_builder_tekst_editor_wrapper">

					<?php wp_editor("", 'mkbuilderteksteditor' ); ?>

				</div>

			</div>

		</div>

	</div>

</div>

  <?php

  wp_enqueue_editor();

}


// UPLOAD ENGINE
function load_wp_media_files() {

    wp_enqueue_media();

}

add_action( 'admin_enqueue_scripts', 'load_wp_media_files' );


function function_mk_builder_metabox()
{
  global $post;


  $builder_debug = esc_attr( get_option( 'mktheme_builder_debug' ) );
  $builder_klant_edit = esc_attr( get_option( 'mktheme_builder_klant_edit' ) );
  $builder_klant_create = esc_attr( get_option( 'mktheme_builder_klant_create' ) );
  $builder_klant_advanced = esc_attr( get_option( 'mktheme_builder_klant_advanced_edit' ) );
  $builder_klant_admin = esc_attr( get_option( 'mktheme_builder_klant_admin_edit' ) );
  $builder_cache_editor = esc_attr( get_option( 'mktheme_builder_cache_editor' ) );
  
  $crop_thumb_activeren = esc_attr( get_option( 'mktheme_crop_thumb_activeren' ) );
  $headersize = esc_attr( get_option( 'mktheme_crop_thumb_header' ) );
  $achtergrondsize = esc_attr( get_option( 'mktheme_crop_thumb_achtergrond' ) );


  $builder_posttype_galerijen = esc_attr( get_option( 'mktheme_galerijen' ) );

  if( $builder_posttype_galerijen == null || $builder_posttype_galerijen == "" )
  {
    $builder_posttype_galerijen = 0;
  } else {
    $builder_posttype_galerijen = 1;
  }


  if(is_user_logged_in()) {
      $user = wp_get_current_user();
      $role = (array) $user->roles;


  } 


  ?>

  <div class="classbuilder" >

  	<ul class="classbuilderinner" >

    </ul>
    
    <?php if( $builder_klant_create == 0 || $role[0] == "administrator") { ?>
      
      <div class="addnieuwtitel addsectie"><input  style=" padding: 15px; line-height: 0;" name="addSectie" id="addSectie" type="button" value="Nieuwe sectie" /></div>

    <?php } ?>

    <div class="mkbuilder_gegevens" 
      roleadmin="<?php if( $role[0] == "administrator" ) { echo '1'; } ?>"
      debug="<?php echo $builder_debug; ?>" 
      klant_edit="<?php echo $builder_klant_edit; ?>"
      klant_create="<?php echo $builder_klant_create; ?>" 
      klant_advanced="<?php echo $builder_klant_advanced; ?>" 
      klant_admin="<?php echo $builder_klant_admin; ?>" 
      cache_editor="<?php echo $builder_cache_editor; ?>"

      croptool="<?php echo $crop_thumb_activeren; ?>"
      cropheader="<?php echo $headersize; ?>"
      cropachtergrond="<?php echo $achtergrondsize; ?>"
      
      posttype_galerijen="<?php echo $builder_posttype_galerijen; ?>"
      innerdivs="<?php echo esc_attr( get_option( 'mktheme_innerdivs' ) ) ?>"
      imagesize="<?php echo esc_attr( get_option( 'mktheme_image_size' ) ) ?>"
      galerijsize="<?php echo esc_attr( get_option( 'mktheme_galerij_size' ) ) ?>"

      module_tekst="<?php echo esc_attr( get_option( 'mktheme_module_tekst' ) ) ?>"
      module_titel="<?php echo esc_attr( get_option( 'mktheme_module_titel' ) ) ?>"
      module_afbeelding="<?php echo esc_attr( get_option( 'mktheme_module_afbeelding' ) ) ?>"
      module_galerij="<?php echo esc_attr( get_option( 'mktheme_module_galerij' ) ) ?>"
      module_code="<?php echo esc_attr( get_option( 'mktheme_module_code' ) ) ?>"
      module_knop="<?php echo esc_attr( get_option( 'mktheme_module_knop' ) ) ?>"

      ad_module_video="<?php echo esc_attr( get_option( 'mktheme_module_video' ) ) ?>"
      
      standaard_editor="<?php echo esc_attr( get_option( 'mktheme_standaard_editor' ) ); ?>"
      post_id="<?php echo $post->ID; ?>"
      startupbuilder="<?php echo get_post_meta($post->ID, 'startupbuilder', true); ?>"
      domain="<?php bloginfo('url'); ?>"
      >
    </div>

  </div>

  <div class="builderprullenbak">
    <div class="titel">Prullenbak<span></span><div onclick="prullenbaktoggle()" class="opendicht"></div></div>
    <div class="inner">
      <ul class="bp_modules newrij_inner_prullenbak"></ul>
      <ul class="bp_rijen newsectie_inner_prullenbak"></ul>
      <ul class="bp_secties classbuilderinner_prullenbak"></ul>
    </div>
  </div>

<div class="builderattributes">
    
  <?php

    $content = wpautop( $post->post_content );

    echo '<div><textarea id="readcontent" style="width:400px; height:200px; display:block;">' . $content . '</textarea></div>';

  ?>

<div style="display:inline-block; width:100%;">

  	<input class="button-primary" style=" padding: 15px; line-height: 0; float: right; display: none;" name="getdata" id="getdata" type="button" value="Get alle data" />

  	<input class="button-primary" style=" padding: 15px; line-height: 0; float: right;" name="savedata" id="savedata" type="button" value="Save alle data" />

    <input class="button-primary" style=" padding: 15px; line-height: 0; float: right;" name="getdatanew" id="getdatanew" type="button" value="get data new" />

    <input class="button-primary" style=" padding: 15px; line-height: 0; float: right;" name="CreateData" id="CreateData" type="button" value="Create Data" />

</div>

   <div class="displaydata" style="">

   </div>


<div class="displaydatanew" style="">

	<textarea class="testarea" style="width: 100%; height: 400px;"></textarea>

	<div class="divtestareaa"></div>

   </div>

<div id="mk_thumbnail_options">
    
  <?php
  $sizes_array = get_intermediate_image_sizes();

  echo '<select  onchange="afbeelding_select_thumb_changed();">';

  echo '<option  value="" selected>Geen</option>';

  foreach ($sizes_array as $key => $value) {

    echo '<option value="'.$value.'">'.$value.'</option>';
  }

  echo '</select>';
  ?>

</div>

<!-- alle paginas in de webiste -->

<?php 
   $posttypes = get_post_types(array('public' => true, ), 'names', 'and');
?>

<div id="allepaginas">

    <div class="allepaginas_menu">
        <ul>
        <?php
            foreach ($posttypes as $post_type)
            {
                if($post_type != "attachment" && $post_type != "mktemplate") 
                { 
                    if( $post_type == "post") { $post_type = 'berichten'; }
                    if( $post_type == "page") { $post_type = 'pagina\'s'; }

                    echo '<li id="knop_type_'.$post_type.'">'.$post_type.'<div style="display:none;">'; var_dump( $post_type ); '</div></li>';
                }
            }
        ?>
        </ul>
    </div>

    <div class="allepaginas_items">

        <div class="allepaginas_inner">

        <?php

            //$posttypes = get_post_types(array('public' => true), 'names', 'and');

            foreach ($posttypes as $post_type)
            {

            if($post_type != "attachment" && $post_type != "mktemplate") { 

               

                $postslinks = get_posts(array(

                    'post_type' => $post_type,
                    'posts_per_page'   => -1,
                    'suppress_filters' => 0,

                ));

                if( $post_type == "post") { $post_type = 'berichten'; }
                if( $post_type == "page") { $post_type = 'pagina\'s'; }

                echo '<div class="paginatype" id="knop_type_'.$post_type.'"><div class="titel">'.$post_type.'</div>';

                echo '<div class="paginas">';

                //var_dump($postslinks);

                $siteurl = get_bloginfo('url');

                foreach ($postslinks as $pagina)
                {
                //echo get_permalink( $pagina->ID );

                $url = get_permalink( $pagina->ID );
                $slug = str_replace($siteurl,"", $url);

                echo '<div class="paginalink" paginaid="'.$pagina->ID.'" paginatype="" paginaslug="'.$slug.'" onclick="addlink(this)">'.$pagina->post_title.'</div>';
                }
                
                echo '</div></div>';
            }

            }

        ?>

        </div>
    </div>

</div>

<!-- alle paginas in de webiste -->


  <?php  $builder_galerijen = esc_attr( get_option( 'mktheme_galerijen' ) );  if( $builder_galerijen != null ) { ?>
    <div id="mk_post_galerijen">

      <?php 
        $postslinks = get_posts(array(

          'post_type' => $builder_galerijen,
          'posts_per_page'   => -1

        ));

        echo '<select>';
        echo '<option value="" selected>Geen</option>';

        foreach ($postslinks as $pagina)
        {
          $url = get_permalink( $pagina->ID );
          $slug = str_replace($siteurl,"", $url);

          echo '<option value="'.$pagina->ID.'">'.$pagina->post_title.'</option>';
        }
      
        echo '</select>';
      ?>

    </div>
  <?php } ?>

</div><!-- builder attr -->

  <?php

}

 require( ABSPATH . WPINC . '/class-wp-editor.php' );

if ( ! class_exists( '_WP_Editors', false ) ) {

}

add_action( 'admin_print_footer_scripts', array( '_WP_Editors', 'print_default_editor_scripts' ) );






// register the ajax action for authenticated users
add_action('wp_ajax_mk_builder_use', 'update_builder_use');

// register the ajax action for unauthenticated users
add_action('wp_ajax_nopriv_mk_builder_use', 'update_builder_use');

// handle the ajax request
function update_builder_use() {

    $post_id = $_REQUEST['post_id'];
    $builder = $_REQUEST['builder'];
    ////builder
  
    $builderkey = 'startupbuilder';
    $buildermeta = get_post_meta($post_id, $builderkey, true);
    
    //Create database key
	if($buildermeta == "")
	{
		delete_post_meta($post_id, $builderkey);
		add_post_meta($post_id, $builderkey, $builder);
    }
    else
    {
        update_post_meta( $post_id, $builderkey, $builder);
    }

 
    die();
}





?>