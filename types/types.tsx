import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import IData from '../interfaces/Interfaces';

type RootStackParamList = {
    HomeScreen: undefined;
    ProductScreen: { productItem: IData };
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;
type ProductProps = NativeStackScreenProps<RootStackParamList, 'ProductScreen'>;

export { HomeProps, ProductProps };