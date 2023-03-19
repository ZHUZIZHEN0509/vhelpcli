const program = require("commander");
const helpOptions = () => {
    program.option('-w, --why','一个自定义框架!');
    program.option('-d, --dest <dest>','例如：目标位置，zhu4 -d src/component');
    program.on('--help',()=>{
        console.log("监听help指令！")
    })
}

module.exports = helpOptions;