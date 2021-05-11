jQuery(document).ready(function() {

	//coutner = 0;

	$('#mkadmin').click(function()
	{
		//console.log('clicke');
		$('body').removeClass('mk_builder_admin');
		$('body').removeClass('mk_builder_admin_preview');
		$('body').removeClass('mk_builder_klant_preview');
		$('body').addClass('mk_builder_admin');
	});

	$('#mkadminpreview').click(function()
	{
		//console.log('clicke');
		$('body').removeClass('mk_builder_admin');
		$('body').removeClass('mk_builder_admin_preview');
		$('body').removeClass('mk_builder_klant_preview');
		$('body').addClass('mk_builder_admin_preview');
	});

	$('#mkklantpreview').click(function()
	{	

		//console.log('clicke');

		$('body').removeClass('mk_builder_admin');
		$('body').removeClass('mk_builder_admin_preview');
		$('body').removeClass('mk_builder_klant_preview');

		$('body').addClass('mk_builder_klant_preview');

	});


	//Add nieuw sectie
	$('#addSectie').click(function()
	{
		set_setting = "";
		if( $('.mkbuilder_gegevens').attr('innerdivs') == '1' ) { set_setting = 2; } 

		MK_Append_New_Sectie(coutner, "", "", "", "", "", set_setting, "");


		coutner++;

		//Enable to move nieuwe elementen
		init_move_secties();
		init_move_rij();

	});





	$(document).dblclick(function(event) {


		//New rij
		if( $('.mk_builder_new_rij').length && !$(event.target).closest(".mk_builder_new_rij").length) {
			mk_builder_new_rij_close();
			//.log('dubbeel???');
		}

		//New Module
		if( $('.mk_builder_new_module').length && !$(event.target).closest(".mk_builder_new_module").length) {
			mk_builder_new_module_close();
		}


		//Edit module
		if( $('#mk_builder_editor_metabox.open').length && !$(event.target).closest("#mk_builder_editor_metabox.open").length) {
			
			if( $(event.target).closest(".mk_editor_screen_overlay.open").length && !tinyMCE.activeEditor.isDirty() )
			{
				close_mk_editor();
			}
		}

		//Edit rij
		if( $('.mk_editor_rij.open').length &&  !$(event.target).closest(".mk_editor_rij.open").length) {
			mk_editor_rij_close();
		}

		//Edit sectie
		if( $('.mk_editor_sectie.open').length && !$(event.target).closest(".mk_editor_sectie.open").length) {

			//if not selecting afbeeldingen
			if( !$(event.target).closest(".supports-drag-drop .media-modal").length )
			{
				mk_editor_sectie_close();
			}
		}


		//Page Kopieren
		if( $('.mk_kopieren_box').length && !$(event.target).closest(".mk_kopieren_box").length) {
			mk_kopieren_box_close();
			screenoverlay_close();
		}
		
	});


});
// end document ready

var windownewrij = 0;
var windownewmodule = 0;



//Add nieuw sectie
function NewSectietoevoegen(sectie_cssid, sectie_class, sectie_bgcolor, sectie_bgimg, sectie_zichtbaar, sectie_setting, sectie_type)
{
	MK_Append_New_Sectie(coutner, sectie_cssid, sectie_class, sectie_bgcolor, sectie_bgimg, sectie_zichtbaar, sectie_setting, sectie_type);

	//Enable nieuwe elementen to move!
	init_move();

	coutner++;
}

//NewSectietoevoegen()
function NewRijtoevoegen(sectieid, rij_class, koloms)
{
	//console.log( sectieid );

	if(koloms == "2")
	{
		MK_Append_New_Rij_2_koloms(sectieid, count, rij_class);
	}
	else if(koloms == "3")
	{
		MK_Append_New_Rij_3_koloms(sectieid, count, rij_class);
	}
	else if(koloms == "4")
	{
		MK_Append_New_Rij_4_koloms(sectieid, count, rij_class);
	}
	else
	{
		MK_Append_New_Rij(sectieid, count, rij_class);
	}

	//Enable nieuwe elementen to move!
	init_move_module();

	count++;
}


function NewModuletoevoegen(kolom_id, text)
{
	MK_Append_New_Module_tekst( (count - 1), countmod, kolom_id, text );

	countmod++;
}


function Create_new_tekst_Module(rij_id, kolom_id, text, module_class, module_slot)
{
	//console.log( " create " + rij_id + " / " + countmod + " / " + kolom_id );

	MK_Append_New_Module_tekst( rij_id, countmod, kolom_id, text, module_class, module_slot );

	countmod++;
}


function Create_new_code_Module(rij_id, kolom_id, text, module_class, module_slot)
{
	MK_Append_New_Module_Code( rij_id, countmod, kolom_id, text, module_class, module_slot );

	countmod++;
}


function Create_new_titel_Module(rij_id, kolom_id, text, module_class, tag_h, module_slot)
{
	MK_Append_New_Module_Titel( rij_id, countmod, kolom_id, text, module_class, tag_h, module_slot);

	countmod++;
}


function Create_new_afbeelding_Module(rij_id, kolom_id, module_class, module_img, module_slot, module_size, module_url)
{
	MK_Append_New_Module_Afbeelding( rij_id, countmod, kolom_id, module_class, module_img, module_slot, module_size, module_url);

	countmod++;
}


function Create_new_galerij_Module(rij_id, kolom_id, module_class, module_galerij, module_slot, module_view, module_size, module_target)
{
	MK_Append_New_Module_galerij( rij_id, countmod, kolom_id, module_class, module_galerij, module_slot, module_view, module_size, module_target );

	countmod++;
}


//Create_new_knop_Module(countrij, kolom_ID, module_class, module_slot, module_link_id, mkmodule[m], module_link_url, module_target, module_extern);
function Create_new_knop_Module(rij_id, kolom_id, module_class, module_slot, module_link_id, module_link_titel, module_link_url, module_target, module_extern)
{
	MK_Append_New_Module_knop( rij_id, countmod, kolom_id, module_class, module_slot, module_link_id, module_link_titel, module_link_url, module_target, module_extern );

	countmod++;
}

function Create_new_lijst_Module(rij_id, kolom_id, module_class, module_galerij, module_slot)
{
	MK_Append_New_Module_lijst( rij_id, countmod, kolom_id, text, module_class, module_slot );

	countmod++;
}

function Create_new_video_Module(rij_id, kolom_id, url, optie, module_class, module_slot, module_target)
{
	MK_Append_New_Module_Video( rij_id, countmod, kolom_id, url, optie, module_class, module_slot, module_target );

	countmod++;
}


/*
 *		Add Rij
 */
var count = 0;
var coutner = 0;
var countmod = 0;

function addclick(att) 
{
	MK_Append_New_Rij(att , count, "");

	//Enable to move nieuwe elementen
	init_move_module();

	count++;

	mk_builder_new_rij_close();
}
//addclick()

function add2koloms(att, countrij) 
{
	MK_Append_New_Rij_2_koloms(att , count, "");

	//Enable to move nieuwe elementen
	init_move_module();

	count++;

	mk_builder_new_rij_close();
}
//add2koloms

function add3koloms(att, countrij) 
{
	MK_Append_New_Rij_3_koloms(att , count, "");

	//Enable to move nieuwe elementen
	init_move_module();

	count++;

	mk_builder_new_rij_close();
}
//add3koloms

function add4koloms(att, countrij) 
{
	MK_Append_New_Rij_4_koloms(att , count, "");

	//Enable to move nieuwe elementen
	init_move_module();

	count++;

	mk_builder_new_rij_close();
}
//add4koloms
/*
 *		END Add Rij
 */



/*
 *		Add modules
 */
