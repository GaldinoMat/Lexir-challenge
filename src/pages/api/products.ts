import { faker } from '@faker-js/faker'
import { NextApiRequest, NextApiResponse } from 'next'

const fakerProducts = (_req: NextApiRequest, res: NextApiResponse) => {
  const products = []

  for (let index = 0; index < 20; index++) {
    const product = {
      index,
      productName: faker.commerce.productName(),
      department: faker.commerce.department(),
      price: faker.commerce.price(10, 32, 0, "$")
    }

    products.push(product)
  }

  res.status(200).json(JSON.stringify(products))
}

export default fakerProducts