import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

/**
 * Get the static data required for the Home page.
 * The return of this is the input props to Home.
 * Ran at build time in prod.
 */
export async function getStaticProps()
{
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


/**
 * Home page with the route '/'. Contains links to all other pages.
 */
export default function Home({ allPostsData })
{
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Michael Hinkley and I am excited to work at ABS</p>
        <p>
          I also love to climb in my free time!
          <br />
          <Link href="/climbs">
            <a>Check out some of my climbing data!</a>
          </Link>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}