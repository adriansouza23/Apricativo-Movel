import { Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

<h1> Pratos </h1>
export default function App() {
const cardapio=[
  {
    date: '03-09-2024',
    title: 'Arroz, feijão e bife'
  },

  {
    date: '04-09-2024',
    title: 'Macarrão ao molho'
  },

  {
    date: '05-09-2024',
    title: 'Pastel de vento'
  },
];
 return (
   <SafeAreaView style={styles.container}>
   <FlatList
   data={cardapio}
   renderItem={({item}) => <Text style={styles.paragraph}> {item.date} - {item.title}</Text>}
  
  />
   </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    backgroundColor: 'red',
    margin:15
  },
});