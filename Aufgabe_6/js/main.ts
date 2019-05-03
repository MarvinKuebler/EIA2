namespace IceDealerReloaded{

    window.addEventListener("load", init);
    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    let legend: HTMLLegendElement = document.createElement("legend");
    function init(_event: Event): void {
        elemente(sortimentArray);
        document.getElementById("CheckOut").addEventListener("click", CheckOrder);
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", OrderOverview);
        }
    }
/* draw elements */ 
    function CreatingElements(OurFlavours: IceDealerData): void {
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
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
    function elemente(daten: KeyArray): void {
        document.body.appendChild(fieldset);
        legend.innerHTML = "Our Flavours, Scoop and Topping: each 1€";
        document.getElementsByClassName("Headline");
        fieldset.appendChild(legend);
        for (let datenArray in daten) {
            let value: IceDealerData[] = daten[datenArray];
            for (let i: number = 0; i < value.length; i++)
            CreatingElements(value[i]);
        }
    }
    function OrderOverview(_event: Event): void {
        let startSumme: number = 0;
        let OrderInput: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("Flavours").innerHTML = " ";
        document.getElementById("ThatsYourOrder").innerHTML = " ";
        document.getElementById("CupOrWaffle").innerHTML = " ";
        document.getElementById("DeliveryOrPickUp").innerHTML = " ";

        for (let i: number = 0; i < OrderInput.length; i++) {
            if (OrderInput[i].type == "number" && Number(OrderInput[i].value) > 0) {
                let WholePrice: number = Number(OrderInput[i].value);
                startSumme += WholePrice;
                document.getElementById("ThatsYourOrder").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let auswahl: HTMLElement = document.createElement("li");
                auswahl.innerHTML = `${OrderInput[i].value} x ${OrderInput[i].name}`;
                document.getElementById("Flavours").appendChild(auswahl);
            }

            if (OrderInput[i].checked == true && OrderInput[i].getAttribute("name") == "radiobutton") {
                document.getElementById("ThatsYourOrder").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let behaelterWahl: HTMLElement = document.createElement("li");
                behaelterWahl.innerHTML = `${OrderInput[i].getAttribute("id")}`;
                document.getElementById("CupOrWaffle").appendChild(behaelterWahl);
            }

            if (OrderInput[i].checked == true && OrderInput[i].name == "Shipping") {
                let WholePrice: number = Number(OrderInput[i].getAttribute("value"));
                startSumme += WholePrice;
                document.getElementById("ThatsYourOrder").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let ChoiceOfDelivery: HTMLElement = document.createElement("li");
                ChoiceOfDelivery.innerHTML = `${OrderInput[i].getAttribute("id")}`;
                document.getElementById("DeliveryOrPickUp").appendChild(ChoiceOfDelivery);
            }
            
        }
    }
function CheckOrder(_event: Event): void {
    let CustomerData: string[] = [];
    let CustomerInput: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
    let DeliveryMissing: number = 0;
    let ToppingMissing: number = 0;
    let CupOrWaffleMissing: number = 0;
    for (let i: number = 0; i < CustomerInput.length; i++) {  
        if (CustomerInput[i].value == "") {
            let ImportantData: string = CustomerInput[i].name;
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
        alert("You missed the Delivery Or Pick Up")
    }
    if (ToppingMissing == 0) {
        alert("You failed to choose your Ice, Try again!")
    }
    if (CupOrWaffleMissing == 0) {
        alert("please choose between Cup or Waffle")
    }
    if (CustomerData.length == 0) {
        alert("Thanks for your Order");
    }
    else {
        alert(`${CustomerData} please fill out the missing fields!`);
    }
}
}