import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const cars: QueryResolvers['cars'] = () => {
  return db.car.findMany()
}

export const car: QueryResolvers['car'] = ({ id }) => {
  return db.car.findUnique({
    where: { id },
  })
}

export const createCar: MutationResolvers['createCar'] = ({ input }) => {
  return db.car.create({
    data: input,
  })
}

export const updateCar: MutationResolvers['updateCar'] = ({ id, input }) => {
  return db.car.update({
    data: input,
    where: { id },
  })
}

export const deleteCar: MutationResolvers['deleteCar'] = ({ id }) => {
  return db.car.delete({
    where: { id },
  })
}
