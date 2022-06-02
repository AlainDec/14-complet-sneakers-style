import { Text, StyleSheet, View, Image } from 'react-native';
import { IProduct } from '../interfaces/Interfaces';
import LikeBtn from './LikeBtn';

const CardFooter: React.FC<IProduct>  = (props: IProduct):JSX.Element => {
    const { product } = props;
    // Si une taille est donnée, j'affiche Taille XX, sinon "toutes tailles"
    const size = isNaN(parseInt(product.size, 10)) === true ? product.size : `Taille ${product.size}`;
    return (
        <View style={styles.container}>
            <Text style={styles.size}>{size}</Text>
            <LikeBtn likes={product.likes} />
        </View>
    )
}

export default CardFooter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    size: {
        marginHorizontal: 5,
        color: 'grey',
        fontSize: 16,
    }
});