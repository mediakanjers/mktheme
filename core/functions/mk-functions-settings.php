<?php


/*

Admin page

*/



function mk_theme_admin_page()
{
	add_menu_page('MK Theme Settings', 'MK Settings', 'administrator', 'mk_theme_settings', 'mk_theme_settings_page', get_template_directory_uri() . '/images/iconracket2.png', 99999);
	add_action('admin_init', 'mk_theme_register_settings');
}
add_action('admin_menu', 'mk_theme_admin_page', 1000);


//add_settings_section: ID, Titel, Callback, page_slug
//add_settings_field: ID, Titel, slug, page_slug, section_id
function mk_theme_register_settings()
{
	//MKTheme
	register_setting( 'mk-theme-setting-group', 'mktheme_mktheme_versie' );
	// register_setting( 'mk-theme-setting-group', 'mktheme_mktheme_hash' );

	add_settings_section( 'mktheme-mktheme', 'MKTheme', 'mktheme_mktheme',  'mk_theme_settings');

	add_settings_field( 'mktheme-mktheme-versie', 'MKTheme versie', 'mktheme_mktheme_versie', 'mk_theme_settings', 'mktheme-mktheme' );
	// add_settings_field( 'mktheme-mktheme-hash', 'MKTheme code', 'mktheme_mktheme_hash', 'mk_theme_settings', 'mktheme-mktheme' );


	//builder
	register_setting( 'mk-theme-setting-group', 'mktheme_builder' );
	register_setting( 'mk-theme-setting-group', 'mktheme_save_template' );
	register_setting( 'mk-theme-setting-group', 'mktheme_builder_debug' );
	register_setting( 'mk-theme-setting-group', 'mktheme_builder_cache_editor' );
	register_setting( 'mk-theme-setting-group', 'mktheme_galerijen' );
	register_setting( 'mk-theme-setting-group', 'mktheme_innerdivs' );
	register_setting( 'mk-theme-setting-group', 'mktheme_image_size' );
	register_setting( 'mk-theme-setting-group', 'mktheme_galerij_size' );
	register_setting( 'mk-theme-setting-group', 'mktheme_standaard_editor' );

	add_settings_section( 'mktheme-content-builder', 'Content builder', 'mktheme_content_builder',  'mk_theme_settings');

	add_settings_field( 'mktheme-template', 'Template opslaan', 'mktheme_save_template', 'mk_theme_settings', 'mktheme-content-builder' );
	add_settings_field( 'mktheme-builder', 'Builder', 'mktheme_builder', 'mk_theme_settings', 'mktheme-content-builder' );
	add_settings_field( 'mktheme-debug-builder', 'Debug Builder', 'mktheme_builder_debug', 'mk_theme_settings', 'mktheme-content-builder' );
	add_settings_field( 'mktheme-visual-editor', 'Force visual editor', 'mktheme_builder_cache_editor', 'mk_theme_settings', 'mktheme-content-builder' );
	add_settings_field( 'mktheme-standaard-editor', 'Optie Standaard Editor', 'mktheme_standaard_editor', 'mk_theme_settings', 'mktheme-content-builder' );
	add_settings_field( 'mktheme-galerijen', 'Galerijen', 'mktheme_galerijen', 'mk_theme_settings', 'mktheme-content-builder' );
	add_settings_field( 'mktheme-innerdivs', 'Inner divs', 'mktheme_innerdivs', 'mk_theme_settings', 'mktheme-content-builder' );
	add_settings_field( 'mktheme-image-size', 'Image Size', 'mktheme_image_size', 'mk_theme_settings', 'mktheme-content-builder' );
	add_settings_field( 'mktheme-galerij-size', 'Galerij Size', 'mktheme_galerij_size', 'mk_theme_settings', 'mktheme-content-builder' );



	//Disable Modules
	register_setting( 'mk-theme-setting-group', 'mktheme_module_tekst' ); 
	register_setting( 'mk-theme-setting-group', 'mktheme_module_titel' );
	register_setting( 'mk-theme-setting-group', 'mktheme_module_afbeelding' );
	register_setting( 'mk-theme-setting-group', 'mktheme_module_galerij' );
	register_setting( 'mk-theme-setting-group', 'mktheme_module_code' );
	register_setting( 'mk-theme-setting-group', 'mktheme_module_knop' );

	add_settings_section( 'mktheme-modules', 'Disable Modules', 'mktheme_modules',  'mk_theme_settings');

	add_settings_field( 'mktheme-modules-tekst', 'Tekst', 'mktheme_module_tekst', 'mk_theme_settings', 'mktheme-modules' );
	add_settings_field( 'mktheme-modules-titel', 'Titel', 'mktheme_module_titel', 'mk_theme_settings', 'mktheme-modules' );
	add_settings_field( 'mktheme-modules-afbeelding', 'Afbeelding', 'mktheme_module_afbeelding', 'mk_theme_settings', 'mktheme-modules' );
	add_settings_field( 'mktheme-modules-galerij', 'Galerij', 'mktheme_module_galerij', 'mk_theme_settings', 'mktheme-modules' );
	add_settings_field( 'mktheme-modules-code', 'Code', 'mktheme_module_code', 'mk_theme_settings', 'mktheme-modules' );
	add_settings_field( 'mktheme-modules-knop', 'Knop', 'mktheme_module_knop', 'mk_theme_settings', 'mktheme-modules' );



	//Enable Advanced modules
	register_setting( 'mk-theme-setting-group', 'mktheme_module_video' ); 

	add_settings_section( 'mktheme-advanced-modules', 'Enable Advanced Modules', 'mktheme_advanced_modules',  'mk_theme_settings');

	add_settings_field( 'mktheme-advanced-modules-video', 'Video', 'mktheme_module_video', 'mk_theme_settings', 'mktheme-advanced-modules' );



	//Klant Toestemming
	register_setting( 'mk-theme-setting-group', 'mktheme_builder_klant_edit' ); //aanpassen //Standaard // Afbeelding // Color
	register_setting( 'mk-theme-setting-group', 'mktheme_builder_klant_create' ); //nieuwe en delete
	register_setting( 'mk-theme-setting-group', 'mktheme_builder_klant_advanced_edit' ); // Classes // ID
	register_setting( 'mk-theme-setting-group', 'mktheme_builder_klant_admin_edit' ); //slot // sectie : Sectie // settings

	add_settings_section( 'mktheme-klant-toestemmingen', 'Klant Toestemmingen', 'mktheme_klant_toestemmingen',  'mk_theme_settings');

	add_settings_field( 'mktheme-builder-klant-edit', 'Disable: Klant Edit', 'mktheme_builder_klant_edit', 'mk_theme_settings', 'mktheme-klant-toestemmingen' );
	add_settings_field( 'mktheme-builder-klant-create', 'Disable: Klant Create', 'mktheme_builder_klant_create', 'mk_theme_settings', 'mktheme-klant-toestemmingen' );
	add_settings_field( 'mktheme-builder-klant-advanced', 'Disable: Klant Advanced Edit', 'mktheme_builder_klant_advanced_edit', 'mk_theme_settings', 'mktheme-klant-toestemmingen' );
	add_settings_field( 'mktheme-builder-klant-admin', 'Disable: Klant Admin Edit', 'mktheme_builder_klant_admin_edit', 'mk_theme_settings', 'mktheme-klant-toestemmingen' );
	


	//Active scripts!
	register_setting( 'mk-theme-setting-group', 'mktheme_owl_carousel' );
	register_setting( 'mk-theme-setting-group', 'mktheme_swiper_slider' );
	register_setting( 'mk-theme-setting-group', 'mktheme_fancybox' );
	register_setting( 'mk-theme-setting-group', 'mktheme_sticky_menu' );
	register_setting( 'mk-theme-setting-group', 'mktheme_font_awesome' );

	add_settings_section( 'mktheme-scripts', 'Footer API Scripts', 'mktheme_scripts',  'mk_theme_settings');

	add_settings_field( 'mktheme-owl-carousel', 'Owl Carousel 2', 'mktheme_scripts_owlcarousel', 'mk_theme_settings', 'mktheme-scripts' );
	add_settings_field( 'mktheme-swiperslide', 'Swiper Slider', 'mktheme_scripts_swiperslider', 'mk_theme_settings', 'mktheme-scripts' );
	add_settings_field( 'mktheme-fancybox', 'FancyBox', 'mktheme_scripts_fancybox', 'mk_theme_settings', 'mktheme-scripts' );
	add_settings_field( 'mktheme-stickymenu', 'Sticky menu', 'mktheme_scripts_stickymenu', 'mk_theme_settings', 'mktheme-scripts' );
	add_settings_field( 'mktheme-fontawesome', 'Font Awesome', 'mktheme_scripts_fontawesome', 'mk_theme_settings', 'mktheme-scripts' );


	//Footer API scripts
	register_setting( 'mk-theme-setting-group', 'mktheme_head_script' );
	register_setting( 'mk-theme-setting-group', 'mktheme_google_analytics' );

	add_settings_section( 'mktheme-footer-scripts', 'Head/Footer API Scripts', 'mktheme_footer_scripts',  'mk_theme_settings');

	add_settings_field( 'mktheme-head-scripts', 'WP Head Scripts', 'mktheme_head_script', 'mk_theme_settings', 'mktheme-footer-scripts' );
	add_settings_field( 'mktheme-google-analytics', 'Footer / Google Analytics', 'mktheme_scripts_google_analytics', 'mk_theme_settings', 'mktheme-footer-scripts' );


	//Thumbnails
	register_setting( 'mk-theme-setting-group', 'mktheme_thumb_large_width' );
	register_setting( 'mk-theme-setting-group', 'mktheme_thumb_large_height' );
	register_setting( 'mk-theme-setting-group', 'mktheme_thumb_large_crop' );

	register_setting( 'mk-theme-setting-group', 'mktheme_thumb_medium_width' );
	register_setting( 'mk-theme-setting-group', 'mktheme_thumb_medium_height' );
	register_setting( 'mk-theme-setting-group', 'mktheme_thumb_medium_crop' );

	register_setting( 'mk-theme-setting-group', 'mktheme_thumb_small_width' );
	register_setting( 'mk-theme-setting-group', 'mktheme_thumb_small_height' );
	register_setting( 'mk-theme-setting-group', 'mktheme_thumb_small_crop' );

	register_setting( 'mk-theme-setting-group', 'mktheme_img_large_width' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_large_height' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_large_crop' );

	register_setting( 'mk-theme-setting-group', 'mktheme_img_full_width' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_full_height' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_full_crop' );

	register_setting( 'mk-theme-setting-group', 'mktheme_img_max_width' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_max_height' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_max_crop' );

	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom1_naam' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom1_width' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom1_height' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom1_crop' );

	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom2_naam' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom2_width' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom2_height' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom2_crop' );

	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom3_naam' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom3_width' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom3_height' );
	register_setting( 'mk-theme-setting-group', 'mktheme_img_custom3_crop' );


	add_settings_section( 'mktheme-thumbnails', 'Thumbnails', 'mktheme_thumbnails',  'mk_theme_settings');

	add_settings_field( 'mktheme-thumb-large', 'mk_thumb_large', 'mktheme_thumb_large', 'mk_theme_settings', 'mktheme-thumbnails' );
	add_settings_field( 'mktheme-thumb-medium', 'mk_thumb_medium', 'mktheme_thumb_medium', 'mk_theme_settings', 'mktheme-thumbnails' );
	add_settings_field( 'mktheme-thumb-small', 'mk_thumb_small', 'mktheme_thumb_small', 'mk_theme_settings', 'mktheme-thumbnails' );
	add_settings_field( 'mktheme-img-large', 'mk_large', 'mktheme_img_large', 'mk_theme_settings', 'mktheme-thumbnails' );
	add_settings_field( 'mktheme-img-full', 'mk_full', 'mktheme_img_full', 'mk_theme_settings', 'mktheme-thumbnails' );
	add_settings_field( 'mktheme-img-max', 'mk_max', 'mktheme_img_max', 'mk_theme_settings', 'mktheme-thumbnails' );
	add_settings_field( 'mktheme-img-custom1', 'Extra size 1', 'mktheme_img_custom1', 'mk_theme_settings', 'mktheme-thumbnails' );
	add_settings_field( 'mktheme-img-custom2', 'Extra size 2', 'mktheme_img_custom2', 'mk_theme_settings', 'mktheme-thumbnails' );
	add_settings_field( 'mktheme-img-custom3', 'Extra size 3', 'mktheme_img_custom3', 'mk_theme_settings', 'mktheme-thumbnails' );


	//Crop Thumbnails
	register_setting( 'mk-theme-setting-group', 'mktheme_crop_thumb_activeren' );
	register_setting( 'mk-theme-setting-group', 'mktheme_crop_thumb_header' );
	register_setting( 'mk-theme-setting-group', 'mktheme_crop_thumb_achtergrond' );
	register_setting( 'mk-theme-setting-group', 'mktheme_crop_thumb_sizes' );


	add_settings_section( 'mktheme-crop-thumbnails', 'plugin Crop Thumbnails', 'mktheme_crop_thumbnails',  'mk_theme_settings');

	add_settings_field( 'mktheme-crop-thumb-activeren', 'Activeren', 'mktheme_crop_thumb_activeren', 'mk_theme_settings', 'mktheme-crop-thumbnails' );
	add_settings_field( 'mktheme-crop-thumb-header', 'Header thumb size', 'mktheme_crop_thumb_header', 'mk_theme_settings', 'mktheme-crop-thumbnails' );
	add_settings_field( 'mktheme-crop-thumb-achtergrond', 'Standaard achtergrond', 'mktheme_crop_thumb_achtergrond', 'mk_theme_settings', 'mktheme-crop-thumbnails' );
	// add_settings_field( 'mktheme-crop-thumb-sizes', 'Header/achtergrond thumb size', 'mktheme_crop_thumb_sizes', 'mk_theme_settings', 'mktheme-crop-thumbnails' );



	// Pagina opties
	// register_setting( 'mk-theme-setting-group', 'mktheme_pagina_slider' );
	// register_setting( 'mk-theme-setting-group', 'mktheme_pagina_voorpagina' );
	// register_setting( 'mk-theme-setting-group', 'mktheme_pagina_opties' );
	// register_setting( 'mk-theme-setting-group', 'mktheme_pagina_openingstijden' );
	register_setting( 'mk-theme-setting-group', 'mktheme_pagina_add_pages' );

	add_settings_section( 'mktheme-pagina-opties', 'ACF opties', 'mktheme_pagina_opties_desc',  'mk_theme_settings');

	// add_settings_field( 'mktheme-pagina-slider', 'Pagina Slider', 'mktheme_pagina_slider', 'mk_theme_settings', 'mktheme-pagina-opties' );
	// add_settings_field( 'mktheme-pagina-voorpagina', 'Pagina Voorpagina', 'mktheme_pagina_voorpagina', 'mk_theme_settings', 'mktheme-pagina-opties' );
	// add_settings_field( 'mktheme-pagina-opties', 'Pagina Opties', 'mktheme_pagina_opties', 'mk_theme_settings', 'mktheme-pagina-opties' );
	// add_settings_field( 'mktheme-pagina-openingstijden', 'Pagina Openingstijden', 'mktheme_pagina_openingstijden', 'mk_theme_settings', 'mktheme-pagina-opties' );
	add_settings_field( 'mktheme-pagina-add-pages', 'Add options pages', 'mktheme_pagina_add_pages', 'mk_theme_settings', 'mktheme-pagina-opties' );


	// advanced opties 
	register_setting( 'mk-theme-setting-group', 'mktheme_advanced_stylesheetversie' );
	register_setting( 'mk-theme-setting-group', 'mktheme_advanced_phpcontentp' );
	register_setting( 'mk-theme-setting-group', 'mktheme_advanced_seoafbeelingenalt' );
	register_setting( 'mk-theme-setting-group', 'mktheme_advanced_headers' );
	register_setting( 'mk-theme-setting-group', 'mktheme_advanced_resetpasswords' );
	register_setting( 'mk-theme-setting-group', 'mktheme_advanced_clearrocket' );

	add_settings_section( 'mktheme-advanced-opties', 'Advanced opties', 'mktheme_advanced_opties_desc',  'mk_theme_settings');

	add_settings_field( 'mktheme-advanced-stylesheetversie', 'Stylestheet Versie', 'mktheme_advanced_stylesheetversie', 'mk_theme_settings', 'mktheme-advanced-opties' );
	add_settings_field( 'mktheme-advanced-phpcontentp', 'PHP: remove empty <p>', 'mktheme_advanced_phpcontentp', 'mk_theme_settings', 'mktheme-advanced-opties' );
	add_settings_field( 'mktheme-advanced-seoafbeelingenalt', 'SEO: Afbeeldingen alt', 'mktheme_advanced_seoafbeelingenalt', 'mk_theme_settings', 'mktheme-advanced-opties' );
	add_settings_field( 'mktheme-advanced-headers', 'Headers disable! ( Removed!! )', 'mktheme_advanced_headers', 'mk_theme_settings', 'mktheme-advanced-opties' );
	add_settings_field( 'mktheme-advanced-resetpasswords', 'Reset passwords toegestaan', 'mktheme_advanced_resetpasswords', 'mk_theme_settings', 'mktheme-advanced-opties' );
	add_settings_field( 'mktheme-advanced-clearrocket', 'Clear WP Rocket after save', 'mktheme_advanced_clearrocket', 'mk_theme_settings', 'mktheme-advanced-opties' );



	// ACF + WPML opties 
	register_setting( 'mk-theme-setting-group', 'mktheme_acf_wpml_activeer' );
	register_setting( 'mk-theme-setting-group', 'mktheme_acf_wpml_optionspages' );


	add_settings_section( 'mktheme-acf-wpml-opties', 'ACF + WPML one options page ( NOT 100% Tested!! )', 'mktheme_acf_wpml_opties_desc',  'mk_theme_settings');

	add_settings_field( 'mktheme-acf-wpml-activeer', 'Activeer ACF-WPML', 'mktheme_acf_wpml_activeer', 'mk_theme_settings', 'mktheme-acf-wpml-opties' );
	add_settings_field( 'mktheme-acf-wpml-optionspages', 'Options page ID (array)', 'mktheme_acf_wpml_optionspages', 'mk_theme_settings', 'mktheme-acf-wpml-opties' );


}


