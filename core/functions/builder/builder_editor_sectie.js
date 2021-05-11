function  mk_editor_sectie()
{
	mk_editor_sectie_append();
}






function mk_editor_sectie_append() { jQuery(function ($) {

	$( "body" ).append( 

		'<div class="mk_editor_sectie">'+

			'<div class="mk_editor_sectie_titel" sectie_id="">'+

				'<div class="mk_editor_sectie_naam">Sectie aanpassen</div>'+

				

				'<div class="mk_editor_sectie_close" onclick="mk_editor_sectie_close()"></div>'+

				'<div class="mk_editor_sectie_opslaan" onclick="mk_save_sectie_open()">Sla sectie op!</div>'+

			'</div>'+

			'<div class="mk_editor_sectie_container">'+


				'<div class="mk_editor_sectie_settings">'+

					'<div class="mk_editor_settings">'+

						'<div class="mk_editor_section_titel">ID</div>'+

						'<input type="text" name="id" class="id" placeholder="ID">' +

					'</div>'+


					'<div class="mk_editor_settings">'+

						'<div class="mk_editor_section_titel">Class</div>'+

						'<input type="text" name="class" class="class" placeholder="Class">' +

					'</div>'+


					'<div class="mk_editor_settings">'+

						'<div class="mk_editor_section_titel">Color</div>'+

						'<input type="text" name="colorfield" class="colorfield">' +

					'</div>'+


					'<div class="mk_editor_settings">'+

						'<div class="mk_editor_section_titel">Achtergrond afbeelding</div>'+

						'<div class="mk_editor_achtergrond">'+

							'<div class="mk_editor_achtergrond_delete" onclick="mk_editor_achtergrond_remove()"></div>'+

							'<div id="mk_editor_achtergrond_hold" url="" onclick="mk_editor_achtergrond_media()"><div class="mk_editor_achtergrond_hover"><i class="fa fa-image"></i></div></div>'+

							'<div id="mk_editor_achtergrond_id"></div>'+

						'</div>'+

					'</div>'+


					'<div class="mk_editor_settings setting_achtergrond_crop notactive">'+

						'<div class="mk_editor_section_titel">Crop</div>'+

						'<div class="opties">'+
							'<div class="mk_editor_achtergrond_crop" onclick="mk_editor_crop_achtergrond()">Snij Achtergrond Afbeelding bij</div>' +
						'</div>'+

					'</div>'+



					'<div class="mk_editor_settings mk_editor_klant mk_editor_admin">'+

						'<div class="mk_editor_section_titel">Slot</div>'+


						'<div class="opties mk_sectie_slot_opties">'+

							'<input id="slot_0" type="radio" name="mk_sectie_slot" value="0"><label for="slot_0">Nee</label>' +
			 				'<input id="slot_1" type="radio" name="mk_sectie_slot" value="1"><label for="slot_1">Ja</label>' + 

		 				'</div>'+

					'</div>'+



					'<div class="mk_editor_settings mk_editor_klant mk_editor_admin">'+

						'<div class="mk_editor_section_titel">Settings</div>'+


						'<div class="opties mk_sectie_setting_opties">'+

							'<input id="setting_0" type="radio" name="mk_sectie_settings" class="mk_sectie_settings" value="0"><label for="setting_0">Normaal</label>' +
			 				// '<input id="setting_1" type="radio" name="mk_sectie_settings" class="mk_sectie_settings" value="1"><label for="setting_1">Volledig breedte</label>' + 
			 				'<input id="setting_2" type="radio" name="mk_sectie_settings" class="mk_sectie_settings" value="2"><label for="setting_2">Inner divs</label>' + 
			 				// '<input id="setting_3" type="radio" name="mk_sectie_settings" class="mk_sectie_settings" value="3"><label for="setting_3">Volledig breedte & Inner divs</label>' + 

		 				'</div>'+

					'</div>'+


					'<div class="mk_editor_settings mk_editor_klant mk_editor_admin">'+

						'<div class="mk_editor_section_titel">Sectie header</div>'+


						'<div class="opties mk_sectie_backend_opties">'+

							'<input id="type_0" type="radio" name="mk_sectie_type" value="0"><label for="type_0">Nee</label>' +
			 				'<input id="type_1" type="radio" name="mk_sectie_type" value="1"><label for="type_1">Ja</label>' + 

		 				'</div>'+

					'</div>'+

					

				'</div>'+


				'<div class="mk_editor_sectie_footer">'+

				'<input class="button-primary" style=" padding: 15px; line-height: 0;" id="mk_editor_sectie_save" type="button" onclick="mk_editor_sectie_save()" value="Bijwerken!">'+


				'</div>'+


			'</div>'+

		'</div>'

	);


	// builder_klant_admin
	if( builder_klant_admin != 0 )
	{
		$('.mk_editor_sectie .mk_editor_admin').addClass('hide');
	}


	$(function() { $('.colorfield').wpColorPicker();  });
}); }
//mk_editor_sectie_append




