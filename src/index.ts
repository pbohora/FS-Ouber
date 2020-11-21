import app from './app'
import connectDb from './database/db'
import {environment} from './utils/config'

connectDb()
	.then(() => console.log('Database is connected'))
	.catch(() => console.log('Database connection error'))

app
	.listen(environment.port)
	.then(({url}) => console.log(`Server ready at ${url}. `))
