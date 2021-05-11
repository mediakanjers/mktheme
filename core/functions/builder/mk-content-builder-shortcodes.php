<?php

global $mk_video_parameters;


$mktheme_advanced_phpcontentp = esc_attr( get_option( 'mktheme_advanced_phpcontentp' ) );

if( $mktheme_advanced_phpcontentp == 1)
{
  add_filter( 'the_content', 'remove_empty_p', 20, 1 );
}

//clean up lege <p></p>
function remove_empty_p( $content ){
  // clean up p tags around block elements
  $content = preg_replace( array(
      '#<p>\s*<(div|aside|section|article|header|footer)#',
      '#</(div|aside|section|article|header|footer)>\s*</p>#',
      '#</(div|aside|section|article|header|footer)>\s*<br ?/?>#',
      '#<(div|aside|section|article|header|footer)(.*?)>\s*</p>#',
      '#<p>\s*</(div|aside|section|article|header|footer)#',
  ), array(
      '<$1',
      '</$1>',
      '</$1>',
      '<$1$2>',
      '</$1',
), $content );
return preg_replace('#<p>\s*+(<br\s*/*>)?\s*</p>#i', '', $content);
//OLD, deze gebruiken als je enters ook weg wit hebben :  &nbsp;
//return preg_replace('#<p>(\s|&nbsp;)*+(<br\s*/*>)*(\s|&nbsp;)*</p>#i', '', $content);
}






$set = 0;

//Shortcodes!
function get_mk_content_sectie( $attr ) {
  ob_start(); 

  global $set;

  if( isset($attr['class']) ) { $class = $attr['class']; $class = str_replace(',', ' ', $class);  } else { $class = ""; }
  if( isset($attr['id']) ) { $id = $attr['id']; $id = str_replace(',', ' ', $id);  } else { $id = ""; }
  if( isset($attr['bgimg']) ) { $bgimg = $attr['bgimg'];  } else { $bgimg = ""; }
  if( isset($attr['bgcolor']) ) { $bgcolor = $attr['bgcolor'];  } else { $bgcolor = ""; }
  if( isset($attr['set']) ) { $set = $attr['set'];  } else { $set = 0; }

  $image_attributes = "";

	if($bgimg != "")
	{
    $image_attributes = wp_get_attachment_image_src($bgimg, "mk_max");
    
    $croptool = esc_attr( get_option( 'mktheme_crop_thumb_activeren' ) );

    if(  $croptool == 1)
    {

      $headersize = esc_attr( get_option( 'mktheme_crop_thumb_header' ) );
      $achtergrondsize = esc_attr( get_option( 'mktheme_crop_thumb_achtergrond' ) );

      if( $achtergrondsize != "") { echo 'achtergornd';  $image_attributes = wp_get_attachment_image_src($bgimg, $achtergrondsize); }
      
      if (strpos($class, 'header') !== false && $headersize != "" ) {
        echo 'header';
        if( $headersize != "") {  $image_attributes = wp_get_attachment_image_src($bgimg, $headersize); }
      }
    }

	}
  ?>
    <div <?php if($id != "") { echo ' id="'. $id . '"';} ?>class="mk_sectie<?php if($class != "") { echo ' '. $class;} ?>"<?php if($bgcolor != "" || $bgimg != "") { echo ' style="'; } if($bgimg != "") { echo 'background-image:url('.$image_attributes[0].');'; } if($bgcolor != "") { echo 'background-color:'.$bgcolor.';'; }  if($bgcolor != "" || $bgimg != "") { echo '"'; } ?>>
      <?php if($set == 2) { echo '<div class="mk_sectie_inner">'; } ?>
  <?php
  return ob_get_clean();
}
add_shortcode( 'mk_sectie', 'get_mk_content_sectie' );


$current_koloms = "";

function get_mk_content_rij( $attr ) {
  ob_start(); 
  global $current_koloms;
  global $set;

  if( isset($attr['kolom']) ) { $kolom = $attr['kolom']; $current_koloms = $kolom;  } else { $current_koloms = 1; }
  if( isset($attr['class']) ) { $class = $attr['class']; $class = str_replace(',', ' ', $class);  } else { $class = ""; }
  ?>
    <div class="mk_rij<?php if($class != "") { echo ' '. $class;} ?>">
      <div class="mk_kolom<?php if($current_koloms > 1) echo ' mk_kolom_'.$current_koloms; ?> mk_kolom_1_<?php echo $current_koloms; ?>">
        <?php if($set == 2) { echo '<div class="mk_kolom_inner">'; } ?>
  <?php
  return ob_get_clean();
}
add_shortcode( 'mk_rij', 'get_mk_content_rij' );


