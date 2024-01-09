import http from 'k6/http'
import { check, sleep } from 'k6'
import { htmlReport } from './bundle.js'

// Teste de fumaça
// Parametros de execução
// 1 vus por 30 segundos
//duração de requisição de 500ms
//taxa de erro de 1%
//taxa de sucesso de 95%

export function handleSummary(data) {
    return {
        'index.html': htmlReport(data)
    }
}

export const options = {
    vus: 1,
    duration: '30s',
    
}
export default function () {

    const url = 'http://test-api.k6.io'

    let res = http.get(url)

    check(res, {
        'is status 200': (r) => r.status === 200
    })

    sleep(1)
}
