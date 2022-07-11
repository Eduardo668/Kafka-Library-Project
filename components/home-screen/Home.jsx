import { StyleSheet, Text, View ,Image} from 'react-native'; 
import BookCard from './BookCard';
import NewsCard from './NewsCard';

const Home = ()=>{
    return (
     <View style={styles.container} >
         <View style={styles.header} >
             <Text style={styles.wellcomeUser}>Welcome Usuario</Text>
             <Image style={styles.userPhoto}
             source={
                 {uri: "http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png",
                 width: 60,height:60
                 
                } 
             }/>
         </View>
         <View style={styles.news}>
            <Text style={styles.dailyNewsTitle}>Daily news</Text>
             <NewsCard />
         </View>
         <View style={styles.booksScrollview}>
             <BookCard />
         </View>
     </View>
   )
}

const styles = StyleSheet.create({
    container: {
    
    },
    header: {
        width: "100%",
        height: "15%",
        backgroundColor: "red",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    news: {
        width: "100%",
        height: "45%",
        backgroundColor: "green",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    booksScrollview:{
        width: "100%",
        height: "45%",
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center"
    },
    wellcomeUser: {
        color: "white",
        marginLeft: 10,
        fontSize: 20
    },
    userPhoto: {
        marginRight: 10,
        marginTop: 8
    },
    dailyNewsTitle: {
        color: 'white',
        fontSize: 30,
        marginBottom: 10,
        marginRight: 230
        
    }
})

export default Home;