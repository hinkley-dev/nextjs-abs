
import { climbingData } from '../../../lib/climbing-data'
import _, { map } from 'underscore'



/**
 * Return all of the climb data from the database.\
 * (No database right now, just returning data from a static json array)
 */
export function findAll()
{
	return climbingData
}

/**
 * Find the climb with the given ID and return it.
 * If climb does not exist, return undefined.
 * 
 * @param {*} _id - ID of the climb
 */
export function findById(_id)
{
	return _.findWhere(climbingData, { id: parseInt(_id) })
}

/**
 * Validated the input and then assigns it a new UID as it is saved.
 * The newly saved climb (with new UID) is returned.
 * (No saving be done. Ideally this saves to a realtional table which generated the UID)
 * 
 * @param {*} newClimb - climb to be saved
 */
export function save(newClimb)
{
	let valid = validateClimb(newClimb)
	if (!valid) return false

	//this will be done by MySQL
	var maxClimbId = _.max(climbingData, function (climb)
	{
		return climb.id
	}).id
	newClimb.id = maxClimbId + 1
	//save new data here

	return newClimb
}

export function updateClimb(climb, id)
{
	if (!validateClimb(climb))
		return false

	//update the value in the json
	var updateClimb = _.find(climbingData, function (climb)
	{
		return climb.id = id
	})
	var updateClimb = climb

	//Ensure the Id doesn't change. (Even though this isn't actually being updated anywhere)
	updateClimb.id = id
	return updateClimb

}


/**
 * Validate the input before saving the new instance.
 * (No real validation right now, just checking that it has some keys)
 * 
 * @param {*} climb - the climb to be validated before being saved 
 */
function validateClimb(climb)
{
	var keys = _.allKeys(climb)
	return (_.contains(keys, 'name') && _.contains(keys, 'vScale_grade') && _.contains(keys, 'year_climbed') && _.contains(keys, 'star_rating'))
}
