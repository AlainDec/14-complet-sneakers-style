import { Text, StyleSheet, View, Image } from 'react-native';
import { IProduct } from '../interfaces/Interfaces';
import { Card } from 'react-native-paper';

const CardBody: React.FC<IProduct>  = (props: IProduct):JSX.Element => {
    const {product} = props;
    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                <Image source={product.photo} style={styles.photo} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.desc}</Text>
            </View>
        </View>
    )
}

export default CardBody;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // descend le footer jusqu'en bas
    },
    textContainer: {
        marginHorizontal: 5,
    },
    title: {
        marginTop: 5,
        marginBottom: 10,
        textTransform: 'uppercase',
    },
    description: {

    },
    photoContainer: {
        padding: 10,
        backgroundColor: '#e3f2f2',
    },
    photo: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        backgroundColor: '#e3f2f2',
    }
});