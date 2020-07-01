$(function(){
	$('#slideShow li:gt(0)').hide();
	setInterval(function(){
	$('#slideShow li:first').fadeOut(4000).next('li').fadeIn(4000).end().appendTo('#slideShow');
	},4000);
})

$(function() {
	$(document).ready( function(){
		setInterval(function(){
			wH = $("#slideShow img").height();
			$("#main").css("padding-top",wH+ 10);
		},0);
		});
	$(window).resize(function() {
		setInterval(function(){
			wH = $("#slideShow img").height();
			$("#main").css("padding-top",wH+ 10);
		},0);
		});
});

