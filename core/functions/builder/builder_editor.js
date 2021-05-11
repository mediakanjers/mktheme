var editorstarted = false;

function editModuleTekst(mod_id) { jQuery(function ($) {
	//console.log("yes go for the text editor!!");


	// if( !$('#mod_id_' + mod_id ).hasClass('module_titel') )
	// {
	// 	console.log("jaaaa");
	// }

	//console.log( $('#mod_id_' + mod_id ).attr("class") ) ;

	//if( !$('#mod_id_' + mod_id ).hasClass('ui-sortable-helper') )
	if( !$('ul.newrij_inner').hasClass('noclick') )
	{
		var module_tekst = $('#mod_id_' + mod_id + ' .mod_gegevens textarea').val();

		if(!editorstarted) 
		{
			start_editor(mod_id, module_tekst);	
		}
		else
		{
			open_editor(mod_id, module_tekst);
		}
	}
	else
	{
		$('ul.newrij_inner').removeClass('noclick');
	}
}); }

function start_editor(mod_id, module_tekst) { jQuery(function ($) {

	$(".mk_editor_container .mk_editor_module_container" ).append(

		//code
		'<div class="mk_editor_module_code mk_editor_section">'+

			'<div class="mk_editor_section_titel">Code editor</div>'+

			'<textarea id="mk_editor_code" class="" style="height: 175px; width:100%;"></textarea>'+

		'</div>'+


		//titel
		'<div class="mk_editor_module_titel mk_editor_section">'+

			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">Titel</div>'+

				'<div class="input">'+

					'<input class="titel" type="text" name="titel" placeholder="Titel">' +

				'</div>'+

			'</div>'+

			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">Heading</div>'+

				'<div class="opties titel">'+

					'<input id="heading_1" type="radio" name="editor_title" value="1" checked=""><label for="heading_1">h1</label>' +

					'<input id="heading_2" type="radio" name="editor_title" value="2"><label for="heading_2">h2</label>' + 

					'<input id="heading_3" type="radio" name="editor_title" value="3"><label for="heading_3">h3</label>' +

					'<input id="heading_4" type="radio" name="editor_title" value="4"><label for="heading_4">h4</label>' +

					'<input id="heading_5" type="radio" name="editor_title" value="5"><label for="heading_5">h5</label>' +

				'</div>'+

			'</div>'+

		'</div>'+


		//afbeelding
		'<div class="mk_editor_module_afbeelding mk_editor_section">'+

			'<div class="mk_editor_settings">' +

				'<div class="mk_editor_section_titel">Afbeelding</div>'+

				'<div class="mk_editor_section_afbeelding">'+

					'<div id="mk_editor_image_hold" onclick="mk_editor_addmedia()"></div>'+

					'<div id="mk_editor_image_id"></div>'+

					'<input type="button" name="upload-btn" id="upload-btn" class="button-secondary" onclick="mk_editor_addmedia()" value="Upload Image">'+

				'</div>'+

			'</div>'+

			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">URL link</div>'+

				'<input class="afbeeldingurl" type="text" name="afbeeldingurl" placeholder="URL">' +

			'</div>'+

			'<div class="mk_editor_settings">' +

				'<div class="mk_editor_section_titel">Thumbnail</div>'+

				'<div class="opties mk_editor_section_thumbs">'+

					'<div class="mk_editor_section_thumbnails_options"></div>'+

				'</div>'+

			'</div>'+

			'<div class="mk_editor_settings croptool notactive hide">' +

				'<div class="mk_editor_section_titel">Crop</div>'+

				'<div class="opties mk_editor_section_crop_afbeelding">'+

					'<div class="mk_editor_section_crop_afbeelding_button" onclick="mk_editor_crop_afbeelding()">Snij afbeelding bij</div>'+

				'</div>'+

			'</div>'+

		'</div>'+


		//galerij
		'<div class="mk_editor_module_galerij mk_editor_section">'+

			'<div class="mk_editor_settings post_galerij">'+

				'<div class="mk_editor_section_titel">Keuze</div>'+

				'<div class="opties galerijen">'+

					'<input id="galerij_keuze_0" type="radio" name="editor_galerij" onclick="change_galerij(0)" value="0" checked=""><label for="galerij_keuze_0">Standaard</label>' +

					'<input id="galerij_keuze_1" type="radio" name="editor_galerij" onclick="change_galerij(1)" value="1"><label for="galerij_keuze_1">Kies een post type</label>' + 

				'</div>'+

			'</div>'+

			'<div class="mk_editor_settings keuzegalerij">'+

				'<div class="mk_editor_section_titel">Kies een galerij</div>'+

				'<div class="opties postgalerijen">'+

				'</div>'+

			'</div>'+

			'<div class="mk_editor_settings standaardgalerij">' +

				'<div class="mk_editor_section_titel">Galerij</div>'+

				'<div class="galerij_items">'+

					'<ul id="galerij_wrap" class="galerij_wrap module_preview_galerij"></ul>'+

					'<input type="button" name="upload-btn" id="upload-btn" class="button-secondary" onclick="addgalerij()" value="Afbeeldingen toevoegen">'+

				'</div>'+

			'</div>'+

			'<div class="mk_editor_settings mk_editor_klant">'+

				'<div class="mk_editor_section_titel">Weergave</div>'+

				'<div class="opties mk_module_view_opties">'+

					'<input id="galerij_0" type="radio" name="mk_module_galerij" value="0" /><label for="galerij_0">Galerij</label>' +

					'<input id="galerij_1" type="radio" name="mk_module_galerij" value="1" /><label for="galerij_1">Slider</label>' + 

				'</div>'+

			'</div>'+

			'<div class="mk_editor_settings">' +

				'<div class="mk_editor_section_titel">Thumbnail</div>'+

				'<div class="opties mk_editor_section_thumbs">'+

					'<div class="mk_editor_section_thumbnails_options_galerij" onchange="galerij_select_thumb_changed()"></div>'+

				'</div>'+

			'</div>'+

		'</div>'+


		//Video
		'<div class="mk_editor_module_video mk_editor_section">'+

			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">Vimeo of Youtube</div>'+

				'<div class="opties videopath">'+

					'<input id="videopath_3" type="radio" name="editor_videopath" onclick="change_video(3)" value="3" checked=""><label for="videopath_3">Uploaden</label>' +

					'<input id="videopath_0" type="radio" name="editor_videopath" onclick="change_video(1)" value="1"><label for="videopath_0">Vimeo</label>' +

					'<input id="videopath_1" type="radio" name="editor_videopath" onclick="change_video(2)" value="2"><label for="videopath_1">Youtube</label>' + 

				'</div>'+

			'</div>'+



			'<div class="mk_editor_settings mk_editor_module_video_id">'+

				'<div class="mk_editor_section_titel">Video URL ID</div>'+

				'<div class="input">'+

					'<input class="video" type="text" name="video" placeholder="Vul hier alleen de video ID in!">' +

				'</div>'+

			'</div>'+


			//Upload zelf een video vanaf de mediabank.
			'<div class="mk_editor_settings mk_editor_module_video_uploaden">' +

				'<div class="mk_editor_section_titel">Video</div>'+

				'<div class="mk_editor_section_video">'+

					// '<div id="mk_editor_video_hold" onclick="mk_editor_addvideo()"></div>'+

					'<input type="button" name="upload-btn" id="upload-btn" class="button-secondary" onclick="mk_editor_addvideo()" value="Upload Video">'+

					'<div class="mk_editor_video_info">'+
						'<div id="mk_editor_video_id"></div>'+
						'<div id="mk_editor_video_naam"></div>'+
						'<div id="mk_editor_video_url"></div>'+
						'<div id="mk_editor_video_poster_hold"></div>'+
						
					'</div>'+

					
				'</div>'+

			'</div>'+



			//Upload zelf een video vanaf de mediabank.
			'<div class="mk_editor_settings mk_editor_module_video_uploaden_poster">' +

				'<div class="mk_editor_section_titel">Video Poster</div>'+

				'<div class="mk_editor_section_video">'+

					// '<div id="mk_editor_video_hold" onclick="mk_editor_addvideo()"></div>'+

					'<input type="button" name="upload-btn" id="upload-btn" class="button-secondary" onclick="mk_editor_addvideo_poster()" value="Upload Video Poster">'+

					'<div class="mk_editor_video_info_poster">'+
						'<div id="mk_editor_video_id_poster"></div>'+
						'<div id="mk_editor_video_naam_poster"></div>'+
						'<div id="mk_editor_video_url_poster"><img src=""/></div>'+
					'</div>'+

					
				'</div>'+

			'</div>'+

			

			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">Autoplay & muted</div>'+

				'<div class="opties autoplay">'+

					'<input id="autoplay_1" type="radio" name="editor_autoplay" value="1" checked=""><label for="autoplay_1">Speel niet automatisch af!</label>' +

					'<input id="autoplay_2" type="radio" name="editor_autoplay" value="2"><label for="autoplay_2">Speel automatisch af!</label>' + 

				'</div>'+

			'</div>'+

		'</div>' +


		//Knop
		'<div class="mk_editor_module_knop mk_editor_section">'+

			'<div class="mk_editor_module_knop_id"></div>'+

			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">Knop Titel</div>'+

				'<input class="knoptitel" type="text" name="knoptitel" placeholder="Knop Titel">' +

			'</div>'+

			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">Knop URL</div>'+

				'<input class="knopurl" type="text" name="knopurl" onchange="knopurlchange()" placeholder="Knop URL">' +

			'</div>'+

			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">Target</div>'+

				'<div class="opties mk_module_target_opties">'+

					'<input id="target_0" type="checkbox" name="mk_module_target" value="1"><label for="target_0">Blank</label><span>Open pagina in een nieuwe tabblad!</span>' +

				'</div>'+

			'</div>'+


			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">Externe link</div>'+

				'<div class="opties mk_module_extern_opties">'+

					'<input id="extern_0" type="checkbox" name="mk_module_extern" value="1"><label for="extern_0">Extern</label><span>Aanvinken als je gebruik maakt van een externe website of http(s)://www</span>' +

				'</div>'+

			'</div>'+


			'<div class="mk_editor_section_knop_paginas"></div>'+

		'</div>' +



		//bestand MODULE!!
		'<div class="mk_editor_module_bestand mk_editor_section">'+

			'<div class="mk_editor_module_bestand_id"></div>'+


			//bestand uploaden
			'<div class="mk_editor_settings mk_editor_module_bestand_uploaden">' +

				'<div class="mk_editor_section_titel">Bestand uploaden</div>'+

				'<div class="mk_editor_section_bestand">'+

					'<input type="button" name="upload-btn" id="upload-btn" class="button-secondary" onclick="mk_editor_addbestand()" value="Upload Bestand">'+

					'<div class="mk_editor_bestand_info">'+
						'<div id="mk_editor_bestand_id"></div>'+
						'<div id="mk_editor_bestand_naam"></div>'+
						'<div id="mk_editor_bestand_url"></div>'+
						'<div id="mk_editor_bestand_poster_hold"></div>'+
						
					'</div>'+

				'</div>'+

			'</div>'+



			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">Bestands Titel</div>'+

				'<input class="bestandtitel" type="text" name="bestandtitel" placeholder="Bestands Titel">' +

			'</div>'+

			// '<div class="mk_editor_settings">'+

			// 	'<div class="mk_editor_section_titel">Bestands URL</div>'+

			// 	'<input class="bestandurl" type="text" name="bestandurl" onchange="knopurlchange()" placeholder="Bestands URL">' +

			// '</div>'+

			// '<div class="mk_editor_settings">'+

			// 	'<div class="mk_editor_section_titel">Target</div>'+

			// 	'<div class="opties mk_module_target_opties">'+

			// 		'<input id="target_0" type="checkbox" name="mk_module_target" value="1"><label for="target_0">Blank</label><span>Open pagina in een nieuwe tabblad!</span>' +

			// 	'</div>'+

			// '</div>'+


			// '<div class="mk_editor_settings">'+

			// 	'<div class="mk_editor_section_titel">Externe link</div>'+

			// 	'<div class="opties mk_module_extern_opties">'+

			// 		'<input id="extern_0" type="checkbox" name="mk_module_extern" value="1"><label for="extern_0">Extern</label><span>Aanvinken als je gebruik maakt van een externe website of http(s)://www</span>' +

			// 	'</div>'+

			// '</div>'+


			// //optie bestand uploaden
			// '<div class="mk_editor_settings">'+

			// 	'<div class="mk_editor_section_titel">Bestand</div>'+

			// 	'<div class="opties mk_module_bestand_opties">'+

			// 		'<input id="bestand_0" type="checkbox" name="mk_module_target"  onclick="change_bestand(1)" value="1"><label for="bestand_0">Een bestand openen!</label><span>Upload een bestand</span>' +

			// 	'</div>'+

			// '</div>'+


			

			//'<div class="mk_editor_section_knop_paginas"></div>'+

		'</div>'

	);

	//settigns module
	$(".mk_editor_container .mk_editor_inner" ).append(

		'<div class="mk_editor_module_settings">'+

			'<div class="mk_editor_settings">'+

				'<div class="mk_editor_section_titel">Class</div>'+

				'<input type="text" name="class" class="class" placeholder="Class">' +

			'</div>'+

			'<div class="mk_editor_settings mk_editor_klant mk_editor_slot">'+

				'<div class="mk_editor_section_titel">Slot</div>'+

				'<div class="opties mk_module_slot_opties">'+

					'<input id="slot_0" type="radio" name="mk_module_slot" value="0"><label for="slot_0">Nee</label>' +

					'<input id="slot_1" type="radio" name="mk_module_slot" value="1"><label for="slot_1">Ja</label>' + 

				'</div>'+

			'</div>'+

		'</div>'+

		'<div class="mk_editor_module_footer">'+

		'<input class="button-primary" style=" padding: 15px; line-height: 0;" name="mk_editor_save" id="mk_editor_save" type="button" onclick="mk_editor_save_tekst()" value="Bijwerken!">'+

		'</div>'

	);


	// builder_klant_admin
	if( builder_klant_admin != 0 )
	{
		$('.mk_editor_container .mk_editor_slot').addClass('hide');
	}


	//$('.mk_editor_section_knop_paginas').html(  );

	$("#allepaginas").detach().appendTo(".mk_editor_container .mk_editor_section_knop_paginas");

	var width = 0;
	$('.allepaginas_menu ul li').each(function() { width += $(this).outerWidth() + 1; });
	$('.allepaginas_menu ul').css('min-width', width);

	$("#mk_post_galerijen").detach().appendTo(".mk_editor_container .postgalerijen");

	//$("#mk_thumbnail_options").detach().appendTo(".mk_editor_container .mk_editor_section_thumbnails_options");

	var thumbnailoptions = $("#mk_thumbnail_options").html(); $("#mk_thumbnail_options").remove();

	//mk_editor_section_thumbnails_options_galerij
	$(".mk_editor_container .mk_editor_section_thumbnails_options").html( thumbnailoptions );
	$(".mk_editor_container .mk_editor_section_thumbnails_options_galerij").html( thumbnailoptions );

	//$('#mk_builder_tekst_editor_wrapper').detach().appendTo('.mk_editor_container .mk_editor_tekst_editor');

	//tinymce.init({ selector: "textarea.mkeditor", });

	/*try { tinymce.remove({ selector: "textarea.mkeditor", }); } catch (e) {}

	tinymce.init({ 

		selector: "textarea.mkeditor", 

		mediaButtons: true, 

		wpview: true,

		quicktags: { "buttons": "strong,em,link,ul,li,code" },

      	tinymce: { wpautop:true  }, 

      	 plugins: [ "wpview" ],

  	});//*/

  	$('#mkbuilderteksteditor_ifr').css('height', '300px');

 //  	if( $('#wp-mkbuilderteksteditor-wrap').hasClass('tmce-active') )

	// {

	// 	$('#wp-mkbuilderteksteditor-wrap').removeClass('tmce-active');

	// 	$('#wp-mkbuilderteksteditor-wrap').addClass('html-active');

	// 	$( "#mkbuilderteksteditor-html" ).trigger( "click" );

	// }

	//console.log('started!');

	editorstarted = true;

	open_editor(mod_id, module_tekst);

	//voor galerij

	$( "ul#galerij_wrap" ).sortable({ connectWith: "ul#galerij_wrap" });

	$( "#galerij_wrap" ).disableSelection();

}); }

