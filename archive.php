<?php

get_header();

?>

<div id="main-content" class="<?php if(is_front_page()) { echo "voorpagina"; } else { echo "vervolgpagina"; } ?>">

	<?php while ( have_posts() ) : the_post(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<div class="entry-content mk_builder">

		    	<?php the_mk_module('slider', 'slider.php'); ?>

				<?php the_content(); ?>

			</div> <!-- .entry-content -->

		</article> <!-- #post -->

	<?php endwhile; ?>

</div> <!-- #main-content -->

<?php 

get_footer();

?>