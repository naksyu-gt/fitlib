import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-black text-3xl font-bold">
        Hello React Native
      </Text>
      <StatusBar style="dark" />
    </View>
  );
}
