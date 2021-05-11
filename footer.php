			<span class="mk_scrolltop"></span>

			<footer id="main-footer">
				<div class="mk_sectie">
					<div class="mk_rij">

						<div class="mk_kolom mk_kolom_1_1">
							<div class="mk_footer mk_footer1">
								<?php dynamic_sidebar( 'footer-area-1' ); ?>
							</div>

							<div class="mk_footer mk_footer2">
								<?php dynamic_sidebar( 'footer-area-2' ); ?>
							</div>

							<div class="mk_footer mk_footer3">
								<?php dynamic_sidebar( 'footer-area-3' ); ?>
							</div>

							<div class="mk_footer mk_footer4">
								<?php dynamic_sidebar( 'footer-area-4' ); ?>
							</div>
						</div>
						
					</div>
				</div>
 
				<div id="footer-bottom">
					<div class="container clearfix">
						<p id="footer-info"><span>Copyright <?php echo date("Y"); ?> <?php the_field('bedrijfsnaam', 'options'); ?></span> <span class="sep">-</span> <span>T. <a href="tel:<?php the_field('telefoon', 'options'); ?>"><?php the_field('telefoon', 'options'); ?></a></span> <span class="sep">|</span> <span class="mail">E. <a href="<?php the_field('email', 'options'); ?>"><?php the_field('email', 'options'); ?></a></span></p>
						<p id="footer-info">Gerealiseerd door <a href="http://www.mediakanjers.nl">Mediakanjers</a></p>
					</div>	<!-- .container -->
				</div>
			</footer> <!-- #main-footer -->
		</div> <!-- #et-main-area -->

	</div> <!-- #page-container -->

	<?php wp_footer(); ?>
</body>
</html>