import { View, Text, Image, StyleSheet, Dimensions, TextInput, ScrollView, TouchableWithoutFeedback, Button, TouchableHighlight } from "react-native"
import { globalStyles, fontsStyle } from "./styles/globalStlye";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useRef } from "react";
const win = Dimensions.get('window');
const ratio = win.width / 724;

const Login = () => {
    const email = useRef();
    const password = useRef();
    return (
        <ScrollView>
            <View style={loginStyles.mainContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={loginStyles.loginImage} source={require('../assets/images/login.png')} />
                </View>

                <View style={{ marginTop: 22, marginBottom: 22 }}>
                    <Text style={[globalStyles.heading1, globalStyles.primaryColor]}>Welcome Back</Text>
                    <Text style={fontsStyle.font18}>Sign in to continue</Text>
                </View>

                <View style={loginStyles.formWrapper}>
                <TouchableWithoutFeedback onPress={ ()=> email.current.focus() }>
                    <View style={loginStyles.inputWrapper}>
                        
                        <Image style={loginStyles.inputIcon} source={require('../assets/images/email.png')} />
                        <TextInput ref={email} style={loginStyles.input} placeholder="Email Id" />
                        
                    </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={ ()=> password.current.focus() }>
                    <View style={loginStyles.inputWrapper}>
                        <Image style={loginStyles.inputIcon} source={require('../assets/images/password.png')} />
                        <TextInput ref={password} style={loginStyles.input} secureTextEntry={true} placeholder="Password" />
                    </View>
                    </TouchableWithoutFeedback>

                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <BouncyCheckbox
                            style={{marginRight: 8}}
                            size={18}
                            fillColor="#1ed1df"
                            unfillColor="#FFFFFF"
                            text="Remember me"
                            iconStyle={{ borderColor: "#1ed1df", borderRadius: 2 }}
                            innerIconStyle={{ borderRadius: 2, }}
                            textStyle={{  textDecorationLine: "none", color: '#111', fontSize: 14 }}
                        />

                        <TouchableWithoutFeedback style={{marginLeft: 8}}>
                            <Text>Forgot Password?</Text>
                        </TouchableWithoutFeedback>
                    </View>

                    <View>
                        <TouchableHighlight>
                            <View style={loginStyles.submitBtn}>
                                <Text style={{fontWeight: 'bold', color: '#fff'}}>Sign In</Text>
                            </View>
                        </TouchableHighlight>
                    </View>


                </View>
            </View>
        </ScrollView>
    )
}
const loginStyles = StyleSheet.create({
    loginImage: {
        width: (win.width - 50) * .65,
        height: 747 * ratio * .65,
        objectFit: '100%'
    },
    mainContainer: {
        backgroundColor: '#f8f8f8',
        padding: 25
    },
    formWrapper: {
        backgroundColor: '#fff',
        paddingTop: 35,
        paddingBottom: 35,
        paddingLeft: 22,
        paddingRight: 22,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        padding: 10,
        backgroundColor: '#f3f3f3',
        borderRadius: 25
    },
    inputIcon: {
        width: 16,
        height: 16,
        marginRight: 10,
    },
    input: {
        width: '100%'

    },
    submitBtn:{
        backgroundColor: '#1ed1df',
        color: '#f0f',
        borderRadius: 50,
        padding: 13,
        alignItems: 'center',
        marginTop: 25
    }
})
export default Login;