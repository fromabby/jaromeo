import './App.css'
import { useState } from 'react'
import Login from './components/Login'
import Registration from './components/Registration'

function App() {
    const [database, updateDatabase] = useState([
        {
            studentid: '2000000000',
            fn: 'abby',
            mn: '',
            ln: '',
            college: '',
            program: '',
            year: '',
            password: '2000000000'
        }
    ])
    const [page, setPage] = useState('login')

    return (
        <div className="App">
            {page === 'login' ? <Login database={database} setPage={setPage}/> :
            <Registration database={database} updateDatabase={updateDatabase} setPage={setPage}/>}
        </div>
    );
}

export default App