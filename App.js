import React, {useState} from 'react';
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
// import { uuid } from 'uuidv4'

const App = () => {
    const [items, setItems] = useState([
        {id: Math.floor(Math.random() * 1000000), text: 'Milk'},
        {id: Math.floor(Math.random() * 1000000), text: 'Eggs'},
        {id: Math.floor(Math.random() * 1000000), text: 'Bread'},
        {id: Math.floor(Math.random() * 1000000), text: 'Juice'},
        {id: Math.floor(Math.random() * 1000000), text: 'Bees'}
    ])

    const deleteItem = id => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        })
    }

    const addItem = text => {
        if (!text || text.length < 1) {
            Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
        } else {
            setItems(prevItems => {
                return [
                    {id: Math.floor(Math.random() * 1000000), text},
                    ...prevItems
                ]
            })
        }
    }
    
    return (
        <View style={styles.container}>
            <Header/>
            <AddItem addItem={addItem} />
            <FlatList 
                data={items} 
                renderItem={({item}) => (
                    <ListItem 
                        item={item} 
                        deleteItem={deleteItem} 
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 60
    },
})

export default App;

        // <View style={styles.container}>
        //     <Text style={styles.text}>
        //         Hello Werld
        //     </Text>
        //     <Image 
        //         source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} 
        //         style={styles.img}
        //     />
        // </View>

            // header: {
            //     flex:1,
            //     justifyContent:'center',
            //     alignItems:'center'
            // },
            // text: {
            //     color:'darkslateblue',
            //     fontSize: 30
            // },
            // img: {
            //     width: 100,
            //     height: 100,
            //     borderRadius: 100/2
            // }