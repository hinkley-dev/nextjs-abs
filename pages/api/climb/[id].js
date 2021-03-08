import * as service from '../service/climb-service'
/**
 * Endpoint for /api/climb/{id}
 * 
 * 
 * GET  - returns the climb with the given {id}
 * PUT - expects a body with a valid 'climb' and a given {id}
 *      - if valid and if the climb exists, updates the climb and returns updated object.
 * 
 * All other request types will be given a 404.
 * 
 * @param {*} req - the api request coming in
 * @param {*} res - the response from the api
 */
export default function handler(req, res)
{
	var notFoundError = { message: "No climb found with Id: " + id }
	var invalidBodyError = { message: "PUT climb to save is invalid. Required fields = (name, vScale_grade, year_climbed, star_rating)" }
	var invalidRequestError = { message: "/climb/{id} only allows for PUT or GET requests" }

	//if the given ID, does not exist, no operations can be performed
	const id = parseInt(req.query.id)
	const climb = service.findById(id)
	if (!climb)
		res.status(404).json(notFoundError)

	switch (req.method)
	{
		case 'GET':
			res.status(200).json(climb)

		case 'PUT':
			const updatedClimb = service.updateClimb(req.body, id)
			if (updatedClimb)
				res.status(200).json(updatedClimb)
			else
				res.status(400).json(invalidBodyError)
			break

		default:
			res.status(404).json(invalidRequestError)
			break
	}
}