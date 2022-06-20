import Star from './Star';

type StarsProps = {
    numberOfStars: number;
};

const Stars = ({ numberOfStars }: StarsProps) => {
    const stars = new Array(numberOfStars).fill(1);
    const ariaLabel = `Rating: ${numberOfStars} out of 5 stars`;

    return (
        <span role="img" aria-label={ariaLabel}>
            {stars && stars.map((_star, index) => <Star key={index} />)}
        </span>
    );
};

export default Stars;
