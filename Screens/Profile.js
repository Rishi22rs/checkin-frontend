import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TopHeader from '../Components/TopHeader';

import * as Animatable from 'react-native-animatable';
import {userPosts} from '../ApiCalls/Api';

const Profile = ({navigation}) => {
  const dimensions = Dimensions.get('window');

  const [data, setData] = useState(data);

  useEffect(() => {
    userPosts({user_id: 1})
      .then(res => {
        console.log(res);
        setData(res);
      })
      .catch(err => console.log(err));
  }, []);

  const MyImages = ({uri, duration}) => {
    return (
      <Animatable.View animation="zoomIn" duration={duration * 500}>
        <TouchableOpacity>
          <Image
            source={{uri: uri}}
            style={{
              height: dimensions.width / 3,
              width: dimensions.width / 3,
            }}
          />
        </TouchableOpacity>
      </Animatable.View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <MyImages
        duration={item.post_id}
        uri="https://pbs.twimg.com/media/CyZCTDjUsAA7NRD.jpg"
      />
    );
  };

  return (
    <>
      <TopHeader navigation={navigation} />
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            top: 30,
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <Image
            source={{
              uri: 'https://images7.alphacoders.com/100/thumb-350-1002612.png',
            }}
            style={{
              height: 150,
              width: 150,
              borderRadius: 80,
            }}
          />
          <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
            Sakurajima Mai
          </Text>
          <Text style={{fontSize: 15, marginTop: 10, fontWeight: '100'}}>
            Forget what you saw today. Also, don’t have anything to do with me
            under any circumstances. If you understand, then say yes.
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: dimensions.width - 20,
              marginTop: 10,
            }}>
            <View>
              <Text style={{fontSize: 30, textAlign: 'center'}}>3583</Text>
              <Text style={{fontSize: 25, textAlign: 'center'}}>Likes</Text>
            </View>
            <View>
              <Text style={{fontSize: 30, textAlign: 'center'}}>
                {data && data[0].length}
              </Text>
              <Text style={{fontSize: 25, textAlign: 'center'}}>Posts</Text>
            </View>
          </View>
        </View>
        <View
          style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
          {data && (
            <FlatList
              data={data && data[0]}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={3}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default Profile;