function AddModules(att, countrij, kolom) 
{
	//MK_Append_New_Module_tekst(rij_id, mod_id, kolom_id, text, module_class) 

	MK_Append_New_Module_tekst(countrij , countmod, kolom, "", "", "");

	countmod++;

	mk_builder_new_module_close();

	//MK_Builder_Height();
}

//AddModules

function AddModuleTitel(att, countrij, kolom) {

	//MK_Append_New_Module_Titel( rij_id, countmod, kolom_id, text, module_class, tag_h);

	MK_Append_New_Module_Titel(countrij , countmod, kolom, "", "", "", "");

	countmod++;

	mk_builder_new_module_close();

}

//AddModuleTitel(att, countrij, kolom)

function AddModuleAfbeelding(att, countrij, kolom) {

	//MK_Append_New_Module_Afbeelding( rij_id, countmod, kolom_id, module_class, module_img);

	var imagesize = "";

	if( $('.mkbuilder_gegevens').attr('imagesize') == 1 ) { imagesize = "mk_large"; }
	if( $('.mkbuilder_gegevens').attr('imagesize') == 2 ) { imagesize = "mk_full"; }

	MK_Append_New_Module_Afbeelding(countrij , countmod, kolom, "", "", "", imagesize, "");

	countmod++;

	mk_builder_new_module_close();

}

//AddModuleAfbeelding(att, countrij, kolom)

function AddModuleGalerij(att, countrij, kolom) {

	var galerijsize = "";

	if( $('.mkbuilder_gegevens').attr('galerijsize') == 1 ) { galerijsize = "mk_thumb_large"; }
	if( $('.mkbuilder_gegevens').attr('galerijsize') == 2 ) { galerijsize = "mk_thumb_medium"; }
	if( $('.mkbuilder_gegevens').attr('galerijsize') == 3 ) { galerijsize = "mk_thumb_small"; }
	if( $('.mkbuilder_gegevens').attr('galerijsize') == 4 ) { galerijsize = "mk_large"; }
	if( $('.mkbuilder_gegevens').attr('galerijsize') == 5 ) { galerijsize = "mk_full"; }


	MK_Append_New_Module_galerij(countrij , countmod, kolom, "", "", "", "", galerijsize, "");
	countmod++;
	mk_builder_new_module_close();
}
//AddModuleGalerij(att, countrij, kolom)

function AddModuleCode(att, countrij, kolom) {

	MK_Append_New_Module_Code(countrij , countmod, kolom, "", "", "");

	countmod++;

	mk_builder_new_module_close();

}

//AddModuleCode(att, countrij, kolom)

function AddModuleKnop(att, countrij, kolom) {

	MK_Append_New_Module_knop(countrij , countmod, kolom, "", "", "", "", "", "", "");

	countmod++;

	mk_builder_new_module_close();

}

//AddModuleKnop(att, countrij, kolom)

function AddModuleLijst(att, countrij, kolom) {

	MK_Append_New_Module_lijst(countrij , countmod, kolom, "", "", "");

	countmod++;

	mk_builder_new_module_close();
}
//AddModuleLijst(att, countrij, kolom)

function AddModuleVideo(att, countrij, kolom) {
	MK_Append_New_Module_Video(countrij , countmod, kolom, "", "", "", "", "");
	countmod++;
	mk_builder_new_module_close();
}
//AddModuleVideo(att, countrij, kolom)



/*
 *		END Add modules
 */






function delete_no(id) 
{
	$('.classbuilder .warningdelete').remove();
}


//  Delete sectie
var delete_sectie = -1;
function deleteSectie(id) 
{
	if( delete_sectie == id)
	{
		delete_sectie_yes(id);
	}
	else
	{
		delete_sectie = id;
		delete_no(0);
		$('#sectie_'+id).append('<div class="warningdelete"><div class="tekst">Weet u het zeker?</div><div onclick="delete_no('+id+')" class="nee">Nee</div><div onclick="delete_sectie_yes('+id+')" class="ja">Ja</div></div>');
	}

	setTimeout( function() {
		delete_sectie = -1; 
	}, 1000);
}


function delete_sectie_yes(id) 
{
	if( !$('ul.classbuilderinner').hasClass('noclick') )
	{
		//remove window
		delete_no(0);

		//prullenbak
		if( !$('.builderprullenbak').hasClass('active') ) { 

			$('.builderprullenbak').addClass('active'); 

			$( "ul.classbuilderinner_prullenbak" ).sortable({ connectWith: ["ul.classbuilderinner", "ul.classbuilderinner_prullenbak"], handle:".sectie_titel", start: function(event, ui) { $(this).addClass('noclick'); } });
			$( ".classbuilderinner_prullenbak" ).disableSelection();

			$( "ul.newrij_inner_prullenbak" ).sortable({ connectWith: ["ul.newrij_inner", "ul.newrij_inner_prullenbak"],  handle: ".mod_titel", start: function(event, ui) { $(this).addClass('noclick'); }  });
			$( ".newrij_inner_prullenbak" ).disableSelection();

			$( "ul.newsectie_inner_prullenbak" ).sortable({ connectWith: ["ul.newsectie_inner", "ul.newsectie_inner_prullenbak"], handle: ".rij_titel", start: function(event, ui) { $(this).addClass('noclick'); } });
			$( ".newsectie_inner_prullenbak" ).disableSelection();
	
		}

		var deleterij = $('#sectie_' + id).clone();
		$('.builderprullenbak ul.bp_secties').append(deleterij);


		$('#sectie_'+id).remove();
	}
	else
	{
		$('ul.classbuilderinner').removeClass('noclick');
	}
}



//  Delete Rij
var delete_rij = -1;
function deleteRij(id) 
{
	if( delete_rij == id)
	{
		delete_rij_yes(id);
	}
	else
	{
		delete_rij = id;
		delete_no(0);
		$('#rij_'+id).append('<div class="warningdelete"><div class="tekst">Weet u het zeker?</div><div onclick="delete_no('+id+')" class="nee">Nee</div><div onclick="delete_rij_yes('+id+')" class="ja">Ja</div></div>');
	}

	setTimeout( function() {
		delete_rij = -1; 
	}, 1000);
}

function delete_rij_yes(id) 
{
	if( !$('ul.newsectie_inner').hasClass('noclick') )
	{
		//remove window
		delete_no(0);

		//prullenbak
		if( !$('.builderprullenbak').hasClass('active') ) { 

			$('.builderprullenbak').addClass('active'); 

			$( "ul.classbuilderinner_prullenbak" ).sortable({ connectWith: ["ul.classbuilderinner", "ul.classbuilderinner_prullenbak"], handle:".sectie_titel", start: function(event, ui) { $(this).addClass('noclick'); } });
			$( ".classbuilderinner_prullenbak" ).disableSelection();

			$( "ul.newrij_inner_prullenbak" ).sortable({ connectWith: ["ul.newrij_inner", "ul.newrij_inner_prullenbak"],  handle: ".mod_titel", start: function(event, ui) { $(this).addClass('noclick'); }  });
			$( ".newrij_inner_prullenbak" ).disableSelection();

			$( "ul.newsectie_inner_prullenbak" ).sortable({ connectWith: ["ul.newsectie_inner", "ul.newsectie_inner_prullenbak"], handle: ".rij_titel", start: function(event, ui) { $(this).addClass('noclick'); } });
			$( ".newsectie_inner_prullenbak" ).disableSelection();
	
		}

		var deleterij = $('#rij_' + id).clone();
		$('.builderprullenbak ul.bp_rijen').append(deleterij);

		$('#rij_'+id).remove();
	}
	else
	{
		$('ul.newsectie_inner').removeClass('noclick');
	}
}


