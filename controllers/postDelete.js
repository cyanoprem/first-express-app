const postsModel = require("../models/post")

const postDeleteController = async (req, res) => {
  const postId = req.params.id
  const post = await postsModel.deleteOne({_id: postId})
  res.send(post)
}

module.exports = postDeleteController