var input = document.getElementById('barre');
var ajout = document.getElementById('btn');
var container = document.getElementById('container');
document.addEventListener('DOMContentLoaded', function(){
    ajout.addEventListener('click', function(){
        if (input.value !=""){
           var paragraph = document.createElement('p');
           
        }
        paragraph.innerText = input.value;
        container.appendChild(paragraph);
        input.value ="";
        paragraph.classList.add('para');
        paragraph.addEventListener('click', function(){
            paragraph.classList.add('selection');
        });
        paragraph.addEventListener('dblclick', function(){
            paragraph.remove();
        });
        
    });
    
})

