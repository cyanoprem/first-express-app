const mongoose = require("mongoose")

const postsSchema = new mongoose.Schema({
  title: String,
  imgLink: String,
})

const postsModel = mongoose.model("Post", postsSchema)

module.exports = postsModel