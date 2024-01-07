
     // making an event funtion for my website//

let closeMenu = true;

function mycloseopenfunction(){
     if ( closeMenu == true){
       document.getElementById("Slidebar").style.width = "200px"
        closeMenu = false
     } else if (closeMenu == false) {
        document.getElementById("Slidebar").style.width = "0px"
        closeMenu = true
     }
}
let openMenu = true;

function myopenclosefunction(){
     if ( openMenu == true){
       document.getElementById("Slidebar").style.width = "200px"
        openMenu = false
     } 
}



