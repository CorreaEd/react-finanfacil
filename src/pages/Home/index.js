import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance'

const list = [
  {
    id: 1,
    label: 'Conta de luz', 
    value: '300,90',
    date: '16/11/2023',
    type: 0 // expenses
  },
  {
    id: 2,
    label: 'Salário', 
    value: '6.116,54',
    date: '16/11/2023',
    type: 1 // incomes
  },
  {
    id: 3,
    label: 'Conta de internet', 
    value: '109,34',
    date: '16/11/2023',
    type: 0 // expenses
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Eduardo Corrêa" />

      <Balance balance="5.453,21" expenses="453,22"/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Text>TESTE</Text>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginRight: 16,
    marginLeft: 16,
  },
  list:{
    marginStart: 16,
    marginEnd: 16,
    
  }
});
