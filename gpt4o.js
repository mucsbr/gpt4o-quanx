/*

for chenjian??

[rewrite_local]

^^https://ab.chatgpt.com/v1/ url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/WPSOffice.js

[mitm]

hostname = ab.chatgpt.com

*/

function setAllFalseValuesToTrue(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // 如果是对象，就递归处理
            setAllFalseValuesToTrue(obj[key]);
        } else if (key === 'value' && obj[key] === false) {
            // 找到了匹配的key-value对，修改它
            obj[key] = true;
        } else if (key === 'gateValue' && obj[key] === 'false') {
            // 找到了匹配的key-value对，修改它
            obj[key] = 'true';
        }
    }
}

var mock = JSON.parse($response.body);
setAllFalseValuesToTrue(mock)
$done({body:JSON.stringify(mock)});