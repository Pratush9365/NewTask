import styles from './styles';
import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  addData,
  removedata,
  fetchdata,
  editData,
} from '../../redux/slice/crud/index';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../utils/screenNames';

const detailsScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.userdata);

  const [form, setForm] = useState({
    Name: '',
    Age: '',
    number: '',
    email: '',
    Salary: '',
  });

  const navigation = useNavigation();
  const [notvisible, setVisible] = useState(false);

  const [editingIndex, setEditingIndex] = useState(null);
  const [FetchData, SetFetchData] = useState(false);

  const handleEdit = index => {
    const item = index;
    setForm(item);
    setEditingIndex(index);
  };

  const handleSubmit = () => {
    if (!form.Name) return;

    if (editingIndex !== null) {
      dispatch(editData({index: editingIndex, updatedItem: form}));
      setEditingIndex(null);
    } else {
      dispatch(addData(form));
    }

    setForm({Name: '', Age: '', number: '', email: '', Salary: ''});
  };

  const handleDelete = index => {
    dispatch(removedata(index));
  };

  const handleFetch = () => {
    dispatch(fetchdata(data));
    setVisible(true);
  };
  const handleAPIScreen = () => {
    navigation.navigate(screenNames.DETAILS);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={form.Name}
          onChangeText={t => setForm(prev => ({...prev, Name: t}))}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          keyboardType="numeric"
          maxLength={3}
          value={form.Age}
          onChangeText={t => setForm(prev => ({...prev, Age: t}))}
        />
        <TextInput
          style={styles.input}
          placeholder="Number"
          keyboardType="numeric"
          maxLength={10}
          value={form.number}
          onChangeText={t => setForm(prev => ({...prev, number: t}))}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={form.email}
          onChangeText={t => setForm(prev => ({...prev, email: t}))}
        />
        <TextInput
          style={styles.input}
          placeholder="Salary"
          keyboardType="numeric"
          maxLength={9}
          value={form.Salary}
          onChangeText={t => setForm(prev => ({...prev, Salary: t}))}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonClear}
            onPress={() =>
              setForm({Name: '', Age: '', number: '', email: '', Salary: ''})
            }>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.fetchButton} onPress={handleFetch}>
          <Text style={styles.fetchButtonText}>Fetch Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fetchButton} onPress={handleAPIScreen}>
          <Text style={styles.fetchButtonText}>User Online Data</Text>
        </TouchableOpacity>
      </View>

      {notvisible && (
        <View style={{margin: 20}}>
          <FlatList
            contentContainerStyle={styles.list}
            data={data}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View style={styles.card}>
                <Text style={styles.cardText}>Name: {item.Name}</Text>
                <Text style={styles.cardText}>Age: {item.Age}</Text>
                <Text style={styles.cardText}>Number: {item.number}</Text>
                <Text style={styles.cardText}>Email: {item.email}</Text>
                <Text style={styles.cardText}>Salary: {item.Salary}</Text>
                <View style={styles.cardActions}>
                  <TouchableOpacity
                    style={[styles.smallButton, {backgroundColor: '#16A34A'}]}
                    onPress={() => handleEdit(index)}>
                    <Text style={styles.smallButtonText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.smallButton, {backgroundColor: '#DC2626'}]}
                    onPress={() => handleDelete(index)}>
                    <Text style={styles.smallButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default detailsScreen;
