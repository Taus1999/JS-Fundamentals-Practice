var bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
var tips = new Array();
var totals = new Array();

/*
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.     
*/
function calcTip(bill) {
    return bill>=50 && bill<=300 ? (bill*0.15) : (bill*0.2);
    
}
for(let i=0; i<bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

function calcAverage(arr) {
    let sum=0;
    for(let j=0; j<arr.length; j++) {
        sum += arr[j];
    }
    return sum/arr.length;
}

console.log("Bills:");
console.table(bills);
console.log("Tips:");
console.table(tips);
console.log("Totals:");
console.table(totals);

let average = calcAverage(totals);
console.log("Average:");
console.log(average);


