import {StyleSheet} from 'react-native';

// Import Local
import Color from '../../styles/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    height: 50,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: Color.grey,
  },
});

// Export
export default styles;