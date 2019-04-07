let cr7 = {
    InDeck: true,
    Pic: 1,
    Value: 7,
};
let cr8 = {
    InDeck: true,
    Pic: 1,
    Value: 8,
};
let cr9 = {
    InDeck: true,
    Pic: 1,
    Value: 9,
};
let cr10 = {
    InDeck: true,
    Pic: 1,
    Value: 10,
};
let crJ = {
    InDeck: true,
    Pic: 1,
    Value: 11,
};
let crQ = {
    InDeck: true,
    Pic: 1,
    Value: 12,
};
let crK = {
    InDeck: true,
    Pic: 1,
    Value: 13,
};
let crA = {
    InDeck: true,
    Pic: 1,
    Value: 14,
};
let di7 = {
    InDeck: true,
    Pic: 2,
    Value: 7,
};
let di8 = {
    InDeck: true,
    Pic: 2,
    Value: 8,
};
let di9 = {
    InDeck: true,
    Pic: 2,
    Value: 9,
};
let di10 = {
    InDeck: true,
    Pic: 2,
    Value: 10,
};
let diJ = {
    InDeck: true,
    Pic: 2,
    Value: 11,
};
let diQ = {
    InDeck: true,
    Pic: 2,
    Value: 12,
};
let diK = {
    InDeck: true,
    Pic: 2,
    Value: 13,
};
let diA = {
    InDeck: true,
    Pic: 2,
    Value: 14,
};
let sp7 = {
    InDeck: true,
    Pic: 3,
    Value: 7,
};
let sp8 = {
    InDeck: true,
    Pic: 3,
    Value: 8,
};
let sp9 = {
    InDeck: true,
    Pic: 3,
    Value: 9,
};
let sp10 = {
    InDeck: true,
    Pic: 3,
    Value: 10,
};
let spJ = {
    InDeck: true,
    Pic: 3,
    Value: 11,
};
let spQ = {
    InDeck: true,
    Pic: 3,
    Value: 12,
};
let spK = {
    InDeck: true,
    Pic: 3,
    Value: 13,
};
let spA = {
    InDeck: true,
    Pic: 3,
    Value: 14,
};
let he7 = {
    InDeck: true,
    Pic: 4,
    Value: 7,
};
let he8 = {
    InDeck: true,
    Pic: 4,
    Value: 8,
};
let he9 = {
    InDeck: true,
    Pic: 4,
    Value: 9,
};
let he10 = {
    InDeck: true,
    Pic: 4,
    Value: 10,
};
let heJ = {
    InDeck: true,
    Pic: 4,
    Value: 11,
};
let heQ = {
    InDeck: true,
    Pic: 4,
    Value: 12,
};
let heK = {
    InDeck: true,
    Pic: 4,
    Value: 13,
};
let heA = {
    InDeck: true,
    Pic: 4,
    Value: 14,
};
let Deck = [cr7, cr8, cr9, cr10, crJ, crQ, crK, crA, di7, di8, di9, di10, diJ, diQ, diK, diA, sp7, sp8, sp9, sp10, spJ, spQ, spK, spA, he7, he8, he9, he10, heJ, heQ, heK, heA];
let Hand = [];
let TopCard;
function DrawCard() {
    let n = Math.floor(Math.random() * 31); //Zufällige Zahl zwischen 0 und 31
    while (Deck[n].InDeck == false) //Falls die nte Karte nicht im Deck ist: versuche es nochmal
     {
        n = Math.floor(Math.random() * 31);
    }
    Hand[Hand.length] = Deck[n]; //Karte im Deck wird der Hand hinzugefügt.
    Deck[n].InDeck = false; //Karte danach nichtmehr im Deck.
}
function GenerateDeck() {
    document.getElementById("Deck").innerHTML = `<div class="CardBorder">
    <img src="img/Back.png" alt="MISSING TEXTURE" class="CardBack">
    </div>`;
}
function GeneratePile() {
    let n = Math.floor(Math.random() * 31); //Zufällige Zahl zwischen 0 und 31
    while (Deck[n].InDeck == false) //Falls die nte Karte nicht im Deck ist: versuche es nochmal
     {
        n = Math.floor(Math.random() * 31);
    }
    TopCard = Deck[n]; //Karte im Deck wird der Hand hinzugefügt.
    Deck[n].InDeck = false; //Karte danach nichtmehr im Deck.
    let write = "";
    write += `<div class="CardBorder">`;
    switch (TopCard.Pic) {
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
    switch (TopCard.Value) {
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
function GenerateHandCards() {
    document.getElementById("HandDisplay").innerHTML = "";
    for (var i = 0; i < Hand.length; i++) {
        let write = "";
        write += `<div class="CardBorder">`;
        switch (Hand[i].Pic) {
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
        switch (Hand[i].Value) {
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
function startingHand() {
    let HandSize = 0;
    do {
        HandSize = parseInt(prompt("Select Handsize (Enter number between 4 and 10)"));
    } while (isNaN(HandSize) || HandSize > 10 || HandSize < 4); //Wird so oft wiederholt, bis die Eingabe eine Zahl zwischen 4 und 10 ist. "isNaN" --> IsNotANumber"
    console.log("Handsize: " + HandSize);
    for (let i = 0; i < HandSize; i++) {
        DrawCard();
    }
    console.log(Hand);
    GenerateDeck();
    GeneratePile();
    GenerateHandCards();
}
function init() {
    startingHand();
}
document.addEventListener("DOMContentLoaded", init);
//# sourceMappingURL=main.js.map