let advantageSum = 0; let advantagePercentageSum = 0; let count = 1114112;
for(let i = 0; i < count; i++) {
    let utf8, utf4;
    if(0 <= i && i <= 127) {
        utf8 = utf4 = 1;
    } else if(i <= 2175) {
        utf8 = utf4 = 2;
    } else if(i <= 16511) {
        utf8 = 3;
        utf4 = 2;
    } else if(i <= 67711) {
        utf8 = utf4 = 3;
    } else if(i <= 2164863) {
        utf8 = 4;
        utf4 = 3;
    } else if(i <= 4210815) {
        utf8 = 5;
        utf4 = 3;
    } else throw new Error();
    advantageSum += utf4 - utf8;
    advantagePercentageSum += 1-utf4/utf8
}
console.log(advantageSum / count, -advantagePercentageSum/count*100);
