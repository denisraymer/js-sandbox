interface IProfile {
  username: string
  role: string
  is_admin: string
  is_staff: string
  org: string
}

interface IUserLoginData {
  username: string
  password: string
}

export type { IProfile, IUserLoginData }
