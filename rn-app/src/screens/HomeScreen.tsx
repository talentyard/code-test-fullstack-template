import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { Session } from "@heroiclabs/nakama-js";
import { authenticate, callDailyLogin } from "../api/nakama";

// TODO: replace with a stable unique ID per device (e.g. expo-device or AsyncStorage)
const DEVICE_ID = "test-device-001";

export function HomeScreen() {
  const [session, setSession] = useState<Session | null>(null);
  const [coins, setCoins] = useState<number>(0);
  const [lastReward, setLastReward] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: authenticate on mount and store session
  }, []);

  const handleDailyLogin = async () => {
    // TODO: call callDailyLogin, update coins and lastReward state
  };

  // TODO: display the following information clearly:
  //   - Current total coins
  //   - Last reward earned
  //   - Current streak / stage (optional but recommended)
  //   - Cumulative login days in this 30-day period (optional but recommended)
  //   - A "Claim Daily Reward" button
  //   - Loading and error states

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Reward</Text>

      {/* TODO: implement the UI */}
      <Text>Coins: {coins}</Text>

      <TouchableOpacity style={styles.button} onPress={handleDailyLogin} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Claim Daily Reward</Text>
        )}
      </TouchableOpacity>

      {lastReward !== null && (
        <Text style={styles.reward}>+{lastReward} coins earned!</Text>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 24 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 32 },
  button: { backgroundColor: "#4CAF50", padding: 16, borderRadius: 8, marginTop: 24 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  reward: { marginTop: 16, fontSize: 20, color: "#FF9800" },
  error: { marginTop: 16, color: "red" },
});
