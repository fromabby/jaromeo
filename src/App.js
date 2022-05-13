import './App.css'
import { useState } from 'react'
import Login from './components/Login'
import Registration from './components/Registration'

function App() {
    const [database, updateDatabase] = useState([
        {
            studentid: '2000000000',
            fn: 'Juan',
            mn: 'Mario',
            ln: 'Dela Cruz',
            college: 'UST',
            program: 'IT',
            year: '2022',
            password: 'Ju4n!2022'
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