import React from 'react'
import './index.less'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from 'pages/layout'
import Status from 'pages/status'
import Project from 'pages/project'
import Feed from 'pages/feed'
import Member from 'pages/member'
import Message from 'pages/message'
import Editor from 'pages/editor'
import noMatch from 'pages/noMatch'
import ScrollToTop from 'components/scrollToTop'

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <div>
                <Layout>
                    <Switch>
                        <Redirect exact from="/" to="/project" />
                        <Route path="/status" component={Status} />
                        <Route path="/project" component={Project} />
                        <Route path="/feed" component={Feed} />
                        <Route path="/member" component={Member} />
                        <Route path="/message" component={Message} />
                        <Route path="/member" component={Member} />
                        <Route path="/editor" component={Editor} />
                        <Route path="*" component={noMatch} />
                    </Switch>
                </Layout>
            </div>
        </Router>
    )
}

export default App
