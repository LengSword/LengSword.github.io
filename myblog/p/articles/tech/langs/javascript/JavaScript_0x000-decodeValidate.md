## **JavaScript_0x000-decodeValidate**

```javascript
/**
 * decodeValidate.js - Decode website(http://jwc.wyu.edu.cn/student/)'s validate code.
 * author: LengSword
 * version: 1.0.0
 * License: MIT
 */

const codeTable1 = {
    '0' : '28',
    '1' : '29',
    '2' : '2A',
    '3' : '2B',
    '4' : '2C',
    '5' : '2D',
    '6' : '2E',
    '7' : '2F',
    '8' : '+'
};

const codeTable2 = {
    '0' : '14',
    '1' : '15',
    '2' : '16',
    '3' : '17',
    '4' : '10',
    '5' : '11',
    '6' : '12',
    '7' : '13',
    '8' : '1C'
};

const codeTable3 = codeTable1;

const codeTable4 = {
    '0' : 't',
    '1' : 'u',
    '2' : 'v',
    '3' : 'w',
    '4' : 'p',
    '5' : 'q',
    '6' : 'r',
    '7' : 's',
    '8' : '7C'
};

function getDecodingTable (id) {
    var decodingTable = {};

    switch (id)
    {
    case 0:
        for(var key in codeTable1) {
            decodingTable[codeTable1[key]] = key;
        }
        return decodingTable;
        break;
    case 1:
        for(var key2 in codeTable2) {
            decodingTable[codeTable2[key2]] = key2;
        }
        return decodingTable;
        break;
    case 2:
        for(var key3 in codeTable3) {
            decodingTable[codeTable3[key3]] = key3;
        }
        return decodingTable;
        break;
    case 3:
        for(var key4 in codeTable4) {
            decodingTable[codeTable4[key4]] = key4;
        }
        return decodingTable;
        break;
    default:
        console.log("Error");
    }
}

function decodeValidate (code) {
    var string = code;
    var hexs = [];

    var j = 0;

    for(var i = 0; i < string.length; i++){
        if(string[i] == "%"){
            var tmp = string[++i] + string[++i];
            hexs = hexs + getDecodingTable(j)[tmp];
        } else {
            var tmp2 = string[i];
            hexs = hexs + getDecodingTable(j)[tmp2];
        }
        j++;
    }
    return hexs;
}

//网上的代码
function getCookie(name) {
    var strcookie = document.cookie;//获取cookie字符串
    var arrcookie = strcookie.split("; ");//分割
    //遍历匹配
    for ( var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name){
            return arr[1];
        }
    }
    return "";
}

//调用下面这个表达式即可返回解密后的验证码
decodeValidate(getCookie("LogonNumber"));

```
