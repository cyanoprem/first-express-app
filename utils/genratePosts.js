const faker = require("@faker-js/faker")
// const postsController = require("./controllers/posts")
// const postController = require("./controllers/post")
const fakerInstance = new faker.Faker({locale: [faker.en]})

const generatePost = () => {
  return {
    id: fakerInstance.datatype.uuid(),
    title: fakerInstance.lorem.sentence(),
    imgLink: fakerInstance.image.url()
  }
}

module.exports = generatePost