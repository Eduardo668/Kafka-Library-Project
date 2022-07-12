import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View ,Image, ScrollView, TextInput, TouchableOpacity} from 'react-native'; 
import BookCard from './BookCard'

const Store = ()=> {
    return (

        <LinearGradient 
        style={styles.bgColor}
        start={{x:0,y:3.5}}
        end={{x:3.8,y:0}}
        locations={[.1,5.0]}
        colors={['#0F18F9','#6166E0']}
    >  
        <View>
            <View style={styles.header} >
                <View style={styles.searchBarContainer} >
                <TextInput placeholder='Search a Book' 
                style={styles.searchBar}  />
                 <TouchableOpacity>
                     <Image style={styles.searchBarIcon}
                        source={
                            {
                                uri: "https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/search.png",
                                width: 30,
                                height: 30
                            }
                        }
                     />
                 </TouchableOpacity>
                </View>
               
                
            </View>
            <View style={styles.body} >
                <ScrollView 
                 contentContainerStyle={styles.booksScrowView}
                >
                   <BookCard />
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
    bgColor: {
        width: "100%",
        height: "100%"
    },
    header: {
      width: "100%",
      height: "20%",
    //   backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center"
    },
    body: {
        width: "100%",
        height: "80%",
        // backgroundColor: "green"
    },
    searchBar: {
        backgroundColor: 'white',
        padding: 10,
        width: "90%",
        borderRadius: 10
    },
    searchBarContainer: {
        width: "90%",
        flexDirection: "row",
         marginLeft: 40

    },
    searchBarIcon: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    booksScrowView: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center"
    }
})

export default Store;