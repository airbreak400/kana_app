export interface KanaChar {
  char: string;
  romaji: string;
  id: string;
}

export enum Tab {
  LEARN = 'learn',
  PRACTICE = 'practice',
  SETTINGS = 'settings'
}