jQuery(window).ready(function($) { 

	if($('body').hasClass("mk_clear_rocket"))
	{
		if($('#message.updated.notice-success').length && $('#wp-admin-bar-purge-all').length)
		{
			if( $('.notice.notice-success:not(.updated) strong').length > 0 && $('.notice.notice-success:not(.updated) strong').text() == "WP Rocket" ) { return; }
			
			//$('#wp-admin-bar-wp-rocket .ab-sub-wrapper').addClass('openup');


			if( $('#wp-admin-bar-purge-all-all').length ) {
				jQuery('#wp-admin-bar-purge-all-all a')[0].click();
			}
			else {
				jQuery('#wp-admin-bar-purge-all a')[0].click();
			}

			
		}
	}



	if(!$('body').hasClass("mk-role-administrator"))
	{
		$('.mk_kloon .values .layout').each(function() 
		{
			if($(this).attr('data-layout') == 'code')
			{
				if(!$(this).hasClass('-collapsed'))
				{
					$(this).addClass('-collapsed');
				}

				$(this).addClass('mk_acf_disable');
			}
		});
	}


	//Laad template
	jQuery("#mk_load_template").click(function(e) {
		e.preventDefault();

		if( confirm('Weet je het zeker? Alle bestaande data wordt vervangen!') ) {
			var template = jQuery("#mk_select_template option:selected").val();
			var postid = jQuery("#postid").html();

			//console.log('template selected: ' + template);

			window.location = 'post-new.php?post_id=' + postid + '&mk_template_load=' + template;
		}
	});


	//Save template
	jQuery("#mk_save_template").click(function(e) {
		e.preventDefault();


		if( confirm('Heb je wijzigingen doorgevoerd? Sla de pagina dan eerst op voor je het template opslaat!') ) {
			//var template = jQuery("#act_template2 option:selected").val();
			var postid = jQuery("#postid").html();
			var savetitel = jQuery("#mk_save_titel").val();

			//console.log('template selected: ' + postid + " titel: " + savetitel);

			window.location = 'post-new.php?action=mk_save_template&post=' + postid + '&titel=' + savetitel;
		}
	});


	//Delete alle meta data
	jQuery("#mk_delete_template").click(function(e) {
		e.preventDefault();

		if( confirm('Delete alle meta data!') ) {
			var template = jQuery("#act_template2 option:selected").val();
			var postid = jQuery("#postid").html();

			//console.log('template selected: ' + template);

			window.location = 'post-new.php?post_id=' + postid + '&template_load_eigen=' + template;
		}
	});


	$('#selecteertemp').click(function()
	{

		$('.selecteertemplate').css('display', 'none');

		$('.laadtemplate').css('display', 'block');

	});


	$('#opensavetemp').click(function()
	{

		$('.opensavetemplate').css('display', 'none');

		$('.slaeentemplateop').css('display', 'block');

	});

});



function mk_kopieren_openbox( postid, url ) { jQuery(function ($) {

	//console.log('url : ' +  url);

	$('body').append(
		'<div class="mk_kopieren_box">' +
			'<div class="titel">Kopieren</div>' +
			'<input id="mk_kopieren_box_name" placeholder="Vul een titel in!" postid="'+ postid +'" type="text" name="naam">' +
			'<div class="mk_button" onclick="mk_kopieren_openbox_openen('+ postid +')">Kopieren</div>' +
		'</div>'
	);

	if( !$('.mk_editor_screen_overlay').length > 0)
	{	
		
		$('body').append(

			'<div class="mk_editor_screen_overlay"></div>'

		);
	}
	
	$('.mk_editor_screen_overlay').addClass('open');
}); }



function mk_kopieren_openbox_openen(titel) { jQuery(function ($) {

	if( $('#mk_kopieren_box_name').val()!= "")
	{
		location.href = '/wp-admin/admin.php?action=mk_kopieer_post_als_concept&post='+titel+'&titel=' + $('#mk_kopieren_box_name').val();
	}
	
}); }


function mk_kopieren_box_close() { jQuery(function ($) {

	if( $('.mk_kopieren_box').length > 0 ) { 
				
		$(".mk_kopieren_box").addClass('close');
		setTimeout( function() { $(".mk_kopieren_box").remove(); }, 250);

		mk_kopieren_box_is_open = 0;
	}
}); }




