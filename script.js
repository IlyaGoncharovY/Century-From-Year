function century(year) {
    let x = Math.floor(year / 100);
    if (year % 100 === 0)
        return x;
    else return x + 1;
}
