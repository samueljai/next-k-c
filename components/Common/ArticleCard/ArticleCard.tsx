import Link from 'next/link';
import Image from 'next/image';
import styles from './articleCard.module.scss';

type ArticleCardProps = {
    to: string;
    imgSrc: string;
    imgAlt: string;
    title: string;
};

const ArticleCard = ({ to, imgSrc, imgAlt, title }: ArticleCardProps) => {
    const linkStyle = {
        textDecoration: 'none',
        color: '#28262e',
    };

    return (
        <article className={styles.articleCard}>
            <Link href={to} style={linkStyle}>
                <a>
                    <div
                        className={styles.articleCard__inner}
                        data-testid={`article-${title}`}
                    >
                        <div className={styles.articleCard__imageContainer}>
                            <Image
                                src={imgSrc}
                                alt={imgAlt}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h2 className={styles.articleCard__title}>{title}</h2>
                    </div>
                </a>
            </Link>
        </article>
    );
};

export default ArticleCard;
