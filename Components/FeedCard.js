import React, {useState} from 'react';
import {Dimensions, Image, Text, View, TouchableOpacity} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {likePost, unlikePost} from '../ApiCalls/Api';

const FeedCard = ({
  post_id,
  user_id,
  uri = 'https://i.redd.it/85zj2bc7qwj31.jpg',
  description = 'Rishi fugiat pariatur laborum sint officia culpa officia consectetur pariatur voluptate. Laborum irure enim ad magna incididunt.',
  profileUri = 'https://images7.alphacoders.com/100/thumb-350-1002612.png',
  name = 'Mai Sakurajima',
  date = '22-08-1999',
  distance = 10,
  liked = 0,
  upvotes,
  triggerSnap,
}) => {
  const dimensions = Dimensions.get('window');
  const [nol, setNol] = useState(2);
  const [like, setLike] = useState(liked);
  const [noOfLikes, setNoOfLikes] = useState(upvotes);

  let d = new Date(date);

  const handleLike = () => {
    setNoOfLikes(noOfLikes + 1);
    setLike(!like);
    likePost({post_id, user_id, datetime: date})
      .then(res => {})
      .catch(err => console.log(err));
  };
  const handleUnLike = () => {
    setNoOfLikes(noOfLikes - 1);
    setLike(!like);
    unlikePost({post_id, user_id})
      .then(res => {})
      .catch(err => console.log(err));
  };

  return (
    <View
      style={{
        display: 'flex',
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 5,
        marginBottom: 3,
      }}>
      <View>
        <Image
          source={{uri: `http://192.168.0.102:6969/uploads${uri.substring(1)}`}}
          style={{width: dimensions.width - 30, height: 300, borderRadius: 20}}
        />
        <Text
          style={{
            color: 'black',
            marginTop: 10,
            marginBottom: -10,
            fontWeight: 'bold',
            paddingRight: 10,
            paddingLeft: 10,
          }}>
          Around {Math.floor(distance)}Km away
        </Text>
        <TouchableOpacity
          onPress={() => {
            setNol(10);
          }}>
          <Text
            style={{
              color: '#A4A4A4',
              marginTop: 20,
              paddingRight: 10,
              paddingLeft: 10,
            }}
            numberOfLines={nol}>
            {description}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
          borderBottomColor: '#A4A4A4',
          borderBottomWidth: 1,
          opacity: 0.1,
        }}
      />
      <View
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 10,
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 5,
          justifyContent: 'space-between',
        }}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image
            source={{uri: profileUri}}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
            }}
          />
          <View style={{display: 'flex', marginLeft: 10}}>
            <Text style={{fontWeight: '700'}}>{name}</Text>
            <Text style={{color: '#A4A4A4'}}>{d.toDateString()}</Text>
            <Text style={{color: '#A4A4A4'}}>
              {d.getHours()}:{d.getMinutes()}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{marginLeft: 20}}>{noOfLikes}</Text>
          <Icon
            onPress={() => (like == 0 ? handleLike() : handleUnLike())}
            name={like == 0 ? 'heart-outline' : 'heart'}
            size={30}
            color="black"
            style={{marginLeft: 10}}
          />
          <Text style={{marginLeft: 15}}>69</Text>
          <TouchableOpacity>
            <IconFontAwesome
              name="comment-o"
              size={25}
              color="black"
              style={{marginLeft: 10}}
              onPress={() => triggerSnap()}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FeedCard;
