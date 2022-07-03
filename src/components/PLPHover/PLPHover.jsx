import React, { Component } from 'react'
import{ useDispatch , useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import Add from '../../icons/Add-Remove/Add';
import Remove from '../../icons/Add-Remove/Remove';
import { addProduct } from '../../Redux/cartRedux';
import 
{ 
    AddtoCart,
    AmountContainer,
    AmountText,
    Attribute, AttributeElement, AttributeTitle, AttributeWrapper, BuyContainer, ColorElement, Container, IconContaner, Quantity,
} from './PLPHoverElements';

//instance of component to enable using hocks.
const withHoc = Component => props => {
    const location = useLocation();
    const dispatch = useDispatch()
    const currency = useSelector(state => state.currency);
    return <Component {...props} location={location} dispatch = {dispatch} currency={currency}/>;
  };

class PLPHover extends Component {
    constructor(props){
        super(props)
        this.state = {
          quantity:1,
        }
        this.handleAttribute = this.handleAttribute.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
    }

    componentDidMount(){
      // eslint-disable-next-line
        this.props.product.attributes.map(attribute => {
          this.setState({[attribute.name]: attribute.items[0].value})
      })
    }

    // select attributes.
    handleAttribute = (e)=> {
      const name = e.currentTarget.parentNode.getAttribute("data-parent");
      const value = e.currentTarget.getAttribute("data-value");
      this.setState({[name]:value})
    }

    //set quantity
    handleQuantity(type){
      if(type === "dec" && this.state.quantity > 1){
        this.setState({quantity:this.state.quantity -1})
      }else if(type === "inc"){
        this.setState({quantity:this.state.quantity + 1})
      }
    }

    //add to cart.
    handleClick = () => {
      const idCart = Date.now();
      const quantity = this.state.quantity
      const priceElement = this.props.product.prices.find(item => item.currency.label === this.props.currency.label);
      const price = priceElement.amount;
      const totalPrice = price * quantity;
      let atts = [];
      for (const [key, value] of Object.entries(this.state)) {  
        // eslint-disable-next-line
        this.props.product.attributes.map((item)=>{
        if (key === Object.values(item)[1]){
          atts.push({[key]:value})
          }
        })
      }
      let attrubutes = atts.reduce((prev, current) => ({
        ...prev,
        ...current
      }));
      this.props.dispatch(
        addProduct({...this.props.product,idCart,price,quantity,totalPrice,...attrubutes})
      );
    }

  render() {
    return (
      <Container>
        {
          this.props.product.attributes.map(attribute => {
            return (
              <Attribute key={attribute.id}>
                <AttributeTitle>{attribute.name}</AttributeTitle>
                <AttributeWrapper data-parent= {attribute.name}>
                  {
                    attribute.items.map(item => {
                      if(attribute.name === "Color"){
                        return(
                          <ColorElement
                            key={item.id}
                            data-value={item.value}
                            value={item.value} 
                            selectedAttribute={this.state[attribute.name]}
                            onClick={this.handleAttribute}
                            >
                          </ColorElement>
                        )
                      }else{
                        return(
                          <AttributeElement
                            key={item.id}
                            data-value={item.value}
                            value={item.value} 
                            selectedAttribute={this.state[attribute.name]}
                            onClick={this.handleAttribute}
                            >
                              {item.value}
                          </AttributeElement>
                        )
                      }
                    })
                  }
                </AttributeWrapper>
              </Attribute>              
            )
          })}
          <BuyContainer>
            <Quantity>
              <IconContaner onClick={()=> this.handleQuantity("inc")} >
                  <Add/>
              </IconContaner>
              <AmountContainer>
                  <AmountText>{this.state.quantity}</AmountText>
              </AmountContainer>
              <IconContaner onClick={()=> this.handleQuantity("dec")}>
                  <Remove/>
              </IconContaner>                   
              </Quantity>
            <AddtoCart onClick={this.handleClick}>BUY</AddtoCart>
            </BuyContainer>
      </Container>
    )
  }
}
export default withHoc(PLPHover);
