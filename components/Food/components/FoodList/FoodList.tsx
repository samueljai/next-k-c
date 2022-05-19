import FoodListItem, { FoodItemProps } from '../FoodListItem/FoodListItem';
import styles from './foodList.module.scss';

export type FoodListProps = {
    foodList: FoodItemProps[] | null;
};

const FoodList = ({ foodList }: FoodListProps) => {
    return (
        <ul className={styles.foodlist} data-testid="foodlist">
            {foodList &&
                foodList.map((foodItem) => (
                    <FoodListItem foodItem={foodItem} key={foodItem.id} />
                ))}
        </ul>
    );
};

export default FoodList;
