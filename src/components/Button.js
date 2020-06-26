import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = (props) => {
  const { text, bgcolor, color, onPress } = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgcolor,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        width: 200,
        marginTop: 20,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: color,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
