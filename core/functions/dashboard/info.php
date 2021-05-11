<?php

global $wp_version;

include '../../../../../../wp-load.php';


$id = $_GET["id"];

echo 'ID]:[' . $id; 

echo ']"[' ;

echo 'versie}:{' . MKTheme_version(); 

echo '}"{' ;

echo 'naam}:{' . get_bloginfo('name');

echo '}"{';

echo 'no-index}:{' . esc_attr( get_option( 'blog_public' ) );
  
echo '}"{';

echo 'wpversie}:{' . esc_attr( $wp_version );

echo '}"{';

echo 'update}:{' . esc_attr( get_option( 'mktheme_mktheme_versie' ) );

echo '}"{';

echo 'serverIP}:{' .$_SERVER['SERVER_ADDR'];

?>