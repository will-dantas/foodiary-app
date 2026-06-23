import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  useFonts,
} from '@expo-google-fonts/host-grotesk';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AuthProvider } from '@app/contexts/AuthContext/AuthProvider';
import { Navigation } from '@app/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { queryClient } from '@app/lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';


export function App() {
  const [isFontsLoaded] = useFonts({
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_600SemiBold,
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView >
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}