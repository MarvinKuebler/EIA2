let cr7 = {
    Pic: 1,
    Value: 7,
    Position: "zero",
};
let cr8 = {
    Pic: 1,
    Value: 8,
    Position: "zero",
};
let cr9 = {
    Pic: 1,
    Value: 9,
    Position: "zero",
};
let cr10 = {
    Pic: 1,
    Value: 10,
    Position: "zero",
};
let crJ = {
    Pic: 1,
    Value: 11,
    Position: "zero",
};
let crQ = {
    Pic: 1,
    Value: 12,
    Position: "zero",
};
let crK = {
    Pic: 1,
    Value: 13,
    Position: "zero",
};
let crA = {
    Pic: 1,
    Value: 14,
    Position: "zero",
};
let di7 = {
    Pic: 2,
    Value: 7,
    Position: "zero",
};
let di8 = {
    Pic: 2,
    Value: 8,
    Position: "zero",
};
let di9 = {
    Pic: 2,
    Value: 9,
    Position: "zero",
};
let di10 = {
    Pic: 2,
    Value: 10,
    Position: "zero",
};
let diJ = {
    Pic: 2,
    Value: 11,
    Position: "zero",
};
let diQ = {
    Pic: 2,
    Value: 12,
    Position: "zero",
};
let diK = {
    Pic: 2,
    Value: 13,
    Position: "zero",
};
let diA = {
    Pic: 2,
    Value: 14,
    Position: "zero",
};
let sp7 = {
    Pic: 3,
    Value: 7,
    Position: "zero",
};
let sp8 = {
    Pic: 3,
    Value: 8,
    Position: "zero",
};
let sp9 = {
    Pic: 3,
    Value: 9,
    Position: "zero",
};
let sp10 = {
    Pic: 3,
    Value: 10,
    Position: "zero",
};
let spJ = {
    Pic: 3,
    Value: 11,
    Position: "zero",
};
let spQ = {
    Pic: 3,
    Value: 12,
    Position: "zero",
};
let spK = {
    Pic: 3,
    Value: 13,
    Position: "zero",
};
let spA = {
    Pic: 3,
    Value: 14,
    Position: "zero",
};
let he7 = {
    Pic: 4,
    Value: 7,
    Position: "zero",
};
let he8 = {
    Pic: 4,
    Value: 8,
    Position: "zero",
};
let he9 = {
    Pic: 4,
    Value: 9,
    Position: "zero",
};
let he10 = {
    Pic: 4,
    Value: 10,
    Position: "zero",
};
let heJ = {
    Pic: 4,
    Value: 11,
    Position: "zero",
};
let heQ = {
    Pic: 4,
    Value: 12,
    Position: "zero",
};
let heK = {
    Pic: 4,
    Value: 13,
    Position: "zero",
};
let heA = {
    Pic: 4,
    Value: 14,
    Position: "zero",
};
let deck = [cr7, cr8, cr9, cr10, crJ, crQ, crK, crA, di7, di8, di9, di10, diJ, diQ, diK, diA, sp7, sp8, sp9, sp10, spJ, spQ, spK, spA, he7, he8, he9, he10, heJ, heQ, heK, heA];
let hand = [];
let pile = [];
let obersteKarte;
function erstelleDeck() {
    document.getElementById("Deck").addEventListener("click", erstelleKarten);
    document.getElementById("Deck").innerHTML = `<div class="CardBorder">
    <img src="img/Back.png" alt="MISSING TEXTURE" class="CardBack">
    </div>`;
}
function AblageStapel() {
    let write = "";
    write += `<div class="CardBorder">`;
    switch (obersteKarte.Pic) {
        case 1:
            write += `<img src="img/Cross.png" class="Symbol" alt="♣">
                <div class="Black">`; // Pic 1 = ♣
            break;
        case 2:
            write += `<img src="img/Diamond.png" class="Symbol" alt="♦">
                <div class="Red">`; // Pic 2 = ♦
            break;
        case 3:
            write += `<img src="img/Spade.png" class="Symbol" alt="♠">
                <div class="Black">`; // Pic 3 = ♠
            break;
        case 4:
            write += `<img src="img/Heart.png" class="Symbol" alt="♥">
                <div class="Red">`; // Pic 4 = ♥
            break;
        default:
            console.log("ERROR while loading Symbol");
    }
    switch (obersteKarte.Value) {
        case 7:
            write += `7</div>`;
            break;
        case 8:
            write += `8</div>`;
            break;
        case 9:
            write += `9</div>`;
            break;
        case 10:
            write += `10</div>`;
            break;
        case 11:
            write += `J</div>`; // Value 11 = Jack (J)
            break;
        case 12:
            write += `Q</div>`; // Value 12 = Queen (Q)
            break;
        case 13:
            write += `K</div>`; // Value 13 = King (K)
            break;
        case 14:
            write += `A</div>`; // Value 14 = Ace (A)
            break;
        default:
            console.log("ERROR while loading Value");
    }
    write += `</div>`;
    document.getElementById("Pile").innerHTML = `${write}`;
}
function erstelleKarten() {
    if (deck.length > 0) {
        let n = Math.floor(Math.random() * (deck.length));
        hand.push(deck[n]);
        deck.splice(n, 1);
        HandkartenErstellen();
        console.log(hand);
    }
    else {
        alert("The Deck is Empty!");
    }
}
function StartHand() {
    let handSize = 0;
    do {
        handSize = parseInt(prompt("Anzahl Handkarten festlegen: 4-10"));
    } while (isNaN(handSize) || handSize > 10 || handSize < 4); //Wird so oft wiederholt, bis die Eingabe eine Zahl zwischen 4 und 10 ist. "isNaN" bedeutet "Is Not a Number"
    console.log("Handsize: " + handSize);
    for (let i = 0; i < handSize; i++) {
        erstelleKarten();
    }
    erstelleDeck();
    let n = Math.floor(Math.random() * (deck.length));
    obersteKarte = deck[n];
    deck.splice(n, 1);
    AblageStapel();
    document.getElementById("Sort").addEventListener("click", KartenSortieren);
    HandkartenErstellen();
}
function HandkartenErstellen() {
    document.getElementById("HandDisplay").addEventListener("click", KartenSpielen);
    document.getElementById("HandDisplay").innerHTML = "";
    for (let i = 0; i < hand.length; i++) {
        hand[i].Position = "Position" + i;
        let write = "";
        write += `<div class="CardBorder" id="Position${i}">`;
        switch (hand[i].Pic) {
            case 1:
                write += `<img src="img/Cross.png" class="Symbol" alt="♣">
                <div class="Black">`; // Pic 1 = ♣
                break;
            case 2:
                write += `<img src="img/Diamond.png" class="Symbol" alt="♦">
                <div class="Red">`; // Pic 2 = ♦
                break;
            case 3:
                write += `<img src="img/Spade.png" class="Symbol" alt="♠">
                <div class="Black">`; // Pic 3 = ♠
                break;
            case 4:
                write += `<img src="img/Heart.png" class="Symbol" alt="♥">
                <div class="Red">`; // Pic 4 = ♥
                break;
            default:
                console.log("ERROR while loading Symbol");
        }
        switch (hand[i].Value) {
            case 7:
                write += `7</div>`;
                break;
            case 8:
                write += `8</div>`;
                break;
            case 9:
                write += `9</div>`;
                break;
            case 10:
                write += `10</div>`;
                break;
            case 11:
                write += `J</div>`; // Value 11 = Jack (J)
                break;
            case 12:
                write += `Q</div>`; // Value 12 = Queen (Q)
                break;
            case 13:
                write += `K</div>`; // Value 13 = King (K)
                break;
            case 14:
                write += `A</div>`; // Value 14 = Ace (A)
                break;
            default:
                console.log("ERROR while loading Value");
        }
        write += `</div>`;
        document.getElementById("HandDisplay").innerHTML += `${write}`;
    }
}
function KartenSpielen() {
    let selectedCardID = event.target;
    for (let i = 0; i < hand.length; i++) {
        if (String(selectedCardID.getAttribute("id")) == hand[i].Position) {
            if (hand[i].Pic == obersteKarte.Pic || hand[i].Value == obersteKarte.Value) {
                pile.push(obersteKarte);
                obersteKarte = hand[i];
                hand[i].Position = "zero";
                hand.splice(i, 1);
                HandkartenErstellen();
                AblageStapel();
                console.log("DONE!");
            }
            else {
                alert("Karte nicht spielbar!");
            }
        }
    }
}
function KartenSortieren() {
    hand.sort(KartenSortierenWert);
    hand.sort(KartenSortierenBild);
    HandkartenErstellen();
}
function KartenSortierenWert(_a, _b) {
    let value_a = _a.Value;
    let value_b = _b.Value;
    if (value_a < value_b)
        return -1;
    if (value_a > value_b)
        return 1;
    if (value_a == value_b)
        return 0;
}
function KartenSortierenBild(_a, _b) {
    let pic_a = _a.Pic;
    let pic_b = _b.Pic;
    if (pic_a < pic_b)
        return -1;
    if (pic_a > pic_b)
        return 1;
    if (pic_a == pic_b)
        return 0;
}
function init() {
    StartHand();
}
function welcheTaste(event) {
    if (event.keyCode == 32)
        erstelleKarten();
}
document.addEventListener("DOMContentLoaded", init);
document.addEventListener("keydown", welcheTaste);
//# sourceMappingURL=main.js.map