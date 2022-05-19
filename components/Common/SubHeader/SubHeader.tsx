import styles from './subHeader.module.scss';

type SubHeaderProps = {
    title: string;
};

const SubHeader = ({ title }: SubHeaderProps) => {
    return (
        <header className={styles.subHeader}>
            <h2>{title}</h2>
        </header>
    );
};

export default SubHeader;
