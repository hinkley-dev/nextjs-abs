
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
 * Validated the input and then assigns it a new UID as it is saved.
 * The newly saved climb (with new UID) is returned.
 * (No saving be done. Ideally this saves to a realtional table which generated the UID)
 * 
 * @param {*} newClimb - climb to be saved
 */
export function save(newClimb)
{
	let valid = validateNewClimb(newClimb)
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


/**
 * Validate the input before saving the new instance.
 * (No real validation right now, just checking that it has some keys)
 * 
 * @param {*} newClimb - the new climb to be validated before being saved 
 */
function validateNewClimb(newClimb)
{
	var keys = _.allKeys(newClimb)
	return (_.contains(keys, 'name') && _.contains(keys, 'vScale_grade') && _.contains(keys, 'year_climbed') && _.contains(keys, 'star_rating'))
}
