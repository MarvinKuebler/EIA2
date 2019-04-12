interface Card {
    Pic:number; // 1 = Kreuz, 2 = Karo, 3 = Pik, 4 = Herz
    Value:number;
    Position: string;
}

let cr7:Card={ //Karten mit Kreuz
    Pic:1,
    Value:7,
    Position: "zero",   
}

let cr8:Card={
    Pic:1,
    Value:8,
    Position: "zero",

}

let cr9:Card={
    Pic:1,
    Value:9, 
    Position: "zero",  
}

let cr10:Card={
    Pic:1,
    Value:10,
    Position: "zero",   
}

let crJ:Card={
    Pic:1,
    Value:11,
    Position: "zero",   
}

let crQ:Card={
    Pic:1,
    Value:12, 
    Position: "zero",  
}

let crK:Card={
    Pic:1,
    Value:13,  
    Position: "zero", 
}

let crA:Card={
    Pic:1,
    Value:14,   
    Position: "zero",
}

let di7:Card={ //Karten mit Karo
    Pic:2,
    Value:7, 
    Position: "zero",  
}

let di8:Card={
    Pic:2,
    Value:8, 
    Position: "zero",  
}

let di9:Card={
    Pic:2,
    Value:9,   
    Position: "zero",
}

let di10:Card={
    Pic:2,
    Value:10, 
    Position: "zero",  
}

let diJ:Card={
    Pic:2,
    Value:11, 
    Position: "zero",  
}

let diQ:Card={
    Pic:2,
    Value:12,   
    Position: "zero",
}

let diK:Card={
    Pic:2,
    Value:13,  
    Position: "zero", 
}

let diA:Card={
    Pic:2,
    Value:14,   
    Position: "zero",
}

let sp7:Card={ //Karten mit Pik
    Pic:3,
    Value:7,  
    Position: "zero", 
}

let sp8:Card={
    Pic:3,
    Value:8,   
    Position: "zero",
}

let sp9:Card={
    Pic:3,
    Value:9,   
    Position: "zero",
}

let sp10:Card={
    Pic:3,
    Value:10,  
    Position: "zero", 
}

let spJ:Card={
    Pic:3,
    Value:11,  
    Position: "zero", 
}

let spQ:Card={
    Pic:3,
    Value:12,   
    Position: "zero",
}

let spK:Card={
    Pic:3,
    Value:13,
    Position: "zero",   
}

let spA:Card={
    Pic:3,
    Value:14, 
    Position: "zero",  
}

let he7:Card={ //Karten mit Herz
    Pic:4,
    Value:7,   
    Position: "zero",
}

let he8:Card={
    Pic:4,
    Value:8,   
    Position: "zero",
}

let he9:Card={
    Pic:4,
    Value:9,   
    Position: "zero",
}

let he10:Card={
    Pic:4,
    Value:10,   
    Position: "zero",
}

let heJ:Card={
    Pic:4,
    Value:11,   
    Position: "zero",
}

let heQ:Card={
    Pic:4,
    Value:12,
    Position: "zero",   
}

let heK:Card={
    Pic:4,
    Value:13,   
    Position: "zero",
}

let heA:Card={
    Pic:4,
    Value:14,   
    Position: "zero",
}

let deck:Card[]=[cr7, cr8, cr9, cr10, crJ, crQ, crK, crA, di7, di8, di9, di10, diJ, diQ, diK, diA, sp7, sp8, sp9, sp10, spJ, spQ, spK, spA, he7, he8, he9, he10, heJ, heQ, heK, heA];

let hand:Card[]=[];

let topCard:Card;



function drawCard():void{
    let n:number = Math.floor(Math.random() * (deck.length-1)); /*variable i wird zu einer zufälligen Zahl (0-32)*/
    hand.push(deck[n]); 
    deck.splice(n,1);
}

function generateDeck():void{
    document.getElementById("Deck").innerHTML = `<div class="CardBorder">
    <img src="img/Back.png" alt="MISSING TEXTURE" class="CardBack">
    </div>`;     
}

function generatePile():void{
    let n:number = Math.floor(Math.random() * (deck.length-1)); 
    topCard=deck[n];   
    deck.splice(n,1); /*splice = 1, wievielte stelle im array, 2, wie viele Elemente im Array werden entfernt? 3, was wird an dieser Stelle eingefügt?""*/
    
    let write:string = "";
        write += `<div class="CardBorder">`;

        switch (topCard.Pic){
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
                console.log("ERROR while loading Symbol")
            }

        switch (topCard.Value){
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
                console.log("ERROR while loading Value")
            }
            write += `</div>`
    document.getElementById("Pile").innerHTML = `${write}`;     
}

function generateHandCards():void{

    document.getElementById("HandDisplay").innerHTML = "";

    for (var i: number = 0; i < hand.length; i++){
        let write:string = "";
        write += `<div class="CardBorder">`;

        switch (hand[i].Pic){
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
                console.log("ERROR while loading Symbol")
            }

        switch (hand[i].Value){
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
                console.log("ERROR while loading Value")
            }
            write += `</div>`
        document.getElementById("HandDisplay").innerHTML += `${write}`;
    }       
}

function startingHand():void{
    let HandSize: number = 0;
    do  
        {
        HandSize = parseInt(prompt("Select Handsize (Enter number between 4 and 10)")); /*Prompter poppt beim laden des Fensters auf*/
        } 
    while (isNaN(HandSize) || HandSize > 10 || HandSize < 4); //Wird so oft wiederholt, bis die Eingabe eine Zahl zwischen 4 und 10 ist. "isNaN" bedeutet "Is Not a Number"

    console.log("Handsize: "+HandSize);

    for(let i:number=0;i<HandSize;i++){
        drawCard();
    }
    console.log(hand);

    generateDeck();
    generatePile();
    generateHandCards();
}



function init(){
    startingHand();
}

document.addEventListener("DOMContentLoaded", init);