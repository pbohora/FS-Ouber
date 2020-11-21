import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	verifiedEmail: {
		type: Boolean,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
	},
	password: {
		type: String,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	verifiedPhoneNumber: {
		type: Boolean,
		required: true,
	},
	profilePhoto: {
		type: String,
	},
	createdAt: {
		type: String,
		required: true,
	},
	updatedAt: {
		type: String,
	},
	fullName: {
		type: String,
	},
	isDriving: {
		type: Boolean,
		required: true,
	},
	isRiding: {
		type: Boolean,
		required: true,
	},
	isBooked: {
		type: Boolean,
		required: true,
	},
	lastLat: {
		type: Number,
	},
	lastLong: {
		type: Number,
	},
	lastPosition: {
		type: Number,
	},
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
		delete returnedObject.passwordHash
	},
})

module.exports = mongoose.model('User', userSchema)
