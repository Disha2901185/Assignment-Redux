import { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [count,setCount]=useState(0)

  const addCount=()=>{
    setCount(count+1)
  }
  const removeCount=()=>{
    setCount(count-1)
  }


  return (
    <MyContext.Provider value={{ data, setData,count,addCount,removeCount }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContextProvider, MyContext };
