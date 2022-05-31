import { render, screen } from '@testing-library/react';
import FoodList from './FoodList';
import { mockFoodListData } from '../../../../mocks/foodListDataMock';

describe('FoodList', () => {
    it('renders the corrct number of Food List Items', () => {
        render(<FoodList foodList={mockFoodListData} />);

        const FoodListItems = screen.queryAllByTestId('foodListItem');
        expect(FoodListItems.length).toBe(3);
    });
});
