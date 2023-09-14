export interface BeCategory {
  nm: BeDivision;
  dor: number;
  ars: { aid: number }[];
  cut: number;
}
export interface BeEvent {
  id: number;
  display_order: number;
  event_type: BeEventType;
  event_name: string;
}
export interface BeTournamet {
  id: number;
  tournament_name: string;
  location: string;
  start_date: string;
  end_date: string;
  updated_at: string;
  events: BeEvent[];
}

export interface BeAth {
  aid: number;
  alt: string;
  cnd: BeDivision;
  fnm: string;
  lnm: string;
  tgt: string;
  tm: string;
  tnl: number[];
}

export interface BeEventObj {
  ape: number /** arrows per end */;
  cgs: {
    ars: { aid: number /** athlete id */ }[] /** athlete results */;
    cut: number;
    dor: number;
    nm: string /** category name */;
  }[];
  dld: number;
  dor: number;
  enm: string /** stage eg.Qualification */;
  epr: number /** ends per round */;
  etp: BeEventType /** event type */;
  fita: boolean;
  id: number;
  nos: number;
  rds: number /** rounds */;
  rps?: {
    [arg0: number]: BeAth;
  } /** athletes */;
  srl: number;
  stb: boolean;
  tdt?: string /** tournament date range - (moabbr dd, yyyy) */;
  tlc: string /** location - place, city, state abbr */;
  tnl: {
    [arg0: number]: {
      id: number /** event field / sub event id */;
      nm: string /** event field / sub event / date */;
    };
  } /** athletes */;
  tnm: string /** tournament name */;
}

export interface BeScoresObj {
  ars: {
    [
      arg0: number /** athlete id */
    ]: string /** arrow values - no spaces 1-9, M, T, X */;
  } /** athlete results */;
}

// ARCHENEMY -> BE FETCH TYPES
//////////////////////////////

export interface AthleteEventProfile {
  aid: number;
  alt: string;
  cnd:
    | "CMM"
    | "CMW"
    | "RMM"
    | "RMW"
    | "CSM"
    | "CSW"
    | "RSM"
    | "RSW"
    | "CJM"
    | "CJW"
    | "RJM"
    | "RJW"
    | "CCM"
    | "CCW"
    | "CRM"
    | "CRW";
  fnm: string;
  lnm: string;
  tgt: string;
  tm: string;
  tnl: number[];
  start: string;
  end: string;
  comp_id: number;
  arrows_per_end: number;
  name: string;
  place: string;
  ends: number[][];
  stats: any;
}

export enum BeEndpoint {
  tournaments = "tournaments",
  events = "events",
}
export enum BeEventType {
  RankingEvent = "RankingEvent",
  MatchEvent = "MatchEvent",
  CustomPointsEvent = "CustomPointsEvent",
}
export enum BeDivision {
  RSM = "RSM", // Recurve Senior Men
  RU21M = "RU21M", // Recurve U21 (Junior) Men
  RU18M = "RU18M", // Recurve U18 (Cadet) Men
  RU15M = "RU15M", // Recurve U15 (Cub) Men
  RU13M = "RU13M", // Recurve U13 (Bowman) Men
  RYM = "RYM", // Recurve Yeoman Men
  REM = "REM", // Recurve Explorer Men
  R5M = "R5M", // Recurve 50+ (Master) Men
  R6M = "R6M", // Recurve 60+ (Master 60) Men
  R7M = "R7M", // Recurve 70+ (Master 70) Men
  RCM = "RCM", // Recurve College Men
  ROM = "ROM", // Recurve Open Men

  RSW = "RSW", // Recurve Senior Women
  RU21W = "RU21W", // Recurve U21 (Junior) Women
  RU18W = "RU18W", // Recurve U18 (Cadet) Women
  RU15W = "RU15W", // Recurve U15 (Cub) Women
  RU13W = "RU13W", // Recurve U13 (Bowman) Women
  RYW = "RYW", // Recurve Yeoman Women
  REW = "REW", // Recurve Explorer Women
  R5W = "R5W", // Recurve 50+ (Master) Women
  R6W = "R6W", // Recurve 60+ (Master 60) Women
  R7W = "R7W", // Recurve 70+ (Master 70) Women
  RCW = "RCW", // Recurve College Women
  ROW = "ROW", // Recurve Open Women

  CSM = "CSM", // Compound Senior Men
  CU21M = "CU21M", // Compound U21 (Junior) Men
  CU18M = "CU18M", // Compound U18 (Cadet) Men
  CU15M = "CU15M", // Compound U15 (Cub) Men
  CU13M = "CU13M", // Compound U13 (Bowman) Men
  CYM = "CYM", // Compound Yeoman Men
  CEM = "CEM", // Compound Explorer Men
  C5M = "C5M", // Compound 50+ (Master) Men
  C6M = "C6M", // Compound 60+ (Master 60) Men
  C7M = "C7M", // Compound 70+ (Master 70) Men
  CCM = "CCM", // Compound College Men
  COM = "COM", // Compound Open Men

  CSW = "CSW", // Compound Senior Women
  CU21W = "CU21W", // Compound U21 (Junior) Women
  CU18W = "CU18W", // Compound U18 (Cadet) Women
  CU15W = "CU15W", // Compound U15 (Cub) Women
  CU13W = "CU13W", // Compound U13 (Bowman) Women
  CYW = "CYW", // Compound Yeoman Women
  CEW = "CEW", // Compound Explorer Women
  C5W = "C5W", // Compound 50+ (Master) Women
  C6W = "C6W", // Compound 60+ (Master 60) Women
  C7W = "C7W", // Compound 70+ (Master 70) Women
  CCW = "CCW", // Compound College Women
  COW = "COW", // Compound Open Women

  W1O = "W1O", // W1 Open

  VIO = "VIO", // V.I. Open

  BSM = "BSM", // Barebow Senior Men
  BU21M = "BU21M", // Barebow U21 (Junior) Men
  BU18M = "BU18M", // Barebow U18 (Cadet) Men
  BU15M = "BU15M", // Barebow U15 (Cub) Men
  B5M = "B5M", // Barebow 50+ (Master) Men

  BSW = "BSW", // Barebow Senior Women
  BU21W = "BU21W", // Barebow U21 (Junior) Women
  BU18W = "BU18W", // Barebow U18 (Cadet) Women
  BU15W = "BU15W", // Barebow U15 (Cub) Women
  B5W = "B5W", // Barebow 50+ (Master) Women

  FU21M = "FU21M", // Fixed Pins U21 Men
  FU18M = "FU18M", // Fixed Pins U18 Men

  FU21W = "FU21W", // Fixed Pins U21 Women
  FU18W = "FU18W", // Fixed Pins U18 Women

  HBM = "HBM",
}

export interface EventProfile {
  start: string | undefined;
  end: string | undefined;
  comp_id: number;
  arrows_per_end: number;
  name: string;
  place: string;
  event_type: BeEventType;
}
