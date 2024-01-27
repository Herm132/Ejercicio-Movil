import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const x = <Icon name={"twitter"} size={30} color={"#1DA1F2"} />;
const facebook = <Icon name={"facebook"} size={30} color={"#0866FF"} />;
const instagram = <Icon name={"instagram"} size={30} color={"black"} />;
const linkedin = <Icon name={"linkedin"} size={30} color={"#0A66C2"} />;
const tiktok = <FontAwesome5 name={"tiktok"} size={26} color={"black"} />;
const github = <Icon name={"github"} size={30} color={"#171515"} />; // Color #c9ada1 https://reactnative.dev/docs/colors 'rgb(255 0 255)' 'rgb(255, 0, 255)'
const reddit = <Icon name={"reddit"} size={30} color={"#FF4000"} />;
const twitch = <Icon name={"twitch"} size={30} color={"purple"} />;
const youtube = <Icon name={"youtube-play"} size={30} color={"red"} />;

const ProfileCard = () => {
  const user = {
    avatar:
      "https://img.freepik.com/foto-gratis/majestuoso-pico-montana-tranquilo-paisaje-invernal-generado-ia_188544-15662.jpg",
    coverPhoto:
      "https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg",
    name: "Harold Reyes",
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.coverPhoto }} style={styles.coverPhoto} />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.iconContainer}>
          <View style={{ paddingRight: 10 }}>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL("https://facebook.com/")}
            >
              {facebook}
            </TouchableWithoutFeedback>
          </View>
          <View style={{ paddingRight: 10 }}>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL("https://twitter.com/")}
            >
              {x}
            </TouchableWithoutFeedback>
          </View>
          <View style={{ paddingRight: 10 }}>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL("https://instagram.com/")}
            >
              {instagram}
            </TouchableWithoutFeedback>
          </View>
          <View style={{ paddingRight: 10 }}>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL("https://linkedin.com/")}
            >
              {linkedin}
            </TouchableWithoutFeedback>
          </View>

          <TouchableWithoutFeedback
            onPress={() => Linking.openURL("https://tiktok.com/")}
          >
            {tiktok}
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.iconContainer}>
          <View style={{ paddingRight: 10 }}>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL("https://github.com/")}
            >
              {github}
            </TouchableWithoutFeedback>
          </View>
          <View style={{ paddingRight: 10 }}>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL("https://www.reddit.com//")}
            >
              {reddit}
            </TouchableWithoutFeedback>
          </View>
          <View style={{ paddingRight: 10 }}>
            <TouchableWithoutFeedback
              onPress={() => Linking.openURL("https://www.twitch.tv///")}
            >
              {twitch}
            </TouchableWithoutFeedback>
          </View>

          <TouchableWithoutFeedback
            onPress={() => Linking.openURL("https://www.youtube.com/")}
          >
            {youtube}
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center", //flex y grid
  },
  coverPhoto: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: -75,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: "white",
  },
  name: {
    marginTop: 15,
    fontSize: 50,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 10,
  },

  iconContainer: {
    padding: 10,
    flexDirection: "row",
  },
});
export default ProfileCard;
