import { Text } from 'react-native';

type priceType = {
    price: string;
}
const CardHeader: React.FC<priceType>  = (props: priceType):JSX.Element => {
    const {price} = props;
    return (
        <Text>Prix du produit: {price} &euro;</Text>
    )
}

export default CardHeader;
