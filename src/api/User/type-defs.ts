import {gql} from 'apollo-server'

export const typeDef = gql`
	type User {
		name: String!
	}
`
