import { Feather } from '@expo/vector-icons';
import { Controller, UseControllerProps } from 'react-hook-form';
import { TextInput, TextInputProps, View } from 'react-native';
import { style } from './style';

type Props = & TextInputProps & {
    icon: keyof typeof Feather.glyphMap;
    formProps: UseControllerProps;
    inputProps: TextInputProps;
}

export function Input({ icon, formProps, inputProps }: Props) {
    return (
        <Controller
            render={() => (
                <View style={style.group}>
                    <View style={style.icon}>
                        <Feather name="user" size={24} color="red" />
                    </View>
                    <TextInput style={style.control} {...inputProps} />
                </View>
            )
            }
            {...formProps}
        />
    )
}
