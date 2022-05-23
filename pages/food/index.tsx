import useSWR from 'swr';
import Food from '../../components/Food/Food';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function index() {
    const { data, error } = useSWR(
        'https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json',
        fetcher
    );

    if (error) return <div>Failed to load</div>;
    if (!data && !error) return <div>Loading...</div>;

    return <Food foodList={data} />;
}

export default index;