//  Delete Module
delete_module = -1
function deleteModule(id) 
{
	if( delete_module == id)
	{
		delete_module_yes(id);
	}
	else
	{
		delete_module = id;
		delete_no(0);
		$('#mod_id_'+id).append('<div class="warningdelete"><div class="tekst">Weet u het zeker?</div><div onclick="delete_no('+id+')" class="nee">Nee</div><div onclick="delete_module_yes('+id+')" class="ja">Ja</div></div>');
	}

	setTimeout( function() {
		delete_module = -1; 
	}, 1000);
}

function delete_module_yes(id) 
{
	if( !$('ul.newrij_inner').hasClass('noclick') )
	{
		//remove window
		delete_no(0);

		//prullenbak
		if( !$('.builderprullenbak').hasClass('active') ) { 

			$('.builderprullenbak').addClass('active'); 

			$( "ul.classbuilderinner_prullenbak" ).sortable({ connectWith: ["ul.classbuilderinner", "ul.classbuilderinner_prullenbak"], handle:".sectie_titel", start: function(event, ui) { $(this).addClass('noclick'); } });
			$( ".classbuilderinner_prullenbak" ).disableSelection();

			$( "ul.newrij_inner_prullenbak" ).sortable({ connectWith: ["ul.newrij_inner", "ul.newrij_inner_prullenbak"],  handle: ".mod_titel", start: function(event, ui) { $(this).addClass('noclick'); }  });
			$( ".newrij_inner_prullenbak" ).disableSelection();

			$( "ul.newsectie_inner_prullenbak" ).sortable({ connectWith: ["ul.newsectie_inner", "ul.newsectie_inner_prullenbak"], handle: ".rij_titel", start: function(event, ui) { $(this).addClass('noclick'); } });
			$( ".newsectie_inner_prullenbak" ).disableSelection();
	
		}

		var deletemod = $('#mod_id_' + id).clone();
		$('.builderprullenbak ul.bp_modules').append(deletemod);

		//remove
		$('#mod_id_'+id).remove();
		
	}
	else
	{
		$('ul.newrij_inner').removeClass('noclick');
	}
}

function restoreModule(id)
{

}


//Official builder
function MK_Append_New_Sectie(sectie_id, sectie_cssid, sectie_class, sectie_bgcolor, sectie_bgimg, sectie_slot, sectie_setting, sectie_type ) 
{

	var type_sectie = ""; if(sectie_type == 1) { type_sectie = " sectieheader"; }

	$( ".classbuilderinner" ).append( 

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

			'<div class="addnewsectieafter" onclick="sectieafter('+sectie_id+')"><span>Nieuwe sectie</span>'+
				
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

}
//end funciton sectie



//  sectieafter
function sectieafter(id)
{
	set_setting = "";
	if( $('.mkbuilder_gegevens').attr('innerdivs') == '1' ) { set_setting = 2; } 

	MK_Append_New_Sectie_After(id, coutner, "", "", "", "", "", set_setting, "");


	coutner++;

	//Enable to move nieuwe elementen
	init_move_secties();
	init_move_rij();

}


function MK_Append_New_Sectie_After(id, sectie_id, sectie_cssid, sectie_class, sectie_bgcolor, sectie_bgimg, sectie_slot, sectie_setting, sectie_type)
{

	var type_sectie = ""; if(sectie_type == 1) { type_sectie = " sectieheader"; }


	$('#sectie_' + id).after( 

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
}
// sectieafter





function MK_Append_New_Rij(sectie_id, rij_id, rij_class) 
{

	$( "#sectie_" + sectie_id + " .newsectie_inner" ).append( 

		'<li id="rij_'+rij_id+'" class="newrij" koloms="1" sectie="'+sectie_id+'">'+

			'<div class="rij_titel">'+

				
				'<div class="rij_gegevens" rij_class="'+rij_class+'"></div>'+

			'</div></div>'+

			'<div class="rij_container">'+

				'<div class="kolom kolom_1">'+

					'<ul class="newrij_inner"></ul>'+

					'<div class="mod_button">'+

						//'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 1)">Nieuwe Module</div>'+

					'</div>'+

				'</div>'+

			'</div>'+

		'</li>' 

	);

	if(builder_klant_edit == 0)
	{
		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .rij_titel').append(

			'<div id="edit" class="edit" onclick="mk_editor_rij_open('+rij_id+')"></div>'
		);
	}

	if(builder_klant_create == 0)
	{
		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .rij_titel').append(

			'<div id="delete" class="delete" onclick="deleteRij('+rij_id+')"></div>'
		);

		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .kolom_1 .mod_button').append(
			'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 1)"><span>Nieuwe Module</span></div>'
		);
	}


}

function MK_Append_New_Rij_2_koloms(sectie_id, rij_id, rij_class) 
{

	$( "#sectie_" + sectie_id + " .newsectie_inner" ).append( 

		'<li id="rij_'+rij_id+'" class="newrij koloms_2_rij" koloms="2" sectie="'+sectie_id+'">'+

			'<div class="rij_titel">'+

				//'<div id="edit" class="edit" onclick="mk_editor_rij_open('+rij_id+')"></div>'+

				//'<div id="delete" class="delete" onclick="deleteRij('+rij_id+')"></div>'+

				'<div class="rij_gegevens" rij_class="'+rij_class+'"></div>'+

			'</div>'+

			'<div class="rij_container">'+

				'<div class="kolom kolom_1">'+

					'<ul class="newrij_inner"></ul>'+

					'<div class="mod_button">'+

						//'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 1)">Nieuwe Module</div>'+

					'</div>'+

				'</div>'+

				'<div class="kolom kolom_2">'+

					'<ul class="newrij_inner"></ul>'+

					'<div class="mod_button">'+

						//'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 2)">Nieuwe Module</div>'+

					'</div>'+

				'</div>'+

			'</div>'+

		'</li>' 

	);

	if(builder_klant_edit == 0)
	{
		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .rij_titel').append(

			'<div id="edit" class="edit" onclick="mk_editor_rij_open('+rij_id+')"></div>'
		);
	}


	if(builder_klant_create == 0)
	{
		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .rij_titel').append(

			'<div id="delete" class="delete" onclick="deleteRij('+rij_id+')"></div>'
		);

		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .kolom_1 .mod_button').append(

			'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 1)"><span>Nieuwe Module</span></div>'
		);

		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .kolom_2 .mod_button').append(

			'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 2)"><span>Nieuwe Module</span></div>'
		);
	}

}

function MK_Append_New_Rij_3_koloms(sectie_id, rij_id, rij_class) 
{

	$( "#sectie_" + sectie_id + " .newsectie_inner" ).append( 

		'<li id="rij_'+rij_id+'" class="newrij koloms_3_rij" koloms="3" sectie="'+sectie_id+'">'+

			'<div class="rij_titel">'+

				//'<div id="edit" class="edit" onclick="mk_editor_rij_open('+rij_id+')"></div>'+

				//'<div id="delete" class="delete" onclick="deleteRij('+rij_id+')"></div>'+

				'<div class="rij_gegevens" rij_class="'+rij_class+'"></div>'+

			'</div>'+

			'<div class="rij_container">'+

				'<div class="kolom kolom_1">'+

					'<ul class="newrij_inner"></ul>'+

					'<div class="mod_button">'+

						//'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 1)">Nieuwe Module</div>'+

					'</div>'+

				'</div>'+

				'<div class="kolom kolom_2">'+

					'<ul class="newrij_inner"></ul>'+

					'<div class="mod_button">'+

						//'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 2)">Nieuwe Module</div>'+

					'</div>'+

				'</div>'+

				'<div class="kolom kolom_3">'+

					'<ul class="newrij_inner"></ul>'+

					'<div class="mod_button">'+

						//'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 3)">Nieuwe Module</div>'+

					'</div>'+

				'</div>'+

			'</div>'+

		'</li>' 

	);

	if(builder_klant_edit == 0)
	{
		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .rij_titel').append(

			'<div id="edit" class="edit" onclick="mk_editor_rij_open('+rij_id+')"></div>'
		);
	}

	if(builder_klant_create == 0)
	{
		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .rij_titel').append(

			'<div id="delete" class="delete" onclick="deleteRij('+rij_id+')"></div>'
		);

		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .kolom_1 .mod_button').append(

			'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 1)"><span>Nieuwe Module</span></div>'
		);

		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .kolom_2 .mod_button').append(

			'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 2)"><span>Nieuwe Module</span></div>'
		);

		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .kolom_3 .mod_button').append(

			'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 3)"><span>Nieuwe Module</span></div>'
		);
	} 

}

