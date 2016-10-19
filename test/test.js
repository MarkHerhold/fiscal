'use strict';

var Fiscal = require('./../index');
var chai = require('chai');
chai.use(require('chai-datetime'));
var expect = chai.expect;

describe('fiscal', function() {
    it('should check a Jan 2015 date', function() {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 0));

        expect(data.fiscalYear.fiscalYear).to.equal(2015);
        expect(data.fiscalYear.startDate).to.equalDate(new Date(2014, 9));
        expect(data.fiscalYear.endDate).to.equalDate(new Date(2015, 9, 0));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).to.equalDate(new Date(2013, 9));
        expect(prevFY.endDate).to.equalDate(new Date(2014, 9, 0));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).to.equalDate(new Date(2015, 9));
        expect(nextFY.endDate).to.equalDate(new Date(2016, 9, 0));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).to.equalDate(new Date(2014, 9));
        expect(prevQuarter.endDate).to.equalDate(new Date(2014, 12, 0));
        expect(prevQuarter.fy.fiscalYear).to.equal(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).to.equalDate(new Date(2015, 3));
        expect(nextQuarter.endDate).to.equalDate(new Date(2015, 6, 0));
        expect(nextQuarter.fy.fiscalYear).to.equal(2015);

        expect(data.calendar.calendarMonth).to.equal(0);
        expect(data.calendar.calendarYear).to.equal(2015);

        expect(data.quarter.number).to.equal(2);
        expect(data.quarter.startDate).to.equalDate(new Date(2015, 0));
        expect(data.quarter.endDate).to.equalDate(new Date(2015, 3, 0)); // end of March '15
    });

    it('should check a July 2015 date', function() {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 6));

        expect(data.fiscalYear.fiscalYear).to.equal(2015);
        expect(data.fiscalYear.startDate).to.equalDate(new Date(2014, 9));
        expect(data.fiscalYear.endDate).to.equalDate(new Date(2015, 9, 0));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).to.equalDate(new Date(2013, 9));
        expect(prevFY.endDate).to.equalDate(new Date(2014, 9, 0));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).to.equalDate(new Date(2015, 9));
        expect(nextFY.endDate).to.equalDate(new Date(2016, 9, 0));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).to.equalDate(new Date(2015, 3));
        expect(prevQuarter.endDate).to.equalDate(new Date(2015, 6, 0));
        expect(prevQuarter.fy.fiscalYear).to.equal(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).to.equalDate(new Date(2015, 9));
        expect(nextQuarter.endDate).to.equalDate(new Date(2015, 12, 0));
        expect(nextQuarter.fy.fiscalYear).to.equal(2016);

        expect(data.calendar.calendarMonth).to.equal(6);
        expect(data.calendar.calendarYear).to.equal(2015);

        expect(data.quarter.number).to.equal(4);
        expect(data.quarter.startDate).to.equalDate(new Date(2015, 6));
        expect(data.quarter.endDate).to.equalDate(new Date(2015, 9, 0)); // end of September '15
    });

    it('should check a Sept 2015 date', function() {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 8));

        expect(data.fiscalYear.fiscalYear).to.equal(2015);
        expect(data.fiscalYear.startDate).to.equalDate(new Date(2014, 9));
        expect(data.fiscalYear.endDate).to.equalDate(new Date(2015, 9, 0));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).to.equalDate(new Date(2013, 9));
        expect(prevFY.endDate).to.equalDate(new Date(2014, 9, 0));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).to.equalDate(new Date(2015, 9));
        expect(nextFY.endDate).to.equalDate(new Date(2016, 9, 0));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).to.equalDate(new Date(2015, 3));
        expect(prevQuarter.endDate).to.equalDate(new Date(2015, 6, 0));
        expect(prevQuarter.fy.fiscalYear).to.equal(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).to.equalDate(new Date(2015, 9));
        expect(nextQuarter.endDate).to.equalDate(new Date(2015, 12, 0));
        expect(nextQuarter.fy.fiscalYear).to.equal(2016);

        expect(data.calendar.calendarMonth).to.equal(8);
        expect(data.calendar.calendarYear).to.equal(2015);

        expect(data.quarter.number).to.equal(4);
        expect(data.quarter.startDate).to.equalDate(new Date(2015, 6));
        expect(data.quarter.endDate).to.equalDate(new Date(2015, 9, 0)); // end of September '15
    });

    it('should check a Oct 2015 date', function() {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 9));

        expect(data.fiscalYear.fiscalYear).to.equal(2016);
        expect(data.fiscalYear.startDate).to.equalDate(new Date(2015, 9));
        expect(data.fiscalYear.endDate).to.equalDate(new Date(2016, 9, 0));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).to.equalDate(new Date(2014, 9));
        expect(prevFY.endDate).to.equalDate(new Date(2015, 9, 0));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).to.equalDate(new Date(2016, 9));
        expect(nextFY.endDate).to.equalDate(new Date(2017, 9, 0));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).to.equalDate(new Date(2015, 6));
        expect(prevQuarter.endDate).to.equalDate(new Date(2015, 9, 0));
        expect(prevQuarter.fy.fiscalYear).to.equal(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).to.equalDate(new Date(2016, 0));
        expect(nextQuarter.endDate).to.equalDate(new Date(2016, 3, 0));
        expect(nextQuarter.fy.fiscalYear).to.equal(2016);

        expect(data.calendar.calendarMonth).to.equal(9);
        expect(data.calendar.calendarYear).to.equal(2015);

        expect(data.quarter.number).to.equal(1);
        expect(data.quarter.startDate).to.equalDate(new Date(2015, 9));
        expect(data.quarter.endDate).to.equalDate(new Date(2015, 12, 0)); // end of December '15
    });

    it('should check a Nov 2015 date', function() {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 10));

        expect(data.fiscalYear.fiscalYear).to.equal(2016);
        expect(data.fiscalYear.startDate).to.equalDate(new Date(2015, 9));
        expect(data.fiscalYear.endDate).to.equalDate(new Date(2016, 9, 0));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).to.equalDate(new Date(2014, 9));
        expect(prevFY.endDate).to.equalDate(new Date(2015, 9, 0));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).to.equalDate(new Date(2016, 9));
        expect(nextFY.endDate).to.equalDate(new Date(2017, 9, 0));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).to.equalDate(new Date(2015, 6));
        expect(prevQuarter.endDate).to.equalDate(new Date(2015, 9, 0));
        expect(prevQuarter.fy.fiscalYear).to.equal(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).to.equalDate(new Date(2016, 0));
        expect(nextQuarter.endDate).to.equalDate(new Date(2016, 3, 0));
        expect(nextQuarter.fy.fiscalYear).to.equal(2016);

        expect(data.calendar.calendarMonth).to.equal(10);
        expect(data.calendar.calendarYear).to.equal(2015);

        expect(data.quarter.number).to.equal(1);
        expect(data.quarter.startDate).to.equalDate(new Date(2015, 9));
        expect(data.quarter.endDate).to.equalDate(new Date(2015, 12, 0)); // end of December '15
    });

    it('should check a Dec 2015 date', function() {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2015, 11));

        expect(data.fiscalYear.fiscalYear).to.equal(2016);
        expect(data.fiscalYear.startDate).to.equalDate(new Date(2015, 9));
        expect(data.fiscalYear.endDate).to.equalDate(new Date(2016, 9, 0));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).to.equalDate(new Date(2014, 9));
        expect(prevFY.endDate).to.equalDate(new Date(2015, 9, 0));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).to.equalDate(new Date(2016, 9));
        expect(nextFY.endDate).to.equalDate(new Date(2017, 9, 0));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).to.equalDate(new Date(2015, 6));
        expect(prevQuarter.endDate).to.equalDate(new Date(2015, 9, 0));
        expect(prevQuarter.fy.fiscalYear).to.equal(2015);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).to.equalDate(new Date(2016, 0));
        expect(nextQuarter.endDate).to.equalDate(new Date(2016, 3, 0));
        expect(nextQuarter.fy.fiscalYear).to.equal(2016);

        expect(data.calendar.calendarMonth).to.equal(11);
        expect(data.calendar.calendarYear).to.equal(2015);

        expect(data.quarter.number).to.equal(1);
        expect(data.quarter.startDate).to.equalDate(new Date(2015, 9));
        expect(data.quarter.endDate).to.equalDate(new Date(2015, 12, 0)); // end of December '15
    });

    it('should check a Jan 2016 date', function() {
        var data = new Fiscal(9).getFiscalInfoForDate(new Date(2016, 0));
        expect(data.fiscalYear.fiscalYear).to.equal(2016);
        expect(data.fiscalYear.startDate).to.equalDate(new Date(2015, 9));
        expect(data.fiscalYear.endDate).to.equalDate(new Date(2016, 9, 0));

        var prevFY = data.fiscalYear.previous();
        expect(prevFY.startDate).to.equalDate(new Date(2014, 9));
        expect(prevFY.endDate).to.equalDate(new Date(2015, 9, 0));

        var nextFY = data.fiscalYear.next();
        expect(nextFY.startDate).to.equalDate(new Date(2016, 9));
        expect(nextFY.endDate).to.equalDate(new Date(2017, 9, 0));

        var prevQuarter = data.quarter.previous();
        expect(prevQuarter.startDate).to.equalDate(new Date(2015, 9));
        expect(prevQuarter.endDate).to.equalDate(new Date(2015, 12, 0));
        expect(prevQuarter.fy.fiscalYear).to.equal(2016);

        var nextQuarter = data.quarter.next();
        expect(nextQuarter.startDate).to.equalDate(new Date(2016, 3));
        expect(nextQuarter.endDate).to.equalDate(new Date(2016, 6, 0));
        expect(nextQuarter.fy.fiscalYear).to.equal(2016);

        expect(data.calendar.calendarMonth).to.equal(0);
        expect(data.calendar.calendarYear).to.equal(2016);

        expect(data.quarter.number).to.equal(2);
        expect(data.quarter.startDate).to.equalDate(new Date(2016, 0));
        expect(data.quarter.endDate).to.equalDate(new Date(2016, 3, 0)); // end of March '16
    });
});
