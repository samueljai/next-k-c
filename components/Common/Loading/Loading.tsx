import styles from './loading.module.scss';

const Loading = () => {
    return (
        <section className={styles.loading}>
            <div className={styles.loadingSpinner} data-testid="loadingSpinner">
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
                <div data-testid="loadingSpinner__dots" />
            </div>
        </section>
    );
};

export default Loading;
