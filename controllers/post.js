// const generatePost = require("../utils/genratePosts");

// const postController = (req, res) => {
//   const id = req.params.id
//   const post = generatePost()
//   post.id = id
//   res.send(post)
// }

// module.exports = postController

const postsModel = require("../models/post")

const postController = async (req, res) => {
  const post = await postsModel.findById(req.params.id).exec()
  res.send(post)
}

module.exports = postController