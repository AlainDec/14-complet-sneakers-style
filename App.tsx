import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import PRODUITS from './assets/data/data';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';
import CardItem from './components/CardItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer} >
          {
            PRODUITS.map((value, index) => (

              <View style={styles.card} key={index}>
                <CardItem product={value} />
              </View>

            )
            )
          }
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 8,
    justifyContent: 'space-between',
  },
  card: {
    width: '49%',
    marginBottom: 14,
  }
});