//Active scripts!
function mktheme_scripts()
{
	echo 'Activeer of deactiveer scripts!';
}

function mktheme_scripts_owlcarousel()
{
	$owlCarousel = esc_attr( get_option( 'mktheme_owl_carousel' ) );
	$none = ( @$owlCarousel == 0 ? 'checked' : '' );
	$checked = ( @$owlCarousel == 1 ? 'checked' : '' );
	$checked234 = ( @$owlCarousel == 234 ? 'checked' : '' );
	$laaste = ( @$owlCarousel == 2 ? 'checked' : '' );
	echo '<label><input type="radio" id="mktheme_owl_carousel" name="mktheme_owl_carousel" value="0" '.$none.' />Geen</label>';
	echo '<label><input type="radio" id="mktheme_owl_carousel" name="mktheme_owl_carousel" value="1" '.$checked.' />v2.2.1</label>';
	echo '<label><input type="radio" id="mktheme_owl_carousel" name="mktheme_owl_carousel" value="234" '.$checked234.' />v2.3.4</label>';
	// echo '<label><input type="radio" id="mktheme_owl_carousel" name="mktheme_owl_carousel" value="2" '.$laaste.' />Laaste</label>';
}

function mktheme_scripts_swiperslider()
{
	$swiperSlider = esc_attr( get_option( 'mktheme_swiper_slider' ) );
	$none = ( @$swiperSlider == 0 ? 'checked' : '' );
	$checked = ( @$swiperSlider == 1 ? 'checked' : '' );
	$checked545 = ( @$swiperSlider == 545 ? 'checked' : '' );
	$laaste = ( @$swiperSlider == 2 ? 'checked' : '' );
	echo '<label><input type="radio" id="mktheme_swiper_slider" name="mktheme_swiper_slider" value="0" '.$none.' />Geen</label>';
	echo '<label><input type="radio" id="mktheme_swiper_slider" name="mktheme_swiper_slider" value="1" '.$checked.' />v4.1.6</label>';
	echo '<label><input type="radio" id="mktheme_swiper_slider" name="mktheme_swiper_slider" value="545" '.$checked545.' />v5.4.5</label>';
	// echo '<label><input type="radio" id="mktheme_swiper_slider" name="mktheme_swiper_slider" value="2" '.$laaste.' />Laatste</label>';
}

