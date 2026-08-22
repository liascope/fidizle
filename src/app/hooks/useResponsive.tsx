import { useWindowDimensions } from 'react-native'

export default function useResponsive() {
  const { width } = useWindowDimensions()
  const isDesktop = width > 700

  return isDesktop
}
