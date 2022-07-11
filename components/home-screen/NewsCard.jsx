import { StyleSheet, Text, View ,Image} from 'react-native'; 

const NewsCard = ()=>{
    return(
        <View style={styles.card}>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
       backgroundColor: 'white',
       width: "90%",
       height: "80%",
       borderRadius: 10,
       
    },
    line: {
        width: "100%",
        height: 0,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "rgba(161, 161, 161, 1.0)",
        top:45
    }
})

export default NewsCard;