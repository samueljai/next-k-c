import { InferGetServerSidePropsType } from 'next';
import Loading from '../../components/Common/Loading/Loading';
import Food from '../../components/Food/Food';

export const getServerSideProps = async () => {
    const response = await fetch(
        'https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json'
    );
    const data = await response.json();

    return {
        props: { foodList: data },
    };
};

function index({
    foodList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    if (!foodList) return <Loading />;

    return <Food foodList={foodList} />;
}

export default index;
