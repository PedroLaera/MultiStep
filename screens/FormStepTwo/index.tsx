import { useNavigation } from 'expo-router';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../../components/button';
import { Input } from '../../components/input/input';
import { AccountProps } from '../../contexts/AccountFromContexto';
import { useAccountForm } from '../../hooks/useAccountForm';

export function FormStepTwo() {
    const { navigate } = useNavigation();
    const { updateFormData } = useAccountForm();
    const { control, handleSubmit, formState: { errors } } = useForm<AccountProps>();
    function handleNxtStep(data: AccountProps) {
        updateFormData(data);
        navigate("FormStepThree")
    }

    const phoneRef = useRef<TextInput>(null);  

    return (
        <View style={style.container}>
            <Text>Information aditional</Text>
            <Input
                
                icon="calendar"
                error={errors.birth?.message}
                formProps={{
                    control,
                    name: 'birth',
                    rules: { 
                        required: 'Data de Nascimento é obrigatório',
                        pattern: {
                            value: /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/,
                            message: 'Data de Nascimento inválida',
                        }
                    },
                }}
                inputProps={{
                    placeholder: 'Data de Nascimento',
                    onSubmitEditing: () => phoneRef.current?.focus(),
                    returnKeyType: 'next',
                }}
            />
            <Input
                ref={phoneRef}
                icon="phone"
                error={errors.phone?.message}   
                formProps={{
                    control,
                    name: 'phone',
                    rules: { 
                        required: 'Telefone é obrigatório', 
                        value: /^[0-9]{2} [0-9]{5}-[0-9]{4}$/,
                    },
                }}
                inputProps={{
                    placeholder: 'Telefone ',
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