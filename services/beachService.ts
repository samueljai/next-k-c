import { NextApiRequest } from 'next';
import { BeachListProps } from '../components/Beaches/Components/BeachList/BeachList';

async function fetchBeaches(req: NextApiRequest): Promise<BeachListProps> {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const baseUrl = req ? `${protocol}://${req.headers.host}` : '';

    const response = await fetch(baseUrl + '/api/beaches');
    const { data } = await response.json();

    return data;
}

export { fetchBeaches };
