const fs = require('fs');
console.log(process.argv[2]);
const dirName = process.argv[2] + '/';

if (!fs.existsSync(dirName)) {
  fs.mkdirSync(dirName);
}

const htmlDefault = `<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Web Development BoilerPlate</h1>
  <script src="script.js" />
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

const createFile = (fileName, defaultFile, fileType) => {
  fs.writeFile(fileName, defaultFile, err => {
    if (err) {
      return console.log(err);
    }
    console.log(`Your ${fileType} file was created`);
  });
};

createFile(dirName + 'index.html', htmlDefault, 'html');
createFile(dirName + 'styles.css', cssDefault, 'css');
createFile(dirName + 'script.js', jsDefault, 'javascript');
