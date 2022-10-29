// html엘리먼트 ie7,8인식;
 document.createElement('header');
 document.createElement('nav');
 document.createElement('article');
 document.createElement('section');
 document.createElement('aside');
 document.createElement('footer');

 $(document).ready(function(){
	 // toggle_content
	 $(".btn_open a").click(function(){
		$(".btn_open").css('display', 'none');
		$(".tg_box").slideDown();
	});
	$(".btn_close a").click(function(){
		$(".btn_open").css('display', 'block');
		$(".tg_box").slideUp();
	});
	// layer
	$('.course_list li.on a').click(function () {
		$('.layer_box').hide()
		var contentid = $(this).attr('title')
		$('#' + contentid).slideDown();
	});
	$(".btn_close2").click(function(){
		$(".layer_box").slideUp();
	});
 });
