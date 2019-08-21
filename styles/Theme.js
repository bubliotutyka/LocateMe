// Import Local
import Color from './Color';

const lightTheme = {
    active: Color.darkOrange,
    inactive: Color.grey,
    backgroundColor: Color.white,
    borderColor: Color.lightGrey,
    shadowColor: Color.grey,
}

const darkTheme = {

}

// Export
export default (theme) => {
    if (theme === 'dark') {
        return darkTheme;
    }
    else if (theme === 'light') {
        return lightTheme;
    }
}