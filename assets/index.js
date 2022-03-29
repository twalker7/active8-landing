let containerEl = document.querySelector("#container");
let title = document.querySelector("#container-title");
let content = document.createElement("h1")
function showAbout(){
    title.innerHTML = "About";
  //clear other content before append 
   content.innerHTML = "";


 
   // p.style.color = "rgba(255, 255, 255, .8)";
    content.append("Our mission is to cultivate a healthier community by providing information and services that increase health awareness and functionality within households")
    content.className = "about";
    containerEl.append(content);
}

//membership and contact share a common class: contact-and-membership


function showMembership(){
    title.innerHTML = "Membership";
    //clear content first 
    content.innerHTML = "";

 
    content.append("Membership options Coming soon!")
    content.className = "contact-and-membership";
    containerEl.append(content);
}

function showContactUs(){
    title.innerHTML = "Contact Us";
    //clear content first
    content.innerHTML = "";
  

    content.append("Reach us on instragram!")
    content.className = "contact-and-membership";
    containerEl.append(content);
}
