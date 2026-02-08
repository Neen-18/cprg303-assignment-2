import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./Styles";

// All icons used were ascii alt codes from:
// https://www.alt-codes.net/
// https://graphemica.com/

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      {/* scrollable component that wraps everything */}
      {/* https://reactnative.dev/docs/scrollview */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
        showsVerticalScrollIndicator={false}
      >
        {/* banner picture  */}
        <View style={styles.Banner}>
          <Image
            source={{
              uri: "https://cdn.discordapp.com/banners/356606310503940098/a_f16147d6886193e980601ec311b2c11b.png?size=480",
            }}
            style={styles.bannerImage}
          />
        </View>

        {/* circle that holds the profile picture */}
        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: "https://cdn.discordapp.com/avatars/356606310503940098/0cbb01f3e5617caf62c9d132a2beb755.webp?size=128",
            }}
            style={styles.avatar}
          />
        </View>

        {/* container for header name and badges */}
        <View style={styles.profileHeader}>
          <View style={styles.headerContainer}>
            <Text style={styles.name}>~misa</Text>

            {/* //https://graphemica.com/%E2%8C%84 */}
            <Text style={styles.dropDown}>⌄</Text>
          </View>
          <View style={styles.subHeaderContainer}>
            <Text style={styles.subHeaderText}>kkissed</Text>
            <View style={styles.badgeContainer}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>🐱 meow</Text>
              </View>
            </View>
            <View style={styles.badgeContainer}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>🦖</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>🐧</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>🐙</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>🦠</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>🐳</Text>
              </View>
            </View>
          </View>
        </View>

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
        <View style={styles.alertButton}>
          <Pressable onPress={() => alert("Alert Button pressed")}>
            <Text style={styles.subtitle}>Alert</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
