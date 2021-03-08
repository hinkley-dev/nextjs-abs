import Head from 'next/head'
import Layout from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import useSWR from 'swr'
import fetch from 'node-fetch'




const fetcher = url => fetch(url).then(r => r.json())

/**
 * The specific post being dispalyed
 * 
 * @param {*} postData - the data of the atual blog post
 */
export default function Climbs({ climbingData })
{

	console.log(climbingData)
	return (
		<Layout>
		</Layout>
	)
}

export async function getStaticProps()
{
	const res = await fetch('http://localhost:3000/api/climb')
	const climbingData = await res.json()
	return {
		props: {
			climbingData
		}
	}

}