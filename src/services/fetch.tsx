import React from 'react'
import logo from 'assets/svg/logo.svg'
import 'Index.less'

function App(): any {
    return (
        <div className="App">
            <button type={'button'}>123</button>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/Index.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
