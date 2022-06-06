import Star from './Star';
import styles from './stars.module.scss';

type StarsProps = {
    numberOfStars: number;
};

const Stars = ({ numberOfStars }: StarsProps) => {
    const stars = new Array(numberOfStars).fill(1);

    return (
        <ul className={styles.stars}>
            {stars && stars.map((_star, index) => <Star key={index} />)}
        </ul>
    );
};

export default Stars;
