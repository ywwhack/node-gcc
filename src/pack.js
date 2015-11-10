import fsp from 'fs-promise';
import {exec_p} from './utils';
import {C_MODULES, INCLUDE_PATH, LIB_PATH} from './configure';
import {generateStaticLib} from './generateLib';

export default async function pack(moduleName) {
  let stat;
  try {
    stat = await fsp.stat(C_MODULES);
  }catch(e) {
    console.log(`${C_MODULES} not exits.`);
    process.exit(1);
  }

  if(stat) {
    const cpHeader = `cp ./${moduleName}.h ${INCLUDE_PATH}/${moduleName}.h`;
    const cpLib = `cp ./lib${moduleName}.a ${LIB_PATH}/lib${moduleName}.a`;
    const rmLib = `rm ./${moduleName}.o ./lib${moduleName}.a`;
    try {
      await generateStaticLib(moduleName);
      await exec_p(cpHeader);
      await exec_p(cpLib);
      await exec_p(rmLib);
      console.log('sucess!');
    }catch (e) {
      console.log(e);
      process.exit(2);
    }
  }
}