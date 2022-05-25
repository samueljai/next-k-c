import { InferGetServerSidePropsType } from 'next';
import { fetchBeaches } from '../../services/beachService';
import Loading from '../../components/Common/Loading/Loading';
import Beaches from '../../components/Beaches/Beaches';

export const getServerSideProps = async () => {
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

    return <Beaches />;
}

export default index;