function MK_Append_New_Rij_4_koloms(sectie_id, rij_id, rij_class) 
{

	$( "#sectie_" + sectie_id + " .newsectie_inner" ).append( 

		'<li id="rij_'+rij_id+'" class="newrij koloms_4_rij" koloms="4" sectie="'+sectie_id+'">'+

			'<div class="rij_titel">'+

				//'<div id="edit" class="edit" onclick="mk_editor_rij_open('+rij_id+')"></div>'+

				//'<div id="delete" class="delete" onclick="deleteRij('+rij_id+')"></div>'+

				'<div class="rij_gegevens" rij_class="'+rij_class+'"></div>'+

			'</div>'+

			'<div class="rij_container">'+

				'<div class="kolom kolom_1">'+

					'<ul class="newrij_inner"></ul>'+

					'<div class="mod_button">'+

						//'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 1)">Nieuwe Module</div>'+

					'</div>'+

				'</div>'+

				'<div class="kolom kolom_2">'+

					'<ul class="newrij_inner"></ul>'+

					'<div class="mod_button">'+

						//'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 2)">Nieuwe Module</div>'+

					'</div>'+

				'</div>'+

				'<div class="kolom kolom_3">'+

					'<ul class="newrij_inner"></ul>'+

					'<div class="mod_button">'+

						//'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 3)">Nieuwe Module</div>'+

					'</div>'+

				'</div>'+

				'<div class="kolom kolom_4">'+

					'<ul class="newrij_inner"></ul>'+

					'<div class="mod_button">'+

						//'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 4)">Nieuwe Module</div>'+

					'</div>'+

				'</div>'+

			'</div>'+

		'</li>' 

	);

	if(builder_klant_edit == 0)
	{
		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .rij_titel').append(

			'<div id="edit" class="edit" onclick="mk_editor_rij_open('+rij_id+')"></div>'
		);
	}

	if(builder_klant_create == 0)
	{
		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .rij_titel').append(

			'<div id="delete" class="delete" onclick="deleteRij('+rij_id+')"></div>'

		);

		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .kolom_1 .mod_button').append(

			'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 1)"><span>Nieuwe Module</span></div>'
			
		);

		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .kolom_2 .mod_button').append(

			'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 2)"><span>Nieuwe Module</span></div>'
			
		);

		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .kolom_3 .mod_button').append(

			'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 3)"><span>Nieuwe Module</span></div>'
			
		);

		$('#sectie_'+sectie_id+' #rij_'+rij_id+' .kolom_4 .mod_button').append(

			'<div class="addnieuwtitel" onclick="AddModule('+ sectie_id +', '+ rij_id +', 4)"><span>Nieuwe Module</span></div>'
			
		);
	}

}

//Tekst module

function MK_Append_New_Module_tekst(rij_id, mod_id, kolom_id, text, module_class, module_slot) 
{

	$("#rij_" + rij_id + " .kolom.kolom_" + kolom_id +" .newrij_inner" ).append(

		'<li id="mod_id_'+mod_id+'" class="module module_tekst" type="tekst">'+

			'<div class="mod_titel">'+

				//'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'+

				//'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'+

				'<div class="mod_naam">Tekst module <span>'+mod_id+ '</span></div>'+

				//'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'+

				'<div class="mod_gegevens" module_class="'+module_class+'" module_slot="'+module_slot+'"><textarea>'+text+'</textarea> </div>'+

			'</div>'+

			'<div class="mod_inner">'+

			//	'<div class="module_preview_tekst module_preview" onclick="editModuleTekst('+mod_id+')">'+text+'</div>' +

			//	'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>' +

			'</div>'+

		'</li>'

	);


	if(builder_admin == 0 || builder_admin == 1 && module_slot != 1)
	{

		if(builder_klant_create == 0 || builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').append(

				'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'
			);
		}

		if(builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_inner').append(

				'<div class="module_preview_tekst module_preview" onclick="editModuleTekst('+mod_id+')">'+text+'</div>'+

				'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>'
			);
		}
		else
		{
			$('#mod_id_'+mod_id+' .mod_inner').append(
				'<div class="module_preview_tekst module_preview" >'+text+'</div>'
			);
		}

		
	}
	else
	{
		$('#mod_id_'+mod_id+'').addClass('module_opslot');

		$('#mod_id_'+mod_id+' .mod_inner').append(
			'<div class="module_preview_tekst module_preview" >'+text+'</div>'
		);
	}

}

//End MK_Append_New_Module tekst module

//TItel module MK_Append_New_Module_Titel( rij_id, countmod, kolom_id, text, module_class, tag_h);

function MK_Append_New_Module_Titel(rij_id, mod_id, kolom_id, text, module_class, tag_h, module_slot) 
{

	$("#rij_" + rij_id + " .kolom.kolom_" + kolom_id + " .newrij_inner" ).append(

		'<li id="mod_id_'+mod_id+'" class="module module_titel" type="titel">'+

			'<div class="mod_titel">'+

				//'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'+

				//'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'+

				'<div class="mod_naam">Titel module <span>'+mod_id+ '</span></div>'+

				//'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'+

				'<div class="mod_gegevens" module_class="'+module_class+'" module_htag="'+tag_h+'"  module_slot="'+module_slot+'">'+

					'<input type="text" name="titel" placeholder="titel" value="'+text+'">' +

				'</div>'+

			'</div>'+

			'<div class="mod_inner">'+

 			//	'<div class="module_preview_titel module_preview" onclick="editModuleTekst('+mod_id+')">H'+tag_h+ ": " +text+'</div>'+

 			//	'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>' +

			'</div>'+

		'</li>'

	);


	if(builder_admin == 0 || builder_admin == 1 && module_slot != 1)
	{

		if(builder_klant_create == 0 || builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').append(

				'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'
			);
		}

		if(builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_inner').append(

				'<div class="module_preview_titel module_preview" onclick="editModuleTekst('+mod_id+')">H'+tag_h+ ": " +text+'</div>'+

				'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>'
			);
		}
		else
		{
			$('#mod_id_'+mod_id+' .mod_inner').append(
				'<div class="module_preview_titel module_preview">H'+tag_h+ ": " +text+'</div>'
			);
		}

		
	}
	else
	{
		$('#mod_id_'+mod_id+'').addClass('module_opslot');

		$('#mod_id_'+mod_id+' .mod_inner').append(
			'<div class="module_preview_titel module_preview">H'+tag_h+ ": " +text+'</div>'
		);
	}

}

//End MK_Append_New_Module_Title title module

//Afbeeldings module MK_Append_New_Module_Afbeelding( rij_id, countmod, kolom_id, module_class, module_img);

