/**
     * @desc login api
login the workbench
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {}

export const init = new defs.LoginResponse()

export function request(params, body, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/auth/login', params, 'POST'), {
        method: 'POST',

        body,
        ...options
    })
}
