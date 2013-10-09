var customTimeout = 650;
$(document).ready(function() {

$('#mover').cycle({
   fx:'fade',
   speed:10,
   timeout:customTimeout,
   timeoutFn:fxtimeout
});


$("#startstop").toggle(
	function(){
		$('#mover').cycle('pause');
		$(this).attr("src","images/start.jpg");
	},
	function(){
		$('#mover').cycle('resume');
		$(this).attr("src","images/stop.jpg");
	}	
); 

$('#speedslider').slider({
			range: "min",
			value:3,
			min:1,
			max: 20,
			slide: function( event, ui ) {
			
				customTimeout = parseInt(2000/ui.value);
			}
		});	

$.fn.extend({
		speedsliderLabels:function()
		{
		$('#speedslider').prepend('<span class="spdLabel" style="left:-7px;">Lowest</span>')   //Append labels to map slider bar
	    .append('<span class="spdLabel" style="left:190px;">Highest</span>')
		.append('<p class=spdLabel>Animation Speed</p>');;
		}
	});
	
$('#speedslider').speedsliderLabels();	
	
 
});
function fxtimeout(){
	return customTimeout;	
}
function ShowFeedback(id)
{
	var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
		  

}

//Show Visibility of HTML Elements
function show_visibility(){
for(var i = 0,e = arguments.length;i < e;i++){
var myDiv = document.getElementById(arguments[i]).style;
myDiv.display = "block";
}
}
//Hide Visibility HTML Elements
function hide_visibility(){
for(var i = 0,e = arguments.length;i < e;i++){
var myDiv = document.getElementById(arguments[i]).style;
myDiv.display = "none";
}
}

//Validate radios
function validateRadio(rname,qno){
	var	radioName=rname;
	var rbChecked;
	var questionNo=qno;
	var counter=0;
	for (var i=1; i<=questionNo; i++)	{	
		rbChecked=false;
		var radios=document.getElementsByName(radioName+i);
		for(var j=0;j<radios.length;j++)
		{
			if(radios[j].checked)
			{
				rbChecked=true;
				counter++;
			}

		}

	}
	if(counter!=questionNo)
		{
		rbChecked=false;
		counter=0;
		alert("Please answer all the questions !!!");
		}
	return rbChecked;
}




