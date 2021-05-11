jQuery(document).ready(function($) {

	//console.log("Get data");

	//console.log("Get data");

	//console.log("Get data");

/*

		$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_cssid', $('.mk_editor_sectie .mk_editor_settings input.id').val() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_class', $('.mk_editor_sectie .mk_editor_settings input.class').val() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_bgimg', $('#mk_editor_achtergrond_id').html() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_bgcolor', $('.mk_editor_sectie .mk_editor_settings input.colorfield').val() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_slot', $('.mk_editor_sectie .mk_sectie_slot_opties input:checked').val() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_zichtbaar', "" );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_setting', $('.mk_editor_sectie .mk_sectie_setting_opties input:checked').val() );

	$('#sectie_' + id + ' .sectie_gegevens').attr('sectie_type', $('.mk_editor_sectie .mk_sectie_backend_opties input:checked').val() );

	//*/

	if( $('.classbuilder').length > 0 ) {
		//Save data
		$('#savedata').click(function()
		{
			//console.log("Get data");

			// /displaydata
			ReadBuilderNew(1);
		});
		//click savedata
	}

	$('#testsavedata').click(function() {

		testteksdata();
	});

});
//End ready

function paginaopslaan()
{
	//console.log('soihf9idshfidshfjidsjfid');
	ReadBuilderNew(2);

	//$( ".displaydata" ).append('<div class="displaydata_inner"><div>Got this string data:</div><div>'+stringdata+'</div></div>');

}

function conceptopslaan()
{
	ReadBuilderNew(3);
}



function testteksdata() { jQuery(function ($) {

	//jQuery('.testdivtekst_string').text('Some text with <div>html</div>').html();

	stringdatatest = "";

	$('.testtekstarea_output').val("");

	stringdatatest = '[mk_module type="tekst"]';

	$('.testtekstarea_output').val( $('.testtekstarea_output').val() + stringdatatest );

	$('.testtekstarea_output').val( $('.testtekstarea_output').val() + $('.testtekstarea_input').val() );

	stringdatatest = '[mk_close_module]' ;

	$('.testtekstarea_output').val( $('.testtekstarea_output').val() + stringdatatest );

}); }

