<?php

get_header();

?>

<div id="main-content" class="<?php if(is_front_page()) { echo "voorpagina"; } else { echo "vervolgpagina"; } ?>">

	<?php while ( have_posts() ) : the_post(); ?>

		<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

			<div class="entry-content mk_builder">

				<div class="mk_sectie">
					<div class="mk_rij">

						<?php if ( function_exists('yoast_breadcrumb') ) { yoast_breadcrumb('<p id="breadcrumbs">','</p>'); } ?>

					</div>
					<div class="mk_rij">

						<?php the_content(); ?>

					</div>
				</div>

			</div> <!-- .entry-content -->

		</article> <!-- #post -->

	<?php endwhile; ?>

</div> <!-- #main-content -->

<?php 

get_footer();

?>