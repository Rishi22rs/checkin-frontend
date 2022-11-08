import React, { useState } from 'react';
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
import { addPost } from '../ApiCalls/Api';

import TopHeader from '../Components/TopHeader';

// import RNFetchBlob from 'rn-fetch-blob';

const PicUpload = ({route, navigation}) => {
  const [description,setDescription]=useState("")
  const handleUpload = () => {
    addPost({user_id:1,base64:route.params.base64,description,latitude:route.params.latitude,longitude:route.params.longitude,datetime:Date.now()}).then(res=>console.log(res).catch(err=>console.log(err)))
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
            onChangeText={setDescription}
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
