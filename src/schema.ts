import {gql} from 'apollo-server'
import {makeExecutableSchema} from 'apollo-server'
import {merge} from 'lodash'

import {typeDef as User} from './api/User/type-defs'
import {typeDef as Driver} from './api/Driver/type-defs'
import {resolvers as userResolvers} from './api/User/resolvers'
import {resolvers as driverResolvers} from './api/Driver/resolvers'

const Query = gql`
	type Query {
		allUsers: [User!]
		allDrivers(name: String!): [Driver!]
	}
`
const resolvers = {
	Query: {
		allUsers: () => ['all users'],
		allDrivers: () => ['all drivers'],
	},
}

const schema = makeExecutableSchema({
	typeDefs: [Query, User, Driver],
	resolvers: merge(resolvers, userResolvers, driverResolvers),
})

export default schema
