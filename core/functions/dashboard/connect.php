<?php


include '../../../../../../wp-load.php';

$hash = $_GET["hash"];

//$hash = bin2hex(random_bytes(16));
//echo $hash;

$option_name = 'mktheme_mktheme_hash';

//update_option( 'mktheme_mktheme_hash', $hash );
if ( get_option( $option_name ) !== false ) {

    update_option( $option_name, $hash );

} else {

    add_option( $option_name, $hash );
}



?>