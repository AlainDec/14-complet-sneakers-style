import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { ILikes } from '../interfaces/Interfaces';

const LikeBtn: React.FC<ILikes>  = (props: ILikes):JSX.Element => {
    return (
        <Button
            icon="heart"
            color="dodgerblue"
            labelStyle={styles.icon}>

            {typeof props.likes !== "undefined"? props.likes : 0}
        </Button>
    );
}

export default LikeBtn;

const styles = StyleSheet.create({
    icon: {
        fontSize: 20,
    }
})