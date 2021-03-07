import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'


/**
 * The specific post being dispalyed
 * 
 * @param {*} postData - the data of the atual blog post
 */
export default function Post({ postData })
{
	return (
		<Layout>
			{postData.title}
			<br />
			{postData.id}
			<br />
			{postData.date}
		</Layout>
	)
}

/**
 * Return a list of possible value for id
 */
export async function getStaticPaths()
{
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

/**
 * Fetch necessary data for the blog post using params.id
 * 
 * @param {*} param - contains the id of the blog post to load the data for
 */
export async function getStaticProps({ params })
{
	const postData = getPostData(params.id)
	return {
		props: {
			postData

		}
	}
}