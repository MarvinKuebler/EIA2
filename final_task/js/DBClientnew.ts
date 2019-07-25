
namespace Aquarium {

    let serverAddress: string = "https://marvinkuebler.herokuapp.com/";

    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + yournamehere  + "&highscore=" + highscore ;
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let ArraySpieler: AquaHighScore[] = JSON.parse(xhr.response);
            

            document.getElementById("playername").innerHTML = "";
            document.getElementById("score").innerHTML = "";


            for (let i: number = ArraySpieler.length-5; i < ArraySpieler.length; i++) {
    
                document.getElementById("playername").innerHTML += `<div>${ArraySpieler[i].name} : ${ArraySpieler[i].highscore} </div>`;
            }

            /* let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson); */
        }
    }
}

