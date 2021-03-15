/**
     * @desc remove api
移除成员
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {}

export const init = new defs.Response()

export function request(params, body, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/team/member', params, 'DELETE'), {
        method: 'DELETE',

        body,
        ...options
    })
}
