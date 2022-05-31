import '@testing-library/jest-dom';
import {
    render,
    fireEvent,
    RenderResult,
    waitFor,
} from '@testing-library/react';
import singletonRouter from 'next/router';
import mockRouter from 'next-router-mock';
import ArticleCard from './ArticleCard';
import { mockFoodListData } from '../../../mocks/foodListDataMock';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('ArticleCard', () => {
    let testingUtils: RenderResult<
        typeof import('@testing-library/dom/types/queries'),
        HTMLElement
    >;
    const foodItem = mockFoodListData[0];
    const props = {
        to: '/food',
        imgSrc: foodItem.image,
        imgAlt: 'foodImage',
        title: 'Food',
    };

    beforeEach(() => {
        mockRouter.setCurrentUrl('/');
        testingUtils = render(<ArticleCard {...props} />);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('renders an article with the provided title prop', () => {
        const { getByRole } = testingUtils;
        const cardItem = getByRole('article');

        expect(cardItem).toHaveTextContent(props.title);
    });
    it('renders an article with the provided image props', async () => {
        const { getByAltText } = testingUtils;
        await waitFor(() => {
            const image = getByAltText(props.imgAlt) as HTMLImageElement;
            const url = new URL(image.src);
            console.log('url: ', url);

            expect(image).toBeInTheDocument();
            expect(image.src).toContain(encodeURIComponent(props.imgSrc));
        });
    });
    it('renders an article and when clicked it routes to the provided "to" prop', () => {
        const { getByText } = testingUtils;
        expect(window.location.pathname).toBe('/');
        const cardItem = getByText(props.title);
        fireEvent.click(cardItem);
        expect(singletonRouter).toMatchObject({ asPath: props.to });
    });
});
