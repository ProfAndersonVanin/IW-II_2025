//criar uma variável que vai receber um array com todas as tags: "p"
var paragrafos = document.getElementsByTagName("p");
// console.log(paragrafos);
var cores = ["blue", "red", "green", "yellow"];
var i;
for (i=0; i<paragrafos.length; i++){
    paragrafos[i].style.backgroundColor = cores[i];
}





// //criar uma variável que vai receber um array com todas as classes: "classe_p"
// var classes = document.getElementsByClassName("classe_p");
// console.log(classes);

//criar uma variável que vai receber um elemento pelo seletor: "type=button"
// var botao = document.querySelector('button[type="button"]');
// console.log(botao);  

