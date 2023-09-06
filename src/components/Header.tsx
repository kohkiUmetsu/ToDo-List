interface HeaderProps {
    handleCompleted: () => void
    handleIncompleted: () => void
    handleFilterCompleted: () => void
    handleFilterIncompleted: () => void
}

const Header: React.FC<HeaderProps> = ({handleCompleted, handleIncompleted, handleFilterCompleted, handleFilterIncompleted}) => {

  return (
    <div className="navbar bg-base-100 w-10/12 mx-auto">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a onClick={handleCompleted}>Order Incompleted</a></li>
                <li><a onClick={handleIncompleted}>Order Completed</a></li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">ToDo List</a>
        </div>
        <div className="navbar-end">
        <button className="btn btn-ghost" onClick={handleFilterCompleted}>Filter Completed</button>
        <button className="btn btn-ghost" onClick={handleFilterIncompleted}>Filter Incompleted</button>
        </div>
    </div>
  )
}

export default Header