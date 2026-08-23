import { StyleSheet } from 'react-native'
import { darkColors } from '../constants/colors'
export const colors = {
  // Brand
  primary: '#e50914',
  primaryDark: '#7e0d13',

  // Text
  text: '#fff5f5',
  textDark: '#A3A3A3',
  textMuted: '#737373',

  // Backgrounds
  black: '#090909',
  black100: '#080808',
  black400: 'rgb(17, 17, 17)',
  black900: 'rgba(255,255,255,0.06)',
  darkRed: '#260909',
  darkRed100: '#4A1518',
  lightRed: 'rgba(229, 9, 20, 0.15)',
  star: '#fcc416',

  // Borders
  border: '#252525',
  redBorder: 'rgba(229, 9, 20, 0.25)',
}
export function createStyles(colors: typeof darkColors) {
  return StyleSheet.create({
    // Homepage
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
      padding: 26,
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

    // Homepage Desktop
    heroDesktop: {
      width: '100%',
      maxWidth: 1200,
      alignSelf: 'center',
      paddingTop: 90,
      paddingHorizontal: 40,
      paddingBottom: 20,
      alignItems: 'center',
    },

    heroTitleDesktop: {
      fontSize: 64,
      lineHeight: 68,
      fontWeight: '900',
      letterSpacing: 1.5,
      color: colors.text,
    },
    heroEyebrowDesktop: {
      fontSize: 14,
      fontWeight: '600',
      letterSpacing: 2.5,
      color: colors.textDark,
      marginBottom: 6,
    },

    heroTaglineDesktop: {
      marginTop: 18,
      fontSize: 14,
      fontWeight: '800',
      letterSpacing: 2.5,
      color: colors.primary,
    },

    heroSubtitleDesktop: {
      marginTop: 10,
      fontSize: 14,
      color: colors.textDark,
    },

    libraryDesktop: {
      width: '100%',
      maxWidth: 1200,
      alignSelf: 'center',
      paddingHorizontal: 40,
      marginTop: 45,
    },

    sectionTitleDesktop: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 20,
      textAlign: 'center',
    },

    libraryCardsDesktop: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 24,
    },

    libraryCardDesktop: {
      flex: 1,
      minWidth: 320,
      minHeight: 340,
      padding: 56,
      flexDirection: 'column',
      backgroundColor: colors.black400,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: colors.border,
    },

    libraryIconDesktop: {
      width: 56,
      height: 56,
      borderRadius: 15,
      backgroundColor: colors.darkRed,
      alignItems: 'center',
      justifyContent: 'center',
    },

    libraryCardTitleDesktop: {
      marginTop: 20,
      fontSize: 21,
      fontWeight: '700',
      color: colors.text,
    },

    libraryCardNumberDesktop: {
      marginTop: 14,
      fontSize: 42,
      lineHeight: 46,
      fontWeight: '800',
      color: colors.text,
    },

    libraryCardLabelDesktop: {
      fontSize: 14,
      color: colors.textDark,
    },

    libraryCardLinkDesktop: {
      marginTop: 'auto',
      fontSize: 14,
      fontWeight: '700',
      color: colors.primary,
    },

    // HomeHeader (in AppShell)
    header: {
      height: 100,
      borderRadius: 10,
      position: 'relative',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.border,
      zIndex: 100,
      elevation: 100,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      gap: 20,
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
      width: 10,
      height: 14,
      borderRadius: 3,
      backgroundColor: colors.text,
      borderWidth: 1,
      borderColor: colors.border,
    },

    headerButton: {
      padding: 5,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 8,
      backgroundColor: colors.black900,
    },
    // HomeHeader Desktop (in AppShell)
    headerDesktop: {
      height: 120,
      width: '100%',
      borderRadius: 14,
      position: 'relative',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.border,
      zIndex: 100,
      elevation: 100,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 32,
      gap: 28,
    },

    filmHolesDesktop: {
      height: 18,
    },

    filmHoleDesktop: {
      width: 14,
      height: 22,
      borderRadius: 5,
      backgroundColor: colors.text,
      borderWidth: 1,
      borderColor: colors.border,
    },

    headerButtonDesktop: {
      width: 42,
      height: 42,
      borderRadius: 21,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 12,
      backgroundColor: colors.black900,
      borderWidth: 1,
      borderColor: colors.black900,
    },
    // DesktopNavigation
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
    // Search
    search: {
      flex: 1,
      height: 42,
      paddingHorizontal: 14,
      backgroundColor: colors.black900,
      borderRadius: 100,
      color: colors.text,
      fontSize: 16,
    },
    // AboutPage
    about: {
      flex: 1,
      backgroundColor: colors.black100,
      padding: 30,
      alignItems: 'center',
    },

    aboutHeader: {
      height: 58,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      borderBottomWidth: 1,
      borderBottomColor: colors.black900,
    },

    aboutHeaderTitle: {
      color: colors.text,
      fontSize: 13,
      fontWeight: '700',
      letterSpacing: 0.5,
      textTransform: 'uppercase',
    },

    aboutSection: {
      width: '100%',
      margin: 24,
      padding: 20,
      backgroundColor: colors.black400,
      borderRadius: 16,
    },

    aboutSubtitle: {
      color: colors.textDark,
      fontSize: 13,
      marginVertical: 10,
    },

    aboutSectionTitle: {
      color: colors.text,
      fontSize: 15,
      fontWeight: '800',
    },

    aboutText: {
      color: colors.textDark,
      fontSize: 13,
      lineHeight: 20,
    },

    aboutLinks: {
      width: '100%',
      marginTop: 14,
      backgroundColor: colors.black400,
      borderRadius: 16,
      overflow: 'hidden',
    },

    aboutLinkText: {
      flex: 1,
      color: colors.text,
      fontSize: 13,
      fontWeight: '600',
    },

    aboutVersion: {
      color: colors.textDark,
      fontSize: 11,
      marginTop: 30,
    },

    aboutCopyright: {
      color: colors.textMuted,
      fontSize: 11,
      marginTop: 6,
    },
    aboutInfoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.black900,
    },

    aboutInfoLabel: {
      color: colors.textDark,
      fontSize: 12,
    },

    aboutInfoValue: {
      color: colors.text,
      fontSize: 12,
      fontWeight: '600',
    },

    aboutLink: {
      color: colors.text,
      fontSize: 12,
      fontWeight: '600',
    },

    // AboutPage Desktop
    aboutHeaderDesktop: {
      height: 64,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: colors.black900,
    },

    aboutHeaderTitleDesktop: {
      color: colors.text,
      fontSize: 14,
      fontWeight: '700',
      letterSpacing: 0.7,
      textTransform: 'uppercase',
    },

    aboutTitleDesktop: {
      color: colors.text,
      fontSize: 38,
      fontWeight: '800',
      letterSpacing: -0.8,
    },

    aboutSubtitleDesktop: {
      color: colors.textDark,
      fontSize: 14,
      marginTop: 7,
    },

    aboutSectionDesktop: {
      width: '50%',
      marginTop: 38,
      padding: 26,
      backgroundColor: colors.black400,
      borderRadius: 18,
      gap: 12,
      borderWidth: 1,
      borderColor: colors.border,
    },

    aboutSectionTitleDesktop: {
      color: colors.text,
      fontSize: 17,
      fontWeight: '800',
    },

    aboutTextDesktop: {
      color: colors.textDark,
      fontSize: 14,
      lineHeight: 22,
    },

    aboutInfoLabelDesktop: {
      color: colors.textDark,
      fontSize: 13,
    },

    aboutInfoValueDesktop: {
      color: colors.text,
      fontSize: 13,
      fontWeight: '600',
    },

    aboutLinkDesktop: {
      color: colors.primary,
      fontSize: 13,
      fontWeight: '600',
    },

    aboutVersionDesktop: {
      color: colors.textDark,
      fontSize: 12,
      marginTop: 32,
    },

    // MovieList & ArchivePage
    movieGrid: {
      justifyContent: 'space-between',
      marginBottom: 10,
      position: 'relative',
      zIndex: 1000,
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
      backgroundColor: colors.darkRed,
      padding: 2,
    },

    filmStrip: {
      flexDirection: 'column',
      alignItems: 'stretch',
      backgroundColor: colors.black400,
    },

    filmHolesCard: {
      flexDirection: 'row',

      justifyContent: 'space-around',
      alignItems: 'stretch',
      paddingVertical: 5,
      backgroundColor: colors.darkRed,
      gap: 8,
    },

    filmHoleCard: {
      width: 7,
      height: 10,
      backgroundColor: colors.textDark,
      borderRadius: 2,
    },

    moviePoster: {
      width: '100%',
      aspectRatio: 1,
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
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

    // ArchivePage
    movieStats: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 10,
    },

    deleteButton: {
      padding: 2,
    },

    // MovieList & ArchivePage Desktop
    movieListContentDesktop: {
      width: '100%',
      maxWidth: 1200,
      alignSelf: 'center',
      paddingHorizontal: 32,
      paddingBottom: 120,
    },

    movieGridDesktop: {
      justifyContent: 'space-between',
      marginBottom: 18,
      position: 'relative',
      zIndex: 1000,
    },

    movieCardDesktop: {
      width: '31.5%',
      backgroundColor: colors.black400,
      borderRadius: 14,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: colors.border,
    },

    movieCardPressedDesktop: {
      opacity: 0.75,
      transform: [{ scale: 0.985 }],
    },

    posterContentDesktop: {
      backgroundColor: colors.darkRed,
      padding: 3,
    },

    filmStripDesktop: {
      flexDirection: 'column',
      alignItems: 'stretch',
      backgroundColor: colors.black400,
    },

    filmHolesCardDesktop: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 7,
      backgroundColor: colors.darkRed,
      gap: 10,
    },

    filmHoleCardDesktop: {
      width: 10,
      height: 15,
      backgroundColor: colors.textDark,
      borderRadius: 2,
    },

    movieInfoDesktop: {
      padding: 15,
      gap: 10,
    },

    movieTitleDesktop: {
      flex: 1,
      fontSize: 17,
      fontWeight: '700',
      color: colors.text,
      lineHeight: 22,
      marginRight: 6,
    },

    searchMovieMetaDesktop: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 10,
      marginTop: 7,
    },

    movieStatTextDesktop: {
      fontSize: 13,
      color: colors.textDark,
      fontWeight: '500',
    },

    // ArchivePage Desktop
    watchedListContentDesktop: {
      width: '100%',
      maxWidth: 1200,
      alignSelf: 'center',
      paddingHorizontal: 32,
      paddingBottom: 120,
    },

    movieStatsDesktop: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12,
      marginTop: 4,
    },

    deleteButtonDesktop: {
      padding: 3,
    },

    // Search & ArchivePage
    errorText: {
      color: colors.text,
      fontSize: 18,
      textAlign: 'center',
    },

    // WatchedSummary
    summary: {
      padding: 20,
      marginVertical: 3,
      borderRadius: 17,
      backgroundColor: colors.black400,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.2,
      shadowRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      elevation: 8,
    },

    summaryTitle: {
      textTransform: 'uppercase',
      fontSize: 16,
      marginBottom: 7,
      color: colors.text,
    },

    summaryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 7,
    },

    summaryContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    summaryText: {
      fontSize: 14,
      color: colors.text,
    },

    // WatchedSummary Desktop
    summaryDesktop: {
      width: '100%',
      maxWidth: 1200,
      alignSelf: 'center',

      paddingHorizontal: 32,
      paddingVertical: 22,

      marginTop: 12,
      marginBottom: 18,

      borderRadius: 18,

      backgroundColor: colors.black400,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.2,
      shadowRadius: 16,

      borderWidth: 1,
      borderColor: colors.border,

      elevation: 8,
    },

    summaryTitleDesktop: {
      textTransform: 'uppercase',
      fontSize: 17,
      fontWeight: '700',
      letterSpacing: 0.4,
      marginBottom: 16,
      color: colors.text,
    },

    summaryContentDesktop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
    },

    summaryTextDesktop: {
      fontSize: 15,
      color: colors.text,
    },

    // SearchPage
    results: {
      color: colors.textDark,
      fontSize: 14,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginBottom: 20,
    },

    numResults: {
      color: colors.primaryDark,
      fontWeight: '900',
    },
    sheetHandle: {
      width: 40,
      height: 4,
      borderRadius: 2,
      backgroundColor: colors.textMuted,
      alignSelf: 'center',
      marginTop: 8,
      marginBottom: 4,
    },

    resultsTitle: {
      fontSize: 22,
      fontWeight: '800',
      color: colors.text,
    },
    searchHeader: {
      flexDirection: 'column',
      paddingTop: 16,
      paddingLeft: 16,
      gap: 10,
    },
    resultsTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBackButton: {
      width: 36,
      height: 36,
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.black900,
    },

    searchHeaderTitle: {
      color: colors.text,
      fontSize: 16,
      fontWeight: '800',
    },

    selectedMovieContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '22%',
      bottom: 0,

      backgroundColor: colors.black,

      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,

      borderTopWidth: 1,
      borderTopColor: colors.black900,

      overflow: 'hidden',
      zIndex: 100,
      elevation: 20,
    },

    //SelectMovie & SearchPage
    details: {
      flex: 1,
      paddingBottom: 20,
      backgroundColor: colors.black100,
      borderRadius: 17,
    },

    // SelectMovie
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
    detailsScrollContent: {
      paddingBottom: 40,
    },

    btnBack: {
      position: 'absolute',
      left: 16,
      width: 34,
      height: 34,
      borderRadius: 17,
      backgroundColor: colors.black900,
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
      backgroundColor: colors.black900,
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

    // SelectMovie & SearchPage Desktop
    detailsDesktop: {
      flex: 1,
      paddingBottom: 28,
      backgroundColor: colors.black100,
      borderRadius: 20,
    },

    // SelectMovie Desktop
    detailsTopBarDesktop: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      borderBottomWidth: 1,
      borderBottomColor: colors.black900,
    },

    detailsTopBarTitleDesktop: {
      color: colors.textDark,
      fontSize: 14,
      fontWeight: '700',
      letterSpacing: 0.6,
      textTransform: 'uppercase',
    },

    btnBackDesktop: {
      position: 'absolute',
      left: 24,
      width: 38,
      height: 38,
      borderRadius: 19,
      backgroundColor: colors.black900,
      alignItems: 'center',
      justifyContent: 'center',
    },

    detailsScrollContentDesktop: {
      width: '100%',
      maxWidth: 1050,
      alignSelf: 'center',
      paddingHorizontal: 36,
      paddingBottom: 55,
    },

    detailsMainDesktop: {
      flexDirection: 'row',
      gap: 28,
      paddingTop: 28,
    },

    detailsImageDesktop: {
      width: 180,
      aspectRatio: 2 / 3,
      borderRadius: 14,
      resizeMode: 'cover',
    },

    detailsOverviewDesktop: {
      flex: 1,
      justifyContent: 'center',
      gap: 13,
      maxWidth: 650,
    },

    detailsTitleDesktop: {
      color: colors.text,
      fontSize: 30,
      fontWeight: '800',
      lineHeight: 36,
    },

    detailsMetaDesktop: {
      color: colors.textDark,
      fontSize: 14,
      lineHeight: 21,
    },

    detailsInfoTextDesktop: {
      color: colors.text,
      fontSize: 14,
      fontWeight: '700',
    },

    detailsGenreDesktop: {
      color: colors.primaryDark,
      fontSize: 13,
      fontWeight: '700',
    },

    detailsContentDesktop: {
      marginTop: 28,
      padding: 24,
      backgroundColor: colors.black400,
      borderRadius: 18,
      gap: 16,
    },

    detailsSectionTitleDesktop: {
      color: colors.text,
      fontSize: 17,
      fontWeight: '800',
    },

    detailsTextDesktop: {
      color: colors.textDark,
      fontSize: 14,
      lineHeight: 22,
    },

    detailsCreditLabelDesktop: {
      color: colors.text,
      fontSize: 13,
      fontWeight: '800',
    },

    ratingDesktop: {
      marginTop: 18,
      padding: 22,
      backgroundColor: colors.black400,
      borderRadius: 18,
      gap: 16,
    },

    ratingTitleDesktop: {
      color: colors.text,
      fontSize: 16,
      fontWeight: '800',
    },

    ratingSubtitleDesktop: {
      color: colors.textDark,
      fontSize: 13,
      marginTop: 4,
    },

    btnAddDesktop: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      backgroundColor: colors.primary,
      paddingVertical: 11,
      paddingHorizontal: 20,
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

    btnAddTextDesktop: {
      color: colors.text,
      fontSize: 14,
      fontWeight: '700',
      letterSpacing: 0.2,
    },

    detailsStateDesktop: {
      flex: 1,
      minHeight: 420,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 40,
    },

    detailsStateIconDesktop: {
      width: 68,
      height: 68,
      borderRadius: 34,
      backgroundColor: colors.black900,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18,
    },

    detailsStateTitleDesktop: {
      color: colors.text,
      fontSize: 20,
      fontWeight: '800',
      marginBottom: 7,
    },

    detailsStateTextDesktop: {
      color: colors.textDark,
      fontSize: 14,
      textAlign: 'center',
      lineHeight: 21,
      maxWidth: 420,
    },

    detailsStateButtonDesktop: {
      marginTop: 20,
      paddingHorizontal: 20,
      paddingVertical: 11,
      borderRadius: 100,
      backgroundColor: colors.primary,
    },

    detailsStateButtonTextDesktop: {
      color: colors.text,
      fontSize: 14,
      fontWeight: '700',
    },
  })
}
