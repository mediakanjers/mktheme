function changekoloms(value)
{
	//reset
	//$('.mk_editor_rij .mk_editor_rij_settings').removeClass( 'koloms_1' );
	//$('.mk_editor_rij .mk_editor_rij_settings').removeClass( 'koloms_2' );
	//$('.mk_editor_rij .mk_editor_rij_settings').removeClass( 'koloms_3' );
	//$('.mk_editor_rij .mk_editor_rij_settings').removeClass( 'koloms_4' );

	$('.mk_editor_rij .mk_editor_rij_settings').addClass( 'koloms_' + value );
}


function  mk_editor_rij()
{
	mk_editor_rij_append();
}


function mk_editor_rij_append() {

	$( "body" ).append( 

		'<div class="mk_editor_rij">'+

			'<div class="mk_editor_rij_titel" sectie_id="">'+

				'<div class="mk_editor_rij_naam">Rij aanpassen</div>'+

				'<div class="mk_editor_rij_close" onclick="mk_editor_rij_close()"></div>'+

			'</div>'+

			'<div class="mk_editor_rij_container">'+


				'<div class="mk_editor_rij_settings">'+



					'<div class="mk_editor_settings">'+

						'<div class="mk_editor_section_titel">Class</div>'+

						'<input type="text" name="class" class="class" placeholder="Class">' +

					'</div>'+


					'<div class="mk_editor_settings">'+

						'<div class="mk_editor_section_titel">Koloms</div>'+


						'<div class="opties mk_rij_kolom_opties">'+

							'<input id="kolom_1" type="radio" name="mk_editor_koloms" onchange="changekoloms(1)" value="1"><label for="kolom_1">1 Kolom</label>' +
			 				'<input id="kolom_2" type="radio" name="mk_editor_koloms" onchange="changekoloms(2)" value="2"><label for="kolom_2">2 Koloms</label>' + 
			 				'<input id="kolom_3" type="radio" name="mk_editor_koloms" onchange="changekoloms(3)" value="3"><label for="kolom_3">3 Koloms</label>' +
			 				'<input id="kolom_4" type="radio" name="mk_editor_koloms" onchange="changekoloms(4)" value="4"><label for="kolom_4">4 Koloms</label>' +

		 				'</div>'+

					'</div>'+


				'</div>'+


				'<div class="mk_editor_rij_footer">'+

				'<input class="button-primary" style=" padding: 15px; line-height: 0;" id="mk_editor_rij_save" type="button" onclick="mk_editor_rij_save()" value="Bijwerken!">'+


				'</div>'+


			'</div>'+

		'</div>'

	);


	$(function() { $('.colorfield').wpColorPicker();  });
}
//mk_editor_rij_append








function mk_editor_rij_open(rij_id) 
{
	if( !$('ul.newsectie_inner').hasClass('noclick') )
	{
		screenoverlay_open();

		//set position editor
		var scrollTop = $(window).scrollTop();
		var editorHeight = $('.mk_editor_rij').outerHeight();
		var screenHeight = window.innerHeight;

		var editorpos = 50;
		if( (screenHeight - editorHeight) > 0 )
		{
			editorpos = (screenHeight - editorHeight) / 2;
			if(editorpos < 50) { editorpos = 50; }
		}
		$('.mk_editor_rij').css('top', scrollTop + editorpos);


		//setup
		$('.mk_editor_rij .mk_editor_rij_titel').attr('sectie_id', rij_id);

		var koloms = $('#rij_' + rij_id).attr('koloms');

		$('.mk_editor_rij .mk_editor_rij_settings').addClass( 'koloms_' + koloms );


		$('.mk_editor_rij .mk_rij_kolom_opties input*[value='+koloms+']').prop('checked', true);


		//Inputs
		$('.mk_editor_rij .mk_editor_settings input.class').val( $('#rij_' + rij_id + ' .rij_gegevens').attr('rij_class') );


		//Open up!
		$('.mk_editor_rij').addClass('open');
	}
	else
	{
		$('ul.newsectie_inner').removeClass('noclick');
	}
}
//mk_editor_rij_open






function mk_editor_rij_close() 
{
	if( $('.mk_editor_rij').length > 0 )
	{
		$('.mk_editor_rij').addClass('close');
		setTimeout( function() { $('.mk_editor_rij').removeClass('open'); $('.mk_editor_rij').removeClass('close'); }, 250);

		screenoverlay_close();

		mk_editor_rij_is_open = 0;
	}
}
//mk_editor_rij_close



function mk_editor_rij_save()
{	
	var id = $('.mk_editor_rij_titel').attr('sectie_id');

	console.log(id);

	//rij
	$('#rij_' + id + ' .rij_gegevens').attr('rij_class', $('.mk_editor_rij .mk_editor_settings input.class').val() );


	console.log( "Komosmd : " );


	var newkoloms =  $('.mk_editor_rij .mk_rij_kolom_opties input:checked').val();
	var koloms = $('#rij_' + id).attr('koloms');
	var sectie = $('#rij_' + id).attr('sectie');

	if(newkoloms > koloms)
	{
		//new koloms er bij makne!

		mk_rij_add_koloms(sectie, id, newkoloms, koloms);
	}
	else if(newkoloms < koloms)
	{
		//koloms moeten weg!! 
		mk_rij_remove_koloms(sectie, id, newkoloms, koloms);
	}



	mk_editor_rij_close();
}
//mk_editor_rij_save



function mk_rij_add_koloms(sectie, id, newkoloms, koloms)
{
	var difkoloms = newkoloms - koloms;

	$('#rij_' + id ).removeClass('koloms_'+koloms+'_rij');
	$('#rij_' + id ).addClass('koloms_'+newkoloms+'_rij');
	$('#rij_' + id).attr('koloms', newkoloms);

	for(i = 0; i < difkoloms; i++)
	{



		var newid = 0;
		newid = parseInt(koloms, 10) + i + 1;

		console.log(newid);

		$('#rij_' + id + ' .rij_container').append(

			'<div class="kolom kolom_'+newid+'">'+

				'<ul class="newrij_inner"></ul>'+

				'<div class="mod_button">'+

					'<div class="addnieuwtitel" onclick="AddModule('+ sectie +', '+ id +', '+newid+')">Nieuwe Module</div>'+

				'</div>'+

			'</div>'

		);

	}

	init_move();
}


function mk_rij_remove_koloms(sectie, id, newkoloms, koloms)
{
	//4 - 3 = 1 er af
	var difkoloms = koloms - newkoloms;

	$('#rij_' + id ).removeClass('koloms_'+koloms+'_rij');
	$('#rij_' + id ).addClass('koloms_'+newkoloms+'_rij');
	$('#rij_' + id).attr('koloms', newkoloms);


	//remove
	for(i = 0; i < difkoloms; i++)
	{
		var removeid = koloms - i;


		//kopie
		var kopieer = $('#rij_' + id + ' .rij_container .kolom_'+removeid + ' .newrij_inner' ).html(); //.addClass('module_clone');



		//Last kolom
		$('#rij_' + id + ' .rij_container .kolom_'+newkoloms + ' .newrij_inner' ).append(kopieer);



		//remove
		$('#rij_' + id + ' .rij_container .kolom_'+removeid).remove();
	}

	init_move();
}