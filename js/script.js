/* script.js 
   Author:
   Date:
*/


$(document).ready(function(){ // begin document.ready block

cometo();

var pchoice = '';
var cchoice ='';
var remaining = 16;
var toteswrong = 0;
$(".pic img").click(function(){
	console.log("click");
	pchoice = $(this).attr("code");
	matching();
});
$(".cele").click(function(){
	console.log("click");
 cchoice =$(this).attr("code")
 matching();
});
//This matching function is for choosing action
function matching(){
	if ((pchoice!='')&(cchoice!='')){
		if(pchoice==cchoice){
			alert("You win!");
			$('.pic.'+ pchoice).hide();
			pchoice='';
			remaining--;
			cchoice='';
			$("#correct").html("You have"+remaining+"chances to go");
		}else{
			alert("You are a loser!");
			pchoice='';
			cchoice='';
			toteswrong++;
			$("#incorrect").html("What a loser! You got"+toteswrong+"wrong");
		}
	}
}

}); //end document.ready block

//This function made for data importing with for loop
function cometo (){
	var photos=[];
	var len2 = cele.length;
	for (var i=0;i<len2;i++){
		photos.push(cele[i].code2);
	}
//shuffle photos array
var newphotos = _.shuffle(photos);
//create newphotos column
var len3 = newphotos.length;
for (var i=0;i<len3;i++){
	$("#pics").append('<div class="pic '+newphotos[i]+'"><img src="img/'+newphotos[i].toLowerCase()+'.jpg" code = "'+newphotos[i]+'"/></div>');
}
//build the celebrities introduction list with JSON
var len = cele.length;
for(var i=0;i<len;i++){
	$("#celes").append('<div class="cele '+cele[i].code2+'" code="'+cele[i].code2+'"><h3>'+cele[i].name+'</h3><p>Profession:'+cele[i].profession+'</p ><p>Master works:'+cele[i].master_work+'</p ></div>');
}
}