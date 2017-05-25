const SFTPClient = require('sftp-promises');
const sftp = new SFTPClient({
    host: process.env.DHOST,
    username: process.env.DUSERNAME,
    password: process.env.DPASSWORD
});

const file = process.env.DFILE;
const target = process.env.DTFILE;

sftp.put(file, target).then(success => {
    if (success) {
        process.exit(0);
    } else {
        console.error(success);
        process.exit(1);
    }
});
