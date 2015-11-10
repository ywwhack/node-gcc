#!/usr/bin/env node
import fsp from 'fs-promise';
import pack from './pack';
import compile from './compile';
import {getAllCFilesInDir} from './matchFile';

const operation = process.argv[2];
const CWD = process.cwd();

if(operation == 'pack') {
  let moduleName = process.argv[3];
  pack(moduleName);
}else if(operation == 'compile') {
  let compileFileName = process.argv[3];
  getAllCFilesInDir(CWD)
    .then((c_files) => {
      let compileFileIndex = c_files.indexOf(compileFileName);
      c_files.splice(compileFileIndex, 1);
      compile(compileFileName, c_files);
    })
    .catch((reason) => {
      console.log(reason);
    });
}else {
  console.log('Unkown Operation');
}