function mk_editor_sectie_open(sectie_id)  { jQuery(function ($) {

	if( !$('ul.classbuilderinner').hasClass('noclick') )
	{
		screenoverlay_open();



		//set position editor
		var scrollTop = $(window).scrollTop();
		var editorHeight = $('.mk_editor_sectie').outerHeight();
		var screenHeight = window.innerHeight;

		var editorpos = 50;
		if( (screenHeight - editorHeight) > 0 )
		{
			editorpos = (screenHeight - editorHeight) / 2;
			if(editorpos < 50) { editorpos = 50; }
		}

		$('.mk_editor_sectie').css('top', scrollTop + editorpos);

		//reset
		$('.mk_editor_sectie .mk_editor_achtergrond_delete').removeClass('active');


		//setup
		$('.mk_editor_sectie .mk_editor_sectie_titel').attr('sectie_id', sectie_id);

		$('.mk_editor_sectie .mk_editor_settings input.id').val( $('#sectie_' + sectie_id + ' .sectie_gegevens').attr('sectie_cssid') );

		$('.mk_editor_sectie .mk_editor_settings input.class').val( $('#sectie_' + sectie_id + ' .sectie_gegevens').attr('sectie_class') );

		
		//Bg color
		var bgcolor =  $('#sectie_' + sectie_id + ' .sectie_gegevens').attr('sectie_bgcolor');

		if(bgcolor == "")
		{
			$('.mk_editor_sectie .mk_editor_settings .wp-color-result').css('background-color', '#f7f7f7' );
			$('.mk_editor_sectie .mk_editor_settings input.colorfield').val( "" );
		}else 
		{
			$('.mk_editor_sectie .mk_editor_settings .wp-color-result').css('background-color', bgcolor );
			$('.mk_editor_sectie .mk_editor_settings input.colorfield').val( bgcolor );
		}


		//bg img
		var bgimg  = $('#sectie_' + sectie_id + ' .sectie_gegevens').attr('sectie_bgimg');
		var bgimg_thumb  = $('#sectie_' + sectie_id + ' .sectie_gegevens').attr('sectie_imgthumb');

		if(bgimg == "")
		{
			$('#mk_editor_achtergrond_id').html("");

			$('#mk_editor_achtergrond_hold').attr('url', '');
			$('#mk_editor_achtergrond_hold').css('background-image', 'initial');
		}
		else
		{
			$('#mk_editor_achtergrond_id').html( bgimg );
			
			$('#mk_editor_achtergrond_hold').css('background-image', 'url('+ bgimg_thumb +')');
			$('#mk_editor_achtergrond_hold').attr('url', bgimg_thumb);

			$('.mk_editor_sectie .mk_editor_achtergrond_delete').addClass('active');
		}

		$('.mk_editor_sectie .mk_editor_settings input.mk_editor_achtergrond_url').val( $('#sectie_' + sectie_id + ' .sectie_gegevens').attr('sectie_bgimg') );


		// crop tool
		if( $('.mkbuilder_gegevens').attr('croptool') == 1 && $('.mkbuilder_gegevens').attr('cropachtergrond') != "" || $('.mkbuilder_gegevens').attr('croptool') == 1 && $('.mkbuilder_gegevens').attr('cropheader') != "" ) 
		{ 
			$('.setting_achtergrond_crop').removeClass("notactive");
		}


		//innerdivs

		//opties
		var slot = $('#sectie_' + sectie_id + ' .sectie_gegevens').attr('sectie_slot');
		if(slot == "" | slot == null) { slot = 0; }
		$('.mk_editor_sectie .opties.mk_sectie_slot_opties input*[value='+slot+']').prop('checked', true);


		//opties
		var setting = $('#sectie_' + sectie_id + ' .sectie_gegevens').attr('sectie_setting');
		if(setting == "" | setting == null) { setting = 0; }
		$('.mk_editor_sectie .opties.mk_sectie_setting_opties input*[value='+setting+']').prop('checked', true);


		//opties
		var type = $('#sectie_' + sectie_id + ' .sectie_gegevens').attr('sectie_type');
		if(type == "" | type == null) { type = 0; }
		$('.mk_editor_sectie .opties.mk_sectie_backend_opties input*[value='+type+']').prop('checked', true);

		$('.mk_editor_sectie').addClass('open');
	}
	else
	{
		$('ul.classbuilderinner').removeClass('noclick');
	}
}); }
//mk_editor_sectie_open


function mk_editor_sectie_close()  { jQuery(function ($) {

	if( $('.mk_editor_sectie').length > 0 )
	{
		$('.mk_editor_sectie').addClass('close');
		setTimeout( function() { $('.mk_editor_sectie').removeClass('open'); $('.mk_editor_sectie').removeClass('close'); }, 250);

		screenoverlay_close();

		mk_editor_sectie_is_open = 0;
	}

}); }
//mk_editor_sectie_close


function mk_editor_achtergrond_remove() { jQuery(function ($) {

	$('#mk_editor_achtergrond_id').html("");
	$('#mk_editor_achtergrond_hold').css('background-image', 'initial');
	$('#mk_editor_achtergrond_hold').attr('url', '');
	$('.mk_editor_sectie .mk_editor_achtergrond_delete').removeClass('active');
}); }


