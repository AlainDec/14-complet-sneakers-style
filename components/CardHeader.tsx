import { Text, StyleSheet } from 'react-native';
import { IPrice } from '../interfaces/Interfaces';

const CardHeader: React.FC<IPrice>  = (props: IPrice):JSX.Element => {
    const {price} = props;
    return (
        <Text style={styles.price}>{price} &euro;</Text>
    )
}

export default CardHeader;

const styles = StyleSheet.create({
    price: {
        paddingRight: 8,
        textAlign: 'right',
        fontSize: 22,
        color: 'grey',
        height: 40,
    },
});