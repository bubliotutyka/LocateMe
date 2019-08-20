import {StyleSheet} from 'react-native';
import Color from '../../../../styles/color';

export default StyleSheet.create({
  container: {
      flex: 5,
      width: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },

  spaceTop: {
    flex: 1,
  },

  spaceBottom: {
    flex: 4,
  },

  textError: {
    color: Color.red,
  },
});