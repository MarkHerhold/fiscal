export interface IFiscalYear {
  fiscalYear: number;
  fiscalMonth: number;
  startDate: Date;
  endDate: Date;
  previous: () => IFiscalYear;
  next: () => IFiscalYear;
}

export class FiscalYear implements IFiscalYear {
  fiscalYear: number;
  fiscalMonth: number;
  /*
   * @param fiscalYear: The fiscal year integer
   * @param fiscalMonth: The calendar month that this fiscal year starts on
   */
  constructor(fiscalYear: number, fiscalMonth: number) {
    this.fiscalYear = fiscalYear;
    this.fiscalMonth = fiscalMonth;
  }

  // Returns the calendar date of the start of the fiscal year
  get startDate() {
    // if fiscal month is 0 (JAN), then start date's year must be THIS year.
    if (this.fiscalMonth === 0) {
      return new Date(this.fiscalYear, this.fiscalMonth);
    } else {
      return new Date(this.fiscalYear - 1, this.fiscalMonth);
    }
  }

  // Returns the calendar date of the end of the fiscal year
  get endDate() {
    // if fiscal month is 0 (JAN), then end date's year must be THIS year.
    // NB: if Date's day is zero it is previous month. It would therefore tip back a year, hence the  + 1 year
    if (this.fiscalMonth === 0) {
      return new Date(this.fiscalYear + 1, this.fiscalMonth, 0, 23, 59, 59, 999);
    } else {
      return new Date(this.fiscalYear, this.fiscalMonth, 0, 23, 59, 59, 999);
    }
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
