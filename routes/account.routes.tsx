import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountData } from "../screens/Finish/accountData";
import { FormStepOne } from "../screens/FormStepOne/index";
import { FormStepThree } from "../screens/FormStepThree/index";
import { FormStepTwo } from "../screens/FormStepTwo/index";

const { Navigator, Screen } = createNativeStackNavigator();
export function AccountRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="FormStepOne" component={FormStepOne} />
            <Screen name="FormStepTwo" component={FormStepTwo} />
            <Screen name="FormStepThree" component={FormStepThree} />
            <Screen name="AccountData" component={AccountData} />
        </Navigator>
    );
}