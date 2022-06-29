import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BeachListItem from './BeachListItem';
import { mockBeachListData } from '../../../../mocks/beachListDataMock';

describe('BeachListItem', () => {
    it('renders the corrct name for a given beach item', () => {
        const index = 0;
        const beachItem = mockBeachListData[index];
        const position = `${index + 1} of ${mockBeachListData.length}`;

        render(<BeachListItem beachItem={beachItem} position={position} />);

        const beachListItemName = screen.getByText(
            new RegExp(beachItem.name, 'i')
        );
        expect(beachListItemName).toBeInTheDocument();
    });

    it('renders the corrct description for a given beach item', () => {
        const index = 1;
        const beachItem = mockBeachListData[index];
        const position = `${index + 1} of ${mockBeachListData.length}`;

        render(<BeachListItem beachItem={beachItem} position={position} />);

        const beachListItemOrigin = screen.getByText(beachItem.description);
        expect(beachListItemOrigin).toBeInTheDocument();
    });

    it('renders the correct beach rating before the Name', () => {
        const index = 2;
        const beachItem = mockBeachListData[index];
        const position = `${index + 1} of ${mockBeachListData.length}`;

        render(<BeachListItem beachItem={beachItem} position={position} />);

        const beachListItemRating = screen.getByText(
            new RegExp(`${beachItem.index}. ${beachItem.name}`, 'i')
        );
        expect(beachListItemRating).toBeInTheDocument();
    });
});
