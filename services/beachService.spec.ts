import { fetchBeaches } from './beachService';
import { mockBeachListData } from '../mocks/beachListDataMock';

jest.mock('./beachService');

afterEach(() => {
    jest.resetAllMocks();
});

describe('beachService', () => {
    it('fetchBeaches function returns mock data if successful', async () => {
        const mockGetBeachListData = fetchBeaches as jest.MockedFunction<
            typeof fetchBeaches
        >;

        mockGetBeachListData.mockImplementation(() => {
            return new Promise((resolve): void => {
                resolve(mockBeachListData);
            });
        });

        let beachList;
        await fetchBeaches().then((data) => (beachList = data));

        expect(beachList).toMatchObject(mockBeachListData);
        expect(mockGetBeachListData).toHaveBeenCalledTimes(1);
    });

    it('fetchBeaches function returns error message if error', async () => {
        const mockGetBeachListData = fetchBeaches as jest.MockedFunction<
            typeof fetchBeaches
        >;

        const errorMessage = 'can not access';
        mockGetBeachListData.mockImplementation(() => {
            return new Promise((_resolve, reject): void => {
                reject(errorMessage);
            });
        });

        await expect(fetchBeaches()).rejects.toEqual(errorMessage);
        expect(mockGetBeachListData).toHaveBeenCalledTimes(1);
    });
});
