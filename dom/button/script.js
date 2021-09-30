const button =document.querySelector("#btn")

button.addEventListener("click",()=>{
  
    if(button.classList.contains("cliquemoi")){
            button.textContent="Tu m as cliqué"
            button.classList.replace("cliquemoi","tumasclique") 
    }else{
        if(button.classList.contains("tumasclique")){
            button.textContent="Clique moi"
            button.classList.replace("tumasclique","cliquemoi") 
        }
    }
   
})