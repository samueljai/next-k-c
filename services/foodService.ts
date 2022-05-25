import { FoodItemProps } from '../components/Food/components/FoodListItem/FoodListItem';

const foodDataUrl =
    'https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json';

async function fetchFood(): Promise<FoodItemProps[]> {
    const response = await fetch(foodDataUrl);
    const data = await response.json();

    return data;
}

export { fetchFood, foodDataUrl };
