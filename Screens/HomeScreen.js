import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../Img/montanha.jpg')}
            resizeMode="cover"
            style={styles.ImageBackground}
        >

            <LinearGradient
                colors={['rgba(0,0,0,0.6)', 'transparent']}
                style={styles.overlay}
            />

            <View style={styles.content}>
                <Image source={require('../assets/favicon.png')} style={styles.logo} />
                <Text style={styles.logoText}>RotaMundi</Text>
                <Text style={styles.subtitle}>A aventura começa agora!</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Preferences')}
                >
                    <Text style={styles.buttonText}>Vamos lá!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    ImageBackground: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    background: {
        flex: 1,
        justifyContent: 'center',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },

    logoText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
    },

    subtitle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 30,
    },

    button: {
        backgroundColor: '#429749ff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 3,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
