import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

/* Files called index.js are treated specially by Node.js.
 * You can import them by giving the name of the folder the index.js
 * is located in! */
import Icons from "../../assets/Icons";

/* This handy trick grabs the width and height of the device's window,
 * which lets you set the sizes of your UI elements relative to the
 * dimensions of the device. */
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.namePronouns}>
        <Text style={styles.name}>{Profiles.landay.name}</Text>
        <Text style={styles.pronouns}>{Profiles.landay.pronouns}</Text>
      </View>
      <View style={styles.space}></View>
      <View>
        <Image
          source={Icons.sun /* For dark mode, use Icons.moon */}
          style={styles.headerIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    height: windowWidth * 0.1,
    width: windowWidth * 0.1,
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 30,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: "row",
  },
  namePronouns: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontFamily: "Sydney-Bold",
    fontSize: 32,
  },
  pronouns: {
    fontFamily: "Sydney",
    fontSize: 16,
  },
  space: {
    flex: 1,
  },
});

export default Header;
