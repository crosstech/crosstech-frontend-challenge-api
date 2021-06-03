const taskRepository = require("../repositories/taskRepository");
const authModule = require("../services/authService");
const taskStatus = require("../models/taskStatus");
const taskValidationService = require("../services/taskValidationService");

const taskController = {
  mapRequestsToHandlers: (app) => {
    app.get("/api/task/reset-data", taskController.resetData);
    app.get(
      "/api/task",
      authModule.authenticateTokenMiddleware,
      taskController.getTasks
    );
    app.get(
      "/api/task/my-tasks",
      authModule.authenticateTokenMiddleware,
      taskController.getMyTasks
    );
    app.get(
      "/api/task/pendings",
      authModule.authenticateTokenMiddleware,
      taskController.getDepartmentPendingTasks
    );
    app.get(
      "/api/task/:taskId",
      authModule.authenticateTokenMiddleware,
      taskController.getTaskById
    );
    app.post(
      "/api/task",
      authModule.authenticateTokenMiddleware,
      taskController.createTask
    );
    app.put(
      "/api/task/:taskId",
      authModule.authenticateTokenMiddleware,
      taskController.updateTaskById
    );
    app.delete(
      "/api/task/:taskId",
      authModule.authenticateTokenMiddleware,
      taskController.deleteTaskById
    );
    app.get(
      "/api/task/complete/:taskId",
      authModule.authenticateTokenMiddleware,
      taskController.completeTaskById
    );
    app.get(
      "/api/task/reject/:taskId",
      authModule.authenticateTokenMiddleware,
      taskController.rejectTaskById
    );
  },

  // QUERIES

  getTasks: function (req, res) {
    const allTasks = taskRepository.getAll();
    res.status(200).json({ code: "allTasksSuccess", payload: allTasks });
  },
  getMyTasks: function (req, res) {
    const myTasks = taskRepository.getUsersTasks(req.user.userId);
    res.status(200).json({ code: "myTasksSuccess", payload: myTasks });
  },
  getDepartmentPendingTasks: function (req, res) {
    const pendingTasks = taskRepository.getDepartmentPendingTasks(
      req.user.department
    );
    res
      .status(200)
      .json({ code: "pendingTasksSuccess", payload: pendingTasks });
  },
  getTaskById: function (req, res) {
    // accessing taskId to find
    var taskId = req.params.taskId;
    const matchedTask = taskRepository.getById(taskId);

    taskValidationService.taskMustBeExist(res, matchedTask);

    res.status(200).json({ code: "getTaskSuccess", payload: matchedTask });
  },

  // ACTIONS
  resetData: function (req, res) {
    taskRepository.resetData();
    const allTasks = taskRepository.getAll();
    res.status(200).json({ code: "resetDataSuccess", payload: allTasks });
  },
  createTask: function (req, res) {
    // accessing the data in request body
    var requestData = req.body;

    taskValidationService.titleAndDescriptionMustBeFilled(
      res,
      requestData.title,
      requestData.description
    );

    var newTask = {
      id: Math.floor(Math.random() * (10000 - 1000 + 1) + 1000),
      title: requestData.title,
      description: requestData.description,
      user: { id: req.user.userId, name: req.user.givenName },
      assignedDepartment: requestData.assignedDepartment,
      status: taskStatus.Pending,
      logs: [],
    };

    taskRepository.addTask(newTask);
    taskRepository.addLog(newTask, req.user.givenName, "Created");
    return res.status(200).json({
      code: "taskCreated",
      payload: taskRepository.mapTaskToResponseModel(newTask),
    });
  },
  deleteTaskById: function (req, res) {
    // taskId which needs to be deleted
    var taskId = req.params.taskId;

    const matchedTask = taskRepository.getById(taskId);

    taskValidationService.taskMustBeExist(res, matchedTask);
    taskValidationService.userIdMustBeCurrentUserId(res, matchedTask);

    taskRepository.deleteTask(taskId);

    res.status(200).json({
      code: "taskDeleted",
      payload: taskRepository.mapTaskToResponseModel(matchedTask),
    });
  },
  updateTaskById: function (req, res) {
    // task id which we need to update
    var taskId = req.params.taskId;

    // Request Data
    var requestData = req.body;

    taskValidationService.titleAndDescriptionMustBeFilled(
      res,
      requestData.title,
      requestData.description
    );

    // Get task
    const matchedTask = taskRepository.getById(taskId);

    taskValidationService.taskMustBeExist(res, matchedTask);
    taskValidationService.userIdMustBeCurrentUserId(res, matchedTask);

    // Update properties
    matchedTask.title = requestData.title;
    matchedTask.description = requestData.description;
    taskRepository.updateTask(taskId, matchedTask);
    taskRepository.addLog(matchedTask, req.user.givenName, "Updated");

    res.status(200).json({
      code: "taskUpdated",
      payload: taskRepository.mapTaskToResponseModel(matchedTask),
    });
  },
  completeTaskById: function (req, res) {
    // taskId which needs to be completed
    var taskId = req.params.taskId;

    const matchedTask = taskRepository.getById(taskId);

    taskValidationService.taskMustBeExist(res, matchedTask);
    taskValidationService.statusMustBePending(res, matchedTask);
    taskValidationService.assignedDepartmentMustBeCurrentUserDepartment(
      res,
      matchedTask,
      req.user.department
    );

    matchedTask.status = taskStatus.Completed;
    taskRepository.updateTask(taskId, matchedTask);
    taskRepository.addLog(matchedTask, req.user.givenName, "Completed");

    res.status(200).json({
      code: "taskCompleted",
      payload: taskRepository.mapTaskToResponseModel(matchedTask),
    });
  },
  rejectTaskById: function (req, res) {
    // taskId which needs to be rejected
    var taskId = req.params.taskId;

    const matchedTask = taskRepository.getById(taskId);

    taskValidationService.taskMustBeExist(res, matchedTask);
    taskValidationService.statusMustBePending(res, matchedTask);
    taskValidationService.assignedDepartmentMustBeCurrentUserDepartment(
      res,
      matchedTask,
      req.user.department
    );

    matchedTask.status = taskStatus.Rejected;
    taskRepository.updateTask(taskId, matchedTask);
    taskRepository.addLog(matchedTask, req.user.givenName, "Rejected");

    res.status(200).json({
      code: "taskRejected",
      payload: taskRepository.mapTaskToResponseModel(matchedTask),
    });
  },
};

module.exports = taskController;
