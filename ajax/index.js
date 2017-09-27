var ajax = {
	init: function(){
		console.log('ajax');
		ajax.bindEvent();
	},
	bindEvent: function(){
		document.getElementById('ajax').addEventListener('click',function(){
			console.log('click');
			ajax.post();
		})
	},
	post: function(){
		var get =new XMLHttpRequest();
		get.onload = function(res){
			if(get.readyState === 4 && get.status === 200){
				document.getElementById('text').innerHTML = res.currentTarget.response;
			}
		}
		get.open('GET','ajax.txt');
		get.send();

	}
}

if(document.readyState === "complete" && document.readyState !== 'loading'){
	ajax.init();
}else{
	document.addEventListener('DOMContentLoaded',ajax.init);
}