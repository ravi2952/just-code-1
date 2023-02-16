import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  const [result, setResult] = useState(' ');

  const calculate = (title) => {
    if (title == 'C') {
      setResult(' ')
    } else if (title == 'DL') {
      setResult(result.substring(0, result.length - 1))
    } else if (title == '=') {
      setResult(eval(result));
    } else {
      setResult(result + title);
    }
  }

  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        height: 70,
        width: 70,
        backgroundColor: getColor(color.dark1, color.light1),
        borderRadius: 10,
        padding: 15,
        elevation: 2,
        margin: 8
      }}
    >
      <Text style={{
        fontSize: 20,
        color: "black",
        textAlignVertical: 'center',
        textAlign: 'center',
        color: getBtnColor(type)
      }}
      >{title}</Text>
    </TouchableOpacity>
  )

  const getBtnColor = (type) => {
    if (type == 'top') {
      return '#11d6d3'
    } else if (type == 'right') {
      return '#eb1745'
    } else {
      getColor(color.dark, color.light)
    }
  }

  const color = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#fff',
    light1: '#F1F1F1',
    light2: '#F7F7F7'
  }
  const getColor = (dark, light) => darkTheme ? dark : light;


  return (
    <View style={{
      height: '100%',
      width: '100%',
      paddingVertical: 30,
      backgroundColor: getColor(color.dark, color.light)
    }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        style={{ marginRight: 300 }}
      />
      <Text
        style={{
          width: '100%',
          fontSize: 40,
          color: getColor(color.light1, color.dark1),
          textAlign: 'right',
          marginTop: 70
        }}>{result}</Text>
      <View
        style={{
          padding: 5,
          flexDirection: "row",
          flexWrap: "wrap",
          width: '100%',
          height: 100,
          justifyContent: 'center',
          borderTopLeftRadius: 20,
          borderTopLeftRadius: 20,
          marginTop: 100
        }}>
        <Btn title="C" type="top" />
        <Btn title="%" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="right" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="-" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="+" type="right" />
        <Btn title="00" type="number" />
        <Btn title="." type="number" />
        <Btn title="0" type="number" />
        <Btn title="=" type="right" />
      </View>
    </View>
  );
}

