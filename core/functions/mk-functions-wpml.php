<?php
$acf_wpml_active = esc_attr( get_option( 'mktheme_acf_wpml_activeer' ) );

if( $acf_wpml_active == 1)
{
    $mktheme_acf_wpml_optionspages = esc_attr( get_option( 'mktheme_acf_wpml_optionspages' ) );
    $acf_wpml_optionspages = explode(",", $mktheme_acf_wpml_optionspages);

    if( $acf_wpml_optionspages != null)
    {
        //USE ACF OPTIONS GLOBALLY FROM DEFAULT LANGUAGE
        add_filter( 'acf/validate_post_id', function( $post_id, $original_post_id ) {

            $mktheme_acf_wpml_optionspages = esc_attr( get_option( 'mktheme_acf_wpml_optionspages' ) );
            $acf_wpml_optionspages = explode(",", $mktheme_acf_wpml_optionspages);

            $page = null;

            if(isset($_GET['page'])) {

                $page = $_GET['page'];
            }

            foreach($acf_wpml_optionspages as $type) {
                if( $page == $type )
                {
                    if( strpos($post_id, 'options_') === 0 ) { //postfix detection
                        $post_id = 'options';
                    }
                }
            }

            // if( $page == "acf_mktheme" )
            // {
            //     if( strpos($post_id, 'options_') === 0 ) { //postfix detection
            //         $post_id = 'options';
            //     }
            // }

            return $post_id; //FILTER! MUST RETURN!
        }, 10, 2 );

    }

}

    //replace for the_field()
    function wpml_the_field($name, $id) {
       // echo esc_attr( get_option( 'options_' . $name ) );

        if( esc_attr( get_option( 'mktheme_acf_wpml_activeer' ) ) == 1)
        {
            echo esc_attr( get_option( 'options_' . $name ) );
        }
        else{
            the_field($name, 'options');
        }
    }

    //replace for get_field()
    function wpml_get_field($name, $id) {

        if( esc_attr( get_option( 'mktheme_acf_wpml_activeer' ) ) == 1)
        {
            return esc_attr( get_option( 'options_' . $name ) );
        }
        else{
            return get_field($name, 'options');
        }
    }


    function wpml_acf_shortcode( $atts ) {

        $atts = shortcode_atts(
            array(
                'field' => '',
                'post_id' => '',
            ),
            $atts
        );

        if( $atts['post_id'] == "option" || $atts['post_id'] == "options")
        {
            ob_start();

            if( esc_attr( get_option( 'mktheme_acf_wpml_activeer' ) ) == 1)
            {
                echo esc_attr( get_option( 'options_' . $atts['field'] ) );
            }
            else{
                echo do_shortcode('[acf field="'. $atts['field'] .'" post_id="options"]');
            }

           

            return ob_get_clean();
        }

    }
    add_shortcode( 'wpml_acf', 'wpml_acf_shortcode' );


    function wpml_acf_set_language() {
        return acf_get_setting('default_language');
    }

    function wpml_acf_default_lang_set() {
        if( esc_attr( get_option( 'mktheme_acf_wpml_activeer' ) ) == 1) { add_filter('acf/settings/current_language', 'wpml_acf_set_language', 100); }
    }

    function wpml_acf_default_lang_remove() {
        if( esc_attr( get_option( 'mktheme_acf_wpml_activeer' ) ) == 1) { remove_filter('acf/settings/current_language', 'wpml_acf_set_language', 100); }
    }


    /*
    <?php add_filter('acf/settings/current_language', 'cl_acf_set_language', 100); ?>

				<p id="footer-info">Slider :  <?php echo get_field('slider', 'options')[0]['titel']; ?></p>

<?php 
remove_filter('acf/settings/current_language', 'cl_acf_set_language', 100);
?>
//*/

    //For group and repeater field use this. add > before, remove > after.
    //add_filter('acf/settings/current_language', 'cl_acf_set_language', 100);
    //remove_filter('acf/settings/current_language', 'cl_acf_set_language', 100);

//}
?>