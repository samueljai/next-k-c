import { getImage } from '../../../Images/images';
import styles from './star.module.scss';

const Star = () => {
    return (
        <img className={styles.star__image} alt="star" src={getImage('star')} />
    );
};

export default Star;
