function formatAMPM(date){
    var hours = date.getHours();
    var minutes = date.getMinutes();   
    var ampm = hours >= 12 ? 'pm':'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime =hours + ':' + minutes + '' + ampm;
    return strTime;
}
console.log(formatAMPM(new Date));

function removeFirstAndLastCharacter(str) {
    return str.slice(1, -1);
}
var inputString = "HANA";
var modifiedString = removeFirstAndLastCharacter(inputString);
console.log(modifiedString); 
