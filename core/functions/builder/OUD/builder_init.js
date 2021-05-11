var builder_admin = 1;
var builder_setting_debug = 0;
var builder_klant_edit = 0;
var builder_klant_create = 0;
var builder_klant_advanced = 0;
var builder_klant_admin = 0;



jQuery(document).ready(function() {

	if( $('#mk_builder_metabox').length > 0 )
	{
		//geen admin
		if( $('body').hasClass('mk-role-administrator') ) { builder_admin = 0; }

		//check voor alle builder opties
		if(builder_admin == 1)
		{
			builder_klant_edit = $('#mk_builder_metabox .mkbuilder_gegevens').attr('klant_edit');
			builder_klant_create = $('#mk_builder_metabox .mkbuilder_gegevens').attr('klant_create');
			builder_klant_advanced = $('#mk_builder_metabox .mkbuilder_gegevens').attr('klant_advanced');
			builder_klant_admin = $('#mk_builder_metabox .mkbuilder_gegevens').attr('klant_admin');
		}
		else
		{
			builder_setting_debug = $('#mk_builder_metabox .mkbuilder_gegevens').attr('debug');
		}

		if(builder_setting_debug == 1) { $('body').addClass('mk_builder_debug'); }


		stringddd = $('#readcontent').val().replace(/<p>\[/g, '[');

		$('#readcontent').val( stringddd );

		stringddd = $('#readcontent').val().replace(/]<\/p>/g, ']');

		$('#readcontent').val( stringddd );

		hidepublishbutton();

		initbuilder();

	}
	else
	{
		showdefualteditor();
	}

	//stringddd = $('#readcontent').val();

	//stringddd = $('#readcontent').val().replace(/<p[^>]*>\[/g, '[');

	//$('.testarea');

	//console.log(wp.editor.getDefaultSettings());

	// wp.editor.initialize( 'denewone', wp.editor.getDefaultSettings() );

	//  wp.editor.initialize('denewone', {

 //      mediaButtons: true,

 //  quicktags: {

 //        "buttons": "strong,em,link,ul,li,code"

 //    },

 //      tinymce: {

 //        wpautop:true 

 //      },

 //    } );

});
// document ready


function showdefualteditor()
{

	$('#postdivrich.postarea.wp-editor-expand').addClass('show');

}

function hidepublishbutton()
{

	$('#publishing-action #publish').addClass('hide');

	

	if( builder_admin == 0 && builder_setting_debug == 1)
	{
		$('#publishing-action').prepend('<input class="button-primary" name="savepagina" id="savepagina" type="button" onclick="paginaopslaan()" value="Builder '+ $('#publishing-action #publish').val() +'">');

		$('#publishing-action #publish').val("Save editor");
	}
	else
	{
		$('#publishing-action').prepend('<input class="button-primary" name="savepagina" id="savepagina" type="button" onclick="paginaopslaan()" value="'+ $('#publishing-action #publish').val() +'">');
	}

	//concept button
	if( $('#submitdiv #save-action #save-post').length > 0 )
	{
		$('#submitdiv #save-action #save-post').addClass('hide');
		$('#submitdiv #save-action').prepend('<input type="submit" name="mk-save" id="mk-save-post" onclick="conceptopslaan()" value="'+ $('#submitdiv #save-action #save-post').val() +'" class="button">');
	}
}

