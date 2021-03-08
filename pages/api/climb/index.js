import * as service from '../service/climb-service'
/**
 * Endpoint for /api/climb
 * 
 * 
 * GET  - returns all stored data
 * POST - expects a body with a valid 'climb'
 *      - if valid, saved the climb and returns with new unique ID.
 * 
 * All other request types will be given a 404.
 * 
 * @param {*} req - the api request coming in
 * @param {*} res - the response from the api
 */
export default function handler(req, res)
{
	switch (req.method)
	{
		case 'GET':
			const data = service.findAll()
			res.status(200).json(data)
			break
		case 'POST':
			const savedClimb = service.save(req.body)
			if (savedClimb)
				res.status(200).json(savedClimb)
			else
				res.status(400).json()
			break
		default:
			res.status(404).json()
			break
	}
}