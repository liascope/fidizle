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
  black: '#090909',
  black100: '#080808',
  black400: 'rgb(17, 17, 17)',
  darkRed: '#260909',
  darkRed100: '#4A1518',

  // Borders
  border: '#252525',
}
export const styles = StyleSheet.create({
  // rootlayout
  container: {
    flex: 1,
  },

  homeContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  // index - HomeScreen
  hero: {
    paddingTop: 55,
    paddingHorizontal: 16,
    paddingBottom: 4,
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
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: colors.black400,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  libraryIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.darkRed,
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

  // HomeHeader
  navBar: {
    height: 110,
    borderRadius: 10,
    position: 'relative',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
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
    backgroundColor: colors.black400,
    borderRadius: 100,
    padding: 4,
    borderWidth: 1,
    borderColor: colors.border,
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
    backgroundColor: colors.darkRed100,
    borderWidth: 1,
    borderColor: colors.primary,
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
    borderColor: colors.border,
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  logoIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  logoTitle: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.primary,
  },

  mobileMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    padding: 3,
    backgroundColor: colors.black400,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.border,
  },

  mobileMenuButton: {
    width: 38,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },

  mobileMenuButtonActive: {
    backgroundColor: colors.darkRed100,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  // MovieList & WatchedList
  movieGrid: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  movieCard: {
    width: '32%',
    backgroundColor: colors.black400,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },

  movieCardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  posterContent: {
    backgroundColor: '#160303',
    padding: 2,
  },

  filmStrip: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: colors.black400,
  },

  filmHolesCard: {
    width: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: colors.darkRed,
  },

  filmHoleCard: {
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

  movieInfo: {
    padding: 11,
    gap: 9,
  },
  movieTitleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  movieTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    lineHeight: 20,
    marginRight: 6,
  },

  deleteButton: {
    padding: 2,
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

  // MovieList:
  searchMovieMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 7,
  },
  //
  // WatchedList
  movieStats: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },

  // SearchResults & WatchedList
  errorText: {
    color: colors.text,
    fontSize: 18,
    textAlign: 'center',
  },
  //

  // Search
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

  // SearchResults
  resultsTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    padding: 36,
  },

  results: {
    color: colors.textDark,
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height: 10,
    textAlign: 'center',
    margin: 10,
  },

  numResults: {
    color: colors.primaryDark,
    fontWeight: '900',
  },

  selectedMovieContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '22%',
    bottom: 0,

    backgroundColor: '#090909',

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',

    overflow: 'hidden',
    zIndex: 100,
    elevation: 20,
  },

  // WatchedSummary
  summary: {
    paddingTop: 22,
    paddingHorizontal: 32,
    paddingBottom: 18,

    borderRadius: 7,
    backgroundColor: colors.black100,

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

  //SelectMovie
  details: {
    flex: 1,
    paddingBottom: 20,
  },

  detailsTopBar: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  detailsTopBarTitle: {
    color: colors.textDark,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  btnBack: {
    position: 'absolute',
    left: 16,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  detailsMain: {
    flexDirection: 'row',
    gap: 18,
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  detailsImage: {
    width: 120,
    aspectRatio: 2 / 3,
    borderRadius: 12,
    resizeMode: 'cover',
  },

  detailsOverview: {
    flex: 1,
    justifyContent: 'center',
    gap: 10,
  },

  detailsTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 27,
  },

  detailsMeta: {
    color: colors.textDark,
    fontSize: 13,
    lineHeight: 19,
  },

  detailsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },

  detailsInfoText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },

  detailsGenre: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '700',
  },

  detailsContent: {
    margin: 20,
    marginTop: 24,
    padding: 20,
    backgroundColor: colors.black400,
    borderRadius: 16,
    gap: 14,
  },

  detailsSectionTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },

  detailsText: {
    color: colors.textDark,
    fontSize: 13,
    lineHeight: 20,
  },

  detailsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },

  detailsCredits: {
    gap: 4,
  },

  detailsCreditLabel: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '800',
  },

  rating: {
    marginHorizontal: 20,
    padding: 18,
    backgroundColor: colors.black400,
    borderRadius: 16,
    gap: 14,
  },

  ratingTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },

  ratingSubtitle: {
    color: colors.textDark,
    fontSize: 12,
    marginTop: 3,
  },

  alreadyRated: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  detailsState: {
    flex: 1,
    minHeight: 320,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  detailsStateIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  detailsStateTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 6,
  },

  detailsStateText: {
    color: colors.textDark,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 19,
  },

  detailsStateButton: {
    marginTop: 18,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: colors.primary,
  },

  detailsStateButtonText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },

  detailsHeader: {
    flexDirection: 'row',
  },

  detailsSection: {
    padding: 40,
    flexDirection: 'column',
    gap: 16,
  },

  movieContent: {
    flex: 1,
    gap: 10,
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

  // Toast
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

  // Loader
  loader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    margin: 48,
    color: colors.text,
  },

  // Footer
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

  footerLink: {
    color: colors.textMuted,
    textAlign: 'right',
    fontSize: 12,
  },
})