function MK_Append_New_Module_Afbeelding(rij_id, mod_id, kolom_id, module_class, module_img, module_slot, module_size, module_url) 
{

	$("#rij_" + rij_id + " .kolom.kolom_" + kolom_id + " .newrij_inner" ).append(

		'<li id="mod_id_'+mod_id+'" class="module_afbeelding module" type="afbeelding">'+

			'<div class="mod_titel">'+

				//'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'+

				//'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'+

				'<div class="mod_naam">Afbeelding module <span>'+mod_id+ '</span></div>'+

				//'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'+

				'<div class="mod_gegevens"  module_class="'+module_class+'" module_img="'+module_img+'"  module_slot="'+module_slot+'" module_size="'+module_size+'" module_url="'+module_url+'">'+

				'</div>'+

			'</div>'+

			'<div class="mod_inner">'+

				//'<div class="module_preview_afbeelding module_preview" onclick="editModuleTekst('+mod_id+')"></div>'+

 				//'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>' +

			'</div>'+

		'</li>'

	);


	if(builder_admin == 0 || builder_admin == 1 && module_slot != 1)
	{

		if(builder_klant_create == 0 || builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').append(

				'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'
			);
		}

		if(builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_inner').append(

				'<div class="module_preview_afbeelding module_preview" onclick="editModuleTekst('+mod_id+')"></div>'+

				'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>'
			);
		}
		else
		{
			$('#mod_id_'+mod_id+' .mod_inner').append(
				'<div class="module_preview_afbeelding module_preview"></div>'
			);
		}

		
	}
	else
	{
		$('#mod_id_'+mod_id+'').addClass('module_opslot');

		$('#mod_id_'+mod_id+' .mod_inner').append(
			'<div class="module_preview_afbeelding module_preview"></div>'
		);
	}

	

	if(module_img != "")
	{
		if(string_images != "") { string_images += ","; }

		string_images += module_img;

		if(string_images_location != "") 

		{ 

			string_images_location += ',#mod_id_'+mod_id+' .module_preview_afbeelding'; 

		}

		else

		{

			string_images_location += '#mod_id_'+mod_id+' .module_preview_afbeelding';

		}

		if(string_images_type != "") { string_images_type += ","; }

		string_images_type += "afbeelding";

		// wp.media.attachment(module_img).fetch().then(function (data) {

		//   //console.log( wp.media.attachment(module_img).get('url') );

		//   //$('#mod_id_'+mod_id+' .module_preview_afbeelding img').css('background-image', 'url('+ wp.media.attachment(module_img).get('url') +')');

		//   console.log(module_img);

		//   $('#mod_id_'+mod_id+' .module_preview_afbeelding').html( '<img src="'+ wp.media.attachment(module_img).get('url') +'"/>' );

		// });

	}

}

//End MK_Append_New_Module_Afbeelding Afbeelding module

//Galerij module

//MK_Append_New_Module_galerij( rij_id, countmod, kolom_id, module_class, module_galerij, module_slot, module_view );

function MK_Append_New_Module_galerij(rij_id, mod_id, kolom_id, module_class, module_galerij, module_slot, module_view, module_size, module_target) 
{

	$("#rij_" + rij_id + " .kolom.kolom_" + kolom_id + " .newrij_inner" ).append(

		'<li id="mod_id_'+mod_id+'" class="module module_galerij" type="galerij">'+

			'<div class="mod_titel">'+

				//'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'+

				//'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'+

				'<div class="mod_naam">Galerij module <span>'+mod_id+ '</span></div>'+

				//'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'+

				'<div class="mod_gegevens" module_class="'+module_class+'" module_galerij="'+module_galerij+'" module_view="'+module_view+'" module_slot="'+module_slot+'" module_size="'+module_size+'" module_target="'+module_target+'">'+

				'</div>'+

			'</div>'+

			'<div class="mod_inner">'+

				'<div class="galerij_items">'+

					//'<div class="module_preview_galerij module_preview" onclick="editModuleTekst('+mod_id+')"></div>'+

					//'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>' +

				'</div>'+


			'</div>'+

		'</li>'

	);


	if(builder_admin == 0 || builder_admin == 1 && module_slot != 1)
	{

		if(builder_klant_create == 0 || builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').append(

				'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'
			);
		}

		if(builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_inner .galerij_items').append(

				'<div class="module_preview_galerij module_preview" onclick="editModuleTekst('+mod_id+')"></div>'+

				'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>'
			);

		}
		else
		{
			$('#mod_id_'+mod_id+' .mod_inner .galerij_items').append(
				'<div class="module_preview_galerij module_preview"></div>'
			);
		}

		
	}
	else
	{
		$('#mod_id_'+mod_id+'').addClass('module_opslot');

		$('#mod_id_'+mod_id+' .mod_inner').append(
			'<div class="module_preview_galerij module_preview" ></div>'
		);
	}


	if(module_galerij != "")
	{

		if(string_images != "") { string_images += ","; }

		string_images += module_galerij;

		//module_galerij

		var array_galerij_module = module_galerij.split(',');

		//console.log( array_galerij_module.length +  ""  +  array_galerij_module );

		for(var i = 0; i < array_galerij_module.length; i++)
		{
			if(string_images_location != "") 
			{ 

				string_images_location += ',#mod_id_'+mod_id+' .module_preview_galerij'; 

			}
			else
			{

				string_images_location += '#mod_id_'+mod_id+' .module_preview_galerij';

			}
			if(string_images_type != "") { string_images_type += ","; }

			string_images_type += "galerij";

		}

	}

}

//End MK_Append_New_Module tekst module

//Code module

function MK_Append_New_Module_Code(rij_id, mod_id, kolom_id, text, module_class, module_slot) 
{

	$("#rij_" + rij_id + " .kolom.kolom_" + kolom_id +" .newrij_inner" ).append(

		'<li id="mod_id_'+mod_id+'" class="module module_code" type="code">'+

			'<div class="mod_titel">'+

				//'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'+

				//'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'+

				'<div class="mod_naam">Code module <span>'+mod_id+ '</span></div>'+

				//'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'+

				'<div class="mod_gegevens" module_class="'+module_class+'" module_slot="'+module_slot+'"><textarea>'+text+'</textarea> </div>'+

			'</div>'+

			'<div class="mod_inner">'+

			//	'<div class="module_preview_code module_preview" onclick="editModuleTekst('+mod_id+')"><textarea>'+text+'</textarea></div>'+

			//	'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>' +

			'</div>'+

		'</li>'

	);


	if(builder_admin == 0 || builder_admin == 1 && module_slot != 1)
	{

		if(builder_klant_create == 0 || builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').append(

				'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'
			);
		}

		if(builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_inner').append(

				'<div class="module_preview_code module_preview" onclick="editModuleTekst('+mod_id+')"><textarea>'+text+'</textarea></div>'+

				'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>'
			);
		}
		else
		{
			$('#mod_id_'+mod_id+' .mod_inner').append(
				'<div class="module_preview_code module_preview"><textarea>'+text+'</textarea></div>'
			);
		}

		
	}
	else
	{
		$('#mod_id_'+mod_id+'').addClass('module_opslot');

		$('#mod_id_'+mod_id+' .mod_inner').append(
			'<div class="module_preview_code module_preview" ><textarea>'+text+'</textarea></div>'
		);
	}

}

//End MK_Append_New_Module_Codes

//Knop module

