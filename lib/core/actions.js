const { resolve } = require('path');
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const { repo } = require('../config/repo-config');
const { spawnCommand } = require('../utils/terminal');
const { compiler , createDirSync , writeToFile } = require('../utils/utils');
const path = require('path');
const open = require('open');

const createProjectAction = async (project) => {
   await download(repo,project,{clone: true});
   //执行命令
   const command = process.platform === "win32" ? "npm.cmd" : "npm";
   await spawnCommand(command,["install"],{ cwd: `./${project}`});
   spawnCommand(command,['run','serve'],{ cwd: `./${project}`});
   open('http://localhost:8080');
}

//封装
const handleEjs = async (name,dest,templateName,filename) => {
    const commonDest = dest.replace('router','views');
     const routerPath = commonDest.replace('src','@')+`/${name}.vue`;
    const componentPath = commonDest.replace('src','').replace('/views','');
    const strData = await compiler(templateName,{name, lowerName: name.toLowerCase(),routerPath,componentPath});
    createDirSync(dest);
    const targetDir = path.resolve(dest,filename);
    writeToFile(targetDir,strData);
}

const createCpnAction = async(name,dest) => {
    //读取写入component的ejs
    handleEjs(name,dest,'vue-component.ejs',`${name}.vue`);
}

const createPageAction = async (name,dest) => {
    //读取写入component的ejs
    createCpnAction(name,dest);
    //读取写入路由的ejs
    handleEjs(name,dest,'vue-router.ejs',`router.js`);
}

const createStoreAction = async (name,dest) => {
    handleEjs(name,dest,'vue-store.ejs','index.js');
    handleEjs(name,dest,'vue-types.ejs','types.js');
}

const createCpn3Action = async (name,dest) => {
    handleEjs(name,dest,'vue3-component_ts.ejs','index.vue');
}

const createPage3Action = async (name,dest) => {
    createCpn3Action(name,dest);
    const localDest = dest.replace('views','router');
    handleEjs(name,localDest,'vue-router4.ejs',`${name}.ts`);
}


// const createCpn3Action = async (name,dest) => {
//     const cpn3Str = await compiler('vue3-component_ts.ejs',{name,lowerName: name.toLowerCase()});
//     if(createDirSync(dest)){
//         const targetCpn3Path = path.resolve(dest,`index.vue`);
//         writeToFile(targetCpn3Path,cpn3Str);
//     }
// }

// const createPage3Action = async (name,dest) => {
//     createCpn3Action(name,dest);
//     const routerPath = dest.replace('src','@')+`/${name}.vue`;
//     const componentPath = dest.replace('src','').replace('/views','');
//     const router4Str = await compiler('vue-router4.ejs',{name,lowerName: name.toLowerCase(),routerPath,componentPath});
//     const targetPath = dest.replace('views','router');
//     if(createDirSync(targetPath)){
//         const targetRouter4Path = path.resolve(targetPath,`${name}.ts`);
//         writeToFile(targetRouter4Path,router4Str);
//     }
// }

module.exports = {
    createProjectAction,
    createCpnAction,
    createPageAction,
    createStoreAction,
    createPage3Action
}