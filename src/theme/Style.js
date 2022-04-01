import {StyleSheet} from 'react-native';
import Colors from './Colors';
const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  flex(flex) {
    return {
      flex,
    };
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowSpaceEven: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  color(color) {
    return {
      color,
    };
  },
  marginVertical(value) {
    return {
      marginVertical: value,
    };
  },
  marginHorizontal(value) {
    return {
      marginHorizontal: value,
    };
  },
  margin(margin) {
    return {
      margin: margin,
    };
  },
  marginTop(margin) {
    return {
      marginTop: margin,
    };
  },
  marginBottom(margin) {
    return {
      marginBottom: margin,
    };
  },
  paddingVertical(value) {
    return {
      paddingVertical: value,
    };
  },
  paddingHorizontal(value) {
    return {
      paddingHorizontal: value,
    };
  },
  padding(padding) {
    return {
      padding: padding,
    };
  },
  justifyContent(type) {
    return {
      justifyContent: `${type}`,
    };
  },
  backgroundColor(bgColor) {
    return {
      backgroundColor: `${bgColor}`,
    };
  },
  width(width) {
    return {
      width,
    };
  },
  height(height) {
    return {
      height,
    };
  },
  outlineCircle(dimension, borderWidth, borderColor) {
    const dim = Number(dimension);
    const bColor = String(borderColor?.toLowerCase());
    const bWidth = Number(borderWidth);
    return {
      width: dim,
      height: dim,
      borderRadius: dim / 2,
      borderColor: bColor,
      borderWidth: bWidth,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  circle(dimension, bgColor) {
    const dim = Number(dimension);
    const bColor = String(bgColor?.toLowerCase());
    return {
      width: dim,
      height: dim,
      borderRadius: dim / 2,
      backgroundColor: bColor,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
});
export default commonStyle;
