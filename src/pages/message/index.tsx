import React from 'react'
import './index.less'

const Message: React.FC = () => {
    return (
        <div className="app">
            <header className="app-header">
                <button type="button">
                    Edit <code>src/Index.js</code> and save to reload.
                </button>
                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    编辑页面
                </a>
            </header>
        </div>
    )
}

export default Message
