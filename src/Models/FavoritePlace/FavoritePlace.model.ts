import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const favoritePlaceSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	lat: {
		type: Number,
		required: true,
	},
	long: {
		type: Number,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	isFavorite: {
		type: Boolean,
		required: true,
	},
	isMostVisited: {
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
})

favoritePlaceSchema.plugin(uniqueValidator)

favoritePlaceSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	},
})

module.exports = mongoose.model('FavoritePlace', favoritePlaceSchema)
