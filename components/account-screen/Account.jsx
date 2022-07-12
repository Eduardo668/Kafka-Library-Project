import { StyleSheet, Text, View ,Image, ScrollView, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import UserData from './UserData';

const Account = ()=> {
    return (
        <LinearGradient 
        style={styles.bgColor}
        start={{x:0,y:3.5}}
        end={{x:3.8,y:0}}
        locations={[.1,5.0]}
        colors={['#0F18F9','#6166E0']}
    >  
        <View>
             <View style={styles.header}>
             <Image
                  style={styles.userImage} 
                  source={{uri: "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
                   width:200,height:200 }}  />
            
             </View>
             <View style={styles.body} >
                 <View style={styles.body_username} >
                    <Text style={styles.usernameText} >Joãozinho668 </Text>
                 </View>
                 <View style={styles.body_data}>
                    <UserData />
                 </View>
                 <View style={styles.body_buttons}>
                        <Pressable style={styles.edit_button}>
                            <Text style={styles.edit_text} >Edit profiles</Text>
                        </Pressable>
                        <Pressable style={styles.delete_button}>
                            <Text style={styles.delete_text} >Delete Account</Text>
                        </Pressable>
                        <Pressable style={styles.logout_button}>
                            <Text style={styles.logout_text} >Logout</Text>
                        </Pressable>
                 </View>
             </View>
        </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
      bgColor: {
          width: "100%",
          height: "100%"
      },
      header: {
         width: "100%",
         height: "40%",
        //  backgroundColor: "red",
         justifyContent: "center",
         alignItems: "center"
      },
      
      body: {
        width: "100%",
        height: "60%",
        backgroundColor: "#ffff",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        justifyContent: "center",
        alignItems: "center"
      },
      userImage: {
        backgroundColor: "#000",
        borderRadius: 300
     },
     usernameText: {
        fontSize: 35,
        fontWeight: 'bold'
     },
     body_username: {
        width: "100%",
        height:"20%", 
        // backgroundColor: 'red',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        justifyContent: "center", 
        alignItems: "center"
    },
     body_data: {
        width: "100%",
        height:"40%", 
        justifyContent: "center",
        alignItems: "flex-start",
        // backgroundColor: 'green',
        
     },
     body_buttons: {
        width: "100%",
        height:"40%", 
        // backgroundColor: 'yellow',
        justifyContent:"flex-start",
        flexDirection: "row",
        alignContent:"center",
        flexWrap: "wrap",
        marginLeft: 70

     },
     
     logout_button: {
        padding: 10,
        width:"30%",
        backgroundColor: '#353CD5',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10, margin: 4
     },
     logout_text: {
        color: 'white',
        fontSize: 20
     },
     edit_button: {
        padding: 10,
        width:"40%",
        backgroundColor: '#0F18F9',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10, margin: 4
     },
     edit_text: {
        color: 'white',
        fontSize: 20 
     },
     delete_button: {
        padding: 10,
        width:"40%",
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 4
     },
     delete_text: {
        color: 'white',
        fontSize: 20 
     }
})

export default Account;