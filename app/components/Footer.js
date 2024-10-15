import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Icons, Themes } from "../../assets/Themes";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Footer = () => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.navigationOption}>
        <Image style={styles.navigationIcon} source={Icons.discover.light} />
        <Text style={styles.navigationText}>Discover</Text>
      </View>
      <View style={styles.navigationOption}>
        <Image style={styles.navigationIcon} source={Icons.heart.light} />
        <Text style={styles.navigationText}>Matches</Text>
      </View>
      <View style={styles.navigationOption}>
        <Image style={styles.navigationIcon} source={Icons.discover.light} />
        <Text style={styles.navigationText}>Discover</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    position: "absolute",
    bottom: 0,
    height: windowHeight * 0.1,
    width: windowWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Themes.light.navigation,
  },
  navigationOption: {
    padding: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  navigationIcon: {
    height: "60%",
    aspectRatio: 1,
    margin: 8,
  },
  navigationText: {
    fontFamily: "Sydney",
    color: Themes.light.bg,
  },
  // add more styles for other components!
});

export default Footer;
