import { StyleSheet } from 'react-native'

export const colors = {
  primary: '#6741d9',
  primaryLight: '#7950f2',
  text: '#dee2e6',
  textDark: '#adb5bd',
  background100: '#343a40',
  background500: '#2b3035',
  background900: '#212529',
  red: '#fa5252',
  redDark: '#e03131',
}

export const styles = StyleSheet.create({
  navBar: {
    height: 72,
    backgroundColor: colors.primary,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  logoIcon: {
    fontSize: 32,
  },

  logoTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },

  search: {
    paddingVertical: 11,
    paddingHorizontal: 16,
    fontSize: 18,
    borderRadius: 7,
    width: 320,
    color: colors.text,
    backgroundColor: colors.primaryLight,
  },

  searchPlaceholder: {
    color: colors.textDark,
  },

  numResults: {
    fontSize: 18,
    color: colors.text,
    margin: 7,
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
    width: '80%',
    backgroundColor: colors.background500,
    borderRadius: 9,
    overflow: 'hidden',
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.background100,
  },

  listImage: {
    width: 50,
    height: 70,
    resizeMode: 'cover',
  },

  listContent: {
    flex: 1,
    gap: 8,
  },

  listTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },

  listText: {
    fontSize: 14,
    color: colors.textDark,
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

    backgroundColor: colors.red,
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

    borderRadius: 9,
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
    borderRadius: 100,

    padding: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },

  btnAddText: {
    color: colors.text,
    fontSize: 14,
    fontWeight: 'bold',
  },

  errorText: {
    color: colors.text,
    fontSize: 18,
    textAlign: 'center',
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
  footer: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16 },
  footerText: { fontSize: 14, color: '#adb5bd' },
})
