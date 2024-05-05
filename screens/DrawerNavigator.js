import { DrawerContentScrollView, DrawerItem, DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer'
import Icon from "react-native-vector-icons/Ionicons";

import Home from './Home'
import Settings from './Settings'
import About from './About'
import Profile from './Profile'
import { Image, Text, View } from 'react-native'
function DrawerNavigator() {
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator screenOptions={{ drawerPosition: 'right', drawerType: "slide", headerLeft: false, headerRight: () => <DrawerToggleButton />, drawerIcon: () => <View style={{ width: 40, height: 40, margin: 5, borderRadius: 20 }}><Icon name="home" size={50} color="#7469B6" /></View> }}drawerContent={(props)=><Content {...props}/>}>
            <Drawer.Screen name="Home" component={Home} options={{ title: 'Anasyfa', headerTitleAlign: 'center', headerLef: () => <View style={{ width: 40, backgroundColor: 'red', height: 40, margin: 5, borderRadius: 20 }}></View> }} />
            <Drawer.Screen name="Settings" component={Settings} options={{
                title: 'Ayarlar', headerTitleAlign: 'center', drawerIcon: () => <Icon
                    name="home"
                    color="#ccc"
                    size={30}
                />
            }} />
            <Drawer.Screen name="About" component={About} options={{ title: 'Hakkımızda', headerTitleAlign: 'center' }} />
            <Drawer.Screen name="Profile" component={Profile} options={{ title: 'Profil', headerTitleAlign: 'center' }} />
        </Drawer.Navigator>
    )
}
const Content=(props)=>{
    return(
        <View style={{flex:1,}}>
           <View style={{flex:1,justifyContent:'space-evenly',alignItems:'center',borderBottomWidth:1,borderColor:'#557C55'}}>
              <Image source={require('../images/avatar_erkek.png')} style={{width:100,height:100, borderRadius:10,borderWidth:3,borderColor:"#5BBCFF",margin:5}}/>
              <Text style={{fontSize:25,fontWeight:'bold',color:'#322C2B',fontFamily:'Consolas',fontStyle:'italic'}}>Ahmet Erhan</Text>
              <Text style={{fontSize:20,color:'#3C3633',fontFamily:'Consolas',fontStyle:'italic'}}>React Native Developer</Text>
              <Text style={{fontSize:20,color:'#000000',fontFamily:'Consolas',fontStyle:'italic'}}>volkanilkyar@gmail.com</Text>
           </View>
           <View style={{flex:3}}>
            <DrawerContentScrollView showsVerticalScrollIndicator={false}>
                <DrawerItem label="Anasyfa" onPress={() => props.navigation.navigate('Home')}icon={() => <Icon name="home" size={30} color="#7469B6" />} />
                <DrawerItem label="Ayarlar" onPress={() => props.navigation.navigate('Settings')}icon={() => <Icon name="settings" size={30} color="#7469B6" />} />
                <DrawerItem label="Hakkımızda" onPress={() => props.navigation.navigate('About')} icon={() => <Icon name="information-circle" size={30} color="#7469B6" />}/>
                <DrawerItem label="Profil" onPress={() => props.navigation.navigate('Profile')}icon={() => <Icon name="person" size={30} color="#7469B6" />} />
                </DrawerContentScrollView>
           </View>
        </View>
    )
}

export default DrawerNavigator

