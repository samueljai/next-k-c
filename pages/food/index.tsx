import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { fetchFood } from '../../services/foodService';
import Loading from '../../components/Common/Loading/Loading';
import Food from '../../components/Food/Food';

export const getServerSideProps = async () => {
    const data = await fetchFood();

    return {
        props: {
            hydrationData: {
                foodStore: {
                    foodList: data,
                },
            },
        },
    };
};

function index({
    hydrationData: {
        foodStore: { foodList },
    },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if (!foodList) return <Loading />;

    return (
        <>
            <Head>
                <title>Best Food of the World!</title>
                <meta
                    name="description"
                    content="List of the best Foods of the World"
                />
            </Head>
            <Food />
        </>
    );
}

export default index;
