import { MongoClient } from 'mongodb'

const { mongodbUri } = useRuntimeConfig()

export default new MongoClient(mongodbUri).db('rosa-dev-br')
