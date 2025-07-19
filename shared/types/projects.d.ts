export interface Projects{
  title: string,
  badges: { title: string, icon: string, color: string }[],
  urls: { url: string, external: boolean, icon: string, aria: string }[],
  description: string,
}
