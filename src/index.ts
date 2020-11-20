import app from './app'

import {environment} from './utils/config'

app
	.listen(environment.port)
	.then(({url}) => console.log(`Server ready at ${url}. `))
