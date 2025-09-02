import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PreferenceScreen({ navigation }) {
    const handlePress = (preferencia) => {
        navigation.navigate('Recommendations', { preference: preferencia });
    };

    return (
        <LinearGradient
            colors={['#72eb9081', '#50be6b8f', '#13421fb4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <Text style={styles.title}>Escolha seu tipo de destino:</Text>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('praia')}>
                <Text style={styles.buttonText}>Praia</Text>
                <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('montanha')}>
                <Text style={styles.buttonText}>Montanha</Text>
                <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handlePress('cidade histórica')}>
                <Text style={styles.buttonText}>Cidade Histórica</Text>
                <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10,
        textAlign: 'center',
        backgroundColor: '#00000052',
        padding: 10,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    button: {
        backgroundColor: '#ffffffaa',
        margin: 10,
        width: '100%',
        height: 60,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    buttonText: {
        fontSize: 18,
        color: '#000000ff',
        fontWeight: '600',
    },

    arrow: {
        fontSize: 20,
        color: '#000000ff',
        fontWeight: '800',
    },
});
