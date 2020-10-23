 const form = document.querySelector("form");

    form.addEventListener("submit", function(){
        nom = form.elements.name.value;
        prenom = form.elements.pn.value;

        if (nom == ''){
            alert("Veuillez renseigner votre nom");
        }

        else{
            alert("votre nom est: " + nom)
        }

        if (prenom == ''){
            alert("Veuillez renseigner votre prenom");
        }

        else{
            alert("votre prenom est: " + prenom)
        }


    })