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
  {label: "Permanent", hours: Number.MAX_VALUE}
]