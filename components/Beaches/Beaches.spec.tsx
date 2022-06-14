import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RootStoreProvider } from '../../providers/RootStoreProvider';
import { mockBeachListData } from '../../mocks/beachListDataMock';
import Beaches from './Beaches';

describe('Food List', () => {
    it('renders a header, and beach list component once loaded', async () => {
        const hydrationData = {
            beachStore: {
                beachList: mockBeachListData,
            },
        };

        render(
            <RootStoreProvider hydrationData={hydrationData}>
                <Beaches />
            </RootStoreProvider>
        );

        expect(screen.getByText('Beaches')).toBeInTheDocument();
        expect(
            screen.getAllByTestId(new RegExp(`sortButtons__`, 'i')).length
        ).toBeGreaterThan(0);
        expect(screen.getByTestId('beachList')).toBeInTheDocument();
    });
});
