

$('button').on('click',function(){
	var rollno=$("#rollno").val();
	var name=$("#name").val();
	var marks=$("#marks").val();
	console.log(rollno,name,marks);
	if(rollno.length==0 || name.length==0 || marks.length==0){
		alert("All fields are not filled");
		return;
	}
	$("#right").append('<div><h3>Roll no is<span class="green"> '+ rollno +' </span>,<span class="green"> '+ name +' </span> has scored<span class="green"> '+ marks +' </span> marks</h3></div>');
	$("#rollno").val("");
	$("#name").val("");
	$("#marks").val("");
});