function MK_Append_New_Module_knop(rij_id, mod_id, kolom_id, module_class, module_slot, module_link_id, module_link_titel, module_link_url, module_target, module_extern) 
{

	//console.log('module_link_titel:' + module_link_titel + ':module_link_titel')

	$("#rij_" + rij_id + " .kolom.kolom_" + kolom_id +" .newrij_inner" ).append(

		'<li id="mod_id_'+mod_id+'" class="module module_knop" type="knop">'+

			'<div class="mod_titel">'+

				//'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'+

				//'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'+

				'<div class="mod_naam">Knop module <span>'+mod_id+ '</span></div>'+

				//'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'+

				'<div class="mod_gegevens" module_class="'+module_class+'" module_link_url="'+module_link_url+'" module_link_titel="'+module_link_titel+'"  module_link_id="'+module_link_id+'" module_slot="'+module_slot+'" module_target="'+module_target+'" module_extern="'+module_extern+'"></div>'+

			'</div>'+

			'<div class="mod_inner">'+

			//	'<div class="module_preview_knop module_preview" onclick="editModuleTekst('+mod_id+')">'+

			//		module_link_titel + ' : ' + module_link_url +

			//	'</div>' +

			//	'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>' +

			'</div>'+

		'</li>'

	);



	if(builder_admin == 0 || builder_admin == 1 && module_slot != 1)
	{

		if(builder_klant_create == 0 || builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').append(

				'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'
			);
		}

		if(builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_inner').append(

				'<div class="module_preview_knop module_preview" onclick="editModuleTekst('+mod_id+')">'+

					module_link_titel + ' : ' + module_link_url +

				'</div>' +

				'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>'
			);
		}
		else
		{
			$('#mod_id_'+mod_id+' .mod_inner').append(
				'<div class="module_preview_knop module_preview">'+

					module_link_titel + ' : ' + module_link_url +

				'</div>'
			);
		}
		
	}
	else
	{
		$('#mod_id_'+mod_id+'').addClass('module_opslot');

		$('#mod_id_'+mod_id+' .mod_inner').append(
			'<div class="module_preview_knop module_preview">'+

					module_link_titel + ' : ' + module_link_url +

				'</div>'
		);
	}

}

//End MK_Append_New_Module_knop

//Lijst module

function MK_Append_New_Module_lijst(rij_id, mod_id, kolom_id, text, module_class, module_slot) 
{

	$("#rij_" + rij_id + " .kolom.kolom_" + kolom_id +" .newrij_inner" ).append(

		'<li id="mod_id_'+mod_id+'" class="module module_lijst" type="code">'+

			'<div class="mod_titel">'+

				//'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'+

				//'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'+

				'<div class="mod_naam">Code module <span>'+mod_id+ '</span></div>'+

				//'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'+

				'<div class="mod_gegevens" module_class="'+module_class+'" module_slot="'+module_slot+'"><textarea>'+text+'</textarea></div>'+

			'</div>'+

			'<div class="mod_inner">'+

				'<div class="module_preview_lijst module_preview" onclick="editModuleTekst('+mod_id+')">'+text+'</div>' +

				'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>' +

			'</div>'+

		'</li>'

	);


	if(builder_admin == 0 || builder_admin == 1 && module_slot != 1)
	{

		if(builder_klant_create == 0 || builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').append(

				'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'
			);
		}

		if(builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_inner').append(

				'<div class="module_preview_lijst module_preview" onclick="editModuleTekst('+mod_id+')">'+text+'</div>' +

				'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>'
			);
		}
		else
		{
			$('#mod_id_'+mod_id+' .mod_inner').append(
				'<div class="module_preview_lijst module_preview">'+text+'</div>'
			);
		}

		
	}
	else
	{
		$('#mod_id_'+mod_id+'').addClass('module_opslot');

		$('#mod_id_'+mod_id+' .mod_inner').append(
			'<div class="module_preview_lijst module_preview">'+text+'</div>'
		);
	}

	

}

//End MK_Append_New_Module_lijst



//Video module
function MK_Append_New_Module_Video(rij_id, mod_id, kolom_id, url, optie, module_class, module_slot, module_target) 
{

	$("#rij_" + rij_id + " .kolom.kolom_" + kolom_id +" .newrij_inner" ).append(

		'<li id="mod_id_'+mod_id+'" class="module module_video" type="video">'+

			'<div class="mod_titel">'+

				'<div class="mod_naam">Video module <span>'+mod_id+ '</span></div>'+

				'<div class="mod_gegevens" module_class="'+module_class+'" module_slot="'+module_slot+'" module_url="'+url+'" module_optie="'+optie+'" module_target="'+module_target+'"></div>'+

			'</div>'+

			'<div class="mod_inner">'+


			'</div>'+

		'</li>'

	);


	if(builder_admin == 0 || builder_admin == 1 && module_slot != 1)
	{

		if(builder_klant_create == 0 || builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').append(

				'<div id="delete" class="delete" onclick="deleteModule('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="module_kopieren" class="module_kopieren" onclick="module_kopieren('+mod_id+')"></div>'
			);
		}

		if(builder_klant_edit == 0)
		{
			$('#mod_id_'+mod_id+' .mod_titel').prepend(

				'<div id="edit" class="edit" onclick="editModuleTekst('+mod_id+')"></div>'
			);

			$('#mod_id_'+mod_id+' .mod_inner').append(

				'<div class="module_preview_video module_preview" onclick="editModuleTekst('+mod_id+')">'+url+'</div>' +

				'<div class="module_preview_edit" onclick="editModuleTekst('+mod_id+')">Aanpassen</div>'
			);
		}
		else
		{
			$('#mod_id_'+mod_id+' .mod_inner').append(
				'<div class="module_preview_video module_preview">'+url+'</div>'
			);
		}

		
	}
	else
	{
		$('#mod_id_'+mod_id+'').addClass('module_opslot');

		$('#mod_id_'+mod_id+' .mod_inner').append(
			'<div class="module_preview_video module_preview">'+text+'</div>'
		);
	}
}
//End MK_Append_New_Module_Video






/*
*/

/*
*/

var string_images_type = "";

var string_images_location = "";

var string_images = "";

function getallimages()
{

	//console.log(string_images);

	//console.log(string_images_location);

	//console.log(string_images_type);

	var array_galerij = string_images.split(",");

	var array_galerij_location = string_images_location.split(",");

	var array_galerij_type = string_images_type.split(",");

	//console.log(array_galerij.length);

	if(array_galerij.length > 0)

	{

 //return;

	//var attachment_ids = [array_galerij[0],array_galerij[1],array_galerij[2]];

		wp.media.query({ post__in: array_galerij })

		  .more()

		  .then(function () {

		    // You attachments here normally

		    // You can safely use any of them here

		   // console.log( wp.media.attachment(602).get('url') );

		  //  console.log( wp.media.attachment(951).get('url') );

		  //  console.log( wp.media.attachment(952).get('url') );

		 // console.log(array_galerij.length);

		    for(var i = 0; array_galerij.length; i++)
		    {

		    	if(array_galerij[i] != "" && array_galerij[i] != null)
		    	{
						var temp_image_json = wp.media.attachment(array_galerij[i]);

						//fallback
						if(temp_image_json.get('sizes') == null)	{	return;}

		    		var thumb = "";

		    		if( temp_image_json.get('sizes').thumbnail != null )
		    		{
		    			thumb = temp_image_json.get('sizes').thumbnail.url;
		    		}
		    		else if( temp_image_json.get('sizes').full != null )
		    		{
		    			thumb = temp_image_json.get('sizes').full.url;
		    		}
		    		else
		    		{
		    			thumb = temp_image_json.get('url');
		    		}

		    		var img_url = temp_image_json.get('url');

		    		if(array_galerij_type[i] == "afbeelding")
		    		{
		    			$(array_galerij_location[i]).append( '<div class="image"><img src="'+ temp_image_json.get('url') +'"/></div>' );
		    		}
		    		else if(array_galerij_type[i] == "galerij")
		    		{
		    			$(array_galerij_location[i]).append( '<li class="image" img_thumb="'+thumb+'" img_id="'+array_galerij[i]+'" img_url="'+img_url+'"><div class="remove" onclick="galerijremoveimage(this)"></div><img src="'+ thumb +'"/></li>' );
		    		}

		    		else if(array_galerij_type[i] == "sectie")
		    		{
		    			if( temp_image_json.get('sizes').mk_full != null )
			    		{
			    			thumb = temp_image_json.get('sizes').mk_full.url;
			    		}
			    		else if( temp_image_json.get('sizes').full != null )
			    		{
			    			thumb = temp_image_json.get('sizes').full.url;
			    		}
			    		else
			    		{
			    			thumb = temp_image_json.get('url');
			    		}

		    			$('#sectie_'+array_galerij_location[i] + ' .sectie_gegevens').attr('sectie_imgurl', img_url);

							$('#sectie_'+array_galerij_location[i] + ' .sectie_gegevens').attr('sectie_imgthumb', thumb);
							
							//show preview
							$('#sectie_'+array_galerij_location[i] + ' #mk_editor_achtergrond_hold_preview').css('background-image', 'url(' +img_url+')');
							$('#sectie_'+array_galerij_location[i] + ' #mk_editor_achtergrond_hold_preview').addClass('active');

		    		}

		    	}

		    	if(i + 1 >= array_galerij.length)

		    	{

		    		return;

		    	}

		    }

		  });

	// var query = wp.media.query({ post__in: [1709] }),

	//     promise = query.more();

	// promise.done( function() {

	//     console.log( 'query length', query.length );

	// });

	}

}

