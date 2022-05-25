import { getBeachListData } from '../data/beachData';
import { BeachListProps } from '../components/Beaches/Components/BeachList/BeachList';

type BeachListType = BeachListProps | null;

function fetchBeaches(returnData = true): BeachListType {
    const data = getBeachListData(returnData);

    return data;
}

export { fetchBeaches };
