import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, useWindowDimensions, View, TouchableOpacity, Text } from 'react-native';

import SettingsScreen from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

const LateralMenu = () => {

    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
                headerShown: false  // Oculta la hamburguesa
            }}
            drawerContent={ (props) => <MenuInterno { ...props } /> }
        >
            <Drawer.Screen name="Tabs" component={ Tabs } />
            <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            {/* Parte del avatar */}
            <View style={ styles.avatarContainer }>
                <Image 
                    source={{
                        uri: 'https://gladstoneentertainment.com/wp-content/uploads/2018/05/avatar-placeholder.gif'
                    }}
                    style={ styles.avatar }
                />
            </View>

            {/* Opciones del menu */}
            <View style={ styles.menuContainer }>

                <TouchableOpacity 
                    style={ styles.menuBottom }
                    onPress={ () => navigation.navigate("Tabs") }
                >
                    <Icon name="navigate-outline" size={ 20 } />
                    <Text style={ styles.menuText }>Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ styles.menuBottom }
                    onPress={ () => navigation.navigate("SettingsScreen") }
                >
                    <Icon name="settings-outline" size={ 20 } />
                    <Text style={ styles.menuText }>Ajustes</Text>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>
    )
}

export default LateralMenu;