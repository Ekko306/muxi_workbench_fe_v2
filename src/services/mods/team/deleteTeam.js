/**
     * @desc drop team api
删除 team
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {}

export const init = new defs.Response()

export function request(params, body, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/team', params, 'DELETE'), {
        method: 'DELETE',

        body,
        ...options
    })
}
