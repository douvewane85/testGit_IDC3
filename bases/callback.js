//Callback:function passée en argument
//d'une autre fonction
somme=(a,b)=>{
    return a+b;
}
produit=(a,b)=>{
    return a*b;
}

//Argument action est une fonction callback
operation=(a,b,action)=>{
      return action(a,b)
}
//Appel 
var resultat=operation(2,5,somme)
var resultat=operation(2,5,produit)

//---Une seule définition 
operation1=(a,b,(a,b)=>{
    return a*b;
})



