import { Text, SafeAreaView, StyleSheet, View, TextInput, Button, Image, ScrollView } from 'react-native';

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Cadastre-se</Text>
        <Image style={styles.logo} source={require('/assets/snack-icon.png')} />
        <View style={styles.input_area}>
          <Text style={styles.label}>Nome completo</Text>
          <TextInput style={styles.input}
            placeholder="Nome completo"/>
        </View>
        <View style={styles.input_area}>
          <Text style={styles.label}>Data de nascimento</Text>
          <TextInput style={styles.input}
            placeholder="Data de nascimento"/>
        </View>
        <View style={styles.input_area}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input}
            placeholder="Email"/>
        </View>
        <View style={styles.input_area}>
          <Text style={styles.label}>Altura</Text>
          <TextInput style={styles.input}
            placeholder="Altura"/>
        </View>
        <View style={styles.input_area}>
          <Text style={styles.label}>Peso</Text>
          <TextInput style={styles.input}
            placeholder="Peso"/>
        </View>
        <view style={styles.input_area}>
          <Button title="Cadatrar"/>
        </view>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input_area: { margin: 12 },
  label: {
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  scrollView: {
    marginHorizontal: 20
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center"
  }
});
