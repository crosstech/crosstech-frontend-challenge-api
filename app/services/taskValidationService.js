const taskStatus = require("../models/taskStatus");

const taskValidationService = {
  taskMustBeExist: (res, task) => {
    if (task == undefined) {
      res
        .status(404)
        .json({ code: "validationError", message: "Task Not Found" });
      throw "Task Validation Error: Task not found";
    }
  },
  userIdMustBeCurrentUserId: (res, task, currentUserId) => {
    if (task.userId != currentUserId) {
      res.status(403).json({
        code: "validationError",
        message: "Current user must be creator of task",
      });
      throw "Task Validation Error: Current user must be creator of task";
    }
  },
  statusMustBePending: (res, task) => {
    if (task.status != taskStatus.Pending) {
      res.status(400).json({
        code: "validationError",
        message: "Task status must be Pending (1)",
      });
      throw "Task Validation Error: Task status must be Pending (1)";
    }
  },
  assignedDepartmentMustBeCurrentUserDepartment: (
    res,
    task,
    currentUserDepartment
  ) => {
    if (task.assignedDepartment != currentUserDepartment) {
      res.status(403).json({
        code: "validationError",
        message: "Current user must be employe of task's assigned department",
      });
      throw "Task Validation Error: Current user must be employe of task's assigned department";
    }
  },
  titleAndDescriptionMustBeFilled: (res, title, description) => {
    if (!title || !description) {
      res.status(400).json({
        code: "validationError",
        message: "Task title or description can not be empty",
      });
      throw "Task Validation Error: Task title or description can not be empty";
    }
  },
};

module.exports = taskValidationService;
