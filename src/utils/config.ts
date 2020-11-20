const defaultPort = 3001

interface Environment {
	apollo: {
		introspection: boolean
		playground: boolean
	}
	port: number | string
	MONGODB_URI: string
}

export const environment: Environment = {
	apollo: {
		introspection: process.env.APOLLO_INTROSPECTION === 'true',
		playground: process.env.APOLLO_PLAYGROUND === 'true',
	},
	port: process.env.PORT || defaultPort,
	MONGODB_URI: process.env.MONGODB_URI,
}
