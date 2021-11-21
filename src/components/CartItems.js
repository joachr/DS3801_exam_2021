
export default function CartiItem({ cartItmes, setState}){

    const [state, setState] = useState(() => [])

    const cartItmes = [];

    let counter = 0;

    const addItem = (title, image, ingredients, price) => {
        setState(prevState => {
            return [...prevState, {title: title, image: image, ingredients: ingredients, price: price}];
        })
    }

    for (let index = 0; index < cartItmes.length; index++) {
            counter = cartItmes.length; 
            const element = cartItmes[index];
            
        }

    return (
        counter
    );

    
    
    }