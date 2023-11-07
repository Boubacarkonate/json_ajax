//METHODE AJAX


//1 créer un nouvel objet XMLHttpRequest que j'ai déclaré dans une variable
const ajaxHttp = new XMLHttpRequest();
// console.log(ajaxHttp);

//2 je peux mettre mon url qui contient mon fichier / ou mon url de l'api dans une variable
const url = "dataPlusieursPersonnes.json"

//3 je paramètre la méthode open() pour mon objet XMLHttpRequest
ajaxHttp.open("GET",url,true)
// console.log(ajaxHttp);

//4 si je souhaite récuperer ou lire que fichier avec des extension json
ajaxHttp.setRequestHeader("content-type", "application/json")

//5 afficher
ajaxHttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200 ) {
        // console.log(ajaxHttp);
        let mesDonnees = JSON.parse(ajaxHttp.responseText)  //dans ma variable je convertis en json le responseText, initialement en chaîne de caractères, de l'objet XMLHttpRequest 
    //    console.log(mesDonnees);
    let output = document.getElementById("output")
    output.innerHTML = ""
    for(let data in mesDonnees){
        console.log(data);
        output.innerHTML += mesDonnees[data].first_name
    }
    } 
}

//6 envoyer la requête au server avec la méthode send.()
ajaxHttp.send(null)