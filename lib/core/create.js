const program = require('commander');
const { createProjectAction , createCpnAction , createPageAction , createStoreAction , createPage3Action } = require('./actions');
const createCommand = () => {
    program.command('create <project>')
           .description('创建一个项目')
           .action(createProjectAction);
         
    program.command('addCpn <name>')
           .description('添加组件')
           .action((name)=>{
            createCpnAction(name,program.getOptionValue('dest') || 'src/components');
           });

    program.command('addPage <page>')
           .description('添加页面')
           .action((page)=>{
            createPageAction(page,program.getOptionValue('dest') || 'src/pages');
           });

    program.command('addStore <store>')
           .description('添加store')
           .action((store)=>{
            createStoreAction(store,program.getOptionValue('dest') || 'src/store/modules');
           });

    program.command('addPage3 <page3>')
           .description("添加vue3页面")
           .action((page3)=>{
              createPage3Action(page3,program.getOptionValue('dest') || 'src/views')
              
           })
}

module.exports = createCommand;