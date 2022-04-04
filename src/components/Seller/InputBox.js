import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Font from '../../theme/Font';
import Colors from '../../theme/Colors';
import commonStyle from '../../theme/Style';

function InputBox({
  placeholder,
  value,
  handleChange,
  leftIcon,
  rightIcon,
  secureTextEntry = false,
}) {
  const leftWidth = leftIcon ? 10 : 0;
  const rightWidth = rightIcon ? 10 : 0;
  const centerWidth = 100 - leftWidth - rightWidth;

  const leftIconWidth = leftWidth ? `${leftWidth}%` : null;
  const rightIconWidth = rightWidth ? `${rightWidth}%` : null;
  const contentWidth = centerWidth ? `${centerWidth}%` : null;

  return (
    <>
      <View style={styles.inputContainerStyle}>
        {leftIconWidth && (
          <View style={styles.iconLeft(leftIconWidth)}>{leftIcon}</View>
        )}
        <View style={commonStyle.width(contentWidth)}>
          <TextInput
            secureTextEntry={secureTextEntry}
            placeholderTextColor={Colors.primary}
            value={value}
            placeholder={placeholder}
            onChangeText={text => handleChange(text)}
            style={styles.inputStyle}
          />
        </View>
        {rightIconWidth && (
          <View style={styles.iconRight(rightIconWidth)}>{rightIcon}</View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  iconLeft(width) {
    return {
      width: width,
      height: 50,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  iconRight(width) {
    return {
      width: width,
      height: 50,
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    };
  },
  inputStyle: {
    fontFamily: Font.PoppinsRegular,
    fontSize: 14,
    height: 50,
    color: Colors.primary,
  },
  inputContainerStyle: {
    ...commonStyle.rowFlexStart,
    height: 50,
    backgroundColor: '#dcd9d9',
    borderRadius: 8,
    borderColor: '#F5F5F5',
  },
});
export default InputBox;
