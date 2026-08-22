import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { SearchProvider } from './context/SearchContext'
import { ArchiveProvider } from './context/ArchiveContext'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppShell from './components/AppShell'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <SearchProvider>
            <ArchiveProvider>
              <AppShell>
                <Stack
                  screenOptions={{
                    headerShown: false,
                  }}
                />
              </AppShell>
            </ArchiveProvider>
          </SearchProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
