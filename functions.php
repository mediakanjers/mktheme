<?php
/*
 * functions.php
 */

require_once( __DIR__ . '/core/functions/mk-functions.php');


/*
 * MK Theme versie: 2.0.9.94
 */
function MKTheme_version () { return "2.0.9.94"; }
function MKTheme_version_code () { return "41"; }


$mktheme_versie_update = esc_attr( get_option( 'mktheme_mktheme_versie' ) );

$jsonupdatefile = 'http://mktheme.media-kanjers.nl/updates/update_theme.json';

if($mktheme_versie_update == "1")
{
	$jsonupdatefile = 'http://mktheme.media-kanjers.nl/updates/update_theme_dev.json';
}


$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	$jsonupdatefile, //details

	__FILE__, //Full path to the main plugin file or functions.php.

	'mktheme' //slug thema
);
?>