//check off a task

$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

//delete a task
$("ul").on("click", "span",function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		var newTodo = $(this).val();
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> "+newTodo+"</li>");

	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});