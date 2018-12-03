var stunduSaraksts = {
	pirmdiena:  {
		pirma_stunda: { laiks: '8:30-9:10', nosaukums: 'EIKT noz.tehn. Darbu pamatiemaņas', kabinets: '309'},
		otra_stunda: { laiks: '9:15-9:55', nosaukums: 'EIKT noz.tehn. Darbu pamatiemaņas', kabinets: '309'},
		tresa_stunda: { laiks: '10:05-10:45', nosaukums: 'Sistēmu Programmēšana', kabinets: '309'},
		ceturta_stunda: { laiks: '10:50-11:30', nosaukums: 'Sistēmu Programmēšana', kabinets: '309'},
		piekta_stunda: { laiks: '12:10-12:50', nosaukums: 'Sistēmu Programmēšana', kabinets: '309'},
		sesta_stunda: { laiks: '12:55-13:35', nosaukums: 'Sistēmu Programmēšana', kabinets: '309'},
		septita_stunda: { laiks: '13:45-14:25', nosaukums: 'Angļu valoda', kabinets: '305'},
		astota_stunda: { laiks: '14:30-15:10', nosaukums: 'Angļu valoda', kabinets: '305'}
	},
	otrdiena: {
		pirma_stunda: { laiks: '8:30-9:10', nosaukums: 'Matemātika', kabinets: '304'},
		otra_stunda: { laiks: '9:15-9:55', nosaukums: 'Matemātika', kabinets: '304'},
		tresa_stunda: { laiks: '10:05-10:45', nosaukums: 'Informātika', kabinets: '410'},
		ceturta_stunda: { laiks: '10:50-11:30', nosaukums: 'Informātika', kabinets: '410'},
		piekta_stunda: { laiks: '12:10-12:50', nosaukums: 'Ķīmija', kabinets: '401'},
		sesta_stunda: { laiks: '12:55-13:35', nosaukums: 'Ķīmija', kabinets: '401'},
		septita_stunda: { laiks: '13:45-14:25', nosaukums: 'Krievu valoda', kabinets: '206'},
		astota_stunda: { laiks: '14:30-15:10', nosaukums: 'Krievu valoda', kabinets: '206'},
	},
	tresdiena: {
		pirma_stunda: { laiks: '8:30-9:10', nosaukums: 'Vienk.algoritmu izstrāde', kabinets: '309'},
		otra_stunda: { laiks: '9:15-9:55', nosaukums: 'Vienk.algoritmu izstrāde', kabinets: '309'},
		tresa_stunda: { laiks: '10:05-10:45', nosaukums: 'Sabiedr.un cilv.droš.', kabinets: '203'},
		ceturta_stunda: { laiks: '10:50-11:30', nosaukums: 'Sabiedr.un cilv.droš.', kabinets: '203'},
		piekta_stunda: { laiks: '12:10-12:50', nosaukums: 'Preču un pakalp.izv. EIKT infrastr.izveidei', kabinets: '309'},
		sesta_stunda: { laiks: '12:55-13:35', nosaukums: 'Preču un pakalp.izv. EIKT infrastr.izveidei', kabinets: '309'},
		septita_stunda: { laiks: '13:45-14:25', nosaukums: 'Preču un pakalp.izv. EIKT infrastr.izveidei', kabinets: '309'},
		astota_stunda: { laiks: '14:30-15:10', nosaukums: 'Preču un pakalp.izv. EIKT infrastr.izveidei', kabinets: '309'},
	},
	ceturtdiena: {
		pirma_stunda: { laiks: '8:30-9:10', nosaukums: 'Latv.un pas vēsture', kabinets: '206'},
		otra_stunda: { laiks: '9:15-9:55', nosaukums: 'Latv.un pas vēsture', kabinets: '206'},
		tresa_stunda: { laiks: '10:05-10:45', nosaukums: 'Latviešu valoda', kabinets: '305'},
		ceturta_stunda: { laiks: '10:50-11:30', nosaukums: 'Latviešu valoda', kabinets: '305'},
		piekta_stunda: { laiks: '12:10-12:50', nosaukums: 'Krievu valoda', kabinets: '305'},
		sesta_stunda: { laiks: '12:55-13:35', nosaukums: 'Krievu valoda', kabinets: '305'},
		septita_stunda: { laiks: '13:45-14:25', nosaukums: 'Matemātika', kabinets: '304'},
		astota_stunda: { laiks: '14:30-15:10', nosaukums: 'Matemātika', kabinets: '304'},
	},
	piektdiena: {
		pirma_stunda: { laiks: '8:30-9:10', nosaukums: 'Fizika', kabinets: '401'},
		otra_stunda: { laiks: '9:15-9:55', nosaukums: 'Fizika', kabinets: '401'},
		tresa_stunda: { laiks: '10:05-10:45', nosaukums: 'Fizika', kabinets: '401'},
		ceturta_stunda: { laiks: '10:50-11:30', nosaukums: 'Audzināšana', kabinets: '309'},

	}
}
$(document).ready(function() {
	//console.log( "ready" );
	//console.log(stunduSaraksts);
	

	$.each(stunduSaraksts, function(key, value){
		console.log(key+ ": " + value);
		$('#saraksts').append('<div class="dienas" id="diena_' +key+ '"><h3></div>');

		var stundas = value;
		
		$('#diena_'+key+'').append('<table></table>');
		$('#diena_' +key+' table').append('<tr class="day-header"><th class="laiks-th">Laiks</th><th class="prieksmets-th">Priekšmets</th><th class="kabinets-th">Kab.</th></tr>');

		$.each(stundas, function(key2, value2){
			console.log(value2);
			$('#diena_'+key+' table').append('<tr><td class="laiks-th">' +value2.laiks+'</p></td><td><p>' +value2.nosaukums+ '</p></td><td><p>'+value2.kabinets+'</p></td></tr>');
			$('.dienas').hide();
		});
	});
	
	$(".sort-p").on("click",function() {
		console.log($(this).attr('data-id'));
		$('.dienas').hide();
		$('#diena_' +$(this).attr('data-id')+ '').show();
		
	});
	$(".class-select").on("click",function() {
		console.log($(this).attr('data-id'));
		$('.dienas').hide();
		$('#diena_' +$(this).attr('data-id')+ '').show();	
		$('button').removeClass('activeday');
	});
	$('button').on('click', function(){
		$('button').removeClass('activeday');
		$(this).addClass('activeday');

	});

	$('.mobile-menu-btn').on('click', function() {
		if($(this).hasClass('active')) {
			$('.mobile-menu-btn').removeClass('active');
		} else {
			$('.mobile-menu-btn').addClass('active');
		}
	});
	

});
var listHTML = $(".Title").html();
var listItems = listHTML.split("<br>");
$(".Title").html("");
$.each(listItems, function(i, v) {
  var item =
    '<div class="Title-mask"><span class="Title-line">' + v + "</span></div>";
  $(".Title").append(item);
});
