import { Linking, Pressable, Text, View } from 'react-native'
import useResponsive from '../hooks/useResponsive'
import { createStyles } from '../styles/global'
import { useTheme } from '../context/ThemeContext'
import { LINKS } from '../constants/links'
import Logo from './Logo'
export default function AboutPage() {
  const { colors } = useTheme()
  const styles = createStyles(colors)

  const isDesktop = useResponsive()

  return (
    <View style={styles.about}>
      <View style={isDesktop ? styles.aboutHeaderDesktop : styles.aboutHeader}>
        <Text style={isDesktop ? styles.aboutHeaderTitleDesktop : styles.aboutHeaderTitle}>About</Text>
      </View>

      <Logo />
      <Text style={isDesktop ? styles.aboutSubtitleDesktop : styles.aboutSubtitle}>Your movie & series archive.</Text>

      <View style={isDesktop ? styles.aboutSectionDesktop : styles.aboutSection}>
        <Text style={isDesktop ? styles.aboutTextDesktop : styles.aboutText}>
          Discover movies and series, rate what you watch, and keep track of your personal archive.
        </Text>
      </View>

      <View style={isDesktop ? styles.aboutSectionDesktop : styles.aboutSection}>
        <Text style={isDesktop ? styles.aboutSectionTitleDesktop : styles.aboutSectionTitle}>Information</Text>

        <View style={styles.aboutInfoRow}>
          <Text style={isDesktop ? styles.aboutInfoLabelDesktop : styles.aboutInfoLabel}>Created by</Text>

          <Text style={isDesktop ? styles.aboutInfoValueDesktop : styles.aboutInfoValue}>liascope</Text>
        </View>

        <View style={styles.aboutInfoRow}>
          <Text style={isDesktop ? styles.aboutInfoLabelDesktop : styles.aboutInfoLabel}>Copyright</Text>

          <Text style={isDesktop ? styles.aboutInfoValueDesktop : styles.aboutInfoValue}>© 2026 liascope</Text>
        </View>

        <View style={styles.aboutInfoRow}>
          <Text style={isDesktop ? styles.aboutInfoLabelDesktop : styles.aboutInfoLabel}>Icon</Text>

          <Pressable onPress={() => Linking.openURL(LINKS.iconCredit)}>
            <Text style={isDesktop ? styles.aboutLinkDesktop : styles.aboutLink}>smalllikeart</Text>
          </Pressable>
        </View>
      </View>

      <Text style={isDesktop ? styles.aboutVersionDesktop : styles.aboutVersion}>Version 1.0.0</Text>
    </View>
  )
}