// mk_editor_crop_afbeelding
jQuery(window).ready(function($) { 


	//ACF Galerij
	$( ".acf-gallery .acf-gallery-attachment .thumbnail" ).on( "click", function() {
		//console.log( $( this ).text() );
		setTimeout(() => {
		
			if( $(this).closest('.acf-gallery').find('.acf-gallery-attachment.active').length )
			{
				console.log( $(this).closest('.acf-gallery').attr('data-preview_size') );

				var size = $(this).closest('.acf-gallery').attr('data-preview_size');
				var id = $(this).closest('.acf-gallery').find('.acf-gallery-attachment.active').attr('data-id');

				$('.crop_acf_galerij_afbeelding_outer').remove();

				$(this).closest('.acf-gallery').find('.acf-gallery-side').addClass('enablecrop');

				$(this).closest('.acf-gallery').find('.acf-gallery-side-inner').append(
					'<div class="crop_acf_galerij_afbeelding_outer"><div class="crop_acf_galerij_afbeelding" onclick="crop_acf_galerij_afbeelding(\'' + id + ',' + size + '\');" img="'+id+'" size="'+size+'">Snij afbeelding bij</div></div>'
				);
			}
			else
			{
				var countinteval = 0;
				var thiselement = $(this).closest('.acf-gallery');

				var checkExist = setInterval(function() {
		
					if( countinteval == 0)
					{
						//console.log(thiselement);
					}
		
					if ($(thiselement).find('.cropThumbnailsLink').length) {
					
					
						//console.log("Exists!");

						if( $(thiselement).find('.acf-gallery-attachment.active').length )
						{

		
							var size = $(thiselement).attr('data-preview_size');
							var id = $(thiselement).find('.acf-gallery-attachment.active').attr('data-id');
			
							//console.log(size);
							//console.log(id);

							$('.crop_acf_galerij_afbeelding_outer').remove();
			
							$(thiselement).find('.acf-gallery-side').addClass('enablecrop');
			
							$(thiselement).find('.acf-gallery-side-inner').append(
								'<div class="crop_acf_galerij_afbeelding_outer"><div class="crop_acf_galerij_afbeelding"  onclick="crop_acf_galerij_afbeelding(\'' + id + ',' + size + '\');" img="'+id+'" size="'+size+'">Snij afbeelding bij</div></div>'
							);

						}
		
		
						//$('.cptSameRatioLabel').trigger('click');
		
						clearInterval(checkExist);
					}
					else if( countinteval > 100)
					{
						clearInterval(checkExist);
					}
					countinteval++;
				}, 100); // check every 100ms

			}
			
		}, 500);
	});








	//ACF Galrij openen
	$('.crop_acf_galerij_afbeelding').on('click tap', function (e) {

		//console.log('sdjifidsjfoidsf');

		if( $(this).attr('id') != null && $(this).attr('size') != null )
		{
			var	i =  "Snijd afbeelding bij",
				n = null;
				image_id = $(this).attr('id');
				posttype = "sectie";

			void 0 !== posttype && (n = posttype), (new CROP_THUMBNAILS_VUE.modal).open( image_id, n, i);

			var countinteval = 0;
			var size = 'cptImageSize-'+$(this).attr('size');

			var checkExist = setInterval(function() {
				if ($('img.cptCroppingImage').length) {
					//console.log("Exists!");

					var found = false;
					$('.cptImageSizelist li').each(function()
					{
						if( !$(this).hasClass(size) ) {
							$(this).remove();
						}
						else {
							found = true;
							$(this).trigger('click');
						}
					});

					if( found == false) {
						$('.cpt_ModalClose').trigger('click');
					}

					$('.cptSameRatioLabel').trigger('click');

					clearInterval(checkExist);
				}
				else if( countinteval > 100) {
					clearInterval(checkExist);
				}
			}, 100); // check every 100ms

		}

	});






	//ACF Afbeelding!
	$('.acf-field.acf-field-image').each(function()
	{
		var size = $(this).find('.acf-image-uploader').attr('data-preview_size');

		if ( $( "#mk_all_crop_sizes" ).length && $( '#mk_all_crop_sizes > div*[value="'+size+'"]' ).length ) {
 
			$(this).find('.acf-image-uploader').append(
				'<div class="crop_acf_afbeelding" size="'+$(this).find('.acf-image-uploader').attr('data-preview_size')+'">Snij afbeelding bij</div>'
			);
		}
	});
	
	$('.crop_acf_afbeelding').on('click tap', function (e) {

		if( $(this).closest('.acf-image-uploader').find('> input').val() != null && $(this).attr('size') != null )
		{
			var	i =  "Snijd afbeelding bij",
				n = null;
				image_id = $(this).closest('.acf-image-uploader').find('> input').val();
				posttype = "sectie";

			void 0 !== posttype && (n = posttype), (new CROP_THUMBNAILS_VUE.modal).open( image_id, n, i);

			var countinteval = 0;
			var size = 'cptImageSize-'+$(this).attr('size');

			var checkExist = setInterval(function() {
				if ($('img.cptCroppingImage').length) {
					//console.log("Exists!");

					var found = false;
					$('.cptImageSizelist li').each(function()
					{
						if( !$(this).hasClass(size) ) {
							$(this).remove();
						}
						else {
							found = true;
							$(this).trigger('click');
						}
					});

					if( found == false) {
						$('.cpt_ModalClose').trigger('click');
					}

					$('.cptSameRatioLabel').trigger('click');

					clearInterval(checkExist);
				}
				else if( countinteval > 100) {
					clearInterval(checkExist);
				}
			}, 100); // check every 100ms

		}

	});   


});







function crop_acf_galerij_afbeelding(data) { jQuery(function ($) {

	var dataarray = data.split(',');

	//console.log('testeste :: ' + dataarray[0] + " // " + dataarray[1]);

	if( dataarray[0] != null && dataarray[1] != null )
		{
			var	i =  "Snijd afbeelding bij",
				n = null;
				image_id = dataarray[0];
				posttype = "sectie";

			void 0 !== posttype && (n = posttype), (new CROP_THUMBNAILS_VUE.modal).open( image_id, n, i);

			var countinteval = 0;
			var size = 'cptImageSize-'+dataarray[1];

			var checkExist = setInterval(function() {
				if ($('img.cptCroppingImage').length) {
					//console.log("Exists!");

					var found = false;
					$('.cptImageSizelist li').each(function()
					{
						if( !$(this).hasClass(size) ) {
							$(this).remove();
						}
						else {
							found = true;
							$(this).trigger('click');
						}
					});

					if( found == false) {
						$('.cpt_ModalClose').trigger('click');
					}

					$('.cptSameRatioLabel').trigger('click');

					clearInterval(checkExist);
				}
				else if( countinteval > 100) {
					clearInterval(checkExist);
				}
			}, 100); // check every 100ms

		}
}); }