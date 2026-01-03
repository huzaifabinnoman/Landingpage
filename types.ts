
export interface CryptidStory {
  witnessName: string;
  location: string;
  date: string;
  description: string;
  file?: File;
}

export interface AnalysisResult {
  cryptidType: string;
  threatLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
  authenticityScore: number;
  summary: string;
  keywords: string[];
}

export interface VideoMetadata {
  id: string;
  title: string;
  thumbnail: string;
  uploadDate: string;
  duration: string;
  views: string;
}

export enum AppState {
  HOME = 'HOME',
  SUBMIT = 'SUBMIT',
  ANALYZING = 'ANALYZING',
  SUCCESS = 'SUCCESS',
  ARCHIVES = 'ARCHIVES'
}
