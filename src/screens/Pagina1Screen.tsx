import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles, colors } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};

const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {

        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={ styles.menuIcon }
                    onPress={ () => navigation.toggleDrawer() }
                >
                    <Icon name="menu-outline" size={ 30 } color={ colors.primary } />
                </TouchableOpacity>
            )
        })

    }, [])

    return (
        <View style={ styles.globalMargin }>
            <Text style={ styles.title }>Pagina1Screen</Text>

            <Button
                title='Ir pagina 2'
                onPress={ () => navigation.navigate('Pagina2Screen') }
            />

            <Text 
                style={{
                    marginVertical: 20,
                    fontSize: 20,
                }}
            >Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity   
                    style={{ ...styles.bigButtom, backgroundColor: '#5856d6' }}           
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 1,
                        nombre: 'Pedro'
                    }) }
                >
                    <Icon name="man-outline" size={ 50 } color="white" />
                    <Text style={ styles.bigButtomText }> Pedro </Text>
                </TouchableOpacity>

                <TouchableOpacity   
                    style={{ ...styles.bigButtom, backgroundColor: '#ff9427' }}           
                    onPress={ () => navigation.navigate('PersonaScreen', {
                        id: 2,
                        nombre: 'María'
                    }) }
                >
                    <Icon name="woman-outline" size={ 50 } color="white" />
                    <Text style={ styles.bigButtomText }> María </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Pagina1Screen
