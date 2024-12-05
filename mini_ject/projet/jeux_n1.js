const choixUtilisateur = document.querySelectorAll('button');
const titre = document.querySelectorAll('h3');
const user = document.getElementById('choixUtilisateur');
const pc = document.getElementById('choixOrdinateur');
var result = document.getElementById('resultat');
var h = document.querySelectorAll('h3');
document.addEventListener('DOMContentLoaded', function(){
    choixUtilisateur[0].addEventListener('click', function(){
        var random = Math.floor(Math.random()*3);
        user.innerHTML = '<img src="pierre.jpeg">';
        if (random === 0){
            pc.innerHTML = '<img src="pierre.jpeg">';
            result.innerHTML = '<p class="para">  nul!</p>';
        }
        if (random === 1){
            pc.innerHTML = '<img src="papier.jpeg">' ;
            result.innerHTML = '<p class="para">  perdu!</p>';
        }
        if (random === 2){
            pc.innerHTML = '<img src="ciseau.png">' ;
            result.innerHTML = '<p class="para">  Gagné!</p>';
        }
    })
    choixUtilisateur[1].addEventListener('click', function(){
        var random = Math.floor(Math.random()*3);
        user.innerHTML = '<img src="papier.jpeg">';
        if (random === 0){
            pc.innerHTML = '<img src="pierre.jpeg">';
            result.innerHTML = '<p class="para">  Gagné!</p>';
        }
        if (random === 1){
            pc.innerHTML = '<img src="papier.jpeg">' ;
            result.innerHTML = '<p class="para">  nul!</p>';
        }
        if (random === 2){
            pc.innerHTML = '<img src="ciseau.png">' ;
            result.innerHTML = '<p class="para">  Perdu!</p>';
        }
    })
    choixUtilisateur[2].addEventListener('click', function(){
        var random = Math.floor(Math.random()*3);
        user.innerHTML = '<img src="ciseau.png">';
        if (random === 0){
            pc.innerHTML = '<img src="pierre.jpeg">';
            result.innerHTML = '<p class="para">  Perdu!</p>';
        }
        if (random === 1){
            pc.innerHTML = '<img src="papier.jpeg">' ;
            result.innerHTML = '<p class="para">  Gagné!</p>';
        }
        if (random === 2){
            pc.innerHTML = '<img src="ciseau.png">' ;
            result.innerHTML = '<p class="para">  nul!</p>';
        }
    })

})