/**
     * @desc delete comment api
通过 status_id 和 status_title 删除 status_comment
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {
    /** comment_id */
    id
}

export const init = new defs.Response()

export function request(params, body, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/status/comment/{id}', params, 'DELETE'), {
        method: 'DELETE',

        body,
        ...options
    })
}
