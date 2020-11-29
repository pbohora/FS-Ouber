import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const chatSchema = new mongoose.Schema({
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Message',
		},
	],
	participants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	createdAt: {
		type: String,
		required: true,
	},
	updatedAt: {
		type: String,
	},
})

chatSchema.plugin(uniqueValidator)

chatSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	},
})

module.exports = mongoose.model('Chat', chatSchema)
