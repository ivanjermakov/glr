import {environment as prod} from './environment.prod'

export const environment = {
  ...prod,
  production: false,
}
