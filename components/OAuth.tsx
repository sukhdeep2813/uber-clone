import { Image, Text, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants";
const OAuth = () => {
  const handleGoogleSignIn = async () => {};
  return (
    <View>
      <View className=" flex flex-row justify-center items-center  gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100"></View>
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-general-100"></View>
      </View>

      <CustomButton
        className=" w-full shadow-none"
        title="Log in with Google"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className=" h-5 w-5 mx-2"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};
export default OAuth;
