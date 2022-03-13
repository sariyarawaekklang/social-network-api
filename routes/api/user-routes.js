const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  addFriend,
  removeFriend,
  deleteUser
} = require('../../controllers/user-controller');
const { remove } = require('../../models/User');

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/<userId>
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/<userId>/friends
//router
//  .route('/:userId/friends')
//  .post(addFriend);

// /api/users/<userId>/friends/<friendId>
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
