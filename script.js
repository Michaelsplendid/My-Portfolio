var btn = document.querySelector('.btn');
var menu = document.querySelector('.menu');
btn.addEventListener('click', function() {
	menu.classList.toggle('active');
});
var navlink = document.querySelectorAll('ul li a');
for (var i = 0; i < navlink.length; i++) {
	navlink[i].addEventListener('click', function(){
		menu.classList.remove('active');

	})
}