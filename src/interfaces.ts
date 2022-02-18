import { IFiscalYear } from './lib/FiscalYear';
import { IFiscalQuarter } from './lib/Quarter';

export interface FiscalInfo {
  fiscalYear: IFiscalYear;
  quarter: IFiscalQuarter;
  calendar: {
    calendarMonth: number;
    calendarYear: number;
  };
}
