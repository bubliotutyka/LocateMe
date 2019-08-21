import {StyleSheet} from 'react-native';

// Import Local
import Color from '../../../styles/Color';

const styles = StyleSheet.create({
  container: {
      flex: 4,
      width: "100%",
      alignItems: 'center',
      marginTop: 50,
  },

  spaceTop: {
    flex: 1,
  },

  spaceBottom: {
    flex: 1,
  },

  textError: {
    color: Color.red,
  },

  image: {
    flex: 3,
    width: 120,
    height: 185,
  },
});

// Export
export default styles;