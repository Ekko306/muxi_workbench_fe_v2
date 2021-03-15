/**
     * @desc get comments list api
通过 status_id 获取 comment_list
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {
    /** status_id */
    id
    /** limit */
    limit
    /** last_id */
    last_id
    /** page */
    page
}

export const init = new defs.CommentListResponse()

export function request(params, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/status/detail/{id}/comments', params, 'GET'), {
        method: 'GET',

        ...options
    })
}
