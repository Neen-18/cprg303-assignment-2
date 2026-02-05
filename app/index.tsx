import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Styles";


export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >

      <View style = {styles.profileCircle}>
        <Pressable onPress={() => alert("Alert Button pressed")}>
          <Text>Alert</Text>
        </Pressable>
      </View>

      </View>
    </SafeAreaView>
  );
}