function mktheme_scripts_fancybox()
{
	$fancyBox = esc_attr( get_option( 'mktheme_fancybox' ) );
	$none = ( @$fancyBox == 0 ? 'checked' : '' );
	$checked = ( @$fancyBox == 1 ? 'checked' : '' );
	$checked357 = ( @$fancyBox == 357 ? 'checked' : '' );
	$laaste = ( @$fancyBox == 2 ? 'checked' : '' );
	echo '<label><input type="radio" id="mktheme_fancybox" name="mktheme_fancybox" value="0" '.$none.' />Geen</label>';
	echo '<label><input type="radio" id="mktheme_fancybox" name="mktheme_fancybox" value="1" '.$checked.' />v3.4.1</label>';
	echo '<label><input type="radio" id="mktheme_fancybox" name="mktheme_fancybox" value="357" '.$checked357.' />v3.5.7</label>';
	// echo '<label><input type="checkbox" id="mktheme_fancybox" name="mktheme_fancybox" value="2" '.$laaste.' />Laatste</label>';
}

function mktheme_scripts_stickymenu()
{
	$stickyMenu = esc_attr( get_option( 'mktheme_sticky_menu' ) );
	$none = ( @$stickyMenu == 0 ? 'checked' : '' );
	$checked = ( @$stickyMenu == 1 ? 'checked' : '' );
	echo '<label><input type="radio" id="mktheme_sticky_menu" name="mktheme_sticky_menu" value="0" '.$none.' />Geen</label>';
	echo '<label><input type="radio" id="mktheme_sticky_menu" name="mktheme_sticky_menu" value="1" '.$checked.' />v1.0.4</label>';
}

