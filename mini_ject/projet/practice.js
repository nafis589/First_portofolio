function surligne(champ, erreur) {
    if (erreur) {
        champ.style.backgroundColor = "red";
    }
    else {
        champ.style.backgroundColor = "";
    }
};
function verifpseudo(champ) {
    if (champ.value.length < 2 || champ.value.length > 25) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
};
function verifemail(champ) {
    regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (regex.test(champ.value)) {
        surligne(champ, false);
        return true;
    }
    else {
        surligne(champ, true);
        return false;
    }
};
/*
document.addEventListener('DOMContentLoaded', function(){
    var age = document.getElementById('ans');
    age.addEventListener('blur', function(){
        var age = parseInt(this.value);
        if (isNaN(age)|| age<5 || age>111){
            surligne(this, true);
            return false;
        }
        else {
            surligne(this, false);
            return true;
        };
    });*/


/*
    var pseudo = document.getElementById('nom');
    var email = document.getElementById('mail');
    var formulaire = document.querySelector('form');
    var pseudoOk = verifpseudo(formulaire.pseudo);
    var emailOK = verifmail(formulaire.email);
    var ageOK = verifage(formulaire.age);
    formulaire.addEventListener('submit', function(){
        if (pseudoOK && emailOK && ageOK){
            return true;
        }
        else{
            alert("veuillez correctement remplir tous les champs!");
            return false;
        }
    });
});

*/
function verifage(champ) {
    var age = parseInt(champ.value);
    if (isNaN(age) || age < 5 || age > 111) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    };
};

function verifForm(f) {
    var pseudoOk = verifpseudo(f.pseudo);
    var mailOk = verifmail(f.email);
    var ageOk = verifage(f.age);

    if (pseudoOk && mailOk && ageOk)
        return true;
    else {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    };
};
function afficheheure(){
    var date = new Date();
    var heure = date.getHours() + " ";
    var minute = date.getMinutes() + " ";
    var seconde = date.getSeconds();
    if (heure < 10){
        heure = "0" + heure;
    }
    if (minute < 10){
        minute = "0" + minute;
    }
    if (seconde <10){
        seconde = "0" + seconde;
    }
    var afficheH = document.getElementById('H');
    afficheH.textContent = heure + ":" + minute + ":" + seconde;
}
setInterval(afficheheure, 1000);