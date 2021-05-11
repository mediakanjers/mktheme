<?php 
/*
 * Bestands versie: 1.0
 */



/**
 * Alters the bottom left admin text
 *
 * @return string
 */
function oz_alter_wp_admin_bottom_left_text( $text ) 
{
    return '' . 'MK Theme versie: ' . MKTheme_version() . ' - &copy; <a href="https://www.mediakanjers.nl/">Mediakanjers</a>';
}
add_filter( 'admin_footer_text', 'oz_alter_wp_admin_bottom_left_text', 10 ,2);



/*
 * WP Login MK Logo v1.0
 */

function custom_loginlogo()
{
    echo '<style type="text/css">h1 a {background-image: url('. get_template_directory_uri() .'/images/logo_login.png) !important; }</style>';
}

add_action('login_head', 'custom_loginlogo');


/*
 * WP EMOJI UITSCHAKELEN v1.0
 */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );



/*
 * GRAVITYFORMS BUTTON OPMAAK v1.1 
 * Button naar input veranderd!
 */
add_filter( 'gform_submit_button', 'add_custom_css_classes', 10, 2 );

function add_custom_css_classes( $button, $form ) {

    $dom = new DOMDocument();
    $dom->loadHTML( $button );

    $input = $dom->getElementsByTagName( 'input' )->item(0);
    $classes = $input->getAttribute( 'class' );
    $classes .= " mk_button";

    $input->setAttribute( 'class', $classes );

    return $dom->saveHtml( $input );
}





/*
 * SCRIPTS v2.0
 */
function theme_scripts() {

    $mktheme_owl_carousel = esc_attr( get_option( 'mktheme_owl_carousel' ) );
    $mktheme_swiper_slider = esc_attr( get_option( 'mktheme_swiper_slider' ) );
    $mktheme_fancybox = esc_attr( get_option( 'mktheme_fancybox' ) );
    $mktheme_sticky_menu = esc_attr( get_option( 'mktheme_sticky_menu' ) );
    $mktheme_font_awesome = esc_attr( get_option( 'mktheme_font_awesome' ) );

    // load active theme stylesheet
    $mktheme_advanced_stylesheetversie = esc_attr( get_option( 'mktheme_advanced_stylesheetversie' ) );


    if($mktheme_swiper_slider == 1) {
        wp_enqueue_style( 'swiper', get_template_directory_uri(). '/extensions/swiper/v4.1.6/swiper.min.css', array() );
        wp_enqueue_script('swiper', get_template_directory_uri().'/extensions/swiper/v4.1.6/swiper.min.js', array('jquery') );
    } 
    else if($mktheme_swiper_slider == 545 || $mktheme_swiper_slider == 2) {
        wp_enqueue_style( 'swiper', get_template_directory_uri(). '/extensions/swiper/v5.4.5/swiper.min.css', array() );
        wp_enqueue_script('swiper', get_template_directory_uri().'/extensions/swiper/v5.4.5/swiper.min.js', array('jquery') );
    }

 
    if($mktheme_owl_carousel == 1)  {
        wp_enqueue_style( 'owl', get_template_directory_uri(). '/extensions/owl/v2.2.1/owl.carousel.min.css', array() );
        wp_enqueue_script('owl', get_template_directory_uri().'/extensions/owl/v2.2.1/owl.carousel.min.js', array('jquery') );
    } 
    else if($mktheme_owl_carousel == 234 || $mktheme_owl_carousel == 2) {
        wp_enqueue_style( 'owl', get_template_directory_uri(). '/extensions/owl/v2.3.4/owl.carousel.min.css', array() );
        wp_enqueue_script('owl', get_template_directory_uri().'/extensions/owl/v2.3.4/owl.carousel.min.js', array('jquery') );
    }

   
    if($mktheme_fancybox == 1) {
        wp_enqueue_style( 'fancybox', get_template_directory_uri(). '/extensions/fancybox/v3.4.1/jquery.fancybox.min.css', array() );
        wp_enqueue_script('fancybox', get_template_directory_uri().'/extensions/fancybox/v3.4.1/jquery.fancybox.min.js', array('jquery') );
    } 
    else if( $mktheme_fancybox == 357 || $mktheme_fancybox == 2) {
        wp_enqueue_style( 'fancybox', get_template_directory_uri(). '/extensions/fancybox/v3.5.7/jquery.fancybox.min.css', array() );
        wp_enqueue_script('fancybox', get_template_directory_uri().'/extensions/fancybox/v3.5.7/jquery.fancybox.min.js', array('jquery') );
    }


    if($mktheme_sticky_menu == 1) {
        wp_enqueue_script('stickymenu', get_template_directory_uri().'/extensions/sticky/v1.0.4/jquery.sticky.js', array('jquery') );
    }


    if($mktheme_font_awesome == 2)  {
        wp_enqueue_style( 'fontawesome5', get_template_directory_uri(). '/extensions/fontawesome/v5-4/css/all.min.css', array() );
    } 
    else if($mktheme_font_awesome == 1) {
        wp_enqueue_style( 'fontawesome4', get_template_directory_uri(). '/extensions/fontawesome/v4-7/css/font-awesome.min.css', array() );
    }

    wp_enqueue_script('mkscript', get_template_directory_uri().'/js/mk-script.js', array('jquery') );


    $deps = false;

    if (is_child_theme()) {

        $deps = array('parent-styles');
        wp_enqueue_style('parent-styles', trailingslashit(get_template_directory_uri()) .'style.css', false);
    }


    if( $mktheme_advanced_stylesheetversie == "" )
    {
        wp_enqueue_style('theme-styles', get_stylesheet_uri(), $deps);
        wp_enqueue_script('custum-script', get_stylesheet_directory_uri(). '/js/script.js', array('jquery') );
    }
    else {
        wp_enqueue_style('theme-styles', get_stylesheet_uri(), $deps, $mktheme_advanced_stylesheetversie );
        wp_enqueue_script('custum-script', get_stylesheet_directory_uri(). '/js/script.js', array('jquery'), $mktheme_advanced_stylesheetversie );
    }


    wp_enqueue_script('jquery');
    
}

