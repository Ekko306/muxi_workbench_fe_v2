import React from 'react'
import StatusList from 'pages/status/statusList'
import StatusDetail from 'pages/status/statusDetail'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'

const Status: React.FC<RouteComponentProps> = (props) => {
    const { match } = props
    return (
        <div className="status">
            <Switch>
                <Route path={`${match.url}/:id`} component={StatusDetail} />
                <Route exact path={match.url} component={StatusList} />
            </Switch>
        </div>
    )
}

export default Status
