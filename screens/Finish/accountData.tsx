import { StyleSheet, Text, View } from 'react-native';
import { useAccountForm } from '../../hooks/useAccountForm';

export function AccountData() {
    const { accountFormData } = useAccountForm();

    return (
        <View style={style.container}>
            <Text>
                Nome: {accountFormData.nome}
            </Text>
            <Text>
                email: {accountFormData.email}
            </Text>
            <Text>
                Data Nasci: {accountFormData.birth}
            </Text>
            <Text>
                Telefone: {accountFormData.phone}
            </Text>
            <Text>
                Senha: { accountFormData.password } / { accountFormData.passwordConfirm }
            </Text>         
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