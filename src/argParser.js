module.exports = arg => {
    return arg.reduce((acc, val, i, arr) => {
        if (i % 2 === 0) {
            return acc.concat({ search: val, range: arr[i + 1] })
        } else {
            return acc;
        }
    }, []);
};