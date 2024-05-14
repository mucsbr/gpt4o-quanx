/*

for gpt4o

[rewrite_local]

^https://ab.chatgpt.com/v1/ url script-response-body https://raw.githubusercontent.com/mucsbr/gpt4o-quanx/main/gpt4o.js

[mitm]

hostname = ab.chatgpt.com

*/

function setAllFalseValuesToTrue(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            setAllFalseValuesToTrue(obj[key]);
        } else if (key === 'value' && obj[key] === false) {
            obj[key] = true;
        } else if (key === 'gateValue' && obj[key] === 'false') {
            obj[key] = 'true';
        }
    }
}

var mock = JSON.parse($response.body);
setAllFalseValuesToTrue(mock)
$done({body:JSON.stringify(mock)});