function mk_editor_sectie_save() {	jQuery(function ($) {

	var id = $('.mk_editor_sectie_titel').attr('sectie_id');

	var bgurl = $('#mk_editor_achtergrond_hold').attr('url');

	console.log(id);


	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_cssid', $('.mk_editor_sectie .mk_editor_settings input.id').val() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_class', $('.mk_editor_sectie .mk_editor_settings input.class').val() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_bgimg', $('#mk_editor_achtergrond_id').html() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_imgthumb', bgurl );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_bgcolor', $('.mk_editor_sectie .mk_editor_settings input.colorfield').val() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_slot', $('.mk_editor_sectie .mk_sectie_slot_opties input:checked').val() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_zichtbaar', "" );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_setting', $('.mk_editor_sectie .mk_sectie_setting_opties input:checked').val() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_type', $('.mk_editor_sectie .mk_sectie_backend_opties input:checked').val() );

	if($('.mk_editor_sectie .mk_sectie_backend_opties input:checked').val() == 1)
	{
		if ( !$('#sectie_' + id ).hasClass('sectieheader') )
		{
			$('#sectie_' + id ).addClass('sectieheader');
		}

	}
	else
	{
		$('#sectie_' + id ).removeClass('sectieheader');
	}


	$('#sectie_' + id + ' .sectie_naam span').html( $('.mk_editor_sectie .mk_editor_settings input.class').val() ) //sectie_naam



	//show preview
	

	if(bgurl != "")
	{
		$('#sectie_' + id + ' #mk_editor_achtergrond_hold_preview').css('background-image', 'url('+bgurl+')');

		if( !$('#sectie_' + id + ' #mk_editor_achtergrond_hold_preview').hasClass('active') )
		{
			$('#sectie_' + id + ' #mk_editor_achtergrond_hold_preview').addClass('active');
		}
	}
	else
	{
		$('#sectie_' + id + ' #mk_editor_achtergrond_hold_preview').css('background-image', 'initial');
		$('#sectie_' + id + ' #mk_editor_achtergrond_hold_preview').removeClass('active');
	}

	


	mk_editor_sectie_close();
}); }
//mk_editor_sectie_save



function mk_editor_crop_achtergrond() {	jQuery(function ($) {

	//console.log(  $('.mk_editor_sectie .mk_editor_settings input.class').val() );

	var sizeachtergrond = $('.mkbuilder_gegevens').attr('cropachtergrond');
	
	var temp_classes = $('.mk_editor_sectie .mk_editor_settings input.class').val();

	if (temp_classes.indexOf("header") >= 0)
	{
		//console.log('contains!!');

		if( $('.mkbuilder_gegevens').attr('cropheader') != "" ) 
		{ 
			sizeachtergrond = $('.mkbuilder_gegevens').attr('cropheader');
		}
	}

	if ( $( "#mk_all_crop_sizes" ).length ) { if( !$( '#mk_all_crop_sizes > div*[value="'+sizeachtergrond+'"]' ).length ) { return; } } else { return; }


	if( $('#mk_editor_achtergrond_id') != null && !$('#mk_editor_image_id').is(':empty') && sizeachtergrond != "" )
	{
		var	i =  "Snijd achtergrond afbeelding bij",
			n = null;
			image_id = $('#mk_editor_achtergrond_id').text();
			posttype = "sectie";

			//console.log( " crop " + image_id + " // " + i + " // " + n  )

		void 0 !== posttype && (n = posttype), (new CROP_THUMBNAILS_VUE.modal).open( image_id, n, i);
	}


	var countinteval = 0;
	var checkExist = setInterval(function() {
		if ($('img.cptCroppingImage').length) {
		   //console.log("Exists!");

		   var found = false;
		   $('.cptImageSizelist li').each(function()
		   {

				if( !$(this).hasClass('cptImageSize-' + sizeachtergrond) )
				{

					$(this).remove();
				}
				else
				{
					found = true;
					//console.log( 'sdofjdosjfodsjfo');
					$(this).trigger('click');
				}

		   });

			if( found == false) {
				$('.cpt_ModalClose').trigger('click');
			}

		   $('.cptSameRatioLabel').trigger('click');

		   clearInterval(checkExist);
		}
		else if( countinteval > 100)
		{
			$('.cpt_ModalClose').trigger('click');
			clearInterval(checkExist);
		}
	 }, 100); // check every 100ms

}); }



// jQuery(document).ready(function (t) {
// 	t(document).on("click", ".cropThumbnailsLink", function (e) {
// 		//e.preventDefault();
// 		var a = t(this).data("cropthumbnail"),
// 			i = t(this).attr("title"),
// 			n = null;

// 			console.log( " test " + a.image_id + " // " + i + " // " + n  );

// 		//void 0 !== a.posttype && (n = a.posttype), new CROP_THUMBNAILS_VUE.modal().open(a.image_id, n, i);
// 	});
// });