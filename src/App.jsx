import Navbar from "./component/Navbar";
import { FiSearch } from 'react-icons/fi';
import { AiFillPlusCircle } from 'react-icons/ai';
import {collection,getDocs, onSnapshot} from 'firebase/firestore'
import { useEffect, useState } from "react";
import {db} from './config/firebase';
import Model from "./component/Model";
import AddUpdateAndDelete from "./component/AddUpdateAndDelete";
import useDisclouse from "./component/useDisclouse";
import ContactCard from "./component/ContactCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

   const [contacts,setContacts] = useState([]);
   const {isOpen,onclose,onOpen} = useDisclouse();

   
  
  //  console.log(contacts)

   useEffect(()=>{
    const getContacts = async ()=>{
        try {
          const contactRef= collection(db,'contact');
          const contactSnapShot = await getDocs(contactRef);
          onSnapshot (contactRef,(snapShot)=>{
            const contactList = snapShot.docs.map((doc)=>{
              return{
                id:doc.id,
  
                ...doc.data()
              };
            });
            setContacts(contactList);
            return contactList;
          });
          
        } catch (error) {
          console.log(error)
        }

    }
    getContacts()
  },[]);


  const filterContacts = (e)=>{
    let value = e.target.value;
    const contactRef= collection(db,'contact');
    onSnapshot (contactRef,(snapShot)=>{
      const contactList = snapShot.docs.map((doc)=>{
        return{
          id:doc.id,

          ...doc.data()
        };
      });

      const filteredContact = contactList.filter(contact=>contact.name.toLowerCase().includes(value.toLowerCase()))


      setContacts(filteredContact);
      return filteredContact;

  });
};


  return (

    <>
  <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex relative items-center flex-grow">
          <FiSearch className=" absolute ml-1 text-white text-3xl" />
          <input
          onChange={filterContacts}
           type="text" className="h-10 text-white flex-grow bg-transparent border pl-10 border-white rounded-md" />
        </div>     
         <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer"/>
      </div>

      <div className=" mt-4 flex flex-col gap-2">
     {  contacts.map((contact)=>(
            <ContactCard key={contact.id} contact ={contact}/>))}

     </div>
  </div>

  <AddUpdateAndDelete onclose={onclose} isOpen={isOpen}/>
  <ToastContainer/>

  </>

  );
}

export default App;