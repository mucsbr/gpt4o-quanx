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
            // ����Ƕ��󣬾͵ݹ鴦��
            setAllFalseValuesToTrue(obj[key]);
        } else if (key === 'value' && obj[key] === false) {
            // �ҵ���ƥ���key-value�ԣ��޸���
            obj[key] = true;
        } else if (key === 'gateValue' && obj[key] === 'false') {
            // �ҵ���ƥ���key-value�ԣ��޸���
            obj[key] = 'true';
        }
    }
}

var mock = JSON.parse($response.body);
setAllFalseValuesToTrue(mock)
$done({body:JSON.stringify(mock)});