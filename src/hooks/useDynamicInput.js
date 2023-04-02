import { useState } from "react";

const useDynamicInput = () => {
  const [inputList, setInputList] = useState([]);

  const handleChange = (e, index) => {
    const inputData = [...inputList];
    inputData[index] = e;

    setInputList(inputData);
  };

  const addInput = () => {
    const addData = [...inputList, []];
    setInputList(addData);
  };

  const removeInputList = (i) => {
    const list = [...inputList];
    list.splice(i, 1);
    setInputList(list);
  };

  return [handleChange, addInput, removeInputList, inputList];
};

export default useDynamicInput;
