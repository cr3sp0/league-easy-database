// Types for the handling of a user's session
export interface IUser {
  userID: number,
  username: string,
  riotID?: string,
  role: "admin" | "user"
}

export interface ISession {
  guid: string
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
  cost: number
}
export interface Build {
  name: string
  author: string
  champion: Champion
  runes: RuneConfiguration
  items: Item[]
  winrate?: number
}

export interface Report {
  target: string //id
  author: string
  reason: string
  description?: string
}
export const ReportReason = [
  "Offensive Name",
  "Other"
]