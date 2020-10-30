"use strict";
var str = '123';
console.log(str);
console.log(str);
console.log(str);
console.log(str);
console.log(str);
console.log(str + 1);
console.log(str + 2);
console.log(str + 3);
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Gril"] = 2] = "Gril";
    Gender[Gender["Unknown"] = 3] = "Unknown";
})(Gender || (Gender = {}));
console.log(Gender.Boy);
