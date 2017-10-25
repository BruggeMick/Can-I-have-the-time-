function tellTime(hour, minute, period) {
    var output = "It's ";
    if (minute > 30) {
        output += 'almost ';
        output += hour + 1;
    }
    else if (minute < 30) {
        if(minute > 0){
            output += 'just after ';
        }
        output += hour;
    }

    if (period == 'AM') {
        output += ' in the morning.';
    } else {
        output += ' in the evening.';
    }

    return output;
}

var result = tellTime(8,50,"AM");
console.log(result);

////////*******Thanks for the help, Coach!
