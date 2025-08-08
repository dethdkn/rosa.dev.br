import type { Badges } from './badges'

export interface Certificates{
  href: string,
  title: string,
  subtitle: string,
  concluded: string,
  badges: Badges[],
}
