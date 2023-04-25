import React, { useState } from "react";
import LoginScreen from './Screens/auth/LoginScreen';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import PostScreen from './Screens/PostScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();
export default function App() {
  const [check, setCheck] = useState(false);
  const [nav, setNav] = useState(false);
  const useRout = (isAuth: boolean) => {
    if (!isAuth) {
      return <AuthStack.Navigator>
        <AuthStack.Screen options={{
          headerShown: false
        }} name={'Логин'} component={LoginScreen} initialParams={{
          prop: setCheck,
        }} />
        <AuthStack.Screen options={{
          headerShown: false
        }} name={'Регистрация'} component={RegistrationScreen} initialParams={{
          prop: setCheck,
        }} />
      </AuthStack.Navigator>
    }
    return (
      <>
        {!nav && <MainTab.Navigator>
          <MainTab.Screen options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='home' size={size} color={color} />
            ),
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Публикации',
            headerTitleStyle: {
              fontWeight: '500',
              fontSize: 17,
              lineHeight: 22,
              color: '#212121',
            },
            headerRight: () => (
              <MaterialIcons
                onPress={() => setCheck(false)}
                name='logout'
                size={30}
                color='#BDBDBD'
                style={{ marginRight: 16, backgroundColor: 'red' }}
              />
            ),
          }} name="Публикации" component={PostScreen} />
          <MainTab.Screen options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='pluscircleo' size={size} color={color} />
            ),
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Создать публикацию',
            headerTitleStyle: {
              fontWeight: '500',
              fontSize: 17,
              lineHeight: 22,
              color: '#212121',
            }
          }} name="Создать Публицацию" component={CreatePostsScreen} />
          <MainTab.Screen options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name='user' size={size} color={color} />
            ),
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Профиль',
            headerTitleStyle: {
              fontWeight: '500',
              fontSize: 17,
              lineHeight: 22,
              color: '#212121',
            }
          }} name="Профиль" component={ProfileScreen} />
        </MainTab.Navigator>}
      </>
    )
  }
  const routing = !check ? useRout(true) : useRout(false);
  return <NavigationContainer>
    {routing}
  </NavigationContainer>
}