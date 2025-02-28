let off = 0;
let res = "";
for(let i = 2176; i <= 16511; i++) {
    if(off % 20 == 0) res += "\n";
    res += String.fromCodePoint(i);
}
for(let i = 67712; i <= 1114111; i++) {
    if(off % 20 == 0) res += "\n";
    res += String.fromCodePoint(i);
}
copy(res);
