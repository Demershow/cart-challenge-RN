import { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, } from 'react-native'
import { CartContext } from '../../Contexts/CartContext'
import CardItem from '../../Components/CardItem'

export default function Cart(){
  const { cart, addItemCart, removeItemCart } = useContext(CartContext);

  return(
    <View style={stlyes.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        ListEmptyComponent={ () => <Text>Nenhum item no carrinho...</Text>}
        renderItem={ ({ item }) => (
          <CardItem
            data={item}
            addAmount={ () => addItemCart(item) }
            removeAmount={ () => removeItemCart(item) }
          />
        )}
      />
    </View>
  )
}

const stlyes = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FAFAFA',
    paddingStart: 14, 
    paddingEnd: 14,
    paddingTop: 14,
  }
})