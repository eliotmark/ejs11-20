function firstLast6(arr){
    var nums = "";
    if(arr[0] == 6 || arr[arr.length-1] == 6){
        var nums = true;
    }else{
        var nums = false;
    }
    return nums;
}

function has23(arr){
    for(var i=0; i<2; i++){
        if(arr[i] == 2 || arr[i] == 3){
            return true;
        }
    }
    return false;
}

function fix23(arr){
    for(var i=0; i<arr.length-1; i++){
        if(arr[i] == 2 && arr[i+1] == 3){
            arr[i+1] = 0;
        }
    }
    return arr;
}

function countYZ(str){
    var strL = str.toLowerCase();
    var count = 0;
    for(var i=0; i<strL.length-1; i++) {
        if (strL.substring(i, i + 1) == "y" && strL.substring(i + 1, i + 2) == " ") {
            count += 1;
        }
    }
    for(var i=0; i<strL.length-1; i++){
        if (strL.substring(i, i+1) == "z" && strL.substring(i+1, i+2) == " ") {
            count += 1;
        }
    }
    if(strL.substring(strL.length-1, strL.length) == "y" || strL.substring(strL.length-1, strL.length) == "z"){
        count += 1;
    }
    return count;
}

function endOther(str1, str2) {
    var ret = false;
    var str1L = str1.toLowerCase();
    var str2L = str2.toLowerCase();
    if (str1L.length > str2L.length) {
        var str1LSubstring = str1L.substring(str1L.length - str2L.length, str1L.length);
        if(str1LSubstring == str2L) {
            ret = true;
        }
    }else if (str1L.length < str2L.length) {
        var str2LSubstring = str2L.substring(str2L.length - str1L.length, str2L.length);
        if(str2LSubstring == str1L) {
            ret = true;
        }
    }else if(str1L == str2L){
        return true;
    }else{
        ret = false;
    }
    return ret;
}

function starOut(str){
    var newstr = "";
    for(var i = 0; i<str.length; i++) {
        if (str[i] != "*" && str[i+1] != "*" && str[i-1] != "*") {
            newstr += str[i];
        }
    }
    return newstr;
}

function getSandwich(str){
    var newstr = "";
    var bread1 = str.indexOf("bread");
    var bread2 = str.lastIndexOf("bread");
    var breadLength = 5;
    if(bread1 != bread2){
        newstr += str.substring(bread1 + breadLength, bread2);
    }
    return newstr;
}

function canBalance(arr){
    var outerSum = 0;
    var innerSum = 0;
    for(var i=0; i<arr.length; i++){
        outerSum += arr[i];
        for(var e=i+1; e<arr.length; e++){
            innerSum += arr[e];
        }
        if(outerSum == innerSum){
            return true;
        }
        innerSum = 0;
    }
    return false;
}

function countClumps(arr){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == arr[i+1] && arr[i] != arr[i-1]){
            count += 1;
        }
    }
    return count;
}

function evenlySpaced(int1, int2, int3){
    var abs1 = Math.abs(int1);
    var abs2 = Math.abs(int2);
    var abs3 = Math.abs(int3);
    if(abs2 - abs1 == abs3 - abs2){
        return true;
    }
    if(abs1 - abs3 == abs2 - abs1){
        return true;
    }
    if(abs3 - abs2 == abs1 - abs3){
        return true;
    }
    return false;
}

function tester() {
    document.getElementById("output").innerHTML += firstLast6([6, 4, 3]);
    document.getElementById("output").innerHTML += has23([2, 5]);
    document.getElementById("output").innerHTML += fix23([4, 2, 3]);
    document.getElementById("output").innerHTML += countYZ("fizz house buy");
    document.getElementById("output").innerHTML += endOther("Hiya", "Helloya");
    document.getElementById("output").innerHTML += starOut("Eli*iiot");
    document.getElementById("output").innerHTML += getSandwich("breadEliotbread");
    document.getElementById("output").innerHTML += canBalance([2, 2, 4]);
    document.getElementById("output").innerHTML += countClumps([2, 2, 4, 4, 4]);
    document.getElementById("output").innerHTML += evenlySpaced(5, 10, 15);
}