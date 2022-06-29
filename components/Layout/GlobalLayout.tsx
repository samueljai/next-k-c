import React from 'react';
import Header from '../Common/Header/Header';
import SkipLink from '../SkipLink/SkipLink';
import styles from './globalLayout.module.scss';

type GlobalLayoutProps = {
    children: React.ReactNode;
};

function GlobalLayout({ children }: GlobalLayoutProps) {
    return (
        <>
            <SkipLink targetId="main_content" linkText="Skip to Content" />
            <Header title="Best of the World" />
            <main id="main_content" className={styles.globalLayout__content}>
                {children}
            </main>
        </>
    );
}

export default GlobalLayout;
