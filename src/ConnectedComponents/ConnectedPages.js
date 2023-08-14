import Page from "../Components/Page";
import {connect} from "react-redux"
import {addToCart} from "../Service/action/action.js"


const mapStateToProps=(state)=>({
    
})
const mapDispatchToProps=(dispatch)=>({
addToCartHandler:data=>dispatch(addToCart(data))
})


export default connect (mapStateToProps,mapDispatchToProps)(Page);