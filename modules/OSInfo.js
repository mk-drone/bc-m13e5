let os = require('os');
let colors = require('colors');
let time = require('./Time');

function getOsInfo(){
    let type = os.type();
    if(type === 'Windows_NT'){
        type='Windows';
    }else if(type === 'Darwin'){
        type='OSX';
    }
    process.stdout.write(`System: ${type}\n`.gray);
    process.stdout.write(`Release: ${os.release()}\n`.red);
    process.stdout.write(`CPU: ${os.cpus()[0].model}\n`.blue);
    process.stdout.write(`Uptime: ${time.secondsToHours(os.uptime())}\n`.green);
    process.stdout.write(`UserName: ${os.userInfo().username}\n`.yellow);
    process.stdout.write(`HomeDir: ${os.homedir()}\n`);
}

exports.print = getOsInfo;