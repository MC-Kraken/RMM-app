import React, { Component } from "react";
import {
  Linking,
  LinkingIOS,
  Image,
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView
} from "react-native";
import { Button, Card } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
//   static navigationOptions = {
//     title: "Home",
//     headerStyle: {
//       backgroundColor: "red"
//     },
//     headerTintColor: "white",
//     headerRight: (
//       <Button
//         title="Log Out"
//         buttonStyle={{
//           backgroundColor: "white",
//           width: 80,
//           marginRight: 20,
//           height: 30
//         }}
//         titleStyle={{ color: "red" }}
//         type="outline"
//       />
//     )
//   };
  render() {
    return (
      <ScrollView>
        <View style={{ backgroundColor: 'white' }}>
          <Image style={{ width: '100%', height: 300 }} source={require("../assets/vulcan.jpg")} />
          <View>
          <Text style = {styles.welcome}> Latest News </Text>
          <Icon style={{ textAlign: 'center' }}  name="chevron-down" size={30} color="black"/>
          </View>
          
          <Card
            title="25% off Maker Membership"
            titleStyle={{ fontSize: 25 }}
            containerStyle={{ borderColor: 'rgb(249, 15, 28)', borderWidth: 3, borderRadius: 10 }}
            image={require("../assets/RMMpost.jpg")}
            dividerStyle= {{ borderWidth: 4, borderColor: 'black' }}
          >
            <Text style={styles.posts}>
              In celebration of Women's History month, Red Mountain Makers is
              offering 25% off the first month's membership to our women maker
              community! Come by any Sunday in the month of March to tour the
              space during Open Maker Hours (5:30pm -9pm) and sign up to become
              a Red Mountain Maker! RSVP at Meetup
              <Text
                style={{ color: "blue" }}
                onPress={() =>
                  LinkingIOS.openURL(
                    "https://www.meetup.com/RedMountainMakers/"
                  )
                }>
            </Text>
            </Text>
          </Card>
          <Card
            title="Smarter Bham & BASE"
            titleStyle={{ fontSize: 25 }}
            containerStyle={{ borderColor: 'rgb(249, 15, 28)', borderWidth: 3, borderRadius: 10 }}
            image={require("../assets/baseimg.png")}
          >
            <Text style={styles.posts}>
              Interested in learning about the SmarterBHAM effort to bring low
              cost air quality measurement and environment sensor logging to the
              masses? Join me next Thursday, March 7th at SmarterBham - City
              Sensor Overview and Demo
            </Text>
          </Card>
          <Card
            title="18 Channels"
            titleStyle={{ fontSize: 25 }}
            containerStyle={{ borderColor: 'rgb(249, 15, 28)', borderWidth: 3, borderRadius: 10 }}
            image={require("../assets/veml.jpg")}
          >
            <Text style={styles.posts}>
              $34 plus a handful of parts gives us 18 channels of light
              wavelength measurements. What kind of cool science can we do with
              this? Ramen spectroscopy? Indoor light color rendering index?
              There's a few other chips that can extend the range into UV
              wavelength (veml6075 adds nice peaks at 330 and 365 NM)
            </Text>
          </Card>
          <Card
            title="Laser Cutter Fundraiser"
            titleStyle={{ fontSize: 25 }}
            containerStyle={{ borderColor: 'rgb(249, 15, 28)', borderWidth: 3, borderRadius: 10 }}
            image={require("../assets/fundraiser.jpg")}
          >
            <Text style={styles.posts}>
              Hey Makers! Quick reminder that Daniel Near is still helping to
              raise funds for a laser cutter that will be open to use to our
              Maker Members! There is a little over $1500 left to raise! Help us
              bring more awesome machinery to the space!
            </Text>
          </Card>
          <Card
            title="MR101 Intro to Quadcopters, Multi-rotors and Drones"
            titleStyle={{ fontSize: 25 }}
            containerStyle={{ borderColor: 'rgb(249, 15, 28)', borderWidth: 3, borderRadius: 10 }}
            image={require("../assets/drone.jpg")}
          >
            <Text style={styles.posts}>
              Don't forget to secure your tickets for the class this Saturday!
              Class Participants get entered into a raffle to win a DJI Tello
              Quadcopter, a ready to fly beginner Quadcopter with a built in
              720P HD camera. Check out classes for more info!
            </Text>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
    marginTop: 20
  },
  posts: {
    fontSize: 16,
    color: "black"
  },
});

export default Home;
