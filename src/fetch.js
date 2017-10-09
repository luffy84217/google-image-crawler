const GoogleImages = require('google-images');
const download = require('download');
const concat = require('async/concat');

const CSE_ID = process.env.CSE_ID;
const API_KEY = process.env.API_KEY;

if (!CSE_ID || !API_KEY) {
    throw new Error('Please Set enviroment variable CSE_ID and API_KEY');
}

module.exports = (key, callback) => {
    const client = new GoogleImages(CSE_ID, API_KEY);

    client.search(key.search, { page: key.range })
        .then(images => callback(null,
            Promise
                .all(images.map(image => download(image.url, `downloads/${key.search}`)
                    .catch((err => {
                        if (err) throw new Error('\nDownload uncompleted. Invalid type format!');
                    }))))
                .then(() => console.info(`${key.search} page ${key.range} images downloaded!`))
        ))
        .catch(err => callback(err));
};