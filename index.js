const express = require("express")
const app = express()
app.use(express.json())
require("express-async-errors")

// const faker = require("@faker-js/faker")
// const postsController = require("./controllers/posts")
// const postController = require("./controllers/post")
// const fakerInstance = new faker.Faker({locale: [faker.en]})
// https://mongoosejs.com/docs/guide.html
// https://mongoosejs.com/docs/api/model.html
// https://mongoosejs.com/docs/api/model.html#Model.updateOne()
// https://mongoosejs.com/docs/api/model.html#Model.deleteOne()
// npm install express-async-errors


const postRouter = require("./routes/posts")
const mongoose = require("mongoose")
app.use("/post", postRouter)

app.use((err, req, res, next) => {
  res.send("Some error occured")
})

mongoose.connect("mongodb+srv://burztcrew:0NdsKMN4Ib8CG3oc@cluster0.36xw4ev.mongodb.net/postdb?retryWrites=true&w=majority")
.then(() => {
  console.log("Connected to DB");
  app.listen(8000)
})

// const jsObj = {
//   a: 1,
//   b: undefined,
//   c: null
// }

// console.log(JSON.stringify(jsObj));



// get, post, put, delete
// http - 200-ok, 201-created, 204-no content, 400-bad request, 404-not found, 401-unauthorised, 500-server error, 503-service unavailable
// npm i @faker-js/faker
// https://mongoosejs.com/docs/guide.html
// https://mongoosejs.com/docs/api/model.html

// app.get("/", (req, res) => {
//   console.log("Hello")
//   res.send("Hey")
// })

// app.get("/:id", (req, res) => {
//   console.log(req.params)
//   console.log(req.query)
//   res.send(`This is ${req.params.id}`)
// })

// app.post("/", (req, res) => {
//   console.log(req.body)
//   console.log(req.headers)
//   res.send("Sent from post request")
// })


// app.get("/posts", postsController)
// app.get("/post/:id", postController)


