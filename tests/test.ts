import { Fiscal } from '../src/index'


describe('fiscal', function () {
    it('should check a Jan 2015 date', function () {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 0));

        expect(data.fiscalYear.fiscalYear).toEqual(2015);
        expect(data.fiscalYear.startDate).toEqual(new Date(2014, 9));
        expect(data.fiscalYear.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).toEqual(new Date(2013, 9));
        expect(prevFY.endDate).toEqual(new Date(2014, 9, 0, 23, 59, 59, 999));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).toEqual(new Date(2015, 9));
        expect(nextFY.endDate).toEqual(new Date(2016, 9, 0, 23, 59, 59, 999));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).toEqual(new Date(2014, 9));
        expect(prevQuarter.endDate).toEqual(new Date(2014, 12, 0, 23, 59, 59, 999));
        expect(prevQuarter.fy.fiscalYear).toEqual(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).toEqual(new Date(2015, 3));
        expect(nextQuarter.endDate).toEqual(new Date(2015, 6, 0, 23, 59, 59, 999));
        expect(nextQuarter.fy.fiscalYear).toEqual(2015);

        expect(data.calendar.calendarMonth).toEqual(0);
        expect(data.calendar.calendarYear).toEqual(2015);

        expect(data.quarter.quarterNumber).toEqual(2);
        expect(data.quarter.startDate).toEqual(new Date(2015, 0));
        expect(data.quarter.endDate).toEqual(new Date(2015, 3, 0, 23, 59, 59, 999)); // end of March '15
    });

    it('should check a July 2015 date', function () {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 6));

        expect(data.fiscalYear.fiscalYear).toEqual(2015);
        expect(data.fiscalYear.startDate).toEqual(new Date(2014, 9));
        expect(data.fiscalYear.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).toEqual(new Date(2013, 9));
        expect(prevFY.endDate).toEqual(new Date(2014, 9, 0, 23, 59, 59, 999));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).toEqual(new Date(2015, 9));
        expect(nextFY.endDate).toEqual(new Date(2016, 9, 0, 23, 59, 59, 999));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).toEqual(new Date(2015, 3));
        expect(prevQuarter.endDate).toEqual(new Date(2015, 6, 0, 23, 59, 59, 999));
        expect(prevQuarter.fy.fiscalYear).toEqual(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).toEqual(new Date(2015, 9));
        expect(nextQuarter.endDate).toEqual(new Date(2015, 12, 0, 23, 59, 59, 999));
        expect(nextQuarter.fy.fiscalYear).toEqual(2016);

        expect(data.calendar.calendarMonth).toEqual(6);
        expect(data.calendar.calendarYear).toEqual(2015);

        expect(data.quarter.quarterNumber).toEqual(4);
        expect(data.quarter.startDate).toEqual(new Date(2015, 6));
        expect(data.quarter.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999)); // end of September '15
    });

    it('should check a Sept 2015 date', function () {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 8));

        expect(data.fiscalYear.fiscalYear).toEqual(2015);
        expect(data.fiscalYear.startDate).toEqual(new Date(2014, 9));
        expect(data.fiscalYear.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).toEqual(new Date(2013, 9));
        expect(prevFY.endDate).toEqual(new Date(2014, 9, 0, 23, 59, 59, 999));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).toEqual(new Date(2015, 9));
        expect(nextFY.endDate).toEqual(new Date(2016, 9, 0, 23, 59, 59, 999));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).toEqual(new Date(2015, 3));
        expect(prevQuarter.endDate).toEqual(new Date(2015, 6, 0, 23, 59, 59, 999));
        expect(prevQuarter.fy.fiscalYear).toEqual(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).toEqual(new Date(2015, 9));
        expect(nextQuarter.endDate).toEqual(new Date(2015, 12, 0, 23, 59, 59, 999));
        expect(nextQuarter.fy.fiscalYear).toEqual(2016);

        expect(data.calendar.calendarMonth).toEqual(8);
        expect(data.calendar.calendarYear).toEqual(2015);

        expect(data.quarter.quarterNumber).toEqual(4);
        expect(data.quarter.startDate).toEqual(new Date(2015, 6));
        expect(data.quarter.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999)); // end of September '15
    });

    it('should check a Oct 2015 date', function () {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 9));

        expect(data.fiscalYear.fiscalYear).toEqual(2016);
        expect(data.fiscalYear.startDate).toEqual(new Date(2015, 9));
        expect(data.fiscalYear.endDate).toEqual(new Date(2016, 9, 0, 23, 59, 59, 999));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).toEqual(new Date(2014, 9));
        expect(prevFY.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).toEqual(new Date(2016, 9));
        expect(nextFY.endDate).toEqual(new Date(2017, 9, 0, 23, 59, 59, 999));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).toEqual(new Date(2015, 6));
        expect(prevQuarter.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999));
        expect(prevQuarter.fy.fiscalYear).toEqual(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).toEqual(new Date(2016, 0));
        expect(nextQuarter.endDate).toEqual(new Date(2016, 3, 0, 23, 59, 59, 999));
        expect(nextQuarter.fy.fiscalYear).toEqual(2016);

        expect(data.calendar.calendarMonth).toEqual(9);
        expect(data.calendar.calendarYear).toEqual(2015);

        expect(data.quarter.quarterNumber).toEqual(1);
        expect(data.quarter.startDate).toEqual(new Date(2015, 9));
        expect(data.quarter.endDate).toEqual(new Date(2015, 12, 0, 23, 59, 59, 999)); // end of December '15
    });

    it('should check a Nov 2015 date', function () {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 10));

        expect(data.fiscalYear.fiscalYear).toEqual(2016);
        expect(data.fiscalYear.startDate).toEqual(new Date(2015, 9));
        expect(data.fiscalYear.endDate).toEqual(new Date(2016, 9, 0, 23, 59, 59, 999));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).toEqual(new Date(2014, 9));
        expect(prevFY.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).toEqual(new Date(2016, 9));
        expect(nextFY.endDate).toEqual(new Date(2017, 9, 0, 23, 59, 59, 999));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).toEqual(new Date(2015, 6));
        expect(prevQuarter.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999));
        expect(prevQuarter.fy.fiscalYear).toEqual(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).toEqual(new Date(2016, 0));
        expect(nextQuarter.endDate).toEqual(new Date(2016, 3, 0, 23, 59, 59, 999));
        expect(nextQuarter.fy.fiscalYear).toEqual(2016);

        expect(data.calendar.calendarMonth).toEqual(10);
        expect(data.calendar.calendarYear).toEqual(2015);

        expect(data.quarter.quarterNumber).toEqual(1);
        expect(data.quarter.startDate).toEqual(new Date(2015, 9));
        expect(data.quarter.endDate).toEqual(new Date(2015, 12, 0, 23, 59, 59, 999)); // end of December '15
    });

    it('should check a Dec 2015 date', function () {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 11));

        expect(data.fiscalYear.fiscalYear).toEqual(2016);
        expect(data.fiscalYear.startDate).toEqual(new Date(2015, 9));
        expect(data.fiscalYear.endDate).toEqual(new Date(2016, 9, 0, 23, 59, 59, 999));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).toEqual(new Date(2014, 9));
        expect(prevFY.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).toEqual(new Date(2016, 9));
        expect(nextFY.endDate).toEqual(new Date(2017, 9, 0, 23, 59, 59, 999));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).toEqual(new Date(2015, 6));
        expect(prevQuarter.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999));
        expect(prevQuarter.fy.fiscalYear).toEqual(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).toEqual(new Date(2016, 0));
        expect(nextQuarter.endDate).toEqual(new Date(2016, 3, 0, 23, 59, 59, 999));
        expect(nextQuarter.fy.fiscalYear).toEqual(2016);

        expect(data.calendar.calendarMonth).toEqual(11);
        expect(data.calendar.calendarYear).toEqual(2015);

        expect(data.quarter.quarterNumber).toEqual(1);
        expect(data.quarter.startDate).toEqual(new Date(2015, 9));
        expect(data.quarter.endDate).toEqual(new Date(2015, 12, 0, 23, 59, 59, 999)); // end of December '15
    });

    it('should check a Jan 2016 date', function () {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2016, 0));
        expect(data.fiscalYear.fiscalYear).toEqual(2016);
        expect(data.fiscalYear.startDate).toEqual(new Date(2015, 9));
        expect(data.fiscalYear.endDate).toEqual(new Date(2016, 9, 0, 23, 59, 59, 999));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).toEqual(new Date(2014, 9));
        expect(prevFY.endDate).toEqual(new Date(2015, 9, 0, 23, 59, 59, 999));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).toEqual(new Date(2016, 9));
        expect(nextFY.endDate).toEqual(new Date(2017, 9, 0, 23, 59, 59, 999));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).toEqual(new Date(2015, 9));
        expect(prevQuarter.endDate).toEqual(new Date(2015, 12, 0, 23, 59, 59, 999));
        expect(prevQuarter.fy.fiscalYear).toEqual(2016);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).toEqual(new Date(2016, 3));
        expect(nextQuarter.endDate).toEqual(new Date(2016, 6, 0, 23, 59, 59, 999));
        expect(nextQuarter.fy.fiscalYear).toEqual(2016);

        expect(data.calendar.calendarMonth).toEqual(0);
        expect(data.calendar.calendarYear).toEqual(2016);

        expect(data.quarter.quarterNumber).toEqual(2);
        expect(data.quarter.startDate).toEqual(new Date(2016, 0));
        expect(data.quarter.endDate).toEqual(new Date(2016, 3, 0, 23, 59, 59, 999)); // end of March '16
    });
});
