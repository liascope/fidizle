import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../styles/global'

export default function Box({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(true)

  return (
    <View style={styles.box}>
      <Pressable style={styles.btnToggle} onPress={() => setOpen((open) => !open)}>
        <Text style={styles.btnToggleText}>{isOpen ? '–' : '+'}</Text>
      </Pressable>
      {isOpen && children}
    </View>
  )
}