add_action('wp_enqueue_scripts', 'theme_scripts');





/*
 * Update CSS within in Admin v1.0
 */
function admin_style() {

  wp_enqueue_style('admin-styles', get_template_directory_uri().'/core/backend/css/backend.css');

  wp_enqueue_style('admin-builder-styles', get_template_directory_uri().'/core/functions/builder/builder.css');


  wp_enqueue_script('admin-js', get_template_directory_uri().'/core/backend/js/backend.js', array('jquery') );


  wp_enqueue_script('builder-js', get_template_directory_uri().'/core/functions/builder/builder.js', array('jquery') );

  wp_enqueue_script('buildersave-js', get_template_directory_uri().'/core/functions/builder/buildersave.js', array('jquery') );

  wp_enqueue_script('builder-editor-js', get_template_directory_uri().'/core/functions/builder/builder_editor.js', array('jquery') );

  wp_enqueue_script('builder-editor-rij-js', get_template_directory_uri().'/core/functions/builder/builder_editor_rij.js', array('jquery') );

  wp_enqueue_script('builder-editor-sectie-js', get_template_directory_uri().'/core/functions/builder/builder_editor_sectie.js', array('jquery') );

  wp_enqueue_script('builder-init-js', get_template_directory_uri().'/core/functions/builder/builder_init.js', array('jquery') );

  wp_enqueue_script('builder-opslaan-js', get_template_directory_uri().'/core/functions/builder/builder_opslaan.js', array('jquery') );

}

add_action('admin_enqueue_scripts', 'admin_style');





/*
 * Action wp_head
 * Add favicon v1.0
 */
function myfavicon() { 

    ?><link rel="shortcut icon" href="<?php the_field('favicon', 'option'); ?>" /><?php

}

add_action('wp_head', 'myfavicon');





