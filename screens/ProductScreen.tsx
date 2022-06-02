import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import IData from '../interfaces/Interfaces';
import CardHeader from '../components/CardHeader';
import type { ProductProps } from '../types/types';

const ProductScreen: React.FC<ProductProps> = ({ route, navigation }: ProductProps):JSX.Element => {

    const {productItem} = route.params;
    console.log(productItem.price);

    return (
        <View style={styles.container}>
            <CardHeader price={productItem.price} />
            <StatusBar style="auto" />
        </View>
    );
}

export default ProductScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
