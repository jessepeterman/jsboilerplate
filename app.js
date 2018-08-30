const fs = require('fs');

// Get argument after running app for new project folder name
const dirName = process.argv[2] + '/';

// Create folder if it doesn't already exist
if (!fs.existsSync(dirName)) {
  fs.mkdirSync(dirName);
}

// Set default file names
const htmlFileName = 'index.html';
const cssFileName = 'style.css';
const jsFileName = 'script.js';

// Set default file contents
const htmlDefault = `<html>
<head>
  <link rel="stylesheet" href="${cssFileName}">
</head>
<body>
  <h1>Web Development BoilerPlate</h1>
  <script src="${jsFileName}" />
</body>
</html>`;

const cssDefault = `
body {
  background-color: rgb(209, 207, 70);
  font-family: Arial, Helvetica, sans-serif;
  width: 100wh;
  text-align: center;
}`;

const jsDefault = `alert("Boiler plate is working!")`;

const createFile = (fileName, defaultFile, fileType, callback) => {
  fs.writeFile(fileName, defaultFile, err => {
    if (err) {
      return console.log(err);
    }
    console.log(`Your ${fileType} file was created ☑️`);
    callback();
  });
};

console.log('Building JsBoilerPlate......\n.....................');

createFile(dirName + htmlFileName, htmlDefault, 'html', () => {
  createFile(dirName + cssFileName, cssDefault, 'css', () => {
    createFile(dirName + jsFileName, jsDefault, 'javascript', () => {
      console.log('.....................\nTask Completed!');
    });
  });
});
