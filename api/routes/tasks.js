const express = require('express');

const router = express.Router();

// Get a list of tasks when a get request is made to /tasks.
router.get('/', (request, response, next) => {
  response.json({ type: "get" });
});

// Get a single of task.
router.get('/:taskId', (request, response, next) => {
  response.json({ type: "get", payload: request.params.taskId });
});

// Add task into a database.
router.post('/', (request, response, next) => {
  response.json({ type: "post" });
});

// Update a task.
router.put('/:taskId', (request, response, next) => {
  response.json({ type: "put", payload: request.params.taskId });
});

// Delete a task.
router.delete('/:taskId', (request, response, next) => {
  response.json({ type: "delete", payload: request.params.taskId });
});

module.exports = router;