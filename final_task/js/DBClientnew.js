var Aquarium;
(function (Aquarium) {
    let serverAddress = "https://marvinkuebler.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + Aquarium.yournamehere + "&highscore=" + Aquarium.highscore;
        sendRequest(query, handleInsertResponse);
    }
    Aquarium.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    Aquarium.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let ArraySpieler = JSON.parse(xhr.response);
            document.getElementById("playername").innerHTML = "";
            document.getElementById("score").innerHTML = "";
            for (let i = ArraySpieler.length - 5; i < ArraySpieler.length; i++) {
                document.getElementById("playername").innerHTML += `<div>${ArraySpieler[i].name} : ${ArraySpieler[i].highscore} </div>`;
            }
            /* let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson); */
        }
    }
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=DBClientnew.js.map