import { StyleSheet, Text, View ,Image, ScrollView, TextInput, TouchableOpacity} from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import NewsCard from './NewsCard';

const News = ()=>{
    return(
        <LinearGradient 
        style={styles.bgColor}
        start={{x:0,y:3.5}}
        end={{x:3.8,y:0}}
        locations={[.1,5.0]}
        colors={['#0F18F9','#6166E0']}
    >  
        <View>
            <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            >
                  <View style={styles.header} >
               <Text style={styles.title}>News</Text>
            </View>
            <View style={styles.today_news}>
                 <Text style={styles.today_text}>Today</Text>
                 <NewsCard />
            </View>
            <View style={styles.other_days}>
                  <Text style={styles.otherday_text}>Other days</Text>
                  <NewsCard />
                  
                  
                  
                  
            </View>
            </ScrollView>
            
        </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    bgColor: {
        width: "100%",
        height: "100%"
    },
    scrollViewContainer:{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        
        

    
    },
    header: {
       width: "100%",
       height: "20%",
       backgroundColor: 'red',
       justifyContent: "center",
       marginTop: 250
       
    },
    today_news: {
        width: "100%",
        height: "40%",
        backgroundColor: 'purple',
        justifyContent: "center",
        alignItems: "center"
    },
    other_days: {
        width: "100%",
        height: "40%",
        backgroundColor: 'green',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 300
    },
    title: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        marginLeft: 30

    }
    ,
    today_text: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginRight: 290,
        marginBottom: 10

    },
    otherday_text: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginRight: 150,
        marginBottom: 10,
        width: "50%"

    }
})

export default News;