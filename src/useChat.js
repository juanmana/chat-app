import  { useState, useEffect } from 'react';
import {db} from './Firebase'


export const useChat = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [messages, setMessages] = useState([])



    useEffect(
        ()=>{


const unSubscribe = db.collection('messages').onSnapshot(

    snapshot => {

setLoading(false)
setMessages(snapshot.docs.map(d=>({id: d.id, ...d.data()})))

    },

    err =>{
        setError(err)
    }
);

     return ()=>unSubscribe()

        },

         [setMessages]

    )


    return {error,loading,messages}


           

     
}
 
