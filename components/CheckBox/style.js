import {StyleSheet} from 'react-native';

// Import Local
import Color from '../../styles/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    marginLeft: 10,
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: Color.darkGrey,
  },

  text: {
    fontSize: 20,
  },
});

// Export
export default styles;