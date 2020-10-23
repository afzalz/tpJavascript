 const form = document.querySelector("form");

function addElement (contenuForm) {
    // crée un nouvel élément div
    newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    newContent = document.createTextNode(contenuForm);
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);
    
    // ajoute le nouvel élément créé et son contenu dans le DOM
    currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
}

form.addEventListener("submit", function(e){
    nom = form.elements.name.value;
    prenom = form.elements.pn.value;

    if (nom == '' || prenom == ''){
        contenuForm = "Veuillez remplir le formulaire"
        addElement(contenuForm);
    }

    else{
        
        contenuForm = "votre nom est: " + nom + " votre prenom est: " + prenom
        addElement(contenuForm);
        
    }
    e.preventDefault();

})
