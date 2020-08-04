const { user, todoItem, todoList, tag } = require("./models");

async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todoList, attributes: ["name"] },
  });
  return allUsers.map((user) => user.get({ plain: true }));
}

// getUsers().then((users) => console.log(users));

async function getTodoItems() {
  const todoItems = await todoItem.findAll({
    include: { model: todoList, attributes: ["name"] },
  });
  return todoItems.map((todoItem) => todoItem.get({ plain: true }));
}

// getTodoItems().then((todoItems) => console.log(todoItems));

async function getUserWithList(id) {
  const result = await user.findByPk(id, { include: [todoList] });
  return result.get({ plain: true });
}

// getUserWithList(1).then((user) => console.log("user by id with lists", user));

async function itemsWithTags() {
  const items = await todoItem.findAll({ include: [tag] });
  return items.map((item) => item.get({ plain: true }));
}

itemsWithTags().then((items) => console.log("items with tags", items));
