/**
 * Fonction qui compare 2 nombres
 *  - void ou vide
 *  -Fonctions nommées
 *  -Fonction Anonyme
 *  -Fonction Fléchée
 */
   //Fonctions nommées
        function compare(a,b){
            if(a>b){
                alert(a+","+b)
            }else{
                alert(b+","+a)
            }
        }
          compare(5,8);
    //Fonctions Anonyme
    comp=function (a,b){
        if(a>b){
            alert(a+","+b)
        }else{
           alert(b+","+a)
        }
    }
    //Appel
      comp(5,8)
    //Fonctions féchées
        comp=(a,b)=>{
            if(a>b){
                alert(a+","+b)
            }else{
            alert(b+","+a)
            }
        }
        //Appel
            comp(5,8)
/**
 * Fonction qui determine le signe un nombre
 * Non Vide
 *  -Fonctions nommées
 *  -Fonction Anonyme
 *  -Fonction Fléchée
 */
   //-Fonctions nommées
       function signe(nbre){
          if(nbre<0){
              return "Negatif";
          }else{
                if(nbre>0){
                    return "Positif";
                } else{
                    return "Nul";
                }
          }
       }

       //Appel 
         var s= signe(5);

    //-Fonction Anonyme
    var sig=function (nbre){
        if(nbre<0){
            return "Negatif";
        }else{
              if(nbre>0){
                  return "Positif";
              } else{
                  return "Nul";
              }
        }
     }
     var s= sig(5);


    // -Fonction Fléchée
    var sig=(nbre)=>{
        if(nbre<0){
            return "Negatif";
        }else{
              if(nbre>0){
                  return "Positif";
              } else{
                  return "Nul";
              }
        }
     }
     var s= sig(5);
/**
 * Fonction qui recherche une valeur dans un tableau
 *  -Fonctions nommées
 *  -Fonction Anonyme
 *  -Fonction Fléchée
 */
//-Fonctions nommées
  /** for of  */
 function recherche(tableau,val){
     for (let elt of tableau) {
         if(elt==val) return true; 
     }
     return false;
 }
 /**Fonction Foreach */
 function recherche1(tableau,val){
       tableau.forEach((elt)=>{
        if(elt==val) return true; 
       })
       return false;
 }

//Appel 
var tab=[5,8,9,9]
var resultat=recherche(tab,9);


//-Fonction Anonyme
 recherche=function(tableau,val){
    for (let elt of tableau) {
        if(elt==val) return true; 
    }
    return false;
}
//-Fonction Féchée
    recherche=(tableau,val)=>{
        for (let elt of tableau) {
            if(elt==val) return true; 
        }
        return false;
    }
/**
 * Fonction qui verifie si un email est valide ou pas
 *     *contenir un @ 
 *     *contenir un point 
 *     *server (gmail,yahoo,hotmail,being)
 *     *extension (com,fr,sn)
 *  -Fonctions nommées
 *  -Fonction Anonyme
 *  -Fonction Fléchée
 */

function isEmail(email){
    const server=["gmail","yahoo","hotmail"]
    const extension=["fr","com","sn"]
    email=email.toLowerCase()
    if(email.indexOf("@")==-1 || email.indexOf(".")==-1){
        return false;
    }
    //Server
    let ok=false;
    for (let elt of server) {
        if(email.indexOf(elt)!=-1) {
           ok=true;
           break;
        }
    }
     if(ok==false){
         return false;
     }
//Extension
     let ok=false;
    for (let elt of extension) {
        if(email.indexOf(elt)!=-1) {
           ok=true;
           break;
        }
    }
     if(ok==false){
         return false;
     }
    
        return true;
}