var plainorvisualtekst = false;

function open_editor(mod_id, module_tekst) { jQuery(function ($) {

	screenoverlay_open();

	//get module type

	var type_module = $('li#mod_id_' + mod_id).attr('type');

	var module_tekst = $('#mod_id_' + mod_id + ' .mod_gegevens textarea').val();

	var module_titel = $('#mod_id_' + mod_id + ' .mod_gegevens input').val();

	var module_id = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_id');

	var module_class = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_class');

	var slot = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_slot');

	//reset

	$('.mk_editor_container #mk_editor_tekst').html("");

	//tinyMCE.editors[$('#mk_editor_tekst').attr('id')].setContent("");

	$('.mk_editor_container #mk_editor_code').html("");

	$('.mk_editor_container').removeClass('editer_tekst');

	$('.mk_editor_container').removeClass('editer_code');

	$('.mk_editor_container').removeClass('editer_titel');

	$('.mk_editor_container').removeClass('editer_afbeelding');

	$('.mk_editor_container').removeClass('editer_galerij');
	$('.mk_editor_container').removeClass('no_post_galerij');
	
	$('.mk_editor_container').removeClass('editer_knop');

	$('.mk_editor_container').removeClass('editer_video');
	$('.mk_editor_container').removeClass('editer_bestand');

	//Standaard

	$('.mk_editor_container .mk_editor_module_id').html(mod_id);

	$('.mk_editor_container .mk_editor_module_naam').html('Editing : ' + type_module + ' module');

	//$('.mk_editor_settings input.id').val(module_id);

	$('.mk_editor_container .mk_editor_settings input.class').val(module_class);

	//mk_module_slot_opties

	//opties

	if(slot == "" | slot == null) { slot = 0; }

	$('.mk_editor_settings .opties.mk_module_slot_opties input*[value='+slot+']').prop('checked', true);

	//tekst module

	if(type_module == "tekst")
	{
		//console.log(module_tekst);

		$('.mk_editor_container').addClass('editer_tekst');

		//$('.mk_editor_container #mk_editor_tekst').html(module_tekst);

		$('#mk_builder_tekst_editor_wrapper textarea#mkbuilderteksteditor').val(module_tekst);

		jQuery('#mkbuilderteksteditor_ifr').contents().find('#tinymce').html(module_tekst);


		if( getCacheEditor() == 1 && !$('.mk_editor_container #wp-mkbuilderteksteditor-wrap').hasClass('tmce-active') ) 
		{ 
			//console.log( " ///// " + getCacheEditor() ); 
			$( ".mk_editor_container #mkbuilderteksteditor-tmce" ).trigger( "click" ); 
		} 
		else if( getCacheEditor() == 2 && !$('.mk_editor_container #wp-mkbuilderteksteditor-wrap').hasClass('html-active') ) 
		{
			//console.log( " ///// " + getCacheEditor() ); 
			$( ".mk_editor_container #mkbuilderteksteditor-html" ).trigger( "click" ); 
		} 
		else if( $('.mkbuilder_gegevens').attr('cache_editor') == 1  && !$('.mk_editor_container #wp-mkbuilderteksteditor-wrap').hasClass('tmce-active') ) 
		{ 
			//console.log( " chaahahaha " );  
			$( ".mk_editor_container #mkbuilderteksteditor-tmce" ).trigger( "click" );  
		}

		setTimeout( function() { $('#mkbuilderteksteditor_ifr').css('height', '300px'); }, 250);


		// if( !plainorvisualtekst )

		// {

		// 	$('#wp-mkbuilderteksteditor-wrap').removeClass('html-active');

		// 	$('#wp-mkbuilderteksteditor-wrap').addClass('tmce-active');

		// 	$( "#mkbuilderteksteditor-tmce" ).trigger( "click" );

		// }

		// else

		// {

		// 	$('#wp-mkbuilderteksteditor-wrap').removeClass('tmce-active');

		// 	$('#wp-mkbuilderteksteditor-wrap').addClass('html-active');

		// 	$( "#mkbuilderteksteditor-html" ).trigger( "click" );

		// }

		//tinymce.editors[$('#mkbuilderteksteditor').attr('id')].setContent(module_tekst);

	}

	//code module
	else if(type_module == "code")
	{

		$('.mk_editor_container').addClass('editer_code');

		//console.log('teskt: ' +  module_tekst);

		$('.mk_editor_container #mk_editor_code').val(module_tekst);

	}

	//code titel
	else if(type_module == "titel")
	{

		$('.mk_editor_container').addClass('editer_titel');

		$('.mk_editor_module_container .titel').val(module_titel);

		var module_htag = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_htag');

		if(module_htag == "" | module_htag == null) { module_htag = 1;}

		//$('.mk_editor_module_container input:radio[name="editor_title"]').filter('[value="'+module_htag+'"]').attr('checked', true);

		$('.mk_editor_settings .opties.titel input*[value='+module_htag+']').prop('checked', true);

	}

	//code afbeelding
	else if(type_module == "afbeelding")
	{
		$('.mk_editor_container').addClass('editer_afbeelding');

		var module_img = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_img');
		var module_size = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_size');
		var module_url = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_url');

		$('#mk_editor_image_id').html( module_img );

		if($('#mod_id_' + mod_id + ' .module_preview_afbeelding').html() != "")
		{
			$('#mk_editor_image_hold').html( $('#mod_id_' + mod_id + ' .module_preview_afbeelding').html() );
		}
		else
		{
			$('#mk_editor_image_hold').html('<div class="image"><img src=""/></div>');
		}

		$('.mk_editor_settings .mk_editor_section_thumbnails_options select').val(module_size);

		$('.mk_editor_module_afbeelding .mk_editor_settings .afbeeldingurl').val();
		$('.mk_editor_module_afbeelding .mk_editor_settings .afbeeldingurl').val(module_url);

		if( $('.mkbuilder_gegevens').attr('croptool') == 1 ) 
		{ 
			$( ".mk_editor_settings.croptool" ).removeClass( "notactive" );
		}

		afbeelding_select_thumb_changed();
	}

	//code galerij
	else if(type_module == "galerij")
	{
		$('.mk_editor_container').addClass('editer_galerij');

		$('#mk_builder_editor_metabox').addClass('open');

		//console.log( $('#mod_id_' + mod_id + ' .galerij_items .module_preview_galerij').html() );

		$('#galerij_wrap').html( $('#mod_id_' + mod_id + ' .galerij_items .module_preview_galerij').html() );

		var module_view = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_view');

		if(module_view == "" | module_view == null) { module_view = 0; }

		$('.mk_editor_settings .opties.mk_module_view_opties input*[value='+module_view+']').prop('checked', true);

		var module_size = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_size');
		$('.mk_editor_settings .mk_editor_section_thumbnails_options_galerij select').val(module_size);


		// v2.0.8.2
		$('.mk_editor_settings.keuzegalerij').removeClass('active');
		$('.mk_editor_settings.standaardgalerij').removeClass('active');

		var module_target = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_target');

		if(module_target == "" | module_target == null | module_target == 0) { 
			module_target = 0; 
			
			$('.mk_editor_settings.standaardgalerij').addClass('active');
		}
		else
		{
			$('.mk_editor_settings.keuzegalerij').addClass('active');
		}

		$('.mk_editor_settings .opties.galerijen input*[value="'+module_target+'"]').prop('checked', true);


		//Select correct posttype
		var module_galerij = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_galerij');

		$("#mk_post_galerijen select").val( module_galerij );

		if( $('.mkbuilder_gegevens').attr('posttype_galerijen') == '0' && module_target == 0) { $('.mk_editor_container').addClass('no_post_galerij'); } 


		galerij_select_thumb_changed();
	}

	//mk_editor_module_knop
	else if(type_module == "knop")
	{
		$('.mk_editor_settings .opties.mk_module_target_opties input').prop('checked', false);
		$('.mk_editor_settings .opties.mk_module_extern_opties input').prop('checked', false);

		$('.mk_editor_container').addClass('editer_knop');

		var target = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_target');

		var extern = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_extern');

		if(target == 1)
		{
			$('.mk_editor_settings .opties.mk_module_target_opties input*[value='+target+']').prop('checked', true);
		}

		if(extern == 1)
		{
			$('.mk_editor_settings .opties.mk_module_extern_opties input*[value='+extern+']').prop('checked', true);
		}

		$('.mk_editor_module_knop input.knopurl').val( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_link_url') );
		$('.mk_editor_module_knop input.knopurl').attr('slug', $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_link_url') );
		$('.mk_editor_module_knop input.knopurl').attr('slugid', $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_link_id') );

		$('.mk_editor_module_knop input.knoptitel').val( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_link_titel') );

		$('.mk_editor_module_knop .mk_editor_module_knop_id').text( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_link_id') );


		// if( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_bestand') != "" )
		// {
		// 	$('#mk_editor_bestand_id').html( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_bestand') );
		// 	$('.mk_editor_settings .opties.mk_module_bestand_opties input#bestand_0').prop('checked', true);
		// }
		// else
		// {
		// 	$('#mk_editor_bestand_id').html("");
		// 	$('.mk_editor_settings .opties.mk_module_bestand_opties input#bestand_0').prop('checked', false);
		// }

		//change_bestand(1);
	}
	//mk_editor_module_bestand
	else if(type_module == "bestand")
	{
		$('.mk_editor_container').addClass('editer_bestand');
	
		// $('.mk_editor_module_bestand input.bestandurl').val( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_link_url') );

		// aanpasbaar
		$('.mk_editor_module_bestand input.bestandtitel').val( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_link_titel') );

		// data
		$('.mk_editor_module_bestand #mk_editor_bestand_id').html( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_link_id') );
		$('.mk_editor_module_bestand #mk_editor_bestand_naam').html( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_link_titel') );
		//$('.mk_editor_module_bestand #mk_editor_bestand_url').html( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_link_url') );

		$('.mk_editor_module_bestand #mk_editor_bestand_url').html( $('#mod_id_' + mod_id + ' .module_preview_bestand .url').html() );
	}

	//mk_editor_module_video
	else if(type_module == "video")
	{
		$('.mk_editor_container').addClass('editer_video');

		$('.mk_editor_module_video input.video').val();
		$('.mk_editor_settings .opties.autoplay input').prop('checked', false);
		$('.mk_editor_settings .opties.videopath input').prop('checked', false);

		$('.mk_editor_video_info #mk_editor_video_naam').html( "" );
		$('.mk_editor_video_info #mk_editor_video_url').html( "" );
		

		var module_optie = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_optie');
		var module_url = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_url');
		var module_target = $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_target');

		$('.mk_editor_module_video input.video').val( module_url );

		//optie
		if(module_optie == "" | module_optie == null) { module_optie = 1; }
		$('.mk_editor_settings .opties.autoplay input*[value='+module_optie+']').prop('checked', true);

		//target view
		if(module_target == "" | module_target == null) { module_target = 3; }
		$('.mk_editor_settings .opties.videopath input*[value='+module_target+']').prop('checked', true);
		change_video(module_target);

		$('.mk_editor_video_info #mk_editor_video_naam').html( $('#mod_id_' + mod_id + ' .module_preview_video .titel').html() );
		$('.mk_editor_video_info #mk_editor_video_url').html( $('#mod_id_' + mod_id +' .module_preview_video .url').html() );


		

		if( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_poster') != "" )
		{
			$('#mk_editor_module_video_uploaden_poster').addClass('active');

			$('#mk_editor_video_id_poster').html( $('#mod_id_' + mod_id + ' .mod_gegevens').attr('module_poster') );
			$('#mk_editor_video_url_poster img').attr('src', $('#mod_id_' + mod_id + ' .module_preview_video ').attr('poster') );
		}
		else
		{
			$('#mk_editor_module_video_uploaden_poster').removeClass('active');

			$('#mk_editor_video_id_poster').html( "" );
			$('#mk_editor_video_url_poster img').attr( 'src', '' );
		}
	}

	//open de editor

	$('#mk_builder_editor_metabox').removeClass('close');
	$('#mk_builder_editor_metabox').addClass('open');
	

	//set position editor

	var scrollTop = $(window).scrollTop();

	var editorHeight = $('#mk_builder_editor_metabox').outerHeight();

	var screenHeight = window.innerHeight;

	var screenWidth = window.innerWidth;

	var menuwidth = $('#adminmenuback').outerWidth(); // $('#wpcontent').width();

	var left = screenWidth;

	var editorpos = 50;

	if( (screenHeight - editorHeight) > 0 )
	{
		editorpos = (screenHeight - editorHeight) / 2;

		if(editorpos < 50) { editorpos = 50; }
	}

	if(type_module == "afbeelding")
	{
		$('#mk_builder_editor_metabox').css('top', scrollTop + 50);
	}
	else
	{
		$('#mk_builder_editor_metabox').css('top', scrollTop + editorpos);
	}
}); }

function close_mk_editor() { jQuery(function ($) {

	if( $('#mk_builder_editor_metabox').length > 0 )
	{
		$('#mk_builder_editor_metabox').addClass('close');
		setTimeout( function() { $('#mk_builder_editor_metabox').removeClass('open'); }, 250);

		screenoverlay_close(); 

		mk_builder_editor_metabox_is_open = 0;

		if( tinyMCE.activeEditor != null)
		{
			tinyMCE.activeEditor.setDirty(false);
		} 
	}
}); }


function knopurlchange() { jQuery(function ($) {

	if( $('.mk_editor_module_knop input.knopurl').attr('slug') != $('.mk_editor_module_knop input.knopurl').val() )
	{
		$('.mk_editor_module_knop_id').html('');
	}
	else
	{
		$('.mk_editor_module_knop_id').html( $('.mk_editor_module_knop input.knopurl').attr('slugid') );
	}
}); }

function addlink(e) { jQuery(function ($) {

	if( $('.mk_editor_module_knop input.knoptitel').val() == "" )
	{
		$('.mk_editor_module_knop input.knoptitel').val(  $(e).text() );
	}

	$('.mk_editor_module_knop input.knopurl').val( $(e).attr('paginaslug') );
	$('.mk_editor_module_knop input.knopurl').attr('slug', $(e).attr('paginaslug') );
	$('.mk_editor_module_knop input.knopurl').attr('slugid', $(e).attr('paginaid') );
	
	//old
	//$('.mk_editor_module_knop input.knopurl').val(  '/' + $(e).attr('paginatype') + '/' + $(e).attr('paginaslug') + '/' );

	$('.mk_editor_module_knop .mk_editor_module_knop_id').html( $(e).attr('paginaid') );

}); }

function mk_editor_save_tekst() { jQuery(function ($) {

	//console.log('Sla alle wijzingen op!!');

	//console.log('module opslaan is : ' + $('.mk_editor_container .mk_editor_module_id').html());

	var id = $('.mk_editor_container .mk_editor_module_id').html();

	//get module type

	var type_module = $('li#mod_id_' + id).attr('type');

	//$('#mod_id_' + id + ' .mod_gegevens').attr('module_id', $('.mk_editor_settings input.id').val());

	//console.log($('.mk_editor_container .mk_editor_settings input.class').val());

	$('#mod_id_' + id + ' .mod_gegevens').attr('module_class', $('.mk_editor_container .mk_editor_settings input.class').val() );

	$('#mod_id_' + id + ' .mod_gegevens').attr('module_slot', $('.mk_editor_settings .opties.mk_module_slot_opties input:checked').val() );

	//tekst module
	if(type_module == "tekst")
	{
		if( $('#wp-mkbuilderteksteditor-wrap').hasClass('html-active') )
		{

			$('#wp-mkbuilderteksteditor-wrap').removeClass('html-active');

			$('#wp-mkbuilderteksteditor-wrap').addClass('tmce-active');

			$( "#mkbuilderteksteditor-tmce" ).trigger( "click" );

			plainorvisualtekst = true;
			//console.log('tekst');
			CacheEditor(2);
		}
		else
		{
			plainorvisualtekst = false;
			//console.log('Visual');
			CacheEditor(1);
		}

		//console.log( "by id: " +  tinymce.editors[$('#mkbuilderteksteditor').attr('id')].getContent() );

		module_tekst = tinymce.editors[$('#mkbuilderteksteditor').attr('id')].getContent();

		if( $('#mk_builder_tekst_editor_wrapper textarea#mkbuilderteksteditor').css('display') != 'none' )  { 

			/*success*/ 

			module_tekst = $('#mk_builder_tekst_editor_wrapper textarea#mkbuilderteksteditor').val();

		} 

		//module_tekst = tinyMCE.editors[$('#mk_editor_tekst').attr('id')].getContent();

		$('#mod_id_' + id + ' .mod_gegevens textarea').html(module_tekst);

		$('#mod_id_' + id + ' .module_preview_tekst').html(module_tekst); //module_preview_tekst

	}

	//code module
	else if(type_module == "code")
	{
		module_tekst = $('#mk_editor_code').val();

		//console.log(module_tekst);

		$('#mod_id_' + id + ' .mod_gegevens textarea').html(module_tekst);

		$('#mod_id_' + id + ' .module_preview_code textarea').html(module_tekst);

		//console.log($('#mod_id_' + id + ' .module_preview_code textarea')[0].scrollHeight);

		$('#mod_id_' + id + ' .module_preview_code textarea').css('height', $('#mod_id_' + id + ' .module_preview_code textarea')[0].scrollHeight );
	}

	//code titel
	else if(type_module == "titel")
	{

		$('#mod_id_' + id + ' .mod_gegevens input').attr( 'value', $('.mk_editor_module_container .titel').val() );

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_htag', $('.mk_editor_module_titel .opties input:checked').val() );

		//module_preview_titel

		$('#mod_id_' + id + ' .module_preview_titel').html( 'H' + $('.mk_editor_module_titel .opties input:checked').val() + ': ' +  $('.mk_editor_module_container .titel').val() );

	}

	//code afbeelding
	else if(type_module == "afbeelding")
	{

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_img', $('.mk_editor_module_container #mk_editor_image_id').html() );

		$('#mod_id_' + id + ' .module_preview_afbeelding').html( $('#mk_editor_image_hold').html( ) );

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_size', $('.mk_editor_settings .mk_editor_section_thumbnails_options select').val() );
		
		$('#mod_id_' + id + ' .mod_gegevens').attr('module_url', $('.mk_editor_module_afbeelding .mk_editor_settings .afbeeldingurl').val() );
	
	}

	//code galerij
	else if(type_module == "galerij")
	{

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_target', $('.mk_editor_settings .opties.galerijen input:checked').val() );

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_view', $('.mk_editor_settings .opties.mk_module_view_opties input:checked').val() );

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_size', $('.mk_editor_settings .mk_editor_section_thumbnails_options_galerij select').val() );

		if( $('.mk_editor_settings .opties.galerijen input:checked').val() == 1)
		{
			//kies post galerij

			$('#mod_id_' + id + ' .mod_gegevens').attr('module_galerij', $('#mk_post_galerijen select').val() );

			$('#mod_id_' + id + ' .galerij_items .module_preview_galerij').html( "" );
		}
		else 
		{
			//standaard galerij

			galerij_ID = "";

			$('#galerij_wrap.module_preview_galerij .image').each(function() {

				if( galerij_ID == "")
				{
					galerij_ID += $(this).attr('img_id');
				}
				else
				{
					galerij_ID += ',' + $(this).attr('img_id');
				}

			});

			$('#mod_id_' + id + ' .mod_gegevens').attr('module_galerij', galerij_ID);

			$('#mod_id_' + id + ' .galerij_items .module_preview_galerij').html( $('#galerij_wrap').html() );
		}

	}

	//code knop
	else if(type_module == "knop")
	{
		//module_preview_knop
		$('#mod_id_' + id + ' .module_preview_knop').html(  $('.mk_editor_module_knop input.knoptitel').val() + ' : ' + $('.mk_editor_module_knop input.knopurl').val() );

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_link_url', $('.mk_editor_module_knop input.knopurl').val() );

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_link_titel', $('.mk_editor_module_knop input.knoptitel').val() );

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_link_id',   $('.mk_editor_module_knop .mk_editor_module_knop_id').text()  );

		//target
		$('#mod_id_' + id + ' .mod_gegevens').attr('module_target',  "");
		
		if( $('.mk_editor_settings .opties.mk_module_target_opties input[type=checkbox]')[0].checked )
		{
			$('#mod_id_' + id + ' .mod_gegevens').attr('module_target',  "1");
		}

		//extern
		$('#mod_id_' + id + ' .mod_gegevens').attr('module_extern',  "");

		//console.log( "extern: " + $('.mk_editor_settings .opties.mk_module_extern_opties input[type=checkbox]')[0].checked );
		//console.log( "extern: " + $('.mk_editor_settings .opties.mk_module_extern_opties input[type=checkbox]').is("checked") );
		//console.log( "extern: " + $('.mk_editor_settings .opties.mk_module_extern_opties input[type=checkbox]:checked').length > 0 );
		//console.log( "extern: " + $('.mk_editor_settings .opties.mk_module_extern_opties input[type=checkbox]')[0].checked );
		
		if( $('.mk_editor_settings .opties.mk_module_extern_opties input[type=checkbox]')[0].checked )
		{
			$('#mod_id_' + id + ' .mod_gegevens').attr('module_extern',  "1");
		}

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_bestand',  $('#mk_editor_bestand_id').html());
	}
	else if(type_module == "bestand")
	{

		//$('#mod_id_' + id + ' .mod_gegevens').attr('module_link_url', $('.mk_editor_module_bestand input.bestandurl').val() );

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_link_titel', $('.mk_editor_module_bestand input.bestandtitel').val() );

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_link_id', $('.mk_editor_module_bestand #mk_editor_bestand_id').html() );

		//$('#mod_id_' + id + ' .mod_gegevens').attr('module_link_url', $('.mk_editor_module_bestand #mk_editor_bestand_url').html() );


		$('#mod_id_' + id + ' .module_preview_bestand .titel').html( $('.mk_editor_module_bestand input.bestandtitel').val() );
		$('#mod_id_' + id + ' .module_preview_bestand .url').html( $('.mk_editor_module_bestand #mk_editor_bestand_url').html() );
	}
	else if(type_module == "video")
	{
		$('#mod_id_' + id + ' .mod_gegevens').attr('module_url',  $('.mk_editor_module_video input.video').val() );

		//$('#mod_id_' + id + ' .mod_gegevens').attr('module_optie',  "" );


		$('#mod_id_' + id + ' .mod_gegevens').attr('module_optie', $('.mk_editor_settings .opties.autoplay input:checked').val() );

		$('#mod_id_' + id + ' .mod_gegevens').attr('module_target', $('.mk_editor_settings .opties.videopath input:checked').val() );


		//$('#mod_id_' + id + ' .module_preview_video').html(  $('.mk_editor_module_video input.video').val() );
		
		$('#mod_id_' + id +' .module_preview_video .titel').html( $('.mk_editor_video_info #mk_editor_video_naam').html() );
		$('#mod_id_' + id +' .module_preview_video .url').html( $('.mk_editor_video_info #mk_editor_video_url').html() );


		$('#mod_id_' + id +' .module_preview_video span.id').html( $('.mk_editor_module_video input.video').val() );


		$('#mod_id_' + id + ' .mod_gegevens').attr('module_poster',  $('#mk_editor_video_id_poster').html() );
		$('#mod_id_' + id + ' .module_preview_video').attr('poster',  $('#mk_editor_video_url_poster img').attr('src') );

		$('#mod_id_' + id + ' .module_preview_video').removeClass('target_0');
		$('#mod_id_' + id + ' .module_preview_video').removeClass('target_1');
		$('#mod_id_' + id + ' .module_preview_video').removeClass('target_2');
		$('#mod_id_' + id + ' .module_preview_video').removeClass('target_3');

		$('#mod_id_' + id + ' .module_preview_video').addClass('target_' + $('.mk_editor_settings .opties.videopath input:checked').val() );

	}

	//save in editor
	ReadBuilderNew(1);

	//close
	close_mk_editor();
}); }


function change_galerij(type) { jQuery(function ($) {

	if(type == 1)
	{	
		$('.mk_editor_settings.keuzegalerij').addClass('active');
		$('.mk_editor_settings.standaardgalerij').removeClass('active');
	}
	else
	{
		$('.mk_editor_settings.keuzegalerij').removeClass('active');
		$('.mk_editor_settings.standaardgalerij').addClass('active');
	}
}); }


function change_video(type) { jQuery(function ($) {

	if(type == 3)
	{	
		$('.mk_editor_module_video').addClass('uploaden');
	}
	else
	{
		$('.mk_editor_module_video').removeClass('uploaden');
	}
}); }


function afbeelding_select_thumb_changed()
{ jQuery(function($){

	var size = $('.mk_editor_section_thumbnails_options option:selected').text();

	//console.log("changed to " + size);

	if ( $( "#mk_all_crop_sizes" ).length && $( '#mk_all_crop_sizes > div*[value="'+size+'"]' ).length ) {

		$( ".mk_editor_settings.croptool" ).removeClass( "hide" );
	}
	else
	{
		$( ".mk_editor_settings.croptool" ).addClass( "hide" );
	}


}) ; }


// mk_editor_crop_afbeelding
function mk_editor_crop_afbeelding() {	jQuery(function ($) {


	//console.log( $('#mk_editor_image_id').is(':empty') );

	if( $('#mk_editor_image_id') != null && !$('#mk_editor_image_id').is(':empty') )
	{
		var	i =  "Snijd afbeelding bij",
			n = null;
			image_id = $('#mk_editor_image_id').text();
			posttype = "sectie";

		//	console.log( " crop " + image_id + " // " + i + " // " + n  )

		void 0 !== posttype && (n = posttype), (new CROP_THUMBNAILS_VUE.modal).open( image_id, n, i);
	}

	var countinteval = 0;
	var checkExist = setInterval(function() {
		if ($('img.cptCroppingImage').length) {
		   //console.log("Exists!");

		   var found = false;
		   $('.cptImageSizelist li').each(function()
		   {

				//console.log( $('.mk_editor_section_thumbnails_options option:selected').text() );

				//console.log( $(this) ); mk_thumb_medium'

				if( !$(this).hasClass('cptImageSize-' + $('.mk_editor_section_thumbnails_options option:selected').text()) )
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





function galerijcropimage(id) { jQuery(function($){


	var size = $('.mk_editor_section_thumbnails_options_galerij option:selected').text();

	//console.log("get iamge" + id + " // " + size);


	if( id != null && size != null )
	{
		var	i =  "Snijd afbeelding bij",
			n = null;
			image_id = id;
			posttype = "sectie";

		//	console.log( " crop " + image_id + " // " + i + " // " + n  )

		void 0 !== posttype && (n = posttype), (new CROP_THUMBNAILS_VUE.modal).open( image_id, n, i);
	}

	var countinteval = 0;
	var checkExist = setInterval(function() {
		if ($('img.cptCroppingImage').length) {
		   //console.log("Exists!");

		   var found = false;
		   $('.cptImageSizelist li').each(function()
		   {

				//console.log( $('.mk_editor_section_thumbnails_options option:selected').text() );

				//console.log( $(this) ); mk_thumb_medium'

				if( !$(this).hasClass('cptImageSize-' + size) )
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


function galerij_select_thumb_changed()
{ jQuery(function($){

	var size = $('.mk_editor_section_thumbnails_options_galerij option:selected').text();

	//console.log("changed to " + size);

	if ( $( "#mk_all_crop_sizes" ).length && $( '#mk_all_crop_sizes > div*[value="'+size+'"]' ).length ) {

		$( ".mk_editor_module_galerij .galerij_items" ).removeClass( "hide_crop" );
	}
	else
	{
		$( ".mk_editor_module_galerij .galerij_items" ).addClass( "hide_crop" );
	}

}) ; }



