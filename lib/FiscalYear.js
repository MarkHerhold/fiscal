'use strict';

class FiscalYear {
    /*
     * @param fiscalYear: The fiscal year integer
     * @param fiscalMonth: The calendar month that this fiscal year starts on
     */
    constructor(fiscalYear, fiscalMonth) {
        this.fiscalYear = fiscalYear;
        this.fiscalMonth = fiscalMonth;
    }

    // Returns the calendar date of the start of the fiscal year
    get startDate() {
        var tmp;
        if (this.fiscalMonth === 0) {
            // TODO test this case
            tmp = new Date(this.fiscalYear, this.fiscalMonth);
        } else {
            tmp = new Date(this.fiscalYear - 1, this.fiscalMonth);
        }

        return tmp;
    }

    // Returns the calendar date of the end of the fiscal year
    get endDate() {
        return new Date(this.fiscalYear, this.fiscalMonth, 0, 23, 59, 59, 999);
    }

    // Returns an instance of FiscalYear representing the one prior to the current
    previous() {
        return new FiscalYear(this.fiscalYear - 1, this.fiscalMonth);
    }

    // Returns an instance of FiscalYear representing the one after the current
    next() {
        return new FiscalYear(this.fiscalYear + 1, this.fiscalMonth);
    }
}

module.exports = FiscalYear;
