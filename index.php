<?php

get_header();

?>

<div id="main-content" class="<?php if(is_front_page()) { echo "voorpagina"; } else { echo "vervolgpagina"; } ?>">

	<div class="mk_blog_sectie clearfix">

		<?php while ( have_posts() ) : the_post(); ?>

		<?php endwhile; ?>

	</div>

</div> <!-- #main-content -->

<?php 

get_footer();

?>