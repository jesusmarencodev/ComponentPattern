import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/ProductInterfaces";


interface useProductArgs {
    product: Product;
    onChange?:(args:onChangeArgs) => void ;
    value?:number;
}


export const useProduct = ({product, onChange, value=0}:useProductArgs) => {
    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value:number)=>{
        
        if(isControlled.current){
          //este signo ! implementado de esta manera se pone
          //cuando le decimos a typescript hey siempre va a venir el valor
          //de en este caso el onChange
          return onChange!({ count: value, product });
        }

        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);

        onChange && onChange({count:newValue, product});
    }

    useEffect(() => {
      setCounter(value);
        
    }, [value])
    


    return {
        counter,
        increaseBy,
    }
}


