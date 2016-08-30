var moment = require('moment');

function format(date) {
    return date.format("DD.MM.YYYY")
}

function displayWeeks(start, n) {
    for (var i = 0; i < n; i++) {
        console.log('#' + moment(start).day(1 + 7 * i).isoWeek() + ': ' + format(moment(start).day(7 * i + 1)) + ' - ' + format(moment(start).day(7 * i + 7)));
    }
}

function getWeeks(start, n) {
    var arr = [];

    for (var i = 0; i < n; i++) {
        arr.push({
            'no': moment(start).day(1 + 7 * i).isoWeek(),
            'monday': format(moment(start).day(7 * i + 1)),
            'sunday': format(moment(start).day(7 * i + 7))
        })
    }

    return arr;
}

var start = new Date(2016, 6, 20)

var n = 5;

displayWeeks(start, n);