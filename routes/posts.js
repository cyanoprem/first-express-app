const express = require("express")
const postsController = require("../controllers/posts")
const postRouter = express.Router()
const postController = require("../controllers/post")
const postCreateController = require("../controllers/postCreate")
const postUpdateController = require("../controllers/postUpdate")
const postDeleteController = require("../controllers/postDelete")

postRouter.get("/", postsController)
postRouter.get("/:id", postController)
postRouter.post("/", postCreateController)
postRouter.put("/:id", postUpdateController)
postRouter.delete("/:id", postDeleteController)

module.exports = postRouter

