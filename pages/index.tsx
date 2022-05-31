import type { NextPage } from 'next';
import Head from 'next/head';
import ArticleCard from '../components/Common/ArticleCard/ArticleCard';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.home}>
            <Head>
                <title>Best of the World!</title>
                <meta name="description" content="The best of the World" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className={styles.home__articleList}>
                <ArticleCard
                    to="/food"
                    imgSrc="https://pair-programming-test.s3.eu-west-2.amazonaws.com/images/chicken-jalfrezi.png"
                    imgAlt="foodImage"
                    title="Food"
                />
                <ArticleCard
                    to="/beaches"
                    imgSrc="https://img.delicious.com.au/quCP16aS/del/2019/09/hahei-bay-new-zealand-114893-2.jpg"
                    imgAlt="beachImage"
                    title="Beaches"
                />
            </section>
        </div>
    );
};

export default Home;
