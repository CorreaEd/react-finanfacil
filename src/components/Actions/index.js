import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
 } from 'react-native';

 import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView contentContainerStyle={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity style={styles.actionButon}>
            <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>
                Entradas
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButon}>
            <View style={styles.areaButton}>
                <AntDesign name="creditcard" size={30} color="#000" />
            </View>
            <Text style={styles.labelButton}>
                Cartões
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButon}>
            <View style={styles.areaButton}>
                <AntDesign name="barcode" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>
                Boletos
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButon}>
            <View style={styles.areaButton}>
                <AntDesign name="qrcode" size={35} color="#000" />
            </View>
            <Text style={styles.labelButton}>
                QR Code
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButon}>
            <View style={styles.areaButton}>
                <AntDesign name="setting" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>
                Conta
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButon}>
            <View style={styles.areaButton}>
                <AntDesign name="setting" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>
                Conta
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButon}>
            <View style={styles.areaButton}>
                <AntDesign name="setting" size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>
                Conta
            </Text>
        </TouchableOpacity>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginTop: 12,
        paddingEnd: 22,
        paddingStart: 22,
    },
    actionButon:{
        alignItems: 'center',
        marginRight: 10,
    },
    areaButton:{
        backgroundColor: '#ACE1AF',
        height: 60,
        width: 60,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton:{
        textAlign: 'center',
        fontWeight: 'bold',
    }
})