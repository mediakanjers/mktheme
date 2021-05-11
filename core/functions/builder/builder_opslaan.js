jQuery(document).ready(function($) {

    $('.mktheme_opslaanladen .item').click(function()
    {
		//console.log('open sectie');
		
		var content = $(this).find('textarea').val();

		//mk_laden_sectie(content);

		if(content != "")
		{
			mk_laden_sectie(content);
		} 
		else
		{
			get_content( $(this).attr('value') );
		}
		
		
	});
	

	
	// click
	$('.mktheme_opslaanladen_menu ul li').click(function()
	{
		//console.log('testdd');
		var id = $(this).attr('id');

		$('.mktheme_opslaanladen .overzicht_opslaanladen').addClass('hide');
		$('.mktheme_opslaanladen .overzicht_opslaanladen*[id="'+id+'"]').removeClass('hide');

		$('.mktheme_opslaanladen_menu ul li').removeClass('active');
		$(this).addClass('active');

		$('.mktheme_opslaanladen').css('min-height', $('.mktheme_opslaanladen_menu').outerHeight() );
	});
	


	var idd = 0;

	function get_content(id)
	{
		idd = id;
		domein = $('#mk-builder-opslaan-laden .mk_editor_url').attr('domein');
		url = domein + '/wp-admin/admin-ajax.php';

		//Update webiste!
		jQuery.ajax({
			type: "POST",
			url: url,
			data: {
				action: 'mk_retrieve_content',
				post_id: id
			},
			beforeSend: function() {
				//console.log('start send'); 
			},
			success: function (output   ) {

				$('.mktheme_opslaanladen .item*[value="'+idd+'"] textarea').val( output.data );

				//console.log('output!! ' + output.data); 

				mk_laden_sectie(output.data);

			},
			error: function(xhr, status, error) {
				//console.log('error!!' + error + " / " + status  ); 
			}
		});

	}




function mk_laden_sectie(info) {  jQuery(function ($) {
	string_images_type = "";

	string_images_location = "";

	string_images = "";

	var content = '[mk_sectie][mk_rij kolom="2"][mk_module type="video" url="https://player.vimeo.com/video/325237941?color"][mk_close_module][separator][mk_module type="afbeelding" img="19"][mk_close_module][mk_close_rij][mk_close_sectie]';

	var content = info;

	var countsectie = coutner;

	var countrij = count;

    var countmodule = countmod;
    
    //console.log('coutner : ' +  coutner);
    //console.log('count : ' +  count);
    //console.log('countmod : ' +  countmod);


	var sectie = content.split('[mk_sectie');

	sectie.reverse();

	for (i = 0; i < sectie.length; i++) {


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

            //NewSectietoevoegen(sectieCssID, sectieClass, sectieBgcolor, sectie_bgimg, sectie_zichtbaar, sectie_setting, sectie_type);
            
            NewSectietoevoegenbefore(sectieCssID, sectieClass, sectieBgcolor, sectie_bgimg, sectie_zichtbaar, sectie_setting, sectie_type);

			//Rij open

			var rij = sectie[i].split('[mk_rij');


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

					NewRijtoevoegen(countsectie, rij_class, rij_koloms);

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

	//init_screenoverlay();

	//init_toggleView();

	close_mk_ladenopslaan();

}); }






});
//END READY










// NewSectietoevoegen(sectieCssID, sectieClass, sectieBgcolor, sectie_bgimg, sectie_zichtbaar, sectie_setting, sectie_type);


//Add nieuw sectie
function NewSectietoevoegenbefore(sectie_cssid, sectie_class, sectie_bgcolor, sectie_bgimg, sectie_zichtbaar, sectie_setting, sectie_type)
{
	MK_Append_New_Sectie_before(coutner, sectie_cssid, sectie_class, sectie_bgcolor, sectie_bgimg, sectie_zichtbaar, sectie_setting, sectie_type);

	//Enable nieuwe elementen to move!
	init_move();

	coutner++;
}


function MK_Append_New_Sectie_before(sectie_id, sectie_cssid, sectie_class, sectie_bgcolor, sectie_bgimg, sectie_slot, sectie_setting, sectie_type) { jQuery(function ($) {

	var type_sectie = ""; if(sectie_type == 1) { type_sectie = " sectieheader"; }


	$('.classbuilderinner').prepend( 

		'<li id="sectie_'+sectie_id+'" class="newsectie'+ type_sectie +'">'+

			'<div class="sectie_titel_bar"></div>'+

			'<div class="sectie_titel"><div class="naam">Sectie '+sectie_id+ '</div>'+


			'</div>'+

			'<div class="sectie_container">'+

				'<div id="sectie_opties">'+

					'<div class="sectie_naam">Sectie '+sectie_id+ ' : <span>'+sectie_class+'</span></div>'+

					'<div class="sectie_gegevens" sectie_cssid="'+sectie_cssid+'" sectie_class="'+sectie_class+'" sectie_bgcolor="'+sectie_bgcolor+'" sectie_bgimg="'+sectie_bgimg+'" sectie_imgurl="" sectie_imgthumb="" sectie_slot="'+sectie_slot+'" sectie_setting="'+sectie_setting+'" sectie_type="'+sectie_type+'"></div>'+

					'<div id="mk_editor_achtergrond_hold_preview" onclick="mk_editor_sectie_open('+sectie_id+')"><div class="mk_editor_achtergrond_hover"><i class="fa fa-image"></i></div></div>'+

					'<input style="display:none;" class="sectie_class" type="text" name="sectie_class" id="sectie_class_'+sectie_id+'" class="regular-text" placeholder="Sectie class" value="'+sectie_class+'">'+

				'</div>'+

				'<ul id="sectie_inner" class="newsectie_inner"></ul>'+

				'<div class="rij_button">'+

					//'<div class="addnieuwtitel" onclick="addrij('+sectie_id+')" >Nieuwe Rij</div>'+

				'</div>'+

			'</div>'+

			'<div class="addnewsectieafter" onclick="sectieafter('+sectie_id+')">Nieuwe sectie'+
				
			'</div>'+

		'</li>' 

	);

	if(builder_klant_edit == 0)
	{
		$('#sectie_'+sectie_id+' .sectie_titel').append(

			'<div id="edit" class="edit" onclick="mk_editor_sectie_open('+sectie_id+')"></div>'
		);
	}

	if(builder_klant_create == 0)
	{
		$('#sectie_'+sectie_id+' .sectie_titel').append(

			'<div id="delete" class="delete" onclick="deleteSectie('+sectie_id+')"></div>'
		);

		$('#sectie_'+sectie_id+' .rij_button').append(
			'<div class="addnieuwtitel" onclick="addrij('+sectie_id+')" ><span>Nieuwe Rij</span></div>'
		);
	}

	if(sectie_bgimg != "")
	{

		if(string_images != "") { string_images += ","; }

		string_images += sectie_bgimg;

		if(string_images_location != "") 
		{ 
			string_images_location += ','+sectie_id; 
		}
		else
		{
			string_images_location += sectie_id;
		}

		if(string_images_type != "") { string_images_type += ","; }

		string_images_type += "sectie";

	}
}); }
// sectieafter




//open window laden en opslaan
function mkbuilder_open_ladenopslaan() {  jQuery(function ($) {

	screenoverlay_open();
	$('#mk-builder-opslaan-laden').removeClass('close');
	$('#mk-builder-opslaan-laden').addClass('open');

	var scrollTop = $(window).scrollTop();

	var editorHeight = $('#mk-builder-opslaan-laden').outerHeight();

	var screenHeight = window.innerHeight;


	var editorpos = 50;

	if( (screenHeight - editorHeight) > 0 )
	{
		editorpos = (screenHeight - editorHeight) / 2;

		if(editorpos < 50) { editorpos = 50; }
	}


	$('#mk-builder-opslaan-laden').css('top', scrollTop + editorpos);
	

}); }


// close_mk_ladenopslaan
function close_mk_ladenopslaan() {  jQuery(function ($) {

	$('#mk-builder-opslaan-laden').addClass('close');
	setTimeout( function() { $('#mk-builder-opslaan-laden').removeClass('open'); }, 250);
	screenoverlay_close(); 

}); }


//open window save sectie!
function mk_save_sectie_open() {  jQuery(function ($) {

	$('.mk_sectie_opslaan_window').remove();

	//console.log( 'mk_editor_sectie_titel : ' +  $('.mk_editor_sectie_titel').attr('sectie_id'));

	//mk_sla_sectie_op(1, $('.mk_editor_sectie_titel').attr('sectie_id'));

	var sectie_id = $('.mk_editor_sectie_titel').attr('sectie_id');


	screenoverlay_open_editor();

	$('body').append(
		'<div class="mk_sectie_opslaan_window">' +
			'<div class="titel">Sectie opslaan!</div>' +
			'<input id="mk_sectie_opslaan_name" placeholder="Vul een titel in!" postid="'+ sectie_id +'" type="text" name="naam">' +
			'<div class="mk_button" onclick="mk_sla_sectie_op(1, '+ sectie_id +')">Opslaan</div>' +
		'</div>'
	);

	//set position editor
	var scrollTop = $(window).scrollTop();
	var editorHeight = $('.mk_sectie_opslaan_window').outerHeight();
	var screenHeight = window.innerHeight;

	var editorpos = 50;
	if( (screenHeight - editorHeight) > 0 )
	{
		editorpos = (screenHeight - editorHeight) / 2;
		if(editorpos < 50) { editorpos = 50; }
	}

	$('.mk_sectie_opslaan_window').css('top', scrollTop + editorpos);

}); }

function mk_save_sectie_close() {  jQuery(function ($) {

	screenoverlay_close_editor();
	$('.mk_sectie_opslaan_window').remove();
}); }


function mk_save_sectie() {  jQuery(function ($) {

	//console.log( 'mk_editor_sectie_titel : ' +  $('.mk_editor_sectie_titel').attr('sectie_id'));

	mk_sla_sectie_op(1, $('.mk_editor_sectie_titel').attr('sectie_id'));

}); }












































function mk_sla_sectie_op(optie, id) { jQuery(function ($) {

	var stringdata = "";

	$('.testarea').val('');

	$('.classbuilderinner #sectie_' + id).each(function() 
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
					else if(typemodule == "video") 
					{ 

						stringdata = '[mk_module type="' + $(this).attr('type') +'"';

							if($(this).find('.mod_gegevens').attr('module_url') != "" ) { stringdata += ' url="'+ $(this).find('.mod_gegevens').attr('module_url') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_optie') != "" && $(this).find('.mod_gegevens').attr('module_optie') != 0 ) { stringdata += ' view="'+ $(this).find('.mod_gegevens').attr('module_optie') +'"'; } 

							if($(this).find('.mod_gegevens').attr('module_target') != "" && $(this).find('.mod_gegevens').attr('module_target') != 0 ) { stringdata += ' target="'+ $(this).find('.mod_gegevens').attr('module_target') +'"'; }

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








	//console.log(  $('.testarea').val()  );




	domein = $('#mk-builder-opslaan-laden .mk_editor_url').attr('domein');
	url = domein + '/wp-admin/admin-ajax.php';

	//Update webiste!
	jQuery.ajax({
		type: "POST",
		url:  url,
		data: {
			action: 'mk_save_sectie',
			content: $('.testarea').val(),
			title: $('#mk_sectie_opslaan_name').val(),
		},
		beforeSend: function() {
			//console.log('start send'); 
		},
		success: function (output) {

			//console.log('succes!! updated'); 

			mk_save_sectie_close();
		},
		error: function(xhr, status, error) {
			//console.log('error!!' + error + " / " + status  ); 
		}
	});







	// if(optie == 1)
	// {
	// 	$( ".displaydata" ).html("");
	// 	$( ".displaydata" ).append('<div class="displaydata_inner"><div>Got this string data:</div><div>'+$('.testarea').val()+'</div></div>');

	// 	$( "#postdivrich.postarea .wp-editor-tabs #content-html" ).trigger( "click" );

	// 	$('#postdivrich #wp-content-wrap textarea#content').val($('.testarea').val()); // textarea

	// 	$('.mce-content-body.content.post-type-mkbuilder').html($('.testarea').val()); //iframe body

	// 	jQuery('#content_ifr').contents().find('#tinymce').html($('.testarea').val()); //deze ook! ?
		
	// }
	// else if(optie == 2)
	// {

	// 	$( "#postdivrich.postarea .wp-editor-tabs #content-html" ).trigger( "click" );

	// 	$('#postdivrich #wp-content-wrap textarea#content').val($('.testarea').val()); // textarea

	// 	$('.mce-content-body.content.post-type-mkbuilder').html($('.testarea').val()); //iframe body

	// 	jQuery('#content_ifr').contents().find('#tinymce').html($('.testarea').val()); //deze ook! ?

	// 	$( "#publish" ).trigger( "click" );

	// }
	// else if(optie == 3)
	// {

	// 	$( "#postdivrich.postarea .wp-editor-tabs #content-html" ).trigger( "click" );

	// 	$('#postdivrich #wp-content-wrap textarea#content').val($('.testarea').val()); // textarea

	// 	$('.mce-content-body.content.post-type-mkbuilder').html($('.testarea').val()); //iframe body

	// 	jQuery('#content_ifr').contents().find('#tinymce').html($('.testarea').val()); //deze ook! ?

	// 	$( "#submitdiv #save-action #save-post" ).trigger( "click" );

	// }


	// if(editorcache == 1)
	// {
	// 	//console.log('save on visual editor! : ' + editorcache);
	// 	//$('#mkbuilderteksteditor-tmce').trigger("click");
	// }






}); }
