/**
 * Object grouping pagination parameters.
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * Maximum number of entries to be returned (max = 250)
     * @type {number}
     * @memberof Pagination
     */
    limit: number
    /**
     * Initial position from which to take entries (0-indexed).
     * @type {number}
     * @memberof Pagination
     */
    offset: number
    /**
     * The total number of entries the list holds.
     * @type {number}
     * @memberof Pagination
     */
    total_count: number | null
  }
