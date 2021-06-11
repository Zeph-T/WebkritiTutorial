import {Dimensions} from 'react-native';
import {widthPercentageToDP} from './PercentageToDPConverter';
const {width,height} = Dimensions.get('window');

const metrics = {
    screenWidth : width < height ? width : height,
    screenHeight : width < height ? height : width,
    h1: widthPercentageToDP('10%'),
    h2: widthPercentageToDP('7%'),
    h3: widthPercentageToDP('4%'),
    paddingLarge: widthPercentageToDP('13%'),
    paddingMedium: widthPercentageToDP('8%'),
    paddingSmall: widthPercentageToDP('6%'),
    paddingExtraSmall: widthPercentageToDP('3%'),
    marginLarge: widthPercentageToDP('10%'),
    marginMedium: widthPercentageToDP('7%'),
    marginSmall: widthPercentageToDP('3%'),
}

export default metrics;