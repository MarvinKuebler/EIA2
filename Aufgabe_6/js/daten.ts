namespace IceDealerReloaded {

    export interface IceDealerData {
        Alias: string;
        price: number;
        inputtype: string;
    }

    export interface KeyArray {
        [datenArray: string]: IceDealerData[];
    }

    export let sortimentArray: KeyArray = {
        "eisSorten": [
            { Alias: "White Choclate", price: 1, inputtype: "number" },
            { Alias: "Choclate", price: 1, inputtype: "number" },
            { Alias: "Strawberry-Mango", price: 1, inputtype: "number" },
            { Alias: "Stracciatella", price: 1, inputtype: "number" },
            { Alias: "Oreo", price: 1, inputtype: "number" },
            { Alias: "Hazelnut", price: 1, inputtype: "number" },
            { Alias: "Banana-Split", price: 1, inputtype: "number" }
        ],

        "behaelter": [
            { Alias: "Waffle", price: 0, inputtype: "radio" },
            { Alias: "Cup", price: 0, inputtype: "radio" }
        ],

        "toppingSorten": [
            { Alias: "Oreo", price: 1, inputtype: "number" },
            { Alias: "Choclate-Cream", price: 1, inputtype: "number" },
            { Alias: "Bounty", price: 1, inputtype: "number" },
            { Alias: "Mixed Fruits", price: 1, inputtype: "number" }
        ],


    };
}