<?php 

/*
 * Bestands versie: 1.0
 */


/*
 * MK Theme menu v1.0
 */
if( function_exists('acf_add_options_page') ) {
    
    // add parent
    $parent = acf_add_options_page(array(
        'page_title'    => 'MK Theme',
        'menu_title'    => 'MK Theme',
        'position'      => '99998',
        'redirect'      => true
    ));
    
    // add sub page opties
    acf_add_options_sub_page(array(
        'page_title'    => 'MK Theme Algemeen',
        'menu_title'    => 'Algemeen',
        'menu_slug'     => 'acf_mktheme',
        'parent_slug'   => $parent['menu_slug'],
    ));

    // add sub page opties
    acf_add_options_sub_page(array(
        'page_title'    => 'MK Theme Slider',
        'menu_title'    => 'Slider',
        'menu_slug'     => 'acf_mkslider',
        'parent_slug'   => $parent['menu_slug'],
    ));

     // add sub page opties
    acf_add_options_sub_page(array(
        'page_title'    => 'MK Theme Opties',
        'menu_title'    => 'Opties',
        'menu_slug'     => 'acf_mkopties',
        'parent_slug'   => $parent['menu_slug'],
    ));


    $mktheme_pagina_add_pages = esc_attr( get_option( 'mktheme_pagina_add_pages' ) );
    $addpages = explode(",", $mktheme_pagina_add_pages);


    foreach($addpages as $addpage) {

        if( $addpage != null ) 
        {
            $slug = strtolower($addpage);
            $slug = str_replace(" ", "_", $slug);
        
            acf_add_options_sub_page(array(
                'page_title'    => 'MK Theme ' . $addpage,
                'menu_title'    => $addpage,
                'menu_slug'     => 'acf_mk' .$slug,
                'parent_slug'   => $parent['menu_slug'],
            ));
        }
       
    }

    

    //Settings
     if( have_rows('opties_paginas', 'options') ): while ( have_rows('opties_paginas', 'options') ) : the_row(); //

		// add sub page footer
		acf_add_options_sub_page(array(
		    'page_title'    => get_sub_field('pagina_titel'),
		    'menu_title'    => get_sub_field('menu_titel'),
		    'menu_slug'     => get_sub_field('menu_slug'),
		    'parent_slug'   => $parent['menu_slug'],
		));

    endwhile; endif;
}




//ACF content management  dirname(__FILE__)//echo __DIR__;//echo get_template_directory();
function the_mk_acf_layout() {

    if (file_exists( get_stylesheet_directory(). '/modules/content-management/mk_acf_layout.php' )) {

        //Laad the theme file
        require_once( get_stylesheet_directory(). '/modules/content-management/mk_acf_layout.php');

    } else  {

        //Laad the core file
        require_once( get_template_directory(). '/modules/content-management/mk_acf_layout.php');

    }
} //end function the_mk_acf_layout 


// Acf fields mk_field
function mk_acf_field($field, $option) {

    $value = "";

    if($option == true)
    {
        $value = get_field($field, 'option');
    }
    else
    {
        $value = get_field($field);
    }

    return $value;
}

//mk_group_field
function mk_acf_group_field($group, $field, $option) {

    $value = "";

    if($option == true)
    {
        if( have_rows($group, 'option') ): while ( have_rows($group, 'option') ) : the_row(); //groep

            $value = get_sub_field($field, 'option');

        endwhile; endif; //end groep
    }
    else
    {
        if( have_rows($group) ): while ( have_rows($group) ) : the_row(); //groep

            $value = get_sub_field($field);

        endwhile; endif; //end groep
    }

    return $value;
}


/*
 * MK acf excerpt v1.0
 */
function mk_acf_excerpt($length)
{
    //$value = "test: " . the_title();

    $value = checkacflayout();

    $valuetext = htmlspecialchars(trim(strip_tags($value)));

    $valuetext = substr($valuetext, 0, $length);

    return $valuetext;
}


function checkacflayout()
{
 $content = "";

 if( have_rows('content_management') ): while ( have_rows('content_management') ) : the_row(); //herhalen 

     if( have_rows('columns') ): while ( have_rows('columns') ) : the_row(); //flex content

         if( get_row_layout() == '1_column' ): 

             if( have_rows('column_1') ): while ( have_rows('column_1') ) : the_row(); //kloon

                 if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon

                     //Add fuction();
                     //include 'mk_modules.php';
                     $content .= checkacfmodules();

                 endwhile; endif; //end kloon

             endwhile; endif;

         elseif( get_row_layout() == '2_column' ):

             if( have_rows('column_1') ): while ( have_rows('column_1') ) : the_row(); //kloon

                 if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon

                     //Add fuction();
                     //include 'mk_modules.php';
                     $content .= checkacfmodules();

                 endwhile; endif; //end kloon

             endwhile; endif;


             if( have_rows('column_2') ): while ( have_rows('column_2') ) : the_row(); //kloon

                 if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon

                     //Add fuction();
                     //include 'mk_modules.php';
                     $content .= checkacfmodules();

                 endwhile; endif; //end kloon

             endwhile; endif;

         endif; //end kolom layout

     endwhile; endif;

 endwhile; endif;

 return $content;
}


function checkacfmodules()
{
 $content = "";

 if( have_rows('modules') ): while ( have_rows('modules') ) : the_row(); //flex 

     if( get_row_layout() == 'titel' ):  

         $content .= get_sub_field('titel');

      elseif( get_row_layout() == 'tekst' ): 

         $content .= get_sub_field('tekst');

     endif; //end module layout

 endwhile; endif; //end flex

 return $content;
}

?>