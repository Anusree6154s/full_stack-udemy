import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];
let id = 0;

app.get('/', (req, res) => {
    res.render('index.ejs', {tasks:tasks});
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
    }
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
