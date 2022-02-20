import { Fiscal } from '../src/index'
describe('Testing Fiscal Edgy Dates', function () {
    it('fiscal year starting JAN: tests Date(2020, 0, 1) i.e. 1st JAN 2020 has expected fiscal startDate and endDates', function () {
        const utcTestDate = new Date(2020, 0, 1); // 1 JAN 2020
        const fiscal = new Fiscal(0);
        const testDateFiscalInfo = fiscal.getFiscalInfoForDate(utcTestDate);

        expect(testDateFiscalInfo.fiscalYear.startDate.toISOString()).toEqual('2020-01-01T00:00:00.000Z');
        expect(testDateFiscalInfo.fiscalYear.endDate.toISOString()).toEqual('2020-12-31T23:59:59.999Z');
    });
    it('fiscal year starting JAN: tests Date(2020, 11, 31) i.e. 31st DEC 2020 has expected fiscal startDate and endDates', function () {
        const utcTestDate = new Date(2020, 11, 31); // 31 DEC 2020
        const fiscal = new Fiscal(0);
        const testDateFiscalInfo = fiscal.getFiscalInfoForDate(utcTestDate);

        expect(testDateFiscalInfo.fiscalYear.startDate.toISOString()).toEqual('2020-01-01T00:00:00.000Z');
        expect(testDateFiscalInfo.fiscalYear.endDate.toISOString()).toEqual('2020-12-31T23:59:59.999Z');
    });
    it('fiscal year starting DEC: tests Date(2020, 0, 1) i.e. 1st JAN 2020 has expected fiscal startDate and endDates', function () {
        const utcTestDate = new Date(2020, 0, 1); // 1 JAN 2020
        const fiscal = new Fiscal(11);
        const testDateFiscalInfo = fiscal.getFiscalInfoForDate(utcTestDate);

        expect(testDateFiscalInfo.fiscalYear.startDate.toISOString()).toEqual('2019-12-01T00:00:00.000Z');
        expect(testDateFiscalInfo.fiscalYear.endDate.toISOString()).toEqual('2020-11-30T23:59:59.999Z');
    });
    it('fiscal year starting MAR: tests Date(2020, 1, 29) i.e. 29 FEB 2020 has expected fiscal startDate and endDates', function () {
        const utcTestDate = new Date(2020, 1, 29); // 29 FEB 2020
        const fiscal = new Fiscal(2);
        const testDateFiscalInfo = fiscal.getFiscalInfoForDate(utcTestDate);

        expect(testDateFiscalInfo.fiscalYear.startDate.toISOString()).toEqual('2019-03-01T00:00:00.000Z');
        expect(testDateFiscalInfo.fiscalYear.endDate.toISOString()).toEqual('2020-02-29T23:59:59.999Z');
    });
    it('fiscal year starting AUG: tests Date(2020, 7, 31) i.e. 31 AUG 2020 has expected fiscal startDate and endDates', function () {
        const utcTestDate = new Date(2020, 7, 31); // 31 AUG 2020
        const fiscal = new Fiscal(7);
        const testDateFiscalInfo = fiscal.getFiscalInfoForDate(utcTestDate);

        expect(testDateFiscalInfo.fiscalYear.startDate.toISOString()).toEqual('2020-08-01T00:00:00.000Z');
        expect(testDateFiscalInfo.fiscalYear.endDate.toISOString()).toEqual('2021-07-31T23:59:59.999Z');
    });
});
