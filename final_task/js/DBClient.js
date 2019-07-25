var Aquarium;
(function (Aquarium) {
    let serverAddress = "https://marvinkuebler.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&yourname=" + Aquarium.yournamehere + "&highscore=" + Aquarium.highscore;
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
            /*let PlayerArray: AquaHighScore[] = JSON.parse(xhr.response);
            

            document.getElementById("nameID").innerHTML = "";
            document.getElementById("punktestandID").innerHTML = "";


           for (let i: number = PlayerArray.length-8; i < PlayerArray.length; i++) {
    
                document.getElementById("nameID").innerHTML += `<div>${PlayerArray[i].yournamehere} : ${PlayerArray[i].highscore} </div>`;
           }*/
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
})(Aquarium || (Aquarium = {}));
//# sourceMappingURL=DBClient.js.map