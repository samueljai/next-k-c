import PropTypes from 'prop-types';
import Card from '../../../Common/Card/Card';
import styles from './beachListItem.module.scss';

export type BeachItemType = {
    index: number;
    image: string;
    name: string;
    description: string;
};

type BeachListItemProps = {
    beachItem: BeachItemType;
    position: string;
};

const BeachListItem = ({ beachItem, position }: BeachListItemProps) => {
    return (
        <li className={styles.beachListItem}>
            <Card
                articleAriaLabel={`Number ${position}: ${beachItem.name}`}
                imgSrc={beachItem.image}
                imgAlt={`${beachItem.name}`}
            >
                <div className={styles.beachListItem__info}>
                    <h3
                        className={styles.beachListItem__infoName}
                        aria-label={`Rating: ${beachItem.index}. ${beachItem.name}`}
                    >
                        {`${beachItem.index}. ${beachItem.name}`}
                    </h3>
                    <h4
                        className={styles.beachListItem__infoDescription}
                        aria-label={`Description: ${beachItem.description}`}
                    >
                        {beachItem.description}
                    </h4>
                </div>
            </Card>
        </li>
    );
};

BeachListItem.propTypes = {
    beachItem: PropTypes.object,
};

export default BeachListItem;
