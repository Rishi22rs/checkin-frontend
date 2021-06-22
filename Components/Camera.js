import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {imageToBlob} from 'react-native-image-to-blob';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting</Text>
  </View>
);

const Camera = ({navigation}) => {
  const [flash, setFlash] = useState(true);
  const [isBack, setIsBack] = useState(true);

  const [pic, setPic] = useState('');

  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
    const response = await fetch(data.uri);
    // console.log(response);
    const blob = await response.blob();
    // console.log(blob);
    // console.log(await URL.createObjectURL(blob._data));
    setPic(data);
  };

  const dimesnions = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {pic != '' && (
        <ImageBackground
          source={{
            uri: pic.uri,
          }}
          style={{height: dimesnions.height, width: dimesnions.width}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              top: dimesnions.height - 150,
            }}>
            <TouchableOpacity style={styles.capture}>
              <Icon
                name="crosshairs"
                size={50}
                color="white"
                onPress={() => setPic('')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.capture}
              onPress={() => {
                navigation.navigate('PicUpload', {
                  uri: pic.uri,
                  base64: pic.base64,
                });
                setPic('');
              }}>
              <Icon name="upload" size={50} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}

      <RNCamera
        style={styles.preview}
        type={
          isBack ? RNCamera.Constants.Type.back : RNCamera.Constants.Type.front
        }
        flashMode={
          flash
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{
                flex: 0,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => setFlash(prev => !prev)}
                style={styles.capture}>
                {flash ? (
                  <Icon name="flash" size={30} color="white" />
                ) : (
                  <Icon name="flash-off" size={30} color="white" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}>
                <Icon name="camera" size={50} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsBack(prev => !prev)}
                style={styles.capture}>
                <Icon name="bicycle" size={30} color="white" />
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Camera;
