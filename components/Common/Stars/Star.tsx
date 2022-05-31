import Image from 'next/image';
import styles from './star.module.scss';

const Star = () => {
    return (
        <li className={styles.star__image}>
            <Image src="/star.png" alt="star" width={15} height={15} />
        </li>
    );
};

export default Star;
