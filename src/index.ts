import { FiscalInfo } from './interfaces';
import { Quarter } from './lib/Quarter';
import { FiscalYear } from './lib/FiscalYear';

function getYearDeltaForCalendarMonth(fiscalMonth: number, monthNum: number) {
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

export class Fiscal {
  fiscalMonth: number;
  constructor(fiscalMonth: number) {
    this.fiscalMonth = fiscalMonth;
  }

  getFiscalInfoForDate(date: Date): FiscalInfo {
    date = date || new Date(); // optional parameter

    const fiscalYear = date.getFullYear() + getYearDeltaForCalendarMonth(this.fiscalMonth, date.getMonth());

    const fy = new FiscalYear(fiscalYear, this.fiscalMonth);
    const quarter = new Quarter(fy, date.getMonth());

    return {
      fiscalYear: fy,
      quarter,
      calendar: {
        calendarMonth: date.getMonth(),
        calendarYear: date.getFullYear(),
      },
    };
  }
}
