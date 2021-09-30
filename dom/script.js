//const button=document.getElementById("btn");
const button=document.querySelector("#btn");

//Activation d'un evenement sur un Element
button.addEventListener("click",()=>{
   alert("Clique")
})

const listes=document.querySelectorAll("ul li");

//Activation d'un evenement sur une Collectction element
// Pas Bon listes.addEventListener()
for (const li of listes) {
    li.addEventListener("click",(event)=>{
         alert("Clique d'un li "+event.target.textContent)
    }) 
}

const link=document.querySelector("li a");
alert(link.getAttribute("href"))
link.setAttribute("href","twiter.com")
alert(link.getAttribute("href"))
//Attribut Class
alert(link.classList)
link.classList.add("Bonjour","Aurevoir")
alert(link.classList)
link.classList.remove("Bonjour","Aurevoir")
alert(link.classList)
//Remplacement de la classe border par bordered
link.classList.replace("border","bordered")
//Verifier l'existence de la classe bordered dans le lien
link.classList.contains("bordered")//true or false

//Creer vos propre attribut
alert(link.getAttribute("data-nom"))




