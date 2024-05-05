import React from 'react'
import{NavigationContainer} from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import 'react-native-gesture-handler';
import DrawerNavigator from './screens/DrawerNavigator'
 function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
     <DrawerNavigator/>
     </NavigationContainer>
    </SafeAreaView>
    
  )
}

export default App