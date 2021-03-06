import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const rideSchema = new mongoose.Schema({
	status: {
		type: String,
		required: true,
	},
	pickupAddress: {
		type: String,
		required: true,
	},
	pickupLat: {
		type: Number,
		required: true,
	},
	pickupLong: {
		type: Number,
		required: true,
	},
	destinationAddress: {
		type: String,
		required: true,
	},
	destinationLat: {
		type: Number,
		required: true,
	},
	destinationLong: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	duration: {
		type: String,
		required: true,
	},
	distance: {
		type: String,
		required: true,
	},
	createdAt: {
		type: String,
		required: true,
	},
	updatedAt: {
		type: String,
	},
	driver: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},

	passenger: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
})

rideSchema.plugin(uniqueValidator)

rideSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	},
})

module.exports = mongoose.model('Ride', rideSchema)