function Setalliamges()
{

	//console.log( "sdfihsdifosdjfidosfjdsiofj");

}

/*

*/

/*

*/

function addmedia(id)
{

	//afbeeldingnopen = 1;

	// $('#upload-btn').click(function(e) {

        //this.preventDefault();

        var image = wp.media({ 

            title: 'Upload Image',

            // mutiple: true if you want to upload multiple files at once

            multiple: false

        }).open()

        .on('select', function(){

            // This will return the selected image from the Media Uploader, the result is an object

            var uploaded_image = image.state().get('selection').first();

            // We convert uploaded_image to a JSON object to make accessing it easier

            // Output to the console uploaded_image

            //console.log(uploaded_image);

            var image_url = uploaded_image.toJSON().url;

            var image_id = uploaded_image.toJSON().id;

            //console.log(image_id);

            // Let's assign the url value to the input field

            $('#image_url_'+id).val(image_url);

            //image_hold_

            $('#image_hold_'+id).addClass('show');

			$('#image_hold_'+id+ ' img').attr('src', image_url);
			
			//afbeeldingnopen = 0;
			//afbeeldingnadd = 1;

        });

 //   });

}

//addmedia()

function mk_editor_addmedia()
{
	//afbeeldingnopen = 1;

	 var image = wp.media({ 

            title: 'Upload Image',

            // mutiple: true if you want to upload multiple files at once

            multiple: false

        }).open()

        .on('select', function(){

            // This will return the selected image from the Media Uploader, the result is an object

            var uploaded_image = image.state().get('selection').first();

            // We convert uploaded_image to a JSON object to make accessing it easier

            // Output to the console uploaded_image

           // console.log(uploaded_image);

            var image_url = uploaded_image.toJSON().url;

            var image_id = uploaded_image.toJSON().id;

           // console.log(image_id);

            // Let's assign the url value to the input field

            $('#mk_editor_image_url').val(image_url);

            //image_hold_

            $('#mk_editor_image_hold img').attr('src', image_url);

			$('#mk_editor_image_id').html(image_id);
			
			//afbeeldingnopen = 0;
			//afbeeldingnadd = 1;
        });

}

//mk_editor_addmedia

function mk_editor_achtergrond_media()
{
	//windowopen = 1;

	 var image = wp.media({ 

            title: 'Upload Image',

            // mutiple: true if you want to upload multiple files at once

            multiple: false

        }).open()

        .on('select', function(){

            // This will return the selected image from the Media Uploader, the result is an object

            var uploaded_image = image.state().get('selection').first();

            // We convert uploaded_image to a JSON object to make accessing it easier

            // Output to the console uploaded_image

            //console.log(uploaded_image);

            var image_url = uploaded_image.toJSON().url;

            var image_id = uploaded_image.toJSON().id;

            //console.log(image_id);

            // Let's assign the url value to the input field

            //$('#mk_editor_achtergrond_url').val(image_url);

            //image_hold_

			$('#mk_editor_achtergrond_hold').css('background-image', 'url(' + image_url + ')');

			$('#mk_editor_achtergrond_hold').attr('url', image_url);
			
			$('.mk_editor_sectie .mk_editor_achtergrond_delete').addClass('active');

            //$('#mk_editor_achtergrond_hold img').attr('src', image_url);

			$('#mk_editor_achtergrond_id').html(image_id);
			
			//windowopen = 0; 
			//afbeeldingnadd = 1;
        });

}

//mk_editor_addmedia

function addgalerij()
{

	//afbeeldingnopen = 1;

	//$('#upload-btn-multiple').click(function(e) {

  //      e.preventDefault();

        var image = wp.media({ 

            title: 'Upload Image multiple',

            // mutiple: true if you want to upload multiple files at once

            multiple: 'add'

        }).open()

        .on('select', function(e){

            // This will return the selected image from the Media Uploader, the result is an object

            var uploaded_image = image.state().get('selection').first();

            //console.log( image.state().get('selection').length );

            image.state().get('selection').each(function() {

            	console.log( "lalalala : " );//+ this.toJSON().url );

            });

            // for(i = 0; i < image.state().get('selection').length; i++)

            // {

            // 	console.log( image.state().get('selection').first() );

            // }

            // We convert uploaded_image to a JSON object to make accessing it easier

            // Output to the console uploaded_image

            //console.log(uploaded_image);

            var image_url = uploaded_image.toJSON().url;

            // Let's assign the url value to the input field

            //$('#image_url_'+ modid).val(image_url);

            var attachments = image.state().get('selection').map( 

                function( attachment ) {

                    attachment.toJSON();

                    return attachment;

            });

            //loop through the array and do things with each attachment

           var i;

           for (i = 0; i < attachments.length; ++i) {

                //sample function 1: add image preview

                //$('#image_hold_' + modid).append('<div class="galerij-item"><img src="' +  attachments[i].attributes.url + '" ></div>');

               // console.log(attachments[i]);

               // console.log(  );

                thumb = attachments[i].attributes.url;

                if( attachments[i].attributes.sizes.thumbnail != null )

                {

                	thumb = attachments[i].attributes.sizes.thumbnail.url;

                }

                $('#galerij_wrap').append( '<li class="image" img_thumb="'+thumb+'" img_id="'+attachments[i].attributes.id+'" img_url="'+attachments[i].attributes.url+'"><div class="remove" onclick="galerijremoveimage(this)"></div><img src="'+ thumb +'"/></li>' );

			//	afbeeldingnopen = 0;
				//afbeeldingnadd = 1;
            }

           //  galerijsameheight();

        });

  //  });

}

//addgalerij();

function galerijremoveimage(e)
{

	$(e).parent().remove();

}

function galerijsameheight()
{

	$('.galerij_items').each(function() {

		var height = 0;

		$(this).find('.galerij-item').css('height', 'auto');

		$(this).find('.galerij-item').each(function() {

			var thisheight = $(this).outerHeight();

			if(thisheight > height)

			{

				height = thisheight;

			} 

		});

		$(this).find('.galerij-item').css('height', height);

	});

}

//galerijsameheight()

function addMultipleMedia(id)
{
	afbeeldingnopen = 1;

	// $('#upload-btn').click(function(e) {

        //this.preventDefault();

        var image = wp.media({ 

            title: 'Upload Image',

            // mutiple: true if you want to upload multiple files at once

            multiple: true

        }).open()

        .on('select', function(){

            // This will return the selected image from the Media Uploader, the result is an object

            var uploaded_image = image.state().get('selection').first();

            // We convert uploaded_image to a JSON object to make accessing it easier

            // Output to the console uploaded_image
            //console.log(uploaded_image);

            var image_url = uploaded_image.toJSON().url;

            // Let's assign the url value to the input field
            $('#image_url_'+id).val(image_url);

            //image_hold_

            $('#image_hold_'+id).addClass('show');

            $('#image_hold_'+id+ ' img').attr('src', image_url);

			afbeeldingnopen = 0;
			afbeeldingnadd = 1;
        });

 //   });

}

