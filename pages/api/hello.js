/**
 * A GET endpoint for/api/hello
 * 
 * @param {*} req - the api request coming in
 * @param {*} res - the response from the api
 */
export default function handler(req, res)
{
	res.status(200).json({ text: 'Hello' })
}