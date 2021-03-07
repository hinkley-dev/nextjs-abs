import '../styles/global.css'

/**
 * Top-level component which will be common across all the different pages. 
 * Used to add global CSS files.
 * 
 * @param {*} Component - the component it is being applied to
 * @param {*} pagePros - the properties of the page it is being applied to
 */
export default function App({ Component, pageProps })
{
	return <Component {...pageProps} />
}