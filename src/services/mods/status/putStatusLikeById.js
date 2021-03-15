/**
     * @desc like status api
给进度点赞
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {
    /** status_id */
    id
}

export const init = new defs.Response()

export function request(params, body, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/status/like/{id}', params, 'PUT'), {
        method: 'PUT',

        body,
        ...options
    })
}
