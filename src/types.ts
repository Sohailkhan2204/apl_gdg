export type PlayerRole = 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicketkeeper';

export interface PlayerAttributes {
  isOverseas: boolean;
  role_batsman: boolean;
  role_bowler: boolean;
  role_allrounder: boolean;
  role_wk: boolean;
  status_active: boolean;
  status_retired: boolean;
  cap_captain: boolean;
  title_winner: boolean;
  award_orange_cap: boolean;
  award_purple_cap: boolean;
  team_csk: boolean;
  team_mi: boolean;
  team_rcb: boolean;
  team_kkr: boolean;
  team_srh_deccan: boolean;
  team_rr: boolean;
  team_dc_dd: boolean;
  team_pbks_kxip: boolean;
  team_gt: boolean;
  team_lsg: boolean;
  style_left_hand_bat: boolean;
  style_fast_bowler: boolean;
  style_spin_bowler: boolean;
  trait_finisher: boolean;
  trait_opener: boolean;
  trait_death_bowler: boolean;
  stat_century: boolean;
  stat_hattrick: boolean;
  stat_200plus_matches: boolean;
  stat_5000plus_runs: boolean;
  stat_100plus_wickets: boolean;
}

export interface Player {
  id: string;
  name: string;
  role: PlayerRole;
  country: string;
  teams: string[];
  imageUrl?: string;
  description: string;
  baseWeight: number; // For prior initialization (legacy/superstars slightly higher visibility)
  attributes: PlayerAttributes;
  customAdded?: boolean;
}

export type AnswerType = 'Yes' | 'No' | 'Maybe' | 'Don\'t Know';

export interface QuestionAttribute {
  id: keyof PlayerAttributes;
  questionText: string;
  category: 'Demographics' | 'Role' | 'Status' | 'Franchise' | 'Playing Style' | 'Milestones';
}

export interface QuestionHistoryItem {
  attributeId: keyof PlayerAttributes;
  questionText: string;
  answer: AnswerType;
  confidenceBefore: number;
  confidenceAfter: number;
}

export interface CandidateProbability {
  player: Player;
  probability: number;
}
