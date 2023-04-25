
import {
    StyleSheet, Text, ImageBackground, Image,
    View, TouchableOpacity, TextInput, KeyboardAvoidingView,
    Platform, Keyboard,
    TouchableWithoutFeedback
} from "react-native";


const CommentsScreen = ({ route }: any) => {
    console.log(route.params);
    return <View>
        <Image
            source={{ uri: route.params }}
            style={{ height: 200 }}
        />
        <Text>CommentsScreent</Text>
    </View>
}








export default CommentsScreen;