function initbuilder()
{

	//console.log("Content: " + content);

	//get de content data

	var content = $('#postdivrich #wp-content-wrap textarea#content').html();

	//console.log($('#postdivrich #wp-content-wrap textarea#content').html());

	var content = $('#readcontent').val();

	//console.log("Content: " + content);

	var countsectie = 0;

	var countrij = 0;

	var countmodule = 0;

	//String all data

	//var sectie = content.split('[mk_content_sectie]');

	var sectie = content.split('[mk_sectie');

	//console.log('--------------------------------------------------------------------------------------------------------------------');

	//console.log( "length: " + sectie.length );

	//var firstcontent = '';

	// console.log(sectie[0]);

	// console.log('--------------------------------------------------------------------------------------------------------------------');

	// console.log(sectie[1]);

	// console.log('--------------------------------------------------------------------------------------------------------------------');

	// console.log(sectie[2]);

	// console.log('--------------------------------------------------------------------------------------------------------------------');

	// console.log(sectie[3]);

	// console.log('--------------------------------------------------------------------------------------------------------------------');

	// console.log(sectie[4]);

	// console.log('--------------------------------------------------------------------------------------------------------------------');

	// console.log(sectie[5]);

	// console.log('--------------------------------------------------------------------------------------------------------------------');

	// console.log(sectie[6]);

	// console.log('--------------------------------------------------------------------------------------------------------------------');

	// console.log(sectie[7]);

	// console.log('--------------------------------------------------------------------------------------------------------------------');

	//Sectie

	for (i = 0; i < sectie.length; i++) {

		//console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' + i);

		//console.log(i + ' S - ' + sectie[i]);

		//console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' + i);

		if(  sectie[i] !=  "" ) {  

			var sectie_attributes = sectie[i].split("]");

			var resultstring = sectie_attributes[0].split(" ");

			//console.log('Attteer :' + sectie_attributes[0] + ':dhfdhf');

			var sectieCssID = ""; var sectieClass = ""; var sectieBgcolor = ""; var sectie_bgimg = ""; var sectie_bgthumb = ""; var sectie_zichtbaar = ""; var sectie_setting = ""; var sectie_slot = ""; var sectie_type = "";

			//Get attributes!

			for (att = 0; att < resultstring.length; att++) 

			{

				if( resultstring[att] !=  "" ) 

				{

					var results = resultstring[att].split("=");

					for (sr = 0; sr < results.length; sr++) 

					{

						if(results[sr] == "id") { 

							var temp_ids = results[sr + 1].replace(/\"/g, ''); 

							sectieCssID = temp_ids.replace(/\,/g, ' '); 

						}

						if(results[sr] == "class") 

						{

							var temp_classes = results[sr + 1].replace(/\"/g, ''); 

							sectieClass = temp_classes.replace(/\,/g, ' '); 

						}

						if(results[sr] == "bgcolor") { sectieBgcolor = results[sr + 1].replace(/\"/g, ''); }

						if(results[sr] == "bgimg") { sectie_bgimg = results[sr + 1].replace(/\"/g, ''); }

						if(results[sr] == "slot") { sectie_zichtbaar = results[sr + 1].replace(/\"/g, ''); } 

						if(results[sr] == "set") { sectie_setting = results[sr + 1].replace(/\"/g, '');  } 

						if(results[sr] == "type") { sectie_type = results[sr + 1].replace(/\"/g, '');  } 

					}

				} 

			}

			//Strip string for alle rijen

			sectie[i] = sectie[i].replace("[mk_close_sectie]", "");

			//console.log(i + ' S - ' + 'replace : ' + sectie[i]); 

			if(sectie_attributes[0] == "") { 

				//console.log( ' is null ');

				//sectie[i] = /](.+)/.exec(sectie[i])[1];

				sectie[i] = sectie[i].replace('][mk_rij', '[mk_rij'); 

			}

			else { 

				//console.log( ' attr ');

				sectie[i] = sectie[i].replace(sectie_attributes[0] + ']', ""); 

			}

			//console.log(i + ' S - ' + 'Mk Sectie : ' + sectie[i]); 

			NewSectietoevoegen(sectieCssID, sectieClass, sectieBgcolor, sectie_bgimg, sectie_zichtbaar, sectie_setting, sectie_type);

			//Rij open

			var rij = sectie[i].split('[mk_rij');

			//console.log('Mk length : ' + rij.length);

			//console.log('Mk rij 1 : ' + rij[0]);

			//console.log('Mk rij 2 : ' + rij[1]);

			//console.log('Mk rij 3 : ' + rij[2]);

			//console.log('Mk rij 4 : ' + rij[3]);

			//Rij

			for (r = 0; r < rij.length; r++) {

				//console.log(i + ' S - ' + 'RIJ LOOP START : ' + r + ' // ' + rij[r]);

				if( rij[r] != "" ) {

					var rij_index = r;

					//console.log('Mk Rij : ' + rij[r]);

					var rij_attributes = rij[r].split("]");

					var resultstring_rij = rij_attributes[0].split(" ");

					//console.log('Attteer :' + rij_attributes[0] + ':dhfdhf');

					var rij_class  = ""; var rij_koloms = "";

					//Get attributes!

					for (att = 0; att < resultstring_rij.length; att++) 

					{

						if( resultstring_rij[att] !=  "" ) 

						{

							var results = resultstring_rij[att].split("=");

							for (res = 0; res < results.length; res++) 

							{

								if(results[res] == "kolom") { rij_koloms = results[res + 1].replace(/\"/g, ''); }

								if(results[res] == "class") 

								{

									var temp_classes = results[res + 1].replace(/\"/g, ''); 

									rij_class = temp_classes.replace(/\,/g, ' '); 

								}

							}

						} 

					}

					//console.log("END RIJ LOOP: " + (i - 1) );

					NewRijtoevoegen(i - 1, rij_class, rij_koloms);

    				rij[r] = rij[r].replace("[mk_close_rij]", "");

    				//console.log('Mk Rij : ' + rij[r]);

    				if(rij_attributes[0] == "") 

    				{ 

    					//rij[r] = /](.+)/.exec(rij[r])[1]; 

    				}

					else 

					{ 	

						rij[r] = rij[r].replace(rij_attributes[0] + ']', "");

					}

					//console.log('Mk Rij : ' + rij[r]);

	    			//console.log("VOOR KOLOMS: " + r + " //// "  + rij[r]);

	    			//tekst open

	    			var kolom = rij[r].split('[separator]');

	    			//Tekst

	    			for (k = 0; k < kolom.length; k++) 

	    			{

	    				if( kolom[k] != "" && kolom[k] != "]" ) 

	    				{  

	    					var kolomsssss =  k + 1;

	    					//console.log('Kolommssss :' + kolomsssss + " /// " + kolom[k]);

	    					///////////////////////////////

	    					///////////////////////////////

	    					///////////////////////////////

			    			//tekst open

			    			var mkmodule = kolom[k].split('[mk_module');

			    			//Tekst

			    			for (m = 0; m < mkmodule.length; m++) 

			    			{

			    				if( mkmodule[m] != "" && mkmodule[m] != "]" ) 

			    				{  

				    				var module_attributes = mkmodule[m].split("]");

									var resultstring = module_attributes[0].split(" ");

									//console.log('Attteer :' + module_attributes[0] + ':dhfdhf');

									var module_type = ""; var module_ID = ""; var module_class = ""; var module_htag = 1; var module_img = ""; var module_galerij = ""; var module_slot = ""; 

									var module_link_id = "";  var module_link_url = "";  var module_link_titel = ""; var module_view = ""; var module_target = ""; var module_size = "";

									var module_extern = "";

									//Get attributes!

									for (att = 0; att < resultstring.length; att++) 
									{

										if( resultstring[att] !=  "" ) 
										{

											var results = resultstring[att].split("=");

											for (ms = 0; ms < results.length; ms++) 
											{

												if(results[ms] == "type") { module_type = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "h") { module_htag = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "img") { module_img = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "galerij") { module_galerij = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "slot") { module_slot = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "titel") { module_link_titel = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "url") { module_link_url = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "link") { module_link_id = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "view") { module_view = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "target") { module_target = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "size") { module_size = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "extern") { module_extern = results[ms + 1].replace(/\"/g, ''); }

												if(results[ms] == "class") 

												{ 

													var class_string = results[ms + 1].replace(/\"/g, ''); 

													module_class = class_string.replace(/\,/g, ' '); 

												}

											}

										} 

									}

									//*/


									//console.log('voor:' + mkmodule[m] + ':voor');

									var mktekst = mkmodule[m].split("[mk_close_module]");

									//console.log ("1:"+mktekst[0]+':2:'+mktekst[1]);

									var mktekstinnner = mktekst[0].replace(module_attributes[0] + ']', "");

									//console.log ("inner:"+mktekstinnner+':inner');



									mkmodule[m] = mkmodule[m].replace("[mk_close_module]", "");

									mkmodule[m] = mkmodule[m].replace(module_attributes[0] + ']', "");
									
									

					    			var kolom_ID = k + 1;

					    			if(module_type == "tekst") 
					    			{ 
					    				//console.log('Tekst module');
						    			//console.log( "R : " + countrij + " content: " + mkmodule[m]);

						    			Create_new_tekst_Module(countrij, kolom_ID, mktekstinnner, module_class, module_slot);
					    			}

					    			else if(module_type == "code") 
					    			{ 

					    				//console.log('code module');
					    				//console.log("content: " + mkmodule[m]);

					    				Create_new_code_Module(countrij, kolom_ID, mktekstinnner, module_class, module_slot);
					    			}

					    			else if(module_type == "titel") 
					    			{ 
					    				//console.log('titel module');

					    				Create_new_titel_Module(countrij, kolom_ID, mktekstinnner, module_class, module_htag, module_slot);
					    			}

					    			else if(module_type == "afbeelding") 
					    			{ 
					    				//console.log('afbeelding module');

					    				Create_new_afbeelding_Module(countrij, kolom_ID, module_class, module_img, module_slot, module_size, module_link_url);
					    			}

					    			else if(module_type == "galerij") 
					    			{ 
					    				//console.log('galerij module');

										//Create_new_galerij_Module(countrij, kolom_ID, module_class, module_galerij, module_slot, module_view, module_size);
										Create_new_galerij_Module(countrij, kolom_ID, module_class, module_galerij, module_slot, module_view, module_size, module_target);
					    			}

					    			else if(module_type == "knop") 
					    			{ 

										//console.log('dif:' + mktekstinnner + ':dif');
					    				Create_new_knop_Module(countrij, kolom_ID, module_class, module_slot, module_link_id, mktekstinnner, module_link_url, module_target, module_extern);
					    			}

					    			else if(module_type == "lijst") 
					    			{ 
					    				//console.log('code module');
					    				//console.log("content: " + mkmodule[m]);
					    				//Create_new_code_Module(countrij, kolom_ID, mkmodule[m], module_class, module_slot);
									}
									else if(module_type == "video") 
					    			{ 
	
					    				Create_new_video_Module(countrij, kolom_ID, module_link_url, module_view, module_class, module_slot, module_target);
									}

					    			countmodule++;

				    			} //END if tekst

							}

					//////////////////

						}

	    			}

					///////////////////////////////

					//console.log('Mk rij close');

					countrij++;

				} //END if rij

			} 

			//console.log('Mk Sectie close');

			countsectie++;

		} //End if sectie

	}

	mk_editor_sectie();

	mk_editor_rij();

	getallimages();

	init_move();

	init_screenoverlay();

	init_toggleView();

}

function init_move()
{
	init_move_secties();
	
	init_move_rij();
    
	init_move_module();
}

function init_move_secties()
{
	if(builder_klant_create == 0)
	{
		//voor secties
		$( "ul.classbuilderinner" ).sortable({ connectWith: "ul.classbuilderinner", handle:".sectie_titel", start: function(event, ui) { $(this).addClass('noclick'); } });

		$( ".classbuilderinner" ).disableSelection();
	}
}

function init_move_rij()
{
	if(builder_klant_create == 0)
	{
		//voor rijen
		$( "ul.newsectie_inner" ).sortable({ connectWith: "ul.newsectie_inner", handle: ".rij_titel", start: function(event, ui) { $(this).addClass('noclick'); } });

		$( "#sectie_inner" ).disableSelection();
	}
}


function init_move_module()
{
	if(builder_klant_create == 0)
	{
		//voor modules
		$( "ul.newrij_inner" ).sortable({ connectWith: "ul.newrij_inner",  handle: ".mod_titel", start: function(event, ui) { $(this).addClass('noclick'); }  });

		$( ".newrij_inner" ).disableSelection();
	}
}




function init_screenoverlay()
{

	$('body').append(

		'<div class="mk_editor_screen_overlay"></div>'

	);

}

function screenoverlay_open()
{
	$('.mk_editor_screen_overlay').removeClass('close');
	$('.mk_editor_screen_overlay').addClass('open');
}

function screenoverlay_close()
{
	if( $('.mk_editor_screen_overlay').length > 0 )
	{
		$('.mk_editor_screen_overlay').addClass('close');
		setTimeout( function() { $('.mk_editor_screen_overlay').removeClass('open'); $('.mk_editor_screen_overlay').removeClass('close'); }, 250);
	}
}

// init_toggleView()

function init_toggleView()
{

	$('#mk_builder_metabox').append('<div class="mk_builder_metabox_previewview" onclick="admin_preview()"></div>');

}

function admin_preview()
{
	console.log('preddd');
	if($('body').hasClass('mk_builder_admin'))
	{
		$('body').removeClass('mk_builder_admin');
		$('body').removeClass('mk_builder_admin_preview');
		$('body').removeClass('mk_builder_klant_preview');
		$('body').addClass('mk_builder_admin_preview');
	}
	else
	{
		$('body').removeClass('mk_builder_admin');
		$('body').removeClass('mk_builder_admin_preview');
		$('body').removeClass('mk_builder_klant_preview');
		$('body').addClass('mk_builder_admin');
	}
}



function init_tekst_module()
{

}

function init_titel_module()
{

}

function init_afbeelding_module()
{

}

function init_galerij_module()
{

}

function init_code_module()
{

}