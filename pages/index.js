// pages/index.js
import Link from "next/link";
import Script from 'next/script'
import Image from 'next/image'
import { client } from "../libs/client";
import Head from '../components/Head';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.scss';

export default function Home({ blog }) {
  return (
    <>
      <Head title=''>
      <Script src="//typesquare.com/3/tsst/script/ja/typesquare.js?61e91dcf6fd04da8908859fdac1e02e5" />
      </Head>
      <header>
        <h1 className={styles.logo}>
          <Link href="/">
            <a>
              <Image src="/satonogopan.svg" width={100} height={100} alt="" />
              <span className={styles.sitetitle}>さとうのごぱん</span>
            </a>
          </Link>
        </h1>
        <Nav />
      </header>
      <main>
        <ul className={styles.bloglist}>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a className={styles.title}>{blog.title}</a>
              </Link>
              <div className={styles.blogmeta}>
                <p className={styles.category}>
                <Link href={blog.category && `category/${blog.category.id}`}>
                  <a>{blog.category && `${blog.category.name}`}</a>
                </Link>
                </p>
                <p className={styles.date}>{new Date(blog.publishedAt).toLocaleDateString()}</p>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${blog.body}`,
                }}
              />
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <address>&copy; satonogopan.</address>
      </footer>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
