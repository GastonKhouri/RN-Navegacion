import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: top
        }}>
            <Text style={ styles.title }>Iconos</Text>

            <Text>
                <TouchableIcon name="airplane-outline" />
                <TouchableIcon name="business-outline" />
                <TouchableIcon name="chevron-down-circle-outline" />
                <TouchableIcon name="fitness-outline" />
                <TouchableIcon name="pizza-outline" />
                <TouchableIcon name="skull-outline" />
            </Text>

        </View>
    )
}

export default Tab1Screen
