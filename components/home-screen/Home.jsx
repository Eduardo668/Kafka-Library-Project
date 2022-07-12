import { StyleSheet, Text, View ,Image, ScrollView} from 'react-native'; 
import BookCard from './BookCard';
import NewsCard from './NewsCard';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({navigation, route})=>{
    return (
    <LinearGradient 
        style={styles.bgColor}
        start={{x:0,y:3.5}}
        end={{x:3.8,y:0}}
        locations={[.1,5.0]}
        colors={['#0F18F9','#6166E0']}
    >  
     <View style={styles.container} >
         <View style={styles.header} >
             <Text style={styles.wellcomeUser}>Welcome Usuario</Text>
             <Image style={styles.userPhoto}
             source={
                  require('./img/icon.png')
                } 
             />
         </View>
         <View style={styles.news}>
            <Text style={styles.dailyNewsTitle}>Daily news</Text>
             <NewsCard />
         </View>
         <Text style={styles.booksTitle}>Books you might like</Text>
         <View style={styles.booksScrollview}>
           <ScrollView
            horizontal={true}
                       
           >
           <BookCard />
           <BookCard />
           <BookCard />
           <BookCard />
           <BookCard />
                
           </ScrollView>
            
         </View>
     </View>
     </LinearGradient>
   )
}

const styles = StyleSheet.create({
    container: {
    
    },
    bgColor: {
        width: "100%",
        height: "100%"
    },
    header: {
        width: "100%",
        height: "15%",
        // backgroundColor: "trasparent",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    news: {
        width: "100%",
        height: "36%",
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    booksScrollview:{
        width: "100%",
        height: "54%",
        // backgroundColor: "gray",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
        
    },
    wellcomeUser: {
        color: "white",
        marginLeft: 15,
        fontSize: 20
    },
    userPhoto: {
        marginRight: 10,
        marginTop: 8,
        width:60,height:60
    },
    dailyNewsTitle: {
        color: 'white',
        fontSize: 30,
        marginBottom: 10,
        marginRight: 230
        
    },
    booksTitle : {
        color: 'white',
        fontSize: 30,
        marginLeft: 30
        // marginBottom: 10,
        // marginRight: 230
        
    }
})

export default Home;