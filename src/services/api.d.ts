type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
    [key in Key]: Value
}

declare namespace defs {
    export class ApplicationListResponse {
        /** apply_list */
        apply_list?: Array<defs.ApplyUserItem>

        /** count */
        count?: number
    }

    export class ApplyUserItem {
        /** email */
        email?: string

        /** id */
        id?: number

        /** name */
        name?: string
    }

    export class Comment {
        /** avatar */
        avatar?: string

        /** cid */
        cid?: number

        /** content */
        content?: string

        /** time */
        time?: string

        /** uid */
        uid?: number

        /** username */
        username?: string
    }

    export class CommentListResponse {
        /** commentlist */
        commentlist?: Array<defs.Comment>

        /** count */
        count?: number

        data: CommentListData
    }

    export class CommentListData {
        /** commentlist */
        commentlist: Array<defs.Comment>

        /** count */
        count?: number
    }

    export class CreateCommentRequest {
        /** content */
        content?: string
    }

    export class CreateGroupRequest {
        /** group_name */
        group_name?: string

        /** user_list */
        user_list?: Array<number>
    }

    export class CreateInvitationResponse {
        /** hash */
        hash?: string
    }

    export class CreateRequest {
        /** content */
        content?: string

        /** title */
        title?: string
    }

    export class CreateTeamRequest {
        /** team_name */
        team_name?: string
    }

    export class DeleteApplicationRequest {
        /** application_list */
        application_list?: Array<number>
    }

    export class DeleteCommentRequest {
        /** status_id */
        status_id?: number

        /** title */
        title?: string
    }

    export class DeleteRequest {
        /** title */
        title?: string
    }

    export class DropTeamRequest {
        /** team_id */
        team_id?: number
    }

    export class GetProfileRequest {
        /** id */
        id?: number
    }

    export class GetResponse {
        /** content */
        content?: string

        /** sid */
        sid?: number

        /** time */
        time?: string

        /** title */
        title?: string

        /** userid */
        userid?: number

        data: StatusDetail
    }

    export class StatusDetail {
        /** content */
        content?: string

        /** sid */
        sid: number

        /** time */
        time?: string

        /** title */
        title?: string

        /** userid */
        userid?: number

        /** liked */
        liked: boolean

        /** like_count */
        like_count: number
    }

    export class Group {
        /** id */
        id?: number

        /** name */
        name?: string

        /** user_count */
        user_count?: number
    }

    export class GroupListResponse {
        /** count */
        count?: number

        /** groups */
        groups?: Array<defs.Group>
    }

    export class JoinRequest {
        /** user_list */
        user_list?: Array<number>
    }

    export class LikeRequest {
        /** liked */
        liked?: boolean
    }

    export class ListRequest {
        /** group */
        group?: number

        /** team */
        team?: number
    }

    export class ListResponse {
        /** count */
        count?: number

        /** stauts */
        stauts?: Array<defs.Status>
        data: ListResponse
    }

    export class LoginRequest {
        /** oauth_code */
        oauth_code?: string
    }

    export class LoginResponse {
        /** redirect_url */
        redirect_url?: string

        /** token */
        token?: string
    }

    export class Member {
        /** avatar */
        avatar?: string

        /** email */
        email?: string

        /** group_id */
        group_id?: number

        /** group_name */
        group_name?: string

        /** id */
        id?: number

        /** name */
        name?: string

        /** team_id */
        team_id?: number
    }

    export class MemberListResponse {
        /** count */
        count?: number

        /** members */
        members?: Array<defs.Member>
    }

    export class ParseInvitationResponse {
        /** team_id */
        team_id?: number
    }

    export class RegisterRequest {
        /** email */
        email?: string

        /** name */
        name?: string

        /** password */
        password?: string
    }

    export class RemoveRequest {
        /** user_list */
        user_list?: Array<number>
    }

    export class Response {
        /** code */
        code?: number

        /** data */
        data?: object

        /** message */
        message?: string
    }

    export class Status {
        /** avatar */
        avatar?: string

        /** comment_count */
        comment_count: number

        /** content */
        content?: string

        /** id */
        id: number

        /** like_count */
        like_count: number

        /** liked */
        liked?: boolean

        /** time */
        time?: string

        /** title */
        title?: string

        /** username */
        username?: string
    }

    export class UpdateGroupInfoRequest {
        /** new_group_name */
        new_group_name?: string
    }

    export class UpdateInfoRequest {
        /** avatar_url */
        avatar_url?: string

        /** email */
        email?: string

        /** id */
        id?: number

        /** name */
        name?: string

        /** nick */
        nick?: string
    }

    export class UpdateMembersRequest {
        /** group_id */
        group_id?: number

        /** user_list */
        user_list?: Array<number>
    }

    export class UpdateRequest {
        /** content */
        content?: string

        /** title */
        title?: string
    }