//addMultipleMedia(id)

function tinymce22()
{
	//console.log("start tinymce init");

	wp.editor.initialize(

  'textarea.mkeditor',

  { 

    tinymce: { 

      wpautop:true, 

      plugins : 'charmap colorpicker compat3x directionality fullscreen hr image lists media paste tabfocus textcolor wordpress wpautoresize wpdialogs wpeditimage wpemoji wpgallery wplink wptextpattern wpview', 

      toolbar1: 'formatselect bold italic | bullist numlist | blockquote | alignleft aligncenter alignright | link unlink | wp_more | spellchecker' 

    }, 

    quicktags: true 

  }

);

}


/*

// NEW MODULE

*/

function AddModule(att, countrij, kolom) {

	Append_add_new_Module(att, countrij, kolom);

	screenoverlay_open();

}

//AddModule

function mk_builder_new_module_close() 
{
	if( $('.mk_builder_new_module').length > 0 )
	{
		$('.mk_builder_new_module').addClass('close');
		setTimeout( function() { $('.mk_builder_new_module').remove(); }, 250);

		screenoverlay_close();
	}
}	

//mk_builder_new_module_close

function Append_add_new_Module(att, countrij, kolom) {

	$( "body" ).append( 

		'<div class="mk_builder_new_module">'+

			'<div class="mk_builder_new_module_titel">'+

				'<div class="mk_builder_new_module_naam">Nieuwe module toevoegen</div>'+

				'<div class="mk_builder_new_module_close" onclick="mk_builder_new_module_close()"></div>'+

			'</div>'+

			'<div class="mk_builder_new_module_container">'+

				'<div class="addmodule tekst" name="Modules" id="Modules" onclick="AddModules('+ att +', '+ countrij +', '+kolom+')">Tekst</div>'+

				'<div class="addmodule titel" name="Modules_titel" id="Modules" onclick="AddModuleTitel('+ att +', '+ countrij +', '+kolom+')">Titel</div>'+

				'<div class="addmodule afbeelding" name="Modules_afbeelding" id="Modules" onclick="AddModuleAfbeelding('+ att +', '+ countrij +', '+kolom+')">Afbeelding</div>'+

				'<div class="addmodule galerij" name="Modules_galerij" id="Modules" onclick="AddModuleGalerij('+ att +', '+ countrij +', '+kolom+')">Galerij</div>'+

				'<div class="addmodule code" name="Modules_code" id="Modules" onclick="AddModuleCode('+ att +', '+ countrij +', '+kolom+')">Code</div>'+

				'<div class="addmodule link" name="Modules_code" id="Modules" onclick="AddModuleKnop('+ att +', '+ countrij +', '+kolom+')">Knop</div>'+

				'<div class="addmodule video" name="Modules_code" id="Modules" onclick="AddModuleVideo('+ att +', '+ countrij +', '+kolom+')">Video</div>'+

			'</div>'+

		'</div>'

	);

	//set position editor

	var scrollTop = $(window).scrollTop();

	var editorHeight = $('.mk_builder_new_module').outerHeight();

	var screenHeight = window.innerHeight;

	var editorpos = 50;

	if( (screenHeight - editorHeight) > 0 )

	{

		editorpos = (screenHeight - editorHeight) / 2;

		if(editorpos < 50) { editorpos = 50; }

	}

	$('.mk_builder_new_module').css('top', scrollTop + editorpos);


	if( $('.mkbuilder_gegevens').attr('ad_module_video') != "1") { $('.mk_builder_new_module .addmodule.video').remove(); }

	if( $('.mkbuilder_gegevens').attr('module_tekst') == "1") { $('.mk_builder_new_module .addmodule.tekst').remove(); }
	if( $('.mkbuilder_gegevens').attr('module_titel') == "1") { $('.mk_builder_new_module .addmodule.titel').remove(); }
	if( $('.mkbuilder_gegevens').attr('module_afbeelding') == "1") { $('.mk_builder_new_module .addmodule.afbeelding').remove(); }
	if( $('.mkbuilder_gegevens').attr('module_galerij') == "1") { $('.mk_builder_new_module .addmodule.galerij').remove(); }
	if( $('.mkbuilder_gegevens').attr('module_code') == "1") { $('.mk_builder_new_module .addmodule.code').remove(); }
	if( $('.mkbuilder_gegevens').attr('module_knop') == "1") { $('.mk_builder_new_module .addmodule.link').remove(); }

}

//Append_add_new_Module

function module_kopieren(module_id)
{
	if( !$('ul.newrij_inner').hasClass('noclick') )
	{
		var kopieer = $('#mod_id_' + module_id).clone().addClass('module_clone');

		$('#mod_id_' + module_id).after(kopieer);

		//add a ID countmod
		$('#mod_id_' + module_id + '.module_clone').attr('id', 'mod_id_' + countmod);

		//edit
		$('#mod_id_' + countmod + ' .edit').attr('onclick','editModuleTekst('+countmod+')');
		$('#mod_id_' + countmod + ' .module_preview_edit').attr('onclick','editModuleTekst('+countmod+')');
		$('#mod_id_' + countmod + ' .module_preview').attr('onclick','editModuleTekst('+countmod+')');

		//kopieren
		$('#mod_id_' + countmod + ' .module_kopieren').attr('onclick','module_kopieren('+countmod+')');

		//delete
		$('#mod_id_' + countmod + ' .delete').attr('onclick','deleteModule('+countmod+')');

		//naam
		$('#mod_id_' + countmod + ' .mod_naam span').html(countmod);

		//removeclasss
		$('#mod_id_' + countmod).removeClass('module_clone');

		countmod++;
	}
	else
	{
		$('ul.newrij_inner').removeClass('noclick');
	}
}
//module_kopieren

/*
// END NEW MODULE
*/


/*
// New RIJ
*/
function addrij(sectie_id) {

	Append_add_new_rij(sectie_id);

	screenoverlay_open();

}


//addrij
function mk_builder_new_rij_close() 
{

	if( $('.mk_builder_new_rij').length > 0 )
	{
		$('.mk_builder_new_rij').addClass('close');
		setTimeout( function() { $('.mk_builder_new_rij').remove(); }, 250);

		screenoverlay_close(); 
	}
}


//mk_builder_new_rij_close
function Append_add_new_rij(sectie_id) 
{
	$( "body" ).append( 

		'<div class="mk_builder_new_rij">'+

			'<div class="mk_builder_new_rij_titel">'+

				'<div class="mk_builder_new_rij_naam">Nieuwe rij toevoegen</div>'+

				'<div class="mk_builder_new_rij_close" onclick="mk_builder_new_rij_close()"></div>'+

			'</div>'+

			'<div class="mk_builder_new_rij_container">'+

				'<div class="addrij" name="addrij" id="addrij" onclick="addclick('+sectie_id+')">1 kolom</div>'+

				'<div class="addrij" name="addrij" id="addrij" onclick="add2koloms('+sectie_id+')">2 koloms</div>'+

				'<div class="addrij" name="addrij" id="addrij" onclick="add3koloms('+sectie_id+')">3 koloms</div>'+

				'<div class="addrij" name="addrij" id="addrij" onclick="add4koloms('+sectie_id+')">4 koloms</div>'+

			'</div>'+

		'</div>'

	);

	//set position editor

	var scrollTop = $(window).scrollTop();

	var editorHeight = $('.mk_builder_new_rij').outerHeight();

	var screenHeight = window.innerHeight;

	var editorpos = 50;

	if( (screenHeight - editorHeight) > 0 )

	{

		editorpos = (screenHeight - editorHeight) / 2;

		if(editorpos < 50) { editorpos = 50; }

	}

	$('.mk_builder_new_rij').css('top', scrollTop + editorpos);

}

//addrij

/*

// END NEW RIJ

*/

