import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes } from '../redux/pasteSlice';
import { updateToPastes} from '../redux/pasteSlice';
const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams(); // No arguments needed
const dispatch = useDispatch()
  const pasteId = searchParams.get('pasteId'); // Retrieves the 'pasteid' query parameter

  const createPaste =  () => {
const paste={
    title:title,
    content:value,
    _id:pasteId || Date.now().toString(36),
    createAt: new Date().toISOString()
}

if(pasteId){
    //update
    dispatch(updateToPastes(paste))
  }else{
    //create
dispatch(addToPastes(paste))
  }
// after creation and updation 
setTitle("");
    setValue("")

setSearchParams({})

  }

  

  return (

    <div>

   
    <div className="flex  ">
    
      <input
        className="text-black p-2 rounded-2xl mt-2"
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <button className='p-2 border-2 rounded ml-4' onClick={createPaste} >{pasteId ? 'Update Paste' : 'Create My Paste'}</button>
    </div>

<textarea
className="text-black p-2 rounded-2xl mt-2   "
placeholder="Enter your paste here"
value={value}
onChange={(e) => setValue(e.target.value)}
rows={10}
cols={60}
></textarea>

</div>
  );
};

export default Home;
