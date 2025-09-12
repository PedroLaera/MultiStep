import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../../components/button';
import { Input } from '../../components/input/input';
import { AccountProps } from '../../contexts/AccountFromContexto';
import { useAccountForm } from '../../hooks/useAccountForm';

export function FormStepThree() {
        const { updateFormData } = useAccountForm();
        const { navigate } = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm<AccountProps>();
    function handleNxtStep(data: AccountProps) {
        updateFormData(data);
        navigate("AccountData")
    }

    const passwordRef = useRef<TextInput>(null);  

    return (
        <View style={style.container}>
            <Text>Password</Text>
            <Input
                icon="key"
                error={errors.password?.message}
                formProps={{
                    control,
                    name: 'senha',
                    rules: { 
                        required: 'Senha é obrigatório', 
                        minLength: {
                            value: 6,
                            message: 'Senha precisa ter no minimo 6 caracteres'
                        }
                    },

                }}
                inputProps={{
                    placeholder: 'Senha ',
                    onSubmitEditing: () => passwordRef.current?.focus(),
                    returnKeyType: 'next',
                    secureTextEntry: true

                }}
            />
            <Input
                ref={passwordRef}
                icon="key"
                error={errors.passwordConfirm?.message}   
                formProps={{
                    control,
                    name: 'Confirmar Senha',
                }}
                inputProps={{
                    placeholder: 'Confirmar Senha',
                    onSubmitEditing: handleSubmit(handleNxtStep),
                    secureTextEntry: true
                }}
            />
            <Button title='Next' onPress={handleSubmit(handleNxtStep)} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});