import { faker } from '@faker-js/faker'
import { NextApiRequest, NextApiResponse } from 'next'

const fakerCategories = (_req: NextApiRequest, res: NextApiResponse) => {
  const categories = []

  for (let index = 0; index < 5; index++) {
    const category = {
      index,
      category: faker.commerce.productMaterial()
    }

    categories.push(category)
  }

  res.status(200).json(JSON.stringify(categories))
}

export default fakerCategories