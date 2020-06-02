import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteIngredient } from '../redux/actions';

const List = (props) => {
  const ingredients = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();
  return (
    <View>
      {ingredients.map((el, i) => {
        return (
          <View style={styles.space} key={i}>
            <View style={styles.row}>
              <View style={styles.dot} />
              <Text>{el}</Text>
            </View>
            <Text
              onPress={() => {
                dispatch(deleteIngredient(i));
              }}>
              &#x1F5D1;
            </Text>
          </View>
        );
      })}
    </View>
  );
};
export default List;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: '#F88A25',
    marginTop: '10%',
    marginRight: '8%',
  },
  row: { flexDirection: 'row' },
  space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
