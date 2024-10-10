import { View, StyleSheet, Image, Text } from "react-native";
import { palette } from "../../assets/Themes/palette";
import Profiles from "../../assets/Profiles";

const Body = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caption}>Me and my best friend</Text>
      <Image source={Profiles.landay.image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: palette.darkGray,
    backgroundColor: palette.white,
    display: "flex",
    flexWrap: "wrap",
  },
  image: {
    height: 250, // feel free to adjust this!
    aspectRatio: 1,
  },
  caption: {
    margin: 10,
    fontFamily: "Sydney-Serial-Bold",
  },
});

export default Body;
