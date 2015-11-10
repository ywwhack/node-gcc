import {INCLUDE_PATH, LIB_PATH} from './configure';
import {exec_p} from './utils';

export async function generateStaticLib(libName) {
  try {
    await exec_p(`gcc -o ${libName}.o -c ${libName}.c`);
    await exec_p(`ar -rcs lib${libName}.a ${libName}.o`);
  }catch (e){
    console.log(e);
    process.exit(1);
  }
  return `lib${libName}.a`;
}