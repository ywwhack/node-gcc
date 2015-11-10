import {exec} from 'child_process';

// promsify exec
export function exec_p(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if(err) {
        reject(stderr);
      }else {
        resolve(stdout);
      }
    });
  });
}