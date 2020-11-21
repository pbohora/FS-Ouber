import mongoose from 'mongoose'
import {environment} from '../utils/config'

const connectDb = (url = environment.MONGODB_URI, opts = {}) => {
	return mongoose.connect(url, {
		...opts,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
}

export default connectDb