/*
 * Widgets v1.0
 */
function sidebars_init() {

    register_sidebar( array(

        'name' => __( 'Footer Area #1', 'mk_theme_domain' ),
        'id' => 'footer-area-1',
        'class'         => 'mk_footer_wigdet',
        'before_widget' => '<div class="mk_footer_widgets mk_footer_widgets_1">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',

    ) );


    register_sidebar( array(

        'name' => __( 'Footer Area #2', 'mk_theme_domain' ),
        'id' => 'footer-area-2',
        'class'         => 'mk_footer_wigdet',
        'before_widget' => '<div class="mk_footer_widgets mk_footer_widgets_2">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',

    ) );


    register_sidebar( array(

        'name' => __( 'Footer Area #3', 'mk_theme_domain' ),
        'id' => 'footer-area-3',
        'class'         => 'mk_footer_wigdet',
        'before_widget' => '<div class="mk_footer_widgets mk_footer_widgets_3">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',

    ) );


    register_sidebar( array(

        'name' => __( 'Footer Area #4', 'mk_theme_domain' ),
        'id' => 'footer-area-4',
        'class'         => 'mk_footer_wigdet',

        'before_widget' => '<div class="mk_footer_widgets mk_footer_widgets_4">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',

    ) );


     register_sidebar( array(

        'name' => __( 'Zijbalk', 'mk_theme_domain' ),
        'id' => 'zijbalk',
        'class'         => 'mk_zijbalk_wigdet',
        'before_widget' => '<div class="zijbalk">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',

    ) );

}

add_action( 'widgets_init', 'sidebars_init' );





// Google analytics
function add_this_script_footer()
{ 
    $googleAnalytics = esc_attr( get_option( 'mktheme_google_analytics' ) );

    if($googleAnalytics != "")
    {
      echo get_option( 'mktheme_google_analytics' );
    }
}

add_action('wp_footer', 'add_this_script_footer'); 

function add_this_script_head() {

    $headscript = esc_attr( get_option( 'mktheme_head_script' ) );

    if($headscript != "")
    {
      echo get_option( 'mktheme_head_script' );
    }
}
add_action('wp_head', 'add_this_script_head');



/*
 * MK Settings init image thumbnails v2.0
 */
add_action( 'after_setup_theme', 'wpdocs_theme_setup' );

