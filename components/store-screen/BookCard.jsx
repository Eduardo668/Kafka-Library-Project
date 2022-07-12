import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'; 

const BookCard = ()=>{
    return (
        <View style={styles.card}>
            <View>
            <Text>          Hamlet</Text>
            <Text>Prince on denmark</Text>
            </View>
           
            <Image style={styles.bookImage} source={{
                uri: "https://kbimages1-a.akamaihd.net/5fc4252b-1c4f-40ef-9975-22982c94f12c/1200/1200/False/hamlet-prince-of-denmark-23.jpg",
                width: "100%",
                height: "80%"
            }}  />
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
        borderRadius: 10,
        margin: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    bookImage: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 1

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