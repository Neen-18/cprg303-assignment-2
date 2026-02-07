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

        {/* big box holding everything but the banner */}
        <View style={styles.container}>
          {/* edit profile box */}
          <View style={styles.editProfile}>
            <Text style={styles.subtitle}>✎ Edit Profile</Text>
          </View>

          {/* Orbs balance box */}
          <View style={styles.orbsBar}>
            <Text style={styles.subtitle}>Orbs Balance</Text>
            <View style={styles.orbsAmount}>
              <Text style={styles.orbsIcon}> &#10023;</Text>
              <Text style={styles.orbsText}>700</Text>
            </View>
          </View>

          {/* About me box */}
          <View style={styles.aboutMe}>
            <View style={styles.subContainer}>
              <Text style={styles.subtitle}>About Me</Text>
              <Text style={styles.subText}>kith</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.subtitle}>Member Since</Text>
              <Text style={styles.subText}>&#x2665; Sep 10, 2017</Text>
            </View>
          </View>

          {/* Connections box */}
          <View style={styles.connections}>
            <Text style={styles.subtitle}>Connections</Text>
            <View style={styles.connectionItem}>
              <View style={styles.connectionLeft}>
                <Text style={styles.appIcon}>&#9803;</Text>
                <Text style={styles.connectionName}>TerraGirl14</Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>✔</Text>
                </View>
              </View>
              <Text style={styles.arrow}>↗</Text>
            </View>

            <View style={styles.divider} />

            {/* Connection item */}
            <View style={styles.connectionItem}>
              <View style={styles.connectionLeft}>
                <Text style={styles.appIcon}>&#9801;</Text>
                <Text style={styles.connectionName}>neen</Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>✔</Text>
                </View>
              </View>
              <Text style={styles.arrow}>↗</Text>
            </View>
          </View>
          <View style={styles.profileCircle}>
            <Pressable onPress={() => alert("Alert Button pressed")}>
              <Text>Alert</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
