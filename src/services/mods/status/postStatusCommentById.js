/**
     * @desc create comment api
创建评论
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {
    /** status_id */
    id
}

export const init = new defs.Response()

export function request(params, body, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/status/comment/{id}', params, 'POST'), {
        method: 'POST',

        body,
        ...options
    })
}
