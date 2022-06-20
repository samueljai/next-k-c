import FoodListItem, { FoodItemProps } from '../FoodListItem/FoodListItem';
import styles from './foodList.module.scss';

export type FoodListProps = {
    foodList: FoodItemProps[] | null;
};

const FoodList = ({ foodList }: FoodListProps) => {
    return (
        <ul
            className={styles.foodlist}
            data-testid="foodlist"
            aria-label="Best Food of the World"
        >
            {foodList?.map((foodItem, index) => (
                <FoodListItem
                    foodItem={foodItem}
                    key={foodItem.id}
                    position={`${index + 1} of ${foodList.length}`}
                />
            ))}
        </ul>
    );
};

export default FoodList;
