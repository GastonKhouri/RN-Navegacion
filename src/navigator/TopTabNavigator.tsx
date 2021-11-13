import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { colors } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={ ({ route }) => ({
                tabBarPressColor: colors.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary
                },
                tabBarStyle: {
                    shadowColor: 'transparent',
                    elevation: 0,
                },
                tabBarIcon: ({ color }) => {

                    let iconName: string = '';
                    
                    switch(route.name) {
                        case 'Chat' :
                            iconName = 'chatbox-outline'
                        break;
    
                        case 'Contacts' :
                            iconName = 'people-outline'
                        break;
    
                        case 'Album' :
                            iconName = 'albums-outline'
                        break;
                    }

                    return <Icon name={ iconName } size={ 20 } color={ color } />
                }
            })}
        >
            <Tab.Screen name="Chat" component={ ChatScreen } />
            <Tab.Screen name="Contacts" component={ ContactsScreen } />
            <Tab.Screen name="Album" component={ AlbumScreen } />
        </Tab.Navigator>
    );
}

export default TopTabNavigator;