function get_mk_content_kolom_separator() {
  ob_start(); 
  global $current_koloms;
  global $set;
  ?>
      <?php if($set == 2) { echo '</div>'; } ?>
    </div>  
    <div class="mk_kolom<?php if($current_koloms > 1) echo ' mk_kolom_'.$current_koloms; ?> mk_kolom_1_<?php echo $current_koloms; ?>">
      <?php if($set == 2) { echo '<div class="mk_kolom_inner">'; } ?>
  <?php
  return ob_get_clean();
}
add_shortcode( 'separator', 'get_mk_content_kolom_separator' );

$current_module_type = "";
$h = "";
$moduleid = 0;
function get_mk_content_module( $attr ) {
  ob_start(); 
  global $current_module_type;
  global $h;
  global $moduleid;
  global $moduleclass;

  if( isset($attr['type']) ) { $type = $attr['type']; $current_module_type = $type;  } else { return; }
  if( isset($attr['img']) ) { $img = $attr['img']; } else { $img = ""; }
  if( isset($attr['galerij']) ) { $galerij = $attr['galerij']; } else { $galerij = ""; }
  if( isset($attr['link']) ) { $link = $attr['link']; } else { $link = ""; }
  if( isset($attr['url']) ) { $url = $attr['url']; } else { $url = ""; }
  if( isset($attr['h']) ) { $h = $attr['h']; } else { $h = ""; }
  if( isset($attr['view']) ) { $view = $attr['view']; } else { $view = 0; }
  if( isset($attr['target']) ) { $target = $attr['target']; } else { $target = ""; }
  if( isset($attr['size']) ) { $size = $attr['size']; } else { $size = ""; }
  if( isset($attr['extern']) ) { $extern = $attr['extern']; } else { $extern = ""; }
  if( isset($attr['poster']) ) { $poster = $attr['poster']; } else { $poster = ""; }
  if( isset($attr['bestand']) ) { $bestand = $attr['bestand']; } else { $bestand = ""; }
  if( isset($attr['class']) ) { $class = $attr['class']; $class = str_replace(',', ' ', $class); } else { $class = ""; }

  $moduleclass = $class;

  if($type == "tekst")
  {
  	Tekst_module($class);
  }
  else if($type == "titel")
  {
  	titel_module( $class, $h );
  }
  else if($type == "afbeelding")
  {
  	afbeelding_module( $class, $img, $size, $url);
  }
  else if($type == "galerij" )
  {
  	galerij_module( $class, $galerij, $view, $size, $target );
  }
  else if($type == "code")
  {
  	code_module($class);
  }
  else if($type == "knop")
  {
    knop_module($class, $url, $target, $extern);
  }
  else if($type == "bestand")
  {
    bestand_module($class, $link);
  }
  else if($type == "video")
  {
    video_module($class, $url, $view, $target, $poster);
  }
  $moduleid++;
  return ob_get_clean();
}
add_shortcode( 'mk_module', 'get_mk_content_module' );

function get_mk_content_module_close( $attr) {
  ob_start(); 
  global $current_module_type;
  global $h;
  if($current_module_type == "tekst")
  {
  	//Tekst_module();
  }
  else if($current_module_type == "titel")
  {
    if($h == "") { echo '</h1>'; } else { echo '</h' . $h .'>'; }
  }
  else if($current_module_type == "afbeelding")
  {
  	//afbeelding_module();
  }
  else if($current_module_type == "galerij")
  {
  	//galerij_module();
  }
  else if($current_module_type == "code")
  {
  	//code_module();
  }
  else if($current_module_type == "knop")
  {
    echo '</a>';
  }
  else if($current_module_type == "bestand")
  {
    echo '</a>';
  }
  
  ?>
      </div>
    </div> <!-- mk_module -->
  <?php
  return ob_get_clean();
}
add_shortcode( 'mk_close_module', 'get_mk_content_module_close' );

function get_mk_content_kolom_close() {
  ob_start(); 
  global $set;
  ?>
      <?php if($set == 2) { echo '</div>'; } ?>
    </div> <!-- mk_kolom -->
  <?php
  return ob_get_clean();
}
add_shortcode( 'mk_close_kolom', 'get_mk_content_kolom_close' );

function get_mk_content_rij_close() {
  ob_start(); 
  global $set;
  ?>
        <?php if($set == 2) { echo '</div>'; } ?>
      </div>
    </div> <!-- mk_rij -->
  <?php
  return ob_get_clean();
}
add_shortcode( 'mk_close_rij', 'get_mk_content_rij_close' );

function get_mk_content_sectie_close() {
  ob_start(); 
  global $set;
  ?>
      <?php if($set == 2) { echo '</div>'; } ?>
    </div> <!-- mk_sectie -->
  <?php
  return ob_get_clean();
}
add_shortcode( 'mk_close_sectie', 'get_mk_content_sectie_close' );


