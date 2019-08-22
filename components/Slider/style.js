import {StyleSheet} from 'react-native';

// Import Local
import Color from '../../styles/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  slider: {
    height: '10%',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.lightGrey,
  },

  text: {
    marginLeft: 10,
    fontSize: 14,
    color: Color.darkGrey,
  },
});

// Export
export default styles;