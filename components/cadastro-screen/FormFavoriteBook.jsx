import { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Image, Keyboard} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const FormFavoriteBook = ()=>{
    
    const [open, setOpen] = useState(false);

    const [value, setValue] = useState([])

    const [items, setItems] = useState([
        {
            label: "Adventure", 
            value: "adventure",
            icon: ()=> <Image
             source={{
                uri:"https://www.shareicon.net/data/2016/06/18/596076_adventure_512x512.png",
                width: 30,
                height: 30
             }} 
             />
        },
        {
            label: "Romance", 
            value: "romance",
            icon: ()=> <Image
            source={{
               uri:"https://i.pinimg.com/originals/66/b0/1b/66b01b05d0f8b75c6fb242b237ad5357.png",
               width: 30,
               height: 30
            }} 
            />
        },
        {
            label: "Fantasy",
            value: "fantasy",
            icon: ()=> <Image
            source={{
               uri:"data:image/png;base64,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",
               width: 30,
               height: 30
            }} 
            />
            
        },
        {
            label: "History", 
            value: "history",
            icon: ()=> <Image
            source={{
               uri:"https://img.freepik.com/vetores-gratis/antigo-pilar-colunas-grego-roma-atenas-edificio-historico-design-de-logotipo_560919-326.jpg",
               width: 30,
               height: 30
            }} 
            />
        },
        {
            label: "Biology", 
            value: "biology",
            icon: ()=> <Image
            source={{
               uri:"https://cdn-icons-png.flaticon.com/512/120/120111.png?w=360",
               width: 30,
               height: 30
            }} 
            />
        },
        {
            label: "Mystery",
            value: "mystery",
            icon: ()=> <Image
            source={{
               uri:"https://static.thenounproject.com/png/3339012-200.png",
               width: 30,
               height: 30
            }} 
            />

        },
        {
            label: "Horror",
            value: "horror",
            icon: ()=> <Image
            source={{
               uri:"https://cdn-icons-png.flaticon.com/512/103/103011.png",
               width: 30,
               height: 30
            }} 
            />
        },
        {
            label: "Physics",
             value: "physics",
             icon: ()=> <Image
             source={{
                uri:"https://cdn-icons-png.flaticon.com/512/21/21752.png",
                width: 30,
                height: 30
             }} 
             />
        },
        {
            label: "Drama", 
            value: "drama",
            icon: ()=> <Image
             source={{
                uri:"https://cdn-icons-png.flaticon.com/512/74/74031.png",
                width: 30,
                height: 30
             }} 
             />
        },
        {
            label: "Sci-fi",
            value: "sci-fi",
            icon: ()=> <Image
             source={{
                uri:"https://cdn-icons-png.flaticon.com/512/6651/6651790.png",
                width: 30,
                height: 30
             }} 
             />
        }

    ])

    const [favoriteBookStyle, setFavoritesBookStyles] = useState([])
     
    const stepByStep = StyleSheet.create({
        stepByStepContainer: {
            margin: 10,
            width: 100,
            flexDirection: "row",
            justifyContent: "space-evenly",
            

        }
    })
    return(
        <View style={styles.container}>
              <View style={stepByStep.stepByStepContainer}>
                  <View style={styles.ball2}></View>
                  <View style={styles.ball3}></View>
                  <View style={styles.ball1}></View>
              </View>
            <Text style={styles.dropDownTitle} >
                Select tree of your favorite book styles
            </Text>
            <DropDownPicker
              multiple={true}
              min={0}
              max={3} 
              dropDownContainerStyle={
                {width: 300,top:80, left: 55}
              }

              style={styles.dropDown}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder={"Book styles"} 
              onSelectItem={(item)=>{
                  setFavoritesBookStyles(item)
              }}
              
              
              
            />
             
             {/* <Pressable onPress={()=>{
                 console.log(value)
             }}>
                 <Text>Click</Text>
             </Pressable> */}
             <Text style={{margin: 10, fontSize: 20}} >Selected styles:</Text>
             <View style={{flexDirection: "row"}}>
                 {
                   favoriteBookStyle.map(
                       item=>
                        <Text
                        style={styles.favoriteStyles}
                        >
                            {item.label}
                        </Text>
                    )
                 }
             </View>
             <Pressable
                 style={styles.btnLogin}
                 >
                    <Text style={styles.btnLoginText}>
                        Create 
                    </Text>
            </Pressable>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // justifyContent:"space-evenly",
        top: 40
        
        
    },
    dropDownTitle: {
        fontSize: 20,
        margin: 30
    },
    dropDown:{
        width: 350,
        margin: 30
    },
    ball1: {
        width: 30,
        height: 30,
        bottom:10,
        backgroundColor: "#161DC6",
        borderRadius: 100
    },
    ball2: {
        width: 23,
        height: 23,
        backgroundColor: "#8287F4",
        borderRadius: 100
    },
    ball3: {
        width: 23,
        height: 23,
        backgroundColor: "#8287F4",
        borderRadius: 100
    },
    favoriteStyles:{
        backgroundColor: "#CDCDCD",
        padding: 7,
        borderRadius: 10,
        marginLeft: 10,
        fontSize: 20,
        top: 40
        
    },
    btnLogin: {
        padding: 20,
        width:150,
        backgroundColor:"#6166E0",
        borderRadius: 15,
        margin: 110
        
        
    },
    btnLoginText: {
        color: "white",
        fontSize: 22,
        textAlign:"center"
    },
})

export default FormFavoriteBook;