/**
     * @desc delete status api
通过 status_id 和 title 删除 status
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {
    /** status_id */
    id
}

export const init = new defs.Response()

export function request(params, body, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/status/detail/{id}', params, 'DELETE'), {
        method: 'DELETE',

        body,
        ...options
    })
}