function wpdocs_theme_setup() {
    //v2

    //mk_thumb_large
    $mktheme_thumb_large_width = esc_attr( get_option( 'mktheme_thumb_large_width' ) );
    $mktheme_thumb_large_height = esc_attr( get_option( 'mktheme_thumb_large_height' ) );
    $mktheme_thumb_large_crop = esc_attr( get_option( 'mktheme_thumb_large_crop' ) );

    if( $mktheme_thumb_large_width != null && $mktheme_thumb_large_width != 0)
    {
        if($mktheme_thumb_large_crop == 1) {  add_image_size( "mk_thumb_large", $mktheme_thumb_large_width, $mktheme_thumb_large_height, true ); } 
        else { add_image_size( "mk_thumb_large", $mktheme_thumb_large_width, $mktheme_thumb_large_height, false ); }   
    }

    
    //mk_thumb_medium
    $mktheme_thumb_medium_width = esc_attr( get_option( 'mktheme_thumb_medium_width' ) );
    $mktheme_thumb_medium_height = esc_attr( get_option( 'mktheme_thumb_medium_height' ) );
    $mktheme_thumb_medium_crop = esc_attr( get_option( 'mktheme_thumb_medium_crop' ) );

    if( $mktheme_thumb_medium_width != null && $mktheme_thumb_medium_width != 0)
    {
        if($mktheme_thumb_medium_crop == 1) {  add_image_size( "mk_thumb_medium", $mktheme_thumb_medium_width, $mktheme_thumb_medium_height, true ); } 
        else { add_image_size( "mk_thumb_medium", $mktheme_thumb_medium_width, $mktheme_thumb_medium_height, false ); }  
    }


    //mk_thumb_small
    $mktheme_thumb_small_width = esc_attr( get_option( 'mktheme_thumb_small_width' ) );
    $mktheme_thumb_small_height = esc_attr( get_option( 'mktheme_thumb_small_height' ) );
    $mktheme_thumb_small_crop = esc_attr( get_option( 'mktheme_thumb_small_crop' ) );

    if( $mktheme_thumb_small_width != null && $mktheme_thumb_small_width != 0)
    {
        if($mktheme_thumb_small_crop == 1) {  add_image_size( "mk_thumb_small", $mktheme_thumb_small_width, $mktheme_thumb_small_height, true ); } 
        else { add_image_size( "mk_thumb_small", $mktheme_thumb_small_width, $mktheme_thumb_small_height, false ); }  
    }


    //mk_large
    $mktheme_img_large_width = esc_attr( get_option( 'mktheme_img_large_width' ) );
    $mktheme_img_large_height = esc_attr( get_option( 'mktheme_img_large_height' ) );
    $mktheme_img_large_crop = esc_attr( get_option( 'mktheme_img_large_crop' ) );

    if( $mktheme_img_large_width != null && $mktheme_img_large_width != 0)
    {
        if($mktheme_img_large_crop == 1) {  add_image_size( "mk_large", $mktheme_img_large_width, $mktheme_img_large_height, true ); } 
        else { add_image_size( "mk_large", $mktheme_img_large_width, $mktheme_img_large_height, false ); } 
    }


    //mk_full
    $mktheme_img_full_width = esc_attr( get_option( 'mktheme_img_full_width' ) );
    $mktheme_img_full_height = esc_attr( get_option( 'mktheme_img_full_height' ) );
    $mktheme_img_full_crop = esc_attr( get_option( 'mktheme_img_full_crop' ) );

    if( $mktheme_img_full_width != null && $mktheme_img_full_width != 0)
    {
        if($mktheme_img_full_crop == 1) {  add_image_size( "mk_full", $mktheme_img_full_width, $mktheme_img_full_height, true ); } 
        else { add_image_size( "mk_full", $mktheme_img_full_width, $mktheme_img_full_height, false ); } 
    }


    //mk_full
    $mktheme_img_max_width = esc_attr( get_option( 'mktheme_img_max_width' ) );
    $mktheme_img_max_height = esc_attr( get_option( 'mktheme_img_max_height' ) );
    $mktheme_img_max_crop = esc_attr( get_option( 'mktheme_img_max_crop' ) );

    if( $mktheme_img_max_width != null && $mktheme_img_max_width != 0)
    {
        if($mktheme_img_max_crop == 1) {  add_image_size( "mk_max", $mktheme_img_max_width, $mktheme_img_max_height, true ); } 
        else { add_image_size( "mk_max", $mktheme_img_max_width, $mktheme_img_max_height, false ); }
    }




    //custom1
    $mktheme_img_custom1_naam = esc_attr( get_option( 'mktheme_img_custom1_naam' ) );

    if( $mktheme_img_custom1_naam != "")
    {
        $mktheme_img_custom1_width = esc_attr( get_option( 'mktheme_img_custom1_width' ) );
        $mktheme_img_custom1_height = esc_attr( get_option( 'mktheme_img_custom1_height' ) );
        $mktheme_img_custom1_crop = esc_attr( get_option( 'mktheme_img_custom1_crop' ) );

        if( $mktheme_img_custom1_width != null && $mktheme_img_custom1_width != 0)
        {
            if($mktheme_img_custom1_crop == 1) {  add_image_size( $mktheme_img_custom1_naam, $mktheme_img_custom1_width, $mktheme_img_custom1_height, true ); } 
            else { add_image_size( $mktheme_img_custom1_naam, $mktheme_img_custom1_width, $mktheme_img_custom1_height, false ); }
        }
    }

    //custom2
    $mktheme_img_custom2_naam = esc_attr( get_option( 'mktheme_img_custom2_naam' ) );

    if( $mktheme_img_custom2_naam != "")
    {
        $mktheme_img_custom2_width = esc_attr( get_option( 'mktheme_img_custom2_width' ) );
        $mktheme_img_custom2_height = esc_attr( get_option( 'mktheme_img_custom2_height' ) );
        $mktheme_img_custom2_crop = esc_attr( get_option( 'mktheme_img_custom2_crop' ) );

        if( $mktheme_img_custom2_width != null && $mktheme_img_custom2_width != 0)
        {
            if($mktheme_img_custom2_crop == 1) {  add_image_size( $mktheme_img_custom2_naam, $mktheme_img_custom2_width, $mktheme_img_custom2_height, true ); } 
            else { add_image_size( $mktheme_img_custom2_naam, $mktheme_img_custom2_width, $mktheme_img_custom2_height, false ); }
        }
    }

    //custom3
    $mktheme_img_custom3_naam = esc_attr( get_option( 'mktheme_img_custom3_naam' ) );

    if( $mktheme_img_custom3_naam != "")
    {
        $mktheme_img_custom3_width = esc_attr( get_option( 'mktheme_img_custom3_width' ) );
        $mktheme_img_custom3_height = esc_attr( get_option( 'mktheme_img_custom3_height' ) );
        $mktheme_img_custom3_crop = esc_attr( get_option( 'mktheme_img_custom3_crop' ) );

        if( $mktheme_img_custom3_width != null && $mktheme_img_custom3_width != 0)
        {
            if($mktheme_img_custom3_crop == 1) {  add_image_size( $mktheme_img_custom3_naam, $mktheme_img_custom3_width, $mktheme_img_custom3_height, true ); } 
            else { add_image_size( $mktheme_img_custom3_naam, $mktheme_img_custom3_width, $mktheme_img_custom3_height, false ); }
        }
    }

   

}
//function wpdocs_theme_setup()



