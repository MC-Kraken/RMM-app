import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


class Classes extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerLeft:
            <Icon
              name="bars"
              size={30}
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()} />,
          title: "Classes"    
        }
      }

    render() {
        return (
            <ScrollView>
                <View>
                    <Card
                        containerStyle={{ borderRadius: 10, borderWidth: 3, padding: 5 }}
                        title="Pi's and Pie's"
                        titleStyle={{ fontSize: 25 }}
                        image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F58094890%2F208415898903%2F1%2Foriginal.20190308-014842?h=230&w=460&auto=compress&rect=0%2C107%2C1024%2C512&s=355fa7e856f1b8d26c3de85c30d16abd' }}>
                        <Text style={{ marginBottom: 10, color: 'black', textAlign: 'center' }}>
                            Come out to Red Mountain Makers Pi day! We will talk Raspberry Pi's while muching on a variety of delicous pies. Come see some of the awesome projects that can buit with Raspberry Pi's and show off your own! RSVP today!
                        </Text>
                        <Button
                            buttonStyle={{ backgroundColor: 'white', borderColor: 'rgb(249, 15, 28)', borderWidth: 2, borderRadius: 20 }}
                            title='VIEW NOW' onPress={() => this.props.navigation.navigate('Pie')}
                            titleStyle={{ color: 'rgb(249, 15, 28)' }}
                    />
                    </Card>
                    <Card
                        containerStyle={{ borderRadius: 10, borderWidth: 3, padding: 5 }}
                        title='MR101 Intro to Quadcopters, Multi-rotors and Drones'
                        titleStyle={{ fontSize: 25, padding: 1 }}
                        image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F54471078%2F208415898903%2F1%2Foriginal.20190101-160204?h=230&w=460&auto=compress&rect=0%2C0%2C2400%2C1200&s=8c307b8208a391c65e649a661d878698' }}>
                        <Text style={{ marginBottom: 10, color: 'black', textAlign: 'center' }}>
                            Want to learn more about Quadcopters, Multi-rotors and Drones? This class is intended for novices and experienced pilots looking to build and fly multi-rotor style flying aircraft. We're offering a hands-on experience with parts and assembled Quadcopters present, a printed out packet of resources and a presentation created by one of our local members.
                        </Text>
                        <Button
                            backgroundColor='#03A9F4'
                            buttonStyle={{ backgroundColor: 'white', borderColor: 'rgb(249, 15, 28)', borderWidth: 2, borderRadius: 20 }}
                            title='VIEW NOW' onPress={() => this.props.navigation.navigate('MyWeb')}
                            titleStyle={{ color: 'rgb(249, 15, 28)' }}  
                        />
                    </Card>
                    <Card
                        containerStyle={{ borderRadius: 10, borderWidth: 3, padding: 5 }}
                        title='Intro to Welding & Plasma Cutting October 2018'
                        titleStyle={{ fontSize: 25, padding: 1 }}
                        image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F49458080%2F208415898903%2F1%2Foriginal.jpg?h=230&w=460&auto=compress&rect=0%2C41%2C450%2C225&s=b4979a049cc0b63c252a48451b34a374' }}>
                        <Text style={{ marginBottom: 10, color: 'black', textAlign: 'center' }}>
                            Maybe you have an old outdoor chair with a broken weld, or always wanted to build a go-kart or some sturdy garage shelves. Or maybe express yourself through metal art, but never had access to the equipment or know-how.. After our welding class, that's no longer an excuse! Come break the slag and learn how to glue a few pieces of metal together, with MORE METAL!
                    </Text>
                        <Button
                            backgroundColor='#03A9F4'
                            buttonStyle={{ backgroundColor: 'white', borderColor: 'rgb(249, 15, 28)', borderWidth: 2, borderRadius: 20 }}
                            title='VIEW NOW' onPress={() => this.props.navigation.navigate('Oct')} 
                            titleStyle={{ color: 'rgb(249, 15, 28)' }}
                        />
                    </Card>
                    <Card
                        containerStyle={{ borderRadius: 10, borderWidth: 3, padding: 5 }}
                        title='Intro to Soldering September 2018'
                        titleStyle={{ fontSize: 25, padding: 1 }}
                        image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F49457938%2F208415898903%2F1%2Foriginal.jpg?h=230&w=460&auto=compress&rect=0%2C24%2C596%2C298&s=f4575da8e5485cff9d7afb18507aea36' }}>
                        <Text style={{ marginBottom: 10, color: 'black', textAlign: 'center' }}>
                            Come learn how to solder in our Intro to Solder class! Leave with a working Red Mountain Makers Blinky badge!
                        </Text>
                        <Button
                            buttonStyle={{ backgroundColor: 'white', borderColor: 'rgb(249, 15, 28)', borderWidth: 2, borderRadius: 20 }}
                            title='VIEW NOW' onPress={() => this.props.navigation.navigate('Sept')} 
                            titleStyle={{ color: 'rgb(249, 15, 28)' }}
                        />
                    </Card>
                    <Card
                        containerStyle={{ borderRadius: 10, borderWidth: 3, padding: 5 }}
                        title='Intro to Welding & Plasma Cutting'
                        titleStyle={{ fontSize: 25, padding: 1 }}
                        image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F48534823%2F208415898903%2F1%2Foriginal.jpg?h=230&w=460&auto=compress&rect=0%2C41%2C450%2C225&s=a1e544190c87e3da6100a4607a6e7deb' }}>
                        <Text style={{ marginBottom: 10, color: 'black', textAlign: 'center' }}>
                            Maybe you have an old outdoor chair with a broken weld, or always wanted to build a go-kart or some sturdy garage shelves. Or maybe express yourself through metal art, but never had access to the equipment or know-how.. After our welding class, that's no longer an excuse! Come break the slag and learn how to glue a few pieces of metal together, with MORE METAL!
                        </Text>
                        <Button
                            backgroundColor='#03A9F4'
                            buttonStyle={{ backgroundColor: 'white', borderColor: 'rgb(249, 15, 28)', borderWidth: 2, borderRadius: 20 }}
                            title='VIEW NOW' onPress={() => this.props.navigation.navigate('Weld')} 
                            titleStyle={{ color: 'rgb(249, 15, 28)' }}
                        />
                    </Card>
                    <Card
                        containerStyle={{ borderRadius: 10, borderWidth: 3, padding: 5 }}
                        title='Intro to Soldering August 2018'
                        titleStyle={{ fontSize: 25, padding: 1 }}
                        image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F48533637%2F208415898903%2F1%2Foriginal.jpg?h=230&w=460&auto=compress&rect=0%2C24%2C596%2C298&s=cd95bb065dc0c75eb57c4b7e87abf28d' }}>
                        <Text style={{ marginBottom: 10, color: 'black', textAlign: 'center' }}>
                            Come learn how to solder in our Intro to Solder class! Leave with a working Red Mountain Makers Blinky badge!
                        </Text>
                        <Button
                            backgroundColor='#03A9F4'
                            buttonStyle={{ backgroundColor: 'white', borderColor: 'rgb(249, 15, 28)', borderWidth: 2, borderRadius: 20 }}
                            title='VIEW NOW' onPress={() => this.props.navigation.navigate('Aug')}
                            titleStyle={{ color: 'rgb(249, 15, 28)' }} 
                        />
                    </Card>
                </View>
            </ScrollView>
        )
    }
}

export default Classes;
