import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'; 

const NewsCard = ()=>{
    return(
        <View style={styles.card}>
            <View style={{flexDirection: "row",
             justifyContent: "space-between"}}>
                <View style={{flexDirection: "column"}}>
                   <Text style={styles.postByText}>Post By: ADM</Text>
                   <Text style={styles.datePostText} >Date: 11/07</Text>
                </View>
                
                <Image style={styles.userPhoto}
                    source={
                 {uri: "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
                 width: 30,height:30
                 
                } 
                }/>
            </View>
            <View style={styles.line}></View>
            <View style={styles.newsBody}>
                <Text numberOfLines={1}  style={styles.newsTitle} >
                    Autor x lança sua nova trilogia
                </Text>
                <Pressable style={styles.buttonView}>
                <Text style={styles.buttonViewText}>Go to the news</Text>
            </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
       backgroundColor: 'white',
       width: "90%",
       height: "60%",
       borderRadius: 10,
       
       
    },
    line: {
        width: "100%",
        height: 0,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "rgba(161, 161, 161, 1.0)",
        top:45,
        position: "absolute"
    },

    postByText:{
        marginLeft: 5,
        marginTop: 2
    },
    datePostText: {
        marginTop: 2,
        marginLeft: 5
    },
    userPhoto: {
        marginRight: 10,
        marginTop: 8,
        
    },
    newsTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    },
    newsBody: {
        justifyContent: "center",
        alignItems: "center"
    },
    buttonView: {
        padding: 10,
        backgroundColor: '#6166E0',
        borderRadius: 10,
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        margin: 15
        
    },
    buttonViewText: {
       color: 'white',
       fontSize: 20
    }
})

export default NewsCard;