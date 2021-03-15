/**
     * @desc get status api
获取进度实体
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {
    /** status_id */
    id
}

export const init = new defs.GetResponse()

export function request(params, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/status/detail/{id}', params, 'GET'), {
        method: 'GET',

        ...options
    })
}
