const { writeFile } = require('fs');
// Your environment.custom.ts file. Will be ignored by git.
const targetPath = './src/environments/environment.ts';
// Load dotenv to work with process.env
require('dotenv').config();
// environment.ts file structure
const envConfigFile = `
  
export const environment = {
 production: false,
 HOST_BLOGS: '${process.env.HOST_BLOGS}',
 HOST_MEMBERS: '${process.env.HOST_MEMBERS}',
};
`;
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log('Using custom environment');
  }
});
