import Link from "next/link";
import { client } from '../../libs/client';
import styles from '../../styles/Home.module.scss';
import Head from '../../components/Head';
import Script from 'next/script'
import Layout from '../../components/Layout';

export default function BlogId({ blog }) {
  return (
    <>
    <Head title={`${blog.title}｜`}>
    <Script src="//typesquare.com/3/tsst/script/ja/typesquare.js?61e91dcf6fd04da8908859fdac1e02e5" />
    </Head>
    <main className={styles.main}>
      <div className={styles.maininner}>
        <h1 className={styles.title}>{blog.title}</h1>
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
  				className={styles.post}
        />
      </div>
    </main>
    </>
  );
}

BlogId.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
