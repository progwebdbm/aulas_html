$(document).ready(function(){
	let fonte = 16
	$('#aumenta').click(function(){
		if(fonte<26){
			fonte++
			$('body').css({'font-size': fonte+'px'})
		}
	})
	$('#diminui').click(function(){
		if(fonte>16){
			fonte--
			$('body').css({'font-size': fonte+'px'})
		}
	})

})