/*Abre o menu lateral*/
function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("active");
}

/*Fecha menu lateral*/
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("active");
}
