
console.log('Loaded!..');


var element = document.getElementById('main-text');
console.log(element);

var bulletImage = document.getElementById('bullet-img');

var marginleft = 0;
function moveRight(){
	marginleft = marginleft + 1;
	bulletImage.style.marginLeft = marginleft + 'px';
}


console.log(bulletImage);
bulletImage.onclick = function(){
	console.log('clicked...');
	element.innerHTML = "Bullet Classic 350cc";

	setInterval(moveRight, 10);
};
console.log(bulletImage.onClick);

//counter
var button = document.getElementById('counter');
var span = document.getElementById('count');
button.onclick = function(){

	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if (request.readyState === XMLHttpRequest.DONE) {
			if(request.status === 200){
				var counter = request.responseText;
				span.innerHTML = counter.toString();
			}
		}
	}

	request.open('GET', "http://localhost:8083/counter", true);
	request.send(null);
};


//submit
var nameInput = document.getElementById('name');
var submitButton = document.getElementById('submit-button');
submitButton.onclick = function(){

	if(!nameInput.value.length){
		alert('Please Enter Name....');
		return;
	}

	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if (request.readyState === XMLHttpRequest.DONE) {
			if(request.status === 200){
				console.log(request.responseText);	
				var names = request.responseText;
				names = JSON.parse(names);

				var list = '';
				for (var i = 0; i < names.length; i++) {
					list += '<li>'+names[i]+'</li>';
				}

				var orderedList = document.getElementById('nameList');
				orderedList.innerHTML = list;

				nameInput.value = '';
			}	
		}
	}
	request.open('GET', "http://localhost:8083/submit-name?name="+nameInput.value, true);
	request.send(null);	
};


