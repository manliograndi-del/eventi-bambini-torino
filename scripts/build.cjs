const path=require('node:path');
const {build}=require('./catalog-tools.cjs');
try { console.log(JSON.stringify(build(path.resolve(__dirname,'..'),{checkOnly:process.argv.includes('--check')}),null,2)); }
catch(error) { console.error(error.message);process.exitCode=1; }
