import React, { Component } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Container, HoverInfo, HoverStyle, Image, Info, ItemContainer, Name, NotInStock, NotInStockText, Price, ProductsContainer, Title, Wrapper } from './ProductListElements'
import PLPHover from '../../components/PLPHover/PLPHover';

//instance of component to enable using hocks.
const withHoc = Component => props => {
  const location = useLocation();
  const currency = useSelector(state =>state.currency)
  return <Component {...props} location={location}  currency={currency}/>;
};



 class ProductList extends Component {

    constructor(props){
        super(props)
        this.state = {
            loading:true,
            categories:[]
        }
    }

    componentDidMount(){
        const requestBody = {
            query:`
            {
                categories{
                  name
                  products{
                    id
                    name
                    brand
                    category
                    inStock
                    description
                    gallery
                    attributes{
                      id
                      name
                      items{
                        id
                        value
                        displayValue
                      }
                    }
                    prices{
                      amount
                      currency{
                        label
                        symbol
                      }
                    }
                  }
                }
              }
            `
        }

        fetch("http://localhost:4000/" , {
        method:"POST",
        headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify(requestBody),
        })
        .then(res => {
        return res.json();
        })
        .then(resData => {this.setState({categories:resData.data.categories,loading:false})
        })
        .catch(err => console.log(err));
        }


  render() {
    const cat = this.props.location.pathname.split("/")[2].toUpperCase();
    return (
      <Container>
        <Wrapper>
            <Title>{cat}</Title>
            <ProductsContainer>
              {
                this.state.loading
                ?<div>Loading...</div>
                :this.state.categories.find(category => 
                category.name === this.props.location.pathname.split("/")[2]).products.map(item => 
                  <ItemContainer key={item.id}>
                    <Image src={item.gallery[0]} alt='img'/>
                    <Info>
                      <Name>{item.name}</Name>
                        {
                          // eslint-disable-next-line
                          item.prices.map(priceItem => {
                            if(priceItem.currency.label === this.props.currency.label){
                              return(<Price key={priceItem.currency.label}>{priceItem.currency.symbol}{Math.floor(priceItem.amount)}</Price>)
                            }
                          })
                        }
                    </Info>
                    {item.inStock&&
                      <HoverInfo>
                        <PLPHover product={item}/>
                      </HoverInfo>                    
                    }

                    {item.inStock&&
                      <Link to={`/product/${item.id}`}>
                        <HoverStyle/>
                      </Link>                   
                    }

                    {!item.inStock&&
                      <NotInStock>
                        <NotInStockText>OUT OF STOCK</NotInStockText>
                      </NotInStock>
                    }
                  </ItemContainer>
                )
              }
            </ProductsContainer>
        </Wrapper>
      </Container>
    )
  }
}

export default withHoc(ProductList)
