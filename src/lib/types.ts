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