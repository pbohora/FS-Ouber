import dotenv from 'dotenv'
dotenv.config()
import {ApolloServer} from 'apollo-server'

import {environment} from './utils/config'
import schema from './schema'

const app = new ApolloServer({
	schema,
	introspection: environment.apollo.introspection,
	playground: environment.apollo.playground,
})

export default app
