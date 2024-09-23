window.onscroll = function () {
  const scrollY = window.scrollY;
  document.getElementById("nav-container").style.display =
    scrollY >= 280 ? "none" : "block";
  // console.log(scrollY);
};


function sidebarToggle(){

    let sidebar = document.getElementById("sidebar")
    
    sidebar.classList.toggle("d-none")
    
}



function videoToggle(){
    let titleVideo = document.getElementById("title-video")
    console.log()

}