export const datetime = time => {
    const date = new Date(time * 1000);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};