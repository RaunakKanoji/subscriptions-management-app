import { Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-5xl font-sans-extrabold text-subscription">Subscription Details: {id}</Text>
      <Link href="/" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go back</Link>
    </SafeAreaView>
  )
}

export default SubscriptionDetails
