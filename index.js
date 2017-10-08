const dotenv = require('dotenv').config();
const map = require('async/map');
const argParser = require('./src/argParser');
const fetch = require('./src/fetch');
const verify = require('./src/verify');

const a = process.argv;
const arg = a.slice(2);

if (a.length > 2) {
    if (verify(arg)) {
        const searchItems = argParser(arg);

        console.info('Start downloading!');
        map(searchItems, fetch, (err, results) => {
            if (err) {
                console.error('There\'s something wrong with any of url\'s response.');
            }
        });
    } else {
        console.error('Incorrect argument format (e.g. npm start apple 1 banana 2).');
    }
} else {
    console.error('Please pass the argument (search keyword) (e.g. npm start apple 1 banana 2).');
}