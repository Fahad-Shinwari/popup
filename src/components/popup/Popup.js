import React,{useEffect,useState} from 'react'
import './popup.css'
import firebase from '../../firebase';
import GetData from './GetData';
import ModalPopup from './ModalPopup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroImage from '../HeroImage';


function Popup() {
    const [openModal, setopenModal] = useState(false)
    const [userData, setuserData] = useState([]);
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const db = firebase.firestore();

    // Get Data from the firebase database and store it inside userData Array
    useEffect(() => {    
     db.collection("userinfo")
        .get()
        .then((querySnapshot) => {
            let arr = [];
            querySnapshot.docs.map((doc) =>
            arr.push({ id: doc.id, name: doc.data().name,email:doc.data().email })

            );
            setuserData(arr)
        })
     .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    }, [])

    // Submit name and email to firebase database
    const handleSubmit = e =>{
        e.preventDefault()
        db.collection("userinfo")
        .doc()
        .set({
          name: name,
          email:email
        })
        .then(function () {
            toast.success("New User Added");
        })
        .catch(function (error) {
          console.error("Error writing Value: ", error);
        });

        setname("")
        setemail("")
        setopenModal(false)
    }

    // Show Popup
    const handleOpenModal = () =>{
        setopenModal(!openModal)
    }

    // Close Popup
    const handleCloseModal = () =>{        
        setopenModal(!openModal)
    }

    return (
      <>      
        <ToastContainer />
        <HeroImage handleOpenModal={handleOpenModal} />
        <ModalPopup handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} openModal={openModal} name={name} setname={setname} email={email} handleSubmit={handleSubmit} setemail= {setemail}  />
        <GetData userData={userData} />
      </>  
    )
}

export default Popup
