import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TopBar() {
    return (
        <View style={style.container}>
            <Text style={style.text}>Sosmad</Text>
            <View style={{ flexDirection: 'row', gap:10 }}>
                <TouchableOpacity style={style.button}>
                    <Ionicons name="notifications" size={24} color="grey" />
                </TouchableOpacity>
                <TouchableOpacity style={style.button}>
                    <Ionicons name="chatbox" size={24} color="grey" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#222',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    text: {
        color: '#eee',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    button: {
        padding: 10,
        backgroundColor: '#333',
        borderRadius: 22,
    }

});
