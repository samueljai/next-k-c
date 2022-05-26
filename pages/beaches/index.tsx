import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { fetchBeaches } from '../../services/beachService';
import Loading from '../../components/Common/Loading/Loading';
import Beaches from '../../components/Beaches/Beaches';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await fetchBeaches(context.req);

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

    return <Beaches />;
}

export default index;
