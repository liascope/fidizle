import { StyleSheet } from 'react-native'

export const colors = {
  // Brand
  primary: '#E50914',
  primaryLight: '#FF1A25',
  primaryDark: '#B20710',

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
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },

  navBarContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
    color: colors.primaryLight,
  },

  search: {
    flex: 1,
    maxWidth: 420,
    marginHorizontal: 16,

    height: 42,
    paddingHorizontal: 14,

    backgroundColor: colors.background500,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,

    color: colors.text,
    fontSize: 16,
  },
  searchPlaceholder: {
    color: colors.textDark,
  },

  results: {
    color: colors.textDark,
    fontSize: 14,
  },

  numResults: {
    color: colors.text,
    fontWeight: '700',
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

  listImage: {
    width: 70,
    height: 70,
    borderRadius: 3,
    resizeMode: 'cover',
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

  movieContent: {
    flex: 1,
    gap: 10,
  },

  movieTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '600',
  },

  movieStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  movieStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  movieStatText: {
    color: colors.text,
    fontSize: 14,
  },

  btnDeletePressed: {
    opacity: 0.6,
  },

  btnAdd: {
    backgroundColor: colors.primary,
    paddingVertical: 11,
    paddingHorizontal: 18,
    borderRadius: 8,
  },

  btnAddText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
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
})
