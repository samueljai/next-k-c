import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FoodListItem from './FoodListItem';
import { mockFoodListData } from '../../../../mocks/foodListDataMock';

describe('FoodListItem', () => {
    it('renders the corrct name for a given food item', () => {
        const index = 0;
        const foodItem = mockFoodListData[index];
        const position = `${index + 1} of ${mockFoodListData.length}`;

        render(<FoodListItem foodItem={foodItem} position={position} />);

        const foodListItemName = screen.getByText(foodItem.name);
        expect(foodListItemName).toBeInTheDocument();
    });

    it('renders the corrct origin for a given food item', () => {
        const index = 1;
        const foodItem = mockFoodListData[index];
        const position = `${index + 1} of ${mockFoodListData.length}`;

        render(<FoodListItem foodItem={foodItem} position={position} />);

        const foodListItemOrigin = screen.getByText(foodItem.origin);
        expect(foodListItemOrigin).toBeInTheDocument();
    });

    it('renders the correct number of stars', () => {
        const index = 2;
        const foodItem = mockFoodListData[index];
        const position = `${index + 1} of ${mockFoodListData.length}`;

        render(<FoodListItem foodItem={foodItem} position={position} />);

        const foodListItemStars = screen.getAllByAltText('star rating');
        expect(foodListItemStars.length).toBe(foodItem.starRating);
    });
});
