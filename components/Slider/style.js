import {StyleSheet} from 'react-native';

// Import Local
import Color from '../../styles/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  slider: {
    height: '10%',
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    width: '15%',
    marginLeft: 10,
    fontSize: 14,
    color: Color.darkOrange,
  },
});

// Export
export default styles;