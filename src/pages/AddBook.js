import React,{useEffect} from "react";
import Header from "../Companents/Header";
import AddBookForm from "../Companents/AddBookForm";
const AddBook=(props)=>{
    useEffect(()=>{
        document.title="Kitaplık-kitap Ekle";
    },[])
    return(
        <div>
            <Header/>
            <AddBookForm/>
           
        </div>
    )
}
export default AddBook;