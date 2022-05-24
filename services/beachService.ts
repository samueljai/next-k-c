import { getBeachListData } from '../data/beachData';
import { BeachItemProps } from '../components/Beaches/Components/BeachListItem/BeachListItem';

const errorMessage = 'Error fetching data';

function fetchBeaches(returnData = true): Promise<BeachItemProps[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const beachListData = getBeachListData(returnData);

            console.log('beachListData: ', beachListData);

            if (beachListData) {
                resolve(beachListData.beachList);
            } else {
                reject(errorMessage);
            }
        }, 0);
    });
}

export { fetchBeaches, errorMessage };
