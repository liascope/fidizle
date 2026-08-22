import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../styles/global'
import useResponsive from '../hooks/useResponsive'

export default function TabsLayout() {
  const insets = useSafeAreaInsets()
  const isDesktop = useResponsive()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textDark,
        tabBarStyle: isDesktop
          ? { display: 'none' }
          : {
              position: 'absolute',
              left: 16,
              right: 16,
              bottom: insets.bottom + 10,

              height: 50,

              backgroundColor: 'rgba(15, 15, 15, 0.96)',
              borderRadius: 29,

              borderTopWidth: 0,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.07)',

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.35,
              shadowRadius: 20,
              elevation: 10,
            },

        tabBarItemStyle: {
          flex: 1,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={color} />,
        }}
      />

      <Tabs.Screen
        name="movies/index"
        options={{
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'film' : 'film-outline'} size={22} color={color} />,
        }}
      />

      <Tabs.Screen
        name="series/index"
        options={{
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'tv' : 'tv-outline'} size={22} color={color} />,
        }}
      />
    </Tabs>
  )
}
