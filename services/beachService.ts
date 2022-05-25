import { BeachListProps } from '../components/Beaches/Components/BeachList/BeachList';

async function fetchBeaches(): Promise<BeachListProps> {
    const response = await fetch('http://localhost:3000/api/beaches');
    const { data } = await response.json();

    return data;
}

export { fetchBeaches };
