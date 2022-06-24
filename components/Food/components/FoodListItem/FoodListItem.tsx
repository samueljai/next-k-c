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
    position: string;
};

const FoodListItem = ({ foodItem, position }: FoodListItemProps) => {
    return (
        <li className={styles.foodListItem} data-testid="foodListItem">
            <Card
                articleAriaLabel={`Number ${position}: ${foodItem.name}`}
                imgSrc={foodItem.image}
                imgAlt={`${foodItem.name}`}
            >
                <div className={styles.foodListItem__info}>
                    <h3>{foodItem.name}</h3>
                    <p aria-label={`Origin ${foodItem.origin}`}>
                        {foodItem.origin}
                    </p>
                    <Stars numberOfStars={foodItem.starRating} />
                </div>
            </Card>
        </li>
    );
};

export default FoodListItem;
