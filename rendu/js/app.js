let form = document.querySelector("#my-form");
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm");
let postalCode = document.querySelector("#postalCode");
let address = document.querySelector("#address");
let Email = document.querySelector("#Email");
let firstName = document.querySelector("#firstName"); // input firstName
let lastName = document.querySelector("#lastName"); // input lastName
let age = document.querySelector("#age"); // input age
let country = document.querySelector("#country"); // select country
let errors = document.querySelector("#errors");
let body = document.querySelector("body");


// capter le moment ou le formulaire est soumis
form.addEventListener("submit", function (event) {
    // annuler le rechargement de la page
    event.preventDefault();
    errors.innerHTML = "";

    // controller les champs
    // tous les champs sont obligatoires
    // faut au moins deux caractères pour prénom et nom

    if (firstName.value.length < 2) {
        firstName.style.backgroundColor = "red";
        errors.innerHTML += "<div> Your name can't be 2 characters long. </div>";
    } else {
        firstName.style.backgroundColor = "green";
    }

    if (lastName.value.length < 2) {
        lastName.style.backgroundColor = "red";
        errors.innerHTML += "<div> Your name can't be 2 characters long. </div>";
    } else {
        lastName.style.backgroundColor = "green";
    }

    if (postalCode.value.length < 5) {
        postalCode.style.backgroundColor = "red";
        errors.innerHTML += "<div> Idiot, try again </div>";
    } else {
        lastName.style.backgroundColor = "green";
    }

    if (age.value < 18 || age.value > 70) {
        age.style.backgroundColor = "red";
        errors.innerHTML += "<div> Verify your age. </div>";
    } else {
        age.style.backgroundColor = "green";
    }

    if (password.value < 6 || password.value > 0) { // si the password est inférieur a 6 ou égal a 0, renvoi d'erreur
        password.style.backgroundColor = "red";
        errors.innerHTML += "<div> Go ahead and try again. your pass isn't strong enough </div>";
    } else {
        password.style.backgroundColor = "green";
    }

    if (confirm.value != password.value) { // si the secong pass n'est pas égal au premier, renvoi d'erreur
        confirm.style.backgroundColor = "red";
        errors.innerHTML += "<div> Go ahead and try again. your passes aren't the same. </div>";
    } else {
        confirm.style.backgroundColor = "green";
    }


    // agé entre 18 et 70 ans pour l'âge
    // selectionner un pays

    // si jamais j'ai un champ en erreur
    // vous allez mettre son background en rouge
    // si il est ok vous mettez son background en vert
    // m'afficher au dessus de mon formulaire les messages d'erreurs

    if(country.value == "null") {
        country.style.backgroundColor = "red";
        errors.innerHTML += "<div> Veuillez sélectionner un pays ! </div>";
    } else {
        country.style.backgroundColor = "green";
    }

    // si j'ai pas d'erreur
    if (errors.innerHTML === "") {
        let p = document.createElement("p"); // créer un p en JS
        p.append("Formulaire envoyé !"); // ajouter du texte à mon p
        body.appendChild(p); // ajouter l p au DOM
        form.style.display = "none";
    }



});