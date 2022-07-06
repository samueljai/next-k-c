import React from 'react';
import styles from './skipLink.module.scss';

type SkipLinkProps = {
    targetId: string;
    linkText: string;
};

function SkipLink({ targetId, linkText }: SkipLinkProps) {
    return (
        <a
            className={styles.skipLink}
            href={`#${targetId}`}
            data-testid="skipLink"
        >
            {linkText}
        </a>
    );
}

export default SkipLink;
