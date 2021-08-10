// Import express
import express from "express";

import {
  getTodos,
  getTodosById,
  createTodos,
  updateTodos,
  deleteTodos
} from "../controllers/TodoController.js";

import {
  getActivities,
  getActivitiesById,
  getActivitiesByTodoId,
  createActivities,
  updateActivities,
  deleteActivities
} from "../controllers/ActivitiyController.js";

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!')
});
router.get('/todo', getTodos);
router.get('/todo/:id', getTodosById);
router.post('/todo', createTodos);
router.put('/todo/:id', updateTodos);
router.delete('/todo/:id', deleteTodos);

router.get('/activity', getActivities);
router.get('/activity/:id', getActivitiesById);
router.get('/activity/:id/todo', getActivitiesByTodoId);
router.post('/activity', createActivities);
router.put('/activity/:id', updateActivities);
router.delete('/activity/:id', deleteActivities);

// export router
export default router;