const { hash } = require('bcryptjs')
const faker = require('faker')


const User = require('./src/app/models/admin/User')
const Chef = require('./src/app/models/admin/Chef')
const File = require('./src/app/models/admin/File')
const Recipe = require('./src/app/models/admin/Recipe')
const Base = require('./src/app/models/Base')

let usersIds = []
let totalUsers = 5
let totalChefs = 4
let totalRecipes = 20
let totalFiles = totalChefs + totalRecipes


async function createUsers() {
  const users = []
  const password = await hash('0000', 8)

  const trueOrFalse = [true, false]

  while (users.length < totalUsers) {

    users.push({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password,
      is_admin: trueOrFalse[Math.round(Math.random())],
    })

  }

  const usersPromise = users.map(user => User.create(user))
  usersIds = await Promise.all(usersPromise)
}

async function createChefs() {
  const chefs = []

  for (let i = 1; chefs.length < totalChefs; i++) {
    chefs.push({
      name: faker.name.firstName(),
      file_id: i
    })
  }

  const chefsPromise = chefs.map(chef => Chef.create(chef))
  chefsIds = await Promise.all(chefsPromise)
}

async function createFiles() {
  let files = []

  while (files.length < totalFiles) {
    files.push({
      name: faker.image.image(),
      path: `/images/placeholder.png`,
    })
  }

  const filesPromise = files.map(file => File.create(file))

  filesIds = await Promise.all(filesPromise)
}

async function createRecipes() {
  let recipes = []

  while (recipes.length < totalRecipes) {
    recipes.push({
      chef_id: Math.ceil(Math.random() * 3),
      user_id: usersIds[Math.floor(Math.random() * totalUsers)],
      title: faker.name.title(),
      ingredients: `{${faker.lorem.lines(5).split(' ')}}`,
      preparation: `{${faker.lorem.lines(5).split(' ')}}`,
      information: faker.lorem.paragraph(Math.ceil(Math.random() * 5))
    })
  }

  const recipesPromise = recipes.map(recipe => Recipe.create(recipe))
  recipesIds = await Promise.all(recipesPromise)


}

async function createPivotTableRelations() {
  const relations = []
  let recipesCount = 0

  for (let i = totalChefs + 1; relations.length < totalRecipes; i++) {
    recipesCount++

    relations.push({
      recipe_id: recipesCount,
      file_id: i
    })
  }

  const relationsPromises = relations.map(relation => {
    Base.init({
      table: 'recipe_files'
    })

    Base.create(relation)
  })

  await Promise.all(relationsPromises)
}

async function init() {
  await createUsers()
  await createFiles()
  await createChefs()
  await createRecipes()
  await createPivotTableRelations()
}

init()