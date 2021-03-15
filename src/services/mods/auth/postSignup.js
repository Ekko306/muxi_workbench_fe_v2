/**
     * @desc register api
register user
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {}

export const init = new defs.Response()

export function request(params, body, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/auth/signup', params, 'POST'), {
        method: 'POST',

        body,
        ...options
    })
}
