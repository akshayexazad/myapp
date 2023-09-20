
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import Model from "./Model";
import  { ErrorMessage, Field, Form, Formik } from 'formik'
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from 'yup'

const contactSchemaValidation = Yup.object().shape({
  name:Yup.string().required("Name is Required"),
  email:Yup.string().email("Invalid Email").required("Email is Required")
  
})




const AddUpdateAndDelete = ({isOpen,onclose,isUpdate,contact}) => {


  const addContact = async(contact)=>{
    try {
      const contactRef = collection(db,'contact');
      await addDoc(contactRef,contact)
      onclose();
      toast.success("Contact Added Successfully..");
    } catch (error) {
      console.log(error)
    }
  };


  const updateContact = async(contact,id)=>{
    try {
      const contactRef = doc(db,'contact',id);
      await updateDoc(contactRef,contact);
      onclose();
      toast.success("Contact Updated Successfully..")

    } catch (error) {
      console.log(error)
    }
  };






  return (
    <div className="flex "> 
    <Model isOpen = {isOpen} onclose = {onclose}>
      <Formik
      validationSchema={contactSchemaValidation}
      valida
      initialValues={isUpdate?
        {
          name:contact.name,
          email:contact.email,
        }:
        {
          name:'',
          email:'',
        }
      }
      onSubmit={(values)=>{
        console.log(values)
        isUpdate?
        updateContact(values,contact.id):
        addContact(values)
      }}
      
      >
        <Form className="flex flex-col">
        <div className="flex flex-col gap-1">
        <label htmlFor="name" className=" font-bold">Name</label>
        <Field  name="name" className="h-10 border border-black" />
        <div className=" text-red-600 text-xs">
            <ErrorMessage name="name"/>
        </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className=" font-bold">Email</label>
          <Field type="email" name="email" className="h-10 border border-black"/>
          <div className=" text-red-600 text-xs">
            <ErrorMessage name="email"/>
        </div>
        </div>
        <button className="border font-bold bg-orange-600 border-black px-3 py-1.5 mt-3 self-end"> {isUpdate?'Update':'Add'} Contact</button>
        
        </Form>
      </Formik>
    </Model>
    </div>
  )
}

export default AddUpdateAndDelete;