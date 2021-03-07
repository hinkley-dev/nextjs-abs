import { parseISO, format } from 'date-fns'

/**
 * Make the dates used look better for the dispaly.
 * 
 * @param {*} dateString - the date to be fromatted 
 */
export default function Date({ dateString })
{
	const date = parseISO(dateString)
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}