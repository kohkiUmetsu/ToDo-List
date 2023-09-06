import { ItemListState, ItemInterface } from '../state/ItemListState'
import { useRecoilState } from "recoil"

interface InputItemProps {
  handleClick: () => void
  handleDelete: (id: number) => void
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  itemChecked: boolean
  setItemChecked: React.Dispatch<React.SetStateAction<boolean>>
  handleToggleCheck: (id: number, check: boolean) => void
}

const InputItem: React.FC<InputItemProps> = ({handleClick, handleDelete, inputValue, setInputValue, itemChecked, setItemChecked, handleToggleCheck}) => {

  const [itemList, setItemList] = useRecoilState<ItemInterface[]>(ItemListState)

  return (
    <>
      <div className='flex justify-center mt-8'>
          <div className="join mx-auto">
          <div>
              <div>
                  <input className="input input-bordered join-item w-96 " placeholder="Add item" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
              </div>
          </div>
          <div className="indicator">
              <button className="btn join-item" onClick={handleClick}>Add</button>
          </div>
          </div>
      </div>
      <div className='mt-6 w-10/12 mx-auto'>
        <div className="overflow-x-auto">
        <table className="table">
            <thead>
            <tr>
                <th className='w-1/12'></th>
                <th className='w-1/12'>number</th>
                <th className='w-7/12'>Title</th>
                <th className='w-2/12'>Date</th>
                <th className='w-1/12'>Delete</th>
            </tr>
            </thead>
            <tbody>
            {itemList.map((item: ItemInterface, index) =>(
              <tr key={index}>
                <th className=''><input type="checkbox" className="checkbox my-auto block" onChange={() => handleToggleCheck(item.id, item.check)} checked={item.check}/></th>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>
                <button className="btn btn-circle" onClick={() => handleDelete(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                </td>
            </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default InputItem