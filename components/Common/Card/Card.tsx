import React from 'react';
import Image from 'next/image';
import styles from './card.module.scss';

type CardProps = {
    children: React.ReactNode;
    articleAriaLabel?: string;
    imgSrc: string;
    imgAlt: string;
};

const Card = ({ children, articleAriaLabel, imgSrc, imgAlt }: CardProps) => {
    return (
        <article
            className={styles.card}
            aria-label={articleAriaLabel}
            tabIndex={0}
        >
            <div className={styles.card__imageOuter}>
                <div className={styles.card__imageContainer}>
                    <Image
                        alt={imgAlt}
                        src={imgSrc}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className={styles.card__info}>{children}</div>
        </article>
    );
};

export default Card;
