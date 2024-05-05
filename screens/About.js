import { useDrawerStatus } from "@react-navigation/drawer";
import { Button, SafeAreaView, Text } from "react-native";

 function About({navigation}) {
    const status=useDrawerStatus()
    return (
       
        <SafeAreaView style={{flex:1,justifyContent:'center',backgroundColor:'green'}}>

            <Text style={{color:'white',fontSize:30,alignSelf:'center',fontWeight:'bold',}}>{status}</Text>
            <Button title="Do Something" onPress={() => navigation.openDrawer()}></Button>
            <Button title="Go Back" onPress={() => navigation.goBack()}></Button>
           
        </SafeAreaView>
    );
}

export default About