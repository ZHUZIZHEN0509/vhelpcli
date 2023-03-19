const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const compiler = (templateName,data) => {
   const templatePosition = `../templates/${templateName}`;
   const templatePath = path.resolve(__dirname,templatePosition);
   return new Promise((resolve,reject)=>{
    ejs.renderFile(templatePath,{data},(err,str)=>{
        if(err){
            console.error(err);
            return;
        }
        resolve(str);
       })
   })
}

const createDirSync = (filepath) => {
    console.log('filepath=',filepath)
   if(fs.existsSync(filepath)){
    console.log("1=",filepath);
      return true;
   }else{
     if(createDirSync(path.dirname(filepath))){
        console.log('2=',filepath)
        fs.mkdirSync(filepath);
        return true;
     }
   }
}

const writeToFile = (filepath,data) => {
    fs.promises.writeFile(filepath,data);
}

module.exports = {
    compiler,
    createDirSync,
    writeToFile
}