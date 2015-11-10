import {INCLUDE_PATH, LIB_PATH} from './configure';
import {exec_p} from './utils';

export default async function(fileName, imples = [], libs = []) {
  let compileCommand = `gcc ${fileName} -I ${INCLUDE_PATH} -L ${LIB_PATH} `;
  let implestr = '';
  let libstr = '';

  if(imples.length) {
    implestr = imples.join(' ');
  }
  if(libs.length) {
    libs.forEach((lib) => {
      libstr += `-l${lib} `;
    });
  }

  compileCommand += `${implestr} ${libstr}`;
  try {
    await exec_p(compileCommand);
  }catch (e) {
    console.log(e);
  }
}