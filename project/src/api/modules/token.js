import request from '@/utils/request'

export function sendToken(token) {
  return request({
    url: '/token',
    method: 'post',
    data: {
      'windows_auth_token': token
    }
  })
}
