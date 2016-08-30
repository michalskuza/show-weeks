var moment = require('moment');

function displayWeeks(start, end, n) {

    function format(date){
        return date.format("DD.MM.YYYY")
    }

    for (var i = 0; i < n; i++) {
        console.log('#' + moment(start).add(7 * i, 'days').isoWeek() + ': ' + format(moment(start).add(7 * i, 'days')) + ' - ' + format(moment(end).add(7 * i, 'days')));
    }
}

var start = new Date(2016, 6, 18)
var end = new Date(2016, 6, 24)

var n = 5;

displayWeeks(start, end, n);
