<?php

/*
  Bestands versie: 1.1
*/


/*
  ACF shortcodes!
  [mk-image-thumb name='blog_afbeelding' size='mk_thumb_medium']
*/
function getImageThumbnail( $attr ) {

    ob_start();

    if( isset($attr['name']) ) { $veld = $attr['name'];  } else { return "Vul een veld attribute in!"; }

    if( isset($attr['size']) ) { $size = $attr['size']; } else { $size = "full"; }

     ?>


    <?php if($attr['name'] != "" && $attr['size'] == "full") 
    { 
    	$name = $attr['name'];
    	
    	$image = get_field($name); 
    	echo $image['url']; 
	} 
    elseif($attr['name'] != "" && $attr['size'] != "") 
    {
    	$name = $attr['name'];
    	$size = $attr['size'];

    	$image = get_field($name);

    	echo $image['sizes'][$size];
     } ?>

	<?php return ob_get_clean();
}

add_shortcode( 'mk-image-thumb', 'getImageThumbnail' );
add_shortcode( 'mk_image_thumb', 'getImageThumbnail' );



/*
  Add @ 1.1
  [mk_gallery-firstimage name="producten_afbeeldingen" size="full"]
*/
function getGallerijFirstimage( $attr ) {

    ob_start();

    if( isset($attr['name']) ) { $veld = $attr['name'];  } else { return "Vul een veld attribute in!"; }

    if( isset($attr['size']) ) { $size = $attr['size']; } else { $size = ""; }

    if( $veld != "" )
    { 
        $images = get_field($veld); 
        $firstimage  = $images[0]; 

        if( $size == "full" )
        {
            echo $firstimage['url'];
        }
        elseif( $size != "" )
        {
            echo $firstimage['sizes'][$size];
        }
        else
        {
            echo $firstimage['url'];
        }
    } 

    return ob_get_clean();
}

add_shortcode( 'mk_gallery_firstimage', 'getGallerijFirstimage' );


/*
  Add @ 1.1
  [mk_style_background_image name="producten_afbeeldingen" size="full"]
*/
function getStyleBackgroundImage( $attr ) {

    ob_start();

    if( isset($attr['name']) ) { $veld = $attr['name'];  } else { return "Vul een veld attribute in!"; }

    if( isset($attr['size']) ) { $size = $attr['size']; } else { $size = "full"; }

    $image = get_field($veld); 


    if($size == "full") 
    { 
        echo 'style="background-image: url(' . $image['url'] . ');"';
    } 
    elseif($size != "") 
    {
        echo 'style="background-image: url(' . $image['sizes'][$size] . ');"';
    } 

    return ob_get_clean();
}

add_shortcode( 'mk_style_background_image', 'getStyleBackgroundImage' );



/*
  Add @ 2.0.8
  [mk_theme_module folder="openingstijden" file="vandaag"]
*/
function get_mk_module_theme( $atts ) {

    $atts = shortcode_atts(
        array(
            'folder' => '',
            'file' => '',
            'cat' => '',
        ),
        $atts
    );

    if( $atts['cat'] != "")
    {
        global $mk_theme_module_categorie;

        $mk_theme_module_categorie = $atts['cat'];
    }
    

    if( $atts['folder'] != "" && $atts['file'] != "") 
    {
        if (file_exists( get_stylesheet_directory(). '/modules/'. $atts['folder'] .'/'. $atts['file'] . ".php" )) 
        {
            ob_start();

            include( get_stylesheet_directory(). '/modules/'. $atts['folder'] .'/'. $atts['file'] . ".php");

            return ob_get_clean();
        }
    }

}
add_shortcode( 'mk_theme_module', 'get_mk_module_theme' );


?>