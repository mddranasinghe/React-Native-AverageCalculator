import { View, Text, TextInput, StyleSheet ,Button } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [mark1, setMark1] = useState('');
  const [mark2, setMark2] = useState('');
  const [mark3, setMark3] = useState('');
  const [average, setAverage] = useState(null);

  const handlePress = () => {
    const num1 = parseFloat(mark1);
    const num2 = parseFloat(mark2);
    const num3 = parseFloat(mark3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      setAverage("Please enter valid marks!");
      return;
    }

    const avg = ((num1 + num2 + num3) / 3).toFixed(2);
    setAverage(`Full Name: ${fname} ${lname}\nAverage Marks: ${avg}`);
  };
  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <Text style={styles.Caption}>Student Registration</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={fname}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            value={lname}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>
        <Text style={styles.Caption}>Enter Marks</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Subjct 1 Mark"
            value={mark1}
            onChangeText={setMark1}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Subjct 2 Mark"
            value={mark2}
            onChangeText={setMark2}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Subjct 3 Mark"
            value={mark3}
            onChangeText={setMark3}
          />
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={handlePress}
            title="REGISTER & CALCULATE AVERAGE"
          />
        </View>

        {average && (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>{average}</Text>
          </View>
        )}
      </View>

    </View>
  );}
export default App;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container: {
    width: '40%',
    borderStyle: 'solid',
    borderWidth: 10,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center', 
  },
  inputBox: {
    marginBottom: 15,
    width: '100%',
    alignItems: 'center', 
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  Caption: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer:
  {
  width:'90%'
  },
  resultBox: {
    marginTop: 30,
    padding: 20,
    borderWidth: 4,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#BFE6F2',
    width: '90%',
    alignItems: 'center',
   
  },
  resultText: {
    fontSize: 20,


  },
});
