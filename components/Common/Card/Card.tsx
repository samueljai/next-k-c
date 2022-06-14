import React from 'react';
import Image from 'next/image';
import styles from './card.module.scss';

type CardProps = {
    children: React.ReactNode;
    imgSrc: string;
    imgAlt: string;
};

const Card = ({ children, imgSrc, imgAlt }: CardProps) => {
    return (
        <article className={styles.card}>
            <section className={styles.card__imageOuter}>
                <div className={styles.card__imageContainer}>
                    <Image
                        alt={imgAlt}
                        src={imgSrc}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>
            <section className={styles.card__info}>{children}</section>
        </article>
    );
};

export default Card;
