$(document).ready(function() {

	$('.leftContainerSection nav dl dt').on('click', function() {
		$(this).next().toggle('fast');
	});

	$('.leftContainerSection nav dl dt').next().hide();
	$('.leftContainerSection nav dl dt.active').next().show();
	
	
	
	
	(function() {
	var pre = document.getElementsByTagName('pre'),
		pl = pre.length;
	for (var i = 0; i < pl; i++) {
		pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
		var num = pre[i].innerHTML.split(/\n/).length;
		for (var j = 0; j < num; j++) {
			var line_num = pre[i].getElementsByTagName('span')[0];
			line_num.innerHTML += '<span>' + (j + 1) + '</span>';
		}
	}
	})();
	
	
	
	
	$("#changeTheme_result").on( "click", function(){
		if ( $(this).is(':checked') ){
			$(".elementSnippetContainer .resultItemPreview").css("background", "#6e6e6e");
		}else{
			$(".elementSnippetContainer .resultItemPreview").css("background", "initial");
		}
	});

});