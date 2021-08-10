import Todo from "../Models/todo.js";

export const getTodos = async (req, res) => {
  try {
    const data = await Todo.findAll();
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const getTodosById = async (req, res) => {
  try {
    const data = await Todo.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(data[0]);
  } catch (err) {
    console.log(err);
  }
};

export const createTodos = async (req, res) => {
  try {
    await Todo.create(req.body);
    res.json({
      message: "Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTodos = async (req, res) => {
  try {
    await Todo.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Updated",
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodos = async (req, res) => {
  try {
    await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
