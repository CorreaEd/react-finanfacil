import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Conta de luz', 
    value: '300,90',
    date: '12/11/2023',
    type: 0 // expenses
  },
  {
    id: 2,
    label: 'Salário', 
    value: '6.116,54',
    date: '03/11/2023',
    type: 1 // incomes
  },
  {
    id: 3,
    label: 'Conta de internet', 
    value: '109,34',
    date: '15/11/2023',
    type: 0 // expenses
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Eduardo Corrêa" />

      <Balance balance="5.453,21" expenses="453,22"/>

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} />}
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
    margin: 22,
  },
  list:{
    marginStart: 16,
    marginEnd: 16,
    
  }
});
