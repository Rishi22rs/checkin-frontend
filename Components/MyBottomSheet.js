import React, {useRef} from 'react';
import {View, Button, Text, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function MyBottomSheet() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <ScrollView>
          <Text>
            Ut officia nostrud cillum laborum incididunt. Id fugiat non magna in
            elit sunt nostrud incididunt incididunt qui cillum reprehenderit
            cillum exercitation. Aliqua in exercitation laboris ullamco. Officia
            eu dolore incididunt consectetur irure. Consectetur ipsum esse
            eiusmod ut exercitation voluptate ea. Deserunt quis anim deserunt et
            est ex nostrud dolor aliqua nostrud aute dolor cupidatat anim.
            Mollit et eu dolor adipisicing non eu ex dolore ipsum sint
            incididunt ex eu. Aute pariatur velit duis Lorem Lorem adipisicing
            ex Lorem officia ex amet aliqua. Excepteur reprehenderit laboris in
            et labore ut consectetur aute proident mollit incididunt elit
            fugiat. Quis reprehenderit pariatur sunt adipisicing dolore dolor
            aute et ex non elit et nulla laboris. Est veniam labore aliqua
            aliqua. Mollit deserunt deserunt reprehenderit labore ex nisi
            laborum ullamco adipisicing ullamco deserunt est veniam laboris. Ut
            ex mollit ex amet cillum sit esse est cillum adipisicing elit. Elit
            id elit eiusmod culpa pariatur commodo tempor. Eu in aliquip duis
            Lorem est ad ipsum in enim. Esse aute ut aliquip cupidatat. Sint et
            aute magna in ea aliqua. Elit dolore pariatur excepteur id duis quis
            do aliquip pariatur. Deserunt labore nostrud consequat in est id
            veniam duis est. Aliqua cillum deserunt laboris quis mollit labore
            voluptate ex culpa eiusmod eu. Cillum in Lorem cillum quis dolor est
            culpa do ipsum aute non. Reprehenderit aliquip Lorem cillum
            exercitation ex duis ad eu cupidatat. Irure eiusmod esse minim
            adipisicing sit nostrud sit excepteur non elit ullamco. Adipisicing
            voluptate sunt aute fugiat eiusmod. Duis mollit nisi nostrud
            adipisicing consequat magna elit anim magna pariatur adipisicing.
            Eiusmod velit eiusmod consequat ex qui mollit.
          </Text>
        </ScrollView>
      </RBSheet>
    </View>
  );
}
