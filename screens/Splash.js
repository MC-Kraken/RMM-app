import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    Image,
    SafeAreaView,
} from 'react-native';


class Splash extends Component {
    
    constructor(props) {
        super(props)
        this.state = { timer: 0 }
        setInterval(() => {
            this.setState({ timer: this.state.timer + 1 })
        }, 1000)
    }
        
    render() {
        return (
           <SafeAreaView style={styles.container}>
               <Image style={{ width: 200, height: 200 }} source={require('../assets/logo.png')}/>
           </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
})

export default Splash;
