import React from 'react'
import './index.less'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchStatusList, initialStatus } from 'store/features/statusList/statusListSlice'
import logo from 'assets/img/logo@2x.png'
import Icon from 'components/icon'
import infoIcon from 'assets/svg/commonIcon/info.svg'
import searchIcon from 'assets/svg/commonIcon/search.svg'
import Button, { buttonType } from 'components/button'

interface LayoutProps {
    className?: string
}

const Layout: React.FC<LayoutProps> = (props) => {
    const { children } = props
    const dispatch = useDispatch()
    const location = useLocation()
    return (
        <>
            <div className="workbench-header">
                <Link className="logo" to="/project">
                    <img className="img" src={logo} alt="logo" />
                    <div className="text">木犀工作台</div>
                </Link>
                <ul className="nav">
                    <li>
                        <NavLink to="/project" className="link" activeClassName="active">
                            项目
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/status"
                            className="link"
                            activeClassName="active"
                            onClick={() => {
                                dispatch(initialStatus()) // 从别的路由点击进度 只需清空status，然后在onMount时会fetch数据
                                if (location.pathname === '/statusList') {
                                    dispatch(fetchStatusList()) // 但已在status没有onMount 需手动请求一次 类似刷新
                                }
                            }}
                        >
                            进度
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/feed" className="link" activeClassName="active">
                            动态
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/member" className="link" activeClassName="active">
                            成员
                        </NavLink>
                    </li>
                </ul>
                <div className="user">
                    <div>
                        <Icon src={searchIcon} />
                    </div>
                    <div className="message">
                        <Icon src={infoIcon} />
                    </div>
                    <Link to="/member">
                        <img
                            src="https://static.muxixyz.com/workbench/avatar/4.png"
                            alt="avatar"
                            className="avatar"
                        />
                    </Link>
                    <Link to="/editor" className="edit">
                        <Button type={buttonType.primary} className="edit-button">
                            写进度
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="container">{children}</div>
        </>
    )
}

export default Layout
