import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    WebView
} from 'react-native';
import { Button, Card, ListItem, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'

class Classes extends Component {
    static navigationOptions = {
        title: 'Classes',
        headerStyle: {
            backgroundColor: 'red',
        },
        headerTintColor: 'white',
        headerRight: (
            <Button
                title="Log Out"
                buttonStyle={{ backgroundColor: 'white', width: 80, marginRight: 20, height: 30 }}
                titleStyle={{ color: 'red' }}
                type="outline"
            />
        ),
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                 <Card
                    title="Pi's and Pie's"
                    image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F58094890%2F208415898903%2F1%2Foriginal.20190308-014842?h=230&w=460&auto=compress&rect=0%2C107%2C1024%2C512&s=355fa7e856f1b8d26c3de85c30d16abd' }} style={styles.card}>
                    <Text style={{ marginBottom: 10 }}>
                    Come out to Red Mountain Makers Pi day! We will talk Raspberry Pi's while muching on a variety of delicous pies. Come see some of the awesome projects that can buit with Raspberry Pi's and show off your own! RSVP today!
                    </Text>
                    <Button
                        icon={<Icon name='lightbulb-o' color='#ffffff' size={25} style={{ marginRight: 10 }} />}
                        buttonStyle={{ backgroundColor: 'crimson', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' onPress={() => this.props.navigation.navigate('Pie')}
                        style={{marginTop: 20}} />
                </Card>
                <Card
                    title='MR101 Intro to Quadcopters, Multi-rotors and Drones'
                    image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F54471078%2F208415898903%2F1%2Foriginal.20190101-160204?h=230&w=460&auto=compress&rect=0%2C0%2C2400%2C1200&s=8c307b8208a391c65e649a661d878698' }} style={styles.card}>
                    <Text style={{ marginBottom: 10 }}>
                    Want to learn more about Quadcopters, Multi-rotors and Drones? This class is intended for novices and experienced pilots looking to build and fly multi-rotor style flying aircraft. We're offering a hands-on experience with parts and assembled Quadcopters present, a printed out packet of resources and a presentation created by one of our local members.
                    </Text>
                    <Button
                        icon={<Icon name='lightbulb-o' color='#ffffff' size={25} style={{ marginRight: 10 }} />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ backgroundColor: 'crimson', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' onPress={() => this.props.navigation.navigate('MyWeb')}
                            style={{marginTop: 20}}
                          />
                </Card>
                <Card
                    title='Intro to Welding & Plasma Cutting October 2018'
                    image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F49458080%2F208415898903%2F1%2Foriginal.jpg?h=230&w=460&auto=compress&rect=0%2C41%2C450%2C225&s=b4979a049cc0b63c252a48451b34a374' }} style={styles.card}>
                    <Text style={{ marginBottom: 10 }}>
                        Maybe you have an old outdoor chair with a broken weld, or always wanted to build a go-kart or some sturdy garage shelves. Or maybe express yourself through metal art, but never had access to the equipment or know-how.. After our welding class, that's no longer an excuse! Come break the slag and learn how to glue a few pieces of metal together, with MORE METAL!
  </Text>
                    <Button
                        icon={<Icon name='lightbulb-o' color='#ffffff' size={25} style={{ marginRight: 10 }} />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ backgroundColor: 'crimson', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' onPress={() => this.props.navigation.navigate('Oct')} />
                </Card>
                <Card
                    title='Intro to Soldering September 2018'
                    image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F49457938%2F208415898903%2F1%2Foriginal.jpg?h=230&w=460&auto=compress&rect=0%2C24%2C596%2C298&s=f4575da8e5485cff9d7afb18507aea36' }} style={styles.card}>
                    <Text style={{ marginBottom: 10 }}>
                    Come learn how to solder in our Intro to Solder class! Leave with a working Red Mountain Makers Blinky badge!
                    </Text>
                    <Button
                        icon={<Icon name='lightbulb-o' color='#ffffff' size={25} style={{ marginRight: 10 }} />}

                        buttonStyle={{ backgroundColor: 'crimson', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' onPress={() => this.props.navigation.navigate('Sept')}/>
                </Card>
                <Card
                    title='Intro to Welding & Plasma Cutting'
                    image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F48534823%2F208415898903%2F1%2Foriginal.jpg?h=230&w=460&auto=compress&rect=0%2C41%2C450%2C225&s=a1e544190c87e3da6100a4607a6e7deb' }} style={styles.card}>
                    <Text style={{ marginBottom: 10 }}>
                    Maybe you have an old outdoor chair with a broken weld, or always wanted to build a go-kart or some sturdy garage shelves. Or maybe express yourself through metal art, but never had access to the equipment or know-how.. After our welding class, that's no longer an excuse! Come break the slag and learn how to glue a few pieces of metal together, with MORE METAL!
  </Text>
                    <Button
                        icon={<Icon name='lightbulb-o' color='#ffffff' size={25} style={{ marginRight: 10 }} />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ backgroundColor: 'crimson', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' onPress={() => this.props.navigation.navigate('Weld')}/>
                </Card>
                <Card
                    title='Intro to Soldering August 2018'
                    image={source = { uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F48533637%2F208415898903%2F1%2Foriginal.jpg?h=230&w=460&auto=compress&rect=0%2C24%2C596%2C298&s=cd95bb065dc0c75eb57c4b7e87abf28d' }} style={styles.card}>
                    <Text style={{ marginBottom: 10 }}>
                    Come learn how to solder in our Intro to Solder class! Leave with a working Red Mountain Makers Blinky badge!
  </Text>
                    <Button
                        icon={<Icon name='lightbulb-o' color='#ffffff' size={25} style={{ marginRight: 10 }} />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ backgroundColor: 'crimson', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='VIEW NOW' onPress={() => this.props.navigation.navigate('Aug')}/>
                </Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
        marginBottom: 1,
        marginRight: '0%',
        marginLeft: '0%',
        width: '100%',
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 9,
            height: 9
        }
    },
    card: {
        backgroundColor: 'black',
        marginBottom: 4,
        marginLeft: '2%',
        width: '96%',
        shadowColor: 'red',
        shadowRadius: 10,
        shadowOpacity: 0.9,
        shadowOffset: {
            width: 3,
            height: 3
        }
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    },
    cardText: {
        padding: 10,
        fontSize: 14
    },

});

export default Classes;