// 
// modules!!
function Tekst_module($class )
{
	?>
	<div class="mk_module mk_tekst<?php if($class != "") { echo ' ' . $class; } ?>">
      <div class="mk_tekst_inner">
	<?php
}
function titel_module( $class, $h )
{
	?>
	<div class="mk_module mk_titel<?php if($class != "") { echo ' ' . $class; } ?>">
      <div class="mk_titel_inner">
	<?php
    if($h == "") { echo '<h1>'; } else { echo '<h' . $h .'>'; }
}

function afbeelding_module( $class, $img, $size, $url)
{
	?>
	<div class="mk_module mk_afbeelding<?php if($class != "") { echo ' ' . $class; } ?>">
      <div class="mk_afbeelding_inner">
	<?php
  if($img == "") { return; }

  $image_attributes = "";

  if($size != "") { $image_attributes = wp_get_attachment_image_src($img, $size); }
  if( $image_attributes == "" ) { $image_attributes = wp_get_attachment_image_src($img, 'full'); }





  $seoafbeelingenalt = esc_attr( get_option( 'mktheme_advanced_seoafbeelingenalt' ) );

  if($url != '') { echo '<a href="'. $url .'">'; }

  if($seoafbeelingenalt == 1)
  {
    $image_alt = get_post_meta( $img, '_wp_attachment_image_alt', true);
    $image_title = get_the_title($img);

    echo '<img src="'. $image_attributes[0] .'" alt="'.$image_alt.'" titel="'.$image_title.'">';
  }
  else{
    echo '<img src="'. $image_attributes[0] .'">';
  }

  if($url != '') { echo '</a>'; }
}

function code_module($class)
{
	?>
	<div class="mk_module mk_code<?php if($class != "") { echo ' ' . $class; } ?>">
      <div class="mk_code_inner">
	<?php
}

function knop_module( $class, $url, $target, $extern)
{
  ?>
  <div class="mk_module mk_knop<?php if($class != "") { echo ' ' . $class; } ?>">
      <div class="mk_knop_inner">
        <a class="mk_button"<?php if($target == 1) { echo ' target="_blank"'; } ?> href="<?php if($extern != 1) { echo get_bloginfo('url'); } echo $url; ?>">
  <?php
}

function bestand_module( $class, $url)
{
  ?>
  <div class="mk_module mk_bestand<?php if($class != "") { echo ' ' . $class; } ?>">
      <div class="mk_bestand_inner">
        <a class="mk_button" target="_blank" href="<?php echo wp_get_attachment_url( $url ); ?>">
  <?php
}

function video_module( $class, $url, $view, $target, $poster)
{
 ?>
  <div class="mk_module mk_video<?php if($class != "") { echo ' ' . $class; } ?>">
      <div class="mk_video_inner">

        <?php if($target != null  && $target == "2") { ?>
          <div class="" style="padding:56.25% 0 0 0;position:relative;">
            <iframe src="<?php echo mk_url_video_youtube();  echo $url; ?>" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="accelerometer; fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
          </div>

        <?php } else if($target != null && $target == "1" ) { ?>

          <div class="" style="padding:56.25% 0 0 0;position:relative;">
            <iframe src="<?php echo mk_url_video_vimeo() . $url . mk_video_url_vimeo_parameters(); if($view == "2") { echo mk_video_url_vimeo_autoplay(); } ?>" style="position:absolute;top:0;left:0;width:100%;height:100%;" allow="autoplay; fullscreen" allowfullscreen="" frameborder="0"></iframe>
          </div>
          <?php } else if($url != null ) { ?>
            <video width="100%" 
              <?php if($view == "2") { echo " autoplay muted loop "; } else { echo " controls "; } ?> 
              <?php if($poster != null) { echo 'poster="'. wp_get_attachment_image_src($poster, 'full')[0]  .'"'; } ?>
            >
              <source src="<?php echo wp_get_attachment_url( $url ); ?>" type="video/mp4">
            </video>
        <?php 
        }
}


// Galerij Module!
function galerij_module( $class, $img, $view, $size, $target )
{
	?>
	<div class="mk_module mk_galerij<?php if($class != "") { echo ' ' . $class; } ?>">
      <div class="mk_galerij_inner">
	<?php
    if($img == "") { return; }

    if($target != null && $target == 1)
    {
      if( $view == 0 ) { mk_galerij_module_standard_post( $img, $size ); }
      if( $view == 1 ) { mk_galerij_module_slider_post( $img, $size ); }
    }
    else
    {
      $galerij = explode(",", $img);
      if( $view == 0 ) { mk_galerij_module_standard( $galerij, $size ); }
      if( $view == 1 ) { mk_galerij_module_slider( $galerij, $size ); }
    }
}


