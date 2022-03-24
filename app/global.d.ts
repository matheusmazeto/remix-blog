export interface EnvironmentVariables {
  API_FOOTBALL_URL?: string
  API_FOOTBALL_KEY?: string
  API_FOOTBALL_HOST?: string
}

declare namespace NodeJS {
  export interface ProcessEnv {
    API_FOOTBALL_URL: string
    API_FOOTBALL_KEY: string
    API_FOOTBALL_HOST: string
  }
}
