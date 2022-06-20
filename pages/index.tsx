import type { NextPage } from 'next';
import Head from 'next/head';
import ArticleCard from '../components/Common/ArticleCard/ArticleCard';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <section className={styles.home} aria-label="Article List">
            <Head>
                <title>Best of the World!</title>
                <meta name="description" content="The best of the World" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.home__articleList}>
                <ArticleCard
                    to="/food"
                    imgSrc="https://pair-programming-test.s3.eu-west-2.amazonaws.com/images/chicken-jalfrezi.png"
                    imgAlt=""
                    title="Food"
                />
                <ArticleCard
                    to="/beaches"
                    imgSrc="https://img.delicious.com.au/quCP16aS/del/2019/09/hahei-bay-new-zealand-114893-2.jpg"
                    imgAlt=""
                    title="Beaches"
                />
            </div>
        </section>
    );
};

export default Home;
