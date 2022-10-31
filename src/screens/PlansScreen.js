import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db from '../firebaseConfig';
import "./PlansScreen.css";
import { loadStripe } from '@stripe/stripe-js';

function PlansScreen() {

    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("products")
        .where('active','==', true)
        .get()
        .then((querySnapshot) => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })
            });
            setProducts(products);
        })
    }, []);

    const loadCheckout = async (priceId) => {
        const docRef = await db
        .collection('customers')
        .doc(user.uid)
        .collection("checkout_sessions")
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });
        
        docRef.onSnapshot(async (snap) => {
            const {error,  sessionId} = snap.data();
            if(error){
                console.log('An error ocurred: ', error.message);
            }

            if(sessionId){
                const stripe =  await loadStripe('pk_test_51LwDu7CQHMTRzObD9LvehgUDsK0xw5n8oh2mSEip9rw5ZCXlZ3yTPo39jpsR5yCISMOXZZD5B7P9rY6LOcDhZZUn00UIUEPa8w');
                stripe.redirectToCheckout({sessionId});
            }
            
        })
    };

  return (
    <div className="plansScreen">
        {Object.entries(products).map(([productId, productData]) => {
            return (
                <div className="plansScreen__plan" key={productId}>
                    <div className="plansScreen__info">
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <button onClick={() => {loadCheckout(productData.prices.priceId)}}>Subscribe</button>
                </div>
            )
        })}
    </div>
  )
}

export default PlansScreen