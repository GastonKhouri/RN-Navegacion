import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';

import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {

    const { top } = useSafeAreaInsets();

    const { authState } = useContext( AuthContext );

    return (
        <View style={{ 
            ...styles.globalMargin, 
            marginTop: top + 20 
        }}>
            <Text style={ styles.title }>Settings Screen</Text>
            
            <Text> { JSON.stringify(authState, null, 3) } </Text>

            {
                authState.favoriteIcon &&
                <Icon name={ authState.favoriteIcon } size={ 150 } color={ colors.primary } />
            }

        </View>
    )
}

export default SettingsScreen
