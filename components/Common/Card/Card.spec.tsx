import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { mockFoodListData } from '../../../mocks/foodListDataMock';
import Card from './Card';

describe('Card', () => {
    const foodItem = mockFoodListData[0];
    const props = {
        imgSrc: foodItem.image,
        imgAlt: 'foodImage',
    };
    const text = 'Food List Item Card';
    const children = <div>{text}</div>;

    it('renders an article with the provided children', async () => {
        render(<Card {...props}>{children}</Card>);

        const cardItem = screen.getByRole('article');
        expect(cardItem).toHaveTextContent(text);
    });
    it('renders an article with the provided image props', async () => {
        render(<Card {...props}>{children}</Card>);

        const image = (await screen.findByRole('img')) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        await waitFor(() => {
            expect(image.src).toContain(encodeURIComponent(props.imgSrc));
        });
    });
});