function ReadBuilderNew(optie) { jQuery(function ($) {

	var stringdata = "";

	$('.testarea').val('');

	$('.classbuilderinner .newsectie').each(function() 

	{

		//sectie attributes

		var temp_classes = $(this).find('.sectie_gegevens').attr('sectie_class');

		sectie_class = temp_classes.replace(/\ /g, ',');

		var temp_ids = $(this).find('.sectie_gegevens').attr('sectie_cssid');

		sectie_id = temp_ids.replace(/\ /g, ',');

		//sectie string + reset

		stringdata = "[mk_sectie";

			if(sectie_id != "") { stringdata += ' id="' + sectie_id + '"'; }

			if(sectie_class != "") { stringdata += ' class="' + sectie_class + '"'; }

			if($(this).find('.sectie_gegevens').attr('sectie_bgimg') != "" ) { stringdata += ' bgimg="'+ $(this).find('.sectie_gegevens').attr('sectie_bgimg') +'"'; } 

			if($(this).find('.sectie_gegevens').attr('sectie_bgcolor') != "" ) { stringdata += ' bgcolor="'+ $(this).find('.sectie_gegevens').attr('sectie_bgcolor') +'"'; } 

			if($(this).find('.sectie_gegevens').attr('sectie_type') != ""  && $(this).find('.sectie_gegevens').attr('sectie_type') != 0 ) { stringdata += ' type="'+ $(this).find('.sectie_gegevens').attr('sectie_type') +'"'; } 

			if($(this).find('.sectie_gegevens').attr('sectie_setting') != ""  && $(this).find('.sectie_gegevens').attr('sectie_setting') != 0 ) { stringdata += ' set="'+ $(this).find('.sectie_gegevens').attr('sectie_setting') +'"'; } 

			if($(this).find('.sectie_gegevens').attr('sectie_slot') != ""  && $(this).find('.sectie_gegevens').attr('sectie_slot') != 0 ) { stringdata += ' slot="'+ $(this).find('.sectie_gegevens').attr('sectie_slot') +'"'; } 

		stringdata += "]";

		$('.testarea').val( $('.testarea').val() + stringdata );

		//rij

		$(this).find('.newrij').each(function() 
		{

			//sectie attributes

			var rij_kolom = $(this).attr('koloms');

			var temp_classes_rij = $(this).find('.rij_gegevens').attr('rij_class');

			temp_classes_rij = temp_classes_rij.replace(/\ /g, ',');

			//var rij_kolom = $(this).find('.sectie_gegevens').attr('sectie_class');

			//rij string

			stringdata = "[mk_rij";

				if(temp_classes_rij != "") { stringdata += ' class="' + temp_classes_rij + '"'; }

				if(rij_kolom > 1) { stringdata += ' kolom="'+ rij_kolom +'"'; }

			stringdata += "]";

			$('.testarea').val( $('.testarea').val() + stringdata );

			var kolomcount = 0;

			//koloms

			$(this).find('.rij_container .kolom').each(function() 
			{

				if(kolomcount > 0)
				{
					stringdata = "[separator]";

					$('.testarea').val( $('.testarea').val() + stringdata );
				}

				//modules

				$(this).find('.newrij_inner li').each(function() 
				{

					//stringdata += "[mk_module_text]" + $(this).find('.mod_gegevens textarea').val() + "[mk_close_module_text]" ;

					var typemodule = $(this).attr('type');

					var temp_classes_module = ""; 

					temp_classes_module = $(this).find('.mod_gegevens').attr('module_class');

					if(temp_classes_module != "" && temp_classes_module != null)
					{

						//console.log('log:' + temp_classes_module + ':end');

						temp_classes_module = temp_classes_module.replace(/\ /g, ',');

					}
					if(typemodule == "tekst")
					{

						stringdata = '[mk_module type="' + $(this).attr('type') +'"';

							if(temp_classes_module != "" ) { stringdata += ' class="'+ temp_classes_module +'"'; }

							if($(this).find('.mod_gegevens').attr('module_slot') != ""  && $(this).find('.mod_gegevens').attr('module_slot') != 0 ) { stringdata += ' slot="'+ $(this).find('.mod_gegevens').attr('module_slot') +'"'; } 

						stringdata += ']';

						$('.testarea').val( $('.testarea').val() + stringdata );

						//tekst

						//$('.testarea').val( $('.testarea').val() + $(this).find('.mod_gegevens textarea').val() );

						enteredText = $('.testarea').val();

						numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;

						//console.log(numberOfLineBreaks);

						 //var v = $('.type').val(); // you'd better use this.value here

    					//if (v.indexOf('> <')!=-1) {

    					text = $(this).find('.mod_gegevens textarea').val();

    					if (text.indexOf('<p>')!=-1 && text.indexOf('</p>')!=-1) {

    						//console.log('yes!');

    						$('.testarea').val( $('.testarea').val() + $(this).find('.mod_gegevens textarea').val() );

    					}
    					else
    					{

    						//console.log('not');

							splittext = $(this).find('.mod_gegevens textarea').val().split(/[\r\n]+/);

							//console.log(splittext.length);

							for(i = 0; i < splittext.length; i++)
							{
								//splittext[i] = splittext[i].replace(/<p>/g, '');

								//splittext[i] = splittext[i].replace(/<\/p>/g, '');

								if(splittext[i] != "")
								{
									//console.log('<p>' + splittext[i] + '</p>');

									$('.testarea').val( $('.testarea').val() + '<p>' + splittext[i] + '</p>' );
								}
							}
    					}

						stringdata = '[mk_close_module]';

						$('.testarea').val( $('.testarea').val() + stringdata );
					}
					else if(typemodule == "code") 
					{ 

						stringdata = '[mk_module type="' + $(this).attr('type') +'"';

							if(temp_classes_module != "" ) { stringdata += ' class="'+ temp_classes_module +'"'; }

							if($(this).find('.mod_gegevens').attr('module_slot') != ""  && $(this).find('.mod_gegevens').attr('module_slot') != 0 ) { stringdata += ' slot="'+ $(this).find('.mod_gegevens').attr('module_slot') +'"'; } 

						stringdata += ']'; // + $(this).find('.mod_gegevens textarea').val() + '[mk_close_module]' ;

						$('.testarea').val( $('.testarea').val() + stringdata );

						//tekst

						$('.testarea').val( $('.testarea').val() + $(this).find('.mod_gegevens textarea').val() );

						stringdata = '[mk_close_module]';

						$('.testarea').val( $('.testarea').val() + stringdata );

					}

					else if(typemodule == "titel") 
					{ 

						stringdata = '[mk_module type="' + $(this).attr('type') +'"';

							if($(this).find('.mod_gegevens').attr('module_htag') != "" ) { stringdata += ' h="'+ $(this).find('.mod_gegevens').attr('module_htag') +'"'; } 

							if(temp_classes_module != "" ) { stringdata += ' class="'+ temp_classes_module +'"'; }

							if($(this).find('.mod_gegevens').attr('module_slot') != "" && $(this).find('.mod_gegevens').attr('module_slot') != 0 ) { stringdata += ' slot="'+ $(this).find('.mod_gegevens').attr('module_slot') +'"'; } 

						stringdata += ']' + $(this).find('.mod_gegevens input').val()  + '[mk_close_module]';

						$('.testarea').val( $('.testarea').val() + stringdata );

					}

					else if(typemodule == "afbeelding") 

					{ 

						stringdata = '[mk_module type="' + $(this).attr('type') +'"';

							if($(this).find('.mod_gegevens').attr('module_img') != "" ) { stringdata += ' img="'+ $(this).find('.mod_gegevens').attr('module_img') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_size') != "" ) { stringdata += ' size="'+ $(this).find('.mod_gegevens').attr('module_size') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_url') != "" ) { stringdata += ' url="'+ $(this).find('.mod_gegevens').attr('module_url') +'"'; } 

							if(temp_classes_module != "" ) { stringdata += ' class="'+ temp_classes_module +'"'; }

							if($(this).find('.mod_gegevens').attr('module_slot') != ""  && $(this).find('.mod_gegevens').attr('module_slot') != 0 ) { stringdata += ' slot="'+ $(this).find('.mod_gegevens').attr('module_slot') +'"'; } 

						stringdata +=  ']'  + '[mk_close_module]';

						$('.testarea').val( $('.testarea').val() + stringdata );

					}
					else if(typemodule == "galerij") 
					{ 
						stringdata = '[mk_module type="' + $(this).attr('type') +'"';

							if($(this).find('.mod_gegevens').attr('module_galerij') != "" ) { stringdata += ' galerij="'+ $(this).find('.mod_gegevens').attr('module_galerij') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_view') != "" && $(this).find('.mod_gegevens').attr('module_view') != 0 ) { stringdata += ' view="'+ $(this).find('.mod_gegevens').attr('module_view') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_size') != "" ) { stringdata += ' size="'+ $(this).find('.mod_gegevens').attr('module_size') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_target') != "" && $(this).find('.mod_gegevens').attr('module_target') != 0 ) { stringdata += ' target="'+ $(this).find('.mod_gegevens').attr('module_target') +'"'; } 

							if(temp_classes_module != "" ) { stringdata += ' class="'+ temp_classes_module +'"'; }

							if($(this).find('.mod_gegevens').attr('module_slot') != ""  && $(this).find('.mod_gegevens').attr('module_slot') != 0 ) { stringdata += ' slot="'+ $(this).find('.mod_gegevens').attr('module_slot') +'"'; } 

						stringdata += ']' + '[mk_close_module]';

						$('.testarea').val( $('.testarea').val() + stringdata );
					}
					else if(typemodule == "knop") 
					{ 
						stringdata = '[mk_module type="' + $(this).attr('type') +'"';

							if($(this).find('.mod_gegevens').attr('module_link_url') != "" ) { stringdata += ' url="'+ $(this).find('.mod_gegevens').attr('module_link_url') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_link_id') != "" ) { stringdata += ' link="'+ $(this).find('.mod_gegevens').attr('module_link_id') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_target') != "" ) { stringdata += ' target="'+ $(this).find('.mod_gegevens').attr('module_target') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_extern') != "" ) { stringdata += ' extern="'+ $(this).find('.mod_gegevens').attr('module_extern') +'"'; } 


							if(temp_classes_module != "" ) { stringdata += ' class="'+ temp_classes_module +'"'; }

							if($(this).find('.mod_gegevens').attr('module_slot') != ""  && $(this).find('.mod_gegevens').attr('module_slot') != 0 ) { stringdata += ' slot="'+ $(this).find('.mod_gegevens').attr('module_slot') +'"'; }

						stringdata += ']';

						//$('.testarea').val( $('.testarea').val() + stringdata );

						//stringdata = "";

						//console.log( $(this).find('.mod_gegevens').attr('module_link_titel') );

							if($(this).find('.mod_gegevens').attr('module_link_titel') != "" ) { stringdata += $(this).find('.mod_gegevens').attr('module_link_titel'); } 

						stringdata += '[mk_close_module]';

						$('.testarea').val( $('.testarea').val() + stringdata );
					}
					else if(typemodule == "bestand") 
					{ 
						stringdata = '[mk_module type="' + $(this).attr('type') +'"';

							if($(this).find('.mod_gegevens').attr('module_link_url') != "" ) { stringdata += ' url="'+ $(this).find('.mod_gegevens').attr('module_link_url') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_link_id') != "" ) { stringdata += ' link="'+ $(this).find('.mod_gegevens').attr('module_link_id') +'"'; } 


							if(temp_classes_module != "" ) { stringdata += ' class="'+ temp_classes_module +'"'; }

							if($(this).find('.mod_gegevens').attr('module_slot') != ""  && $(this).find('.mod_gegevens').attr('module_slot') != 0 ) { stringdata += ' slot="'+ $(this).find('.mod_gegevens').attr('module_slot') +'"'; }

						stringdata += ']';

							if($(this).find('.mod_gegevens').attr('module_link_titel') != "" ) { stringdata += $(this).find('.mod_gegevens').attr('module_link_titel'); } 

						stringdata += '[mk_close_module]';

						$('.testarea').val( $('.testarea').val() + stringdata );
					}
					else if(typemodule == "video") 
					{ 

						stringdata = '[mk_module type="' + $(this).attr('type') +'"';

							if($(this).find('.mod_gegevens').attr('module_url') != "" ) { stringdata += ' url="'+ $(this).find('.mod_gegevens').attr('module_url') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_optie') != "" && $(this).find('.mod_gegevens').attr('module_optie') != 0 ) { stringdata += ' view="'+ $(this).find('.mod_gegevens').attr('module_optie') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_target') != "" && $(this).find('.mod_gegevens').attr('module_target') != 0 ) { stringdata += ' target="'+ $(this).find('.mod_gegevens').attr('module_target') +'"'; }

							if($(this).find('.mod_gegevens').attr('module_poster') != "" && $(this).find('.mod_gegevens').attr('module_poster') != 0 ) { stringdata += ' poster="'+ $(this).find('.mod_gegevens').attr('module_poster') +'"'; }

							if(temp_classes_module != "" ) { stringdata += ' class="'+ temp_classes_module +'"'; }

							if($(this).find('.mod_gegevens').attr('module_slot') != "" && $(this).find('.mod_gegevens').attr('module_slot') != 0 ) { stringdata += ' slot="'+ $(this).find('.mod_gegevens').attr('module_slot') +'"'; } 

							stringdata += '][mk_close_module]';

						$('.testarea').val( $('.testarea').val() + stringdata );

					}

				});

				//End modules

				kolomcount++;

			});

			stringdata = "[mk_close_rij]";

			$('.testarea').val( $('.testarea').val() + stringdata );

		});

		//End rij

		stringdata = "[mk_close_sectie]";

		$('.testarea').val( $('.testarea').val() + stringdata );

	});

	//End sectie

	//$('#postdivrich #wp-content-wrap textarea#content').val(stringdata); // textarea

	//$('.mce-content-body.content.post-type-mkbuilder').html(stringdata); //iframe body

	//jQuery('#content_ifr').contents().find('#tinymce').html(stringdata); //deze ook! ?

	if(optie == 1)
	{
		$( ".displaydata" ).html("");
		$( ".displaydata" ).append('<div class="displaydata_inner"><div>Got this string data:</div><div>'+$('.testarea').val()+'</div></div>');

		$( "#postdivrich.postarea .wp-editor-tabs #content-html" ).trigger( "click" );

		$('#postdivrich #wp-content-wrap textarea#content').val($('.testarea').val()); // textarea

		$('.mce-content-body.content.post-type-mkbuilder').html($('.testarea').val()); //iframe body

		jQuery('#content_ifr').contents().find('#tinymce').html($('.testarea').val()); //deze ook! ?
		
	}
	else if(optie == 2)
	{

		$( "#postdivrich.postarea .wp-editor-tabs #content-html" ).trigger( "click" );

		$('#postdivrich #wp-content-wrap textarea#content').val($('.testarea').val()); // textarea

		$('.mce-content-body.content.post-type-mkbuilder').html($('.testarea').val()); //iframe body

		jQuery('#content_ifr').contents().find('#tinymce').html($('.testarea').val()); //deze ook! ?

		$( "#publish" ).trigger( "click" );

	}
	else if(optie == 3)
	{

		$( "#postdivrich.postarea .wp-editor-tabs #content-html" ).trigger( "click" );

		$('#postdivrich #wp-content-wrap textarea#content').val($('.testarea').val()); // textarea

		$('.mce-content-body.content.post-type-mkbuilder').html($('.testarea').val()); //iframe body

		jQuery('#content_ifr').contents().find('#tinymce').html($('.testarea').val()); //deze ook! ?

		$( "#submitdiv #save-action #save-post" ).trigger( "click" );

	}


	if(editorcache == 1)
	{
		//console.log('save on visual editor! : ' + editorcache);
		//$('#mkbuilderteksteditor-tmce').trigger("click");
	}
	

}); }



var editorcache = 0;

function CacheEditor(editor) { jQuery(function ($) {

	//console.log('editorcache : ' + editor);
	editorcache = editor;



}); }

function getCacheEditor()
{
	return editorcache;
}