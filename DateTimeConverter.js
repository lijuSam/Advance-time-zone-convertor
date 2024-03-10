const moment = require('moment-timezone');

 function convertToTimeZone(dateTime, fromTimeZone, toTimeZone, format) {
    if (toTimeZone === 'UTC') {
        
        return moment.tz(dateTime, fromTimeZone).utc().format(format);
    } else {
        return moment.tz(dateTime, fromTimeZone).tz(toTimeZone).format(format);
    }
}

 function convertToAllTimeZones(dateTime, fromTimeZone, format) {
    const allTimeZones = moment.tz.names();
    const convertedTimes = {};

    allTimeZones.forEach(timeZone => {
        convertedTimes[timeZone] = convertToTimeZone(dateTime, fromTimeZone, timeZone, format);
    });

    return convertedTimes;
}

module.exports = {
    convertToTimeZone,
    convertToAllTimeZones
};
