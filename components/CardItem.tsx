import { View, StyleSheet } from 'react-native';
import { IProduct } from '../interfaces/Interfaces';
import { Card } from 'react-native-paper';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const CardItem: React.FC<IProduct>  = (props: IProduct):JSX.Element => {
    const {product} = props;
    return (
        <Card style={styles.ele}>
            <CardHeader price={product.price} />
            <CardBody product={product} />
            <CardFooter product={product} />
        </Card>
    )
}

export default CardItem;

const styles= StyleSheet.create({
    container: {
    },
    ele: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 16,
        elevation: 5,
    }
})