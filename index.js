const { convertToTimeZone, convertToAllTimeZones } = require('./DateTimeConverter');

const dateTime = '2024-03-09 12:00:00';
const fromTimeZone = 'America/New_York';
const format = 'YYYY-MM-DD HH:mm:ss';

const allTimeZones = convertToAllTimeZones(dateTime, fromTimeZone, format); 
console.log('Converted times for all time zones:', allTimeZones);
