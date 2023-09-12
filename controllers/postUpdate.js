const postsModel = require("../models/post")

const postUpdateController = async (req, res) => {
  const postId = req.params.id
  const updates = req.body
  const post = await postsModel.updateOne({_id: postId}, updates)
  res.send(post)
}

module.exports = postUpdateController