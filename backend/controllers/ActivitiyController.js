import Activity from "../Models/activity.js";

export const getActivities = async (req, res) => {
  try {
    const data = await Activity.findAll();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const getActivitiesById = async (req, res) => {
  try {
    const data = await Activity.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(data[0]);
  } catch (err) {
    console.log(err);
  }
};

export const getActivitiesByTodoId = async (req, res) => {
  try {
    const data = await Activity.findAll({
      where: {
        todoId: req.params.id,
      },
    });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const createActivities = async (req, res) => {
  try {
    await Activity.create(req.body);
    res.json({
      message: "Created",
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateActivities = async (req, res) => {
  try {
    await Activity.update(req.body, {
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

export const deleteActivities = async (req, res) => {
  try {
    await Activity.destroy({
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