//standard grid layout
if ( ! function_exists( 'mk_galerij_module_standard' ) ) {

	function mk_galerij_module_standard($galerij, $size) {
    global $moduleid, $moduleclass;

    if( $moduleclass == "random") { shuffle($galerij); }

		foreach ($galerij as $key => $value) {

			if($size == "") { $size = "full"; }
      $image_attributes = wp_get_attachment_image_src($value,  $size );
      $image_attributes_url = wp_get_attachment_image_src($value, "url");

      $seoafbeelingenalt = esc_attr( get_option( 'mktheme_advanced_seoafbeelingenalt' ) );

      echo '<a data-fancybox="gallery'.$moduleid.'" href="'. $image_attributes_url[0] .'">';
      
        if($seoafbeelingenalt == 1)
        {
          $image_alt = get_post_meta( $value, '_wp_attachment_image_alt', true);
          $image_title = get_the_title($value);
      
          echo '<img src="'. $image_attributes[0] .'" alt="'.$image_alt.'" titel="'.$image_title.'">';
        }
        else
        {
          echo '<img src="'. $image_attributes[0] . '"/>';
        }

      echo '</a>';
		}
  }
}

//slider
if ( ! function_exists( 'mk_galerij_module_slider' ) ) {

	function mk_galerij_module_slider($galerij, $size) {
    global $moduleid, $moduleclass;

    if( $moduleclass == "random") { shuffle($galerij); }
    
    echo '<div class="galerij-carousel owl-carousel">';
    
      foreach ($galerij as $key => $value) 
      {
        if($size == "") { $size = "full"; }
        $image_attributes = wp_get_attachment_image_src($value,  $size );
        $image_attributes_url = wp_get_attachment_image_src($value, "url");

        $seoafbeelingenalt = esc_attr( get_option( 'mktheme_advanced_seoafbeelingenalt' ) );

        echo '<a data-fancybox="gallery'.$moduleid.'" href="'. $image_attributes_url[0] .'">';
      
          if($seoafbeelingenalt == 1)
          {
            $image_alt = get_post_meta( $value, '_wp_attachment_image_alt', true);
            $image_title = get_the_title($value);
        
            echo '<img src="'. $image_attributes[0] .'" alt="'.$image_alt.'" titel="'.$image_title.'">';
          }
          else
          {
            echo '<img src="'. $image_attributes[0] . '"/>';
          }

        echo '</a>';
      }
    
		echo '</div>';
  }
}
// Galerij Module!

if ( ! function_exists( 'mk_galerij_module_slider_post' ) ) {
  function mk_galerij_module_slider_post($galerijpost, $size)
  {

    global $moduleid, $moduleclass;

    $images = get_field('galerij', $galerijpost);

    if($size == "") { $size = "full"; }

    if( $moduleclass == "random") { shuffle($images); }
      
    echo '<div class="galerij-carousel owl-carousel">';
    
      foreach ($images as $image) :

        echo '<a data-fancybox="gallery'.$moduleid.'" href="'. $image['url'] .'"><img src="'. $image['sizes'][$size] .'" alt="'. $image['alt'] .'" /></a>';

      endforeach;
    
    echo '</div>';

  }
}


if ( ! function_exists( 'mk_galerij_module_standard_post' ) ) {
  function mk_galerij_module_standard_post($galerijpost, $size)
  {
    global $moduleid, $moduleclass;

    $images = get_field('galerij', $galerijpost);

    if($size == "") { $size = "full"; }

    if( $moduleclass == "random") { shuffle($images); }
    
    foreach ($images as $image) :

        echo '<a data-fancybox="gallery'.$moduleid.'" href="'. $image['url'] .'"><img src="'. $image['sizes'][$size] .'" alt="'. $image['alt'] .'" /></a>';

    endforeach;

  }
}

// videourls
//youtube https://www.youtube.com/embed/ I2xd6r0BGbk
//vimeo https://player.vimeo.com/video/ 325237941 ?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;muted=1

if ( ! function_exists( 'mk_url_video_vimeo' ) ) {
  function mk_url_video_vimeo()
  {
    return "https://player.vimeo.com/video/";
  }
}

if ( ! function_exists( 'mk_video_url_vimeo_parameters' ) ) {
  function mk_video_url_vimeo_parameters()
  {
    return "?loop=1&amp;title=0&amp;byline=0&amp;portrait=0";
  }
}

if ( ! function_exists( 'mk_video_url_vimeo_autoplay' ) ) {
  function mk_video_url_vimeo_autoplay()
  {
    return "&amp;autoplay=1&amp;muted=1";
  }
}



if ( ! function_exists( 'mk_url_video_youtube' ) ) {
  function mk_url_video_youtube()
  {
    return "https://www.youtube-nocookie.com/embed/";
  }
}


if ( ! function_exists( 'mk_video_url_youtube_parameters' ) ) {
  function mk_video_url_youtube_parameters()
  {
    return "https://www.youtube.com/embed/";
  }
}

?>