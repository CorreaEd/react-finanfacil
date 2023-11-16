import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default function Balance({ balance, expenses }) {
 return (
   <View style={styles.container}>

     <View style={styles.item}>
        <Text style={styles.itemTitle}>
            Saldo
        </Text>     
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>
                    R$
                </Text>
                    <Text style={styles.balance}>
                        {balance}
                    </Text>
            </View>          
     </View>

     <View style={styles.item}>
        <Text style={styles.itemTitle}>
            Gastos
        </Text>     
            <View style={styles.content}>
                <Text style={styles.currencySymbol}>
                    R$
                </Text>
                    <Text style={styles.expenses}>
                        {expenses}
                    </Text>
            </View>          
     </View>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 38,
        paddingEnd: 38,
        marginTop: -32,
        marginStart: 20,
        marginEnd: 20,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle:{
        fontSize: 26,
        color: '#4D5D53',
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol:{
        fontSize: 18,
        color: '#4D5D53',
        marginRight: 6,
    },
    balance:{
        fontSize:22,
        color: '#03C03C',
    },
    expenses:{
        fontSize:22,
        color: '#CC0000',
    }
})