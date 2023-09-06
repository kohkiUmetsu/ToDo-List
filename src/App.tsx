import './App.css'
import Header from './components/Header'
import InputItem from './components/InputItem'
import { ItemListState, ItemInterface } from './state/ItemListState'
import { useRecoilState } from "recoil";
import { useState } from "react"

function App() {

  const [itemList, setItemList] = useRecoilState<ItemInterface[]>(ItemListState)
  const [inputValue, setInputValue] = useState<string>("")
  const [count, setCount] = useState<number>(1)
  const [itemChecked, setItemChecked] = useState<boolean>(false)

  const handleToggleCheck = (id: number) => {
    setItemList((PrevItemList) => {
      return PrevItemList.map((prevItem) => {
        if (prevItem.id === id ) {
          const UpdatedItem = {...prevItem, check: !prevItem.check}
          return UpdatedItem
        }
        return prevItem
      })
    })
  }

  const handleClick = () => {
    setCount(count => count + 1)
    const d = new Date()
    const formattedDate = d.getFullYear() + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + ('0' + d.getDate()).slice(-2)
    console.log(itemChecked)
    if (inputValue === "") {
      alert("何も入力されていません")
    } else {
      setItemList((prevItemList) => [...prevItemList, {title: inputValue, date: formattedDate, id: count, check: itemChecked}])
    }
    setInputValue("")
  }

  const handleDelete = (id: number) => {
    const updatedItemList = itemList.filter(item => item.id !== id)
    setItemList(updatedItemList)
  }

  const handleCompleted = () => {
    const itemListClone = [...itemList];
    itemListClone.sort((a, b) => {
      if (!a.check && b.check) {
        return -1;
      }
      if (a.check && !b.check) {
        return 1;
      }
      return 0;
    });
    setItemList(itemListClone)
  }

  const handleIncompleted = () => {
    const itemListClone = [...itemList];
    itemListClone.sort((a, b) => a.id - b.id);
    setItemList(itemListClone);
  }

  const handleFilterCompleted = () => {
    const checkedItemList = itemList.filter(item => item.check)
    if (checkedItemList.length === 0) {
      alert("未完了のアイテムはありません")
    } else {
      setItemList(checkedItemList);
    }
  }

  const handleFilterIncompleted = () => {
    const uncheckedItemList = itemList.filter(item => !item.check)
    if (uncheckedItemList.length === itemList.length) {
      alert("完了しているアイテムはありません")
    } else {
      setItemList(uncheckedItemList);
    }
  }

  return (
    <>
        <Header 
        handleCompleted={handleCompleted}
        handleIncompleted={handleIncompleted}
        handleFilterCompleted={handleFilterCompleted}
        handleFilterIncompleted={handleFilterIncompleted}
        />
        <InputItem
        handleClick={handleClick}
        handleDelete={handleDelete}
        inputValue={inputValue}
        setInputValue={setInputValue}
        itemChecked={itemChecked}
        setItemChecked={setItemChecked}
        handleToggleCheck={handleToggleCheck}
        />
    </>
  )
}

export default App
