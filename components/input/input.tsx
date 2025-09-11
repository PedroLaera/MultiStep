import { Feather } from '@expo/vector-icons';
import { forwardRef } from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { style } from './style';

type Props =  {
    error?: string;
    icon: keyof typeof Feather.glyphMap;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
}

const Input = forwardRef<TextInput, Props>(({ icon, formProps, inputProps, error = '' }, ref ) => {
    return (
        <View style={style.container}>
            <Controller
                render={( {field} ) => (
                    <View style={style.group}>
                        <View style={style.icon}>
                            <Feather name="user" size={24} color="red" />
                        </View>
                        <TextInput 
                            ref={ref}
                            value={field.value}
                            onChangeText={field.onChange}
                            style={style.control} 
                            {...inputProps}
                        />
                    </View>
                )}
                {...formProps}
            />
            {
                error?.length > 0 &&
                <Text style={style.error}>
                {error}
            </Text>
            }
            
        </View>
    );
});

Input.displayName = "Input";

export { Input };

