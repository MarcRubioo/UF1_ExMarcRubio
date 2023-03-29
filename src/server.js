// Fet per parc Rubio

const express = require('express')
const cors = require('cors')
const app = express();
const fs1 = require('node:fs')
const stream = require('stream')
const concat = require('stream-concat');
const path = require("path");

app.use(cors());
app.use(express.json());

port = 3020;

app.listen(port,()=>{
  console.log('Server listening on the port: '+port)
});



//Ex1 Examen Marc Rubio

app.post('/Examen/ex1/marc',(req , res) =>{
function llegirRuta(path) {
  console.log(path);
  fs1.readdir(path, (err, files) => {
    if (err) {
      console.error(err);
    } else {
      files.forEach(file => {
        const filePath = path + '/' + file;
        const estat = fs1.statSync(filePath);
        if (estat.isDirectory()) {
          llegirRuta(filePath);
        } else {
          console.log(path+'/'+file);
        }
      });
    }
  });
}
  const path = "C:\\Users\\marcr\\OneDrive\\Escritorio\\UF1_ExamenAaD";
  llegirRuta(path);
});


app.post('/Examen/ex3/marc',(req , res) => {
  const pathEx3MR = "C:\\Users\\marcr\\OneDrive\\Escritorio\\UF1_ExamenAaD\\Imatges\\Imatge1.jpg";
  const readableStream = fs1.createReadStream(pathEx3MR,
    {highWaterMark: 8192});
  console.log(`${path.basename(pathEx3MR)}`);
  readableStream.on('data', (resultat) => {
      console.log(resultat);
    }
  );
});
