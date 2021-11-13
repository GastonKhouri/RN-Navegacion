import React, { useEffect } from 'react'
import { useNavigation, CommonActions } from '@react-navigation/core';
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

const Pagina2Screen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: ''
        })
    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }> Pagina2Screen </Text>

            <Button 
                title='Ir pagina 3'
                onPress={ () => navigation.dispatch(CommonActions.navigate({ name: 'Pagina3Screen' })) }
            />
        </View>
    )
}

export default Pagina2Screen
