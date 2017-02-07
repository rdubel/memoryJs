var container = document.getElementById("board");
var card1 = null;
var card2 = null;
var label = document.getElementById("difficultyLabel");
var dif = document.getElementById("difficulty");
dif.onchange = function() {
    label.innerHTML = dif.value;
}

function reveal(card) {
    card.className = "revealed";
    card.innerHTML = card.value;
    if(card1 == null) {
        card1 = card;
        card1.onclick = null;
    } else if(card2 == null) {
        card2 = card;
        card2.onclick = null;
    }
    else if (card1.value == card2.value){
        card1 = card;
        card2 = null;
        card1.onclick = null;
    }
    else {
        card1.className = "";
        card2.className = "";
        card1.innerHTML = "";
        card2.innerHTML = "";
        card1.onclick = function() {
            reveal(this);
        }
        card2.onclick = function() {
            reveal(this);
        }
        card1 = card;
        card2 = null;
        card1.onclick = null;
    }
}

function generate(number) {
    for (i=0; i<number/2; i++) {
        var card1 = document.createElement("li");
        card1.value = i;
        var card2 = document.createElement("li");
        card2.value = i;
        container.appendChild(card1);
        container.appendChild(card2);
        card1.onclick = function() {
            reveal(this);
        }
        card2.onclick = function() {
            reveal(this);
        }
    }
}


function randomize() {
    for (i=container.children.length; i >= 0; i--){
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}

function play(number) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    generate(number);
    randomize();
}