//UItgelichte afbeelding posts
if ( ! function_exists( 'add_uitgelichte_afbeelding' ) ) {

    function add_uitgelichte_afbeelding() 
    { 
        add_theme_support( 'post-thumbnails' );  
    }

    add_action( 'init', 'add_uitgelichte_afbeelding' );
}


//Include een module uit de map /modules/
function the_mk_module( $map, $file ) {

    if (file_exists( get_stylesheet_directory(). '/modules/'. $map .'/'. $file )) {

        //Laad the theme file
        include( get_stylesheet_directory(). '/modules/'. $map .'/'. $file);

    } else  {

        //Laad the core file
        include( get_template_directory(). '/modules/'. $map .'/'. $file);
    }

} // end function the_mk_module




//Nodig voor het lezen van de website door de dashboard website!
// function add_mk_dashboard_header_origin() {
//     header( 'Access-Control-Allow-Origin: https://mktheme.media-kanjers.nl' );
// }

// $mktheme_advanced_headers = esc_attr( get_option( 'mktheme_advanced_headers' ) );

// if( $mktheme_advanced_headers != 1 ) {
//     add_action( 'init', 'add_mk_dashboard_header_origin' );
// }



//Crop
$croptool = esc_attr( get_option( 'mktheme_crop_thumb_activeren' ) );

if(  $croptool == 1)
{
    add_filter('crop_thumbnails_activat_on_adminpages', function($oldValue) {
        global $pagenow;
        return $oldValue || $pagenow==='admin.php';//for adding taxonomy edit-page to the list of pages where crop-thumbnails work
    });

}


$resetpasswords = esc_attr( get_option( 'mktheme_advanced_resetpasswords' ) );

if(  $resetpasswords != 1)
{
    $users = get_users( );
    foreach($users as $user){
    if( $user->user_login != "Mediakanjers" && $user->user_login != "mediakanjers")
    {
        //print_r($user->user_login );
        add_filter ( 'allow_password_reset', 'disable_password_reset', $user->ID );
    }
    }

    function disable_password_reset() { 
        return false;
    }
}


?>