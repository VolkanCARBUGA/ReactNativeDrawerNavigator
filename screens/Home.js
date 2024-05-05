import { SafeAreaView, Text } from "react-native";

 function Home() {
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center',backgroundColor:'green'}}>

            <Text style={{color:'white',fontSize:30,alignSelf:'center',fontWeight:'bold',}}>Home</Text>
           
        </SafeAreaView>
    );
}

export default Home