import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Text, TouchableOpacity, View} from 'react-native';

const TopHeader = ({title = '𝐂𝐡𝐞𝐜𝐤𝐈𝐧', navigation,latitude,longitude}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 20,
        backgroundColor: 'white',
        borderRadius: 2,
        borderBottomColor: '#A4A4A4',
        borderBottomWidth: 0.2,
      }}>
      <Icon
        name="camera"
        size={30}
        color="black"
        style={{marginLeft: 10}}
        onPress={() => navigation.navigate('Camera',{latitude,longitude})}
      />
      <Text style={{fontSize: 20}}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon name="user" size={30} color="black" style={{marginLeft: 10}} />
      </TouchableOpacity>
    </View>
  );
};

export default TopHeader;
