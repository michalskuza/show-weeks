var moment = require('moment');

function displayWeeks(start, n) {

    function format(date){
        return date.format("DD.MM.YYYY")
    }

    for (var i = 0; i < n; i++) {
        console.log('#' + moment(start).day(1 + 7 * i).isoWeek() + ': ' + format(moment(start).day(7 * i + 1)) + ' - ' + format(moment(start).day(7 * i + 7)));
    }
}

var start = new Date(2016, 6, 20)

var n = 5;

displayWeeks(start, n);
