namespace EIS_DEALER{
    window.addEventListener("load",init);
    document.addEventListener("load",init);
    document.getElementById("oderDone").addEventListener("click", finishedOrder)
}
function init(_event: Event): void {
    console.log(init);

    let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

    for (let i: number = 0; i < fieldsets.length; i++) {
        let fieldset: HTMLFieldSetElement = fieldsets[i];
        fieldset.addEventListener("change", orderSomething);
        console.log(fieldset);
    }
}
function orderSomething(_event: Event): void {
    let orderSum: number = 0;
    let orderSelections: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    document.getElementById("SelectYourFlavour").innerHTML = "SelectYourFlavour: ";
    document.getElementById("SelectYourTopping").innerHTML = "SelectYourTopping: ";
    document.getElementById("WaffleOrCup").innerHTML = "WaffleOrCup: ";
    document.getElementById("DeliveryOrPikUp").innerHTML = "DeliveryOrPikUp: ";
    document.getElementById("orderPrice").innerHTML = "Preis: ";
    for (let i: number = 0; i < orderSelections.length; i++) {
        if (orderSelections[i].checked == true) {
            console.log(orderSum);
            if (orderSelections[i].name == "SelectYourTopping1" || orderSelections[i].name == "SelectYourTopping2" || orderSelections[i].name == "SelectYourTopping3") {
                let target = document.createElement("li");
                target.innerHTML = `${orderSelections[i].alt}, `;
                document.getElementById("SelectYourTopping").appendChild(target);
            } else if (orderSelections[i].name == "container") {
                let target =document.createElement("li");
                target.innerHTML=`${orderSelections[i].alt}`;
                        document.getElementById("WaffleOrCup").appendChild(target);
            } else if (orderSelections[i].name == "shipping") {
                let target =document.createElement("li");
                target.innerHTML=`${orderSelections[i].alt}`;
                        document.getElementById("DeliveryOrPikUp").appendChild(target);
            }
        }
        if (orderSelections[i].name == "White Choclate" || orderSelections[i].name == "Vanilla-Cream" || orderSelections[i].name == "Strawberry-Mango" || orderSelections[i].name == "Oreo" || orderSelections[i].name == "Choclate-Chip" || orderSelections[i].name == "Straciatella") {
            console.log(orderSum);
            let target = document.createElement("li");
            target.innerHTML = `${orderSelections[i].value}, `;
            document.getElementById("SelectYourFlavour").appendChild(target);
        }
        document.getElementById("orderPrice").innerHTML = `Bestellzusammenfassung:   ${orderSum} €`;
    }

}
function finishedOrder(): void {
    let
}