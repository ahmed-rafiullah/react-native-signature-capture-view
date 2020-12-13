import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {SignatureView} from 'react-native-signature-capture-view'


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: 'gray', flex:1}}>
       <SignatureView/>
      </SafeAreaView>
    </>
  );
};


export default App;
