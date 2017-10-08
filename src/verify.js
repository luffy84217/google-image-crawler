module.exports = function(arr) {
    // arguments are not even
    if (arr.length % 2 !== 0) {
        return false;
    }
    // even arguments are not number
    for (let i = 0; i < arr.length; ++i) {
        switch (arr[i % 2]) {
            case 1:
                if (typeof parseInt(arr[i]) !== 'number') {
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return true;
};