var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");

menuIcon.onClick = function(){
    sidebar.classList.toggle("small-sidebar");
}
