// first 'npm init' and create a package.json where I add "type":"module" and in the creation progress I also added the github repository I will be using... good for later? (https://github.com/maek95/maek-test-npm-package)
// also did 'git init', not needed but I will later publish these files just to show what the package contains. The actualy package is published using npm and not git
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

// NOTE: the github repo is not where people fetch this package, it is just used to show the package, the package itself is fetched using 'npm install maek-test-npm-package'