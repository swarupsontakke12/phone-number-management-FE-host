
const path = require('path');
const express = require('express')
const app = express()
const port = process.env.PORT || 4200


console.log('__dirname' , __dirname);
// app.use('/' , express.static('dist/ng-able-pro'));
// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/example-app')));

// Handle all other routes by serving the index.html file
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/example-app/index.html'));
});

app.listen(port , ()=>{

    console.log(`app is started and running on port: ${port}`);
})
