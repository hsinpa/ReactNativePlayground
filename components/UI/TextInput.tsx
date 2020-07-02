import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export interface InputProp {
    inputValue : string,
    inputChange : (text : string) => void
}

const Input = (p_input :  InputProp) => (
    <View style={styles.inputContainer}>
        <TextInput
            value={p_input.inputValue}
            style={styles.input}
            placeholder='What needs to be done?'
            placeholderTextColor="#CACACA"
            selectionColor='#666666'
            onChangeText={p_input.inputChange}
        />
    </View>
)

const styles = StyleSheet.create({ 
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }
    }, 
    input: {
        height: 60, backgroundColor: '#ffffff', paddingLeft: 10, paddingRight: 10
    } 
})

export default Input;