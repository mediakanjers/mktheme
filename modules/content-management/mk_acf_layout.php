<?php if( have_rows('content_management') ): while ( have_rows('content_management') ) : the_row(); //herhalen ?> 

	<?php if( have_rows('section_settings') ): while ( have_rows('section_settings') ) : the_row(); //Section Settings ?>

		<?php $section_id = get_sub_field('section_id'); $sectionclass = get_sub_field('section_class');  $kleur = get_sub_field('section_achtergrond_kleur'); $zichtbaar = get_sub_field('zichtbaar'); ?>

	<?php endwhile; endif; ?>

	<div <?php if($section_id != "") { echo 'id="'.$section_id.'"'; } ?> class="mk_sectie mk_acf<?php if($sectionclass != "") { echo ' '.$sectionclass; } ?><?php if($zichtbaar == "nee") { echo ' mk_onzichtbaar'; } ?>" <?php if($kleur != "") { echo 'style="background-color:'.$kleur.';"'; } ?>>

	<?php if( have_rows('columns') ): while ( have_rows('columns') ) : the_row(); //flex content ?>


		<?php if( get_row_layout() == '1_column' ):  ?>

			<div class="mk_rij">

			<?php if( have_rows('settings') ): while ( have_rows('settings') ) : the_row(); //Section Settings ?>

				<?php $columnid = get_sub_field('column_id'); $columnclass = get_sub_field('column_class'); ?>

			<?php endwhile; endif; ?>

			<?php if( have_rows('column_1') ): while ( have_rows('column_1') ) : the_row(); //kloon ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div <?php if($columnid != "") { echo 'id="'.$columnid.'"'; } ?> class="mk_kolom mk_kolom_1_1<?php if($columnclass != "") { echo ' '.$columnclass; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; ?>

			</div><!-- .mk_rij -->



		<?php elseif( get_row_layout() == '2_column' ):  ?>

			<div class="mk_rij">

			<?php if( have_rows('settings') ): while ( have_rows('settings') ) : the_row(); //Section Settings ?>

				<?php $column1id = get_sub_field('column_1_id'); $column2id = get_sub_field('column_2_id'); $column1class = get_sub_field('column_1_class'); $column2class = get_sub_field('column_2_class'); ?>

			<?php endwhile; endif; ?>

			<?php if( have_rows('column_1') ): while ( have_rows('column_1') ) : the_row(); //groep ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div <?php if($column1id != "") { echo 'id="'.$column1id.'"'; } ?> class="mk_kolom mk_kolom_2 mk_kolom_1_2<?php if($column1class != "") { echo ' '.$column1class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; //end groep ?>

			<?php if( have_rows('column_2') ): while ( have_rows('column_2') ) : the_row(); //kloon ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div <?php if($column2id != "") { echo 'id="'.$column2id.'"'; } ?> class="mk_kolom mk_kolom_2 mk_kolom_1_2<?php if($column2class != "") { echo ' '.$column2class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; ?>

			</div><!-- .mk_rij -->



		<?php elseif( get_row_layout() == '2_column_13' ):  ?>

			<div class="mk_rij">

			<?php if( have_rows('settings') ): while ( have_rows('settings') ) : the_row(); //Section Settings ?>

				<?php $column1id = get_sub_field('column_1_id'); $column2id = get_sub_field('column_2_id'); $column1class = get_sub_field('column_1_class'); $column2class = get_sub_field('column_2_class'); ?>

			<?php endwhile; endif; ?>

			<?php if( have_rows('column_1') ): while ( have_rows('column_1') ) : the_row(); //groep ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div <?php if($column1id != "") { echo 'id="'.$column1id.'"'; } ?> class="mk_kolom mk_kolom_2 mk_kolom_1_3<?php if($column1class != "") { echo ' '.$column1class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; //end groep ?>

			<?php if( have_rows('column_2') ): while ( have_rows('column_2') ) : the_row(); //kloon ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div <?php if($column2id != "") { echo 'id="'.$column2id.'"'; } ?> class="mk_kolom mk_kolom_2 mk_kolom_2_3<?php if($column2class != "") { echo ' '.$column2class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; ?>

			</div><!-- .mk_rij -->



		<?php elseif( get_row_layout() == '2_column_23' ):  ?>

			<div class="mk_rij">

			<?php if( have_rows('settings') ): while ( have_rows('settings') ) : the_row(); //Section Settings ?>

				<?php $column1id = get_sub_field('column_1_id'); $column2id = get_sub_field('column_2_id'); $column1class = get_sub_field('column_1_class'); $column2class = get_sub_field('column_2_class'); ?>

			<?php endwhile; endif; ?>

			<?php if( have_rows('column_1') ): while ( have_rows('column_1') ) : the_row(); //groep ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div <?php if($column1id != "") { echo 'id="'.$column1id.'"'; } ?> class="mk_kolom mk_kolom_2 mk_kolom_2_3<?php if($column1class != "") { echo ' '.$column1class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; //end groep ?>

			<?php if( have_rows('column_2') ): while ( have_rows('column_2') ) : the_row(); //kloon ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div <?php if($column2id != "") { echo 'id="'.$column2id.'"'; } ?> class="mk_kolom mk_kolom_2 mk_kolom_1_3<?php if($column2class != "") { echo ' '.$column2class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; ?>

			</div><!-- .mk_rij -->

		

		<?php elseif( get_row_layout() == '3_column' ):  ?>

			<div class="mk_rij">

			<?php if( have_rows('settings') ): while ( have_rows('settings') ) : the_row(); //Section Settings ?>

				<?php $column1id = get_sub_field('column_1_id'); $column2id = get_sub_field('column_2_id'); $column3id = get_sub_field('column_3_id'); $column1class = get_sub_field('column_1_class'); $column2class = get_sub_field('column_2_class'); $column3class = get_sub_field('column_3_class'); ?>

			<?php endwhile; endif; ?>

			<?php if( have_rows('column_1') ): while ( have_rows('column_1') ) : the_row(); //groep ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div <?php if($column1id != "") { echo 'id="'.$column1id.'"'; } ?> class="mk_kolom mk_kolom_3 mk_kolom_1_3<?php if($column1class != "") { echo ' '.$column1class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; //end groep ?>

			<?php if( have_rows('column_2') ): while ( have_rows('column_2') ) : the_row(); //kloon ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div <?php if($column2id != "") { echo 'id="'.$column2id.'"'; } ?> class="mk_kolom mk_kolom_3 mk_kolom_1_3<?php if($column2class != "") { echo ' '.$column2class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; ?>

			<?php if( have_rows('column_3') ): while ( have_rows('column_3') ) : the_row(); //kloon ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div <?php if($column3id != "") { echo 'id="'.$column3id.'"'; } ?> class="mk_kolom mk_kolom_3 mk_kolom_1_3<?php if($column3class != "") { echo ' '.$column3class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; ?>

			</div><!-- .mk_rij -->


		<?php elseif( get_row_layout() == '4_column' ):  ?>

			<div class="mk_rij">

			<?php if( have_rows('settings') ): while ( have_rows('settings') ) : the_row(); //Section Settings ?>

				<?php $column1id = get_sub_field('column_1_id'); $column2id = get_sub_field('column_2_id'); $column3id = get_sub_field('column_3_id'); $column4id = get_sub_field('column_4_id');
				$column1class = get_sub_field('column_1_class'); $column2class = get_sub_field('column_2_class'); $column3class = get_sub_field('column_3_class'); $column4class = get_sub_field('column_4_class'); ?>

			<?php endwhile; endif; ?>

			<?php if( have_rows('column_1') ): while ( have_rows('column_1') ) : the_row(); //groep ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div class="mk_kolom mk_kolom_4 mk_kolom_1_4<?php if($column1class != "") { echo ' '.$column1class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; //end groep ?>

			<?php if( have_rows('column_2') ): while ( have_rows('column_2') ) : the_row(); //kloon ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div class="mk_kolom mk_kolom_4 mk_kolom_1_4<?php if($column2class != "") { echo ' '.$column2class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; ?>

			<?php if( have_rows('column_3') ): while ( have_rows('column_3') ) : the_row(); //kloon ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div class="mk_kolom mk_kolom_4 mk_kolom_1_4<?php if($column2class != "") { echo ' '.$column2class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; ?>


			<?php if( have_rows('column_4') ): while ( have_rows('column_4') ) : the_row(); //kloon ?>

				<?php if( have_rows('kloon_modules') ): while ( have_rows('kloon_modules') ) : the_row(); //kloon ?>

					<div class="mk_kolom mk_kolom_4 mk_kolom_1_4<?php if($column2class != "") { echo ' '.$column2class; } ?>">

						<?php the_mk_module('content-management', 'mk_acf_modules.php'); ?>

					</div>

				<?php endwhile; endif; //end kloon ?>

			<?php endwhile; endif; ?>

			</div><!-- .mk_rij -->

			
		<?php endif; //end kolom layout ?>



	<?php endwhile; endif; ?>
		
	</div><!-- .mk_sectie -->

<?php endwhile; endif; ?>