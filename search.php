<?php get_header(); ?>



<div id="main-content" class="search">

	<div class="mk_sectie mk_acf">

		<div class="mk_rij">


	<?php if ( function_exists('yoast_breadcrumb') ) {
	yoast_breadcrumb('
	<p id="breadcrumbs">','</p>
	');
	}?>

	<div class="search-titel">
		<h1 class="entry-title">Resultaten voor: <?php  if (isset($_GET['s'])) { echo $_GET['s']; } ?></h1>
	</div>



<div class="searchholder">

<?php 

if( have_posts() ){
    $types = array( 'page', 'post' );
    foreach( $types as $type ){

    	$query = new WP_Query( $type );
		$total = $query->found_posts;

		$thecounter = 0;

		while( have_posts() ){
			the_post();
			if( $type == get_post_type() ){
				$thecounter++;
			}
		}

		?>

		

		<?php

		if($thecounter > 0) { ?>
	    		<div class="searchgroup <?php echo $type; ?> searchresult<?php echo $thecounter; ?>">
	    	
	    	<?php echo '<div class="gevondenresults">Er zijn '. $thecounter . ' ' .  $type.' gevonden:</div>';

	        while( have_posts() ){
	            the_post();
	            if( $type == get_post_type() ){


					$postlink = get_permalink();


	            	if($type == 'reviews') {  ?>

						<?php $post_object = get_field('accommodatie');

						if( $post_object ): 

							// override $post
							$post = $post_object;
							setup_postdata( $post ); 

							$postlink = get_permalink($post);

							?>

						    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
						<?php endif;  ?>

					<?php } ?>



					<?php if($postlink != "" && $thecounter > 0) { ?>
	               
		                <div class="searchgroup_item">
			                <a href="<?php echo $postlink; ?>">
			                	<h3 class="title"><?php if(get_the_title() != "") { the_title(); } ?></h3>
			                	<?php
			                		//if post is using ACF Builder
			                		if($type == 'page') { 

			                			echo mk_acf_excerpt(200); 
									}
									//Normal wp editor
			                		else 
			                		{
				                		the_excerpt(); 
				                	}
			                	?>
			                </a>
			            </div>

	                <?php
	                }

	            }
	        }
	        rewind_posts();
	        ?> </div> <?php 
	    }
	    ?>

		

	    <?php
    }
}
else
{
	echo '<div class="geengevonden">';

	echo '</div>';
} ?>

</div>

<?php
	if ( function_exists( 'wp_pagenavi' ) ) {

		wp_pagenavi();

	} else { 

		get_template_part( 'includes/navigation', 'index' );
	}



get_footer();

?>