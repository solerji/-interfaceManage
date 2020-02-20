import { request } from'./apiUtil'

export function getInterfaceData(body) {
  return request ({
    method: 'post',
    url: '/api/interfaceData',
    data: body
  })
}

export function getInterfaceList(params) {
  return request ({
    method: 'get',
    url: '/api/interfaceList',
    params: params
  })
}

export function getAllInterface(params) {
  return request ({
    method: 'get',
    url: '/api/allInterface',
    params: params
  })
}
