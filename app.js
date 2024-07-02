// let titulo = document.querySelector('h1');
// let paragrafo = document.querySelector('p');
// titulo.innerHTML = 'Jogo do número secreto';
// paragrafo = 'Escreva um número entre 1 e 10'

let numberRandom = generateNumberRandom();
let tentative = 0

resetGame()

function displayText(tag,text){
    let myelemnet = document.querySelector(tag);
    myelemnet.innerHTML = text;
}



function verifyShot(){
    let shotNum = document.querySelector('input').value; 
    tentative ++;
    if (shotNum == numberRandom) {
        displayText('h1', 'Acertou!');
        let WordTentative = tentative > 1 ? 'tentativas' : 'tentativa';
        let mensageTentative = `Você descobriu o número secreto com ${tentative} ${WordTentative}!`;
        displayText('p', mensageTentative);
        document.getElementById('resetButton').removeAttribute('disabled');
    }
    else if(shotNum > numberRandom)
    {
        alert(numberRandom)
        displayText('p', `O numero segredo é menor ${shotNum}`);
    }
    else 
    {    alert(numberRandom)
        displayText('p', `O numero segredo é maior ${shotNum}`);
    }
}

function generateNumberRandom(){
    return parseInt(Math.random() * 10 + 1);
}

function clearNum(){
    number = document.querySelector('input');
    number.value = '';
}

function resetGame(){
    let tentative = 0
    displayText('h1','Jogo do número secreto');
    displayText('p','Escreva um número entre 1 e 10');  
    document.getElementById('resetButton').removeAttribute('disabled',true);  
    clearNum();  
}
