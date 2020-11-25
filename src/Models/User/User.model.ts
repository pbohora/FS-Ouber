import mongoose, {Document} from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import bcrypt from 'bcrypt'

import {User} from '../../types/graph'

const saltRounds = 10
export interface UserDocument extends Document, User {
	(): Promise<void>
}

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	verifiedEmail: {
		type: Boolean,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
		minlength: 3,
	},
	lastName: {
		type: String,
		required: true,
		minlength: 3,
	},
	age: {
		type: Number,
		min: 20,
		max: 100,
	},
	sex: {
		type: String,
		required: true,
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

userSchema.methods.getFullname = function () {
	return `${this.firstName} ${this.lastName}`
}

userSchema.pre<UserDocument>('save', async function (next) {
	if (this.password && this.isModified('password')) {
		const passwordHash = await bcrypt.hash(this.password, saltRounds)
		this.password = passwordHash
	}

	next()
})

userSchema.methods.checkPassword = async function (plainPassword: string) {
	const hashPassword = this.password
	return await bcrypt.compare(plainPassword, hashPassword)
}

module.exports = mongoose.model('User', userSchema)
