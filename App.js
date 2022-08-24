import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './screens/ProductList';
import Login from './screens/Login';
import Register from './screens/Register';

const Drawer = createStackNavigator();
export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='login'>
          <Drawer.Screen name='productList' component={ProductList} options={{headerShown: false}} />
          <Drawer.Screen name='login' component={Login} options={{headerShown: false}} />
          <Drawer.Screen name='register' component={Register} options={{title: "Registration"}}/>
        </Drawer.Navigator>

      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#036bfc',
    marginLeft: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  buyContainer: {
    flexDirection: 'row', justifyContent: 'space-between', marginTop: 5
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#036bfc',
    marginTop: 7
  },
  sharedWithContainer: {
    marginTop: 15, flexDirection: 'row', justifyContent: 'space-between'
  },
  sharedWithHeading: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 30,
    height: 30,
    marginLeft: 5
  },
  line: {
    marginTop: 15,
    height: 2,
    width: '100%',
    backgroundColor: 'darkgrey'
  },
  mainItem: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
  },
  selectedItem: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
    marginTop: 10
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'grey'
  },
  price: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'grey'
  },
  totalItems: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'black',
  },
  subCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
});
