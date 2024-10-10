import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import TextInputBox from '../../components/TextInput/TextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Picker } from '@react-native-picker/picker';
import MathUtils from '../../utils/MathUtils';

function BaskaraScreen() {
    const [valueA, setvalueA] = useState('');
    const [valueB, setvalueB] = useState('');
    const [valueC, setvalueC] = useState('');
    
    let x1 = 0;
    let x2 = 0;

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Cálculo de Baskara</Text>

            <TextInputBox
                value={valueA}
                onChangeText={setvalueA}
                placeholder="Digite o valor de 'a'"
                keyboardType="numeric"
            />

            {/* <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)}
            >
                <Picker.Item label="Somar" value="+" />
                <Picker.Item label="Subtrair" value="-" />
                <Picker.Item label="Multiplicar" value="*" />
                <Picker.Item label="Dividir" value="/" />
            </Picker> */}

            <TextInputBox
                value={valueB}
                onChangeText={setvalueB}
                placeholder="Digite o valor de 'b'"
                keyboardType="numeric"
            />

            <TextInputBox
                value={valueC}
                onChangeText={setvalueC}
                placeholder="Digite o valor de 'c'"
                keyboardType="numeric"
            />

            <CustomButton
                title="Calcular"
                onPress={() =>
                    MathUtils.funcaoBaskara(valueA, valueB, valueC)}
                style={styles.button}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: 200,
    }
});
export default BaskaraScreen;
