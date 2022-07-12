import { StyleSheet, Text, View ,Image, ScrollView, Pressable} from 'react-native';

const UserData = ()=>{
    return (
       <View>
           <Text style={styles.textUserData}>
               Full name : João Dos Santos</Text>
           <View style={styles.line}></View>
           <Text style={styles.textUserData}>
               Email : joão@gmail.com
           </Text>
           <View style={styles.line}></View>
           <Text  style={styles.textUserData}>
               Phone : +55 48 991589297
           </Text>
           <View style={styles.line}></View>
           <Text  style={styles.textUserData}>
               Book Style   Adventure, Fantasy
           </Text>
           <View style={styles.line}></View>
       </View>
        
    )
}


const styles = StyleSheet.create({
    line: {
        width: 300,
        height: 0,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "rgba(161, 161, 161, 1.0)",
        marginLeft: 40
    },
    textUserData: {
        margin: 6,
        marginLeft: 40,
        fontSize: 16
      },
})
export default UserData;