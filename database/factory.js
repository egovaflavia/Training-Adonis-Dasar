const Factory = use('Factory')

Factory.blueprint('App/Models/Todo', (faker) => {
  return {
    title: faker.sentence(),
    description: faker.paragraph()
  }
})
