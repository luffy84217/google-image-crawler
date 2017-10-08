const del = require('del');

const a = process.argv;

if (a.length > 2) {
    const cleanFolder = a.slice(2);
    cleanFolder.forEach(folder => del([`downloads/${folder}/**`])
        .then(paths => {
            if (paths.length === 0) {
                console.warn('No folder has been delete, you typed wrong folder name.');
            } else {
                console.info('Deleted folders:\n', paths.join('\n'));
            }
        })
    );
} else {
    del(['downloads/*'])
        .then(paths => console.info('Deleted folders:\n', paths.join('\n')));
}
