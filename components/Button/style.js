import {StyleSheet} from 'react-native';

// Import Local
import Color from '../../styles/Color';

const padding = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
  },

  buttonContainer: {
    paddingTop: padding / 3,
    paddingBottom: padding / 3,
    paddingLeft: padding,
    paddingRight: padding,
    backgroundColor: Color.darkOrange,
    borderRadius: 100,
    ...Color.shadow,
  },

  text: {
    fontSize: 20,
    color: Color.white,
  },
});

// Export
export default styles;