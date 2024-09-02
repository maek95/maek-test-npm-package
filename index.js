// first 'npm init' and create a package.json where I add "type":"module" and in the creation progress I also added the github repository I will be using... good for later? (https://github.com/maek95/maek-test-npm-package)
// also did 'git init' but that doesnt do much yet I think
// Then created this index.js file ofcourse
// Thereafter I ran 'npm link', making it accessible LOCALLY so I can test it another project (I made one locally in another folder and named it test-package... and ran the command to link it locally: npm link maek-test-npm-package).

export function helloNpm() {
  return "hello NPM"
}

// module.exports = helloNpm // old commonJS (instead of 'export')


// after ive succesfully tested the npm package locally I run 
// 'npm login' which redirects me to a website to login... and I see I get loggedin in the terminal

// 'npm publish' 
// I should get a lot of notices, and even an email

// https://www.npmjs.com/search?q=maek-test-package tadaaaaaaaa!!! Should be able to do npm install maek-test-npm-package nu?


// NOW IF I MAKE CHANGES AGAIN I HAVE TO RUN 'npm publish' AGAIN!

// NOTE: the github repo has nothing to do with the rest of the code, it is just something that people can check out to see what my npm package contains!