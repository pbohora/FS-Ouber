import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const messageSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
	chat: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Chat',
	},

	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},

	createdAt: {
		type: String,
		required: true,
	},
	updatedAt: {
		type: String,
	},
})

messageSchema.plugin(uniqueValidator)

messageSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	},
})

module.exports = mongoose.model('Message', messageSchema)