function mktheme_scripts_fontawesome()
{
	$fontAwesome = esc_attr( get_option( 'mktheme_font_awesome' ) );
	$checked0 = ( @$fontAwesome == 0 ? 'checked' : '' );
	$checked1 = ( @$fontAwesome == 1 ? 'checked' : '' );
	$checked2 = ( @$fontAwesome == 2 ? 'checked' : '' );
	echo '<label><input type="radio" id="mktheme_font_awesome" name="mktheme_font_awesome" value="0" '.$checked0.' />geen</label>';
	echo '<label><input type="radio" id="mktheme_font_awesome" name="mktheme_font_awesome" value="1" '.$checked1.' />v4.7</label>';
	echo '<label><input type="radio" id="mktheme_font_awesome" name="mktheme_font_awesome" value="2" '.$checked2.' />v5.4</label>';
}



//Footer API scripts
function mktheme_footer_scripts()
{
}


function mktheme_scripts_google_analytics()
{
	$googleAnalytics = esc_attr( get_option( 'mktheme_google_analytics' ) );
	echo '<textarea name="mktheme_google_analytics" id="mktheme_google_analytics" placeholder="Google Analytics">'.$googleAnalytics.'</textarea>';
}

function mktheme_head_script()
{
	$headscript = esc_attr( get_option( 'mktheme_head_script' ) );
	echo '<textarea name="mktheme_head_script" id="mktheme_head_script" placeholder="WP Head script">'.$headscript.'</textarea>';
}


