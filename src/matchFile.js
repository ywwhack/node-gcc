import fsp from 'fs-promise';
import {resolve, extname} from 'path';

export const quotesHeader = /#include\s+"(.*)"/g;
// get all "xx.h" in a array
export function fetchHeaders(content, headerReg) {
  let matchedHeaderFiles = [];
  let match;
  while(match = headerReg.exec(content)) {
    matchedHeaderFiles.push(match[1]);
  }
  return matchedHeaderFiles;
}

// get all "xx.c" in a array
export function fetchImplementations(headers) {
  return headers.map((header) => {
    return `${header.slice(0, -2)}.c`;
  });
}

export async function getAllCFilesInDir(curDir) {
  let foundCFiles = [];
  let files = await fsp.readdir(curDir);
  let statsPromises = files.map((file) => {
    return fsp.stat(`${curDir}/${file}`);
  });
  let stats = await Promise.all(statsPromises);
  for(let i=0; i<stats.length; i++) {
    if(extname(files[i]) == '.c') {
      foundCFiles.push(resolve(curDir, files[i]));
    }
    if(stats[i].isDirectory() && files[i]!='node_modules') {
      try{
        let subDir = resolve(curDir, files[i]);
        foundCFiles.push(...await getAllCFilesInDir(subDir));
      }catch(e) {
        console.log(e);
      }
    }
  }
  return foundCFiles;
}