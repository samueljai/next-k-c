import Image from 'next/image';
import styles from './star.module.scss';

const Star = () => {
    return (
        <span className={styles.star__image}>
            <Image
                src="/star.png"
                alt="star rating"
                layout="fixed"
                width={15}
                height={15}
            />
        </span>
    );
};

export default Star;
