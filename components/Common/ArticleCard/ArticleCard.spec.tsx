import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import singletonRouter from 'next/router';
import mockRouter from 'next-router-mock';
import ArticleCard from './ArticleCard';
import { mockFoodListData } from '../../../mocks/foodListDataMock';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('ArticleCard', () => {
    const foodItem = mockFoodListData[0];
    const props = {
        to: '/food',
        imgSrc: foodItem.image,
        imgAlt: 'foodImage',
        title: 'Food',
    };

    beforeEach(() => {
        mockRouter.setCurrentUrl('/');
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders an article with the provided title prop', () => {
        render(<ArticleCard {...props} />);
        const cardItem = screen.getByRole('article');

        expect(cardItem).toHaveTextContent(props.title);
    });
    it('renders an article with the provided image props', async () => {
        render(<ArticleCard {...props} />);

        const image = (await screen.findByRole('img')) as HTMLImageElement;
        expect(image).toBeInTheDocument();
        await waitFor(() => {
            expect(image.src).toContain(encodeURIComponent(props.imgSrc));
        });
    });
    it('renders an article and when clicked it routes to the provided "to" prop', () => {
        render(<ArticleCard {...props} />);

        expect(window.location.pathname).toBe('/');
        const cardItem = screen.getByText(props.title);
        fireEvent.click(cardItem);
        expect(singletonRouter).toMatchObject({ asPath: props.to });
    });
});
