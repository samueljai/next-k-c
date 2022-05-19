import styles from './card.module.scss';

type CardProps = {
    children: React.ReactNode;
    imgSrc: string;
    imgAlt: string;
};

const Card = ({ children, imgSrc, imgAlt }: CardProps) => {
    return (
        <article className={styles.card}>
            <div className={styles.card__imageOuter}>
                <div className={styles.card__imageContainer}>
                    <img
                        className={styles.card__image}
                        alt={imgAlt}
                        src={imgSrc}
                    />
                </div>
            </div>
            <div className={styles.card__info}>{children}</div>
        </article>
    );
};

export default Card;
