import { useAuth } from "@app/contexts/AuthContext/useAuth";
import { AppText } from "@ui/components/AppText";
import { Button } from "@ui/components/Button";
import { WelcomeModal } from "@ui/components/WelcomeModal";
import { View } from "react-native";

export function Home() {
  const { signOut } = useAuth();

  return (
    <View>
      <WelcomeModal/>
    </View>
  );
}