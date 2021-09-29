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

/**
 * Fonction qui verifie si un email est valide ou pas
 *  -Fonctions nommées
 *  -Fonction Anonyme
 *  -Fonction Fléchée
 */