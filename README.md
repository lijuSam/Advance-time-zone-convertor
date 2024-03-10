# Time Zone Converter

[![npm version](https://img.shields.io/npm/v/time-zone-convertor.svg)](https://www.npmjs.com/package/time-zone-convertor)
[![npm downloads](https://img.shields.io/npm/dt/time-zone-convertor.svg)](https://www.npmjs.com/package/time-zone-convertor)
[![GitHub license](https://img.shields.io/github/license/lijuSam/time-zone-convertor)](https://github.com/lijuSam/time-zone-convertor/blob/main/LICENSE)


A simple npm package for converting time between different time zones.

## Installation

Install the package via npm:

```bash
npm install time-zone-convertor


// Use the DateTimeConverter module to convert to all time zones
const DateTimeConverter = require('time-zone-convertor');

const dateTime = '2024-03-09 12:00:00';
const fromTimeZone = 'America/New_York';
const toTimeZone = 'UTC';
const format = 'YYYY-MM-DD HH:mm:ss';

const convertedDateTime = DateTimeConverter.convertToAllTimeZones(dateTime, fromTimeZone, toTimeZone, format);
console.log(`Converted time to ${toTimeZone}:`, convertedDateTime);



Contributing
Contributions are welcome! Please feel free to submit issues or pull requests.
