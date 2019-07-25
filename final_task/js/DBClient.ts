
namespace Aquarium {

    let serverAddress: string = "https://marvinkuebler.herokuapp.com/";


    export function insert(): void {
        let query: string = "command=insert";
        query += "&yourname=" + yournamehere + "&highscore=" + highscore;
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
            
            /*let PlayerArray: AquaHighScore[] = JSON.parse(xhr.response);
            

            document.getElementById("nameID").innerHTML = "";
            document.getElementById("punktestandID").innerHTML = "";


           for (let i: number = PlayerArray.length-8; i < PlayerArray.length; i++) {
    
                document.getElementById("nameID").innerHTML += `<div>${PlayerArray[i].yournamehere} : ${PlayerArray[i].highscore} </div>`;
           }*/

             let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
    }
}



