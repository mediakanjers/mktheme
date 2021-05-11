<!DOCTYPE html>
<!--[if IE 6]>
<html id="ie6" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 7]>
<html id="ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html id="ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 6) | !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
	<title><?php wp_title(''); ?></title>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>

	<div id="full-header">
		<div id="top-header">
			<div class="container clearfix">

				<div id="mk-info">

					<?php if(get_field('telefoon', 'option') != '') { ?>
						<div class="mk_telefoon"><span class="mk-info-tekst">Bel ons:</span><a href="tel:<?php echo the_field('telefoon', 'option'); ?>"><i class="fas fa-phone fa-flip-horizontal"></i><span class="mk-info-phone"><?php echo the_field('telefoon', 'option'); ?></span></a></div>
					<?php } ?>

					<?php if(get_field('email', 'option') != '') { ?>
						<div class="mk_email"><span class="mk-info-tekst">mail ons:</span><a href="mailto:<?php echo the_field('email', 'option'); ?>"><i class="fas fa-paper-plane"></i><span class="mk-info-email"><?php echo the_field('email', 'option'); ?></span></a></div>
					<?php } ?> 

				</div> <!-- #mk-info -->

			</div> <!-- .container -->
		</div> <!-- #top-header -->

		<header id="main-header">
			<div class="container clearfix">

				<div class="mk_logo_container">
					<span class="mk_logo_helper"></span>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<img src="<?php echo the_field('logo', 'option'); ?>" alt="" class="mk_logo" />
					</a>
				</div>

				<?php ubermenu( 'main' , array( 'theme_location' => 'primary-menu' ) ); ?>

			</div> <!-- .container -->
		</header> <!-- #main-header -->
	</div> <!-- #full-header -->

	<div id="mk-main-area">
