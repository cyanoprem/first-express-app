// const generatePost = require("../utils/genratePosts");

// const postsController = (req, res) => {
//   const posts = Array.from({length: 100}).map(generatePost)
//   res.send(posts)
//   console.log(posts);
// }

// module.exports = postsController

const postsModel = require("../models/post")

const postsController = async (req, res) => {
  const posts = await postsModel.find({}).exec()
  res.send(posts)
}

module.exports = postsController