$(inicio);

function inicio()
{
	//$('#home').on('click',cargar);
	$("#menu > li > a").on('click',cargar);
}

function cargar()
{
	$('.contentsection1').html("<img id='loader_gif' alt='' src='img/loading_apple.gif' width='100px'>   ");
	//$('.contentsection1').html("inicio.html");
	var url = $(this).attr("id")+".html"
	console.log(url);
	//var id = "inicio.html";
	//setTimeout(termina,1000,id);
}

function termina(id)
{
	console.log(id);
	$.get(id,function (htmlexterno)
	{
		console.log(htmlexterno);
		$('.contentsection1').html(htmlexterno);

	});
	
}