import { DateTime } from 'luxon';


export const dateTime = (date, hour = '08:00') => {
    const stringDate = `${date}T${hour}`;
    const datetime = DateTime.fromISO(stringDate).toUnixInteger();
    return datetime
};

export const valiDate = (date) => {
    const dateNow = (new Date()).getFullYear();
    const year = date.split('-')[0]
    if (year < dateNow) return -1
    return 0
}