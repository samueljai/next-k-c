import BeachListItem, { BeachItemType } from '../BeachListItem/BeachListItem';
import styles from './beachList.module.scss';

export type BeachListProps = {
    beachList: BeachItemType[];
};

const BeachList = ({ beachList }: BeachListProps) => {
    return (
        <ul
            className={styles.beachList}
            data-testid="beachList"
            aria-label="Best Beaches of the World"
        >
            {beachList?.map((beachItem, index) => (
                <BeachListItem
                    beachItem={beachItem}
                    key={beachItem.index}
                    position={`${index + 1} of ${beachList.length}`}
                />
            ))}
        </ul>
    );
};

export default BeachList;
