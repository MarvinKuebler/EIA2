var IceDealerReloaded;
(function (IceDealerReloaded) {
    window.addEventListener("load", init);
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    function init(_event) {
        elemente(IceDealerReloaded.sortimentArray);
        document.getElementById("CheckOut").addEventListener("click", CheckOrder);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", OrderOverview);
        }
    }
    /* draw elements */
    function CreatingElements(OurFlavours) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.setAttribute("for", OurFlavours.Alias);
        label.innerHTML = OurFlavours.Alias;
        if (OurFlavours.inputtype == "radio") {
            input.setAttribute("type", OurFlavours.inputtype);
            input.setAttribute("name", "radiobutton");
            input.setAttribute("price", "2");
            input.setAttribute("id", OurFlavours.Alias);
        }
        if (OurFlavours.inputtype == "number") {
            input.setAttribute("type", OurFlavours.inputtype);
            input.setAttribute("name", OurFlavours.Alias);
            input.setAttribute("step", "1");
            input.setAttribute("min", "0");
            input.setAttribute("max", "10");
            input.setAttribute("value", "0");
            input.setAttribute("price", "1");
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }
    function elemente(daten) {
        document.body.appendChild(fieldset);
        legend.innerHTML = "Our Flavours, Scoop and Topping: each 1€";
        document.getElementsByClassName("Headline");
        fieldset.appendChild(legend);
        for (let datenArray in daten) {
            let value = daten[datenArray];
            for (let i = 0; i < value.length; i++)
                CreatingElements(value[i]);
        }
    }
    function OrderOverview(_event) {
        let startSumme = 0;
        let OrderInput = document.getElementsByTagName("input");
        document.getElementById("Flavours").innerHTML = " ";
        document.getElementById("ThatsYourOrder").innerHTML = " ";
        document.getElementById("CupOrWaffle").innerHTML = " ";
        document.getElementById("DeliveryOrPickUp").innerHTML = " ";
        for (let i = 0; i < OrderInput.length; i++) {
            if (OrderInput[i].type == "number" && Number(OrderInput[i].value) > 0) {
                let WholePrice = Number(OrderInput[i].value);
                startSumme += WholePrice;
                document.getElementById("ThatsYourOrder").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let auswahl = document.createElement("li");
                auswahl.innerHTML = `${OrderInput[i].value} x ${OrderInput[i].name}`;
                document.getElementById("Flavours").appendChild(auswahl);
            }
            if (OrderInput[i].checked == true && OrderInput[i].getAttribute("name") == "radiobutton") {
                document.getElementById("ThatsYourOrder").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let behaelterWahl = document.createElement("li");
                behaelterWahl.innerHTML = `${OrderInput[i].getAttribute("id")}`;
                document.getElementById("CupOrWaffle").appendChild(behaelterWahl);
            }
            if (OrderInput[i].checked == true && OrderInput[i].name == "Shipping") {
                let WholePrice = Number(OrderInput[i].getAttribute("value"));
                startSumme += WholePrice;
                document.getElementById("ThatsYourOrder").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let ChoiceOfDelivery = document.createElement("li");
                ChoiceOfDelivery.innerHTML = `${OrderInput[i].getAttribute("id")}`;
                document.getElementById("DeliveryOrPickUp").appendChild(ChoiceOfDelivery);
            }
        }
    }
    function CheckOrder(_event) {
        let CustomerData = [];
        let CustomerInput = document.getElementsByTagName("input");
        let DeliveryMissing = 0;
        let ToppingMissing = 0;
        let CupOrWaffleMissing = 0;
        for (let i = 0; i < CustomerInput.length; i++) {
            if (CustomerInput[i].value == "") {
                let ImportantData = CustomerInput[i].name;
                CustomerData.push(ImportantData);
            }
            if (CustomerInput[i].type == "checkbox" && CustomerInput[i].checked == true) {
                DeliveryMissing = 1;
            }
            if (CustomerInput[i].type == "number" && Number(CustomerInput[i].value) > 0) {
                ToppingMissing = 1;
            }
            if (CustomerInput[i].type == "radio" && CustomerInput[i].checked == true) {
                CupOrWaffleMissing = 1;
            }
        }
        if (DeliveryMissing == 0) {
            alert("You missed the Delivery Or Pick Up");
        }
        if (ToppingMissing == 0) {
            alert("You failed to choose your Ice, Try again!");
        }
        if (CupOrWaffleMissing == 0) {
            alert("please choose between Cup or Waffle");
        }
        if (CustomerData.length == 0) {
            alert("Thanks for your Order");
        }
        else {
            alert(`${CustomerData} please fill out the missing fields!`);
        }
    }
})(IceDealerReloaded || (IceDealerReloaded = {}));
//# sourceMappingURL=main.js.map