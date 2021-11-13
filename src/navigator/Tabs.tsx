import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import TopTabNavigator from './TopTabNavigator';
import StackNavigator from './StackNavigator';
import Tab1Screen from '../screens/Tab1Screen';
import { colors } from '../theme/appTheme';

const Tabs = () => {
    
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />

}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled
            barStyle={{
                backgroundColor: colors.primary
            }}
            screenOptions={ ({ route }) => ({
                headerShown: false,  // Oculta el header
                tabBarIcon: ({ color }) => {

                    let iconName: string = '';
                    
                    switch(route.name) {
                        case 'Tab1Screen' :
                            iconName = 'play-outline'
                        break;
    
                        case 'Tab2Screen' :
                            iconName = 'pause-outline'
                        break;
    
                        case 'StackNavigator' :
                            iconName = 'options-outline'
                        break;
                    }

                    return <Icon name={ iconName } size={ 20 } color={ color } />
                }
            })}
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={ Tab1Screen } /> */}
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
        </BottomTabAndroid.Navigator>
    );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={ ({ route }) => ({
                headerShown: false,  // Oculta el header
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color }) => {

                    let iconName: string = '';
                    
                    switch(route.name) {
                        case 'Tab1Screen' :
                            iconName = 'play-outline'
                        break;
    
                        case 'Tab2Screen' :
                            iconName = 'pause-outline'
                        break;
    
                        case 'StackNavigator' :
                            iconName = 'options-outline'
                        break;
                    }

                    return <Icon name={ iconName } size={ 20 } color={ color } />
                }
            })}
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={ Tab1Screen } /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={ StackNavigator } />
        </BottomTabIOS.Navigator>
    );
}

export default Tabs;