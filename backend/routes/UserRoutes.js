// const UserController = require("../controllers/UserControllers");

const addToLikedMovies = require("../controllers/UserControllers");
const getLikedMovies = require("../controllers/UserControllers");
const removeFromLikedMovies = require("../controllers/UserControllers");

// const {
//     addToLikedMovies,
//     getLikedMovies,
//     // removeFromLikedMovies,
//   } = require("../controllers/UserControllers");
  
  const router = require("express").Router();
  
  router.get("/liked/:email", getLikedMovies.getLikedMovies);
  router.post("/add", addToLikedMovies.addToLikedMovies);
  router.put("/remove", removeFromLikedMovies.removeFromLikedMovies);
  
  module.exports = router;