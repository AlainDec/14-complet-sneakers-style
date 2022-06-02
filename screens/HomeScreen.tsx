import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import PRODUITS from '../assets/data/data';
import type { HomeProps } from '../types/types';

const HomeScreen: React.FC<HomeProps> = ({ route, navigation }: HomeProps):JSX.Element => {

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          PRODUITS.map((value, index) => {
            console.log(value);
            return (
              <Button
                onPress={() => navigation.navigate('ProductScreen', {productItem: value})}
                title={`${value.title}`}
                key={index} />
            );
          })
        }
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
