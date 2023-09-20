import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai"

const Model = ({onclose,isOpen,children}) => {
  return createPortal(
    <>
    {isOpen && (
     <>
    <div className=" relative z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-4">
        <div className="flex justify-end ">
            <AiOutlineClose onClick={onclose} className=" text-3xl"/>
        </div>
        {children}
    </div>

    <div onClick={onclose} className=" absolute backdrop-blur h-screen w-screen top-0 z-40 "/>

    </>
    )}
    </>
 ,document.getElementById('modal-root') 
 );
}

export default Model