import { StyleSheet } from 'react-native'

export const colors = {
  // Brand
  primary: '#E50914',
  primaryDark: '#7e0d13',

  // Text
  text: '#F5F5F5',
  textDark: '#A3A3A3',
  textMuted: '#737373',

  // Backgrounds
  background: '#0A0A0A',
  background100: '#181818',
  background500: '#222222',
  background900: '#0A0A0A',

  // Borders
  border: '#2E2E2E',
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },

  navBar: {
    height: 110,
    borderRadius: 10,
    position: 'relative',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
    zIndex: 1000,
    elevation: 1000,
  },

  navBarContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111111',
    borderRadius: 100,
    padding: 4,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    minWidth: 105,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 100,
  },

  navButtonActive: {
    backgroundColor: '#3a1012',
    borderWidth: 1,
    borderColor: colors.primary,
  },

  navButtonPressed: {
    opacity: 0.65,
    transform: [{ scale: 0.97 }],
  },

  navText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textDark,
    letterSpacing: 0.3,
  },

  navTextActive: {
    color: colors.primary,
    fontWeight: '700',
  },
  filmHoles: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  filmHolesTop: {
    top: 6,
  },

  filmHolesBottom: {
    bottom: 6,
  },

  filmHole: {
    width: 18,
    height: 9,
    borderRadius: 2,
    backgroundColor: colors.text,
    borderWidth: 1,
    borderColor: '#333',
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  logoIcon: {
    fontSize: 28,
  },

  logoTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.primary,
  },

  search: {
    width: '60%',
    marginHorizontal: 16,
    height: 42,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 100,
    color: colors.text,
    fontSize: 16,
  },

  searchPlaceholder: {
    color: colors.textDark,
  },
  movieGridContainer: {
    padding: 8,
    paddingBottom: 30,
  },

  movieGrid: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  movieCard: {
    width: '32%',
    backgroundColor: '#111111',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#252525',
  },

  posterContent: {
    backgroundColor: '#160303',
    padding: 2,
  },

  filmStrip: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '#111111',
  },

  filmHoless: {
    width: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#160303',
  },

  filmHolee: {
    width: 15,
    height: 14,
    backgroundColor: colors.textDark,
    borderRadius: 1,
  },

  moviePoster: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain',
  },

  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },

  movieInfo: {
    padding: 11,
    gap: 9,
  },

  movieTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 20,
  },

  movieStats: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },

  movieStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  movieStatText: {
    fontSize: 12,
    color: colors.textDark,
    fontWeight: '500',
  },

  btnDeletePressed: {
    opacity: 0.5,
    transform: [{ scale: 0.92 }],
  },
  results: {
    color: colors.textDark,
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 10,
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },

  numResults: {
    color: colors.primaryDark,
    fontWeight: '900',
  },

  btnToggle: {
    position: 'absolute',
    top: 8,
    right: 8,

    height: 24,
    width: 24,
    borderRadius: 12,

    backgroundColor: colors.background900,

    alignItems: 'center',
    justifyContent: 'center',

    zIndex: 999,
  },

  btnToggleText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
  },

  loader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    margin: 48,
    color: colors.text,
  },

  error: {
    textAlign: 'center',
    fontSize: 20,
    padding: 48,
    color: colors.text,
  },

  main: {
    flex: 1,
    marginTop: 24,
    flexDirection: 'row',
  },

  box: {
    flex: 1,
    backgroundColor: colors.background100,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },

  listItem: {
    minHeight: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 14,
    backgroundColor: colors.background100,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  filmHolessmall: {
    width: 15,
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 1,
    backgroundColor: '#160303',
  },

  filmHolesmall: {
    width: 7,
    height: 4,
    backgroundColor: colors.textDark,
    borderRadius: 1,
  },
  listImage: {
    width: 50,
    height: 70,
    borderRadius: 3,
    aspectRatio: 1,
    resizeMode: 'contain',
    backgroundColor: '#160303',
  },

  listContent: {
    flex: 1,
    gap: 8,
  },

  listTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '600',
  },

  listText: {
    color: colors.textDark,
    fontSize: 14,
  },

  list: {
    height: 'auto',
  },

  listWatched: {
    flex: 1,
  },

  listItemPressed: {
    backgroundColor: colors.background100,
  },

  listInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },

  listInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  btnDelete: {
    position: 'absolute',
    right: 24,

    height: 20,
    width: 20,
    borderRadius: 9,

    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnDeleteText: {
    color: colors.background900,
    fontSize: 16,
    fontWeight: 'bold',
  },

  summary: {
    paddingTop: 22,
    paddingHorizontal: 32,
    paddingBottom: 18,

    borderRadius: 7,
    backgroundColor: colors.background100,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,

    elevation: 8,
  },

  summaryTitle: {
    textTransform: 'uppercase',
    fontSize: 16,
    marginBottom: 6,
    color: colors.text,
  },

  summaryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,

    fontSize: 16,
    fontWeight: '600',
  },

  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  summaryContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },

  summaryIcon: {
    fontSize: 16,
  },

  summaryText: {
    fontSize: 16,
    color: colors.text,
  },

  resultsHeader: {
    paddingTop: 18,
    paddingBottom: 12,
  },

  homeContent: {
    flex: 1,
  },

  homeContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  selectedMovieContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    height: '78%',

    backgroundColor: '#090909',

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',

    overflow: 'hidden',
    zIndex: 100,
    elevation: 20,
  },
  hero: {
    paddingTop: 55,
    paddingHorizontal: 4,
    paddingBottom: 45,
  },

  heroEyebrow: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 2,
    color: colors.textDark,
    marginBottom: 4,
  },

  heroTitle: {
    fontSize: 42,
    lineHeight: 46,
    fontWeight: '900',
    letterSpacing: 1,
    color: colors.text,
  },

  heroTagline: {
    marginTop: 14,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    color: colors.primary,
  },

  heroSubtitle: {
    marginTop: 8,
    fontSize: 13,
    color: colors.textDark,
  },

  librarySection: {
    paddingHorizontal: 0,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 14,
  },

  libraryCards: {
    flexDirection: 'row',
    gap: 12,
  },

  libraryCard: {
    flex: 1,
    minHeight: 185,
    padding: 16,
    backgroundColor: '#111111',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#252525',
  },

  libraryCardPressed: {
    opacity: 0.7,
    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  libraryIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#1c0b0c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  libraryCardTitle: {
    marginTop: 14,
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },

  libraryCardNumber: {
    marginTop: 10,
    fontSize: 30,
    lineHeight: 34,
    fontWeight: '800',
    color: colors.text,
  },

  libraryCardLabel: {
    fontSize: 12,
    color: colors.textDark,
  },

  libraryCardLink: {
    marginTop: 'auto',
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },

  arrow: {
    fontSize: 15,
  },
  details: {
    flex: 1,
  },

  detailsHeader: {
    flexDirection: 'row',
  },

  detailsSection: {
    padding: 40,
    flexDirection: 'column',
    gap: 16,
  },

  detailsImage: {
    width: '33%',
    margin: 14,
    aspectRatio: 2 / 3,
    resizeMode: 'cover',
  },

  detailsOverview: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 30,

    backgroundColor: colors.background100,

    flexDirection: 'column',
    gap: 14,
  },

  detailsTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
    lineHeight: 27,
    color: colors.text,
  },

  detailsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  detailsText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },

  rating: {
    backgroundColor: colors.background100,
    borderRadius: 9,

    paddingVertical: 20,
    paddingHorizontal: 24,

    marginBottom: 8,

    flexDirection: 'column',
    gap: 24,
  },
  searchSection: {
    marginBottom: 30,
  },

  resultsTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 5,
  },

  movieContent: {
    flex: 1,
    gap: 10,
  },
  searchMovieMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 7,
  },

  movieCardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  btnAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,

    backgroundColor: colors.primary,

    paddingVertical: 10,
    paddingHorizontal: 18,

    borderRadius: 100,

    alignSelf: 'flex-start',

    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 4,
  },

  btnAddText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.2,
  },

  errorText: {
    color: colors.text,
    fontSize: 18,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
  seconds: {
    backgroundColor: colors.background100,
    width: 80,
    borderRadius: 100,
    padding: 4,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondsText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },

  btnBack: {
    position: 'absolute',

    top: 6,
    left: 6,

    height: 32,
    width: 32,

    borderRadius: 16,

    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.8,
    shadowRadius: 10,

    elevation: 10,

    zIndex: 999,
  },

  btnBackText: {
    color: colors.background500,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },

  footerText: {
    color: colors.textMuted,
    fontSize: 13,
  },

  footerBrand: {
    color: colors.primary,
    fontWeight: '700',
  },

  mobileMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,

    padding: 3,

    backgroundColor: '#111111',

    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  mobileMenuButton: {
    width: 38,
    height: 36,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 100,
  },

  mobileMenuButtonActive: {
    backgroundColor: '#3a1012',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  toast: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,

    minHeight: 52,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingVertical: 12,

    backgroundColor: '#151515',

    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 20,

    elevation: 12,
    zIndex: 9999,
  },

  toastIcon: {
    width: 30,
    height: 30,

    borderRadius: 100,

    backgroundColor: 'rgba(229, 9, 20, 0.15)',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 11,

    borderWidth: 1,
    borderColor: 'rgba(229, 9, 20, 0.25)',
  },

  toastIconText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '800',
  },

  toastText: {
    flex: 1,

    color: colors.text,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
})
