import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Posts from '../components/Posts'
import PostForm from '../components/Postform'
import { Provider } from  'react-redux'
import store from './store'



export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}




export default function Home({ allPostsData }) {
  return (
    <Provider store={store}>
      <Layout home>
        {/* Keep the existing code here */}

        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello, I'm <strong>Rey</strong>. I'm a software enginer and a basic translator for (English/Japanese). You can contact me on 
            <a> Instagram</a>. 
            </p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
  

        {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

            <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                {id}
                <br />
                <small className={utilStyles.listItem}>
                  <Date dateString={date}/>
                </small>
              </li>
            ))}
          </ul>
        </section>
        <hr />
        <PostForm />
        <br />
        <Posts />
      </Layout>
    </Provider>
  )
};