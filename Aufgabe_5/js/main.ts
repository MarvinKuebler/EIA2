

namespace IceDealerReloaded{
    window.addEventListener("load", init);
    
    //Fieldsets
    let Container: HTMLSelectElement = document.createElement("select");
    let ContainerType: HTMLSelectElement = document.createElement("select"); 
    let DeliveryOfChoice: HTMLSelectElement = document.createElement("select");
    var ShoppingBag: HTMLDivElement = document.createElement("div"); 
    let persName: HTMLInputElement = document.createElement("input");
    let persVorname: HTMLInputElement = document.createElement("input");
    let persMail: HTMLInputElement = document.createElement("input"); 
    let persAdresse: HTMLInputElement = document.createElement("input");
    let persPlz: HTMLInputElement = document.createElement("input");
    let CheckButton: HTMLDivElement = document.createElement("div"); 
    
    var WholePrice: number = 0; //Gesamtpreisvariable


    function init(): void {
        
        //Warenkorb 
        let h2: HTMLHeadingElement = document.createElement("h2"); 
        h2.innerText = "That's Your Order"; 
        h2.style.position = "absolute"; 
        h2.style.right = "50px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";
        document.getElementById("ShoppingBasket").appendChild(h2); 
        ShoppingBag.style.display = "inline-block";
        ShoppingBag.style.position = "absolute";
        ShoppingBag.style.right = "10px";
        ShoppingBag.style.top = "10px";
        ShoppingBag.style.width = "250px";
        ShoppingBag.style.height = "250px";
        ShoppingBag.style.backgroundColor = "rgb(200, 235, 215)";
        ShoppingBag.style.paddingTop = "40px";
        ShoppingBag.style.paddingLeft = "10px";
        document.getElementById("ShoppingBasket").appendChild(ShoppingBag); 

        Container.addEventListener("change", CheckFieldset); 
        document.getElementById("Container").appendChild(Container);

        for (let i: number = 0; i < ContainerData.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = ContainerData[i].name; 
            Container.id = ContainerData[i].element; 
            Container.appendChild(option);
        }
         
        ContainerType.addEventListener("change", CheckFieldset);
        document.getElementById("Topping").appendChild(ContainerType);

        for (let i: number = 0; i < TheTopping.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = TheTopping[i].name;
            ContainerType.id = TheTopping[i].element; 
            ContainerType.appendChild(option);
        }
        //ICE        
        for (let i: number = 0; i < IceCreamFlavours.length; i++) {
            let TypeOfIce: HTMLInputElement = document.createElement("input");
            TypeOfIce.type = "checkbox"; 
            TypeOfIce.id = IceCreamFlavours[i].element; 
            TypeOfIce.addEventListener("change", function(): void { 
            });
            document.getElementById("Flavour").appendChild(TypeOfIce);

            let IceLabel: HTMLLabelElement = document.createElement("label");
            IceLabel.innerText = IceCreamFlavours[i].name;
            document.getElementById("Flavour").appendChild(IceLabel);

            let IceCounter: HTMLInputElement = document.createElement("input");
            IceCounter.type = "number"; 
            IceCounter.step = "1";
            IceCounter.min = "0";
            IceCounter.value = "1";
            IceCounter.style.marginRight = "1.5em";
            IceCounter.addEventListener("change", function(): void { 
                TypeOfIce.checked = true; 
                CheckFlavour(TypeOfIce, IceCounter.value);
            });
            document.getElementById("Flavour").appendChild(IceCounter);
        }
        //Side Fruits    
        for (let i: number = 0; i < SideFruits.length; i++) {
            let Fruits: HTMLInputElement = document.createElement("input");
            Fruits.type = "checkbox";
            Fruits.id = SideFruits[i].element;
            Fruits.addEventListener("change", function(): void { 
                CheckSideFruit(Fruits, "1");
            });
                   
            document.getElementById("SideFruit").appendChild(Fruits);

            let FruitsLabel: HTMLLabelElement = document.createElement("label");
            FruitsLabel.innerText = SideFruits[i].name;
            document.getElementById("SideFruit").appendChild(FruitsLabel);

            let NumberOfFruits: HTMLInputElement = document.createElement("input");
            NumberOfFruits.type = "number";
            NumberOfFruits.step = "1";
            NumberOfFruits.min = "0";
            NumberOfFruits.value = "1";
            NumberOfFruits.style.marginRight = "1.5em";
            NumberOfFruits.addEventListener("change", function(): void { 
                Fruits.checked = true; 
                CheckSideFruit(Fruits, NumberOfFruits.value);
            });
            document.getElementById("SideFruit").appendChild(NumberOfFruits);
        }
    
        DeliveryOfChoice.addEventListener("change", CheckFieldset);
        document.getElementById("DeliveryOrPickUp").appendChild(DeliveryOfChoice);

        for (let i: number = 0; i < DeliveryOrPickUp.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = DeliveryOrPickUp[i].name;
            DeliveryOfChoice.id = DeliveryOrPickUp[i].element;
            DeliveryOfChoice.appendChild(option);
        }

        persName.type = "text";
        persName.placeholder = "name";
        persName.required = true;
        persName.style.marginRight = "1em";
        document.getElementById("PersonalData").appendChild(persName);

        persVorname.type = "text";
        persVorname.placeholder = "forename";
        persVorname.required = true;
        persVorname.style.marginRight = "1em";
        document.getElementById("PersonalData").appendChild(persVorname);

        persMail.type = "email"; //Um nutzung von @ vorauszusetzen
        persMail.placeholder = "just give us your email";
        persMail.required = true;
        persMail.style.marginRight = "1em";
        document.getElementById("PersonalData").appendChild(persMail);

        persAdresse.type = "text";
        persAdresse.placeholder = "Adress";
        persAdresse.required = true;
        persAdresse.style.marginRight = "1em";
        document.getElementById("PersonalData").appendChild(persAdresse);

        persPlz.type = "text";
        persPlz.placeholder = "PLZ";
        persPlz.required = true;
        document.getElementById("PersonalData").appendChild(persPlz);

        //Button
        let button: HTMLButtonElement = document.createElement("button");
        button.innerText = "Check Your Order";
        button.addEventListener("click", CheckData);
        button.style.marginTop = "10px";
        document.getElementById("CheckOrder").appendChild(button);
    }

