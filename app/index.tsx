import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./Styles";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* banner picture  */}
        <View style={styles.Banner}>
          <Image
            source={{
              uri: "https://cdn.discordapp.com/banners/356606310503940098/a_f16147d6886193e980601ec311b2c11b.png?size=480",
            }}
            style={{ height: "100%", width: "100%" }}
          />
        </View>

        {/* circle that holds the profile picture */}
        <View style={styles.profileCircle}>
          <Pressable onPress={() => alert("Alert Button pressed")}>
            <Text>Alert</Text>
          </Pressable>
        </View>

        {/* big box holding everything but the banner */}
        <View style={styles.container}>
          {/* edit profile box */}
          <View style={styles.editProfile}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
              }}
            >
              Edit Profile
            </Text>
          </View>

          {/* Orbs balance box */}
          <View style={styles.orbsBar}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
              }}
            >
              Orbs Balance
            </Text>
          </View>

          {/* About me box */}
          <View style={styles.aboutMe}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
              }}
            >
              About Me
            </Text>
          </View>

          {/* Connections box */}
          <View style={styles.connections}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
              }}
            >
              Connections
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
