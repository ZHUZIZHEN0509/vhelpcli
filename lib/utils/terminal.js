const { spawn } = require('child_process');

const spawnCommand = (...args) => {
    const ls = spawn(...args);
    ls.stdout.pipe(process.stdout);
    ls.stderr.pipe(process.stderr);
    return new Promise((resolve,reject)=>{
        ls.on('close',()=>{
            resolve();
        })
    })
   
}

module.exports = {
    spawnCommand
}