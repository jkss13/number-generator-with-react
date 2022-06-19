import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {

    const [number, setNumber] = useState(0)

    function handleNumber() {
        
        const newNumber = Math.floor(Math.random() * 10)
        
        sertNumber(newNumber)
    }

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.number}>{number}</Text>;
            <TouchableOpacity onPress={handleNumber} style={style.button}>
                <Text>Gerar Número</Text>   
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {    
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    number: {
        fontSize: '38px',
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        backkgroundColor:'white',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
});

export default App;
