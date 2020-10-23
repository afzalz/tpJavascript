 const form = document.querySelector("form");

    form.addEventListener("submit", function(){
        nom = form.elements.name.value;
        prenom = form.elements.pn.value;

        if (nom == '' || prenom == ''){
            alert("Veuillez remplir le formulaire");
        }

        else{
            alert("votre nom est: " + nom + " votre prenom est: " + prenom)
        }


    })
