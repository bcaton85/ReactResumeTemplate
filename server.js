const express = require('express')
const app = express()
const port = 3001

var fs = require('fs');
var yaml = require('js-yaml');
var cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    const doc = yaml.safeLoad(fs.readFileSync('./templates/resume.yml', 'utf8'));
    res.send(doc);
});

app.listen(port, () => console.log(`Node server listening at http://localhost:${port}`))