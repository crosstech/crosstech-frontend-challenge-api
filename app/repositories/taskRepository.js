const taskStatus = require("../models/taskStatus");

const taskRepository = {
  tasks: [],
  getAll: () => {
    return [...taskRepository.tasks].map(taskRepository.mapTaskToResponseModel);
  },
  getById: (taskId) => {
    return taskRepository.tasks.find((task) => task.id == taskId);
  },
  getUsersTasks: (userId) => {
    return [...taskRepository.tasks]
      .filter((task) => task.user.id == userId)
      .map(taskRepository.mapTaskToResponseModel);
  },
  getDepartmentPendingTasks: (department) => {
    return [...taskRepository.tasks]
      .filter(
        (task) =>
          task.assignedDepartment == department &&
          task.status == taskStatus.Pending
      )
      .map(taskRepository.mapTaskToResponseModel);
  },
  addTask: (task) => {
    taskRepository.tasks.push(task);
  },
  updateTask: (taskId, task) => {},
  deleteTask: (taskId) => {
    const taskIndex = taskRepository.tasks.findIndex((t) => t.id == taskId);
    taskRepository.tasks.splice(taskIndex, 1);
  },
  addLog: (task, userName, action) => {
    task.logs.push({ userName, action, date: new Date().toJSON() });
  },
  mapTaskToResponseModel: (task) => {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      assignedDepartment: task.assignedDepartment,
      user: {
        name: task.user.name,
        id: task.user.id,
      },
    };
  },
  resetData: () => {
    taskRepository.tasks = [
      {
        id: 8054,
        title: "Department Employee List",
        description:
          "Please send Sales Department Employee List us via email, Thanks.",
        user: { id: 2002, name: "John Doe" },
        assignedDepartment: 1,
        status: 0,
        logs: [
          {
            userName: "John Doe",
            action: "Created",
            date: "2021-06-02T09:18:41.815Z",
          },
        ],
      },
      {
        id: 4381,
        title: "Product Price List",
        description: "We need to Product Price List in this week, Thanks",
        user: { id: 1001, name: "Mary Glenn" },
        assignedDepartment: 2,
        status: 0,
        logs: [
          {
            userName: "Mary Glenn",
            action: "Created",
            date: "2021-06-02T08:10:40.134Z",
          },
        ],
      },
    ];
  },
};

module.exports = taskRepository;