//Thumbnails
function mktheme_thumbnails()
{

}

function mktheme_thumb_large()
{
	$thumbLargeWidth = esc_attr( get_option( 'mktheme_thumb_large_width' ) );
	$thumbLargeHeight = esc_attr( get_option( 'mktheme_thumb_large_height' ) );
	$thumbLargeCrop = esc_attr( get_option( 'mktheme_thumb_large_crop' ) );
	
	echo '<input type="text" name="mktheme_thumb_large_width" placeholder="width" value="'.$thumbLargeWidth.'" />';
	echo '<input type="text" name="mktheme_thumb_large_height" placeholder="height" value="'.$thumbLargeHeight.'" />';

	$checked = ( @$thumbLargeCrop == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_thumb_large_crop" name="mktheme_thumb_large_crop" value="1" '.$checked.' /> Crop</label>';
}


function mktheme_thumb_medium()
{
	$thumbLargeWidth = esc_attr( get_option( 'mktheme_thumb_medium_width' ) );
	$thumbLargeHeight = esc_attr( get_option( 'mktheme_thumb_medium_height' ) );
	$thumbLargeCrop = esc_attr( get_option( 'mktheme_thumb_medium_crop' ) );
	
	echo '<input type="text" name="mktheme_thumb_medium_width" placeholder="width" value="'.$thumbLargeWidth.'" />';
	echo '<input type="text" name="mktheme_thumb_medium_height" placeholder="height" value="'.$thumbLargeHeight.'" />';

	$checked = ( @$thumbLargeCrop == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_thumb_medium_crop" name="mktheme_thumb_medium_crop" value="1" '.$checked.' /> Crop</label>';
}

function mktheme_thumb_small()
{
	$thumbLargeWidth = esc_attr( get_option( 'mktheme_thumb_small_width' ) );
	$thumbLargeHeight = esc_attr( get_option( 'mktheme_thumb_small_height' ) );
	$thumbLargeCrop = esc_attr( get_option( 'mktheme_thumb_small_crop' ) );
	
	echo '<input type="text" name="mktheme_thumb_small_width" placeholder="width" value="'.$thumbLargeWidth.'" />';
	echo '<input type="text" name="mktheme_thumb_small_height" placeholder="height" value="'.$thumbLargeHeight.'" />';

	$checked = ( @$thumbLargeCrop == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_thumb_small_crop" name="mktheme_thumb_small_crop" value="1" '.$checked.' /> Crop</label>';
}

function mktheme_img_large()
{
	$thumbLargeWidth = esc_attr( get_option( 'mktheme_img_large_width' ) );
	$thumbLargeHeight = esc_attr( get_option( 'mktheme_img_large_height' ) );
	$thumbLargeCrop = esc_attr( get_option( 'mktheme_img_large_crop' ) );
	
	echo '<input type="text" name="mktheme_img_large_width" placeholder="width" value="'.$thumbLargeWidth.'" />';
	echo '<input type="text" name="mktheme_img_large_height" placeholder="height" value="'.$thumbLargeHeight.'" />';

	$checked = ( @$thumbLargeCrop == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_img_large_crop" name="mktheme_img_large_crop" value="1" '.$checked.' /> Crop</label>';
}

function mktheme_img_full()
{
	$thumbLargeWidth = esc_attr( get_option( 'mktheme_img_full_width' ) );
	$thumbLargeHeight = esc_attr( get_option( 'mktheme_img_full_height' ) );
	$thumbLargeCrop = esc_attr( get_option( 'mktheme_img_full_crop' ) );
	
	echo '<input type="text" name="mktheme_img_full_width" placeholder="width" value="'.$thumbLargeWidth.'" />';
	echo '<input type="text" name="mktheme_img_full_height" placeholder="height" value="'.$thumbLargeHeight.'" />';

	$checked = ( @$thumbLargeCrop == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_img_full_crop" name="mktheme_img_full_crop" value="1" '.$checked.' /> Crop</label>';
}

function mktheme_img_max()
{
	$thumbLargeWidth = esc_attr( get_option( 'mktheme_img_max_width' ) );
	$thumbLargeHeight = esc_attr( get_option( 'mktheme_img_max_height' ) );
	$thumbLargeCrop = esc_attr( get_option( 'mktheme_img_max_crop' ) );
	
	echo '<input type="text" name="mktheme_img_max_width" placeholder="width" value="'.$thumbLargeWidth.'" />';
	echo '<input type="text" name="mktheme_img_max_height" placeholder="height" value="'.$thumbLargeHeight.'" />';

	$checked = ( @$thumbLargeCrop == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_img_max_crop" name="mktheme_img_max_crop" value="1" '.$checked.' /> Crop</label>';
}



function mktheme_img_custom1()
{
	//mktheme_img_custom1_naam
	$sizeNaam = esc_attr( get_option( 'mktheme_img_custom1_naam' ) );
	$sizeWidth = esc_attr( get_option( 'mktheme_img_custom1_width' ) );
	$sizeHeight = esc_attr( get_option( 'mktheme_img_custom1_height' ) );
	$sizeCrop = esc_attr( get_option( 'mktheme_img_custom1_crop' ) );
	
	echo '<input type="text" name="mktheme_img_custom1_naam" placeholder="img size naam" value="'.$sizeNaam.'" />';
	echo '<input type="text" name="mktheme_img_custom1_width" placeholder="width" value="'.$sizeWidth.'" />';
	echo '<input type="text" name="mktheme_img_custom1_height" placeholder="height" value="'.$sizeHeight.'" />';

	$checked = ( @$sizeCrop == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_img_custom1_crop" name="mktheme_img_custom1_crop" value="1" '.$checked.' /> Crop</label>';
}

function mktheme_img_custom2()
{
	//mktheme_img_custom1_naam
	$sizeNaam = esc_attr( get_option( 'mktheme_img_custom2_naam' ) );
	$sizeWidth = esc_attr( get_option( 'mktheme_img_custom2_width' ) );
	$sizeHeight = esc_attr( get_option( 'mktheme_img_custom2_height' ) );
	$sizeCrop = esc_attr( get_option( 'mktheme_img_custom2_crop' ) );
	
	echo '<input type="text" name="mktheme_img_custom2_naam" placeholder="img size naam" value="'.$sizeNaam.'" />';
	echo '<input type="text" name="mktheme_img_custom2_width" placeholder="width" value="'.$sizeWidth.'" />';
	echo '<input type="text" name="mktheme_img_custom2_height" placeholder="height" value="'.$sizeHeight.'" />';

	$checked = ( @$sizeCrop == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_img_custom2_crop" name="mktheme_img_custom2_crop" value="1" '.$checked.' /> Crop</label>';
}

function mktheme_img_custom3()
{
	//mktheme_img_custom1_naam
	$sizeNaam = esc_attr( get_option( 'mktheme_img_custom3_naam' ) );
	$sizeWidth = esc_attr( get_option( 'mktheme_img_custom3_width' ) );
	$sizeHeight = esc_attr( get_option( 'mktheme_img_custom3_height' ) );
	$sizeCrop = esc_attr( get_option( 'mktheme_img_custom3_crop' ) );
	
	echo '<input type="text" name="mktheme_img_custom3_naam" placeholder="img size naam" value="'.$sizeNaam.'" />';
	echo '<input type="text" name="mktheme_img_custom3_width" placeholder="width" value="'.$sizeWidth.'" />';
	echo '<input type="text" name="mktheme_img_custom3_height" placeholder="height" value="'.$sizeHeight.'" />';

	$checked = ( @$sizeCrop == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_img_custom3_crop" name="mktheme_img_custom3_crop" value="1" '.$checked.' /> Crop</label>';
}



//builder
function mktheme_content_builder()
{
	//echo '<iframe src="http://mktheme.media-kanjers.nl/dashboard/check-website/" width="400" height="63"></iframe>';
}

function mktheme_builder()
{
	$mktheme_builder = esc_attr( get_option( 'mktheme_builder' ) );
	
	echo '<input type="text" name="mktheme_builder" placeholder="post,page,custom-post-type" value="'.$mktheme_builder.'" />';
}

function mktheme_save_template()
{
	$mktheme_save_template = esc_attr( get_option( 'mktheme_save_template' ) );
	
	echo '<input type="text" name="mktheme_save_template" placeholder="post,page,custom-post-type" value="'.$mktheme_save_template.'" />';
}

function mktheme_builder_debug()
{
	$builder_debug = esc_attr( get_option( 'mktheme_builder_debug' ) );
	$checked = ( @$builder_debug == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_builder_debug" name="mktheme_builder_debug" value="1" '.$checked.' /></label>';
}

function mktheme_builder_cache_editor()
{
	$builder_debug = esc_attr( get_option( 'mktheme_builder_cache_editor' ) );
	$checked = ( @$builder_debug == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_builder_cache_editor" name="mktheme_builder_cache_editor" value="1" '.$checked.' /></label>';
}

function mktheme_mktheme_versie()
{
	$mktheme_versie = esc_attr( get_option( 'mktheme_mktheme_versie' ) );
	$checked0 = ( @$mktheme_versie == 0 ? 'checked' : '' );
	$checked1 = ( @$mktheme_versie == 1 ? 'checked' : '' );
	echo '<label><input type="radio" id="mktheme_mktheme_versie" name="mktheme_mktheme_versie" value="0" '.$checked0.' />Stable versie</label>';
	echo '<label><input type="radio" id="mktheme_mktheme_versie" name="mktheme_mktheme_versie" value="1" '.$checked1.' />Dev versie</label>';
}

// function mktheme_mktheme_hash()
// {
// 	$mktheme_mktheme_hash = esc_attr( get_option( 'mktheme_mktheme_hash' ) );

// 	echo $mktheme_mktheme_hash;
	
// 	//echo '<input type="text" name="mktheme_mktheme_hash" placeholder="Unieke hash code" value="'.$mktheme_mktheme_hash.'" />';
// }

function mktheme_galerijen()
{
	$mktheme_galerijen = esc_attr( get_option( 'mktheme_galerijen' ) );
	
	echo '<input type="text" name="mktheme_galerijen" placeholder="custom-post-type : galerij" value="'.$mktheme_galerijen.'" />';
}

function mktheme_innerdivs()
{
	$builder_debug = esc_attr( get_option( 'mktheme_innerdivs' ) );
	$checked = ( @$builder_debug == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_innerdivs" name="mktheme_innerdivs" value="1" '.$checked.' /></label>';
}

function mktheme_image_size()
{
	$mktheme_image_size = esc_attr( get_option( 'mktheme_image_size' ) );
	$checked0 = ( @$mktheme_image_size == 0 ? 'checked' : '' );
	$checked1 = ( @$mktheme_image_size == 1 ? 'checked' : '' );
	$checked2 = ( @$mktheme_image_size == 2 ? 'checked' : '' );
	echo '<label><input type="radio" id="mktheme_image_size" name="mktheme_image_size" value="0" '.$checked0.' />Geen</label>';
	echo '<label><input type="radio" id="mktheme_image_size" name="mktheme_image_size" value="1" '.$checked1.' />mk_large</label>';
	echo '<label><input type="radio" id="mktheme_image_size" name="mktheme_image_size" value="2" '.$checked2.' />mk_full</label>';
}

function mktheme_galerij_size()
{
	// $builder_debug = esc_attr( get_option( 'mktheme_galerij_size' ) );
	// $checked = ( @$builder_debug == 1 ? 'checked' : '' );
	// echo '<label><input type="checkbox" id="mktheme_galerij_size" name="mktheme_galerij_size" value="1" '.$checked.' /></label>';


	$mktheme_galerij_size = esc_attr( get_option( 'mktheme_galerij_size' ) );
	$checked0 = ( @$mktheme_galerij_size == 0 ? 'checked' : '' );
	$checked1 = ( @$mktheme_galerij_size == 1 ? 'checked' : '' );
	$checked2 = ( @$mktheme_galerij_size == 2 ? 'checked' : '' );
	$checked3 = ( @$mktheme_galerij_size == 3 ? 'checked' : '' );
	$checked4 = ( @$mktheme_galerij_size == 4 ? 'checked' : '' );
	$checked5 = ( @$mktheme_galerij_size == 5 ? 'checked' : '' );
	echo '<label><input type="radio" id="mktheme_galerij_size" name="mktheme_galerij_size" value="0" '.$checked0.' />Geen</label>';
	echo '<label><input type="radio" id="mktheme_galerij_size" name="mktheme_galerij_size" value="1" '.$checked1.' />mk_thumb_large</label>';
	echo '<label><input type="radio" id="mktheme_galerij_size" name="mktheme_galerij_size" value="2" '.$checked2.' />mk_thumb_medium</label>';
	echo '<label><input type="radio" id="mktheme_galerij_size" name="mktheme_galerij_size" value="3" '.$checked3.' />mk_thumb_small</label>';
	echo '<label><input type="radio" id="mktheme_galerij_size" name="mktheme_galerij_size" value="4" '.$checked4.' />mk_large</label>';
	echo '<label><input type="radio" id="mktheme_galerij_size" name="mktheme_galerij_size" value="5" '.$checked5.' />mk_full</label>';
}


function mktheme_standaard_editor()
{
	$mktheme_standaard_editor = esc_attr( get_option( 'mktheme_standaard_editor' ) );
	$checked = ( @$mktheme_standaard_editor == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_standaard_editor" name="mktheme_standaard_editor" value="1" '.$checked.' /></label>';
}

//mktheme_modules
function mktheme_modules()
{

}

//mktheme_module_tekst
function mktheme_module_tekst()
{
	$builder_klant_edit = esc_attr( get_option( 'mktheme_module_tekst' ) );
	$checked = ( @$builder_klant_edit == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_module_tekst" name="mktheme_module_tekst" value="1" '.$checked.' /></label>';
}

//mktheme_module_titel
function mktheme_module_titel()
{
	$builder_klant_edit = esc_attr( get_option( 'mktheme_module_titel' ) );
	$checked = ( @$builder_klant_edit == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_module_titel" name="mktheme_module_titel" value="1" '.$checked.' /></label>';
}


//mktheme_module_afbeelding
function mktheme_module_afbeelding()
{
	$builder_klant_edit = esc_attr( get_option( 'mktheme_module_afbeelding' ) );
	$checked = ( @$builder_klant_edit == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_module_afbeelding" name="mktheme_module_afbeelding" value="1" '.$checked.' /></label>';
}


//mktheme_module_galerij
function mktheme_module_galerij()
{
	$builder_klant_edit = esc_attr( get_option( 'mktheme_module_galerij' ) );
	$checked = ( @$builder_klant_edit == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_module_galerij" name="mktheme_module_galerij" value="1" '.$checked.' /></label>';
}


//mktheme_module_code
function mktheme_module_code()
{
	$builder_klant_edit = esc_attr( get_option( 'mktheme_module_code' ) );
	$checked = ( @$builder_klant_edit == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_module_code" name="mktheme_module_code" value="1" '.$checked.' /></label>';
}


//mktheme_module_knop
function mktheme_module_knop()
{
	$builder_klant_edit = esc_attr( get_option( 'mktheme_module_knop' ) );
	$checked = ( @$builder_klant_edit == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_module_knop" name="mktheme_module_knop" value="1" '.$checked.' /></label>';
}





//mktheme_advanced_modules
function mktheme_advanced_modules()
{

}

//mktheme_module_video
function mktheme_module_video()
{
	$builder_klant_edit = esc_attr( get_option( 'mktheme_module_video' ) );
	$checked = ( @$builder_klant_edit == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_module_video" name="mktheme_module_video" value="1" '.$checked.' /></label>';
}



//mktheme_klant_toestemmingen
function mktheme_klant_toestemmingen()
{
}

//klant edit
function mktheme_builder_klant_edit()
{
	$builder_klant_edit = esc_attr( get_option( 'mktheme_builder_klant_edit' ) );
	$checked = ( @$builder_klant_edit == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_builder_klant_edit" name="mktheme_builder_klant_edit" value="1" '.$checked.' /></label>';
}

//klant create
function mktheme_builder_klant_create()
{
	$builder_klant_create = esc_attr( get_option( 'mktheme_builder_klant_create' ) );
	$checked = ( @$builder_klant_create == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_builder_klant_create" name="mktheme_builder_klant_create" value="1" '.$checked.' /></label>';
}

//klant Advanced
function mktheme_builder_klant_advanced_edit()
{
	$builder_klant_move = esc_attr( get_option( 'mktheme_builder_klant_advanced_edit' ) );
	$checked = ( @$builder_klant_move == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_builder_klant_advanced_edit" name="mktheme_builder_klant_advanced_edit" value="1" '.$checked.' /></label>';
}

//klant Admin
function mktheme_builder_klant_admin_edit()
{
	$mktheme_builder_klant_admin_edit = esc_attr( get_option( 'mktheme_builder_klant_admin_edit' ) );
	$checked = ( @$mktheme_builder_klant_admin_edit == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_builder_klant_admin_edit" name="mktheme_builder_klant_admin_edit" value="1" '.$checked.' /></label>';
}



//Plugin crop tool
function mktheme_crop_thumbnails() { echo 'Header size wordt enkel weergegeven in een sectie met de class "header"'; }

function mktheme_crop_thumb_activeren()
{
	$mktheme_crop_thumb_activeren = esc_attr( get_option( 'mktheme_crop_thumb_activeren' ) );
	$checked = ( @$mktheme_crop_thumb_activeren == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_crop_thumb_activeren" name="mktheme_crop_thumb_activeren" value="1" '.$checked.' /></label>';
}


function mktheme_crop_thumb_header()
{
	$mktheme_crop_thumb_header = esc_attr( get_option( 'mktheme_crop_thumb_header' ) );
	echo '<input type="text" name="mktheme_crop_thumb_header" placeholder="img size" value="'.$mktheme_crop_thumb_header.'" />';
}

function mktheme_crop_thumb_achtergrond()
{
	$mktheme_crop_thumb_achtergrond = esc_attr( get_option( 'mktheme_crop_thumb_achtergrond' ) );
	echo '<input type="text" name="mktheme_crop_thumb_achtergrond" placeholder="img size" value="'.$mktheme_crop_thumb_achtergrond.'" />';
}

// function mktheme_crop_thumb_sizes()
// {
// 	$mktheme_crop_thumb_sizes = esc_attr( get_option( 'mktheme_crop_thumb_sizes' ) );
// 	echo '<input type="text" name="mktheme_crop_thumb_sizes" placeholder="img size" value="'.$mktheme_crop_thumb_sizes.'" />';
// }




//Active scripts!
function mktheme_pagina_opties_desc()
{
}

function mktheme_pagina_slider()
{
	$check = esc_attr( get_option( 'mktheme_pagina_slider' ) );
	$checked = ( @$check == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_pagina_slider" name="mktheme_pagina_slider" value="1" '.$checked.' /></label>';
}

function mktheme_pagina_voorpagina()
{
	$check = esc_attr( get_option( 'mktheme_pagina_voorpagina' ) );
	$checked = ( @$check == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_pagina_voorpagina" name="mktheme_pagina_voorpagina" value="1" '.$checked.' /></label>';
}

function mktheme_pagina_opties()
{
	$check = esc_attr( get_option( 'mktheme_pagina_opties' ) );
	$checked = ( @$check == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_pagina_opties" name="mktheme_pagina_opties" value="1" '.$checked.' /></label>';
}

function mktheme_pagina_openingstijden()
{
	$check = esc_attr( get_option( 'mktheme_pagina_openingstijden' ) );
	$checked = ( @$check == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_pagina_openingstijden" name="mktheme_pagina_openingstijden" value="1" '.$checked.' /></label>';
}

function mktheme_pagina_add_pages()
{
	$mktheme_pagina_add_pages = esc_attr( get_option( 'mktheme_pagina_add_pages' ) );
	
	echo '<input type="text" name="mktheme_pagina_add_pages" placeholder="name,andere naam" value="'.$mktheme_pagina_add_pages.'" />';
}




// mktheme_mktheme
function mktheme_mktheme()
{
	//echo '<iframe src="https://mktheme.media-kanjers.nl/dashboard/check-website/?url='. get_bloginfo('url').'&versie='. MKTheme_version() .'&ip='. $_SERVER['SERVER_ADDR'] .'" width="400" height="63"></iframe>';
}




//Advanced scripts!
function mktheme_advanced_opties_desc()
{

}

function mktheme_advanced_stylesheetversie()
{
	$mktheme_advanced_stylesheetversie = esc_attr( get_option( 'mktheme_advanced_stylesheetversie' ) );
	
	echo '<input type="text" name="mktheme_advanced_stylesheetversie" placeholder="Versie" value="'.$mktheme_advanced_stylesheetversie.'" />';
}

function mktheme_advanced_phpcontentp()
{
	$check = esc_attr( get_option( 'mktheme_advanced_phpcontentp' ) );
	$checked = ( @$check == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_advanced_phpcontentp" name="mktheme_advanced_phpcontentp" value="1" '.$checked.' /></label>';
}

function mktheme_advanced_seoafbeelingenalt()
{
	$check = esc_attr( get_option( 'mktheme_advanced_seoafbeelingenalt' ) );
	$checked = ( @$check == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_advanced_seoafbeelingenalt" name="mktheme_advanced_seoafbeelingenalt" value="1" '.$checked.' /></label>';
}

function mktheme_advanced_headers()
{
	$check = esc_attr( get_option( 'mktheme_advanced_headers' ) );
	$checked = ( @$check == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_advanced_headers" name="mktheme_advanced_headers" value="1" '.$checked.' /></label>';
}

// mktheme_advanced_resetpasswords
function mktheme_advanced_resetpasswords()
{
	$check = esc_attr( get_option( 'mktheme_advanced_resetpasswords' ) );
	$checked = ( @$check == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_advanced_resetpasswords" name="mktheme_advanced_resetpasswords" value="1" '.$checked.' /></label>';
}


// mktheme_advanced_clearrocket
function mktheme_advanced_clearrocket()
{
	$check = esc_attr( get_option( 'mktheme_advanced_clearrocket' ) );
	$checked = ( @$check == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_advanced_clearrocket" name="mktheme_advanced_clearrocket" value="1" '.$checked.' /></label>';
}

// mktheme_acf_wpml_opties_desc
function mktheme_acf_wpml_opties_desc()
{

}

function mktheme_acf_wpml_activeer()
{
	$check = esc_attr( get_option( 'mktheme_acf_wpml_activeer' ) );
	$checked = ( @$check == 1 ? 'checked' : '' );
	echo '<label><input type="checkbox" id="mktheme_acf_wpml_activeer" name="mktheme_acf_wpml_activeer" value="1" '.$checked.' /></label>';
}

function mktheme_acf_wpml_optionspages()
{
	$mktheme_acf_wpml_optionspages = esc_attr( get_option( 'mktheme_acf_wpml_optionspages' ) );
	
	echo '<input type="text" name="mktheme_acf_wpml_optionspages" placeholder="slug,andere-slug" value="'.$mktheme_acf_wpml_optionspages.'" />';
}







//Display settings page!
function mk_theme_settings_page()
{
	echo '<h1>MK Theme Settings</h1>';

	settings_errors();
	?>
	<form method="post" action="options.php">
		<?php settings_fields( 'mk-theme-setting-group' ); ?>
		<?php do_settings_sections( 'mk_theme_settings' ); ?>
		<?php submit_button( ); ?>
	</form>

	<?php
}



?>