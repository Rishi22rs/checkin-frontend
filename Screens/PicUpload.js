import axios from 'axios';
import React from 'react';
import {
  Image,
  View,
  Text,
  Dimensions,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
} from 'react-native';

import TopHeader from '../Components/TopHeader';

// import RNFetchBlob from 'rn-fetch-blob';

const PicUpload = ({route, navigation}) => {
  const handleUpload = () => {
    // const data = new FormData();
    // data.append('file', {
    //   uri: route.params.uri,
    //   name: 'picture.jpg',
    //   type: 'image/jpeg',
    // });
    // // Create the config object for the POST
    // const config = {
    //   method: 'POST',
    //   header: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: {name: 'rishi'},
    // };
    // fetch(`http://192.168.0.102:6969/api/getImage`, config)
    //   .then(responseData => {
    //     console.log('responseData', responseData);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    console.log(route.params.uri)
    axios
      .post(
        `http://192.168.0.102:6969/api/getImage`,
        {base64: route.params.base64},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(res => {
        console.log('res');
      });
  };

  const dimensions = Dimensions.get('window');
  return (
    <>
      <TopHeader navigation={navigation} />
      <KeyboardAvoidingView behavior="padding" enabled={true}>
        <ScrollView style={{paddingLeft: 10, paddingRight: 10}}>
          <Image
            resizeMode="contain"
            source={{uri: route.params.uri}}
            style={{
              height: dimensions.height / 2,
              width: dimensions.width - 20,
              borderRadius: 20,
            }}
          />
          <TextInput
            style={{
              height: 150,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 20,
              color: 'black',
              marginTop: 20,
            }}
            numberOfLines={4}
            multiline
            editable
            placeholderTextColor="grey"
            placeholder="A description you like to add..."
          />
          <TouchableOpacity
            style={{
              height: 50,
              marginTop: 10,
              backgroundColor: 'black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={() => {
              // navigation.navigate('NearPostFeed');
              handleUpload();
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Upload</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default PicUpload;
