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
};

const BeachListItem = ({ beachItem }: BeachListItemProps) => {
    return (
        <li className={styles.beachListItem}>
            <Card imgSrc={beachItem.image} imgAlt="beachImage">
                <div className={styles.beachListItem__info}>
                    <h3 className={styles.beachListItem__infoName}>
                        {beachItem.index}. {beachItem.name}
                    </h3>
                    <h4 className={styles.beachListItem__infoDescription}>
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
