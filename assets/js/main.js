var collapseBtn = document.getElementById('collapseBtn');
var main = document.getElementById('main');
var sidenav = document.getElementById('sidenav');
var openBtn = document.getElementById('openBtn');

collapseBtn.addEventListener('click', function changeClass(){
 	sidenav.classList.add("deactive");
 	main.classList.remove("active");
 	openBtn.style.display = "block";
 });
openBtn.addEventListener('click', function changeClass(){
 	sidenav.classList.remove("deactive");
 	main.classList.add("active");
 	openBtn.style.display = "none";
 });