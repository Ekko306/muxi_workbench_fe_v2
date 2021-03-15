/**
     * @desc update status api
编辑进度
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {
    /** status_id */
    id
}

export const init = new defs.Response()

export function request(params, body, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/status/detail/{id}', params, 'PUT'), {
        method: 'PUT',

        body,
        ...options
    })
}
