import React from 'react'
import './index.less'

function App(): any {
    return (
        <div className="app">
            <header className="app-header">
                <button
                    type="button"
                    onClick={() => {
                        API.status.getStatus.request({}).then((data) => {
                            console.log(data)
                        })
                    }}
                >
                    suyapeng
                </button>
                <a
                    className="app-link"
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
