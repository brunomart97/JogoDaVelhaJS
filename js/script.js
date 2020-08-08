// Elementos do jogo
let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Evento de cliques aos boxes
for(let i = 0; i < boxes.length; i ++) {

    //Quando alguem clica na caixa
    boxes[i].addEventListener('click', function() {

        let el = checkElem(player1, player2);

        // Verifica se já tem X ou O
        if(this.childNodes.length == 0) {

            let cloneElem = elem.cloneNode(true);

            this.appendChild(cloneElem);

            // Computar jogada
            if(player1 == player2) {
                player1 ++;
            } else {
                player2 ++;
            }

        }
 
    });
}

// Ver quem vai jogar
function checkElem(player1, player2) {

    if(player1 == player2) {
        // x
        elem = x;
    } else {
        // o
        elem = o;
    }

    return elem;

}