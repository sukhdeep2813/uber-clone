import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";

const InputField = ({
  labelStyle,
  label,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex my-2  w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex-row justify-center items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && (
              <Image
                source={icon}
                className={`w-6 h-6  ml-4 absolute${iconStyle}`}
              />
            )}

            <TextInput
              className={`rounded-full p-3 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            ></TextInput>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
