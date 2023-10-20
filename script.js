
console.log('helloo')

var tablinks     =document.getElementsByClassName("tab-links");
var tabcontents  =document.getElementsByClassName("tab-contents");


function opentab(tabname){

    for(tablink of tablinks){

        tablink.classList.remove("active-link");

    }
    for( tabcontent of tabcontents){

        tabcontent.classList.remove("active-tab");

    }

       event.currentTarget.classList.add("active-link");
       document.getElementById(tabname).classList.add("active-tab");

    }

     var sidemenu = document.getElementById("sidemenu");

     function openmenu(){
        sidemenu.style.right="0";
     }
        
     function closemenu(){
        sidemenu.style.right="-200px";
     }

     function sendEmail(){
       
      Email.send({
         Host : "smtp.elasticemail.com",
         Username : "mohitv178@gmail.com",
         Password : "AC872F5648F79261C7BE4D2B05A9244F296B",
         To : 'devloperscript123@gmail.com',
         From : "mohitv178@gmail.com",
         Subject : "New Contact From Enquiry ",
         Body : "And this is the body"
     }).then(
       message => alert(message)
     );

     }

