export type Headers = Record<string, Record<string, string>>

export const createAuthHeader = (token: string): Headers => ({
  headers: { Authorization: `Bearer ${token}` },
})
