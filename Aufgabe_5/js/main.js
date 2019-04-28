var IceDealerReloaded;
(function (IceDealerReloaded) {
    window.addEventListener("load", init);
    //Fieldsets
    let Container = document.createElement("select");
    let ContainerType = document.createElement("select");
    let DeliveryOfChoice = document.createElement("select");
    var ShoppingBag = document.createElement("div");
    let persName = document.createElement("input");
    let persVorname = document.createElement("input");
    let persMail = document.createElement("input");
    let persAdresse = document.createElement("input");
    let persPlz = document.createElement("input");
    let CheckButton = document.createElement("div");
    var WholePrice = 0; //Gesamtpreisvariable
    function init() {
        //Warenkorb 
        let h2 = document.createElement("h2");
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
        for (let i = 0; i < IceDealerReloaded.ContainerData.length; i++) {
            let option = document.createElement("option");
            option.innerText = IceDealerReloaded.ContainerData[i].name;
            Container.id = IceDealerReloaded.ContainerData[i].element;
            Container.appendChild(option);
        }
        ContainerType.addEventListener("change", CheckFieldset);
        document.getElementById("Topping").appendChild(ContainerType);
        for (let i = 0; i < IceDealerReloaded.TheTopping.length; i++) {
            let option = document.createElement("option");
            option.innerText = IceDealerReloaded.TheTopping[i].name;
            ContainerType.id = IceDealerReloaded.TheTopping[i].element;
            ContainerType.appendChild(option);
        }
        //ICE        
        for (let i = 0; i < IceDealerReloaded.IceCreamFlavours.length; i++) {
            let TypeOfIce = document.createElement("input");
            TypeOfIce.type = "checkbox";
            TypeOfIce.id = IceDealerReloaded.IceCreamFlavours[i].element;
            TypeOfIce.addEventListener("change", function () {
            });
            document.getElementById("Flavour").appendChild(TypeOfIce);
            let IceLabel = document.createElement("label");
            IceLabel.innerText = IceDealerReloaded.IceCreamFlavours[i].name;
            document.getElementById("Flavour").appendChild(IceLabel);
            let IceCounter = document.createElement("input");
            IceCounter.type = "number";
            IceCounter.step = "1";
            IceCounter.min = "0";
            IceCounter.value = "1";
            IceCounter.style.marginRight = "1.5em";
            IceCounter.addEventListener("change", function () {
                TypeOfIce.checked = true;
                CheckFlavour(TypeOfIce, IceCounter.value);
            });
            document.getElementById("Flavour").appendChild(IceCounter);
        }
        //Side Fruits    
        for (let i = 0; i < IceDealerReloaded.SideFruits.length; i++) {
            let Fruits = document.createElement("input");
            Fruits.type = "checkbox";
            Fruits.id = IceDealerReloaded.SideFruits[i].element;
            Fruits.addEventListener("change", function () {
                CheckSideFruit(Fruits, "1");
            });
            document.getElementById("SideFruit").appendChild(Fruits);
            let FruitsLabel = document.createElement("label");
            FruitsLabel.innerText = IceDealerReloaded.SideFruits[i].name;
            document.getElementById("SideFruit").appendChild(FruitsLabel);
            let NumberOfFruits = document.createElement("input");
            NumberOfFruits.type = "number";
            NumberOfFruits.step = "1";
            NumberOfFruits.min = "0";
            NumberOfFruits.value = "1";
            NumberOfFruits.style.marginRight = "1.5em";
            NumberOfFruits.addEventListener("change", function () {
                Fruits.checked = true;
                CheckSideFruit(Fruits, NumberOfFruits.value);
            });
            document.getElementById("SideFruit").appendChild(NumberOfFruits);
        }
        DeliveryOfChoice.addEventListener("change", CheckFieldset);
        document.getElementById("DeliveryOrPickUp").appendChild(DeliveryOfChoice);
        for (let i = 0; i < IceDealerReloaded.DeliveryOrPickUp.length; i++) {
            let option = document.createElement("option");
            option.innerText = IceDealerReloaded.DeliveryOrPickUp[i].name;
            DeliveryOfChoice.id = IceDealerReloaded.DeliveryOrPickUp[i].element;
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
        let button = document.createElement("button");
        button.innerText = "Check Your Order";
        button.addEventListener("click", CheckData);
        button.style.marginTop = "10px";
        document.getElementById("CheckOrder").appendChild(button);
    }
    function CheckFlavour(chkElement, anzahl) {
        for (let i = 0; i < IceDealerReloaded.IceCreamFlavours.length; i++) {
            if (IceDealerReloaded.IceCreamFlavours[i].element == chkElement.id) {
                Basket(chkElement.id, IceDealerReloaded.IceCreamFlavours[i].name, IceDealerReloaded.IceCreamFlavours[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function CheckSideFruit(chkElement, anzahl) {
        for (let i = 0; i < IceDealerReloaded.SideFruits.length; i++) {
            if (IceDealerReloaded.SideFruits[i].element == chkElement.id) {
                Basket(chkElement.id, IceDealerReloaded.SideFruits[i].name, IceDealerReloaded.SideFruits[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function CheckFieldset() {
        var WhatContainerIsIt = Container.value;
        if (WhatContainerIsIt != "") {
            AddToBasket(IceDealerReloaded.ContainerData, true, WhatContainerIsIt);
        }
        else {
            AddToBasket(IceDealerReloaded.ContainerData, false, WhatContainerIsIt);
        }
        var WhatToppingIsIt = ContainerType.value;
        if (WhatToppingIsIt != "") {
            AddToBasket(IceDealerReloaded.TheTopping, true, WhatToppingIsIt);
        }
        else {
            AddToBasket(IceDealerReloaded.TheTopping, false, WhatToppingIsIt);
        }
        var lieferant = DeliveryOfChoice.value;
        if (lieferant != "") {
            AddToBasket(IceDealerReloaded.DeliveryOrPickUp, true, lieferant);
        }
    }
    //Preis
    function AddToBasket(daten, ischeckt, elementname) {
        for (let i = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Basket(daten[i].element, elementname, daten[i].preis, 1, ischeckt);
            }
        }
    }
    function Basket(elementId, value, preis, anzahl, selected) {
        var ThePrice;
        ThePrice = anzahl * preis;
        for (let i = 0; i < ShoppingBag.getElementsByTagName("p").length; i++) {
            if (ShoppingBag.getElementsByTagName("p")[i].id == elementId) {
                var innerPreis = ShoppingBag.getElementsByTagName("p")[i].innerText.split("=")[1];
                ShoppingBag.getElementsByTagName("p")[i].remove();
                WholePrice = WholePrice - parseInt(innerPreis);
            }
            if (ShoppingBag.getElementsByTagName("p")[i].id == "WholePriceid") {
                ShoppingBag.getElementsByTagName("p")[i].remove();
            }
        }
        if (selected) {
            var p = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + ThePrice + "€";
            WholePrice = WholePrice + ThePrice;
            ShoppingBag.appendChild(p);
        }
        //Gesamtpreis 
        var PriceOfAll = document.createElement("p");
        PriceOfAll.id = "WholePriceid";
        PriceOfAll.innerText = "WholePrice =  " + WholePrice + "€";
        PriceOfAll.style.position = "absolute";
        PriceOfAll.style.bottom = "0";
        PriceOfAll.style.paddingTop = "10px";
        PriceOfAll.style.borderTop = "2px solid grey";
        ShoppingBag.appendChild(PriceOfAll);
    }
    function CheckData() {
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
})(IceDealerReloaded || (IceDealerReloaded = {}));
//# sourceMappingURL=main.js.map