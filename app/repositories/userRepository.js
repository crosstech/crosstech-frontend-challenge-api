const userRepository = {
  users: [
    {
      id: 1001,
      name: "Mary Glenn",
      title: "HR Specialist",
      email: "mary@company.com",
      department: 1,
    },
    {
      id: 2002,
      name: "John Doe",
      title: "Sales Manager",
      email: "john@company.com",
      department: 2,
    },
  ],
  getAll: () => {
    return userRepository.users;
  },
  getById: (userId) => {
    return userRepository.users.find((user) => user.id == userId);
  },
  getByEmail: (email) => {
    return userRepository.users.find((user) => user.email == email);
  },
};

module.exports = userRepository;
