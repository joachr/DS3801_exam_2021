export default function CartiItem({ cartItmes, setState}){

    const [state, setState] = useState(() => [])

    const addItem = (title, image, ingredients, price) => {
        setState(prevState => {
            return [...prevState, {title: title, image: image, ingredients: ingredients, price: price}];
        })
    }

    return (
     cartItmes.map (item, index)
     );
    
    }