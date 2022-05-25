import BeachListItem, { BeachItemType } from '../BeachListItem/BeachListItem';
import styles from './beachList.module.scss';

export type BeachListProps = {
    beachList: BeachItemType[];
};

const BeachList = ({ beachList }: BeachListProps) => {
    return (
        <ul className={styles.beachList} data-testid="beachList">
            {beachList?.map((beachItem) => (
                <BeachListItem beachItem={beachItem} key={beachItem.index} />
            ))}
        </ul>
    );
};

export default BeachList;
