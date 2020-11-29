import mongoose, {Document} from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import {UserVerification} from '../../types/graph'

export interface VerificationDocument extends Document, UserVerification {
	(): Promise<void>
}

const userVerificationSchema = new mongoose.Schema({
	verificationMethod: {
		type: String,
		required: true,
	},
	payload: {
		type: String,
		required: true,
		unique: true,
	},
	key: {
		type: String,
		required: true,
	},
	used: {
		type: Boolean,
		required: true,
	},
	createdAt: {
		type: String,
		required: true,
	},
	updatedAt: {
		type: String,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
})

userVerificationSchema.plugin(uniqueValidator)

userVerificationSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	},
})

userVerificationSchema.pre<VerificationDocument>('save', async function (next) {
	if (this.verificationMethod === 'PHONE') {
		this.key = Math.floor(Math.random() * 100000).toString()
	} else {
		this.key = Math.random().toString(36).substr(2)
	}

	next()
})

module.exports = mongoose.model('UserVerification', userVerificationSchema)
