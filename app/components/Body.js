import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  Button,
  Pressable,
} from "react-native";
import { palette } from "../../assets/Themes/palette";
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Body = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.caption}>Me and my best friend</Text>
        <Image source={Profiles.landay.image} style={styles.image} />
        <View style={styles.likeBtnContainer}>
          <Pressable style={styles.likeBtn}>
            <Image source={Icons.likeOff.light} style={styles.likeBtnImg} />
          </Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.caption}>My hottest take</Text>
        <View style={styles.audioContainer}>
          <Image source={Icons.player.light} style={styles.playIcon}></Image>
          <Image
            source={Icons.audioWave.light}
            style={styles.audioIcon}
          ></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: palette.darkGray,
    backgroundColor: palette.white,
    display: "flex",
  },
  audioContainer: {
    flexDirection: "row",
  },
  image: {
    height: 300, // feel free to adjust this!
    aspectRatio: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  caption: {
    margin: 13,
    fontFamily: "Sydney-Serial-Bold",
  },
  likeBtnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  likeBtn: {
    backgroundColor: palette.white,
    height: 40,
    width: 40,
    borderRadius: 100,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  likeBtnImg: {
    height: 25,
    width: 25,
  },
  playIcon: {
    margin: 15,
    marginTop: 0,
    height: windowWidth * 0.1,
    width: windowWidth * 0.1,
  },
  audioIcon: {
    height: windowWidth * 0.1,
    width: windowWidth * 0.5,
    objectFit: "contain",
  },
});

export default Body;
