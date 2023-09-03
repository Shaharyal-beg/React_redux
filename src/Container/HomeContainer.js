import {connect} from 'react-redux'
import Home from '../Components/Home'
import {addToCart} from '../Services/Actions/action'
 
const mapStateToProps = state => ({
    cardData:state.cartItems.cardData

})


const mapDispatchToProps=(dispatch)=>({
    addToCartHandler:(data)=>dispatch(addToCart(data))
})



export default connect(mapStateToProps, mapDispatchToProps)(Home) 