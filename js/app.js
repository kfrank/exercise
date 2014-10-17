// $(document).ready(function(){
// 	$('.c').click(function(){
// 		$(this).addClass('c--faved');
// 	});
// 	$('body').delay(500).queue(function(){
//       $('.c').removeClass('c--faved');
// 	});
// });

var id='c';
var myClassName=" c--faved"; //must keep a space before class name
var d;
d=document.getElementsByClassName(id);
d.className = d.className + myClassName; // adding new class name