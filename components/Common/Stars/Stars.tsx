import Star from './Star';

type StarsProps = {
    numberOfStars: number;
};

const Stars = ({ numberOfStars }: StarsProps) => {
    const stars = new Array(numberOfStars).fill(1);
    const ariaLabel = `${numberOfStars} / 5`;

    return (
        <span aria-label={ariaLabel}>
            {stars && stars.map((_star, index) => <Star key={index} />)}
        </span>
    );
};

export default Stars;
