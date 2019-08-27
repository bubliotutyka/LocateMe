import {StyleSheet} from 'react-native';

// Local Import
import Color from '../../../styles/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectAll: {
    width: '100%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: Color.darkOrange,
    ...Color.shadow,
  },

  userContainer: {
    width: '100%',
    height: '84%',
  },

  send: {
    width: '100%',
    height: '8%',
  },
});

// Export
export default styles;