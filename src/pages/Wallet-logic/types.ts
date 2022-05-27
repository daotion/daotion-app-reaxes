export interface Account {
  address: string
  ens: { name?: string; avator?: string }
  balance: Record<string, string> | null
}
