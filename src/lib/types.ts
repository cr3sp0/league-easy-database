// Types for the handling of a user's session
export interface IUser {
  userID: number
  username: string
  pfp: string
  isAdmin: boolean
  riotID?: string
}

export interface ISession {
  id: number
  guid: string
  user_id: number
  date_created: Date
  date_expired: Date
}

// Types for Rune selection, #TODO: create a db import for this.
export type RunePath =
    | "precision"
    | "domination"
    | "sorcery"
    | "resolve"
    | "inspiration"
export type RuneLevel =
  | "keystone"
  | 1
  | 2
  | 3

export interface PathConfig {
  id: RunePath | "shard"
  name: string
  color: string
}
export interface Rune {
  path: PathConfig
  name: string
  image: string
  level: RuneLevel
}
export interface RuneConfiguration {
  primary: Rune[]
  secondary: Rune[]
  shards: Rune[]
}

// PLACEHOLDER
export interface StatItem {
    id: number;
    name: string;
    value: string | number;
  }

export interface Champion {
  name: string
  title: string
}
export interface Item {
  name: string
  description: string
  image: string
  cost: number
}
export interface Build {
  name: string
  author: string
  champion: Champion
  runes: RuneConfiguration
  items: Item[]
  kills: number
  deaths: number
  assists: number
  wins: number
  losses: number
}

export interface Report {
  date: Date
  target: string
  author: string
  reason: string
  description?: string
}
export const ReportReason = [
  "Offensive Name",
  "Other"
]
export const BanDurations = [
  {label: "3 Days", hours: 72},
  {label: "5 Days", hours: 120},
  {label: "7 Days", hours: 164},
  {label: "14 Days", hours: 328},
  {label: "30 Days", hours: 720},
  {label: "60 Days", hours: 1440},
  {label: "365 Days", hours: 8760},
  {label: "Permanent", hours: -1}
]