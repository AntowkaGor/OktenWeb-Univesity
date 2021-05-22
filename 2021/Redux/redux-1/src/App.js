import logo from './logo.svg';
import React, {useEffect, useMemo} from 'react'
import './App.css';
import  {useSelector,useDispatch} from "react-redux";
import {
  inCustomAction,
  incAction,
  decAction,
  resetAction,
    inCustomAction2,
    incAction2,
    decAction2,
    resetAction2,
    onUsersLoaded,
    onAddtoDelate,
    onRemoveFromDelate,

    startProductsLoading,
    endProductsLoading,
    setProducts,
    loadProducts,
    toggleItemInCart,
    toggleItemInWishlist,
} from './redux/action-creators';


const Header =() => {
    const { products } = useSelector(store => store.products);
    const { productsInCart } = useSelector(store => store.cart);
    const { productsInWishlist } = useSelector(store => store.wishlist);

    const calculatedCartSum = useMemo(() => {
        return products
            .filter (el => productsInCart.includes(el.id))
            .reduce((acc, el) => acc +=el.price, 0)
    }, [products,productsInCart])
    const calculatedWishSum = useMemo(() => {
        return products
            .filter (el => productsInWishlist.includes(el.id))
            .reduce((acc, el) => acc +=el.price, 0)
    }, [products,productsInWishlist])

    return(
        <header>
            <h2 >HEADER</h2>
            <div className="counters">
                <span>
                    wishlist: {productsInWishlist.length} (${calculatedWishSum})
                </span>
                <span>
                    cart: {productsInCart.length} (${calculatedCartSum})
                </span>
            </div>
        </header>
    )
}

const PhotosList = () =>{
    const dispatch = useDispatch();
    const users = useSelector(({userReducer:{users}}) => users);
    const badEmployees = useSelector(({userReducer:{badEmployees}}) => badEmployees);
    const fetchPhotos = async () =>{
        const resp= await fetch('https://dummyapi.io/data/api/user?limit=10',{
            headers: {
                'app-id': 'lTE5abbDxdjGplutvTuc'
            }
        });
        const json = await resp.json()
        console.log(json);

        dispatch(onUsersLoaded(json.data));
    }

    React.useEffect(()=>{
        if(!users.length){
            fetchPhotos()
        }
    },[])

    return <div>
        {users.map(el => (
            <img
                style={
                    {filter:badEmployees.includes(el.id) ? 'blur(4px)' : ''}
                }
                onClick={()=>{
                    const alreadyList = badEmployees.includes(el.id)
                        dispatch(alreadyList ? onRemoveFromDelate(el.id) : onAddtoDelate(el.id))
                }}
                key={el.id}
                src={el.picture}
                alt={el.firstName}
            />
        ))}
    </div>
}

const Products = () => {
    const { products, isLoading } = useSelector(store => store.products);
    const { productsInCart } = useSelector(store => store.cart);
    const { productsInWishlist } = useSelector(store => store.wishlist);
    const dispatch = useDispatch();

    useEffect (()=>{
        dispatch(loadProducts());
    },[])

    return(
        <div className="product-wrapper">
            {isLoading && (
                <h1 style ={{ color: 'red'}}> LOADING </h1>
            )}

            {!isLoading && !!products.length && products.map(el => (
                <div key={el.id} className="product-item" >
                    <h3>{el.title}</h3>
                    <h4>{el.price}</h4>
                    <h4>{el.description}</h4>
                    <button
                        style={{
                            backgroundColor: productsInWishlist.includes(el.id) ? 'red' : ''
                        }}
                        onClick={() => dispatch(toggleItemInWishlist(el.id))}
                    >
                        {productsInWishlist.includes(el.id) ? 'remove from wishlist' : 'add to wishlist'}
                    </button>
                    <button
                        style={{
                             backgroundColor: productsInCart.includes(el.id) ? 'red' : ''
                        }}
                        onClick={ () => dispatch(toggleItemInCart(el.id))}
                    >
                        {productsInCart.includes(el.id) ? 'remove from cart' : 'add to cart'}
                    </button>
                    <img style={{width: '100%'}}
                        src={el.image} alt=""
                    />
                    <hr/>
                </div>
            ))}
        </div>
    )
}

function App() {
  const {counter1,counter2} = useSelector(({counter1,counter2})=> ({
      counter1: counter1.counter,
      counter2: counter2.counter,
  }));

  const dispatch = useDispatch();

  return (
    <div className="App">
        <Header/>
        {/*{!(counter1 % 2) && <PhotosList/>}*/}
        <Products/>
      {/*<h1>{counter1}-1</h1>*/}
      {/*<h1>{counter2}-2</h1>*/}
      {/*<button onClick={() => dispatch(inCustomAction(102))}>inc custom</button>*/}
      {/*<button onClick={() => dispatch(incAction())}>inc</button>*/}
      {/*<button onClick={() => dispatch(decAction())}>dec</button>*/}
      {/*<button onClick={() => dispatch(resetAction())}>reset</button><br/>*/}
      {/*  <button onClick={() => dispatch(inCustomAction2(100))}>inc custom2</button>*/}
      {/*  <button onClick={() => dispatch(incAction2())}>inc2</button>*/}
      {/*  <button onClick={() => dispatch(decAction2())}>dec2</button>*/}
      {/*  <button onClick={() => dispatch(resetAction2())}>reset2</button>*/}
    </div>
  );
}

export default App;
