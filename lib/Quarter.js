'use strict';

/*
 * Creates a map of the calendar months (0 indexed) that map to the quarters
 * This is a "private" function.
 */
function createQuarterMap(fiscalMonth) {
    var quarterMap = {};
    for (var monthCount = fiscalMonth; monthCount < fiscalMonth + 12; monthCount++) {
        var monthNum = monthCount % 12; // calendar month num 0 - 11 inclusive
        if (monthCount < fiscalMonth + 3) {
            quarterMap[monthNum] = {
                quarterNum: 1,
                quarterStr: 'Q1'
            };
        } else if (monthCount < fiscalMonth + 6) {
            quarterMap[monthNum] = {
                quarterNum: 2,
                quarterStr: 'Q2'
            };
        } else if (monthCount < fiscalMonth + 9) {
            quarterMap[monthNum] = {
                quarterNum: 3,
                quarterStr: 'Q3'
            };
        } else {
            quarterMap[monthNum] = {
                quarterNum: 4,
                quarterStr: 'Q4'
            };
        }
    }
    return quarterMap;
}

class Quarter {
    /*
     * Quarter - Represents an single quarter and contains information about it
     * @param fiscalYearInstance: The fiscal year that the quarter is in (FiscalYear class instance)
     * @param month: The calendar month in the quarter (0 - 11)
     */
    constructor(fy, month) {
        this.fy = fy;
        this._month = month;
        this._quarterMap = createQuarterMap(this.fy.fiscalMonth);
    }

    // Returns the quarter number (1 - 4)
    get number() {
        return this._quarterMap[this._month].quarterNum;
    }

    // Returns the quarter as a string (Q1, Q2, Q3, Q4)
    get string() {
        return this._quarterMap[this._month].quarterStr;
    }

    // Returns the start of this quarter represented as a calendar date
    get startDate() {
        return new Date(this.fy.startDate.getFullYear(), this.fy.fiscalMonth + ((this.number - 1) * 3));
    }

    // Returns the end of this quarter represented as a calendar date
    get endDate() {
        return new Date(this.fy.startDate.getFullYear(), this.fy.fiscalMonth + (this.number * 3), 0);
    }

    previous() {
        var tmpFY = this.fy;
        var tmpMonth = this._month;
        if (this.number === 1) {
            tmpFY = this.fy.previous();
        }

        // subtracting three months will cause the months to wrap
        // handle the reverse-wrap around case
        if (tmpMonth <= 2) {
            // subtract 2 because months are 0 indexed
            // 12 + (2 - 3) --> 11 aka December
            // 12 + (1 - 3) --> 10 aka November
            // 12 + (0 - 3) --> 9 aka October
            tmpMonth = 12 + (tmpMonth - 3);
        } else {
            tmpMonth -= 3;
        }

        return new Quarter(tmpFY, tmpMonth);
    }

    next() {
        var tmpFY = this.fy;
        var tmpMonth = this._month;
        if (this.number === 4) {
            tmpFY = this.fy.next();
        }

        // subtracting three months will cause the months to wrap
        // handle the reverse-wrap around case
        if (tmpMonth >= 9) {
            // subtract 2 because months are 0 indexed
            // (9 + 3) - 12 --> 0 aka January
            // (10 + 3) - 12 --> 1 aka Feburary
            // (11 + 3) - 12 --> 2 aka March
            tmpMonth = (tmpMonth + 3) - 12;
        } else {
            tmpMonth += 3;
        }

        return new Quarter(tmpFY, tmpMonth);
    }
}

module.exports = Quarter;
