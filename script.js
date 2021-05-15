var number = 0;
window.addEventListener('scroll', function () {

  const parallax = document.getElementById("home");
  if (parallax != null && window.scrollY < document.documentElement.scrollHeight * 0.20) {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = `${offset * -0.3}px`;
  }

  let header = document.getElementsByClassName("header")[0];
  if (window.scrollY <= 0) {
    header.classList.remove("scroling-active");
  }
  else {
    header.classList.add("scroling-active");
  }



  let content = document.querySelector('.maindivAnimation');
  let contentPosition = content.getBoundingClientRect().top * 1.7;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add('h1HobiesNewAnimation');
  }
  else {
    content.classList.remove('h1HobiesNewAnimation');
  }

  let content1 = document.querySelector('.maindivAnimation1');
  let contentPosition1 = content1.getBoundingClientRect().top * 1.7;
  let screenPosition1 = window.innerHeight;
  if (contentPosition1 < screenPosition1) {
    content1.classList.add('h1HobiesNewAnimation');
  }
  else {
    content1.classList.remove('h1HobiesNewAnimation');
  }

  let aboutSection = document.querySelector('#about');
  let contentPosition2 = aboutSection.getBoundingClientRect().bottom * 0.75;
  let screenPosition2 = window.innerHeight;
  let myPicture = document.querySelector('.myPic');
  let myText = document.querySelector('.aboutMeheader');


  if (contentPosition2 < screenPosition2) {
    myPicture.classList.add('myPicAnimation');
    myText.classList.add('myTextAnimation');
    myText.style.display = "block";
    myPicture.style.display = "block";
  }

  if (window.scrollY <= 0) {
    myPicture.style.display = "none";
    myText.style.display = "none";
  }


})

document.addEventListener("DOMContentLoaded", function (event) {

  document.getElementById("sendBtn").addEventListener("click", function (event) {

    let message = document.getElementById("messageInput").value;
    let email = document.getElementById("emailInput").value;
    let name = document.getElementById("nameInput").value;
    if (email && name && message) {
      message = "Máš email od " + name + "\n" + message;
      Email.send({
          SecureToken: "d45bd1a1-14c5-4737-a2b8-6bf520bb3e2c",
          To : 'jakub.josefus@seznam.cz',
          From : 'myhomepageemailjosefus@seznam.cz',
          Subject : email,
          Body : message
      }); 
      alert("Email sent");
      location.reload();
      /*var modal = document.getElementById("myModal");
      modal.style.display = "block";
      document.getElementById("negative").hidden = true;
      document.getElementById("positive").hidden = false;*/
    } else {
      alert("Oops, something went wrong. Try fill all boxes.");
      /*var modal = document.getElementById("myModal");
      modal.style.display = "block";
      document.getElementById("negative").hidden = false;
      document.getElementById("positive").hidden = true;*/
    }
  });




  document.getElementsByClassName("menuIcon")[0].addEventListener("click", function (event) {
    let hideMenu = document.getElementById("hiddenHeader");

    if (hideMenu.style.display !== "block") {
      hideMenu.style.animation = "slide 0.5s";


      hideMenu.style.display = "block";
    }
    else {
      hideMenu.style.animation = "Backslide 0.5s forwards";
      setTimeout(function () { hideMenu.style.display = "none"; }, 500);
    } 

  });

    document.getElementsByClassName("hiddenHeaderAlign")[0].addEventListener("click", function (event) {
      let hideMenu = document.getElementById("hiddenHeader");
      hideMenu.style.display = "none";  
      });


      document.getElementById("X").addEventListener("click", function (event) {
        var modal = document.getElementById("modalGallery"); 
        console.log("funguje"); 
        console.log(modal);        
        modal.style.display = "none";    
      
      
      });
      document.getElementById("close").addEventListener("click", function (event) {
        var modal = document.getElementById("modalGallery"); 
        console.log("funguje"); 
        console.log(modal);        
        modal.style.display = "none";    
      
      
      });

});
/*window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  var ok = document.getElementsByClassName("pOk")[0];
  if (event.target == modal || event.target == span || event.target == ok) {
    modal.style.display = "none";
    location.reload();
  }
}*/

function newwin() {    
  var modal = document.getElementById("modalGallery"); 
  console.log("funguje"); 
  console.log(modal);        
  modal.style.display = "block";

 }