<?php
if ( is_user_logged_in() ) {
    add_filter('body_class','add_role_to_body');
    add_filter('admin_body_class','add_role_to_body');
}

function add_role_to_body($classes) {
    $current_user = new WP_User(get_current_user_id());
    $user_role = array_shift($current_user->roles);

    if (is_admin()) {
        //backend
        $classes .= ' mk-role-'. $user_role . ' noindex-'. esc_attr( get_option( 'blog_public' ) );

        $clearrocket = esc_attr( get_option( 'mktheme_advanced_clearrocket' ) );
        if( $clearrocket == 1) { $classes .= ' mk_clear_rocket'; }

    } else {
        //frontend
        $classes[] = ' mk-role-'. $user_role . ' noindex-'. esc_attr( get_option( 'blog_public' ) );
    }


    return $classes;
}




$crop_thumb_activeren = esc_attr( get_option( 'mktheme_crop_thumb_activeren' ) );

if( $crop_thumb_activeren == 1)
{
    function mk_crop_thumbnails()
    {
        $headersize = esc_attr( get_option( 'mktheme_crop_thumb_header' ) );
        $achtergrondsize = esc_attr( get_option( 'mktheme_crop_thumb_achtergrond' ) );


        global $_wp_additional_image_sizes;

        $allthumbsizes = array("thumbnail");

        foreach ($_wp_additional_image_sizes as $key => $value) {

            if( $value["crop"] == 1)
            {
                array_push($allthumbsizes, $key);
            }
        }

        echo '<div id="mk_all_crop_sizes">';

        foreach ($allthumbsizes as $key => $value) {

            echo '<div value="'.$value.'">'.$value.'</div>';
        }

        echo '</div>';

    }
    add_action('admin_footer', 'mk_crop_thumbnails'); 

}

?>