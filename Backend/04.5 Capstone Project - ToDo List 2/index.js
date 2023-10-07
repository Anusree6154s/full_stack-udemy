// Import necessary modules
import express from 'express';  // Import the Express.js framework
import bodyParser from 'body-parser';  // Middleware for parsing HTTP request data

// Create an instance of the Express application
const app = express();

// Define the port on which the server will listen for incoming requests
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Enable body parsing to extract data from HTTP POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize arrays to store task-related data
let tasks = [];
let lists = [];
let descriptions = [];
let id = 0;

// Define Express Routes

// Main page route: serves the 'main.ejs' template
app.get('/', (req, res) => {
    res.render('main.ejs');
});

// Login page route: serves the 'login.ejs' template
app.get('/loginButton', (req, res) => {
    res.render('login.ejs');
});

// Login route: handles POST requests for user login
app.post('/login', (req, res) => {
    // Retrieve user credentials from the request
    const username = req.body.username;
    const password = req.body.password;

    // Check if the provided username and password match expected values
    if (username === 'a' && password === 'b') {
        // If login is successful, serve the 'index.ejs' template with task and list data
        res.render('index.ejs', {
            tasks: tasks,
            lists: lists
        });
    } else {
        // Redirect to the login page in case of login failure
        res.redirect('/loginButton');
    }
});

// Logged-in user's homepage route: serves 'index.ejs' template with task and list data
app.get('/login', (req, res) => {
    res.render('index.ejs', {
        tasks: tasks,
        lists: lists
    });
});

// User logout route: redirects to the 'main.ejs' template
app.get('/logout', (req, res) => {
    res.render('main.ejs');
});

// Main page with tasks and lists route: serves 'tasks.ejs' template for task management
app.get('/clickTask/:id', (req, res) => {
    // Retrieve the 'id' parameter from the URL to identify the specific task
    const taskId = req.params.id;
    res.render('tasks.ejs', {
        tasks: tasks,
        lists: lists,
        descriptions: descriptions,
        k: taskId
    });
});

// Add task, list, and description route: handles POST requests for creating tasks
app.post('/save', (req, res) => {
    // Extract task, list, and description data from the POST request
    const task = req.body.task;
    const list = req.body.list;
    const description = req.body.description;

    // Store the data in respective arrays
    tasks.push(task);
    lists.push(list);
    descriptions.push(description);

    // Redirect to the user's homepage after task creation
    res.redirect('/login');
});

// Delete task route: handles POST requests for removing a task
app.post('/delete/:id', (req, res) => {
    // Retrieve the 'id' parameter to identify the task to be deleted
    const taskId = req.params.id;

    // Remove the specified task, list, and description from their respective arrays
    tasks.splice(taskId, 1);
    lists.splice(taskId, 1);
    descriptions.splice(taskId, 1);

    // Redirect to the user's homepage after task deletion
    res.redirect('/login');
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
