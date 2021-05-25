import { createConnection, getConnection } from 'typeorm'

const create = async () => {
  return await createConnection()
}

const close = async () => {
  await getConnection().close()
}

const clear = async () => {
  const connection = getConnection()
  const entities = connection.entityMetadatas

  entities.forEach(async (entity) => {
    const repository = connection.getRepository(entity.name)
    await repository.query(`DELETE FROM ${entity.tableName}`)
  })
}

create()

export {
  create,
  close,
  clear
}
