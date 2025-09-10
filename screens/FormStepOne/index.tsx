import { useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../../components/input/input';

export function FormStepOne() {
    const { control } = useForm();
    return (
        <View style={style.container}>
            <Text>Create Account</Text>
            <Input
                icon="user"
                formProps={{
                    name: 'name',
                    control
                }}
                inputProps={{
                    placeholder: 'Nome '
                }}
            />
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