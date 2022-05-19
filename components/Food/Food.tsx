import SubHeader from '../Common/SubHeader/SubHeader';
import FoodList from './components/FoodList/FoodList';
import { mockFoodListData } from '../../mocks/foodListDataMock';
import styles from './food.module.scss';

const Food = () => {
    return (
        <article className={styles.food}>
            <SubHeader title="Food" />
            <section className={styles.food__content}>
                <FoodList foodList={mockFoodListData} />
            </section>
        </article>
    );
};

export default Food;
