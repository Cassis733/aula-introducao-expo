import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f1f8',
        //margin: 20,
        padding: RFPercentage(2),
        flex: 1,
        borderRadius: RFPercentage(2),
        alignItems: 'center'
    },
    titulo: {
        fontSize: RFPercentage(3),
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: RFPercentage(5),
        color: '#db0606',
    },

    texto: {
        fontSize: RFPercentage(3),
        width: '100%',
        textAlign: 'right',
        color: '#f8f6f677',
        marginBottom: 50,

    }
    
});

export default styles;