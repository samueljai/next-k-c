import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { fetchBeaches } from '../../services/beachService';
import Loading from '../../components/Common/Loading/Loading';
import Beaches from '../../components/Beaches/Beaches';

export const getServerSideProps: GetServerSideProps = async () => {
    const data = await fetchBeaches();

    return {
        props: {
            hydrationData: {
                beachStore: {
                    beachList: data,
                },
            },
        },
    };
};

function index({
    hydrationData: {
        beachStore: { beachList },
    },
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if (!beachList) return <Loading />;

    return (
        <>
            <Head>
                <title>Best Beaches of the World!</title>
                <meta
                    name="description"
                    content="List of the best Beaches in the World"
                />
            </Head>
            <Beaches />;
        </>
    );
}

export default index;
