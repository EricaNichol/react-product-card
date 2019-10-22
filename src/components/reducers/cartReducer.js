import Item1 from '../../images/pizza-side.png';
import Item2 from '../../images/pizza-side2.png';

// InstaImagee
import insta1 from '../../images/pizzacat-ig01.jpeg';
import insta2 from '../../images/pizzacat-ig02.jpg';
import insta3 from '../../images/pizzacat-ig03.jpg';
import insta4 from '../../images/pizzacat-ig04.jpg';
import insta5 from '../../images/pizzacat-ig05.jpg';



const initState = {
    items: [
        {
          id:1,
          title: "Brooklyn Classic",
          desc: "Because you deserve the most sizzling classic of them all. Nothin' mo' nothing' less.",
          price: 99,
          img: [Item1, Item2]
        }
    ],
    addedItems: 0,
    instaImage: [insta1, insta2, insta3, insta4, insta5]
  };

const cartReducer= (state = initState, action)=>{
  if(action.type === "ADD_TO_CART"){
      return{
        ...state,
        addedItems: state.addedItems +  action.payLoad
      }
  } else {
    return state
  }
}

export default cartReducer
