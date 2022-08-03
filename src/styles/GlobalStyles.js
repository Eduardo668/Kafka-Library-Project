import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor:'red',
        width : "100%"
        
    }
})