/**
     * @desc update team info api
更新团队信息
     */

import * as defs from '../../baseClass'
import PontCore from '../../pontCore'

export class Params {}

export const init = new defs.Response()

export function request(params, body, options = {}) {
    return PontCore.fetch(PontCore.getUrl('/team', params, 'PUT'), {
        method: 'PUT',

        body,
        ...options
    })
}
