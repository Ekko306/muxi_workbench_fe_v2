export class ApplicationListResponse {
    /** apply_list */
    apply_list = []

    /** count */
    count = undefined
}

export class ApplyUserItem {
    /** email */
    email = ''

    /** id */
    id = undefined

    /** name */
    name = ''
}

export class Comment {
    /** avatar */
    avatar = ''

    /** cid */
    cid = undefined

    /** content */
    content = ''

    /** time */
    time = ''

    /** uid */
    uid = undefined

    /** username */
    username = ''
}

export class CommentListResponse {
    /** commentlist */
    commentlist = []

    /** count */
    count = undefined
}

export class CreateCommentRequest {
    /** content */
    content = ''
}

export class CreateGroupRequest {
    /** group_name */
    group_name = ''

    /** user_list */
    user_list = []
}

export class CreateInvitationResponse {
    /** hash */
    hash = ''
}

export class CreateRequest {
    /** content */
    content = ''

    /** title */
    title = ''
}

export class CreateTeamRequest {
    /** team_name */
    team_name = ''
}

export class DeleteApplicationRequest {
    /** application_list */
    application_list = []
}

export class DeleteCommentRequest {
    /** status_id */
    status_id = undefined

    /** title */
    title = ''
}

export class DeleteRequest {
    /** title */
    title = ''
}

export class DropTeamRequest {
    /** team_id */
    team_id = undefined
}

export class GetProfileRequest {
    /** id */
    id = undefined
}

export class GetResponse {
    /** content */
    content = ''

    /** sid */
    sid = undefined

    /** time */
    time = ''

    /** title */
    title = ''

    /** userid */
    userid = undefined
}

export class Group {
    /** id */
    id = undefined

    /** name */
    name = ''

    /** user_count */
    user_count = undefined
}

export class GroupListResponse {
    /** count */
    count = undefined

    /** groups */
    groups = []
}

export class JoinRequest {
    /** user_list */
    user_list = []
}

export class LikeRequest {
    /** liked */
    liked = false
}

export class ListRequest {
    /** group */
    group = undefined

    /** team */
    team = undefined
}

export class ListResponse {
    /** count */
    count = undefined

    /** stauts */
    stauts = []
}

export class LoginRequest {
    /** oauth_code */
    oauth_code = ''
}

export class LoginResponse {
    /** redirect_url */
    redirect_url = ''

    /** token */
    token = ''
}

export class Member {
    /** avatar */
    avatar = ''

    /** email */
    email = ''

    /** group_id */
    group_id = undefined

    /** group_name */
    group_name = ''

    /** id */
    id = undefined

    /** name */
    name = ''

    /** team_id */
    team_id = undefined
}

export class MemberListResponse {
    /** count */
    count = undefined

    /** members */
    members = []
}

export class ParseInvitationResponse {
    /** team_id */
    team_id = undefined
}

export class RegisterRequest {
    /** email */
    email = ''

    /** name */
    name = ''

    /** password */
    password = ''
}

export class RemoveRequest {
    /** user_list */
    user_list = []
}

export class Response {
    /** code */
    code = undefined

    /** data */
    data = undefined

    /** message */
    message = ''
}

export class Status {
    /** avatar */
    avatar = ''

    /** comment_count */
    comment_count = undefined

    /** content */
    content = ''

    /** id */
    id = undefined

    /** like_count */
    like_count = undefined

    /** liked */
    liked = false

    /** time */
    time = ''

    /** title */
    title = ''

    /** username */
    username = ''
}

export class UpdateGroupInfoRequest {
    /** new_group_name */
    new_group_name = ''
}

export class UpdateInfoRequest {
    /** avatar_url */
    avatar_url = ''

    /** email */
    email = ''

    /** id */
    id = undefined

    /** name */
    name = ''

    /** nick */
    nick = ''
}

export class UpdateMembersRequest {
    /** group_id */
    group_id = undefined

    /** user_list */
    user_list = []
}

export class UpdateRequest {
    /** content */
    content = ''

    /** title */
    title = ''
}

export class UpdateTeamInfoRequest {
    /** new_name */
    new_name = ''
}

export class UserProfile {
    /** avatar */
    avatar = ''

    /** email */
    email = ''

    /** group */
    group = undefined

    /** id */
    id = undefined

    /** name */
    name = ''

    /** nick */
    nick = ''

    /** role */
    role = undefined

    /** team */
    team = undefined

    /** tel */
    tel = ''
}
