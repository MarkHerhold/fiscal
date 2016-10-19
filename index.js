'use strict';

var Quarter = require('./lib/Quarter');
var FiscalYear = require('./lib/FiscalYear');

function getYearDeltaForCalendarMonth(fiscalMonth, monthNum) {
    // if fiscal months match up with calendar, there is never a delta
    if (fiscalMonth === 0) {
        return 0;
    }

    if (monthNum >= fiscalMonth) {
        // we are in the "next" fiscal year as compared to the calendar year
        return 1;
    } else {
        return 0;
    }
}

class Fiscal {
    constructor(fiscalMonth) {
        this.fiscalMonth = fiscalMonth;
    }

    getFiscalInfoForDate(date) {
        date = date || new Date(); // optional parameter

        var fiscalYear = date.getFullYear() + getYearDeltaForCalendarMonth(this.fiscalMonth, date.getMonth());

        var fy = new FiscalYear(fiscalYear, this.fiscalMonth);
        var quarter = new Quarter(fy, date.getMonth());

        return {
            fiscalYear: fy,
            quarter: quarter,
            calendar: {
                calendarMonth: date.getMonth(),
                calendarYear: date.getFullYear()
            }
        };
    }
}

module.exports = Fiscal;
