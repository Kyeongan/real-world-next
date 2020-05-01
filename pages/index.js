import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<p>
				I’m Karl and I build the data visualizations for unique business insights{" "}
				<a href="https://twitter.com/karlkwonphd">@Twitter</a>{" "}
				<a href="https://www.linkedin.com/in/kyeongan/">@LinkedIn</a>
			</p>

			{/* <section className={utilStyles.headingMd}>…</section> */}
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}></section>
			<section className={utilStyles.headingMd}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{/* {id}
							<br /> */}
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}
