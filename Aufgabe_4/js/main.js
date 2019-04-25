var aufgabe4;
(function (aufgabe4) {
    window.addEventListener("load", init);
    function init(_event) {
        document.getElementById("orderDone").addEventListener("click", CheckOrder);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", OrderSumUp);
        }
    }
    /*Order Sum Up */
    function OrderSumUp(_event) {
        let startSumme = 0;
        let inputOrder = document.getElementsByTagName("input");
        document.getElementById("viewedOrders").innerHTML = "";
        for (let i = 0; i < inputOrder.length; i++) {
            if (inputOrder[i].checked == true) {
                let wholePrice = Number(inputOrder[i].value);
                startSumme += wholePrice;
                document.getElementById("price").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let OrderCheckUp = document.createElement("li");
                OrderCheckUp.innerHTML = `${inputOrder[i].id}`;
                document.getElementById("viewedOrders").appendChild(OrderCheckUp);
            }
        }
    }
    /* check missing Data */
    function CheckOrder(_event) {
        let CustomerData = [];
        let kundenEingabe = document.getElementsByTagName("input");
        for (let i = 0; i < kundenEingabe.length; i++) {
            if (kundenEingabe[i].value == "") {
                let benoetigteDaten = kundenEingabe[i].name;
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
})(aufgabe4 || (aufgabe4 = {}));
//# sourceMappingURL=main.js.map