const { user, todoItem, todoList } = require("./models");

async function listsWithUsers() {
  try {
    const lists = await todoList.findAll({
      include: [user],
    });

    return lists.map((list) => list.get({ plain: true }));
  } catch (e) {
    console.error(e);
  }
}

listsWithUsers().then((lists) => console.log(lists));
