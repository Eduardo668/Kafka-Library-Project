import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1, 
        padding: Platform.OS === "android" ? StatusBar.currentHeight: 0,
        backgroundColor: 'blue'

    }
})