namespace aufgabe4 {

    window.addEventListener("load", init);

    function init(_event: Event): void {

        document.getElementById("orderDone").addEventListener("click", CheckOrder);

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", OrderSumUp);
        }
    }
    /*Funktion Auflistung der Bestellung + Bestellsumme */
    function OrderSumUp(_event: Event): void {
        let startSumme: number = 0;
        let inputOrder: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("viewedOrders").innerHTML = "";
        for (let i: number = 0; i < inputOrder.length; i++) {
            if (inputOrder[i].checked == true) {
                let gesamtPreis: number = Number(inputOrder[i].value)
                startSumme += gesamtPreis;
                document.getElementById("price").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let OrderCheckUp = document.createElement("li");
                OrderCheckUp.innerHTML = `${inputOrder[i].id}`
                document.getElementById("viewedOrders").appendChild(OrderCheckUp)
            }
        }
    }
    /*Funktion zum Prüfen fehlender Eingaben */
    function CheckOrder(_event: Event): void {
        let CustomerData: string[] = [];
        let kundenEingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < kundenEingabe.length; i++) {
            if (kundenEingabe[i].value == "") {
                let benoetigteDaten: string = kundenEingabe[i].name;
                CustomerData.push(benoetigteDaten);
            }
        }
        if (CustomerData.length == 0) {
            alert("Thanks for your Order!");
        }
        else {
            alert(`${CustomerData} Hold on! You forgot something!.`);
        }
    }
} 
