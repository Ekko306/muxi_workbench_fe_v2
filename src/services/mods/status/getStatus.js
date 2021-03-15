/**
     * @desc list status api
拉取进度列表
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {
    /** limit */
    limit
    /** last_id */
    last_id
    /** page */
    page
    /** group */
    group
    /** uid */
    uid
    /** team */
    team
}

export const init = new defs.ListResponse()

export function request(params, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/status', params, 'GET'), {
        method: 'GET',

        ...options
    })
}
