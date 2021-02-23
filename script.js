 const parallax = document.getElementById("a");
 window.addEventListener("scroll", function()
 {
if (parallax != null) {
 let offset = window.pageYOffset;
     parallax.style.backgroundPositionY = offset *0.7 + "px";   
}     
 })

window.addEventListener('scroll',function (){
    let header=document.getElementsByClassName("header")[0];
    if(window.scrollY+header.clientHeight+window.innerWidth/2.5<window.innerHeight){
        header.classList.remove("transparent");
        header.classList.remove("scroling-active");
        
    }
    else{
        header.classList.add("transparent");
    header.classList.add("scroling-active");
    }
})




document.addEventListener("DOMContentLoaded", function(event) { 

    document.getElementById("sendBtn").addEventListener("click", function(event) {

        let message = document.getElementById("messageInput").value;
        let email = document.getElementById("emailInput").value;
        let name = document.getElementById("nameInput").value;
        
        message = "Máš email od " + name + "\n" + message;
//d45bd1a1-14c5-4737-a2b8-6bf520bb3e2c
        Email.send({
            SecureToken: "d45bd1a1-14c5-4737-a2b8-6bf520bb3e2c",
            To : 'jakub.josefus@seznam.cz',
            From : 'myhomepageemailjosefus@seznam.cz',
            Subject : email,
            Body : message
        });
    });
  });