var container = document.getElementById("board");
var lastCard = null;

function reveal(card) {
    card.className = "revealed";
    card.innerHTML = card.value;
    if(lastCard == null) {
        lastCard = card;
    } else if(lastCard.value != card.value) {
        setTimeout(function(){
            card.className = "";
            card.innerHTML = "";
            lastCard.className = "";
            lastCard.innerHTML = "";
            lastCard = null;
        }, 1000);
    }
    else {
        lastCard = null;
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

generate(12);
randomize();
