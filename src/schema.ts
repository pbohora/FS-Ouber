import path from 'path'
import {GraphQLSchema} from 'graphql'
import {fileLoader, mergeResolvers, mergeTypes} from 'merge-graphql-schemas'
import {makeExecutableSchema} from 'apollo-server'

const allTypes: GraphQLSchema[] = fileLoader(
	path.join(__dirname, './api/**/*.graphql'),
)

const allResolvers = fileLoader(path.join(__dirname, './api/**/*.resolvers.*'))

const mergedTypes = mergeTypes(allTypes)

const mergedResolvers = mergeResolvers(allResolvers)

const schema = makeExecutableSchema({
	typeDefs: mergedTypes,
	resolvers: mergedResolvers,
})

export default schema
