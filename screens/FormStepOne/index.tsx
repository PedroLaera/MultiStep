import { useAccountForm } from '@/hooks/useAccountForm';
import { useNavigation } from 'expo-router';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../../components/button';
import { Input } from '../../components/input/input';
import { AccountProps } from '../../contexts/AccountFromContexto';

export function FormStepOne() {
    const { updateFormData } = useAccountForm();
    const { navigate } = useNavigation();
    const { control, handleSubmit, formState: { errors } } = useForm<AccountProps>();
    function handleNxtStep(data: AccountProps) {
        updateFormData(data);
        navigate("FormStepTwo")
    }

    const emailRef = useRef<TextInput>(null);  

    return (
        <View style={style.container}>
            <Text>Create Account</Text>
            <Input
                icon="user"
                error={errors.nome?.message }
                formProps={{
                    control,
                    name: 'name',
                    rules: { 
                        required: 'Nome é obrigatório' 
                    },
                }}
                inputProps={{
                    placeholder: 'Nome ',
                    onSubmitEditing: () => emailRef.current?.focus(),
                    returnKeyType: 'next',
                }}
            />
            <Input
                ref={emailRef}
                icon="mail"
                error={errors.email?.message}   
                formProps={{
                    control,
                    name: 'email',
                    rules: { 
                        required: 'E-mail é obrigatório',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'E-mail inválido',
                        }
                    },
                }}
                inputProps={{
                    placeholder: 'E-mail ',
                    onSubmitEditing: handleSubmit(handleNxtStep),
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