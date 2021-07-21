/**
 * Ajax-Async-Callback-Promise
 */

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function showTime() {
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins:" + date.getSeconds() + "Secs:";
}

function makeAJAXCall(methoType, url, callback, async = true, data = null) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log("State Changed Called. Ready State: " + xhr.readyState + " Status" + xhr.status);
        if (xhr.readyState === 4) {
            //matching all 200 Series Responces
            if (xhr.status === 200 || xhr.status === 201) {
                callback(xhr.responseText);
            } else if (xhr.status >= 400) {
                console.log("Handle 400 Client Error or 500 Server Error")
            }
        }
    }

    xhr.open(methoType, url, async);
    if (data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    } else xhr.send();
    console.log(methoType + " request sent to the server at: " + showTime());
}

const getURL = "http://127.0.0.1:3000/employee/";

function getUserDetails(data) {
    console.log("Get User Data at: " + showTime() + " data: " + data);
}

makeAJAXCall("GET", getURL, getUserDetails, true);
console.log("Made GET AJAX Call to Server at: " + showTime());

const deleteURL = "http://127.0.0.1:3000/employee/2";
function userDeleted(data){
    console.log("User Deleted at:" + showTime() + " data: " + data);
}
makeAJAXCall("DELETE", deleteURL, userDeleted, false);

const postURL = "http://127.0.0.1:3000/employee";
const emplData = {"name": "Harry","salary": "30000"};
function userAdded(data){
    console.log("User Added at:" + showTime() + " data: " + data);
}
makeAJAXCall("POST", postURL, userAdded, true, emplData);
//curl Request:  curl -X GET -H "Content-Type: application/json" "http://127.0.0.1:3000/employee/" -w "\n"