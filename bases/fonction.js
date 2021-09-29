//Definition
//Fonction nommée
    //vide:consomme son resultat
            function somme(a,b){//Debut
                let som=a+b;
                alert(som)
            }//Fin
        //Appel  ou Execution
       // somme(2,5)
       // somme(4,67)
    //non vide :retourne son résultat 
            function produit(a,b){
                return a*b;
            }
        //appel
           var resultat=produit(5,4);
         //  alert(resultat);
   //Fonction avec arguments optionnels ou par défaut
           function somme1(a,b,c=0){//Debut
                let som=a+b+c;
                alert(som)
           }
       // somme1(3,6);
       // somme1(3,6,8);
//Fonctions Anonymes => 
//Fonctions qui n'ont pas de nom,utilisable une seule fois
  //Vide
    //Definition
        var fonc= function (a,b){//Debut
            let som=a+b;
            alert(som)
        } 
    //Appel 
          fonc(5,8)
  //Non Vide 
    var fonc1= function (a,b){
        return a*b;
    }
    var resultat=fonc1(5,8);
    alert(resultat);

    //Fonctions fléchées => fonctions anonymes dont on enlevé le 
    //mot clé fonction
     //Vide
       //Definition
            var fonc=  (a,b)=>{//Debut
                let som=a+b;
                alert(som)
            } 
            //Appel 
                fonc(5,8)
            //Non Vide 
            var fonc1=  (a,b)=>{
                return a*b;
            }
        var resultat=fonc1(5,8);
       alert(resultat);


