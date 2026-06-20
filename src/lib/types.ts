// Types for Rune selection, #TODO: create a db import for this.
export type RunePath =
    | "precision"
    | "domination"
    | "sorcery"
    | "resolve"
    | "inspiration";

export interface PathConfig {
    id: RunePath;
    name: string;
    color: string;
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
export interface Rune {
  name: string
  path: RunePath
  primary: boolean
}
export interface Item {
  name: string
  cost: number
}
export interface Build {
  name: string
  author: string
  champion: Champion
  runes: Rune[]
  items: Item[]
  winrate?: number
}

export interface Report {
  target: string //id
  reason: ReportReason
  description?: string
}
export type ReportReason = 
  | ""
  | "Offensie Name"
  | "Other"