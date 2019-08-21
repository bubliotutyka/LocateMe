import {StyleSheet} from 'react-native';

// Local Import
import Color from '../../../styles/Color';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: "100%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Color.lightGrey,
  },

  logoutBtn: {
    paddingTop: 50,
    width: '100%',
    flex: 1,
  },
});

// Export
export default styles;