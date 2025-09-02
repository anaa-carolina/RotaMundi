import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getDestinationsByPreference } from '../Components/Destinations';

export default function RecommendationScreen({ route, navigation }) {
    const { preference } = route.params;
    const destinations = getDestinationsByPreference(preference);

    return (
        <LinearGradient
            colors={['#72eb9081', '#50be6b8f', '#13421fb4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Destinos para {preference}</Text>
            </View>


            <ScrollView contentContainerStyle={styles.scrollContent}>
                {destinations.map((destino, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.name}>{destino.nome}</Text>
                        <Text style={styles.description}>{destino.descricao}</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigation.navigate('Details', { destino })}
                        >
                            <Text style={styles.detailsText}>Ver Detalhes</Text>
                            <Text style={styles.arrow}>→</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    scrollContent: {
        paddingBottom: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000ff',
        marginBottom: 20,
        textAlign: 'center',
        backgroundColor: '#00000052',
        padding: 10,
        borderRadius: 10,
    },

    card: {
        backgroundColor: '#ffffffcc',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },

    name: {
        fontSize: 20,
        fontWeight: '700',
        color: '#13421f',
        marginBottom: 8,
    },

    description: {
        fontSize: 16,
        color: '#333',
        marginBottom: 12,
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#308645',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
    },

    detailsText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },

    arrow: {
        fontSize: 18,
        color: '#ffffffff',
        fontWeight: '800',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#00000052',
        padding: 10,
        borderRadius: 10,
    },

    backButton: {
        marginRight: 10,
        padding: 5,
    },

    backArrow: {
        fontSize: 22,
        color: '#000000ff',
        fontWeight: 'bold',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000ff',
    },

});

