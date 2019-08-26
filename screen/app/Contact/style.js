import {StyleSheet} from 'react-native';

// Local Import
import Color from '../../../styles/Color';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: Color.lightGrey,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  mapContainer: {
    width: '100%',
    height: '90%',
    ...Color.shadow,
  },

  slider: {
    width: '100%',
    height: '10%',
    backgroundColor: Color.darkGrey,
  },
});

// Export
export default styles;