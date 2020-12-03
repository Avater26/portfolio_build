const auth = require("../middleware/auth");
const isAdmin = require("../middleware/isAdmin");

const {
  getDash,
  getUsers,
  getNewUser,
  createUser,
  getUserEdit,
  editUser,
  deleteUser,
} = require("../controllers/admin_users.controller");
const {
  getHouseTypes,
  getNewHouseType,
  createHouseType,
  getHouseTypeEdit,
  editHouseType,
  deleteHouseType,
} = require("../controllers/admin_house_types.controller");
const {
  getHouses,
  getNewHouse,
  createNewHouse,
  getHouseEdit,
  editHouse,
  deleteHouse,
  setPrimaryImage,
} = require("../controllers/admin_houses.controller");
const {
  getRoles,
  getNewRole,
  createRole,
  getRoleEdit,
  editRole,
  deleteRole,
} = require("../controllers/admin_roles.controller");

const {
  getTimes,
  getTimesEdit,
  editTimes,
} = require("../controllers/admin_open_times.controller");

const {
  getNews,
  getNewsCreate,
  createNews,
  getNewsEdit,
  editNews,
  deleteNews,
} = require("../controllers/admin_news.controller");

const {
  getContact,
  getContactEdit,
  editContact,
} = require("../controllers/admin_contact.controller");
const {
  getComments,
  deleteComment,
} = require("../controllers/admin_comments.controller");
module.exports = function (app) {
  // Load admin panel
  app.get("/exam/admin", auth, isAdmin, getDash);

  // Load admin panel dashboards
  app.get("/exam/admin/users", auth, isAdmin, getUsers);
  app.get("/exam/admin/houses", auth, isAdmin, getHouses);
  app.get("/exam/admin/house_types", auth, isAdmin, getHouseTypes);
  app.get("/exam/admin/roles", auth, isAdmin, getRoles);
  app.get("/exam/admin/open_times", auth, isAdmin, getTimes);
  app.get("/exam/admin/news", auth, isAdmin, getNews);
  app.get("/exam/admin/contact", auth, isAdmin, getContact);
  app.get("/exam/admin/comments", auth, isAdmin, getComments);

  // Load and create new user, house, category or role
  app.get("/exam/admin/user/new", auth, isAdmin, getNewUser);
  app.post("/exam/admin/user/new", auth, isAdmin, createUser);

  app.get("/exam/admin/house/new", auth, isAdmin, getNewHouse);
  app.post("/exam/admin/house/new", auth, isAdmin, createNewHouse);

  app.get(
    "/exam/admin/house_type/new",
    auth,
    isAdmin,
    getNewHouseType
  );
  app.post(
    "/exam/admin/house_type/new",
    auth,
    isAdmin,
    createHouseType
  );

  app.get("/exam/admin/role/new", auth, isAdmin, getNewRole);
  app.post("/exam/admin/role/new", auth, isAdmin, createRole);

  app.get("/exam/admin/news/new", auth, isAdmin, getNewsCreate);
  app.post("/exam/admin/news/new", auth, isAdmin, createNews);

  // Load and edit a user, house, category or role
  app.get("/exam/admin/user/edit/:id", auth, isAdmin, getUserEdit);
  app.post("/exam/admin/user/edit/:id", auth, isAdmin, editUser);

  app.get("/exam/admin/house/edit/:id", auth, isAdmin, getHouseEdit);
  app.post("/exam/admin/house/edit/:id", auth, isAdmin, editHouse);
  app.post(
    "/exam/admin/house/setPrimaryImage",
    auth,
    isAdmin,
    setPrimaryImage
  );

  app.get(
    "/exam/admin/house_type/edit/:id",
    auth,
    isAdmin,
    getHouseTypeEdit
  );
  app.post(
    "/exam/admin/house_type/edit/:id",
    auth,
    isAdmin,
    editHouseType
  );

  app.get("/exam/admin/role/edit/:id", auth, isAdmin, getRoleEdit);
  app.post("/exam/admin/role/edit/:id", auth, isAdmin, editRole);

  app.get(
    "/exam/admin/open_times/edit/:id",
    auth,
    isAdmin,
    getTimesEdit
  );
  app.post(
    "/exam/admin/open_times/edit/:id",
    auth,
    isAdmin,
    editTimes
  );

  app.get("/exam/admin/news/edit/:id", auth, isAdmin, getNewsEdit);
  app.post("/exam/admin/news/edit/:id", auth, isAdmin, editNews);

  app.get(
    "/exam/admin/contact/edit/:id",
    auth,
    isAdmin,
    getContactEdit
  );
  app.post("/exam/admin/contact/edit/:id", auth, isAdmin, editContact);

  // Delete a user, house, category or role
  app.get("/exam/admin/user/delete/:id", auth, isAdmin, deleteUser);
  app.get("/exam/admin/house/delete/:id", auth, isAdmin, deleteHouse);
  app.get(
    "/exam/admin/house_type/delete/:id",
    auth,
    isAdmin,
    deleteHouseType
  );
  app.get("/exam/admin/role/delete/:id", auth, isAdmin, deleteRole);
  app.get("/exam/admin/news/delete/:id", auth, isAdmin, deleteNews);
  app.get(
    "/exam/admin/comment/delete/:id",
    auth,
    isAdmin,
    deleteComment
  );
};