    export class UpdateTeamInfoRequest {
        /** new_name */
        new_name?: string
    }

    export class UserProfile {
        /** avatar */
        avatar?: string

        /** email */
        email?: string

        /** group */
        group?: number

        /** id */
        id?: number

        /** name */
        name?: string

        /** nick */
        nick?: string

        /** role */
        role?: number

        /** team */
        team?: number

        /** tel */
        tel?: string
    }
}

declare namespace API {
    /**
     * 用户服务
     */
    export namespace auth {
        /**
        * login api
login the workbench
        * /auth/login
        */
        export namespace postLogin {
            export class Params {}

            export type Response = defs.LoginResponse

            export const init: Response

            export function request(
                params: Params,
                body: defs.LoginRequest,
                options?: any
            ): Promise<Response>
        }

        /**
        * register api
register user
        * /auth/signup
        */
        export namespace postSignup {
            export class Params {}

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.RegisterRequest,
                options?: any
            ): Promise<Response>
        }
    }

    /**
     * 动态服务
     */
    export namespace status {
        /**
        * list status api
拉取进度列表
        * /status
        */
        export namespace getStatus {
            export class Params {
                /** limit */
                limit?: number
                /** last_id */
                last_id?: number
                /** page */
                page?: number
                /** group */
                group?: number
                /** uid */
                uid?: number
                /** team */
                team?: number
            }

            export type Response = defs.ListResponse

            export const init: Response

            export function request(params: Params, options?: any): Promise<Response>
        }

        /**
        * create status api
创建 status
        * /status
        */
        export namespace postStatus {
            export class Params {}

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.CreateRequest,
                options?: any
            ): Promise<Response>
        }

        /**
        * create comment api
创建评论
        * /status/comment/{id}
        */
        export namespace postStatusCommentById {
            export class Params {
                /** status_id */
                id: number
            }

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.CreateCommentRequest,
                options?: any
            ): Promise<Response>
        }

        /**
        * delete comment api
通过 status_id 和 status_title 删除 status_comment
        * /status/comment/{id}
        */
        export namespace deleteStatusCommentById {
            export class Params {
                /** comment_id */
                id: number
            }

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.DeleteCommentRequest,
                options?: any
            ): Promise<Response>
        }

        /**
        * get status api
获取进度实体
        * /status/detail/{id}
        */
        export namespace getStatusDetailById {
            export class Params {
                /** status_id */
                id: number
            }

            export type Response = defs.GetResponse

            export const init: Response

            export function request(params: Params, options?: any): Promise<Response>
        }

        /**
        * update status api
编辑进度
        * /status/detail/{id}
        */
        export namespace putStatusDetailById {
            export class Params {
                /** status_id */
                id: number
            }

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.UpdateRequest,
                options?: any
            ): Promise<Response>
        }

        /**
        * delete status api
通过 status_id 和 title 删除 status
        * /status/detail/{id}
        */
        export namespace deleteStatusDetailById {
            export class Params {
                /** status_id */
                id: number
            }

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.DeleteRequest,
                options?: any
            ): Promise<Response>
        }

        /**
        * get comments list api
通过 status_id 获取 comment_list
        * /status/detail/{id}/comments
        */
        export namespace getStatusDetailByIdComments {
            export class Params {
                /** status_id */
                id: number
                /** limit */
                limit?: number
                /** last_id */
                last_id?: number
                /** page */
                page?: number
            }

            export type Response = defs.CommentListResponse

            export const init: Response

            export function request(params: Params, options?: any): Promise<Response>
        }

        /**
        * like status api
给进度点赞
        * /status/like/{id}
        */
        export namespace putStatusLikeById {
            export class Params {
                /** status_id */
                id: number
            }

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.LikeRequest,
                options?: any
            ): Promise<Response>
        }
    }

    /**
     * 团队服务
     */
    export namespace team {
        /**
        * update team info api
更新团队信息
        * /team
        */
        export namespace putTeam {
            export class Params {}

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.UpdateTeamInfoRequest,
                options?: any
            ): Promise<Response>
        }

        /**
        * create team api
创建 team
        * /team
        */
        export namespace postTeam {
            export class Params {}

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.CreateTeamRequest,
                options?: any
            ): Promise<Response>
        }

        /**
        * drop team api
删除 team
        * /team
        */
        export namespace deleteTeam {
            export class Params {}

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.DropTeamRequest,
                options?: any
            ): Promise<Response>
        }

        /**
        * join team api
加入 team
        * /team/member
        */
        export namespace postTeamMember {
            export class Params {}

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.JoinRequest,
                options?: any
            ): Promise<Response>
        }

        /**
        * remove api
移除成员
        * /team/member
        */
        export namespace deleteTeamMember {
            export class Params {}

            export type Response = defs.Response

            export const init: Response

            export function request(
                params: Params,
                body: defs.RemoveRequest,
                options?: any
            ): Promise<Response>
        }
    }
}
