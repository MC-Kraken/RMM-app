import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
    Picker
} from 'react-native';
import { Button, Tile, Overlay } from 'react-native-elements';

class Services extends Component {
    static navigationOptions = {
        title: 'Services',
    };

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            cost: 80,
            currentPrice: 0,
            numOfSelectedRooms: 0,
            numOfRooms: 6
        }
    }

    handlePress = () => {
        this.setState({ isVisible: true })
    };

    render() {
        return (
            <SafeAreaView flex={1}>
                <Tile
                    imageSrc={require('../assets/room.jpg')}
                    title="Room Rentals"
                    featured
                    titleStyle={styles.text}
                    width={'100%'}
                    height={300}
                    activeOpacity={1}
                />
                <Button
                    onPress={this.handlePress}
                    containerStyle={{ marginTop: 20, width: 200, borderColor: 'rgb(249, 15, 28)', borderWidth: 2, alignSelf: 'center' }}
                    buttonStyle={{ backgroundColor: "white", borderRadius: 20 }}
                    title="Book a Room"
                    titleStyle={{ color: 'rgb(249, 15, 28)' }}
                />
                <Overlay
                    height={500}
                    isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })}>
                    <>
                        <View style={styles.Overlay}>
                            <Text style={styles.overlayHeader}>Rent a Space for You to Make</Text>
                            <View>
                                <Text style={styles.subText}>Price: ${this.state.cost}/month</Text>
                                <Text style={styles.subText}>Rooms Available: {this.state.numOfRooms}</Text>
                            </View>
                        </View>
                        <View>
                            <Picker
                                style={styles.picker}
                                onValueChange={(numOfSelectedRooms) =>
                                    this.setState({ numOfSelectedRooms })
                                }
                                selectedValue={this.state.numOfSelectedRooms}
                            >
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                            </Picker>
                        </View>
                        <Button
                            containerStyle={{ width: 200, borderColor: 'rgb(249, 15, 28)', borderWidth: 2, alignSelf: 'center' }}
                            buttonStyle={{ backgroundColor: "white", borderRadius: 20 }}
                            titleStyle={{ color: 'rgb(249, 15, 28)' }}
                            title={`Pay for ${this.state.numOfSelectedRooms} Room(s)`}
                        />
                    </>
                </Overlay>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: "bold"
    },
    Overlay: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 20,
    },
    overlayHeader: {
        color: 'rgb(249, 15, 28)',
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 25
    },
    picker: {
        borderRadius: 4,
        borderWidth: 3,
        borderColor: '#3d5875',
        height: 200,
        marginBottom: 20
    },
    subText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 25
    }
});


export default Services;
