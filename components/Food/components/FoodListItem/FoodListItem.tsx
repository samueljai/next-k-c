import Card from '../../../Common/Card/Card';
import Stars from '../../../Common/Stars/Stars';
import styles from './foodListItem.module.scss';

export type FoodItemProps = {
    id: number;
    image: string;
    name: string;
    origin: string;
    starRating: number;
};

type FoodListItemProps = {
    foodItem: FoodItemProps;
};

const FoodListItem = ({ foodItem }: FoodListItemProps) => {
    return (
        <li className={styles.foodListItem}>
            <Card imgSrc={foodItem.image} imgAlt="foodImage">
                <div className={styles.foodListItem__info}>
                    <h4>{foodItem.name}</h4>
                    <h5>{foodItem.origin}</h5>
                    <Stars numberOfStars={foodItem.starRating} />
                </div>
            </Card>
        </li>
    );
};

export default FoodListItem;
