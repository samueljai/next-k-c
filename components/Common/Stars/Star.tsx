import { getImage } from '../../../Images/images';
import Image from 'next/image';
import styles from './star.module.scss';

const Star = () => {
    return (
        <div className={styles.star__image}>
            <Image src={getImage('star')} alt="star" width={15} height={15} />
        </div>
    );
};

export default Star;
