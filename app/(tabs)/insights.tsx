import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

const Insights = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold text-primary">
        Insights
      </Text>
    </SafeAreaView>
  )
}

export default Insights
