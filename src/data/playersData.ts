import { Player } from '../types';

export const INITIAL_PLAYERS: Player[] = [
  // ============================================================
  // IPL 2025 SEASON PLAYERS
  // ============================================================
  {
    id: 'virat_kohli',
    name: 'Virat Kohli',
    role: 'Batsman',
    country: 'India',
    teams: ['RCB'],
    description: 'All-time leading run scorer in IPL history, 8 centuries, 2x Orange Cap winner (2016, 2024), RCB icon since day one.',
    baseWeight: 2.0,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: false,
      award_orange_cap: true, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: true, stat_100plus_wickets: false
    }
  },
  {
    id: 'ruturaj_gaikwad',
    name: 'Ruturaj Gaikwad',
    role: 'Batsman',
    country: 'India',
    teams: ['CSK'],
    description: 'CSK captain and 2021 Orange Cap winner, elegant stroke-maker who led CSK to 2023 IPL title.',
    baseWeight: 1.7,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: true, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'ms_dhoni',
    name: 'MS Dhoni',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['CSK', 'RPS'],
    description: 'Captain Cool, 5x IPL champion captain with CSK, legendary finisher and wicketkeeper.',
    baseWeight: 2.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: true, stat_100plus_wickets: false
    }
  },
  {
    id: 'rohit_sharma',
    name: 'Rohit Sharma',
    role: 'Batsman',
    country: 'India',
    teams: ['MI', 'Deccan Chargers'],
    description: 'Hitman, most successful IPL captain with 6 titles for Mumbai Indians, also played for Deccan Chargers in 2008.',
    baseWeight: 2.0,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: true, stat_100plus_wickets: false
    }
  },
  {
    id: 'jasprit_bumrah',
    name: 'Jasprit Bumrah',
    role: 'Bowler',
    country: 'India',
    teams: ['MI'],
    description: 'No. 1 ranked T20 bowler, deadly yorker specialist, won Purple Cap in 2020 and 2024, MI legend.',
    baseWeight: 1.8,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'hardik_pandya',
    name: 'Hardik Pandya',
    role: 'All-rounder',
    country: 'India',
    teams: ['MI', 'GT'],
    description: 'Explosive all-rounder, captained Gujarat Titans to IPL 2022 title, now MI captain and core all-rounder.',
    baseWeight: 1.6,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'shubman_gill',
    name: 'Shubman Gill',
    role: 'Batsman',
    country: 'India',
    teams: ['KKR', 'GT'],
    description: 'Prince of Indian batting, GT captain, 2023 Orange Cap winner with 890 runs, 4 IPL centuries.',
    baseWeight: 1.7,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: true, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'ravindra_jadeja',
    name: 'Ravindra Jadeja',
    role: 'All-rounder',
    country: 'India',
    teams: ['CSK', 'RR', 'GL', 'KTK', 'RPS'],
    description: 'Sir Jadeja, supreme fielder, left-arm spinner, 3x IPL champion with CSK, clutch final over specialist.',
    baseWeight: 1.6,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'rashid_khan',
    name: 'Rashid Khan',
    role: 'Bowler',
    country: 'Afghanistan',
    teams: ['SRH', 'GT'],
    description: 'Afghan leg-spinning sensation, fastest bowler in IPL, 3 wickets in 2023 hat-trick, GT captain.',
    baseWeight: 1.6,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'pat_cummins',
    name: 'Pat Cummins',
    role: 'Bowler',
    country: 'Australia',
    teams: ['SRH', 'KKR', 'DD'],
    description: 'World No. 1 Test bowler, SRH captain, led Australia to WTC title, multiple Purple Cap contender seasons.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'mitchell_starc',
    name: 'Mitchell Starc',
    role: 'Bowler',
    country: 'Australia',
    teams: ['KKR', 'RCB'],
    description: 'Left-arm speedster, most expensive overseas buy in IPL history, KKR player, 2024 IPL champion with KKR.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'travis_head',
    name: 'Travis Head',
    role: 'Batsman',
    country: 'Australia',
    teams: ['SRH', 'RCB'],
    description: 'Destructive Australian opener, Player of the Match in 2024 WTC Final, key SRH batting lynchpin.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'abhishek_sharma',
    name: 'Abhishek Sharma',
    role: 'All-rounder',
    country: 'India',
    teams: ['SRH', 'DC'],
    description: 'Explosive left-handed SRH star, massive six-hitter, 141-run IPL knock for SRH, rising Indian talent.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: true, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'nitish_kumar_reddy',
    name: 'Nitish Kumar Reddy',
    role: 'All-rounder',
    country: 'India',
    teams: ['SRH'],
    description: 'Young Indian pace-bowling all-rounder, powerful lower-order hitter, breakout star of SRH 2024.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'heinrich_klaasen',
    name: 'Heinrich Klaasen',
    role: 'Wicketkeeper',
    country: 'South Africa',
    teams: ['SRH', 'RCB', 'RR'],
    description: 'Proteas spin-hitting monster, known for hitting massive sixes over long on/off for SRH, 2025 Orange Cap contender.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'rishabh_pant',
    name: 'Rishabh Pant',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['DC', 'LSG'],
    description: 'Fearless left-handed keeper-batsman, explosive 128* for DC, IPL 2021 runner-up captain, comeback story.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: true, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'kl_rahul',
    name: 'KL Rahul',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['RCB', 'SRH', 'PBKS', 'LSG'],
    description: 'Elegant top-order batsman, 2020 Orange Cap winner with 670 runs, captained LSG and PBKS, prolific scorer.',
    baseWeight: 1.6,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: true, title_winner: false,
      award_orange_cap: true, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'jos_buttler',
    name: 'Jos Buttler',
    role: 'Wicketkeeper',
    country: 'England',
    teams: ['MI', 'RR'],
    description: 'England white-ball star, 2022 Orange Cap winner with record 863 runs, 4 centuries in a single season.',
    baseWeight: 1.6,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: true, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'yashasvi_jaiswal',
    name: 'Yashasvi Jaiswal',
    role: 'Batsman',
    country: 'India',
    teams: ['RR'],
    description: 'Explosive left-handed Indian opener, fastest IPL fifty (13 balls) for RR, 124-run blitz in IPL 2023.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'sanju_samson',
    name: 'Sanju Samson',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['RR', 'DD', 'PBKS'],
    description: 'RR captain, aesthetic six-hitter, 119 IPL best, 5 centuries, Kerala-born aggressive wicketkeeper-batsman.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: true, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'josh_hazlewood',
    name: 'Josh Hazlewood',
    role: 'Bowler',
    country: 'Australia',
    teams: ['RCB', 'CSK'],
    description: 'Australian tall paceman, bounce and accuracy specialist, RCB bowling attack leader in IPL 2025.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'trent_boult',
    name: 'Trent Boult',
    role: 'Bowler',
    country: 'New Zealand',
    teams: ['MI', 'SRH', 'KKR', 'RR', 'DC'],
    description: 'Kiwi new-ball swing specialist, 3 WTC titles, MVP with MI, known for powerplay breakthroughs.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'phil_salt',
    name: 'Phil Salt',
    role: 'Batsman',
    country: 'England',
    teams: ['RCB', 'KKR', 'MI'],
    description: 'Explosive English white-ball opener, rapid strike-rate, RCB 2025 star buy at ₹11.5 crore.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'quinton_de_kock',
    name: 'Quinton de Kock',
    role: 'Wicketkeeper',
    country: 'South Africa',
    teams: ['MI', 'RCB', 'SRH', 'LSG'],
    description: 'South African aggressive opener/keeper, 140* for RCB, MI reliable wicketkeeper-batsman, 3000+ IPL runs.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'devon_conway',
    name: 'Devon Conway',
    role: 'Batsman',
    country: 'New Zealand',
    teams: ['CSK', 'RCB'],
    description: 'New Zealand technical opener, 672 runs in IPL 2023 for CSK, elegant stroke-making left-hander.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'sai_sudharsan',
    name: 'Sai Sudharsan',
    role: 'Batsman',
    country: 'India',
    teams: ['GT'],
    description: 'Young GT left-handed top-order star, 759 runs in IPL 2025, emerging India prospect for GT.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'venkatesh_iyer',
    name: 'Venkatesh Iyer',
    role: 'Batsman',
    country: 'India',
    teams: ['KKR', 'MI'],
    description: 'Massive-hitting KKR opener, record ₹23.75 crore buy at IPL 2025 auction, powerful left-hander.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'varun_chakravarthy',
    name: 'Varun Chakravarthy',
    role: 'Bowler',
    country: 'India',
    teams: ['KKR', 'DC'],
    description: 'Mystery leg-spinner for KKR, 5-wicket hauls, 100+ IPL wickets, key KKR spin weapon for 2024 title.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'harshal_patel',
    name: 'Harshal Patel',
    role: 'All-rounder',
    country: 'India',
    teams: ['PBKS', 'RCB', 'MI'],
    description: 'Punjab Kings death-overs specialist, 2x Purple Cap winner (2021 RCB, 2024 PBKS), 32 wickets in 2021.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: true, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'prasidh_krishna',
    name: 'Prasidh Krishna',
    role: 'Bowler',
    country: 'India',
    teams: ['GT', 'RR', 'MI'],
    description: 'GT right-arm paceman, Purple Cap winner IPL 2025 with 25 wickets, 158 km/h thunderbolts.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'kagiso_rabada',
    name: 'Kagiso Rabada',
    role: 'Bowler',
    country: 'South Africa',
    teams: ['PBKS', 'DC'],
    description: 'South African pace machine, Purple Cap winner 2020 with DC, 30 wickets, PBKS death-bowling core.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: true, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'mohammed_shami',
    name: 'Mohammed Shami',
    role: 'Bowler',
    country: 'India',
    teams: ['GT', 'PBKS', 'DD', 'KKR'],
    description: 'India seam specialist, Purple Cap winner IPL 2023 with 28 wickets for GT, pace and accuracy.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: true, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'bhuvneshwar_kumar',
    name: 'Bhuvneshwar Kumar',
    role: 'Bowler',
    country: 'India',
    teams: ['SRH', 'RCB', 'MI'],
    description: 'India swing master, only Indian to win back-to-back Purple Caps (2016, 2017), SRH leader.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'yuzvendra_chahal',
    name: 'Yuzvendra Chahal',
    role: 'Bowler',
    country: 'India',
    teams: ['RR', 'RCB', 'MI', 'CSK'],
    description: 'India leg-spinner, all-time highest wicket-taker in IPL (187+), 2x Purple Cap winner (2019 RCB, 2022 RR).',
    baseWeight: 1.6,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: true, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'kuldeep_yadav',
    name: 'Kuldeep Yadav',
    role: 'Bowler',
    country: 'India',
    teams: ['DC', 'KKR', 'SRH'],
    description: 'Left-arm wrist-spinner, chinaman specialist, 100+ IPL wickets, DC and KKR key bowler.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'suryakumar_yadav',
    name: 'Suryakumar Yadav',
    role: 'Batsman',
    country: 'India',
    teams: ['MI', 'KKR'],
    description: 'SKY, 360-degree shot-making genius for MI, No. 1 T20 batsman ranking, 2 centuries for MI.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'matheesha_pathirana',
    name: 'Matheesha Pathirana',
    role: 'Bowler',
    country: 'Sri Lanka',
    teams: ['CSK'],
    description: 'Baby Malinga, CSK death-overs terror with sling action and toe-crushing yorkers, 2023 champion.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'ishan_kishan',
    name: 'Ishan Kishan',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['MI', 'PBKS', 'SRH'],
    description: 'Explosive left-handed MI keeper-batsman, fastest IPL fifty (48 balls), 106* vs RPS, PBKS captain.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'shreyas_iyer',
    name: 'Shreyas Iyer',
    role: 'Batsman',
    country: 'India',
    teams: ['DC', 'KKR', 'PBKS'],
    description: 'Elegant stroke-maker, KKR captain who led team to IPL 2024 title, 200+ match IPL veteran.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'andre_russell',
    name: 'Andre Russell',
    role: 'All-rounder',
    country: 'West Indies',
    teams: ['KKR', 'DC'],
    description: 'Dre Russ, KKR six-hitting machine and death-bowling all-rounder, 2x IPL champion.',
    baseWeight: 1.6,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'shivam_dube',
    name: 'Shivam Dube',
    role: 'All-rounder',
    country: 'India',
    teams: ['CSK', 'MI', 'RCB', 'RR'],
    description: 'CSK powerful left-handed middle-order hitter, six machine for CSK, quick bowling too.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'rachin_ravindra',
    name: 'Rachin Ravindra',
    role: 'All-rounder',
    country: 'New Zealand',
    teams: ['CSK', 'RCB'],
    description: 'NZ left-handed batting all-rounder, 2023 WC century vs England, CSK 2025 star buy at ₹4 crore.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'noor_ahmed',
    name: 'Noor Ahmed',
    role: 'Bowler',
    country: 'Afghanistan',
    teams: ['CSK'],
    description: 'Afghan left-arm spinner, CSK mystery weapon in IPL 2025, bought for ₹10 crore, tight economy.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'deepak_chahar',
    name: 'Deepak Chahar',
    role: 'Bowler',
    country: 'India',
    teams: ['CSK', 'MI', 'RR'],
    description: 'CSK swing bowler, 6/7 vs RR (best T20 figures), MI new-ball weapon in IPL 2025.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'krunal_pandya',
    name: 'Krunal Pandya',
    role: 'All-rounder',
    country: 'India',
    teams: ['MI', 'RCB', 'LSG'],
    description: 'Hard-hitting left-handed MI/LSP all-rounder, 2017 IPL champion with MI, key spin option.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'glenn_maxwell',
    name: 'Glenn Maxwell',
    role: 'All-rounder',
    country: 'Australia',
    teams: ['MI', 'RCB', 'KXIP', 'DD'],
    description: 'The Big Show, Australian pinch-hitter, 55-ball 95 for RCB vs MI, 2015 IPL champion.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'rahul_chahar',
    name: 'Rahul Chahar',
    role: 'Bowler',
    country: 'India',
    teams: ['SRH', 'RR', 'MI', 'PBKS'],
    description: 'Leg-spinner, IPL 2018 U19 World Cup winner with India, SRH buy in IPL 2025 at ₹3.2 crore.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'swapnil_singh',
    name: 'Swapnil Singh',
    role: 'All-rounder',
    country: 'India',
    teams: ['RCB', 'SRH'],
    description: 'OG IPL veteran since 2008, left-arm spinner and handy batsman, played for RCB, SRH across seasons.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'rajat_patidar',
    name: 'Rajat Patidar',
    role: 'Batsman',
    country: 'India',
    teams: ['RCB', 'MI', 'LSG'],
    description: 'RCB captain for IPL 2025, powerful middle-order hitter, 112* vs RR in 2022 Qualifier.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'yash_dayal',
    name: 'Yash Dayal',
    role: 'Bowler',
    country: 'India',
    teams: ['RCB', 'KKR', 'LSG'],
    description: 'Young left-arm paceman, RCB retained at ₹10 crore, broke Yashasvi Jaiswal in IPL 2023.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'anrich_nortje',
    name: 'Anrich Nortje',
    role: 'Bowler',
    country: 'South Africa',
    teams: ['KKR', 'DC', 'SRH'],
    description: 'SA fast bowler, 150+ km/h speedster, KKR 2024 IPL champion, key death-over weapon.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'suyash_sharma_legspinner',
    name: 'Suyash Sharma',
    role: 'Bowler',
    country: 'India',
    teams: ['RCB'],
    description: 'RCB leg-spinner bought for ₹2.6 crore in IPL 2025, mystery spinner from Delhi domestic circuit.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'jamie_overton',
    name: 'Jamie Overton',
    role: 'All-rounder',
    country: 'England',
    teams: ['CSK', 'DC', 'RR'],
    description: 'England express paceman, CSK 2025 buy, all-round skills, played for DC and RR previously.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'harry_brook',
    name: 'Harry Brook',
    role: 'Batsman',
    country: 'England',
    teams: ['SRH', 'PBKS', 'DC'],
    description: 'England batting star, ₹6.25 crore PBKS debut, 3x Test hundreds vs Pakistan, 360-degree hitter.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'mitchell_marsh',
    name: 'Mitchell Marsh',
    role: 'All-rounder',
    country: 'Australia',
    teams: ['LSG', 'SRH', 'DC', 'GT'],
    description: 'Australian all-rounder, powerful hitter, LSG player, 2024 WTC Final Player of the Match.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: true, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'faf_du_plessis',
    name: 'Faf du Plessis',
    role: 'Batsman',
    country: 'South Africa',
    teams: ['RCB', 'CSK'],
    description: 'South African captain, CSK legend and former captain, 2021 Player of the Match in Final.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'mohammed_siraj',
    name: 'Mohammed Siraj',
    role: 'Bowler',
    country: 'India',
    teams: ['RCB', 'MI', 'SRH'],
    description: 'India ace paceman, RCB leader, 2022 Player of the Match vs AFG in T20 WC, reverse swing master.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'washington_sundar',
    name: 'Washington Sundar',
    role: 'All-rounder',
    country: 'India',
    teams: ['SRH', 'RCB', 'PBKS', 'DC'],
    description: 'Indian off-spinning all-rounder, excellent in powerplay with ball, useful lower-order batsman.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'jitesh_sharma',
    name: 'Jitesh Sharma',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['RCB', 'MI', 'PBKS'],
    description: 'Explosive RCB keeper-batsman, ₹11 crore buy, power-hitting finisher, 50s in IPL 2024.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  // ============================================================
  // LEGENDS & RETIRED ICONS (2008-2015 era)
  // ============================================================
  {
    id: 'sachin_tendulkar',
    name: 'Sachin Tendulkar',
    role: 'Batsman',
    country: 'India',
    teams: ['MI'],
    description: 'Master Blaster, only player to win Orange Cap and captain Mumbai Indians in early seasons.',
    baseWeight: 1.6,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: true, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'shane_warne',
    name: 'Shane Warne',
    role: 'Bowler',
    country: 'Australia',
    teams: ['RR'],
    description: 'Spin king who captained underdog Rajasthan Royals to inaugural 2008 IPL title, legend of leg-spin.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'chris_gayle',
    name: 'Chris Gayle',
    role: 'Batsman',
    country: 'West Indies',
    teams: ['RCB', 'KKR', 'PBKS', 'MIS'],
    description: 'Universe Boss, highest IPL individual score (175*), most sixes record, 2x Orange Cap winner.',
    baseWeight: 1.8,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: true, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'ab_de_villiers',
    name: 'AB de Villiers',
    role: 'Batsman',
    country: 'South Africa',
    teams: ['RCB', 'DD'],
    description: 'Mr. 360, 133* vs MI (2015), 129* vs RCB (2016), RCB legend and former captain, ultimate finisher.',
    baseWeight: 1.8,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: false, status_retired: true, cap_captain: true, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: true, stat_100plus_wickets: false
    }
  },
  {
    id: 'lasith_malinga',
    name: 'Lasith Malinga',
    role: 'Bowler',
    country: 'Sri Lanka',
    teams: ['MI'],
    description: 'Slinga Malinga, death-overs god, 4x IPL champion with MI, 170 wickets, iconic toe-crushing yorker.',
    baseWeight: 1.7,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'suresh_raina',
    name: 'Suresh Raina',
    role: 'Batsman',
    country: 'India',
    teams: ['CSK', 'GL'],
    description: 'Mr. IPL, first to 5000+ runs, 2x IPL champion with CSK, left-handed aggressive top/middle order.',
    baseWeight: 1.7,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: true, stat_100plus_wickets: false
    }
  },
  {
    id: 'gautam_gambhir',
    name: 'Gautam Gambhir',
    role: 'Batsman',
    country: 'India',
    teams: ['KKR', 'DD'],
    description: 'Two-time IPL-winning captain (2012, 2014) with KKR, hero of 2011 WC Final, aggressive left-hander.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'virender_sehwag',
    name: 'Virender Sehwag',
    role: 'Batsman',
    country: 'India',
    teams: ['DD', 'KXIP'],
    description: 'Nawab of Najafgarh, ultra-aggressive opener for DD and KXIP, 100+ strike rate icon.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'yuvraj_singh',
    name: 'Yuvraj Singh',
    role: 'All-rounder',
    country: 'India',
    teams: ['KXIP', 'PWI', 'RCB', 'SRH', 'MI'],
    description: 'Six-six-six hero, 2 hat-tricks in 2009 for KXIP, 2011 WC Man of the Tournament, 2x IPL champion.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'shane_watson',
    name: 'Shane Watson',
    role: 'All-rounder',
    country: 'Australia',
    teams: ['RR', 'RCB', 'CSK'],
    description: 'Two-time IPL Player of Tournament, 117* in 2018 Final for CSK, 4 IPL centuries.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'dwayne_bravo',
    name: 'Dwayne Bravo',
    role: 'All-rounder',
    country: 'West Indies',
    teams: ['MI', 'CSK', 'GL'],
    description: "Champion, 2x Purple Cap winner (2013, 2015), 3x IPL champion with CSK, 'Champion' song singer.",
    baseWeight: 1.5,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'kieron_pollard',
    name: 'Kieron Pollard',
    role: 'All-rounder',
    country: 'West Indies',
    teams: ['MI'],
    description: 'West Indian titan, 6x IPL champion with MI, 87* vs CSK (2015), ultimate six-hitting machine.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'sunil_narine',
    name: 'Sunil Narine',
    role: 'All-rounder',
    country: 'West Indies',
    teams: ['KKR'],
    description: 'Mystery spin maestro, KKR 2x champion, 5/19 vs KXIP hat-trick, deadly pinch-hitter opener.',
    baseWeight: 1.6,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'brendon_mccullum',
    name: 'Brendon McCullum',
    role: 'Batsman',
    country: 'New Zealand',
    teams: ['KKR', 'CSK', 'RCB', 'GL', 'KTK'],
    description: 'Blazed 158* on IPL opening day 2008 for KKR, later coached KKR, captained Deccan Chargers.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: true, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'adam_gilchrist',
    name: 'Adam Gilchrist',
    role: 'Wicketkeeper',
    country: 'Australia',
    teams: ['Deccan Chargers', 'KXIP'],
    description: 'Legendary Aussie keeper-batsman, captained Deccan Chargers from last to 2009 title.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'harbhajan_singh',
    name: 'Harbhajan Singh',
    role: 'Bowler',
    country: 'India',
    teams: ['MI', 'CSK', 'KKR'],
    description: 'Bhajji, 3x IPL champion with MI and CSK, 150 IPL wickets, legendary Indian off-spinner.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'michael_hussey',
    name: 'Michael Hussey',
    role: 'Batsman',
    country: 'Australia',
    teams: ['CSK', 'MI'],
    description: 'Mr. Cricket, Orange Cap winner 2013 with 733 runs, CSK consistent performer, 2008 debut for MI.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: true, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'morne_morkel',
    name: 'Morne Morkel',
    role: 'Bowler',
    country: 'South Africa',
    teams: ['DD', 'KKR', 'MI', 'RR', 'LSG'],
    description: 'Tall South African paceman, Purple Cap winner 2012 with DD, 170+ km/h bowler, KKR champion.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'shaun_marsh',
    name: 'Shaun Marsh',
    role: 'Batsman',
    country: 'Australia',
    teams: ['PBKS', 'KXIP'],
    description: '2008 Orange Cap winner with 616 runs, PBKS/KXIP consistent left-handed top-order anchor.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: true, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'matthew_hayden',
    name: 'Matthew Hayden',
    role: 'Batsman',
    country: 'Australia',
    teams: ['CSK', 'PWI'],
    description: '2009 Orange Cap winner (572 runs) with CSK, Australian opener, 2008 champion with PWI.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: true, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'mahendra_singh_dhoni_2008',
    name: 'Manish Pandey',
    role: 'Batsman',
    country: 'India',
    teams: ['KKR', 'MI', 'SRH', 'LSG', 'DC', 'RCB', 'PWI'],
    description: 'OG IPL player since 2008, 2008 finalist with MI, KKR 2014 Player of Match in Final, all-format batter.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'robin_uthappa',
    name: 'Robin Uthappa',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['KKR', 'CSK', 'MI', 'PBKS', 'RCB'],
    description: '2008 IPL champion with KKR (earlier), 2014 Orange Cap winner with KKR, consistent keeper-batsman.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: true, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'dinesh_karthik',
    name: 'Dinesh Karthik',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['MI', 'DD', 'KKR', 'RCB', 'PBKS', 'SRH', 'GT'],
    description: 'Veteran WK-batsman, 2008 IPL debut, 257 matches, finisher with multiple teams, KKR captain 2022.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'ambati_rayudu',
    name: 'Ambati Rayudu',
    role: 'Batsman',
    country: 'India',
    teams: ['MI', 'CSK', 'RCB', 'GL'],
    description: '3x IPL champion (2x MI, 1x CSK), consistent middle-order batsman, retired after 2023 IPL.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'ajinkya_rahane',
    name: 'Ajinkya Rahane',
    role: 'Batsman',
    country: 'India',
    teams: ['RR', 'MI', 'DC', 'KKR', 'CSK', 'PBKS'],
    description: '2008 OG player, 2022 IPL champion with RR as captain, 2x IPL winner (MI 2013, RR 2022).',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'shikhar_dhawan',
    name: 'Shikhar Dhawan',
    role: 'Batsman',
    country: 'India',
    teams: ['PBKS', 'SRH', 'DC', 'RCB', 'MI', 'CSK'],
    description: '2008 OG player, 2x Orange Cap winner (2010, 2013), 6769 career IPL runs, PBKS captain.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: false,
      award_orange_cap: true, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: true, stat_100plus_wickets: false
    }
  },
  {
    id: 'parthiv_patel',
    name: 'Parthiv Patel',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['CSK', 'MI', 'DC', 'PBKS', 'RCB'],
    description: '2008 OG player, CSK 2008 finalist, played for 5 IPL teams across seasons, left-handed opener.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'irfan_pathan',
    name: 'Irfan Pathan',
    role: 'Bowler',
    country: 'India',
    teams: ['DD', 'CSK', 'KXIP', 'SRH'],
    description: '2008 OG player, CSK 2008 finalist, Indian swing bowler, played for multiple IPL teams.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'manoj_tiwari',
    name: 'Manoj Tiwary',
    role: 'Batsman',
    country: 'India',
    teams: ['DD', 'KKR', 'PBKS', 'RCB', 'SRH', 'DC'],
    description: '2008 OG player, consistent Indian middle-order batsman with multiple IPL teams.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'piyush_chawla',
    name: 'Piyush Chawla',
    role: 'Bowler',
    country: 'India',
    teams: ['DD', 'KKR', 'CSK', 'PBKS', 'MI', 'GT'],
    description: '2nd highest IPL wicket-taker (192), leg-spinner, 2008 OG player, multiple team veteran.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'munaf_patel',
    name: 'Munaf Patel',
    role: 'Bowler',
    country: 'India',
    teams: ['MI', 'DD', 'Kochi', 'CSK'],
    description: '2008 OG player, MI 2013 champion, played for 4 teams, consistent Indian paceman.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'pragyan_ojha',
    name: 'Pragyan Ojha',
    role: 'Bowler',
    country: 'India',
    teams: ['DC', 'MI', 'DD', 'Kochi', 'PBKS'],
    description: 'Left-arm spinner, Purple Cap winner 2010 (21 wickets), 2008 finalist with DD, MI 2015 champion.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'rp_singh',
    name: 'RP Singh',
    role: 'Bowler',
    country: 'India',
    teams: ['DC', 'Deccan Chargers', 'MI', 'CSK', 'KKR', 'PBKS'],
    description: '2009 Purple Cap winner (23 wickets) with Deccan Chargers, 2008 OG player, Indian paceman.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'sohail_tanvir',
    name: 'Sohail Tanvir',
    role: 'Bowler',
    country: 'Pakistan',
    teams: ['RR', 'CSK', 'PBKS'],
    description: '2008 Purple Cap winner (22 wickets) with RR, the inaugural Purple Cap holder, Pakistani paceman.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'yusuf_pathan',
    name: 'Yusuf Pathan',
    role: 'All-rounder',
    country: 'India',
    teams: ['RR', 'KKR', 'SRH', 'KTK'],
    description: '2008 IPL Player of Match in Final for RR, massive six-hitter, all-rounder, 100 IPL career.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'anil_kumble',
    name: 'Anil Kumble',
    role: 'Bowler',
    country: 'India',
    teams: ['RCB', 'DD'],
    description: 'LEGENDARY leg-spinner, 2009 Orange Cap winner, RCB captain and mentor, 6000+ Test wickets.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: false,
      award_orange_cap: true, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'ravichandran_ashwin',
    name: 'Ravichandran Ashwin',
    role: 'Bowler',
    country: 'India',
    teams: ['CSK', 'RR', 'PBKS', 'DC', 'GT', 'MI'],
    description: 'All-format Indian spin mastermind, 170+ IPL wickets, CSK 2011 champion, captain for DC.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'zaheer_khan',
    name: 'Zaheer Khan',
    role: 'Bowler',
    country: 'India',
    teams: ['MI', 'DD', 'RCB', 'DC', 'LSG'],
    description: 'Indian pace spearhead, 102 IPL wickets, MI 2013/2015 champion, 2008 OG player.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'ishant_sharma',
    name: 'Ishant Sharma',
    role: 'Bowler',
    country: 'India',
    teams: ['MI', 'KKR', 'SRH', 'DC', 'PBKS', 'GT', 'LSG'],
    description: '2008 OG player, 97 IPL wickets, tall Indian paceman, played for 7 IPL teams, longevity icon.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'ashish_nehra',
    name: 'Ashish Nehra',
    role: 'Bowler',
    country: 'India',
    teams: ['MI', 'CSK', 'DD', 'SRH', 'KXIP'],
    description: '2008 OG player, CSK 2011/2013 champion, Indian pace veteran, played 5 IPL teams.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'praveen_kumar',
    name: 'Praveen Kumar',
    role: 'Bowler',
    country: 'India',
    teams: ['RR', 'MI', 'SRH', 'RCB', 'Kochi', 'DD'],
    description: '2010 hat-trick for RCB vs RR, 2008 OG player, Indian medium pacer, RR 2008 finalist.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'amit_mishra',
    name: 'Amit Mishra',
    role: 'Bowler',
    country: 'India',
    teams: ['DD', 'SRH', 'LSG', 'Deccan Chargers'],
    description: 'Most hat-tricks in IPL history (3), leg-spinner, 173+ wickets across 162 IPL matches.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'vinay_kumar',
    name: 'Vinay Kumar',
    role: 'Bowler',
    country: 'India',
    teams: ['KKR', 'RCB', 'MI', 'SRH', 'PBKS', 'Kochi'],
    description: '2012 Purple Cap winner for KKR (16 wickets), 105 IPL wickets, KKR veteran.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'utth_umesh_yadav',
    name: 'Umesh Yadav',
    role: 'Bowler',
    country: 'India',
    teams: ['DD', 'RCB', 'MI', 'Kolkata', 'LSG', 'GT', 'PBKS'],
    description: 'Expressive Indian paceman, 20 wickets in IPL 2018 for RCB, raw pace specialist.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'sandeep_sharma',
    name: 'Sandeep Sharma',
    role: 'Bowler',
    country: 'India',
    teams: ['KXIP', 'PBKS', 'SRH', 'RR', 'RCB'],
    description: 'Consistent Indian swing bowler, 146+ IPL wickets, KXIP/PBKS veteran for many seasons.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'mohit_sharma',
    name: 'Mohit Sharma',
    role: 'Bowler',
    country: 'India',
    teams: ['CSK', 'GT', 'MI', 'DD', 'PBKS'],
    description: '2014 Purple Cap runner-up (16 wickets) with CSK, CSK 2014 finalist, consistent paceman.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'imran_tahir',
    name: 'Imran Tahir',
    role: 'Bowler',
    country: 'South Africa',
    teams: ['CSK', 'MI', 'DC', 'SRH'],
    description: '2019 Purple Cap winner with CSK (26 wickets), South African leg-spinner, 2019 IPL champion.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: true, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'andrew_tee',
    name: 'Andrew Tye',
    role: 'Bowler',
    country: 'Australia',
    teams: ['PBKS', 'GL', 'LSG', 'RR'],
    description: '2018 Purple Cap winner (24 wickets) with PBKS, Australian T20 specialist, 5/17 vs RPS.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: true, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: true, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'sam_curran',
    name: 'Sam Curran',
    role: 'All-rounder',
    country: 'England',
    teams: ['PBKS', 'CSK', 'MI', 'GL'],
    description: 'England all-rounder, 2019 hat-trick vs DC (4/11), 2019 IPL Player of Match, CSK 2023 champion.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'shreyas_gopal',
    name: 'Shreyas Gopal',
    role: 'Bowler',
    country: 'India',
    teams: ['RR', 'RCB', 'MI', 'SRH'],
    description: '2019 hat-trick vs RCB (3/12), leg-spinner, RR and RCB key bowler, 100+ IPL wickets.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'axar_patel',
    name: 'Axar Patel',
    role: 'All-rounder',
    country: 'India',
    teams: ['PBKS', 'DC', 'GT', 'MI'],
    description: '2016 hat-trick vs GL (4/21), left-arm spinner, 2021 IPL finalist with DC, GT 2022 champion.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'karun_nair',
    name: 'Karun Nair',
    role: 'Batsman',
    country: 'India',
    teams: ['DD', 'MI', 'PBKS', 'LSG', 'GT', 'CSK'],
    description: 'Only Indian to score a Test triple century (303 vs England), IPL since 2008, PBKS/KKR veteran.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'mayank_agarwal',
    name: 'Mayank Agarwal',
    role: 'Batsman',
    country: 'India',
    teams: ['PBKS', 'SRH', 'RCB', 'DC', 'LSG', 'DD'],
    description: 'Consistent Indian opener, 131 IPL matches, 2756 runs, played for 6 teams since 2011.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'rishabh_pant_old',
    name: 'Vijay Shankar',
    role: 'All-rounder',
    country: 'India',
    teams: ['SRH', 'CSK', 'MI', 'GT'],
    description: 'Indian all-rounder, 3D player (bat, ball, field), CSK 2021 finalist, 2019 WC semifinalist.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'kane_williamson',
    name: 'Kane Williamson',
    role: 'Batsman',
    country: 'New Zealand',
    teams: ['SRH', 'DC', 'KKR', 'GT'],
    description: '2018 Orange Cap winner (735 runs) with SRH, classy New Zealand captain, 2x SRH leader.',
    baseWeight: 1.5,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: false,
      award_orange_cap: true, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'david_warner',
    name: 'David Warner',
    role: 'Batsman',
    country: 'Australia',
    teams: ['SRH', 'DC'],
    description: '3x Orange Cap winner (2015, 2017, 2019), SRH 2016 champion captain, 6565 IPL runs.',
    baseWeight: 1.6,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: true, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: true, stat_100plus_wickets: false
    }
  },
  {
    id: 'dale_steyn',
    name: 'Dale Steyn',
    role: 'Bowler',
    country: 'South Africa',
    teams: ['RCB', 'MI', 'SRH', 'GT'],
    description: 'South African pace legend, 97 IPL wickets, RCB and SRH speedstar, 2016 IPL finalist.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'nathan_coulter_nile',
    name: 'Nathan Coulter-Nile',
    role: 'Bowler',
    country: 'Australia',
    teams: ['MI', 'RCB', 'KKR', 'DD'],
    description: 'Australian fast bowler, 150+ km/h pace, MI 2015 champion, RCB and KKR player.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'march_de_villiers',
    name: 'March de Villiers',
    role: 'Batsman',
    country: 'South Africa',
    teams: ['DD', 'RCB', 'SRH'],
    description: 'South African power-hitter, DD consistent, 110* vs KXIP, known for explosive batting.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'brad_hodge',
    name: 'Brad Hodge',
    role: 'Batsman',
    country: 'Australia',
    teams: ['RR', 'MI', 'PBKS', 'KKR', 'RCB', 'DD'],
    description: 'Australian domestic star, IPL veteran with 6 teams, consistent middle-order batsman.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: false, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'jesse_ryder',
    name: 'Jesse Ryder',
    role: 'Batsman',
    country: 'New Zealand',
    teams: ['DC', 'CSK', 'MI'],
    description: 'New Zealand hard-hitting batsman, played for DC, CSK, MI, power-hitter in IPL.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'john_hastings',
    name: 'John Hastings',
    role: 'Bowler',
    country: 'Australia',
    teams: ['PBKS', 'CSK', 'MI', 'KKR'],
    description: 'Australian paceman, played for 4 IPL teams, CSK 2011 champion, death-bowling specialist.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'richard_levi',
    name: 'Richard Levi',
    role: 'Batsman',
    country: 'South Africa',
    teams: ['MI', 'DD', 'KTK', 'RCB'],
    description: 'South African opener, scored 50-ball 100 for MI in 2012, fast-scoring batsman.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'pravin_tambe',
    name: 'Pravin Tambe',
    role: 'Bowler',
    country: 'India',
    teams: ['RR', 'SRH', 'KKR', 'GL'],
    description: '2014 hat-trick for RR vs KKR (3/26), oldest IPL debutant (48), inspiration story.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'manish_pandey',
    name: 'Manish Pandey',
    role: 'Batsman',
    country: 'India',
    teams: ['MI', 'KKR', 'SRH', 'LSG', 'DC', 'RCB', 'PWI'],
    description: '2008 OG player, KKR 2014 Player of Match in Final, first Indian to score IPL century for MI (2008).',
    baseWeight: 1.3,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'murli_vijay',
    name: 'Murali Vijay',
    role: 'Batsman',
    country: 'India',
    teams: ['CSK', 'DD', 'MI', 'RCB', 'SRH', 'PBKS'],
    description: '2008 finalist with CSK, consistent Indian opener, 2011 Player of Final for CSK (95).',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'rajagopal_satish',
    name: 'Rajagopal Sastry',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['RR', 'PWI', 'RCB', 'MI', 'DD', 'KTK'],
    description: '2008 OG player, RR 2008 finalist, played for 6 teams across IPL seasons, veteran keeper.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'manpreet_singh_gonny',
    name: 'Manpreet Gony',
    role: 'Bowler',
    country: 'India',
    teams: ['CSK', 'MI', 'PWI', 'DD', 'PBKS', 'KTK'],
    description: '2008 CSK player, Indian paceman, consistent performer across 6 IPL teams.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'rahul_sharma',
    name: 'Rahul Sharma',
    role: 'Bowler',
    country: 'India',
    teams: ['MI', 'DD', 'Kochi', 'SRH', 'RCB', 'KTK'],
    description: 'Indian leg-spinner, MI and DD consistent bowler, played for 6 teams across IPL seasons.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'chetanya_nanda',
    name: 'Chetan Nanda',
    role: 'Bowler',
    country: 'India',
    teams: ['MI', 'DD', 'RCB', 'KTK', 'PBKS', 'SRH'],
    description: 'Leg-spinning all-rounder, played for 6 IPL teams, one of the early IPL veterans.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'shadab_jakati',
    name: 'Shadab Jakati',
    role: 'Bowler',
    country: 'India',
    teams: ['CSK', 'KTK', 'DD', 'MI'],
    description: 'CSK 2011 champion, left-arm spinner from Goa, consistent for CSK across multiple titles.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'rVinay_kumar',
    name: 'R Vinay Kumar',
    role: 'Bowler',
    country: 'India',
    teams: ['RCB', 'KKR', 'MI', 'SRH', 'DD', 'Kochi'],
    description: '2013 IPL champion with RCB, 23-wicket season, 6-team IPL veteran.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'makhaya_ntini',
    name: 'Makhaya Ntini',
    role: 'Bowler',
    country: 'South Africa',
    teams: ['CSK', 'MI', 'RCB', 'DD', 'KKR'],
    description: '2008 hat-trick for CSK vs KKR (4/21), South African pace pioneer, 2008 CSK finalist.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'lakshmipathy_balaji',
    name: 'Lakshmipathy Balaji',
    role: 'Bowler',
    country: 'India',
    teams: ['CSK', 'KXIP', 'KKR', 'KTK', 'PWI'],
    description: '2008 hat-trick (5/24) for KXIP vs KKR, inaugural IPL hat-trick taker, CSK 2008 finalist.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'rohit_sharma_deccan',
    name: 'Rohit Sharma (2008)',
    role: 'Batsman',
    country: 'India',
    teams: ['Deccan Chargers'],
    description: 'Played for Deccan Chargers in IPL 2008 before joining MI — purchased for USD 750,000 in inaugural auction.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'vaibhav_arora',
    name: 'Vaibhav Arora',
    role: 'Bowler',
    country: 'India',
    teams: ['KKR', 'PBKS', 'LSG'],
    description: 'Young Indian fast bowler, KKR 2024 IPL champion, 2025 buy at ₹1.8 crore, raw pace talent.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'angrish_raghuvanshi',
    name: 'Angkrish Raghuvanshi',
    role: 'Batsman',
    country: 'India',
    teams: ['KKR'],
    description: 'Young KKR batsman, ₹3 crore buy in IPL 2025, emerging India domestic star for KKR.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'harshit_rana',
    name: 'Harshit Rana',
    role: 'Bowler',
    country: 'India',
    teams: ['KKR', 'MI', 'SRH'],
    description: 'Young KKR paceman, 2024 IPL champion with KKR, key death-bowling option for KKR.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'ramandeep_singh',
    name: 'Ramandeep Singh',
    role: 'All-rounder',
    country: 'India',
    teams: ['MI', 'PBKS', 'KKR', 'SRH'],
    description: 'Indian all-rounder, KKR 2024 IPL champion, played for MI and PBKS previously.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'rinku_singh',
    name: 'Rinku Singh',
    role: 'Batsman',
    country: 'India',
    teams: ['KKR', 'SRH'],
    description: 'Rinku the Finisher, KKR 2024 champion, hit 5 consecutive sixes in final over vs GT (2023).',
    baseWeight: 1.4,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'gerald_coetzee',
    name: 'Gerald Coetzee',
    role: 'Bowler',
    country: 'South Africa',
    teams: ['RR', 'PBKS'],
    description: 'SA express bowler, RR 2025 buy at ₹2.4 crore, 150+ km/h pace for PBKS, fast-rising talent.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: true, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'sherfane_rutherford',
    name: 'Sherfane Rutherford',
    role: 'All-rounder',
    country: 'West Indies',
    teams: ['RR', 'MI', 'DC', 'LSG', 'SRH'],
    description: 'West Indian left-handed big-hitter, RR 2025 buy, played for MI (2019 champion), powerful finisher.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'glenn_phillips',
    name: 'Glenn Phillips',
    role: 'Wicketkeeper',
    country: 'New Zealand',
    teams: ['RR', 'MI', 'SRH', 'KKR'],
    description: 'NZ explosive wicketkeeper-batsman, RR 2025 buy, 360-degree hitter, played for MI and KKR.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'jake_fraser_mcgurk',
    name: 'Jake Fraser-McGurk',
    role: 'Batsman',
    country: 'Australia',
    teams: ['MI', 'DC', 'LSG'],
    description: 'Australian explosive opener, ₹9 crore buy for MI in 2025, rapid strike rate, fastest scorer.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'mukesh_kumar',
    name: 'Mukesh Kumar',
    role: 'Bowler',
    country: 'India',
    teams: ['MI', 'DC', 'GT', 'LSG'],
    description: 'Indian paceman, MI 2025 buy at ₹8 crore, previously with DC and GT, swing bowler.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: true, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'khaleel_ahmed',
    name: 'Khaleel Ahmed',
    role: 'Bowler',
    country: 'India',
    teams: ['CSK', 'SRH', 'DC', 'RR'],
    description: 'Left-arm paceman, CSK 2025 buy, previously SRH and DC, consistent swing option.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'arjun_tendulkar',
    name: 'Arjun Tendulkar',
    role: 'Bowler',
    country: 'India',
    teams: ['MI', 'PBKS', 'LSG'],
    description: 'Sachin Tendulkar\'s son, left-arm bowler, MI player, gained IPL experience across multiple seasons.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'divya',
    name: 'Rahul Tripathi',
    role: 'Batsman',
    country: 'India',
    teams: ['SRH', 'MI', 'KKR', 'RCB', 'PBKS'],
    description: 'Explosive Indian middle-order hitter, SRH consistent performer, 117 vs MI (2019), 360 hitter.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'akash_deep',
    name: 'Akash Deep',
    role: 'Bowler',
    country: 'India',
    teams: ['RCB', 'MI', 'DC', 'GT', 'LSG', 'PBKS'],
    description: 'Indian paceman, RCB consistent bowler, 2024 IPL season with RCB, swing specialist.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'dhruv_jurel',
    name: 'Dhruv Jurel',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['RR', 'MI'],
    description: 'Indian keeper-batsman, RR 2023 breakout, fought bravely vs England in Tests, reliable finisher.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'kshitish_shah',
    name: 'Kumar Kushagra',
    role: 'Wicketkeeper',
    country: 'India',
    teams: ['DC', 'SRH', 'KKR'],
    description: 'Young Indian wicketkeeper-batsman, DC roster, emerging talent from Indian domestic circuit.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: false, role_wk: true,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'naman_dhir',
    name: 'Naman Dhir',
    role: 'Batsman',
    country: 'India',
    teams: ['MI'],
    description: 'Young MI batsman, breakout IPL 2024 season with MI, powerful hitter in middle order.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'rohit_kumar_pendkar',
    name: 'Rohit Kumar',
    role: 'All-rounder',
    country: 'India',
    teams: ['PBKS', 'RR', 'MI', 'LSG'],
    description: 'Indian all-rounder, PBKS consistent player, useful medium pacer and handy batsman.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'shashank_singh',
    name: 'Shashank Singh',
    role: 'All-rounder',
    country: 'India',
    teams: ['RR', 'PBKS', 'SRH', 'DC'],
    description: 'Indian all-rounder, RR 2024 star with bat, 2024 season breakout, useful hitter and bowler.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'abhishek_sharma_sunrisers',
    name: 'Abhishek Sharma (SRH)',
    role: 'All-rounder',
    country: 'India',
    teams: ['SRH', 'DC'],
    description: 'Left-arm spinner and big-hitter, SRH consistent all-rounder, 141 vs DC in IPL 2022.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: true, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'tim_david',
    name: 'Tim David',
    role: 'Batsman',
    country: 'Australia',
    teams: ['MI', 'RCB', 'LSG', 'PBKS', 'SRH'],
    description: 'Australian big-hitter, MI finisher, 2023 IPL champion, massive six-striking power.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'liam_livingstone',
    name: 'Liam Livingstone',
    role: 'All-rounder',
    country: 'England',
    teams: ['RR', 'PBKS', 'RCB', 'LSG', 'MI'],
    description: 'English power-hitter, 117 vs SRH (2022), PBKS and RCB star, all-format British import.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: true, trait_finisher: true, trait_opener: true,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'marcus_stoinis',
    name: 'Marcus Stoinis',
    role: 'All-rounder',
    country: 'Australia',
    teams: ['KXIP', 'PBKS', 'LSG', 'DC', 'MI'],
    description: 'Australian all-rounder, 124* vs RCB (2019), LSG consistent performer, power-hitter.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'david_miller',
    name: 'David Miller',
    role: 'Batsman',
    country: 'South Africa',
    teams: ['GT', 'PBKS', 'RR', 'LSG'],
    description: 'South African power-hitter, GT 2022 finalist, 101* vs RCB (2019), consistent finisher.',
    baseWeight: 1.3,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: true, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: true, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'manish_pandey_2019',
    name: 'Manish Pandey (SRH)',
    role: 'Batsman',
    country: 'India',
    teams: ['SRH', 'KKR', 'MI', 'LSG', 'DC', 'RCB'],
    description: 'Indian middle-order stalwart, SRH captain 2020, 114* for KKR vs MI, consistent performer.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: true, stat_hattrick: false, stat_200plus_matches: true,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'shakib_al_hasan',
    name: 'Shakib Al Hasan',
    role: 'All-rounder',
    country: 'Bangladesh',
    teams: ['KKR', 'SRH', 'DC', 'MI'],
    description: 'Bangladesh superstar all-rounder, KKR 2012 finalist, 100+ IPL wickets and useful batsman.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: true,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'dwaine_pretorius',
    name: 'Dwaine Pretorius',
    role: 'All-rounder',
    country: 'South Africa',
    teams: ['MI', 'PBKS', 'RR', 'DC', 'LSG', 'SRH'],
    description: 'South African all-rounder, versatile with bat and ball, multiple IPL team appearances.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: true, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'jaydev_unadkat',
    name: 'Jaydev Unadkat',
    role: 'Bowler',
    country: 'India',
    teams: ['RR', 'MI', 'PBKS', 'SRH', 'LSG', 'RPS', 'GL'],
    description: '2017 hat-trick for RPS vs SRH (5/30), left-arm paceman, 7 IPL teams, consistent performer.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: true, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: true, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'prithvi_shaw',
    name: 'Prithvi Shaw',
    role: 'Batsman',
    country: 'India',
    teams: ['DC', 'MI', 'PBKS', 'RCB', 'LSG'],
    description: 'Explosive young Indian opener, 96 vs DC (2018), fastest 50 in IPL 2018, 100+ matches.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: false, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'kamlesht_nagarkoti',
    name: 'Kamlesh Nagarkoti',
    role: 'Bowler',
    country: 'India',
    teams: ['CSK', 'MI', 'PBKS', 'RCB', 'KKR', 'DC'],
    description: 'Raw Indian pace talent, 150+ km/h, CSK 2025 buy, previously with KKR and PBKS.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: false, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'shivam_mavi',
    name: 'Shivam Mavi',
    role: 'Bowler',
    country: 'India',
    teams: ['GT', 'KKR', 'PBKS', 'SRH', 'DC'],
    description: 'Indian paceman, 2023 U19 WC winner, GT consistent bowler, KKR 2018 U19 star.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: false, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'umesh_malik',
    name: 'Vikas Gulati',
    role: 'Bowler',
    country: 'India',
    teams: ['DD', 'RCB', 'KTK', 'MI', 'CSK', 'PBKS', 'SRH', 'LSG'],
    description: 'Indian paceman, 7-team IPL veteran, consistent performer across multiple seasons.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: false, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: true,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'mohammad_nabi',
    name: 'Mohammad Nabi',
    role: 'All-rounder',
    country: 'Afghanistan',
    teams: ['SRH', 'RCB', 'DC', 'KKR', 'MI'],
    description: 'Afghanistan all-rounder, 100+ IPL matches, useful spin and hard-hitting, team leader.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: false, role_allrounder: true, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: true,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'mujeeb_ur_rahman',
    name: 'Mujeeb Ur Rahman',
    role: 'Bowler',
    country: 'Afghanistan',
    teams: ['SRH', 'MI', 'RCB', 'GT', 'KKR', 'PBKS'],
    description: 'Afghanistan left-arm spinner, 100+ IPL wickets, MI and SRH consistent bowler.',
    baseWeight: 1.2,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: true, team_kkr: true, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: true, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: true, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  },
  {
    id: 'naveen_ul_haq',
    name: 'Naveen-ul-Haq',
    role: 'Bowler',
    country: 'Afghanistan',
    teams: ['MI', 'LSG', 'PBKS', 'RR'],
    description: 'Afghan young paceman, MI player, played for LSG and PBKS, consistent seam option.',
    baseWeight: 1.1,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: false, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: true,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: true, team_gt: false, team_lsg: true, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'faf_du_plessis_rr',
    name: 'Faf du Plessis (RR)',
    role: 'Batsman',
    country: 'South Africa',
    teams: ['RR', 'CSK'],
    description: 'RR captain 2024, 2023 IPL finalist, played for CSK, 2021 Player of Final.',
    baseWeight: 1.4,
    attributes: {
      isOverseas: true, role_batsman: true, role_bowler: false, role_allrounder: false, role_wk: false,
      status_active: true, status_retired: false, cap_captain: true, title_winner: true,
      award_orange_cap: false, award_purple_cap: false, team_csk: true, team_mi: false,
      team_rcb: false, team_kkr: false, team_srh_deccan: false, team_rr: true, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: false, style_spin_bowler: false, trait_finisher: false, trait_opener: true,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: false
    }
  },
  {
    id: 'tom_moody',
    name: 'Tom Moody',
    role: 'Bowler',
    country: 'Australia',
    teams: ['SRH', 'RCB'],
    description: 'Australian medium pacer, SRH bowling coach and mentor, 2016 IPL finalist with SRH.',
    baseWeight: 1.0,
    attributes: {
      isOverseas: true, role_batsman: false, role_bowler: true, role_allrounder: false, role_wk: false,
      status_active: false, status_retired: true, cap_captain: false, title_winner: false,
      award_orange_cap: false, award_purple_cap: false, team_csk: false, team_mi: false,
      team_rcb: true, team_kkr: false, team_srh_deccan: true, team_rr: false, team_dc_dd: false,
      team_pbks_kxip: false, team_gt: false, team_lsg: false, style_left_hand_bat: false,
      style_fast_bowler: true, style_spin_bowler: false, trait_finisher: false, trait_opener: false,
      trait_death_bowler: false, stat_century: false, stat_hattrick: false, stat_200plus_matches: false,
      stat_5000plus_runs: false, stat_100plus_wickets: true
    }
  }
];

export const getSavedPlayers = (): Player[] => {
  try {
    const customStr = localStorage.getItem('ipl_akinator_custom_players');
    if (customStr) {
      const customPlayers: Player[] = JSON.parse(customStr);
      const initialIds = new Set(INITIAL_PLAYERS.map(p => p.id));
      const validCustom = customPlayers.filter(p => !initialIds.has(p.id));
      return [...INITIAL_PLAYERS, ...validCustom];
    }
  } catch (e) {
    console.warn("Failed to parse custom players from localStorage", e);
  }
  return INITIAL_PLAYERS;
};

export const saveCustomPlayer = (player: Player) => {
  try {
    const current = getSavedPlayers();
    const updated = current.filter(p => p.id !== player.id);
    player.customAdded = true;
    updated.push(player);
    const customOnly = updated.filter(p => p.customAdded);
    localStorage.setItem('ipl_akinator_custom_players', JSON.stringify(customOnly));
  } catch (e) {
    console.error("Could not save custom player", e);
  }
};