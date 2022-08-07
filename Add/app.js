let express = require('express');

let ejs = require('ejs')

let app = express();

app.engine('.html', ejs.__express)
app.use('/dist/', express.static('./dist/'))
app.get('*', (req, res) => {
    res.render('../index.html')
})

app.listen(3000)
