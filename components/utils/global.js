
    import { AsyncStorage } from 'react-native';
    const value = AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        console.log(value);
        
      }
      module.exports = { value}

