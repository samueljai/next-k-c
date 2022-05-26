import { BeachItemType } from '../components/Beaches/Components/BeachListItem/BeachListItem';

const baseUrl = process.env.BASE_URL;

async function fetchBeaches(): Promise<BeachItemType[]> {
    const response = await fetch(baseUrl + '/api/beaches');
    const { data } = await response.json();

    return data;
}

export { fetchBeaches };
