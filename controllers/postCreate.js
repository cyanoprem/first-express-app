const postsModel = require("../models/post")

const postCreateController = async (req, res) => {
  const post = new postsModel({
    title: req.body.title,
    imgLink: req.body.imgLink
  })
  await post.save()
  res.send(post)
}

module.exports = postCreateController