import React from 'react';
import Header from '../Common/Header/Header';
import styles from './globalLayout.module.scss';

type GlobalLayoutProps = {
    children: React.ReactNode;
};

function GlobalLayout({ children }: GlobalLayoutProps) {
    return (
        <>
            <Header title="Best of the World" />
            <main className={styles.globalLayout__content}>{children}</main>
        </>
    );
}

export default GlobalLayout;
