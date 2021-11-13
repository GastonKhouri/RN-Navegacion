import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';

import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const AlbumScreen = () => {

    const { logout, authState: { isLoggedIn } } = useContext( AuthContext );

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>AlbumScreen</Text>

            {
                isLoggedIn &&
                <Button 
                    title='logout'
                    onPress={ logout }
                />
            }

        </View>
    )

}

export default AlbumScreen
