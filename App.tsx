import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Text, FlatList } from 'react-native';
import PRODUITS from './assets/data/data';
import CardItem from './components/CardItem';
import { Searchbar } from 'react-native-paper';
import { IItem, IProduct } from './interfaces/Interfaces';

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');

  // mise à jour du state searchQuery quandon modifie le texte sur le champ de recherche
  const onChangeSearch = (query: string) => setSearchQuery(query);

  // initialise en recherchant le nb max d'éléments avant recherche
  const [countTotalValues, setCountTotalValues] = useState(PRODUITS.length);

  // Filtre la recherche depuis le champs du formulaire
  const search = PRODUITS.filter( (value) => {
    if (searchQuery === '' || 
        value.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      
      return value;
    }
  });

  // VERSION AVEC FLATLIST
  const Item = ({product}: IProduct) => (
    <View style={styles.card}>
      <CardItem product={product} />
    </View>
  );
  //   /VERSION AVEC FLATLIST
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <ScrollView>

        <Text style={styles.countProducts}>{search.length} produits trouvés sur {countTotalValues}</Text>

        <View style={styles.cardContainer} >
          {
            <FlatList
              scrollEnabled={true}
              data={search}
              renderItem={({item}) => <Item product={item} />}
              horizontal={false}
              numColumns={2}
              keyExtractor={item => item.id}
            />
          }
          {/* VERSION SANS FLATLIST
          {
            search.map((value, index) => (
              <View style={styles.card} key={index}>
                <CardItem product={value} />
              </View>
            ))
          } */}
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
    marginTop: 20,
    justifyContent: 'space-between',
  },
  card: {
    width: '49%',
    marginBottom: 14,
  },
  countProducts: {
    marginLeft: 8,
    marginTop: 8,
  }
});
