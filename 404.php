<?php

get_header();

?>

<div id="main-content" class="<?php if(is_front_page()) { echo "voorpagina"; } else { echo "vervolgpagina"; } ?>">


	<div class="mk_sectie">

		<div class="mk_rij">

			<div class="mk_kolom mk_kolom_1_1">

				<h1>Pagina niet gevonden</h1>
		
			</div>

		</div>

		<div class="mk_rij">

			<div class="mk_kolom mk_kolom_1_1">

				<p>De pagina die u zocht kon niet gevonden worden. Probeer uw zoekopdracht te verfijnen of gebruik de bovenstaande navigatie om deze post te vinden.</p>
		
			</div>
		
		</div>
		
	</div>


</div> <!-- #main-content -->

<?php 

get_footer();

?>