    function CheckFlavour(chkElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < IceCreamFlavours.length; i++) {
            if (IceCreamFlavours[i].element == chkElement.id) {

                Basket(chkElement.id, IceCreamFlavours[i].name, IceCreamFlavours[i].preis, parseInt(anzahl), chkElement.checked);

            }
        }
    }
    function CheckSideFruit(chkElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < SideFruits.length; i++) {
            if (SideFruits[i].element == chkElement.id) {
                Basket(chkElement.id, SideFruits[i].name, SideFruits[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function CheckFieldset(): void {
        var WhatContainerIsIt: string = Container.value; 
        if (WhatContainerIsIt != "") {
            AddToBasket(ContainerData, true, WhatContainerIsIt); 
        }
        else {
            AddToBasket(ContainerData, false, WhatContainerIsIt); 
        }

        var WhatToppingIsIt: string = ContainerType.value;
        if (WhatToppingIsIt != "") {
            AddToBasket(TheTopping, true, WhatToppingIsIt);
        } else {
            AddToBasket(TheTopping, false, WhatToppingIsIt);
        }

        var lieferant: string = DeliveryOfChoice.value;
        if (lieferant != "") {
            AddToBasket(DeliveryOrPickUp, true, lieferant);
        }
    }

    //Preis
    function AddToBasket(daten: IceDealerData[], ischeckt: boolean, elementname: string): void { 

        for (let i: number = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Basket(daten[i].element, elementname, daten[i].preis, 1, ischeckt); 
            }
        }
    }

    function Basket(elementId: string, value: string, preis: number, anzahl: number, selected: boolean): void {

        var ThePrice: number; 
        ThePrice = anzahl * preis;

        
        for (let i: number = 0; i < ShoppingBag.getElementsByTagName("p").length; i++) { 
            if (ShoppingBag.getElementsByTagName("p")[i].id == elementId) { 
                var innerPreis: string = ShoppingBag.getElementsByTagName("p")[i].innerText.split("=")[1]; 
                ShoppingBag.getElementsByTagName("p")[i].remove(); 

                WholePrice = WholePrice - parseInt(innerPreis); 
            }
            
            
            if (ShoppingBag.getElementsByTagName("p")[i].id == "WholePriceid") {
                ShoppingBag.getElementsByTagName("p")[i].remove();
            }
        }

        if (selected) {
            var p: HTMLParagraphElement = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + ThePrice + "€";
            WholePrice = WholePrice + ThePrice; 
            ShoppingBag.appendChild(p);
        }

        //Gesamtpreis 
        var PriceOfAll: HTMLParagraphElement = document.createElement("p");
        PriceOfAll.id = "WholePriceid";
        PriceOfAll.innerText = "WholePrice =  " + WholePrice + "€";
        PriceOfAll.style.position = "absolute";
        PriceOfAll.style.bottom = "0";
        PriceOfAll.style.paddingTop = "10px";
        PriceOfAll.style.borderTop = "2px solid grey";
        ShoppingBag.appendChild(PriceOfAll);
    }
    function CheckData(): void {

        CheckButton.innerText = "";
        if (persName.checkValidity() == false || persVorname.checkValidity() == false || persMail.checkValidity() == false || persPlz.checkValidity() == false || persAdresse.checkValidity() == false) {
            CheckButton.innerText = "You missed something!";
            CheckButton.style.color = "red";
            document.body.appendChild(CheckButton);
        }
        else {
            CheckButton.innerText = "Thanks for your Order!";
            CheckButton.style.color = "green";
            document.body.appendChild(CheckButton);
        }
    }

}