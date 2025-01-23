import { Route } from "@/library/router/types/Route"
import { EmptyObject } from "@/library/router/types/EmptyObject"

/**
 * Implementation of the route system
 * Example:
 * <code>
 * home: {
 *   path: "/:id"
 * } as Route<{searchParam: string}, {id: string}>
 * </code>
 */
const routes = {
  home: {
    path: "/",
    name: "Home page",
    description: "Home page",
    permissions: []
  } as Route,
  people: {
    list: {
      path: "/people",
      name: "People list",
      description: "List of people",
      permissions: []
    } as Route,
    detail: {
      path: "/people/:id",
      name: "Person detail",
      permissions: [],
      description: "Person detail",
    } as Route<EmptyObject, {id: number}>
  } satisfies { [key: string]: Route }
} as const

export default routes
