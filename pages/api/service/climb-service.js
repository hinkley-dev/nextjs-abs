
import { climbingData } from '../../../lib/climbing-data'
import _, { map } from 'underscore'



/**
 * Return all of the climb data from the "database"
 */
export function findAll()
{
	return climbingData
}

export function save(newClimb)
{
	console.log(newClimb)
	let valid = validateNewClimb(newClimb)
	if (!valid) return false

	var maxClimbId = _.max(climbingData, function (climb)
	{
		return climb.id
	}).id
	newClimb.id = maxClimbId + 1
	//save new data
	return newClimb

}


function validateNewClimb(newClimb)
{
	// var climb = JSON.parse(newClimb)
	var keys = _.allKeys(newClimb)
	return (_.contains(keys, 'name') && _.contains(keys, 'vScale_grade') && _.contains(keys, 'year_climbed') && _.contains(keys, 'star_rating'))
}
