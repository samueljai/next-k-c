import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RootStoreProvider } from '../../providers/RootStoreProvider';
import { mockFoodListData } from '../../mocks/foodListDataMock';
import Food from './Food';

describe('Food List', () => {
    it('renders a header, sort by and food list component once loaded', async () => {
        const hydrationData = {
            foodStore: {
                foodList: mockFoodListData,
            },
        };

        render(
            <RootStoreProvider hydrationData={hydrationData}>
                <Food />
            </RootStoreProvider>
        );

        expect(screen.getByText('Food')).toBeInTheDocument();
        expect(
            screen.getAllByTestId(new RegExp(`sortBy__`, 'i')).length
        ).toBeGreaterThan(0);
        expect(screen.getByTestId('foodlist')).toBeInTheDocument();
    });
});
