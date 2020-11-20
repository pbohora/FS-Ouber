import {gql} from 'apollo-server'

export const typeDef = gql`
	type Driver {
		name: String!
	}
`
