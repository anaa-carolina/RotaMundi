import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
    Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DestinationDetails({ route, navigation }) {
    const { destino } = route.params;

    const handleContratar = () => {
        Alert.alert(
            'Confirmação',
            `Você contratou ${destino.nome} com sucesso!`,
            [{ text: 'OK', onPress: () => navigation.goBack() }]
        );
    };

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
                <Text style={styles.title}>{destino.nome}</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>

                {destino.imagem && (
                    <View style={styles.imageContainer}>
                        <Text style={styles.sectionTitle}>Imagem do destino</Text>
                        <View style={styles.imageWrapper}>
                            <Image source={destino.imagem} style={styles.image} resizeMode="cover" />
                        </View>
                    </View>
                )}


                <View style={styles.contentBox}>
                    <Text style={styles.sectionTitle}>Descrição</Text>
                    <Text style={styles.description}>{destino.descricao}</Text>
                </View>


                <View style={styles.contentBox}>
                    <Text style={styles.sectionTitle}>Atividades</Text>
                    {destino.atividades.map((atividade, index) => (
                        <Text key={index} style={styles.activityItem}>• {atividade}</Text>
                    ))}
                </View>


                <View style={styles.contentBox}>
                    <Text style={styles.sectionTitle}>Valores</Text>
                    <Text style={styles.price}>R$ {destino.valor || '150,00'} / noite</Text>
                </View>


                <TouchableOpacity style={styles.button} onPress={handleContratar}>
                    <Text style={styles.buttonText}>Contratar</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00000052',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
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

    scrollContent: {
        paddingBottom: 30,
    },

    imageContainer: {
        marginBottom: 20,
        backgroundColor: '#00000030',
        borderRadius: 10,
        padding: 15,
    },

    imageWrapper: {
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#13421f',
    },

    image: {
        width: '100%',
        height: 200,
    },

    contentBox: {
        backgroundColor: '#00000030',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },

    sectionTitle: {
        fontSize: 20,
        color: '#000000ff',
        marginBottom: 10,
        fontWeight: 'bold',
    },

    description: {
        fontSize: 18,
        color: '#000000ff',
        marginBottom: 10,
    },

    activityItem: {
        fontSize: 18,
        color: '#000000ff',
        marginBottom: 6,
        paddingLeft: 10,
    },

    price: {
        fontSize: 18,
        color: '#13421f',
        fontWeight: '600',
    },

    button: {
        backgroundColor: '#14411fda',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});
