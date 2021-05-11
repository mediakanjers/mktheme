<?php if( have_rows('modules') ): while ( have_rows('modules') ) : the_row(); //flex ?>

	<?php if( get_row_layout() == 'titel' ):  ?>

		<?php $optie = get_sub_field('optie'); ?>

		<div class="mk_module mk_titel">
			<div class="mk_titel_inner">
				<?php if($optie == 'h1') { ?>
					<h1><?php the_sub_field('titel'); ?></h1>
				<?php } elseif($optie == 'h2') { ?>
					<h2><?php the_sub_field('titel'); ?></h2>
				<?php } elseif($optie == 'h3') { ?>
					<h3><?php the_sub_field('titel'); ?></h3>
				<?php } elseif($optie == 'h4') { ?>
					<h4><?php the_sub_field('titel'); ?></h4>
				<?php } elseif($optie == 'h5') { ?>
					<h5><?php the_sub_field('titel'); ?></h5>
				<?php } ?>
			</div>
		</div>

	<?php elseif( get_row_layout() == 'tekst' ):  ?>

		<div class="mk_module mk_tekst"><div class="mk_tekst_inner"><?php the_sub_field('tekst'); ?></div></div>

	<?php elseif( get_row_layout() == 'knop' ):  ?>

		<?php $knop = get_sub_field('link'); ?>

		<?php if($knop != "") { ?>
			<div class="mk_module mk_knop">
				<div class="mk_knop_inner">
					<a class="mk_button" href="<?php echo $knop['url'] ?>"><?php echo $knop['title']; ?></a>
				</div>
			</div>
		<?php }  ?>

	<?php elseif( get_row_layout() == 'afbeelding' ):  ?>

		<?php $afbeelding = get_sub_field('afbeelding'); $imgalt = $afbeelding['alt'];  if( $afbeelding['alt'] == "" ) { $imgalt = $afbeelding['title']; } //var_dump($afbeelding); ?>

		<?php if($afbeelding != "") { ?><div class="mk_module mk_afbeelding"><div class="mk_afbeeling_inner"><img alt="<?php echo $imgalt; ?>" title="<?php echo $afbeelding['title']; ?>" src="<?php echo $afbeelding['url']; ?>"/></div></div><?php }  ?>


	<?php elseif( get_row_layout() == 'slideshow' ):  ?>

		<div class="mk_module mk_slideshow">

			<div class="mk_slide_inner">

				<div class="slideshow-carousel owl-carousel">

					<?php $onderschrift = get_sub_field('onderschrift'); //if( get_sub_field('onderschrift') == "ja" ) ?>

					<?php if( have_rows('slideshow') ): while ( have_rows('slideshow') ) : the_row(); ?>

						<div class="slideshow-item" style="background-image: url('<?php the_sub_field('afbeelding'); ?>');"><?php if($onderschrift == "ja") { ?><h4><?php the_sub_field('titel'); ?></h4><?php } ?></div>

					<?php endwhile; endif; ?>

				</div>

			</div>

		</div>

	<?php elseif( get_row_layout() == 'lijst' ):  ?>

		<div class="mk_module mk_lijst">

			<div class="mk_lijst_inner">

				<div class="kop"><?php the_sub_field('lijst_titel'); ?></div>

				<div class="lijst">

					<?php $lijst = false; if(get_sub_field('2e_lijst') == "ja") { $lijst = true; } ?>

					<ul<?php if($lijst == true) { echo " class='half'"; } ?>>

						<?php if( have_rows('opties') ): while ( have_rows('opties') ) : the_row(); ?>

							<li><?php the_sub_field('optie'); ?></li>

						<?php endwhile; endif; ?>

					</ul>

					<?php if($lijst == true) { ?> 

						<ul class="half">

							<?php if( have_rows('opties') ): while ( have_rows('opties') ) : the_row(); ?>

								<li><?php the_sub_field('optie'); ?></li>

							<?php endwhile; endif; ?>

						</ul>

					<?php } ?>

				</div>

			</div>

		</div>

	<?php elseif( get_row_layout() == 'code' ):  ?>

		<div class="mk_module mk_code">

			<div class="mk_code_inner">

				<?php the_sub_field('code'); ?>

			</div>

		</div>

	<?php elseif( get_row_layout() == 'gallerij' ):  ?>

		<?php the_mk_acf_module_gallerij(); ?>

	<?php endif; //end module layout ?>

<?php endwhile; endif; //end flex ?>