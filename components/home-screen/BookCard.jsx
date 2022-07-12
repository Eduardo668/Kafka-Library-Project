import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'; 

const BookCard = ()=>{
    return (
        <View style={styles.card}>
            <View>
            <Text>  Harry Potter</Text>
            <Text>Pedra filosofal</Text>
            </View>
           
            <Image style={styles.bookImage} source={
                require('./img/cardImg.jpg')
            }  />
            <Pressable style={styles.buttonView}>
                <Text style={styles.buttonViewText}>View</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 200,
        backgroundColor: "#FFFFFF" ,
        margin: 10,
        marginBottom: 150,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    bookImage: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 1,
        width: "100%",
        height: "80%"

    },
    buttonView: {
        position: "absolute",
        padding: 10,
        backgroundColor: '#6166E0',
        borderRadius: 10,
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        bottom: 19
        
    },
    buttonViewText: {
       color: 'white',
       fontSize: 20
    }

})

export default BookCard;