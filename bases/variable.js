//Commentaire sur une ligne
/*
   Commentaire sur +sieurs
 */
//Declaration de Variable
//Types primitifs ou de base ou elementaire
        var x=1; //number
        var y=2.5;//number
        var result=true;//boolean
        var no=undefined;//
//Type Composés
   //Objets=Données +methode
     var nom="Douvewane@gmail.com";//string
     var taille=nom.length;//Nbre de Caractere
     //Boite Affichage
     alert(taille);
      nom= nom.toUpperCase();//Transforme la chaine en Majuscule
     alert(nom)
     nom= nom.toLowerCase();//Transforme la chaine en Minuscule
     alert(nom)
     var pos=nom.indexOf("@")//Verifier l'existence d'une sous chaine 
     alert(pos);
     var chaine=nom.substr(pos+1)//Extraction d'une sous chaine
     alert(chaine);
     //for in

  //Tableau
  tab=[2,"Bonjour","Au revoir"];
  alert(tab[0]);
  for(elt of tab){
      alert(elt)
  }

  //Constantes 
  const PI=3.14

