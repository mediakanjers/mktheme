<?php 
$images = get_sub_field('gallerij');
$firstimage  = $images[0]; 

global $post;
$post_slug = $post->post_name;

?><h2><?php the_sub_field('titel'); ?></h2><?php

if ($images) : ?>

	<div class="hoofdafbeelding"><a data-fancybox="gallery<?php the_sub_field('titel'); ?>" href="<?php echo $firstimage['url']; ?>"><img src="<?php echo $firstimage['url']; ?>"/></a></div>

	<div class="alleafbeeldingen">
		<?php $count = 0; foreach ($images as $image) : ?>
		<?php if($count > 0) { ?>

		<div class="afbeelding">
			<a data-fancybox="gallery<?php the_sub_field('titel'); ?>" href="<?php echo $image['url']; ?>"><img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>" /></a>
		</div>

		<?php } $count++; ?>
		<?php endforeach; ?>
	</div>

<?php endif; ?>