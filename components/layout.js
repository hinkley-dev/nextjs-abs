import styles from './layout.module.css'
/**
 * Layout component - allows styling to be added to any component when used as a wrappper.
 * 
 * @param {*} children - the component or page it is wrapping 
 */
export default function Layout({ children })
{
	return <div className={styles.container}>{children}</div>
}