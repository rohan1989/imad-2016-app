
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