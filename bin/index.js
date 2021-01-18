#!/usr/bin/env node

const program = require('commander')
const updateChk = require('../lib/update')

// 从 package.json 文件中请求 version 字段的值，-v和--version是参数
program.version(require('../package.json').version,'-v,--version')

// upgrade 检测更新
program
    // 声明的命令
    .command('upgrade')
    // 描述信息，在帮助信息时显示
    .description('Check ths js-plugin-cli version')
    .action(()=>{
        updateChk()
    })
// 解析命令行参数
program.parse(process.argv)
