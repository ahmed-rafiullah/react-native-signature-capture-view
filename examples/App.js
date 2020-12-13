import React, {useRef, useState} from 'react';
import {SafeAreaView, StatusBar, TouchableOpacity, Text, ScrollView, View} from 'react-native';
import {SignatureView} from 'react-native-signature-capture-view';

const App = () => {
  const signatureRef = useRef(null);
  const [text,setText] = useState('')
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1}}>
        <SignatureView
        style={{
          borderWidth:2,
          height:200,
        }}
        
          ref={signatureRef}
          // onSave is automatically called whenever signature-pad onEnd is called and saveSignature is called
          onSave={(val) => {
            //  a base64 encoded image
            console.log(val);
            setText(val)
           
          }}
          onClear={() => {
            console.log('cleared signature')
            setText('')
          }}
        />
        <View style={{flexDirection: 'row', justifyContent:'center', height: 50}}>
        <TouchableOpacity
        style={{ justifyContent:'center',alignItems:'center', flex:1}}
          onPress={() => {
            signatureRef.current.clearSignature();
          }}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={{ justifyContent:'center',alignItems:'center', flex:1}}
          onPress={() => {
            signatureRef.current.saveSignature();
          }}>
          <Text>Save</Text>
        </TouchableOpacity>
        </View>
       
        <ScrollView style={{flex:1,margin: 20}}>
          <Text numberOfLines={10} ellipsizeMode='tail'>{text}</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
