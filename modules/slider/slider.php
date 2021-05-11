<?php if( get_field("slider") == "ja" ) { ?>

	<div class="swiper-container frontpageslider">
		<div class="swiper-wrapper">
			<?php if( have_rows('slider', 'options') ): while ( have_rows('slider', 'options') ) : the_row(); ?>
				<?php if( have_rows('slide', 'options') ): while ( have_rows('slide', 'options') ) : the_row(); ?>
				<div class='slide swiper-slide'>
					<div class="slide-content">
						<div class="slide-module <?php the_sub_field('tekst_uitlijnen'); ?>">
							<h1><?php the_sub_field('slide_titel'); ?></h1>
							<span class="subtitel"><?php the_sub_field('slide_subtitel'); ?></span>
						</div>
					</div>
				</div>
				<?php endwhile; endif; ?>
			<?php endwhile; endif; ?>
			
		</div>
		<div class="swiper-pagination"></div>
	</div>
	<div class="swiper-dddd"></div>
	<div class="frontslideroverlay fdg"></div>

<?php }  ?>