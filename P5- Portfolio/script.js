const tab_links = document.getElementsByClassName("tab-links");
const tab_content = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tab_links) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tab_content) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz0a-CMSd-2IrcYoZ4T6vPnJWkPYvk5oX4QFvMAZKx9dJHKonY2UtysgJOjnjBxgsFX/exec";
const form = document.forms["submit-to-google-sheet"];
const msg=document.getElementById("msg")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => 
    {
        msg.innerHTML="Form submitted successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    }
)
    .catch((error) => console.error("Error!", error.message));
});
