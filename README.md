# Fiscal

Fiscal provides a simple interface to calculate the calendar dates for fiscal years and quarters. Fiscal has no dependencies and also offers a browser build (see `fiscal.min.js`).

## Usage
```js
const Fiscal = require('fiscal');
const fiscal = new Fiscal(9); // Specify the 0-indexed month that your fiscal year starts

// get information about the current year
fiscal.getFiscalInfoForDate().fiscalYear
// returns { fiscalYear: 2017, fiscalMonth: 9 }
```

## API
Fiscal can give you information using the current date or one you specify.

### Instantiation
Before you start using Fiscal, you need to tell Fiscal what calendar month your fiscal year starts on. This should be zero-indexed (as per JS's Date implementation).

For example, if your fiscal year starts in October, you would do:
```js
const fiscal = new Fiscal(9);
```

### `fiscal.getFiscalInfoForDate([Date])`
Provides information based on the provided date.

```js
fiscal.getFiscalInfoForDate();
```

Parameters:
* `Date` Creates a Fiscal instance for the provided date object. If no date is provided, Fiscal will use the current date.

Returns an object containing information about the provided date.
```js
{
    fiscalYear: '[instance of FiscalYear]',
    quarter: '[instance of Quarter]',
    calendar: {
        calendarMonth: '[zero-indexed calendar month]',
        calendarYear: '[calendar year]'
    }
}
```

### `FiscalYear.startDate`
Returns the starting date for the fiscal year.

```js
const info = fiscal.getFiscalInfoForDate();
info.fiscalYear.startDate // Date: 2016-10-01T00:00:00.000Z
```

### `FiscalYear.endDate`
Returns the ending date for the fiscal year.

```js
const info = fiscal.getFiscalInfoForDate();
info.fiscalYear.endDate // Date: 2017-09-00T23:59:59.999Z
```

### `FiscalYear.previous()`
Returns a new instance of `FiscalYear` representing the previous fiscal year.

```js
const info = fiscal.getFiscalInfoForDate();
const prevFy = info.fiscalYear.previous();
```

### `FiscalYear.next()`
Returns a new instance of `FiscalYear` representing the next fiscal year.

```js
const info = fiscal.getFiscalInfoForDate();
const nextFy = info.fiscalYear.next();
```

### `Quarter.startDate`
Returns the starting date for the fiscal year.

```js
const info = fiscal.getFiscalInfoForDate();
info.quarter.startDate // Date: 2016-10-01T00:00:00.000Z
```

### `Quarter.endDate`
Returns the ending date for the fiscal year.

```js
const info = fiscal.getFiscalInfoForDate();
info.quarter.endDate // Date: 2016-12-31T23:59:59.999Z
```

### `Quarter.previous()`
Returns a new instance of `Quarter` representing the previous quarter.

```js
const info = fiscal.getFiscalInfoForDate();
const prevQuarter = info.quarter.previous();
```

### `Quarter.next()`
Returns a new instance of `Quarter` representing the next quarter.

```js
const info = fiscal.getFiscalInfoForDate();
const nextQuarter = info.quarter.next();
```

## Running Tests
To run the tests, simply run `npm test`.

## Misc
This module was developed by Mark Herhold at [RTI International](https://www.rti.org/). It is available for use under the MIT license. Pull requests are appreciated and welcome.
