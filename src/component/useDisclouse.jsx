import { useState } from "react";


const useDisclouse = () => {
  const [isOpen,setOpen]=useState(false);

  const onOpen = ()=>{
         setOpen(true)
    };

const onclose = ()=>{
         setOpen(false)
     };

    return {isOpen,onclose,onOpen}
}

export default useDisclouse