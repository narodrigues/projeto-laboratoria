let name = prompt("Qual o seu nome?");
alert("Seja bem-vindo(a), " + name);

document.getElementById("showName").innerHTML = name;

let game = prompt("Deseja iniciar o jogo? \nColoque o número correspondente: \n1 - Sim \n2 - Não");

if(game === "1"){
    questions();
} else if(game === "2"){
    alert("Que pena! Iremos sentir sua falta :(");
} else {
    alert("Digite uma das opções válidas.");
};

function questions(){
    let questionOne = prompt("1. Segundo o romance, que animal era \“Moby Dick\”? \n1. TUBARÃO \n2.GOLFINHO \n3.BALEIA");
    let questionTwo = prompt("Qual é o animal que representa o signo de áries? \n1.CARNEIRO \n2.LEÃO \n3.TOURO");
    let questionThree = prompt("Que animal é o Pateta? \n1.CAVALO \n2.BURRO \n3.CACHORRO");

    if(questionOne === "3"){
        document.getElementById("rightAnswer1").innerHTML = "Resposta 1";
    } else {
        document.getElementById("wrongAnswer1").innerHTML = "Resposta 1";
    }

    if(questionTwo === "1"){
        document.getElementById("rightAnswer2").innerHTML = "Resposta 2";
    } else {
        document.getElementById("wrongAnswer2").innerHTML = "Resposta 2";
    }

    if(questionThree === "3"){
        document.getElementById("rightAnswer3").innerHTML = "Resposta 3";
    } else {
        document.getElementById("wrongAnswer3").innerHTML = "Resposta 3";
    }
}




