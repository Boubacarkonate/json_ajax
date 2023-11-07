//METHODE AJAX


//créer un nouvel objet XMLHttpRequest que j'ai déclaré dans une variable
const ajaxHttp = new XMLHttpRequest();
//console.log(ajaxHttp);

//je peux mettre mon url qui contient mon fichier / ou mon url de l'api dans une variable
const url = "data.json"

//je paramètre la méthode open() pour mon objet XMLHttpRequest
ajaxHttp.open("GET",url,true)
console.log(ajaxHttp);