export {}

type StringBoolean = "false" | "true"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_VERSION: string
      NEXTAUTH_URL: string
      AUTH_SECRET: string

      NEXT_PUBLIC_SORT_DESCENDING_FLAG: string
      NEXT_PUBLIC_SORT_ASCENDING_FLAG: string
      NEXT_PUBLIC_SORT_SEPARATOR: string

      /** Redis url accessible to nextjs server (e.g. redis://localhost:6379 ) */
      REDIS_URL: string

      /** Url for admin browsing of the redis stack data (e.g. http://localhost:8001) */
      REDIS_INSIGHT_URL: string

      /** Used in instrumentation for handling redis cache. If value is filled, error logs will be shown in production console */
      CACHE_SHOW_REDIS_ERRORS: string | undefined

      /** Default stale age for redis cache time to live (TTL) property */
      NEXT_PUBLIC_CACHE_IN_SECONDS: string | undefined

      /** Internal nextjs phase in build state machine, when next build is triggered. Set automatically by nextjs  */
      NEXT_PHASE: string
      /** Internal nextjs property for determining if function is run on edge or node server */
      NEXT_RUNTIME
    }
  }
}
