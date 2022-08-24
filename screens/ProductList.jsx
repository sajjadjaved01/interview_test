import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useState } from 'react';

export default function ProductList({navigation}) {
  const [people, setPeople] = useState([
    {
      id: 1,
      img: 'https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png'
    },
    {
      id: 2,
      img: 'https://www.mockofun.com/wp-content/uploads/2019/12/circle-profile-pic.jpg'
    }
  ]);

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      mainItem: 'Coffe, Tea & Cocoa',
      selectedItem: 'Matcha tea',
      categories: [
        {
          id: 1,
          title: 'Dairy',
          subCategory: [
            {
              id: 1,
              itemTitle: 'Yogurt',
              subTitle: 'Activia',
              price: '',
              totalItems: 2
            }
          ]
        },
        {
          id: 2,
          title: 'Fruits',
          subCategory: [
            {
              id: 1,
              itemTitle: 'Apples',
              subTitle: '',
              price: '',
              totalItems: 5
            },
            {
              id: 2,
              itemTitle: 'Avocado',
              subTitle: 'Hass',
              price: '$4.20',
              totalItems: 2
            },
          ]
        },
      ]
    },
    {
      id: 2,
      mainItem: 'Personal Care & Beauty',
      selectedItem: 'Facial tissues',
      categories: [
        {
          id: 1,
          title: '',
          subCategory: [
            {
              id: 1,
              itemTitle: 'Foundation',
              subTitle: 'Lancome Tient Idole Ultra Wear, shade 140',
              price: '',
              totalItems: 1
            }
          ]
        },
        {
          id: 2,
          title: 'Pharmacy',
          subCategory: [
            {
              id: 1,
              itemTitle: 'Asparin',
              subTitle: 'Tablets',
              price: '',
              totalItems: 5
            },
          ]
        },
      ]
    }
  ]);

  const renderItem = ({ item }) => (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item.img,
        }}
      />
    </View>
  );

  const renderSubCategories = ({ item }) => (
    <View>
      <Text style={{ ...styles.selectedItem }}>{item.itemTitle}</Text>
      <View style={styles.subCategoryContainer}>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={{ ...styles.totalItems, marginLeft: 15 }}>{item.totalItems}</Text>
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );

  const renderCategories = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      {item.title ? (
        <Text style={{ ...styles.mainItem, color: item.id == 1 ? 'orange' : 'pink' }}>{item.title}</Text>
      ) : null}
      <FlatList
        data={item.subCategory}
        renderItem={renderSubCategories}
        keyExtractor={item => item.id}
      />
    </View>
  );

  const renderMenuItem = ({ item }) => (
    <View style={{ marginTop: 10 }}>
      <Text style={{ ...styles.mainItem, color: item.id == 1 ? 'grey' : 'gray' }}>{item.mainItem}</Text>
      <Text style={styles.selectedItem}>{item.selectedItem}</Text>
      <View style={styles.line}></View>
      <View>
        <FlatList
          data={item.categories}
          renderItem={renderCategories}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons onPress={() => navigation.goBack()} name="arrow-back" size={25} color="#036bfc" />
            <Text style={styles.buttonTitle}>Back</Text>
          </View>
          <MaterialCommunityIcons name="dots-horizontal-circle-outline" color="#036bfc" size={25} style={{ marginRight: 5 }} />
        </View>
        <View style={styles.buyContainer}>
          <Text style={styles.heading}>To buy later</Text>
          <Text style={styles.subHeading}>Add product</Text>
        </View>
        <View style={styles.sharedWithContainer}>
          <Text style={styles.sharedWithHeading}>Shared with</Text>
          <View style={{ flexDirection: 'row' }}>
            <AntDesign name="pluscircleo" color="grey" size={25} style={{ marginRight: 5 }} />
            <FlatList
              data={people}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal
            />
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{ marginBottom: 120 }}>
          <FlatList
            data={menuItems}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop:25,
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
