import type { SelectionSetNode, DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: { input: string; output: string };
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string };
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean };
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number };
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number };
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  statuses: Array<Status>;
  statusesConnection: StatusesConnection;
  statusesAggregate: StatusAggregateSelection;
  users: Array<User>;
  usersConnection: UsersConnection;
  usersAggregate: UserAggregateSelection;
  projects: Array<Project>;
  projectsConnection: ProjectsConnection;
  projectsAggregate: ProjectAggregateSelection;
  impacts: Array<Impact>;
  impactsConnection: ImpactsConnection;
  impactsAggregate: ImpactAggregateSelection;
  impactAreas: Array<ImpactArea>;
  impactAreasConnection: ImpactAreasConnection;
  impactAreasAggregate: ImpactAreaAggregateSelection;
  impactCategories: Array<ImpactCategory>;
  impactCategoriesConnection: ImpactCategoriesConnection;
  impactCategoriesAggregate: ImpactCategoryAggregateSelection;
  doughnutCategories: Array<DoughnutCategory>;
  doughnutCategoriesConnection: DoughnutCategoriesConnection;
  doughnutCategoriesAggregate: DoughnutCategoryAggregateSelection;
  contexts: Array<Context>;
  contextsConnection: ContextsConnection;
  contextsAggregate: ContextAggregateSelection;
  geoContexts: Array<GeoContext>;
  geoContextsConnection: GeoContextsConnection;
  geoContextsAggregate: GeoContextAggregateSelection;
};

export type QueryStatusesArgs = {
  where?: InputMaybe<StatusWhere>;
  options?: InputMaybe<StatusOptions>;
};

export type QueryStatusesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<StatusWhere>;
  sort?: InputMaybe<Array<InputMaybe<StatusSort>>>;
};

export type QueryStatusesAggregateArgs = {
  where?: InputMaybe<StatusWhere>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
};

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<UserWhere>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryProjectsArgs = {
  where?: InputMaybe<ProjectWhere>;
  options?: InputMaybe<ProjectOptions>;
};

export type QueryProjectsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ProjectWhere>;
  sort?: InputMaybe<Array<InputMaybe<ProjectSort>>>;
};

export type QueryProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
};

export type QueryImpactsArgs = {
  where?: InputMaybe<ImpactWhere>;
  options?: InputMaybe<ImpactOptions>;
};

export type QueryImpactsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ImpactWhere>;
  sort?: InputMaybe<Array<InputMaybe<ImpactSort>>>;
};

export type QueryImpactsAggregateArgs = {
  where?: InputMaybe<ImpactWhere>;
};

export type QueryImpactAreasArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
  options?: InputMaybe<ImpactAreaOptions>;
};

export type QueryImpactAreasConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ImpactAreaWhere>;
  sort?: InputMaybe<Array<InputMaybe<ImpactAreaSort>>>;
};

export type QueryImpactAreasAggregateArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
};

export type QueryImpactCategoriesArgs = {
  where?: InputMaybe<ImpactCategoryWhere>;
  options?: InputMaybe<ImpactCategoryOptions>;
};

export type QueryImpactCategoriesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ImpactCategoryWhere>;
  sort?: InputMaybe<Array<InputMaybe<ImpactCategorySort>>>;
};

export type QueryImpactCategoriesAggregateArgs = {
  where?: InputMaybe<ImpactCategoryWhere>;
};

export type QueryDoughnutCategoriesArgs = {
  where?: InputMaybe<DoughnutCategoryWhere>;
  options?: InputMaybe<DoughnutCategoryOptions>;
};

export type QueryDoughnutCategoriesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<DoughnutCategoryWhere>;
  sort?: InputMaybe<Array<InputMaybe<DoughnutCategorySort>>>;
};

export type QueryDoughnutCategoriesAggregateArgs = {
  where?: InputMaybe<DoughnutCategoryWhere>;
};

export type QueryContextsArgs = {
  where?: InputMaybe<ContextWhere>;
  options?: InputMaybe<ContextOptions>;
};

export type QueryContextsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ContextWhere>;
  sort?: InputMaybe<Array<InputMaybe<ContextSort>>>;
};

export type QueryContextsAggregateArgs = {
  where?: InputMaybe<ContextWhere>;
};

export type QueryGeoContextsArgs = {
  where?: InputMaybe<GeoContextWhere>;
  options?: InputMaybe<GeoContextOptions>;
};

export type QueryGeoContextsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<GeoContextWhere>;
  sort?: InputMaybe<Array<InputMaybe<GeoContextSort>>>;
};

export type QueryGeoContextsAggregateArgs = {
  where?: InputMaybe<GeoContextWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createStatuses: CreateStatusesMutationResponse;
  deleteStatuses: DeleteInfo;
  updateStatuses: UpdateStatusesMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteUsers: DeleteInfo;
  updateUsers: UpdateUsersMutationResponse;
  createProjects: CreateProjectsMutationResponse;
  deleteProjects: DeleteInfo;
  updateProjects: UpdateProjectsMutationResponse;
  createImpacts: CreateImpactsMutationResponse;
  deleteImpacts: DeleteInfo;
  updateImpacts: UpdateImpactsMutationResponse;
  createImpactAreas: CreateImpactAreasMutationResponse;
  deleteImpactAreas: DeleteInfo;
  updateImpactAreas: UpdateImpactAreasMutationResponse;
  createImpactCategories: CreateImpactCategoriesMutationResponse;
  deleteImpactCategories: DeleteInfo;
  updateImpactCategories: UpdateImpactCategoriesMutationResponse;
  createDoughnutCategories: CreateDoughnutCategoriesMutationResponse;
  deleteDoughnutCategories: DeleteInfo;
  updateDoughnutCategories: UpdateDoughnutCategoriesMutationResponse;
  createContexts: CreateContextsMutationResponse;
  deleteContexts: DeleteInfo;
  updateContexts: UpdateContextsMutationResponse;
  createGeoContexts: CreateGeoContextsMutationResponse;
  deleteGeoContexts: DeleteInfo;
  updateGeoContexts: UpdateGeoContextsMutationResponse;
};

export type MutationCreateStatusesArgs = {
  input: Array<StatusCreateInput>;
};

export type MutationDeleteStatusesArgs = {
  where?: InputMaybe<StatusWhere>;
  delete?: InputMaybe<StatusDeleteInput>;
};

export type MutationUpdateStatusesArgs = {
  where?: InputMaybe<StatusWhere>;
  update?: InputMaybe<StatusUpdateInput>;
  connect?: InputMaybe<StatusConnectInput>;
  disconnect?: InputMaybe<StatusDisconnectInput>;
  create?: InputMaybe<StatusRelationInput>;
  delete?: InputMaybe<StatusDeleteInput>;
  connectOrCreate?: InputMaybe<StatusConnectOrCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
};

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
};

export type MutationCreateProjectsArgs = {
  input: Array<ProjectCreateInput>;
};

export type MutationDeleteProjectsArgs = {
  where?: InputMaybe<ProjectWhere>;
  delete?: InputMaybe<ProjectDeleteInput>;
};

export type MutationUpdateProjectsArgs = {
  where?: InputMaybe<ProjectWhere>;
  update?: InputMaybe<ProjectUpdateInput>;
  connect?: InputMaybe<ProjectConnectInput>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
  create?: InputMaybe<ProjectRelationInput>;
  delete?: InputMaybe<ProjectDeleteInput>;
  connectOrCreate?: InputMaybe<ProjectConnectOrCreateInput>;
};

export type MutationCreateImpactsArgs = {
  input: Array<ImpactCreateInput>;
};

export type MutationDeleteImpactsArgs = {
  where?: InputMaybe<ImpactWhere>;
  delete?: InputMaybe<ImpactDeleteInput>;
};

export type MutationUpdateImpactsArgs = {
  where?: InputMaybe<ImpactWhere>;
  update?: InputMaybe<ImpactUpdateInput>;
  connect?: InputMaybe<ImpactConnectInput>;
  disconnect?: InputMaybe<ImpactDisconnectInput>;
  create?: InputMaybe<ImpactRelationInput>;
  delete?: InputMaybe<ImpactDeleteInput>;
  connectOrCreate?: InputMaybe<ImpactConnectOrCreateInput>;
};

export type MutationCreateImpactAreasArgs = {
  input: Array<ImpactAreaCreateInput>;
};

export type MutationDeleteImpactAreasArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
  delete?: InputMaybe<ImpactAreaDeleteInput>;
};

export type MutationUpdateImpactAreasArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
  update?: InputMaybe<ImpactAreaUpdateInput>;
  connect?: InputMaybe<ImpactAreaConnectInput>;
  disconnect?: InputMaybe<ImpactAreaDisconnectInput>;
  create?: InputMaybe<ImpactAreaRelationInput>;
  delete?: InputMaybe<ImpactAreaDeleteInput>;
  connectOrCreate?: InputMaybe<ImpactAreaConnectOrCreateInput>;
};

export type MutationCreateImpactCategoriesArgs = {
  input: Array<ImpactCategoryCreateInput>;
};

export type MutationDeleteImpactCategoriesArgs = {
  where?: InputMaybe<ImpactCategoryWhere>;
  delete?: InputMaybe<ImpactCategoryDeleteInput>;
};

export type MutationUpdateImpactCategoriesArgs = {
  where?: InputMaybe<ImpactCategoryWhere>;
  update?: InputMaybe<ImpactCategoryUpdateInput>;
  connect?: InputMaybe<ImpactCategoryConnectInput>;
  disconnect?: InputMaybe<ImpactCategoryDisconnectInput>;
  create?: InputMaybe<ImpactCategoryRelationInput>;
  delete?: InputMaybe<ImpactCategoryDeleteInput>;
  connectOrCreate?: InputMaybe<ImpactCategoryConnectOrCreateInput>;
};

export type MutationCreateDoughnutCategoriesArgs = {
  input: Array<DoughnutCategoryCreateInput>;
};

export type MutationDeleteDoughnutCategoriesArgs = {
  where?: InputMaybe<DoughnutCategoryWhere>;
  delete?: InputMaybe<DoughnutCategoryDeleteInput>;
};

export type MutationUpdateDoughnutCategoriesArgs = {
  where?: InputMaybe<DoughnutCategoryWhere>;
  update?: InputMaybe<DoughnutCategoryUpdateInput>;
  connect?: InputMaybe<DoughnutCategoryConnectInput>;
  disconnect?: InputMaybe<DoughnutCategoryDisconnectInput>;
  create?: InputMaybe<DoughnutCategoryRelationInput>;
  delete?: InputMaybe<DoughnutCategoryDeleteInput>;
  connectOrCreate?: InputMaybe<DoughnutCategoryConnectOrCreateInput>;
};

export type MutationCreateContextsArgs = {
  input: Array<ContextCreateInput>;
};

export type MutationDeleteContextsArgs = {
  where?: InputMaybe<ContextWhere>;
  delete?: InputMaybe<ContextDeleteInput>;
};

export type MutationUpdateContextsArgs = {
  where?: InputMaybe<ContextWhere>;
  update?: InputMaybe<ContextUpdateInput>;
  connect?: InputMaybe<ContextConnectInput>;
  disconnect?: InputMaybe<ContextDisconnectInput>;
  create?: InputMaybe<ContextRelationInput>;
  delete?: InputMaybe<ContextDeleteInput>;
  connectOrCreate?: InputMaybe<ContextConnectOrCreateInput>;
};

export type MutationCreateGeoContextsArgs = {
  input: Array<GeoContextCreateInput>;
};

export type MutationDeleteGeoContextsArgs = {
  where?: InputMaybe<GeoContextWhere>;
  delete?: InputMaybe<GeoContextDeleteInput>;
};

export type MutationUpdateGeoContextsArgs = {
  where?: InputMaybe<GeoContextWhere>;
  update?: InputMaybe<GeoContextUpdateInput>;
  connect?: InputMaybe<GeoContextConnectInput>;
  disconnect?: InputMaybe<GeoContextDisconnectInput>;
  create?: InputMaybe<GeoContextRelationInput>;
  delete?: InputMaybe<GeoContextDeleteInput>;
  connectOrCreate?: InputMaybe<GeoContextConnectOrCreateInput>;
};

export enum DoughnutCategoryName {
  Social = "SOCIAL",
  Ecological = "ECOLOGICAL",
}

export enum ImpactCategoryName {
  Atmosphere = "ATMOSPHERE",
  ChemicalWasteAndSupplyChains = "CHEMICAL_WASTE_AND_SUPPLY_CHAINS",
  EnvironmentalPreservation = "ENVIRONMENTAL_PRESERVATION",
  BasicServices = "BASIC_SERVICES",
  SocialOpportunities = "SOCIAL_OPPORTUNITIES",
  SocialRights = "SOCIAL_RIGHTS",
}

export enum NationCode {
  Afg = "AFG",
  Ala = "ALA",
  Alb = "ALB",
  Dza = "DZA",
  Asm = "ASM",
  And = "AND",
  Ago = "AGO",
  Aia = "AIA",
  Ata = "ATA",
  Atg = "ATG",
  Arg = "ARG",
  Arm = "ARM",
  Abw = "ABW",
  Aus = "AUS",
  Aut = "AUT",
  Aze = "AZE",
  Bhs = "BHS",
  Bhr = "BHR",
  Bgd = "BGD",
  Brb = "BRB",
  Blr = "BLR",
  Bel = "BEL",
  Blz = "BLZ",
  Ben = "BEN",
  Bmu = "BMU",
  Btn = "BTN",
  Bol = "BOL",
  Bih = "BIH",
  Bwa = "BWA",
  Bvt = "BVT",
  Bra = "BRA",
  Vgb = "VGB",
  Iot = "IOT",
  Brn = "BRN",
  Bgr = "BGR",
  Bfa = "BFA",
  Bdi = "BDI",
  Khm = "KHM",
  Cmr = "CMR",
  Can = "CAN",
  Cpv = "CPV",
  Cym = "CYM",
  Caf = "CAF",
  Tcd = "TCD",
  Chl = "CHL",
  Chn = "CHN",
  Hkg = "HKG",
  Mac = "MAC",
  Cxr = "CXR",
  Cck = "CCK",
  Col = "COL",
  Com = "COM",
  Cog = "COG",
  Cod = "COD",
  Cok = "COK",
  Cri = "CRI",
  Civ = "CIV",
  Hrv = "HRV",
  Cub = "CUB",
  Cyp = "CYP",
  Cze = "CZE",
  Dnk = "DNK",
  Dji = "DJI",
  Dma = "DMA",
  Dom = "DOM",
  Ecu = "ECU",
  Egy = "EGY",
  Slv = "SLV",
  Gnq = "GNQ",
  Eri = "ERI",
  Est = "EST",
  Eth = "ETH",
  Flk = "FLK",
  Fro = "FRO",
  Fji = "FJI",
  Fin = "FIN",
  Fra = "FRA",
  Guf = "GUF",
  Pyf = "PYF",
  Atf = "ATF",
  Gab = "GAB",
  Gmb = "GMB",
  Geo = "GEO",
  Deu = "DEU",
  Gha = "GHA",
  Gib = "GIB",
  Grc = "GRC",
  Grl = "GRL",
  Grd = "GRD",
  Glp = "GLP",
  Gum = "GUM",
  Gtm = "GTM",
  Ggy = "GGY",
  Gin = "GIN",
  Gnb = "GNB",
  Guy = "GUY",
  Hti = "HTI",
  Hmd = "HMD",
  Vat = "VAT",
  Hnd = "HND",
  Hun = "HUN",
  Isl = "ISL",
  Ind = "IND",
  Idn = "IDN",
  Irn = "IRN",
  Irq = "IRQ",
  Irl = "IRL",
  Imn = "IMN",
  Isr = "ISR",
  Ita = "ITA",
  Jm = "JM",
  Jpn = "JPN",
  Jey = "JEY",
  Jor = "JOR",
  Kaz = "KAZ",
  Ken = "KEN",
  Kir = "KIR",
  Prk = "PRK",
  Kor = "KOR",
  Kwt = "KWT",
  Kgz = "KGZ",
  Lao = "LAO",
  Lva = "LVA",
  Lbn = "LBN",
  Lso = "LSO",
  Lbr = "LBR",
  Lby = "LBY",
  Lie = "LIE",
  Ltu = "LTU",
  Lux = "LUX",
  Mkd = "MKD",
  Mdg = "MDG",
  Mwi = "MWI",
  Mys = "MYS",
  Mdv = "MDV",
  Mli = "MLI",
  Mlt = "MLT",
  Mhl = "MHL",
  Mtq = "MTQ",
  Mrt = "MRT",
  Mus = "MUS",
  Myt = "MYT",
  Mex = "MEX",
  Fsm = "FSM",
  Mda = "MDA",
  Mco = "MCO",
  Mng = "MNG",
  Mne = "MNE",
  Msr = "MSR",
  Mar = "MAR",
  Moz = "MOZ",
  Mmr = "MMR",
  Nam = "NAM",
  Nru = "NRU",
  Npl = "NPL",
  Nld = "NLD",
  Ant = "ANT",
  Ncl = "NCL",
  Nzl = "NZL",
  Nic = "NIC",
  Ner = "NER",
  Nga = "NGA",
  Niu = "NIU",
  Nfk = "NFK",
  Mnp = "MNP",
  Nor = "NOR",
  Omn = "OMN",
  Pak = "PAK",
  Plw = "PLW",
  Pse = "PSE",
  Pan = "PAN",
  Png = "PNG",
  Pry = "PRY",
  Per = "PER",
  Phl = "PHL",
  Pcn = "PCN",
  Pol = "POL",
  Prt = "PRT",
  Pri = "PRI",
  Qat = "QAT",
  Reu = "REU",
  Rou = "ROU",
  Rus = "RUS",
  Rwa = "RWA",
  Blm = "BLM",
  Shn = "SHN",
  Kna = "KNA",
  Lca = "LCA",
  Maf = "MAF",
  Spm = "SPM",
  Vct = "VCT",
  Wsm = "WSM",
  Smr = "SMR",
  Stp = "STP",
  Sau = "SAU",
  Sen = "SEN",
  Srb = "SRB",
  Syc = "SYC",
  Sle = "SLE",
  Sgp = "SGP",
  Svk = "SVK",
  Svn = "SVN",
  Slb = "SLB",
  Som = "SOM",
  Zaf = "ZAF",
  Sgs = "SGS",
  Ssd = "SSD",
  Esp = "ESP",
  Lka = "LKA",
  Sdn = "SDN",
  Sur = "SUR",
  Sjm = "SJM",
  Swz = "SWZ",
  Swe = "SWE",
  Che = "CHE",
  Syr = "SYR",
  Twn = "TWN",
  Tjk = "TJK",
  Tza = "TZA",
  Tha = "THA",
  Tls = "TLS",
  Tgo = "TGO",
  Tkl = "TKL",
  Ton = "TON",
  Tto = "TTO",
  Tun = "TUN",
  Tur = "TUR",
  Tkm = "TKM",
  Tca = "TCA",
  Tuv = "TUV",
  Uga = "UGA",
  Ukr = "UKR",
  Are = "ARE",
  Gbr = "GBR",
  Usa = "USA",
  Umi = "UMI",
  Ury = "URY",
  Uzb = "UZB",
  Vut = "VUT",
  Ven = "VEN",
  Vnm = "VNM",
  Vir = "VIR",
  Wlf = "WLF",
  Esh = "ESH",
  Yem = "YEM",
  Zmb = "ZMB",
  Zwe = "ZWE",
}

export enum ProjectStatus {
  Created = "CREATED",
  InferringLocationContext = "INFERRING_LOCATION_CONTEXT",
  InferringRippleContext = "INFERRING_RIPPLE_CONTEXT",
  EvaluatingImpacts = "EVALUATING_IMPACTS",
  Error = "ERROR",
  Done = "DONE",
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type UnifiedContext = Context | GeoContext;

export type ImpactOn = {
  aspect: Scalars["String"]["output"];
  reason: Scalars["String"]["output"];
  score?: Maybe<Scalars["Float"]["output"]>;
};

export type ProjectImpacts = {
  description: Scalars["String"]["output"];
};

export type ProjectStatusDetails = {
  message?: Maybe<Scalars["String"]["output"]>;
  dump?: Maybe<Scalars["String"]["output"]>;
  timestamp: Scalars["DateTime"]["output"];
};

export type UserInteractionDetails = {
  message?: Maybe<Scalars["String"]["output"]>;
  dump?: Maybe<Scalars["String"]["output"]>;
  timestamp: Scalars["DateTime"]["output"];
};

export type Context = {
  __typename?: "Context";
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  description: Scalars["String"]["output"];
  projects: Array<Project>;
  projectsAggregate?: Maybe<ContextProjectProjectsAggregationSelection>;
  impacts: Array<Impact>;
  impactsAggregate?: Maybe<ContextImpactImpactsAggregationSelection>;
  projectsConnection: ContextProjectsConnection;
  impactsConnection: ContextImpactsConnection;
};

export type ContextProjectsArgs = {
  where?: InputMaybe<ProjectWhere>;
  options?: InputMaybe<ProjectOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContextProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContextImpactsArgs = {
  where?: InputMaybe<ImpactWhere>;
  options?: InputMaybe<ImpactOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContextImpactsAggregateArgs = {
  where?: InputMaybe<ImpactWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ContextProjectsConnectionArgs = {
  where?: InputMaybe<ContextProjectsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ContextProjectsConnectionSort>>;
};

export type ContextImpactsConnectionArgs = {
  where?: InputMaybe<ContextImpactsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ContextImpactsConnectionSort>>;
};

export type ContextAggregateSelection = {
  __typename?: "ContextAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNonNullable;
};

export type ContextEdge = {
  __typename?: "ContextEdge";
  cursor: Scalars["String"]["output"];
  node: Context;
};

export type ContextImpactImpactsAggregationSelection = {
  __typename?: "ContextImpactImpactsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ContextImpactImpactsNodeAggregateSelection>;
  edge?: Maybe<ContextImpactImpactsEdgeAggregateSelection>;
};

export type ContextImpactImpactsEdgeAggregateSelection = {
  __typename?: "ContextImpactImpactsEdgeAggregateSelection";
  aspect: StringAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  score: FloatAggregateSelectionNullable;
};

export type ContextImpactImpactsNodeAggregateSelection = {
  __typename?: "ContextImpactImpactsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
};

export type ContextImpactsConnection = {
  __typename?: "ContextImpactsConnection";
  edges: Array<ContextImpactsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ContextImpactsRelationship = ImpactOn & {
  __typename?: "ContextImpactsRelationship";
  cursor: Scalars["String"]["output"];
  node: Impact;
  aspect: Scalars["String"]["output"];
  reason: Scalars["String"]["output"];
  score?: Maybe<Scalars["Float"]["output"]>;
};

export type ContextProjectProjectsAggregationSelection = {
  __typename?: "ContextProjectProjectsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ContextProjectProjectsNodeAggregateSelection>;
  edge?: Maybe<ContextProjectProjectsEdgeAggregateSelection>;
};

export type ContextProjectProjectsEdgeAggregateSelection = {
  __typename?: "ContextProjectProjectsEdgeAggregateSelection";
  description: StringAggregateSelectionNonNullable;
};

export type ContextProjectProjectsNodeAggregateSelection = {
  __typename?: "ContextProjectProjectsNodeAggregateSelection";
  id: IdAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
  problem: StringAggregateSelectionNullable;
  solution: StringAggregateSelectionNullable;
  employees: StringAggregateSelectionNullable;
  context: StringAggregateSelectionNullable;
};

export type ContextProjectsConnection = {
  __typename?: "ContextProjectsConnection";
  edges: Array<ContextProjectsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ContextProjectsRelationship = ProjectImpacts & {
  __typename?: "ContextProjectsRelationship";
  cursor: Scalars["String"]["output"];
  node: Project;
  description: Scalars["String"]["output"];
};

export type ContextsConnection = {
  __typename?: "ContextsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ContextEdge>;
};

export type CreateContextsMutationResponse = {
  __typename?: "CreateContextsMutationResponse";
  info: CreateInfo;
  contexts: Array<Context>;
};

export type CreateDoughnutCategoriesMutationResponse = {
  __typename?: "CreateDoughnutCategoriesMutationResponse";
  info: CreateInfo;
  doughnutCategories: Array<DoughnutCategory>;
};

export type CreateGeoContextsMutationResponse = {
  __typename?: "CreateGeoContextsMutationResponse";
  info: CreateInfo;
  geoContexts: Array<GeoContext>;
};

export type CreateImpactAreasMutationResponse = {
  __typename?: "CreateImpactAreasMutationResponse";
  info: CreateInfo;
  impactAreas: Array<ImpactArea>;
};

export type CreateImpactCategoriesMutationResponse = {
  __typename?: "CreateImpactCategoriesMutationResponse";
  info: CreateInfo;
  impactCategories: Array<ImpactCategory>;
};

export type CreateImpactsMutationResponse = {
  __typename?: "CreateImpactsMutationResponse";
  info: CreateInfo;
  impacts: Array<Impact>;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateProjectsMutationResponse = {
  __typename?: "CreateProjectsMutationResponse";
  info: CreateInfo;
  projects: Array<Project>;
};

export type CreateStatusesMutationResponse = {
  __typename?: "CreateStatusesMutationResponse";
  info: CreateInfo;
  statuses: Array<Status>;
};

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse";
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: "DateTimeAggregateSelectionNonNullable";
  min: Scalars["DateTime"]["output"];
  max: Scalars["DateTime"]["output"];
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type DoughnutCategoriesConnection = {
  __typename?: "DoughnutCategoriesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<DoughnutCategoryEdge>;
};

export type DoughnutCategory = {
  __typename?: "DoughnutCategory";
  name: Scalars["String"]["output"];
  uniqueName: DoughnutCategoryName;
  impactAreaCategories: Array<ImpactCategory>;
  impactAreaCategoriesAggregate?: Maybe<DoughnutCategoryImpactCategoryImpactAreaCategoriesAggregationSelection>;
  impactAreaCategoriesConnection: DoughnutCategoryImpactAreaCategoriesConnection;
};

export type DoughnutCategoryImpactAreaCategoriesArgs = {
  where?: InputMaybe<ImpactCategoryWhere>;
  options?: InputMaybe<ImpactCategoryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DoughnutCategoryImpactAreaCategoriesAggregateArgs = {
  where?: InputMaybe<ImpactCategoryWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DoughnutCategoryImpactAreaCategoriesConnectionArgs = {
  where?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectionSort>>;
};

export type DoughnutCategoryAggregateSelection = {
  __typename?: "DoughnutCategoryAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNonNullable;
};

export type DoughnutCategoryEdge = {
  __typename?: "DoughnutCategoryEdge";
  cursor: Scalars["String"]["output"];
  node: DoughnutCategory;
};

export type DoughnutCategoryImpactAreaCategoriesConnection = {
  __typename?: "DoughnutCategoryImpactAreaCategoriesConnection";
  edges: Array<DoughnutCategoryImpactAreaCategoriesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type DoughnutCategoryImpactAreaCategoriesRelationship = {
  __typename?: "DoughnutCategoryImpactAreaCategoriesRelationship";
  cursor: Scalars["String"]["output"];
  node: ImpactCategory;
};

export type DoughnutCategoryImpactCategoryImpactAreaCategoriesAggregationSelection =
  {
    __typename?: "DoughnutCategoryImpactCategoryImpactAreaCategoriesAggregationSelection";
    count: Scalars["Int"]["output"];
    node?: Maybe<DoughnutCategoryImpactCategoryImpactAreaCategoriesNodeAggregateSelection>;
  };

export type DoughnutCategoryImpactCategoryImpactAreaCategoriesNodeAggregateSelection =
  {
    __typename?: "DoughnutCategoryImpactCategoryImpactAreaCategoriesNodeAggregateSelection";
    name: StringAggregateSelectionNonNullable;
  };

export type FloatAggregateSelectionNullable = {
  __typename?: "FloatAggregateSelectionNullable";
  max?: Maybe<Scalars["Float"]["output"]>;
  min?: Maybe<Scalars["Float"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Float"]["output"]>;
};

export type GeoContext = {
  __typename?: "GeoContext";
  id?: Maybe<Scalars["ID"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  state?: Maybe<Scalars["String"]["output"]>;
  city?: Maybe<Scalars["String"]["output"]>;
  description: Scalars["String"]["output"];
  nation?: Maybe<NationCode>;
  projects: Array<Project>;
  projectsAggregate?: Maybe<GeoContextProjectProjectsAggregationSelection>;
  impacts: Array<Impact>;
  impactsAggregate?: Maybe<GeoContextImpactImpactsAggregationSelection>;
  projectsConnection: GeoContextProjectsConnection;
  impactsConnection: GeoContextImpactsConnection;
};

export type GeoContextProjectsArgs = {
  where?: InputMaybe<ProjectWhere>;
  options?: InputMaybe<ProjectOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type GeoContextProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type GeoContextImpactsArgs = {
  where?: InputMaybe<ImpactWhere>;
  options?: InputMaybe<ImpactOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type GeoContextImpactsAggregateArgs = {
  where?: InputMaybe<ImpactWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type GeoContextProjectsConnectionArgs = {
  where?: InputMaybe<GeoContextProjectsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<GeoContextProjectsConnectionSort>>;
};

export type GeoContextImpactsConnectionArgs = {
  where?: InputMaybe<GeoContextImpactsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<GeoContextImpactsConnectionSort>>;
};

export type GeoContextAggregateSelection = {
  __typename?: "GeoContextAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  state: StringAggregateSelectionNullable;
  city: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNonNullable;
};

export type GeoContextEdge = {
  __typename?: "GeoContextEdge";
  cursor: Scalars["String"]["output"];
  node: GeoContext;
};

export type GeoContextImpactImpactsAggregationSelection = {
  __typename?: "GeoContextImpactImpactsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<GeoContextImpactImpactsNodeAggregateSelection>;
  edge?: Maybe<GeoContextImpactImpactsEdgeAggregateSelection>;
};

export type GeoContextImpactImpactsEdgeAggregateSelection = {
  __typename?: "GeoContextImpactImpactsEdgeAggregateSelection";
  aspect: StringAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  score: FloatAggregateSelectionNullable;
};

export type GeoContextImpactImpactsNodeAggregateSelection = {
  __typename?: "GeoContextImpactImpactsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
};

export type GeoContextImpactsConnection = {
  __typename?: "GeoContextImpactsConnection";
  edges: Array<GeoContextImpactsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type GeoContextImpactsRelationship = ImpactOn & {
  __typename?: "GeoContextImpactsRelationship";
  cursor: Scalars["String"]["output"];
  node: Impact;
  aspect: Scalars["String"]["output"];
  reason: Scalars["String"]["output"];
  score?: Maybe<Scalars["Float"]["output"]>;
};

export type GeoContextProjectProjectsAggregationSelection = {
  __typename?: "GeoContextProjectProjectsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<GeoContextProjectProjectsNodeAggregateSelection>;
  edge?: Maybe<GeoContextProjectProjectsEdgeAggregateSelection>;
};

export type GeoContextProjectProjectsEdgeAggregateSelection = {
  __typename?: "GeoContextProjectProjectsEdgeAggregateSelection";
  description: StringAggregateSelectionNonNullable;
};

export type GeoContextProjectProjectsNodeAggregateSelection = {
  __typename?: "GeoContextProjectProjectsNodeAggregateSelection";
  id: IdAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
  problem: StringAggregateSelectionNullable;
  solution: StringAggregateSelectionNullable;
  employees: StringAggregateSelectionNullable;
  context: StringAggregateSelectionNullable;
};

export type GeoContextProjectsConnection = {
  __typename?: "GeoContextProjectsConnection";
  edges: Array<GeoContextProjectsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type GeoContextProjectsRelationship = ProjectImpacts & {
  __typename?: "GeoContextProjectsRelationship";
  cursor: Scalars["String"]["output"];
  node: Project;
  description: Scalars["String"]["output"];
};

export type GeoContextsConnection = {
  __typename?: "GeoContextsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<GeoContextEdge>;
};

export type IdAggregateSelectionNullable = {
  __typename?: "IDAggregateSelectionNullable";
  shortest?: Maybe<Scalars["ID"]["output"]>;
  longest?: Maybe<Scalars["ID"]["output"]>;
};

export type Impact = {
  __typename?: "Impact";
  name: Scalars["String"]["output"];
  verified: Scalars["Boolean"]["output"];
  project: Project;
  projectAggregate?: Maybe<ImpactProjectProjectAggregationSelection>;
  impactArea: ImpactArea;
  impactAreaAggregate?: Maybe<ImpactImpactAreaImpactAreaAggregationSelection>;
  contexts: Context;
  contextsAggregate?: Maybe<ImpactContextContextsAggregationSelection>;
  projectConnection: ImpactProjectConnection;
  impactAreaConnection: ImpactImpactAreaConnection;
  contextsConnection: ImpactContextsConnection;
};

export type ImpactProjectArgs = {
  where?: InputMaybe<ProjectWhere>;
  options?: InputMaybe<ProjectOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactProjectAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactImpactAreaArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
  options?: InputMaybe<ImpactAreaOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactImpactAreaAggregateArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactContextsArgs = {
  where?: InputMaybe<ContextWhere>;
  options?: InputMaybe<ContextOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactContextsAggregateArgs = {
  where?: InputMaybe<ContextWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactProjectConnectionArgs = {
  where?: InputMaybe<ImpactProjectConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ImpactProjectConnectionSort>>;
};

export type ImpactImpactAreaConnectionArgs = {
  where?: InputMaybe<ImpactImpactAreaConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ImpactImpactAreaConnectionSort>>;
};

export type ImpactContextsConnectionArgs = {
  where?: InputMaybe<ImpactContextsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ImpactContextsConnectionSort>>;
};

export type ImpactAggregateSelection = {
  __typename?: "ImpactAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNonNullable;
};

export type ImpactArea = {
  __typename?: "ImpactArea";
  uniqueName: Scalars["String"]["output"];
  verified: Scalars["Boolean"]["output"];
  context?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  questions?: Maybe<Scalars["String"]["output"]>;
  impacts: Array<Impact>;
  impactsAggregate?: Maybe<ImpactAreaImpactImpactsAggregationSelection>;
  projects: Array<Project>;
  projectsAggregate?: Maybe<ImpactAreaProjectProjectsAggregationSelection>;
  impactCategory?: Maybe<ImpactCategory>;
  impactCategoryAggregate?: Maybe<ImpactAreaImpactCategoryImpactCategoryAggregationSelection>;
  impactsConnection: ImpactAreaImpactsConnection;
  projectsConnection: ImpactAreaProjectsConnection;
  impactCategoryConnection: ImpactAreaImpactCategoryConnection;
};

export type ImpactAreaImpactsArgs = {
  where?: InputMaybe<ImpactWhere>;
  options?: InputMaybe<ImpactOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactAreaImpactsAggregateArgs = {
  where?: InputMaybe<ImpactWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactAreaProjectsArgs = {
  where?: InputMaybe<ProjectWhere>;
  options?: InputMaybe<ProjectOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactAreaProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactAreaImpactCategoryArgs = {
  where?: InputMaybe<ImpactCategoryWhere>;
  options?: InputMaybe<ImpactCategoryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactAreaImpactCategoryAggregateArgs = {
  where?: InputMaybe<ImpactCategoryWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactAreaImpactsConnectionArgs = {
  where?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ImpactAreaImpactsConnectionSort>>;
};

export type ImpactAreaProjectsConnectionArgs = {
  where?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ImpactAreaProjectsConnectionSort>>;
};

export type ImpactAreaImpactCategoryConnectionArgs = {
  where?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ImpactAreaImpactCategoryConnectionSort>>;
};

export type ImpactAreaAggregateSelection = {
  __typename?: "ImpactAreaAggregateSelection";
  count: Scalars["Int"]["output"];
  uniqueName: StringAggregateSelectionNonNullable;
  context: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
  questions: StringAggregateSelectionNullable;
};

export type ImpactAreaEdge = {
  __typename?: "ImpactAreaEdge";
  cursor: Scalars["String"]["output"];
  node: ImpactArea;
};

export type ImpactAreaImpactCategoryConnection = {
  __typename?: "ImpactAreaImpactCategoryConnection";
  edges: Array<ImpactAreaImpactCategoryRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ImpactAreaImpactCategoryImpactCategoryAggregationSelection = {
  __typename?: "ImpactAreaImpactCategoryImpactCategoryAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ImpactAreaImpactCategoryImpactCategoryNodeAggregateSelection>;
};

export type ImpactAreaImpactCategoryImpactCategoryNodeAggregateSelection = {
  __typename?: "ImpactAreaImpactCategoryImpactCategoryNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
};

export type ImpactAreaImpactCategoryRelationship = {
  __typename?: "ImpactAreaImpactCategoryRelationship";
  cursor: Scalars["String"]["output"];
  node: ImpactCategory;
};

export type ImpactAreaImpactImpactsAggregationSelection = {
  __typename?: "ImpactAreaImpactImpactsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ImpactAreaImpactImpactsNodeAggregateSelection>;
  edge?: Maybe<ImpactAreaImpactImpactsEdgeAggregateSelection>;
};

export type ImpactAreaImpactImpactsEdgeAggregateSelection = {
  __typename?: "ImpactAreaImpactImpactsEdgeAggregateSelection";
  aspect: StringAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  score: FloatAggregateSelectionNullable;
};

export type ImpactAreaImpactImpactsNodeAggregateSelection = {
  __typename?: "ImpactAreaImpactImpactsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
};

export type ImpactAreaImpactsConnection = {
  __typename?: "ImpactAreaImpactsConnection";
  edges: Array<ImpactAreaImpactsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ImpactAreaImpactsRelationship = ImpactOn & {
  __typename?: "ImpactAreaImpactsRelationship";
  cursor: Scalars["String"]["output"];
  node: Impact;
  aspect: Scalars["String"]["output"];
  reason: Scalars["String"]["output"];
  score?: Maybe<Scalars["Float"]["output"]>;
};

export type ImpactAreaProjectProjectsAggregationSelection = {
  __typename?: "ImpactAreaProjectProjectsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ImpactAreaProjectProjectsNodeAggregateSelection>;
  edge?: Maybe<ImpactAreaProjectProjectsEdgeAggregateSelection>;
};

export type ImpactAreaProjectProjectsEdgeAggregateSelection = {
  __typename?: "ImpactAreaProjectProjectsEdgeAggregateSelection";
  description: StringAggregateSelectionNonNullable;
};

export type ImpactAreaProjectProjectsNodeAggregateSelection = {
  __typename?: "ImpactAreaProjectProjectsNodeAggregateSelection";
  id: IdAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
  problem: StringAggregateSelectionNullable;
  solution: StringAggregateSelectionNullable;
  employees: StringAggregateSelectionNullable;
  context: StringAggregateSelectionNullable;
};

export type ImpactAreaProjectsConnection = {
  __typename?: "ImpactAreaProjectsConnection";
  edges: Array<ImpactAreaProjectsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ImpactAreaProjectsRelationship = ProjectImpacts & {
  __typename?: "ImpactAreaProjectsRelationship";
  cursor: Scalars["String"]["output"];
  node: Project;
  description: Scalars["String"]["output"];
};

export type ImpactAreasConnection = {
  __typename?: "ImpactAreasConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ImpactAreaEdge>;
};

export type ImpactCategoriesConnection = {
  __typename?: "ImpactCategoriesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ImpactCategoryEdge>;
};

export type ImpactCategory = {
  __typename?: "ImpactCategory";
  name: Scalars["String"]["output"];
  uniqueName: ImpactCategoryName;
  impactAreas: Array<ImpactArea>;
  impactAreasAggregate?: Maybe<ImpactCategoryImpactAreaImpactAreasAggregationSelection>;
  doughnutCategory?: Maybe<DoughnutCategory>;
  doughnutCategoryAggregate?: Maybe<ImpactCategoryDoughnutCategoryDoughnutCategoryAggregationSelection>;
  impactAreasConnection: ImpactCategoryImpactAreasConnection;
  doughnutCategoryConnection: ImpactCategoryDoughnutCategoryConnection;
};

export type ImpactCategoryImpactAreasArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
  options?: InputMaybe<ImpactAreaOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactCategoryImpactAreasAggregateArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactCategoryDoughnutCategoryArgs = {
  where?: InputMaybe<DoughnutCategoryWhere>;
  options?: InputMaybe<DoughnutCategoryOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactCategoryDoughnutCategoryAggregateArgs = {
  where?: InputMaybe<DoughnutCategoryWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ImpactCategoryImpactAreasConnectionArgs = {
  where?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ImpactCategoryImpactAreasConnectionSort>>;
};

export type ImpactCategoryDoughnutCategoryConnectionArgs = {
  where?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ImpactCategoryDoughnutCategoryConnectionSort>>;
};

export type ImpactCategoryAggregateSelection = {
  __typename?: "ImpactCategoryAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNonNullable;
};

export type ImpactCategoryDoughnutCategoryConnection = {
  __typename?: "ImpactCategoryDoughnutCategoryConnection";
  edges: Array<ImpactCategoryDoughnutCategoryRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ImpactCategoryDoughnutCategoryDoughnutCategoryAggregationSelection =
  {
    __typename?: "ImpactCategoryDoughnutCategoryDoughnutCategoryAggregationSelection";
    count: Scalars["Int"]["output"];
    node?: Maybe<ImpactCategoryDoughnutCategoryDoughnutCategoryNodeAggregateSelection>;
  };

export type ImpactCategoryDoughnutCategoryDoughnutCategoryNodeAggregateSelection =
  {
    __typename?: "ImpactCategoryDoughnutCategoryDoughnutCategoryNodeAggregateSelection";
    name: StringAggregateSelectionNonNullable;
  };

export type ImpactCategoryDoughnutCategoryRelationship = {
  __typename?: "ImpactCategoryDoughnutCategoryRelationship";
  cursor: Scalars["String"]["output"];
  node: DoughnutCategory;
};

export type ImpactCategoryEdge = {
  __typename?: "ImpactCategoryEdge";
  cursor: Scalars["String"]["output"];
  node: ImpactCategory;
};

export type ImpactCategoryImpactAreaImpactAreasAggregationSelection = {
  __typename?: "ImpactCategoryImpactAreaImpactAreasAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ImpactCategoryImpactAreaImpactAreasNodeAggregateSelection>;
};

export type ImpactCategoryImpactAreaImpactAreasNodeAggregateSelection = {
  __typename?: "ImpactCategoryImpactAreaImpactAreasNodeAggregateSelection";
  uniqueName: StringAggregateSelectionNonNullable;
  context: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
  questions: StringAggregateSelectionNullable;
};

export type ImpactCategoryImpactAreasConnection = {
  __typename?: "ImpactCategoryImpactAreasConnection";
  edges: Array<ImpactCategoryImpactAreasRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ImpactCategoryImpactAreasRelationship = {
  __typename?: "ImpactCategoryImpactAreasRelationship";
  cursor: Scalars["String"]["output"];
  node: ImpactArea;
};

export type ImpactContextContextsAggregationSelection = {
  __typename?: "ImpactContextContextsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ImpactContextContextsNodeAggregateSelection>;
  edge?: Maybe<ImpactContextContextsEdgeAggregateSelection>;
};

export type ImpactContextContextsEdgeAggregateSelection = {
  __typename?: "ImpactContextContextsEdgeAggregateSelection";
  aspect: StringAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  score: FloatAggregateSelectionNullable;
};

export type ImpactContextContextsNodeAggregateSelection = {
  __typename?: "ImpactContextContextsNodeAggregateSelection";
  id: IdAggregateSelectionNullable;
  name: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNonNullable;
};

export type ImpactContextsConnection = {
  __typename?: "ImpactContextsConnection";
  edges: Array<ImpactContextsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ImpactContextsRelationship = ImpactOn & {
  __typename?: "ImpactContextsRelationship";
  cursor: Scalars["String"]["output"];
  node: Context;
  aspect: Scalars["String"]["output"];
  reason: Scalars["String"]["output"];
  score?: Maybe<Scalars["Float"]["output"]>;
};

export type ImpactEdge = {
  __typename?: "ImpactEdge";
  cursor: Scalars["String"]["output"];
  node: Impact;
};

export type ImpactImpactAreaConnection = {
  __typename?: "ImpactImpactAreaConnection";
  edges: Array<ImpactImpactAreaRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ImpactImpactAreaImpactAreaAggregationSelection = {
  __typename?: "ImpactImpactAreaImpactAreaAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ImpactImpactAreaImpactAreaNodeAggregateSelection>;
  edge?: Maybe<ImpactImpactAreaImpactAreaEdgeAggregateSelection>;
};

export type ImpactImpactAreaImpactAreaEdgeAggregateSelection = {
  __typename?: "ImpactImpactAreaImpactAreaEdgeAggregateSelection";
  aspect: StringAggregateSelectionNonNullable;
  reason: StringAggregateSelectionNonNullable;
  score: FloatAggregateSelectionNullable;
};

export type ImpactImpactAreaImpactAreaNodeAggregateSelection = {
  __typename?: "ImpactImpactAreaImpactAreaNodeAggregateSelection";
  uniqueName: StringAggregateSelectionNonNullable;
  context: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
  questions: StringAggregateSelectionNullable;
};

export type ImpactImpactAreaRelationship = ImpactOn & {
  __typename?: "ImpactImpactAreaRelationship";
  cursor: Scalars["String"]["output"];
  node: ImpactArea;
  aspect: Scalars["String"]["output"];
  reason: Scalars["String"]["output"];
  score?: Maybe<Scalars["Float"]["output"]>;
};

export type ImpactProjectConnection = {
  __typename?: "ImpactProjectConnection";
  edges: Array<ImpactProjectRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ImpactProjectProjectAggregationSelection = {
  __typename?: "ImpactProjectProjectAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ImpactProjectProjectNodeAggregateSelection>;
};

export type ImpactProjectProjectNodeAggregateSelection = {
  __typename?: "ImpactProjectProjectNodeAggregateSelection";
  id: IdAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
  problem: StringAggregateSelectionNullable;
  solution: StringAggregateSelectionNullable;
  employees: StringAggregateSelectionNullable;
  context: StringAggregateSelectionNullable;
};

export type ImpactProjectRelationship = {
  __typename?: "ImpactProjectRelationship";
  cursor: Scalars["String"]["output"];
  node: Project;
};

export type ImpactsConnection = {
  __typename?: "ImpactsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ImpactEdge>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Project = {
  __typename?: "Project";
  id?: Maybe<Scalars["ID"]["output"]>;
  uniqueName: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  website?: Maybe<Scalars["String"]["output"]>;
  verified?: Maybe<Scalars["Boolean"]["output"]>;
  problem?: Maybe<Scalars["String"]["output"]>;
  solution?: Maybe<Scalars["String"]["output"]>;
  employees?: Maybe<Scalars["String"]["output"]>;
  context?: Maybe<Scalars["String"]["output"]>;
  impacts: Array<Impact>;
  impactsAggregate?: Maybe<ProjectImpactImpactsAggregationSelection>;
  impactAreas: Array<ImpactArea>;
  impactAreasAggregate?: Maybe<ProjectImpactAreaImpactAreasAggregationSelection>;
  contexts: UnifiedContext;
  statuses: Array<Status>;
  statusesAggregate?: Maybe<ProjectStatusStatusesAggregationSelection>;
  users: Array<User>;
  usersAggregate?: Maybe<ProjectUserUsersAggregationSelection>;
  impactsConnection: ProjectImpactsConnection;
  impactAreasConnection: ProjectImpactAreasConnection;
  contextsConnection: ProjectContextsConnection;
  statusesConnection: ProjectStatusesConnection;
  usersConnection: ProjectUsersConnection;
};

export type ProjectImpactsArgs = {
  where?: InputMaybe<ImpactWhere>;
  options?: InputMaybe<ImpactOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProjectImpactsAggregateArgs = {
  where?: InputMaybe<ImpactWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProjectImpactAreasArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
  options?: InputMaybe<ImpactAreaOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProjectImpactAreasAggregateArgs = {
  where?: InputMaybe<ImpactAreaWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProjectContextsArgs = {
  options?: InputMaybe<QueryOptions>;
  where?: InputMaybe<UnifiedContextWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProjectStatusesArgs = {
  where?: InputMaybe<StatusWhere>;
  options?: InputMaybe<StatusOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProjectStatusesAggregateArgs = {
  where?: InputMaybe<StatusWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProjectUsersArgs = {
  where?: InputMaybe<UserWhere>;
  options?: InputMaybe<UserOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProjectUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProjectImpactsConnectionArgs = {
  where?: InputMaybe<ProjectImpactsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ProjectImpactsConnectionSort>>;
};

export type ProjectImpactAreasConnectionArgs = {
  where?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ProjectImpactAreasConnectionSort>>;
};

export type ProjectContextsConnectionArgs = {
  where?: InputMaybe<ProjectContextsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ProjectContextsConnectionSort>>;
};

export type ProjectStatusesConnectionArgs = {
  where?: InputMaybe<ProjectStatusesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ProjectStatusesConnectionSort>>;
};

export type ProjectUsersConnectionArgs = {
  where?: InputMaybe<ProjectUsersConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ProjectUsersConnectionSort>>;
};

export type ProjectAggregateSelection = {
  __typename?: "ProjectAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
  problem: StringAggregateSelectionNullable;
  solution: StringAggregateSelectionNullable;
  employees: StringAggregateSelectionNullable;
  context: StringAggregateSelectionNullable;
};

export type ProjectContextsConnection = {
  __typename?: "ProjectContextsConnection";
  edges: Array<ProjectContextsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ProjectContextsRelationship = ProjectImpacts & {
  __typename?: "ProjectContextsRelationship";
  cursor: Scalars["String"]["output"];
  node: UnifiedContext;
  description: Scalars["String"]["output"];
};

export type ProjectEdge = {
  __typename?: "ProjectEdge";
  cursor: Scalars["String"]["output"];
  node: Project;
};

export type ProjectImpactAreaImpactAreasAggregationSelection = {
  __typename?: "ProjectImpactAreaImpactAreasAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ProjectImpactAreaImpactAreasNodeAggregateSelection>;
  edge?: Maybe<ProjectImpactAreaImpactAreasEdgeAggregateSelection>;
};

export type ProjectImpactAreaImpactAreasEdgeAggregateSelection = {
  __typename?: "ProjectImpactAreaImpactAreasEdgeAggregateSelection";
  description: StringAggregateSelectionNonNullable;
};

export type ProjectImpactAreaImpactAreasNodeAggregateSelection = {
  __typename?: "ProjectImpactAreaImpactAreasNodeAggregateSelection";
  uniqueName: StringAggregateSelectionNonNullable;
  context: StringAggregateSelectionNullable;
  description: StringAggregateSelectionNullable;
  name: StringAggregateSelectionNonNullable;
  questions: StringAggregateSelectionNullable;
};

export type ProjectImpactAreasConnection = {
  __typename?: "ProjectImpactAreasConnection";
  edges: Array<ProjectImpactAreasRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ProjectImpactAreasRelationship = ProjectImpacts & {
  __typename?: "ProjectImpactAreasRelationship";
  cursor: Scalars["String"]["output"];
  node: ImpactArea;
  description: Scalars["String"]["output"];
};

export type ProjectImpactImpactsAggregationSelection = {
  __typename?: "ProjectImpactImpactsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ProjectImpactImpactsNodeAggregateSelection>;
};

export type ProjectImpactImpactsNodeAggregateSelection = {
  __typename?: "ProjectImpactImpactsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
};

export type ProjectImpactsConnection = {
  __typename?: "ProjectImpactsConnection";
  edges: Array<ProjectImpactsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ProjectImpactsRelationship = {
  __typename?: "ProjectImpactsRelationship";
  cursor: Scalars["String"]["output"];
  node: Impact;
};

export type ProjectsConnection = {
  __typename?: "ProjectsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ProjectEdge>;
};

export type ProjectStatusesConnection = {
  __typename?: "ProjectStatusesConnection";
  edges: Array<ProjectStatusesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ProjectStatusesRelationship = ProjectStatusDetails & {
  __typename?: "ProjectStatusesRelationship";
  cursor: Scalars["String"]["output"];
  node: Status;
  message?: Maybe<Scalars["String"]["output"]>;
  dump?: Maybe<Scalars["String"]["output"]>;
  timestamp: Scalars["DateTime"]["output"];
};

export type ProjectStatusStatusesAggregationSelection = {
  __typename?: "ProjectStatusStatusesAggregationSelection";
  count: Scalars["Int"]["output"];
  edge?: Maybe<ProjectStatusStatusesEdgeAggregateSelection>;
};

export type ProjectStatusStatusesEdgeAggregateSelection = {
  __typename?: "ProjectStatusStatusesEdgeAggregateSelection";
  message: StringAggregateSelectionNullable;
  dump: StringAggregateSelectionNullable;
  timestamp: DateTimeAggregateSelectionNonNullable;
};

export type ProjectUsersConnection = {
  __typename?: "ProjectUsersConnection";
  edges: Array<ProjectUsersRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ProjectUsersRelationship = UserInteractionDetails & {
  __typename?: "ProjectUsersRelationship";
  cursor: Scalars["String"]["output"];
  node: User;
  message?: Maybe<Scalars["String"]["output"]>;
  dump?: Maybe<Scalars["String"]["output"]>;
  timestamp: Scalars["DateTime"]["output"];
};

export type ProjectUserUsersAggregationSelection = {
  __typename?: "ProjectUserUsersAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ProjectUserUsersNodeAggregateSelection>;
  edge?: Maybe<ProjectUserUsersEdgeAggregateSelection>;
};

export type ProjectUserUsersEdgeAggregateSelection = {
  __typename?: "ProjectUserUsersEdgeAggregateSelection";
  message: StringAggregateSelectionNullable;
  dump: StringAggregateSelectionNullable;
  timestamp: DateTimeAggregateSelectionNonNullable;
};

export type ProjectUserUsersNodeAggregateSelection = {
  __typename?: "ProjectUserUsersNodeAggregateSelection";
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  GivenName: StringAggregateSelectionNullable;
};

export type Status = {
  __typename?: "Status";
  name: ProjectStatus;
  projects: Array<Project>;
  projectsAggregate?: Maybe<StatusProjectProjectsAggregationSelection>;
  projectsConnection: StatusProjectsConnection;
};

export type StatusProjectsArgs = {
  where?: InputMaybe<ProjectWhere>;
  options?: InputMaybe<ProjectOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type StatusProjectsAggregateArgs = {
  where?: InputMaybe<ProjectWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type StatusProjectsConnectionArgs = {
  where?: InputMaybe<StatusProjectsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<StatusProjectsConnectionSort>>;
};

export type StatusAggregateSelection = {
  __typename?: "StatusAggregateSelection";
  count: Scalars["Int"]["output"];
};

export type StatusEdge = {
  __typename?: "StatusEdge";
  cursor: Scalars["String"]["output"];
  node: Status;
};

export type StatusesConnection = {
  __typename?: "StatusesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<StatusEdge>;
};

export type StatusProjectProjectsAggregationSelection = {
  __typename?: "StatusProjectProjectsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<StatusProjectProjectsNodeAggregateSelection>;
  edge?: Maybe<StatusProjectProjectsEdgeAggregateSelection>;
};

export type StatusProjectProjectsEdgeAggregateSelection = {
  __typename?: "StatusProjectProjectsEdgeAggregateSelection";
  message: StringAggregateSelectionNullable;
  dump: StringAggregateSelectionNullable;
  timestamp: DateTimeAggregateSelectionNonNullable;
};

export type StatusProjectProjectsNodeAggregateSelection = {
  __typename?: "StatusProjectProjectsNodeAggregateSelection";
  id: IdAggregateSelectionNullable;
  uniqueName: StringAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  website: StringAggregateSelectionNullable;
  problem: StringAggregateSelectionNullable;
  solution: StringAggregateSelectionNullable;
  employees: StringAggregateSelectionNullable;
  context: StringAggregateSelectionNullable;
};

export type StatusProjectsConnection = {
  __typename?: "StatusProjectsConnection";
  edges: Array<StatusProjectsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type StatusProjectsRelationship = ProjectStatusDetails & {
  __typename?: "StatusProjectsRelationship";
  cursor: Scalars["String"]["output"];
  node: Project;
  message?: Maybe<Scalars["String"]["output"]>;
  dump?: Maybe<Scalars["String"]["output"]>;
  timestamp: Scalars["DateTime"]["output"];
};

export type StringAggregateSelectionNonNullable = {
  __typename?: "StringAggregateSelectionNonNullable";
  shortest: Scalars["String"]["output"];
  longest: Scalars["String"]["output"];
};

export type StringAggregateSelectionNullable = {
  __typename?: "StringAggregateSelectionNullable";
  shortest?: Maybe<Scalars["String"]["output"]>;
  longest?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateContextsMutationResponse = {
  __typename?: "UpdateContextsMutationResponse";
  info: UpdateInfo;
  contexts: Array<Context>;
};

export type UpdateDoughnutCategoriesMutationResponse = {
  __typename?: "UpdateDoughnutCategoriesMutationResponse";
  info: UpdateInfo;
  doughnutCategories: Array<DoughnutCategory>;
};

export type UpdateGeoContextsMutationResponse = {
  __typename?: "UpdateGeoContextsMutationResponse";
  info: UpdateInfo;
  geoContexts: Array<GeoContext>;
};

export type UpdateImpactAreasMutationResponse = {
  __typename?: "UpdateImpactAreasMutationResponse";
  info: UpdateInfo;
  impactAreas: Array<ImpactArea>;
};

export type UpdateImpactCategoriesMutationResponse = {
  __typename?: "UpdateImpactCategoriesMutationResponse";
  info: UpdateInfo;
  impactCategories: Array<ImpactCategory>;
};

export type UpdateImpactsMutationResponse = {
  __typename?: "UpdateImpactsMutationResponse";
  info: UpdateInfo;
  impacts: Array<Impact>;
};

export type UpdateInfo = {
  __typename?: "UpdateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type UpdateProjectsMutationResponse = {
  __typename?: "UpdateProjectsMutationResponse";
  info: UpdateInfo;
  projects: Array<Project>;
};

export type UpdateStatusesMutationResponse = {
  __typename?: "UpdateStatusesMutationResponse";
  info: UpdateInfo;
  statuses: Array<Status>;
};

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse";
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  familyName?: Maybe<Scalars["String"]["output"]>;
  GivenName?: Maybe<Scalars["String"]["output"]>;
};

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection";
  count: Scalars["Int"]["output"];
  email: StringAggregateSelectionNonNullable;
  familyName: StringAggregateSelectionNullable;
  GivenName: StringAggregateSelectionNullable;
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type UsersConnection = {
  __typename?: "UsersConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
};

export type ContextConnectInput = {
  projects?: InputMaybe<Array<ContextProjectsConnectFieldInput>>;
  impacts?: InputMaybe<Array<ContextImpactsConnectFieldInput>>;
};

export type ContextConnectOrCreateInput = {
  projects?: InputMaybe<Array<ContextProjectsConnectOrCreateFieldInput>>;
};

export type ContextConnectOrCreateWhere = {
  node: ContextUniqueWhere;
};

export type ContextConnectWhere = {
  node: ContextWhere;
};

export type ContextCreateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  description: Scalars["String"]["input"];
  projects?: InputMaybe<ContextProjectsFieldInput>;
  impacts?: InputMaybe<ContextImpactsFieldInput>;
};

export type ContextDeleteInput = {
  projects?: InputMaybe<Array<ContextProjectsDeleteFieldInput>>;
  impacts?: InputMaybe<Array<ContextImpactsDeleteFieldInput>>;
};

export type ContextDisconnectInput = {
  projects?: InputMaybe<Array<ContextProjectsDisconnectFieldInput>>;
  impacts?: InputMaybe<Array<ContextImpactsDisconnectFieldInput>>;
};

export type ContextImpactsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ContextImpactsAggregateInput>>;
  OR?: InputMaybe<Array<ContextImpactsAggregateInput>>;
  NOT?: InputMaybe<ContextImpactsAggregateInput>;
  node?: InputMaybe<ContextImpactsNodeAggregationWhereInput>;
  edge?: InputMaybe<ContextImpactsEdgeAggregationWhereInput>;
};

export type ContextImpactsConnectFieldInput = {
  where?: InputMaybe<ImpactConnectWhere>;
  connect?: InputMaybe<Array<ImpactConnectInput>>;
  edge: ImpactOnCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ContextImpactsConnectionSort = {
  edge?: InputMaybe<ImpactOnSort>;
  node?: InputMaybe<ImpactSort>;
};

export type ContextImpactsConnectionWhere = {
  AND?: InputMaybe<Array<ContextImpactsConnectionWhere>>;
  OR?: InputMaybe<Array<ContextImpactsConnectionWhere>>;
  NOT?: InputMaybe<ContextImpactsConnectionWhere>;
  edge?: InputMaybe<ImpactOnWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ImpactOnWhere>;
  node?: InputMaybe<ImpactWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ImpactWhere>;
};

export type ContextImpactsCreateFieldInput = {
  node: ImpactCreateInput;
  edge: ImpactOnCreateInput;
};

export type ContextImpactsDeleteFieldInput = {
  where?: InputMaybe<ContextImpactsConnectionWhere>;
  delete?: InputMaybe<ImpactDeleteInput>;
};

export type ContextImpactsDisconnectFieldInput = {
  where?: InputMaybe<ContextImpactsConnectionWhere>;
  disconnect?: InputMaybe<ImpactDisconnectInput>;
};

export type ContextImpactsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ContextImpactsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ContextImpactsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ContextImpactsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ContextImpactsFieldInput = {
  create?: InputMaybe<Array<ContextImpactsCreateFieldInput>>;
  connect?: InputMaybe<Array<ContextImpactsConnectFieldInput>>;
};

export type ContextImpactsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ContextImpactsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ContextImpactsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ContextImpactsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ContextImpactsUpdateConnectionInput = {
  node?: InputMaybe<ImpactUpdateInput>;
  edge?: InputMaybe<ImpactOnUpdateInput>;
};

export type ContextImpactsUpdateFieldInput = {
  where?: InputMaybe<ContextImpactsConnectionWhere>;
  create?: InputMaybe<Array<ContextImpactsCreateFieldInput>>;
  connect?: InputMaybe<Array<ContextImpactsConnectFieldInput>>;
  update?: InputMaybe<ContextImpactsUpdateConnectionInput>;
  delete?: InputMaybe<Array<ContextImpactsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ContextImpactsDisconnectFieldInput>>;
};

export type ContextOnCreateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  description: Scalars["String"]["input"];
};

export type ContextOptions = {
  /** Specify one or more ContextSort objects to sort Contexts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ContextSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ContextProjectsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ContextProjectsAggregateInput>>;
  OR?: InputMaybe<Array<ContextProjectsAggregateInput>>;
  NOT?: InputMaybe<ContextProjectsAggregateInput>;
  node?: InputMaybe<ContextProjectsNodeAggregationWhereInput>;
  edge?: InputMaybe<ContextProjectsEdgeAggregationWhereInput>;
};

export type ContextProjectsConnectFieldInput = {
  where?: InputMaybe<ProjectConnectWhere>;
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  edge: ProjectImpactsCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ContextProjectsConnectionSort = {
  edge?: InputMaybe<ProjectImpactsSort>;
  node?: InputMaybe<ProjectSort>;
};

export type ContextProjectsConnectionWhere = {
  AND?: InputMaybe<Array<ContextProjectsConnectionWhere>>;
  OR?: InputMaybe<Array<ContextProjectsConnectionWhere>>;
  NOT?: InputMaybe<ContextProjectsConnectionWhere>;
  edge?: InputMaybe<ProjectImpactsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ProjectImpactsWhere>;
  node?: InputMaybe<ProjectWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type ContextProjectsConnectOrCreateFieldInput = {
  where: ProjectConnectOrCreateWhere;
  onCreate: ContextProjectsConnectOrCreateFieldInputOnCreate;
};

export type ContextProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type ContextProjectsCreateFieldInput = {
  node: ProjectCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type ContextProjectsDeleteFieldInput = {
  where?: InputMaybe<ContextProjectsConnectionWhere>;
  delete?: InputMaybe<ProjectDeleteInput>;
};

export type ContextProjectsDisconnectFieldInput = {
  where?: InputMaybe<ContextProjectsConnectionWhere>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
};

export type ContextProjectsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ContextProjectsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ContextProjectsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ContextProjectsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ContextProjectsFieldInput = {
  connectOrCreate?: InputMaybe<Array<ContextProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ContextProjectsCreateFieldInput>>;
  connect?: InputMaybe<Array<ContextProjectsConnectFieldInput>>;
};

export type ContextProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ContextProjectsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ContextProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ContextProjectsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ContextProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
  edge?: InputMaybe<ProjectImpactsUpdateInput>;
};

export type ContextProjectsUpdateFieldInput = {
  where?: InputMaybe<ContextProjectsConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<ContextProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ContextProjectsCreateFieldInput>>;
  connect?: InputMaybe<Array<ContextProjectsConnectFieldInput>>;
  update?: InputMaybe<ContextProjectsUpdateConnectionInput>;
  delete?: InputMaybe<Array<ContextProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ContextProjectsDisconnectFieldInput>>;
};

export type ContextRelationInput = {
  projects?: InputMaybe<Array<ContextProjectsCreateFieldInput>>;
  impacts?: InputMaybe<Array<ContextImpactsCreateFieldInput>>;
};

/** Fields to sort Contexts by. The order in which sorts are applied is not guaranteed when specifying many fields in one ContextSort object. */
export type ContextSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
};

export type ContextUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ContextUpdateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  projects?: InputMaybe<Array<ContextProjectsUpdateFieldInput>>;
  impacts?: InputMaybe<Array<ContextImpactsUpdateFieldInput>>;
};

export type ContextWhere = {
  OR?: InputMaybe<Array<ContextWhere>>;
  AND?: InputMaybe<Array<ContextWhere>>;
  NOT?: InputMaybe<ContextWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]["input"]>;
  description_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Use `projects_SOME` instead. */
  projects?: InputMaybe<ProjectWhere>;
  /** @deprecated Use `projects_NONE` instead. */
  projects_NOT?: InputMaybe<ProjectWhere>;
  projectsAggregate?: InputMaybe<ContextProjectsAggregateInput>;
  /** Return Contexts where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return Contexts where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return Contexts where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Contexts where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  /** @deprecated Use `impacts_SOME` instead. */
  impacts?: InputMaybe<ImpactWhere>;
  /** @deprecated Use `impacts_NONE` instead. */
  impacts_NOT?: InputMaybe<ImpactWhere>;
  impactsAggregate?: InputMaybe<ContextImpactsAggregateInput>;
  /** Return Contexts where all of the related Impacts match this filter */
  impacts_ALL?: InputMaybe<ImpactWhere>;
  /** Return Contexts where none of the related Impacts match this filter */
  impacts_NONE?: InputMaybe<ImpactWhere>;
  /** Return Contexts where one of the related Impacts match this filter */
  impacts_SINGLE?: InputMaybe<ImpactWhere>;
  /** Return Contexts where some of the related Impacts match this filter */
  impacts_SOME?: InputMaybe<ImpactWhere>;
  /** @deprecated Use `projectsConnection_SOME` instead. */
  projectsConnection?: InputMaybe<ContextProjectsConnectionWhere>;
  /** @deprecated Use `projectsConnection_NONE` instead. */
  projectsConnection_NOT?: InputMaybe<ContextProjectsConnectionWhere>;
  /** Return Contexts where all of the related ContextProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<ContextProjectsConnectionWhere>;
  /** Return Contexts where none of the related ContextProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<ContextProjectsConnectionWhere>;
  /** Return Contexts where one of the related ContextProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<ContextProjectsConnectionWhere>;
  /** Return Contexts where some of the related ContextProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<ContextProjectsConnectionWhere>;
  /** @deprecated Use `impactsConnection_SOME` instead. */
  impactsConnection?: InputMaybe<ContextImpactsConnectionWhere>;
  /** @deprecated Use `impactsConnection_NONE` instead. */
  impactsConnection_NOT?: InputMaybe<ContextImpactsConnectionWhere>;
  /** Return Contexts where all of the related ContextImpactsConnections match this filter */
  impactsConnection_ALL?: InputMaybe<ContextImpactsConnectionWhere>;
  /** Return Contexts where none of the related ContextImpactsConnections match this filter */
  impactsConnection_NONE?: InputMaybe<ContextImpactsConnectionWhere>;
  /** Return Contexts where one of the related ContextImpactsConnections match this filter */
  impactsConnection_SINGLE?: InputMaybe<ContextImpactsConnectionWhere>;
  /** Return Contexts where some of the related ContextImpactsConnections match this filter */
  impactsConnection_SOME?: InputMaybe<ContextImpactsConnectionWhere>;
};

export type DoughnutCategoryConnectInput = {
  impactAreaCategories?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesConnectFieldInput>
  >;
};

export type DoughnutCategoryConnectOrCreateInput = {
  impactAreaCategories?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInput>
  >;
};

export type DoughnutCategoryConnectOrCreateWhere = {
  node: DoughnutCategoryUniqueWhere;
};

export type DoughnutCategoryConnectWhere = {
  node: DoughnutCategoryWhere;
};

export type DoughnutCategoryCreateInput = {
  name: Scalars["String"]["input"];
  uniqueName: DoughnutCategoryName;
  impactAreaCategories?: InputMaybe<DoughnutCategoryImpactAreaCategoriesFieldInput>;
};

export type DoughnutCategoryDeleteInput = {
  impactAreaCategories?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesDeleteFieldInput>
  >;
};

export type DoughnutCategoryDisconnectInput = {
  impactAreaCategories?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesDisconnectFieldInput>
  >;
};

export type DoughnutCategoryImpactAreaCategoriesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesAggregateInput>>;
  OR?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesAggregateInput>>;
  NOT?: InputMaybe<DoughnutCategoryImpactAreaCategoriesAggregateInput>;
  node?: InputMaybe<DoughnutCategoryImpactAreaCategoriesNodeAggregationWhereInput>;
};

export type DoughnutCategoryImpactAreaCategoriesConnectFieldInput = {
  where?: InputMaybe<ImpactCategoryConnectWhere>;
  connect?: InputMaybe<Array<ImpactCategoryConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type DoughnutCategoryImpactAreaCategoriesConnectionSort = {
  node?: InputMaybe<ImpactCategorySort>;
};

export type DoughnutCategoryImpactAreaCategoriesConnectionWhere = {
  AND?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectionWhere>>;
  OR?: InputMaybe<Array<DoughnutCategoryImpactAreaCategoriesConnectionWhere>>;
  NOT?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  node?: InputMaybe<ImpactCategoryWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ImpactCategoryWhere>;
};

export type DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInput = {
  where: ImpactCategoryConnectOrCreateWhere;
  onCreate: DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInputOnCreate;
};

export type DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInputOnCreate =
  {
    node: ImpactCategoryOnCreateInput;
  };

export type DoughnutCategoryImpactAreaCategoriesCreateFieldInput = {
  node: ImpactCategoryCreateInput;
};

export type DoughnutCategoryImpactAreaCategoriesDeleteFieldInput = {
  where?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  delete?: InputMaybe<ImpactCategoryDeleteInput>;
};

export type DoughnutCategoryImpactAreaCategoriesDisconnectFieldInput = {
  where?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  disconnect?: InputMaybe<ImpactCategoryDisconnectInput>;
};

export type DoughnutCategoryImpactAreaCategoriesFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesConnectFieldInput>
  >;
};

export type DoughnutCategoryImpactAreaCategoriesNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<DoughnutCategoryImpactAreaCategoriesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DoughnutCategoryImpactAreaCategoriesUpdateConnectionInput = {
  node?: InputMaybe<ImpactCategoryUpdateInput>;
};

export type DoughnutCategoryImpactAreaCategoriesUpdateFieldInput = {
  where?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesCreateFieldInput>
  >;
  connect?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesConnectFieldInput>
  >;
  update?: InputMaybe<DoughnutCategoryImpactAreaCategoriesUpdateConnectionInput>;
  delete?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesDeleteFieldInput>
  >;
  disconnect?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesDisconnectFieldInput>
  >;
};

export type DoughnutCategoryOnCreateInput = {
  name: Scalars["String"]["input"];
  uniqueName: DoughnutCategoryName;
};

export type DoughnutCategoryOptions = {
  /** Specify one or more DoughnutCategorySort objects to sort DoughnutCategories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DoughnutCategorySort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DoughnutCategoryRelationInput = {
  impactAreaCategories?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesCreateFieldInput>
  >;
};

/** Fields to sort DoughnutCategories by. The order in which sorts are applied is not guaranteed when specifying many fields in one DoughnutCategorySort object. */
export type DoughnutCategorySort = {
  name?: InputMaybe<SortDirection>;
  uniqueName?: InputMaybe<SortDirection>;
};

export type DoughnutCategoryUniqueWhere = {
  uniqueName?: InputMaybe<DoughnutCategoryName>;
};

export type DoughnutCategoryUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  uniqueName?: InputMaybe<DoughnutCategoryName>;
  impactAreaCategories?: InputMaybe<
    Array<DoughnutCategoryImpactAreaCategoriesUpdateFieldInput>
  >;
};

export type DoughnutCategoryWhere = {
  OR?: InputMaybe<Array<DoughnutCategoryWhere>>;
  AND?: InputMaybe<Array<DoughnutCategoryWhere>>;
  NOT?: InputMaybe<DoughnutCategoryWhere>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  uniqueName?: InputMaybe<DoughnutCategoryName>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT?: InputMaybe<DoughnutCategoryName>;
  uniqueName_IN?: InputMaybe<Array<DoughnutCategoryName>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT_IN?: InputMaybe<Array<DoughnutCategoryName>>;
  /** @deprecated Use `impactAreaCategories_SOME` instead. */
  impactAreaCategories?: InputMaybe<ImpactCategoryWhere>;
  /** @deprecated Use `impactAreaCategories_NONE` instead. */
  impactAreaCategories_NOT?: InputMaybe<ImpactCategoryWhere>;
  impactAreaCategoriesAggregate?: InputMaybe<DoughnutCategoryImpactAreaCategoriesAggregateInput>;
  /** Return DoughnutCategories where all of the related ImpactCategories match this filter */
  impactAreaCategories_ALL?: InputMaybe<ImpactCategoryWhere>;
  /** Return DoughnutCategories where none of the related ImpactCategories match this filter */
  impactAreaCategories_NONE?: InputMaybe<ImpactCategoryWhere>;
  /** Return DoughnutCategories where one of the related ImpactCategories match this filter */
  impactAreaCategories_SINGLE?: InputMaybe<ImpactCategoryWhere>;
  /** Return DoughnutCategories where some of the related ImpactCategories match this filter */
  impactAreaCategories_SOME?: InputMaybe<ImpactCategoryWhere>;
  /** @deprecated Use `impactAreaCategoriesConnection_SOME` instead. */
  impactAreaCategoriesConnection?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  /** @deprecated Use `impactAreaCategoriesConnection_NONE` instead. */
  impactAreaCategoriesConnection_NOT?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  /** Return DoughnutCategories where all of the related DoughnutCategoryImpactAreaCategoriesConnections match this filter */
  impactAreaCategoriesConnection_ALL?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  /** Return DoughnutCategories where none of the related DoughnutCategoryImpactAreaCategoriesConnections match this filter */
  impactAreaCategoriesConnection_NONE?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  /** Return DoughnutCategories where one of the related DoughnutCategoryImpactAreaCategoriesConnections match this filter */
  impactAreaCategoriesConnection_SINGLE?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
  /** Return DoughnutCategories where some of the related DoughnutCategoryImpactAreaCategoriesConnections match this filter */
  impactAreaCategoriesConnection_SOME?: InputMaybe<DoughnutCategoryImpactAreaCategoriesConnectionWhere>;
};

export type GeoContextConnectInput = {
  projects?: InputMaybe<Array<GeoContextProjectsConnectFieldInput>>;
  impacts?: InputMaybe<Array<GeoContextImpactsConnectFieldInput>>;
};

export type GeoContextConnectOrCreateInput = {
  projects?: InputMaybe<Array<GeoContextProjectsConnectOrCreateFieldInput>>;
};

export type GeoContextConnectOrCreateWhere = {
  node: GeoContextUniqueWhere;
};

export type GeoContextConnectWhere = {
  node: GeoContextWhere;
};

export type GeoContextCreateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  description: Scalars["String"]["input"];
  nation?: InputMaybe<NationCode>;
  projects?: InputMaybe<GeoContextProjectsFieldInput>;
  impacts?: InputMaybe<GeoContextImpactsFieldInput>;
};

export type GeoContextDeleteInput = {
  projects?: InputMaybe<Array<GeoContextProjectsDeleteFieldInput>>;
  impacts?: InputMaybe<Array<GeoContextImpactsDeleteFieldInput>>;
};

export type GeoContextDisconnectInput = {
  projects?: InputMaybe<Array<GeoContextProjectsDisconnectFieldInput>>;
  impacts?: InputMaybe<Array<GeoContextImpactsDisconnectFieldInput>>;
};

export type GeoContextImpactsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<GeoContextImpactsAggregateInput>>;
  OR?: InputMaybe<Array<GeoContextImpactsAggregateInput>>;
  NOT?: InputMaybe<GeoContextImpactsAggregateInput>;
  node?: InputMaybe<GeoContextImpactsNodeAggregationWhereInput>;
  edge?: InputMaybe<GeoContextImpactsEdgeAggregationWhereInput>;
};

export type GeoContextImpactsConnectFieldInput = {
  where?: InputMaybe<ImpactConnectWhere>;
  connect?: InputMaybe<Array<ImpactConnectInput>>;
  edge: ImpactOnCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type GeoContextImpactsConnectionSort = {
  edge?: InputMaybe<ImpactOnSort>;
  node?: InputMaybe<ImpactSort>;
};

export type GeoContextImpactsConnectionWhere = {
  AND?: InputMaybe<Array<GeoContextImpactsConnectionWhere>>;
  OR?: InputMaybe<Array<GeoContextImpactsConnectionWhere>>;
  NOT?: InputMaybe<GeoContextImpactsConnectionWhere>;
  edge?: InputMaybe<ImpactOnWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ImpactOnWhere>;
  node?: InputMaybe<ImpactWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ImpactWhere>;
};

export type GeoContextImpactsCreateFieldInput = {
  node: ImpactCreateInput;
  edge: ImpactOnCreateInput;
};

export type GeoContextImpactsDeleteFieldInput = {
  where?: InputMaybe<GeoContextImpactsConnectionWhere>;
  delete?: InputMaybe<ImpactDeleteInput>;
};

export type GeoContextImpactsDisconnectFieldInput = {
  where?: InputMaybe<GeoContextImpactsConnectionWhere>;
  disconnect?: InputMaybe<ImpactDisconnectInput>;
};

export type GeoContextImpactsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<GeoContextImpactsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<GeoContextImpactsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<GeoContextImpactsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type GeoContextImpactsFieldInput = {
  create?: InputMaybe<Array<GeoContextImpactsCreateFieldInput>>;
  connect?: InputMaybe<Array<GeoContextImpactsConnectFieldInput>>;
};

export type GeoContextImpactsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<GeoContextImpactsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<GeoContextImpactsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<GeoContextImpactsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type GeoContextImpactsUpdateConnectionInput = {
  node?: InputMaybe<ImpactUpdateInput>;
  edge?: InputMaybe<ImpactOnUpdateInput>;
};

export type GeoContextImpactsUpdateFieldInput = {
  where?: InputMaybe<GeoContextImpactsConnectionWhere>;
  create?: InputMaybe<Array<GeoContextImpactsCreateFieldInput>>;
  connect?: InputMaybe<Array<GeoContextImpactsConnectFieldInput>>;
  update?: InputMaybe<GeoContextImpactsUpdateConnectionInput>;
  delete?: InputMaybe<Array<GeoContextImpactsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<GeoContextImpactsDisconnectFieldInput>>;
};

export type GeoContextOnCreateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  description: Scalars["String"]["input"];
  nation?: InputMaybe<NationCode>;
};

export type GeoContextOptions = {
  /** Specify one or more GeoContextSort objects to sort GeoContexts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GeoContextSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type GeoContextProjectsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<GeoContextProjectsAggregateInput>>;
  OR?: InputMaybe<Array<GeoContextProjectsAggregateInput>>;
  NOT?: InputMaybe<GeoContextProjectsAggregateInput>;
  node?: InputMaybe<GeoContextProjectsNodeAggregationWhereInput>;
  edge?: InputMaybe<GeoContextProjectsEdgeAggregationWhereInput>;
};

export type GeoContextProjectsConnectFieldInput = {
  where?: InputMaybe<ProjectConnectWhere>;
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  edge: ProjectImpactsCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type GeoContextProjectsConnectionSort = {
  edge?: InputMaybe<ProjectImpactsSort>;
  node?: InputMaybe<ProjectSort>;
};

export type GeoContextProjectsConnectionWhere = {
  AND?: InputMaybe<Array<GeoContextProjectsConnectionWhere>>;
  OR?: InputMaybe<Array<GeoContextProjectsConnectionWhere>>;
  NOT?: InputMaybe<GeoContextProjectsConnectionWhere>;
  edge?: InputMaybe<ProjectImpactsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ProjectImpactsWhere>;
  node?: InputMaybe<ProjectWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type GeoContextProjectsConnectOrCreateFieldInput = {
  where: ProjectConnectOrCreateWhere;
  onCreate: GeoContextProjectsConnectOrCreateFieldInputOnCreate;
};

export type GeoContextProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type GeoContextProjectsCreateFieldInput = {
  node: ProjectCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type GeoContextProjectsDeleteFieldInput = {
  where?: InputMaybe<GeoContextProjectsConnectionWhere>;
  delete?: InputMaybe<ProjectDeleteInput>;
};

export type GeoContextProjectsDisconnectFieldInput = {
  where?: InputMaybe<GeoContextProjectsConnectionWhere>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
};

export type GeoContextProjectsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<GeoContextProjectsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<GeoContextProjectsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<GeoContextProjectsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type GeoContextProjectsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<GeoContextProjectsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<GeoContextProjectsCreateFieldInput>>;
  connect?: InputMaybe<Array<GeoContextProjectsConnectFieldInput>>;
};

export type GeoContextProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<GeoContextProjectsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<GeoContextProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<GeoContextProjectsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type GeoContextProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
  edge?: InputMaybe<ProjectImpactsUpdateInput>;
};

export type GeoContextProjectsUpdateFieldInput = {
  where?: InputMaybe<GeoContextProjectsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<GeoContextProjectsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<GeoContextProjectsCreateFieldInput>>;
  connect?: InputMaybe<Array<GeoContextProjectsConnectFieldInput>>;
  update?: InputMaybe<GeoContextProjectsUpdateConnectionInput>;
  delete?: InputMaybe<Array<GeoContextProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<GeoContextProjectsDisconnectFieldInput>>;
};

export type GeoContextRelationInput = {
  projects?: InputMaybe<Array<GeoContextProjectsCreateFieldInput>>;
  impacts?: InputMaybe<Array<GeoContextImpactsCreateFieldInput>>;
};

/** Fields to sort GeoContexts by. The order in which sorts are applied is not guaranteed when specifying many fields in one GeoContextSort object. */
export type GeoContextSort = {
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  state?: InputMaybe<SortDirection>;
  city?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  nation?: InputMaybe<SortDirection>;
};

export type GeoContextUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type GeoContextUpdateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  nation?: InputMaybe<NationCode>;
  projects?: InputMaybe<Array<GeoContextProjectsUpdateFieldInput>>;
  impacts?: InputMaybe<Array<GeoContextImpactsUpdateFieldInput>>;
};

export type GeoContextWhere = {
  OR?: InputMaybe<Array<GeoContextWhere>>;
  AND?: InputMaybe<Array<GeoContextWhere>>;
  NOT?: InputMaybe<GeoContextWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  state_NOT?: InputMaybe<Scalars["String"]["input"]>;
  state_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  state_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  state_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  state_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  state_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  state_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  state_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  state_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  city_NOT?: InputMaybe<Scalars["String"]["input"]>;
  city_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  city_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  city_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  city_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  city_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  city_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  city_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  city_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]["input"]>;
  description_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  nation?: InputMaybe<NationCode>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  nation_NOT?: InputMaybe<NationCode>;
  nation_IN?: InputMaybe<Array<InputMaybe<NationCode>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  nation_NOT_IN?: InputMaybe<Array<InputMaybe<NationCode>>>;
  /** @deprecated Use `projects_SOME` instead. */
  projects?: InputMaybe<ProjectWhere>;
  /** @deprecated Use `projects_NONE` instead. */
  projects_NOT?: InputMaybe<ProjectWhere>;
  projectsAggregate?: InputMaybe<GeoContextProjectsAggregateInput>;
  /** Return GeoContexts where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return GeoContexts where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return GeoContexts where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return GeoContexts where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  /** @deprecated Use `impacts_SOME` instead. */
  impacts?: InputMaybe<ImpactWhere>;
  /** @deprecated Use `impacts_NONE` instead. */
  impacts_NOT?: InputMaybe<ImpactWhere>;
  impactsAggregate?: InputMaybe<GeoContextImpactsAggregateInput>;
  /** Return GeoContexts where all of the related Impacts match this filter */
  impacts_ALL?: InputMaybe<ImpactWhere>;
  /** Return GeoContexts where none of the related Impacts match this filter */
  impacts_NONE?: InputMaybe<ImpactWhere>;
  /** Return GeoContexts where one of the related Impacts match this filter */
  impacts_SINGLE?: InputMaybe<ImpactWhere>;
  /** Return GeoContexts where some of the related Impacts match this filter */
  impacts_SOME?: InputMaybe<ImpactWhere>;
  /** @deprecated Use `projectsConnection_SOME` instead. */
  projectsConnection?: InputMaybe<GeoContextProjectsConnectionWhere>;
  /** @deprecated Use `projectsConnection_NONE` instead. */
  projectsConnection_NOT?: InputMaybe<GeoContextProjectsConnectionWhere>;
  /** Return GeoContexts where all of the related GeoContextProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<GeoContextProjectsConnectionWhere>;
  /** Return GeoContexts where none of the related GeoContextProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<GeoContextProjectsConnectionWhere>;
  /** Return GeoContexts where one of the related GeoContextProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<GeoContextProjectsConnectionWhere>;
  /** Return GeoContexts where some of the related GeoContextProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<GeoContextProjectsConnectionWhere>;
  /** @deprecated Use `impactsConnection_SOME` instead. */
  impactsConnection?: InputMaybe<GeoContextImpactsConnectionWhere>;
  /** @deprecated Use `impactsConnection_NONE` instead. */
  impactsConnection_NOT?: InputMaybe<GeoContextImpactsConnectionWhere>;
  /** Return GeoContexts where all of the related GeoContextImpactsConnections match this filter */
  impactsConnection_ALL?: InputMaybe<GeoContextImpactsConnectionWhere>;
  /** Return GeoContexts where none of the related GeoContextImpactsConnections match this filter */
  impactsConnection_NONE?: InputMaybe<GeoContextImpactsConnectionWhere>;
  /** Return GeoContexts where one of the related GeoContextImpactsConnections match this filter */
  impactsConnection_SINGLE?: InputMaybe<GeoContextImpactsConnectionWhere>;
  /** Return GeoContexts where some of the related GeoContextImpactsConnections match this filter */
  impactsConnection_SOME?: InputMaybe<GeoContextImpactsConnectionWhere>;
};

export type ImpactAreaConnectInput = {
  impacts?: InputMaybe<Array<ImpactAreaImpactsConnectFieldInput>>;
  projects?: InputMaybe<Array<ImpactAreaProjectsConnectFieldInput>>;
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryConnectFieldInput>;
};

export type ImpactAreaConnectOrCreateInput = {
  projects?: InputMaybe<Array<ImpactAreaProjectsConnectOrCreateFieldInput>>;
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryConnectOrCreateFieldInput>;
};

export type ImpactAreaConnectOrCreateWhere = {
  node: ImpactAreaUniqueWhere;
};

export type ImpactAreaConnectWhere = {
  node: ImpactAreaWhere;
};

export type ImpactAreaCreateInput = {
  uniqueName: Scalars["String"]["input"];
  verified: Scalars["Boolean"]["input"];
  context?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  questions?: InputMaybe<Scalars["String"]["input"]>;
  impacts?: InputMaybe<ImpactAreaImpactsFieldInput>;
  projects?: InputMaybe<ImpactAreaProjectsFieldInput>;
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryFieldInput>;
};

export type ImpactAreaDeleteInput = {
  impacts?: InputMaybe<Array<ImpactAreaImpactsDeleteFieldInput>>;
  projects?: InputMaybe<Array<ImpactAreaProjectsDeleteFieldInput>>;
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryDeleteFieldInput>;
};

export type ImpactAreaDisconnectInput = {
  impacts?: InputMaybe<Array<ImpactAreaImpactsDisconnectFieldInput>>;
  projects?: InputMaybe<Array<ImpactAreaProjectsDisconnectFieldInput>>;
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryDisconnectFieldInput>;
};

export type ImpactAreaImpactCategoryAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ImpactAreaImpactCategoryAggregateInput>>;
  OR?: InputMaybe<Array<ImpactAreaImpactCategoryAggregateInput>>;
  NOT?: InputMaybe<ImpactAreaImpactCategoryAggregateInput>;
  node?: InputMaybe<ImpactAreaImpactCategoryNodeAggregationWhereInput>;
};

export type ImpactAreaImpactCategoryConnectFieldInput = {
  where?: InputMaybe<ImpactCategoryConnectWhere>;
  connect?: InputMaybe<ImpactCategoryConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ImpactAreaImpactCategoryConnectionSort = {
  node?: InputMaybe<ImpactCategorySort>;
};

export type ImpactAreaImpactCategoryConnectionWhere = {
  AND?: InputMaybe<Array<ImpactAreaImpactCategoryConnectionWhere>>;
  OR?: InputMaybe<Array<ImpactAreaImpactCategoryConnectionWhere>>;
  NOT?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
  node?: InputMaybe<ImpactCategoryWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ImpactCategoryWhere>;
};

export type ImpactAreaImpactCategoryConnectOrCreateFieldInput = {
  where: ImpactCategoryConnectOrCreateWhere;
  onCreate: ImpactAreaImpactCategoryConnectOrCreateFieldInputOnCreate;
};

export type ImpactAreaImpactCategoryConnectOrCreateFieldInputOnCreate = {
  node: ImpactCategoryOnCreateInput;
};

export type ImpactAreaImpactCategoryCreateFieldInput = {
  node: ImpactCategoryCreateInput;
};

export type ImpactAreaImpactCategoryDeleteFieldInput = {
  where?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
  delete?: InputMaybe<ImpactCategoryDeleteInput>;
};

export type ImpactAreaImpactCategoryDisconnectFieldInput = {
  where?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
  disconnect?: InputMaybe<ImpactCategoryDisconnectInput>;
};

export type ImpactAreaImpactCategoryFieldInput = {
  connectOrCreate?: InputMaybe<ImpactAreaImpactCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactAreaImpactCategoryCreateFieldInput>;
  connect?: InputMaybe<ImpactAreaImpactCategoryConnectFieldInput>;
};

export type ImpactAreaImpactCategoryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactAreaImpactCategoryNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactAreaImpactCategoryNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactAreaImpactCategoryNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactAreaImpactCategoryUpdateConnectionInput = {
  node?: InputMaybe<ImpactCategoryUpdateInput>;
};

export type ImpactAreaImpactCategoryUpdateFieldInput = {
  where?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
  connectOrCreate?: InputMaybe<ImpactAreaImpactCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactAreaImpactCategoryCreateFieldInput>;
  connect?: InputMaybe<ImpactAreaImpactCategoryConnectFieldInput>;
  update?: InputMaybe<ImpactAreaImpactCategoryUpdateConnectionInput>;
  delete?: InputMaybe<ImpactAreaImpactCategoryDeleteFieldInput>;
  disconnect?: InputMaybe<ImpactAreaImpactCategoryDisconnectFieldInput>;
};

export type ImpactAreaImpactsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ImpactAreaImpactsAggregateInput>>;
  OR?: InputMaybe<Array<ImpactAreaImpactsAggregateInput>>;
  NOT?: InputMaybe<ImpactAreaImpactsAggregateInput>;
  node?: InputMaybe<ImpactAreaImpactsNodeAggregationWhereInput>;
  edge?: InputMaybe<ImpactAreaImpactsEdgeAggregationWhereInput>;
};

export type ImpactAreaImpactsConnectFieldInput = {
  where?: InputMaybe<ImpactConnectWhere>;
  connect?: InputMaybe<Array<ImpactConnectInput>>;
  edge: ImpactOnCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ImpactAreaImpactsConnectionSort = {
  edge?: InputMaybe<ImpactOnSort>;
  node?: InputMaybe<ImpactSort>;
};

export type ImpactAreaImpactsConnectionWhere = {
  AND?: InputMaybe<Array<ImpactAreaImpactsConnectionWhere>>;
  OR?: InputMaybe<Array<ImpactAreaImpactsConnectionWhere>>;
  NOT?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  edge?: InputMaybe<ImpactOnWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ImpactOnWhere>;
  node?: InputMaybe<ImpactWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ImpactWhere>;
};

export type ImpactAreaImpactsCreateFieldInput = {
  node: ImpactCreateInput;
  edge: ImpactOnCreateInput;
};

export type ImpactAreaImpactsDeleteFieldInput = {
  where?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  delete?: InputMaybe<ImpactDeleteInput>;
};

export type ImpactAreaImpactsDisconnectFieldInput = {
  where?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  disconnect?: InputMaybe<ImpactDisconnectInput>;
};

export type ImpactAreaImpactsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactAreaImpactsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactAreaImpactsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactAreaImpactsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ImpactAreaImpactsFieldInput = {
  create?: InputMaybe<Array<ImpactAreaImpactsCreateFieldInput>>;
  connect?: InputMaybe<Array<ImpactAreaImpactsConnectFieldInput>>;
};

export type ImpactAreaImpactsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactAreaImpactsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactAreaImpactsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactAreaImpactsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactAreaImpactsUpdateConnectionInput = {
  node?: InputMaybe<ImpactUpdateInput>;
  edge?: InputMaybe<ImpactOnUpdateInput>;
};

export type ImpactAreaImpactsUpdateFieldInput = {
  where?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  create?: InputMaybe<Array<ImpactAreaImpactsCreateFieldInput>>;
  connect?: InputMaybe<Array<ImpactAreaImpactsConnectFieldInput>>;
  update?: InputMaybe<ImpactAreaImpactsUpdateConnectionInput>;
  delete?: InputMaybe<Array<ImpactAreaImpactsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ImpactAreaImpactsDisconnectFieldInput>>;
};

export type ImpactAreaOnCreateInput = {
  uniqueName: Scalars["String"]["input"];
  verified: Scalars["Boolean"]["input"];
  context?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  questions?: InputMaybe<Scalars["String"]["input"]>;
};

export type ImpactAreaOptions = {
  /** Specify one or more ImpactAreaSort objects to sort ImpactAreas by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ImpactAreaSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactAreaProjectsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ImpactAreaProjectsAggregateInput>>;
  OR?: InputMaybe<Array<ImpactAreaProjectsAggregateInput>>;
  NOT?: InputMaybe<ImpactAreaProjectsAggregateInput>;
  node?: InputMaybe<ImpactAreaProjectsNodeAggregationWhereInput>;
  edge?: InputMaybe<ImpactAreaProjectsEdgeAggregationWhereInput>;
};

export type ImpactAreaProjectsConnectFieldInput = {
  where?: InputMaybe<ProjectConnectWhere>;
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  edge: ProjectImpactsCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ImpactAreaProjectsConnectionSort = {
  edge?: InputMaybe<ProjectImpactsSort>;
  node?: InputMaybe<ProjectSort>;
};

export type ImpactAreaProjectsConnectionWhere = {
  AND?: InputMaybe<Array<ImpactAreaProjectsConnectionWhere>>;
  OR?: InputMaybe<Array<ImpactAreaProjectsConnectionWhere>>;
  NOT?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  edge?: InputMaybe<ProjectImpactsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ProjectImpactsWhere>;
  node?: InputMaybe<ProjectWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type ImpactAreaProjectsConnectOrCreateFieldInput = {
  where: ProjectConnectOrCreateWhere;
  onCreate: ImpactAreaProjectsConnectOrCreateFieldInputOnCreate;
};

export type ImpactAreaProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type ImpactAreaProjectsCreateFieldInput = {
  node: ProjectCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type ImpactAreaProjectsDeleteFieldInput = {
  where?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  delete?: InputMaybe<ProjectDeleteInput>;
};

export type ImpactAreaProjectsDisconnectFieldInput = {
  where?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
};

export type ImpactAreaProjectsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactAreaProjectsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactAreaProjectsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactAreaProjectsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactAreaProjectsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<ImpactAreaProjectsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<ImpactAreaProjectsCreateFieldInput>>;
  connect?: InputMaybe<Array<ImpactAreaProjectsConnectFieldInput>>;
};

export type ImpactAreaProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactAreaProjectsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactAreaProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactAreaProjectsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactAreaProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
  edge?: InputMaybe<ProjectImpactsUpdateInput>;
};

export type ImpactAreaProjectsUpdateFieldInput = {
  where?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<ImpactAreaProjectsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<ImpactAreaProjectsCreateFieldInput>>;
  connect?: InputMaybe<Array<ImpactAreaProjectsConnectFieldInput>>;
  update?: InputMaybe<ImpactAreaProjectsUpdateConnectionInput>;
  delete?: InputMaybe<Array<ImpactAreaProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ImpactAreaProjectsDisconnectFieldInput>>;
};

export type ImpactAreaRelationInput = {
  impacts?: InputMaybe<Array<ImpactAreaImpactsCreateFieldInput>>;
  projects?: InputMaybe<Array<ImpactAreaProjectsCreateFieldInput>>;
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryCreateFieldInput>;
};

/** Fields to sort ImpactAreas by. The order in which sorts are applied is not guaranteed when specifying many fields in one ImpactAreaSort object. */
export type ImpactAreaSort = {
  uniqueName?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  context?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  questions?: InputMaybe<SortDirection>;
};

export type ImpactAreaUniqueWhere = {
  uniqueName?: InputMaybe<Scalars["String"]["input"]>;
};

export type ImpactAreaUpdateInput = {
  uniqueName?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  context?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  questions?: InputMaybe<Scalars["String"]["input"]>;
  impacts?: InputMaybe<Array<ImpactAreaImpactsUpdateFieldInput>>;
  projects?: InputMaybe<Array<ImpactAreaProjectsUpdateFieldInput>>;
  impactCategory?: InputMaybe<ImpactAreaImpactCategoryUpdateFieldInput>;
};

export type ImpactAreaWhere = {
  OR?: InputMaybe<Array<ImpactAreaWhere>>;
  AND?: InputMaybe<Array<ImpactAreaWhere>>;
  NOT?: InputMaybe<ImpactAreaWhere>;
  uniqueName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  uniqueName_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  uniqueName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  uniqueName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  uniqueName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  context?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  context_NOT?: InputMaybe<Scalars["String"]["input"]>;
  context_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  context_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  context_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  context_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  context_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  context_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  context_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  context_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]["input"]>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  description_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  questions?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  questions_NOT?: InputMaybe<Scalars["String"]["input"]>;
  questions_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  questions_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  questions_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  questions_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  questions_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  questions_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  questions_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  questions_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Use `impacts_SOME` instead. */
  impacts?: InputMaybe<ImpactWhere>;
  /** @deprecated Use `impacts_NONE` instead. */
  impacts_NOT?: InputMaybe<ImpactWhere>;
  impactsAggregate?: InputMaybe<ImpactAreaImpactsAggregateInput>;
  /** Return ImpactAreas where all of the related Impacts match this filter */
  impacts_ALL?: InputMaybe<ImpactWhere>;
  /** Return ImpactAreas where none of the related Impacts match this filter */
  impacts_NONE?: InputMaybe<ImpactWhere>;
  /** Return ImpactAreas where one of the related Impacts match this filter */
  impacts_SINGLE?: InputMaybe<ImpactWhere>;
  /** Return ImpactAreas where some of the related Impacts match this filter */
  impacts_SOME?: InputMaybe<ImpactWhere>;
  /** @deprecated Use `projects_SOME` instead. */
  projects?: InputMaybe<ProjectWhere>;
  /** @deprecated Use `projects_NONE` instead. */
  projects_NOT?: InputMaybe<ProjectWhere>;
  projectsAggregate?: InputMaybe<ImpactAreaProjectsAggregateInput>;
  /** Return ImpactAreas where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return ImpactAreas where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return ImpactAreas where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return ImpactAreas where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  impactCategory?: InputMaybe<ImpactCategoryWhere>;
  impactCategory_NOT?: InputMaybe<ImpactCategoryWhere>;
  impactCategoryAggregate?: InputMaybe<ImpactAreaImpactCategoryAggregateInput>;
  /** @deprecated Use `impactsConnection_SOME` instead. */
  impactsConnection?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  /** @deprecated Use `impactsConnection_NONE` instead. */
  impactsConnection_NOT?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  /** Return ImpactAreas where all of the related ImpactAreaImpactsConnections match this filter */
  impactsConnection_ALL?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  /** Return ImpactAreas where none of the related ImpactAreaImpactsConnections match this filter */
  impactsConnection_NONE?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  /** Return ImpactAreas where one of the related ImpactAreaImpactsConnections match this filter */
  impactsConnection_SINGLE?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  /** Return ImpactAreas where some of the related ImpactAreaImpactsConnections match this filter */
  impactsConnection_SOME?: InputMaybe<ImpactAreaImpactsConnectionWhere>;
  /** @deprecated Use `projectsConnection_SOME` instead. */
  projectsConnection?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  /** @deprecated Use `projectsConnection_NONE` instead. */
  projectsConnection_NOT?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  /** Return ImpactAreas where all of the related ImpactAreaProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  /** Return ImpactAreas where none of the related ImpactAreaProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  /** Return ImpactAreas where one of the related ImpactAreaProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  /** Return ImpactAreas where some of the related ImpactAreaProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<ImpactAreaProjectsConnectionWhere>;
  impactCategoryConnection?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
  impactCategoryConnection_NOT?: InputMaybe<ImpactAreaImpactCategoryConnectionWhere>;
};

export type ImpactCategoryConnectInput = {
  impactAreas?: InputMaybe<Array<ImpactCategoryImpactAreasConnectFieldInput>>;
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryConnectFieldInput>;
};

export type ImpactCategoryConnectOrCreateInput = {
  impactAreas?: InputMaybe<
    Array<ImpactCategoryImpactAreasConnectOrCreateFieldInput>
  >;
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryConnectOrCreateFieldInput>;
};

export type ImpactCategoryConnectOrCreateWhere = {
  node: ImpactCategoryUniqueWhere;
};

export type ImpactCategoryConnectWhere = {
  node: ImpactCategoryWhere;
};

export type ImpactCategoryCreateInput = {
  name: Scalars["String"]["input"];
  uniqueName: ImpactCategoryName;
  impactAreas?: InputMaybe<ImpactCategoryImpactAreasFieldInput>;
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryFieldInput>;
};

export type ImpactCategoryDeleteInput = {
  impactAreas?: InputMaybe<Array<ImpactCategoryImpactAreasDeleteFieldInput>>;
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryDeleteFieldInput>;
};

export type ImpactCategoryDisconnectInput = {
  impactAreas?: InputMaybe<
    Array<ImpactCategoryImpactAreasDisconnectFieldInput>
  >;
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryDisconnectFieldInput>;
};

export type ImpactCategoryDoughnutCategoryAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ImpactCategoryDoughnutCategoryAggregateInput>>;
  OR?: InputMaybe<Array<ImpactCategoryDoughnutCategoryAggregateInput>>;
  NOT?: InputMaybe<ImpactCategoryDoughnutCategoryAggregateInput>;
  node?: InputMaybe<ImpactCategoryDoughnutCategoryNodeAggregationWhereInput>;
};

export type ImpactCategoryDoughnutCategoryConnectFieldInput = {
  where?: InputMaybe<DoughnutCategoryConnectWhere>;
  connect?: InputMaybe<DoughnutCategoryConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ImpactCategoryDoughnutCategoryConnectionSort = {
  node?: InputMaybe<DoughnutCategorySort>;
};

export type ImpactCategoryDoughnutCategoryConnectionWhere = {
  AND?: InputMaybe<Array<ImpactCategoryDoughnutCategoryConnectionWhere>>;
  OR?: InputMaybe<Array<ImpactCategoryDoughnutCategoryConnectionWhere>>;
  NOT?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
  node?: InputMaybe<DoughnutCategoryWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<DoughnutCategoryWhere>;
};

export type ImpactCategoryDoughnutCategoryConnectOrCreateFieldInput = {
  where: DoughnutCategoryConnectOrCreateWhere;
  onCreate: ImpactCategoryDoughnutCategoryConnectOrCreateFieldInputOnCreate;
};

export type ImpactCategoryDoughnutCategoryConnectOrCreateFieldInputOnCreate = {
  node: DoughnutCategoryOnCreateInput;
};

export type ImpactCategoryDoughnutCategoryCreateFieldInput = {
  node: DoughnutCategoryCreateInput;
};

export type ImpactCategoryDoughnutCategoryDeleteFieldInput = {
  where?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
  delete?: InputMaybe<DoughnutCategoryDeleteInput>;
};

export type ImpactCategoryDoughnutCategoryDisconnectFieldInput = {
  where?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
  disconnect?: InputMaybe<DoughnutCategoryDisconnectInput>;
};

export type ImpactCategoryDoughnutCategoryFieldInput = {
  connectOrCreate?: InputMaybe<ImpactCategoryDoughnutCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactCategoryDoughnutCategoryCreateFieldInput>;
  connect?: InputMaybe<ImpactCategoryDoughnutCategoryConnectFieldInput>;
};

export type ImpactCategoryDoughnutCategoryNodeAggregationWhereInput = {
  AND?: InputMaybe<
    Array<ImpactCategoryDoughnutCategoryNodeAggregationWhereInput>
  >;
  OR?: InputMaybe<
    Array<ImpactCategoryDoughnutCategoryNodeAggregationWhereInput>
  >;
  NOT?: InputMaybe<ImpactCategoryDoughnutCategoryNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactCategoryDoughnutCategoryUpdateConnectionInput = {
  node?: InputMaybe<DoughnutCategoryUpdateInput>;
};

export type ImpactCategoryDoughnutCategoryUpdateFieldInput = {
  where?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
  connectOrCreate?: InputMaybe<ImpactCategoryDoughnutCategoryConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactCategoryDoughnutCategoryCreateFieldInput>;
  connect?: InputMaybe<ImpactCategoryDoughnutCategoryConnectFieldInput>;
  update?: InputMaybe<ImpactCategoryDoughnutCategoryUpdateConnectionInput>;
  delete?: InputMaybe<ImpactCategoryDoughnutCategoryDeleteFieldInput>;
  disconnect?: InputMaybe<ImpactCategoryDoughnutCategoryDisconnectFieldInput>;
};

export type ImpactCategoryImpactAreasAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ImpactCategoryImpactAreasAggregateInput>>;
  OR?: InputMaybe<Array<ImpactCategoryImpactAreasAggregateInput>>;
  NOT?: InputMaybe<ImpactCategoryImpactAreasAggregateInput>;
  node?: InputMaybe<ImpactCategoryImpactAreasNodeAggregationWhereInput>;
};

export type ImpactCategoryImpactAreasConnectFieldInput = {
  where?: InputMaybe<ImpactAreaConnectWhere>;
  connect?: InputMaybe<Array<ImpactAreaConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ImpactCategoryImpactAreasConnectionSort = {
  node?: InputMaybe<ImpactAreaSort>;
};

export type ImpactCategoryImpactAreasConnectionWhere = {
  AND?: InputMaybe<Array<ImpactCategoryImpactAreasConnectionWhere>>;
  OR?: InputMaybe<Array<ImpactCategoryImpactAreasConnectionWhere>>;
  NOT?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  node?: InputMaybe<ImpactAreaWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ImpactAreaWhere>;
};

export type ImpactCategoryImpactAreasConnectOrCreateFieldInput = {
  where: ImpactAreaConnectOrCreateWhere;
  onCreate: ImpactCategoryImpactAreasConnectOrCreateFieldInputOnCreate;
};

export type ImpactCategoryImpactAreasConnectOrCreateFieldInputOnCreate = {
  node: ImpactAreaOnCreateInput;
};

export type ImpactCategoryImpactAreasCreateFieldInput = {
  node: ImpactAreaCreateInput;
};

export type ImpactCategoryImpactAreasDeleteFieldInput = {
  where?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  delete?: InputMaybe<ImpactAreaDeleteInput>;
};

export type ImpactCategoryImpactAreasDisconnectFieldInput = {
  where?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  disconnect?: InputMaybe<ImpactAreaDisconnectInput>;
};

export type ImpactCategoryImpactAreasFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<ImpactCategoryImpactAreasConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<ImpactCategoryImpactAreasCreateFieldInput>>;
  connect?: InputMaybe<Array<ImpactCategoryImpactAreasConnectFieldInput>>;
};

export type ImpactCategoryImpactAreasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactCategoryImpactAreasNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactCategoryImpactAreasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactCategoryImpactAreasNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactCategoryImpactAreasUpdateConnectionInput = {
  node?: InputMaybe<ImpactAreaUpdateInput>;
};

export type ImpactCategoryImpactAreasUpdateFieldInput = {
  where?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<ImpactCategoryImpactAreasConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<ImpactCategoryImpactAreasCreateFieldInput>>;
  connect?: InputMaybe<Array<ImpactCategoryImpactAreasConnectFieldInput>>;
  update?: InputMaybe<ImpactCategoryImpactAreasUpdateConnectionInput>;
  delete?: InputMaybe<Array<ImpactCategoryImpactAreasDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ImpactCategoryImpactAreasDisconnectFieldInput>>;
};

export type ImpactCategoryOnCreateInput = {
  name: Scalars["String"]["input"];
  uniqueName: ImpactCategoryName;
};

export type ImpactCategoryOptions = {
  /** Specify one or more ImpactCategorySort objects to sort ImpactCategories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ImpactCategorySort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactCategoryRelationInput = {
  impactAreas?: InputMaybe<Array<ImpactCategoryImpactAreasCreateFieldInput>>;
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryCreateFieldInput>;
};

/** Fields to sort ImpactCategories by. The order in which sorts are applied is not guaranteed when specifying many fields in one ImpactCategorySort object. */
export type ImpactCategorySort = {
  name?: InputMaybe<SortDirection>;
  uniqueName?: InputMaybe<SortDirection>;
};

export type ImpactCategoryUniqueWhere = {
  uniqueName?: InputMaybe<ImpactCategoryName>;
};

export type ImpactCategoryUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  uniqueName?: InputMaybe<ImpactCategoryName>;
  impactAreas?: InputMaybe<Array<ImpactCategoryImpactAreasUpdateFieldInput>>;
  doughnutCategory?: InputMaybe<ImpactCategoryDoughnutCategoryUpdateFieldInput>;
};

export type ImpactCategoryWhere = {
  OR?: InputMaybe<Array<ImpactCategoryWhere>>;
  AND?: InputMaybe<Array<ImpactCategoryWhere>>;
  NOT?: InputMaybe<ImpactCategoryWhere>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  uniqueName?: InputMaybe<ImpactCategoryName>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT?: InputMaybe<ImpactCategoryName>;
  uniqueName_IN?: InputMaybe<Array<ImpactCategoryName>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT_IN?: InputMaybe<Array<ImpactCategoryName>>;
  /** @deprecated Use `impactAreas_SOME` instead. */
  impactAreas?: InputMaybe<ImpactAreaWhere>;
  /** @deprecated Use `impactAreas_NONE` instead. */
  impactAreas_NOT?: InputMaybe<ImpactAreaWhere>;
  impactAreasAggregate?: InputMaybe<ImpactCategoryImpactAreasAggregateInput>;
  /** Return ImpactCategories where all of the related ImpactAreas match this filter */
  impactAreas_ALL?: InputMaybe<ImpactAreaWhere>;
  /** Return ImpactCategories where none of the related ImpactAreas match this filter */
  impactAreas_NONE?: InputMaybe<ImpactAreaWhere>;
  /** Return ImpactCategories where one of the related ImpactAreas match this filter */
  impactAreas_SINGLE?: InputMaybe<ImpactAreaWhere>;
  /** Return ImpactCategories where some of the related ImpactAreas match this filter */
  impactAreas_SOME?: InputMaybe<ImpactAreaWhere>;
  doughnutCategory?: InputMaybe<DoughnutCategoryWhere>;
  doughnutCategory_NOT?: InputMaybe<DoughnutCategoryWhere>;
  doughnutCategoryAggregate?: InputMaybe<ImpactCategoryDoughnutCategoryAggregateInput>;
  /** @deprecated Use `impactAreasConnection_SOME` instead. */
  impactAreasConnection?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  /** @deprecated Use `impactAreasConnection_NONE` instead. */
  impactAreasConnection_NOT?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  /** Return ImpactCategories where all of the related ImpactCategoryImpactAreasConnections match this filter */
  impactAreasConnection_ALL?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  /** Return ImpactCategories where none of the related ImpactCategoryImpactAreasConnections match this filter */
  impactAreasConnection_NONE?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  /** Return ImpactCategories where one of the related ImpactCategoryImpactAreasConnections match this filter */
  impactAreasConnection_SINGLE?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  /** Return ImpactCategories where some of the related ImpactCategoryImpactAreasConnections match this filter */
  impactAreasConnection_SOME?: InputMaybe<ImpactCategoryImpactAreasConnectionWhere>;
  doughnutCategoryConnection?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
  doughnutCategoryConnection_NOT?: InputMaybe<ImpactCategoryDoughnutCategoryConnectionWhere>;
};

export type ImpactConnectInput = {
  project?: InputMaybe<ImpactProjectConnectFieldInput>;
  impactArea?: InputMaybe<ImpactImpactAreaConnectFieldInput>;
  contexts?: InputMaybe<ImpactContextsConnectFieldInput>;
};

export type ImpactConnectOrCreateInput = {
  project?: InputMaybe<ImpactProjectConnectOrCreateFieldInput>;
  impactArea?: InputMaybe<ImpactImpactAreaConnectOrCreateFieldInput>;
  contexts?: InputMaybe<ImpactContextsConnectOrCreateFieldInput>;
};

export type ImpactConnectWhere = {
  node: ImpactWhere;
};

export type ImpactContextsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ImpactContextsAggregateInput>>;
  OR?: InputMaybe<Array<ImpactContextsAggregateInput>>;
  NOT?: InputMaybe<ImpactContextsAggregateInput>;
  node?: InputMaybe<ImpactContextsNodeAggregationWhereInput>;
  edge?: InputMaybe<ImpactContextsEdgeAggregationWhereInput>;
};

export type ImpactContextsConnectFieldInput = {
  where?: InputMaybe<ContextConnectWhere>;
  connect?: InputMaybe<ContextConnectInput>;
  edge: ImpactOnCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ImpactContextsConnectionSort = {
  edge?: InputMaybe<ImpactOnSort>;
  node?: InputMaybe<ContextSort>;
};

export type ImpactContextsConnectionWhere = {
  AND?: InputMaybe<Array<ImpactContextsConnectionWhere>>;
  OR?: InputMaybe<Array<ImpactContextsConnectionWhere>>;
  NOT?: InputMaybe<ImpactContextsConnectionWhere>;
  edge?: InputMaybe<ImpactOnWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ImpactOnWhere>;
  node?: InputMaybe<ContextWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ContextWhere>;
};

export type ImpactContextsConnectOrCreateFieldInput = {
  where: ContextConnectOrCreateWhere;
  onCreate: ImpactContextsConnectOrCreateFieldInputOnCreate;
};

export type ImpactContextsConnectOrCreateFieldInputOnCreate = {
  node: ContextOnCreateInput;
  edge: ImpactOnCreateInput;
};

export type ImpactContextsCreateFieldInput = {
  node: ContextCreateInput;
  edge: ImpactOnCreateInput;
};

export type ImpactContextsDeleteFieldInput = {
  where?: InputMaybe<ImpactContextsConnectionWhere>;
  delete?: InputMaybe<ContextDeleteInput>;
};

export type ImpactContextsDisconnectFieldInput = {
  where?: InputMaybe<ImpactContextsConnectionWhere>;
  disconnect?: InputMaybe<ContextDisconnectInput>;
};

export type ImpactContextsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactContextsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactContextsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactContextsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ImpactContextsFieldInput = {
  connectOrCreate?: InputMaybe<ImpactContextsConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactContextsCreateFieldInput>;
  connect?: InputMaybe<ImpactContextsConnectFieldInput>;
};

export type ImpactContextsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactContextsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactContextsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactContextsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactContextsUpdateConnectionInput = {
  node?: InputMaybe<ContextUpdateInput>;
  edge?: InputMaybe<ImpactOnUpdateInput>;
};

export type ImpactContextsUpdateFieldInput = {
  where?: InputMaybe<ImpactContextsConnectionWhere>;
  connectOrCreate?: InputMaybe<ImpactContextsConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactContextsCreateFieldInput>;
  connect?: InputMaybe<ImpactContextsConnectFieldInput>;
  update?: InputMaybe<ImpactContextsUpdateConnectionInput>;
  delete?: InputMaybe<ImpactContextsDeleteFieldInput>;
  disconnect?: InputMaybe<ImpactContextsDisconnectFieldInput>;
};

export type ImpactCreateInput = {
  name: Scalars["String"]["input"];
  verified: Scalars["Boolean"]["input"];
  project?: InputMaybe<ImpactProjectFieldInput>;
  impactArea?: InputMaybe<ImpactImpactAreaFieldInput>;
  contexts?: InputMaybe<ImpactContextsFieldInput>;
};

export type ImpactDeleteInput = {
  project?: InputMaybe<ImpactProjectDeleteFieldInput>;
  impactArea?: InputMaybe<ImpactImpactAreaDeleteFieldInput>;
  contexts?: InputMaybe<ImpactContextsDeleteFieldInput>;
};

export type ImpactDisconnectInput = {
  project?: InputMaybe<ImpactProjectDisconnectFieldInput>;
  impactArea?: InputMaybe<ImpactImpactAreaDisconnectFieldInput>;
  contexts?: InputMaybe<ImpactContextsDisconnectFieldInput>;
};

export type ImpactImpactAreaAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ImpactImpactAreaAggregateInput>>;
  OR?: InputMaybe<Array<ImpactImpactAreaAggregateInput>>;
  NOT?: InputMaybe<ImpactImpactAreaAggregateInput>;
  node?: InputMaybe<ImpactImpactAreaNodeAggregationWhereInput>;
  edge?: InputMaybe<ImpactImpactAreaEdgeAggregationWhereInput>;
};

export type ImpactImpactAreaConnectFieldInput = {
  where?: InputMaybe<ImpactAreaConnectWhere>;
  connect?: InputMaybe<ImpactAreaConnectInput>;
  edge: ImpactOnCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ImpactImpactAreaConnectionSort = {
  edge?: InputMaybe<ImpactOnSort>;
  node?: InputMaybe<ImpactAreaSort>;
};

export type ImpactImpactAreaConnectionWhere = {
  AND?: InputMaybe<Array<ImpactImpactAreaConnectionWhere>>;
  OR?: InputMaybe<Array<ImpactImpactAreaConnectionWhere>>;
  NOT?: InputMaybe<ImpactImpactAreaConnectionWhere>;
  edge?: InputMaybe<ImpactOnWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ImpactOnWhere>;
  node?: InputMaybe<ImpactAreaWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ImpactAreaWhere>;
};

export type ImpactImpactAreaConnectOrCreateFieldInput = {
  where: ImpactAreaConnectOrCreateWhere;
  onCreate: ImpactImpactAreaConnectOrCreateFieldInputOnCreate;
};

export type ImpactImpactAreaConnectOrCreateFieldInputOnCreate = {
  node: ImpactAreaOnCreateInput;
  edge: ImpactOnCreateInput;
};

export type ImpactImpactAreaCreateFieldInput = {
  node: ImpactAreaCreateInput;
  edge: ImpactOnCreateInput;
};

export type ImpactImpactAreaDeleteFieldInput = {
  where?: InputMaybe<ImpactImpactAreaConnectionWhere>;
  delete?: InputMaybe<ImpactAreaDeleteInput>;
};

export type ImpactImpactAreaDisconnectFieldInput = {
  where?: InputMaybe<ImpactImpactAreaConnectionWhere>;
  disconnect?: InputMaybe<ImpactAreaDisconnectInput>;
};

export type ImpactImpactAreaEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactImpactAreaEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactImpactAreaEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactImpactAreaEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  aspect_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  aspect_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  aspect_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  aspect_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  reason_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  reason_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  reason_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  reason_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  score_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ImpactImpactAreaFieldInput = {
  connectOrCreate?: InputMaybe<ImpactImpactAreaConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactImpactAreaCreateFieldInput>;
  connect?: InputMaybe<ImpactImpactAreaConnectFieldInput>;
};

export type ImpactImpactAreaNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactImpactAreaNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactImpactAreaNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactImpactAreaNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactImpactAreaUpdateConnectionInput = {
  node?: InputMaybe<ImpactAreaUpdateInput>;
  edge?: InputMaybe<ImpactOnUpdateInput>;
};

export type ImpactImpactAreaUpdateFieldInput = {
  where?: InputMaybe<ImpactImpactAreaConnectionWhere>;
  connectOrCreate?: InputMaybe<ImpactImpactAreaConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactImpactAreaCreateFieldInput>;
  connect?: InputMaybe<ImpactImpactAreaConnectFieldInput>;
  update?: InputMaybe<ImpactImpactAreaUpdateConnectionInput>;
  delete?: InputMaybe<ImpactImpactAreaDeleteFieldInput>;
  disconnect?: InputMaybe<ImpactImpactAreaDisconnectFieldInput>;
};

export type ImpactOnCreateInput = {
  aspect: Scalars["String"]["input"];
  reason: Scalars["String"]["input"];
  score?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ImpactOnSort = {
  aspect?: InputMaybe<SortDirection>;
  reason?: InputMaybe<SortDirection>;
  score?: InputMaybe<SortDirection>;
};

export type ImpactOnUpdateInput = {
  aspect?: InputMaybe<Scalars["String"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
  score?: InputMaybe<Scalars["Float"]["input"]>;
  score_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  score_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  score_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  score_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ImpactOnWhere = {
  OR?: InputMaybe<Array<ImpactOnWhere>>;
  AND?: InputMaybe<Array<ImpactOnWhere>>;
  NOT?: InputMaybe<ImpactOnWhere>;
  aspect?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  aspect_NOT?: InputMaybe<Scalars["String"]["input"]>;
  aspect_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  aspect_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  aspect_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  aspect_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  aspect_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  aspect_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  aspect_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  aspect_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  reason_NOT?: InputMaybe<Scalars["String"]["input"]>;
  reason_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  reason_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  reason_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  reason_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  reason_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  reason_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  reason_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  reason_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  score?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  score_NOT?: InputMaybe<Scalars["Float"]["input"]>;
  score_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  score_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  score_LT?: InputMaybe<Scalars["Float"]["input"]>;
  score_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  score_GT?: InputMaybe<Scalars["Float"]["input"]>;
  score_GTE?: InputMaybe<Scalars["Float"]["input"]>;
};

export type ImpactOptions = {
  /** Specify one or more ImpactSort objects to sort Impacts by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ImpactSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactProjectAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ImpactProjectAggregateInput>>;
  OR?: InputMaybe<Array<ImpactProjectAggregateInput>>;
  NOT?: InputMaybe<ImpactProjectAggregateInput>;
  node?: InputMaybe<ImpactProjectNodeAggregationWhereInput>;
};

export type ImpactProjectConnectFieldInput = {
  where?: InputMaybe<ProjectConnectWhere>;
  connect?: InputMaybe<ProjectConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ImpactProjectConnectionSort = {
  node?: InputMaybe<ProjectSort>;
};

export type ImpactProjectConnectionWhere = {
  AND?: InputMaybe<Array<ImpactProjectConnectionWhere>>;
  OR?: InputMaybe<Array<ImpactProjectConnectionWhere>>;
  NOT?: InputMaybe<ImpactProjectConnectionWhere>;
  node?: InputMaybe<ProjectWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type ImpactProjectConnectOrCreateFieldInput = {
  where: ProjectConnectOrCreateWhere;
  onCreate: ImpactProjectConnectOrCreateFieldInputOnCreate;
};

export type ImpactProjectConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
};

export type ImpactProjectCreateFieldInput = {
  node: ProjectCreateInput;
};

export type ImpactProjectDeleteFieldInput = {
  where?: InputMaybe<ImpactProjectConnectionWhere>;
  delete?: InputMaybe<ProjectDeleteInput>;
};

export type ImpactProjectDisconnectFieldInput = {
  where?: InputMaybe<ImpactProjectConnectionWhere>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
};

export type ImpactProjectFieldInput = {
  connectOrCreate?: InputMaybe<ImpactProjectConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactProjectCreateFieldInput>;
  connect?: InputMaybe<ImpactProjectConnectFieldInput>;
};

export type ImpactProjectNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ImpactProjectNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ImpactProjectNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ImpactProjectNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ImpactProjectUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
};

export type ImpactProjectUpdateFieldInput = {
  where?: InputMaybe<ImpactProjectConnectionWhere>;
  connectOrCreate?: InputMaybe<ImpactProjectConnectOrCreateFieldInput>;
  create?: InputMaybe<ImpactProjectCreateFieldInput>;
  connect?: InputMaybe<ImpactProjectConnectFieldInput>;
  update?: InputMaybe<ImpactProjectUpdateConnectionInput>;
  delete?: InputMaybe<ImpactProjectDeleteFieldInput>;
  disconnect?: InputMaybe<ImpactProjectDisconnectFieldInput>;
};

export type ImpactRelationInput = {
  project?: InputMaybe<ImpactProjectCreateFieldInput>;
  impactArea?: InputMaybe<ImpactImpactAreaCreateFieldInput>;
  contexts?: InputMaybe<ImpactContextsCreateFieldInput>;
};

/** Fields to sort Impacts by. The order in which sorts are applied is not guaranteed when specifying many fields in one ImpactSort object. */
export type ImpactSort = {
  name?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
};

export type ImpactUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  project?: InputMaybe<ImpactProjectUpdateFieldInput>;
  impactArea?: InputMaybe<ImpactImpactAreaUpdateFieldInput>;
  contexts?: InputMaybe<ImpactContextsUpdateFieldInput>;
};

export type ImpactWhere = {
  OR?: InputMaybe<Array<ImpactWhere>>;
  AND?: InputMaybe<Array<ImpactWhere>>;
  NOT?: InputMaybe<ImpactWhere>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  project?: InputMaybe<ProjectWhere>;
  project_NOT?: InputMaybe<ProjectWhere>;
  projectAggregate?: InputMaybe<ImpactProjectAggregateInput>;
  impactArea?: InputMaybe<ImpactAreaWhere>;
  impactArea_NOT?: InputMaybe<ImpactAreaWhere>;
  impactAreaAggregate?: InputMaybe<ImpactImpactAreaAggregateInput>;
  contexts?: InputMaybe<ContextWhere>;
  contexts_NOT?: InputMaybe<ContextWhere>;
  contextsAggregate?: InputMaybe<ImpactContextsAggregateInput>;
  projectConnection?: InputMaybe<ImpactProjectConnectionWhere>;
  projectConnection_NOT?: InputMaybe<ImpactProjectConnectionWhere>;
  impactAreaConnection?: InputMaybe<ImpactImpactAreaConnectionWhere>;
  impactAreaConnection_NOT?: InputMaybe<ImpactImpactAreaConnectionWhere>;
  contextsConnection?: InputMaybe<ImpactContextsConnectionWhere>;
  contextsConnection_NOT?: InputMaybe<ImpactContextsConnectionWhere>;
};

export type ProjectConnectInput = {
  impacts?: InputMaybe<Array<ProjectImpactsConnectFieldInput>>;
  impactAreas?: InputMaybe<Array<ProjectImpactAreasConnectFieldInput>>;
  contexts?: InputMaybe<ProjectContextsConnectInput>;
  statuses?: InputMaybe<Array<ProjectStatusesConnectFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersConnectFieldInput>>;
};

export type ProjectConnectOrCreateInput = {
  impactAreas?: InputMaybe<Array<ProjectImpactAreasConnectOrCreateFieldInput>>;
  contexts?: InputMaybe<ProjectContextsConnectOrCreateInput>;
  statuses?: InputMaybe<Array<ProjectStatusesConnectOrCreateFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersConnectOrCreateFieldInput>>;
};

export type ProjectConnectOrCreateWhere = {
  node: ProjectUniqueWhere;
};

export type ProjectConnectWhere = {
  node: ProjectWhere;
};

export type ProjectContextsConnectInput = {
  Context?: InputMaybe<ProjectContextsContextConnectFieldInput>;
  GeoContext?: InputMaybe<ProjectContextsGeoContextConnectFieldInput>;
};

export type ProjectContextsConnectionSort = {
  edge?: InputMaybe<ProjectImpactsSort>;
};

export type ProjectContextsConnectionWhere = {
  Context?: InputMaybe<ProjectContextsContextConnectionWhere>;
  GeoContext?: InputMaybe<ProjectContextsGeoContextConnectionWhere>;
};

export type ProjectContextsConnectOrCreateInput = {
  Context?: InputMaybe<ProjectContextsContextConnectOrCreateFieldInput>;
  GeoContext?: InputMaybe<ProjectContextsGeoContextConnectOrCreateFieldInput>;
};

export type ProjectContextsContextConnectFieldInput = {
  where?: InputMaybe<ContextConnectWhere>;
  connect?: InputMaybe<ContextConnectInput>;
  edge: ProjectImpactsCreateInput;
};

export type ProjectContextsContextConnectionWhere = {
  OR?: InputMaybe<Array<ProjectContextsContextConnectionWhere>>;
  AND?: InputMaybe<Array<ProjectContextsContextConnectionWhere>>;
  NOT?: InputMaybe<ProjectContextsContextConnectionWhere>;
  node?: InputMaybe<ContextWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ContextWhere>;
  edge?: InputMaybe<ProjectImpactsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ProjectImpactsWhere>;
};

export type ProjectContextsContextConnectOrCreateFieldInput = {
  where: ContextConnectOrCreateWhere;
  onCreate: ProjectContextsContextConnectOrCreateFieldInputOnCreate;
};

export type ProjectContextsContextConnectOrCreateFieldInputOnCreate = {
  node: ContextOnCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type ProjectContextsContextCreateFieldInput = {
  node: ContextCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type ProjectContextsContextDeleteFieldInput = {
  where?: InputMaybe<ProjectContextsContextConnectionWhere>;
  delete?: InputMaybe<ContextDeleteInput>;
};

export type ProjectContextsContextDisconnectFieldInput = {
  where?: InputMaybe<ProjectContextsContextConnectionWhere>;
  disconnect?: InputMaybe<ContextDisconnectInput>;
};

export type ProjectContextsContextFieldInput = {
  create?: InputMaybe<ProjectContextsContextCreateFieldInput>;
  connect?: InputMaybe<ProjectContextsContextConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectContextsContextConnectOrCreateFieldInput>;
};

export type ProjectContextsContextUpdateConnectionInput = {
  node?: InputMaybe<ContextUpdateInput>;
  edge?: InputMaybe<ProjectImpactsUpdateInput>;
};

export type ProjectContextsContextUpdateFieldInput = {
  where?: InputMaybe<ProjectContextsContextConnectionWhere>;
  create?: InputMaybe<ProjectContextsContextCreateFieldInput>;
  connect?: InputMaybe<ProjectContextsContextConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectContextsContextConnectOrCreateFieldInput>;
  delete?: InputMaybe<ProjectContextsContextDeleteFieldInput>;
  disconnect?: InputMaybe<ProjectContextsContextDisconnectFieldInput>;
  update?: InputMaybe<ProjectContextsContextUpdateConnectionInput>;
};

export type ProjectContextsCreateFieldInput = {
  Context?: InputMaybe<ProjectContextsContextCreateFieldInput>;
  GeoContext?: InputMaybe<ProjectContextsGeoContextCreateFieldInput>;
};

export type ProjectContextsCreateInput = {
  Context?: InputMaybe<ProjectContextsContextFieldInput>;
  GeoContext?: InputMaybe<ProjectContextsGeoContextFieldInput>;
};

export type ProjectContextsDeleteInput = {
  Context?: InputMaybe<ProjectContextsContextDeleteFieldInput>;
  GeoContext?: InputMaybe<ProjectContextsGeoContextDeleteFieldInput>;
};

export type ProjectContextsDisconnectInput = {
  Context?: InputMaybe<ProjectContextsContextDisconnectFieldInput>;
  GeoContext?: InputMaybe<ProjectContextsGeoContextDisconnectFieldInput>;
};

export type ProjectContextsGeoContextConnectFieldInput = {
  where?: InputMaybe<GeoContextConnectWhere>;
  connect?: InputMaybe<GeoContextConnectInput>;
  edge: ProjectImpactsCreateInput;
};

export type ProjectContextsGeoContextConnectionWhere = {
  OR?: InputMaybe<Array<ProjectContextsGeoContextConnectionWhere>>;
  AND?: InputMaybe<Array<ProjectContextsGeoContextConnectionWhere>>;
  NOT?: InputMaybe<ProjectContextsGeoContextConnectionWhere>;
  node?: InputMaybe<GeoContextWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<GeoContextWhere>;
  edge?: InputMaybe<ProjectImpactsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ProjectImpactsWhere>;
};

export type ProjectContextsGeoContextConnectOrCreateFieldInput = {
  where: GeoContextConnectOrCreateWhere;
  onCreate: ProjectContextsGeoContextConnectOrCreateFieldInputOnCreate;
};

export type ProjectContextsGeoContextConnectOrCreateFieldInputOnCreate = {
  node: GeoContextOnCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type ProjectContextsGeoContextCreateFieldInput = {
  node: GeoContextCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type ProjectContextsGeoContextDeleteFieldInput = {
  where?: InputMaybe<ProjectContextsGeoContextConnectionWhere>;
  delete?: InputMaybe<GeoContextDeleteInput>;
};

export type ProjectContextsGeoContextDisconnectFieldInput = {
  where?: InputMaybe<ProjectContextsGeoContextConnectionWhere>;
  disconnect?: InputMaybe<GeoContextDisconnectInput>;
};

export type ProjectContextsGeoContextFieldInput = {
  create?: InputMaybe<ProjectContextsGeoContextCreateFieldInput>;
  connect?: InputMaybe<ProjectContextsGeoContextConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectContextsGeoContextConnectOrCreateFieldInput>;
};

export type ProjectContextsGeoContextUpdateConnectionInput = {
  node?: InputMaybe<GeoContextUpdateInput>;
  edge?: InputMaybe<ProjectImpactsUpdateInput>;
};

export type ProjectContextsGeoContextUpdateFieldInput = {
  where?: InputMaybe<ProjectContextsGeoContextConnectionWhere>;
  create?: InputMaybe<ProjectContextsGeoContextCreateFieldInput>;
  connect?: InputMaybe<ProjectContextsGeoContextConnectFieldInput>;
  connectOrCreate?: InputMaybe<ProjectContextsGeoContextConnectOrCreateFieldInput>;
  delete?: InputMaybe<ProjectContextsGeoContextDeleteFieldInput>;
  disconnect?: InputMaybe<ProjectContextsGeoContextDisconnectFieldInput>;
  update?: InputMaybe<ProjectContextsGeoContextUpdateConnectionInput>;
};

export type ProjectContextsUpdateInput = {
  Context?: InputMaybe<ProjectContextsContextUpdateFieldInput>;
  GeoContext?: InputMaybe<ProjectContextsGeoContextUpdateFieldInput>;
};

export type ProjectCreateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  uniqueName: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  website?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  problem?: InputMaybe<Scalars["String"]["input"]>;
  solution?: InputMaybe<Scalars["String"]["input"]>;
  employees?: InputMaybe<Scalars["String"]["input"]>;
  context?: InputMaybe<Scalars["String"]["input"]>;
  impacts?: InputMaybe<ProjectImpactsFieldInput>;
  impactAreas?: InputMaybe<ProjectImpactAreasFieldInput>;
  contexts?: InputMaybe<ProjectContextsCreateInput>;
  statuses?: InputMaybe<ProjectStatusesFieldInput>;
  users?: InputMaybe<ProjectUsersFieldInput>;
};

export type ProjectDeleteInput = {
  impacts?: InputMaybe<Array<ProjectImpactsDeleteFieldInput>>;
  impactAreas?: InputMaybe<Array<ProjectImpactAreasDeleteFieldInput>>;
  contexts?: InputMaybe<ProjectContextsDeleteInput>;
  statuses?: InputMaybe<Array<ProjectStatusesDeleteFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersDeleteFieldInput>>;
};

export type ProjectDisconnectInput = {
  impacts?: InputMaybe<Array<ProjectImpactsDisconnectFieldInput>>;
  impactAreas?: InputMaybe<Array<ProjectImpactAreasDisconnectFieldInput>>;
  contexts?: InputMaybe<ProjectContextsDisconnectInput>;
  statuses?: InputMaybe<Array<ProjectStatusesDisconnectFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersDisconnectFieldInput>>;
};

export type ProjectImpactAreasAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ProjectImpactAreasAggregateInput>>;
  OR?: InputMaybe<Array<ProjectImpactAreasAggregateInput>>;
  NOT?: InputMaybe<ProjectImpactAreasAggregateInput>;
  node?: InputMaybe<ProjectImpactAreasNodeAggregationWhereInput>;
  edge?: InputMaybe<ProjectImpactAreasEdgeAggregationWhereInput>;
};

export type ProjectImpactAreasConnectFieldInput = {
  where?: InputMaybe<ImpactAreaConnectWhere>;
  connect?: InputMaybe<Array<ImpactAreaConnectInput>>;
  edge: ProjectImpactsCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ProjectImpactAreasConnectionSort = {
  edge?: InputMaybe<ProjectImpactsSort>;
  node?: InputMaybe<ImpactAreaSort>;
};

export type ProjectImpactAreasConnectionWhere = {
  AND?: InputMaybe<Array<ProjectImpactAreasConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectImpactAreasConnectionWhere>>;
  NOT?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  edge?: InputMaybe<ProjectImpactsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ProjectImpactsWhere>;
  node?: InputMaybe<ImpactAreaWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ImpactAreaWhere>;
};

export type ProjectImpactAreasConnectOrCreateFieldInput = {
  where: ImpactAreaConnectOrCreateWhere;
  onCreate: ProjectImpactAreasConnectOrCreateFieldInputOnCreate;
};

export type ProjectImpactAreasConnectOrCreateFieldInputOnCreate = {
  node: ImpactAreaOnCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type ProjectImpactAreasCreateFieldInput = {
  node: ImpactAreaCreateInput;
  edge: ProjectImpactsCreateInput;
};

export type ProjectImpactAreasDeleteFieldInput = {
  where?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  delete?: InputMaybe<ImpactAreaDeleteInput>;
};

export type ProjectImpactAreasDisconnectFieldInput = {
  where?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  disconnect?: InputMaybe<ImpactAreaDisconnectInput>;
};

export type ProjectImpactAreasEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectImpactAreasEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectImpactAreasEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectImpactAreasEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectImpactAreasFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<ProjectImpactAreasConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<ProjectImpactAreasCreateFieldInput>>;
  connect?: InputMaybe<Array<ProjectImpactAreasConnectFieldInput>>;
};

export type ProjectImpactAreasNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectImpactAreasNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectImpactAreasNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectImpactAreasNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  description_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  description_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  questions_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  questions_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  questions_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  questions_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectImpactAreasUpdateConnectionInput = {
  node?: InputMaybe<ImpactAreaUpdateInput>;
  edge?: InputMaybe<ProjectImpactsUpdateInput>;
};

export type ProjectImpactAreasUpdateFieldInput = {
  where?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<ProjectImpactAreasConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<ProjectImpactAreasCreateFieldInput>>;
  connect?: InputMaybe<Array<ProjectImpactAreasConnectFieldInput>>;
  update?: InputMaybe<ProjectImpactAreasUpdateConnectionInput>;
  delete?: InputMaybe<Array<ProjectImpactAreasDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectImpactAreasDisconnectFieldInput>>;
};

export type ProjectImpactsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ProjectImpactsAggregateInput>>;
  OR?: InputMaybe<Array<ProjectImpactsAggregateInput>>;
  NOT?: InputMaybe<ProjectImpactsAggregateInput>;
  node?: InputMaybe<ProjectImpactsNodeAggregationWhereInput>;
};

export type ProjectImpactsConnectFieldInput = {
  where?: InputMaybe<ImpactConnectWhere>;
  connect?: InputMaybe<Array<ImpactConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ProjectImpactsConnectionSort = {
  node?: InputMaybe<ImpactSort>;
};

export type ProjectImpactsConnectionWhere = {
  AND?: InputMaybe<Array<ProjectImpactsConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectImpactsConnectionWhere>>;
  NOT?: InputMaybe<ProjectImpactsConnectionWhere>;
  node?: InputMaybe<ImpactWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ImpactWhere>;
};

export type ProjectImpactsCreateFieldInput = {
  node: ImpactCreateInput;
};

export type ProjectImpactsCreateInput = {
  description: Scalars["String"]["input"];
};

export type ProjectImpactsDeleteFieldInput = {
  where?: InputMaybe<ProjectImpactsConnectionWhere>;
  delete?: InputMaybe<ImpactDeleteInput>;
};

export type ProjectImpactsDisconnectFieldInput = {
  where?: InputMaybe<ProjectImpactsConnectionWhere>;
  disconnect?: InputMaybe<ImpactDisconnectInput>;
};

export type ProjectImpactsFieldInput = {
  create?: InputMaybe<Array<ProjectImpactsCreateFieldInput>>;
  connect?: InputMaybe<Array<ProjectImpactsConnectFieldInput>>;
};

export type ProjectImpactsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectImpactsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectImpactsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectImpactsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectImpactsSort = {
  description?: InputMaybe<SortDirection>;
};

export type ProjectImpactsUpdateConnectionInput = {
  node?: InputMaybe<ImpactUpdateInput>;
};

export type ProjectImpactsUpdateFieldInput = {
  where?: InputMaybe<ProjectImpactsConnectionWhere>;
  create?: InputMaybe<Array<ProjectImpactsCreateFieldInput>>;
  connect?: InputMaybe<Array<ProjectImpactsConnectFieldInput>>;
  update?: InputMaybe<ProjectImpactsUpdateConnectionInput>;
  delete?: InputMaybe<Array<ProjectImpactsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectImpactsDisconnectFieldInput>>;
};

export type ProjectImpactsUpdateInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectImpactsWhere = {
  OR?: InputMaybe<Array<ProjectImpactsWhere>>;
  AND?: InputMaybe<Array<ProjectImpactsWhere>>;
  NOT?: InputMaybe<ProjectImpactsWhere>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT?: InputMaybe<Scalars["String"]["input"]>;
  description_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  description_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  description_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  description_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectOnCreateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  uniqueName: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  website?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  problem?: InputMaybe<Scalars["String"]["input"]>;
  solution?: InputMaybe<Scalars["String"]["input"]>;
  employees?: InputMaybe<Scalars["String"]["input"]>;
  context?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectOptions = {
  /** Specify one or more ProjectSort objects to sort Projects by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProjectSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectRelationInput = {
  impacts?: InputMaybe<Array<ProjectImpactsCreateFieldInput>>;
  impactAreas?: InputMaybe<Array<ProjectImpactAreasCreateFieldInput>>;
  contexts?: InputMaybe<ProjectContextsCreateFieldInput>;
  statuses?: InputMaybe<Array<ProjectStatusesCreateFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersCreateFieldInput>>;
};

/** Fields to sort Projects by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProjectSort object. */
export type ProjectSort = {
  id?: InputMaybe<SortDirection>;
  uniqueName?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  website?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  problem?: InputMaybe<SortDirection>;
  solution?: InputMaybe<SortDirection>;
  employees?: InputMaybe<SortDirection>;
  context?: InputMaybe<SortDirection>;
};

export type ProjectStatusDetailsCreateInput = {
  message?: InputMaybe<Scalars["String"]["input"]>;
  dump?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectStatusDetailsSort = {
  message?: InputMaybe<SortDirection>;
  dump?: InputMaybe<SortDirection>;
  timestamp?: InputMaybe<SortDirection>;
};

export type ProjectStatusDetailsUpdateInput = {
  message?: InputMaybe<Scalars["String"]["input"]>;
  dump?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectStatusDetailsWhere = {
  OR?: InputMaybe<Array<ProjectStatusDetailsWhere>>;
  AND?: InputMaybe<Array<ProjectStatusDetailsWhere>>;
  NOT?: InputMaybe<ProjectStatusDetailsWhere>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  message_NOT?: InputMaybe<Scalars["String"]["input"]>;
  message_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  message_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  message_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  message_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  message_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  message_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  message_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  message_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dump?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dump_NOT?: InputMaybe<Scalars["String"]["input"]>;
  dump_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dump_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dump_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  dump_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dump_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dump_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dump_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dump_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timestamp_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timestamp_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  timestamp_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProjectStatusesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ProjectStatusesAggregateInput>>;
  OR?: InputMaybe<Array<ProjectStatusesAggregateInput>>;
  NOT?: InputMaybe<ProjectStatusesAggregateInput>;
  edge?: InputMaybe<ProjectStatusesEdgeAggregationWhereInput>;
};

export type ProjectStatusesConnectFieldInput = {
  where?: InputMaybe<StatusConnectWhere>;
  connect?: InputMaybe<Array<StatusConnectInput>>;
  edge?: InputMaybe<ProjectStatusDetailsCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ProjectStatusesConnectionSort = {
  edge?: InputMaybe<ProjectStatusDetailsSort>;
  node?: InputMaybe<StatusSort>;
};

export type ProjectStatusesConnectionWhere = {
  AND?: InputMaybe<Array<ProjectStatusesConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectStatusesConnectionWhere>>;
  NOT?: InputMaybe<ProjectStatusesConnectionWhere>;
  edge?: InputMaybe<ProjectStatusDetailsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ProjectStatusDetailsWhere>;
  node?: InputMaybe<StatusWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<StatusWhere>;
};

export type ProjectStatusesConnectOrCreateFieldInput = {
  where: StatusConnectOrCreateWhere;
  onCreate: ProjectStatusesConnectOrCreateFieldInputOnCreate;
};

export type ProjectStatusesConnectOrCreateFieldInputOnCreate = {
  node: StatusOnCreateInput;
  edge?: InputMaybe<ProjectStatusDetailsCreateInput>;
};

export type ProjectStatusesCreateFieldInput = {
  node: StatusCreateInput;
  edge?: InputMaybe<ProjectStatusDetailsCreateInput>;
};

export type ProjectStatusesDeleteFieldInput = {
  where?: InputMaybe<ProjectStatusesConnectionWhere>;
  delete?: InputMaybe<StatusDeleteInput>;
};

export type ProjectStatusesDisconnectFieldInput = {
  where?: InputMaybe<ProjectStatusesConnectionWhere>;
  disconnect?: InputMaybe<StatusDisconnectInput>;
};

export type ProjectStatusesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectStatusesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectStatusesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectStatusesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProjectStatusesFieldInput = {
  connectOrCreate?: InputMaybe<Array<ProjectStatusesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectStatusesCreateFieldInput>>;
  connect?: InputMaybe<Array<ProjectStatusesConnectFieldInput>>;
};

export type ProjectStatusesUpdateConnectionInput = {
  node?: InputMaybe<StatusUpdateInput>;
  edge?: InputMaybe<ProjectStatusDetailsUpdateInput>;
};

export type ProjectStatusesUpdateFieldInput = {
  where?: InputMaybe<ProjectStatusesConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<ProjectStatusesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectStatusesCreateFieldInput>>;
  connect?: InputMaybe<Array<ProjectStatusesConnectFieldInput>>;
  update?: InputMaybe<ProjectStatusesUpdateConnectionInput>;
  delete?: InputMaybe<Array<ProjectStatusesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectStatusesDisconnectFieldInput>>;
};

export type ProjectUniqueWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  uniqueName?: InputMaybe<Scalars["String"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProjectUpdateInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  uniqueName?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  problem?: InputMaybe<Scalars["String"]["input"]>;
  solution?: InputMaybe<Scalars["String"]["input"]>;
  employees?: InputMaybe<Scalars["String"]["input"]>;
  context?: InputMaybe<Scalars["String"]["input"]>;
  impacts?: InputMaybe<Array<ProjectImpactsUpdateFieldInput>>;
  impactAreas?: InputMaybe<Array<ProjectImpactAreasUpdateFieldInput>>;
  contexts?: InputMaybe<ProjectContextsUpdateInput>;
  statuses?: InputMaybe<Array<ProjectStatusesUpdateFieldInput>>;
  users?: InputMaybe<Array<ProjectUsersUpdateFieldInput>>;
};

export type ProjectUsersAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ProjectUsersAggregateInput>>;
  OR?: InputMaybe<Array<ProjectUsersAggregateInput>>;
  NOT?: InputMaybe<ProjectUsersAggregateInput>;
  node?: InputMaybe<ProjectUsersNodeAggregationWhereInput>;
  edge?: InputMaybe<ProjectUsersEdgeAggregationWhereInput>;
};

export type ProjectUsersConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>;
  edge?: InputMaybe<UserInteractionDetailsCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ProjectUsersConnectionSort = {
  edge?: InputMaybe<UserInteractionDetailsSort>;
  node?: InputMaybe<UserSort>;
};

export type ProjectUsersConnectionWhere = {
  AND?: InputMaybe<Array<ProjectUsersConnectionWhere>>;
  OR?: InputMaybe<Array<ProjectUsersConnectionWhere>>;
  NOT?: InputMaybe<ProjectUsersConnectionWhere>;
  edge?: InputMaybe<UserInteractionDetailsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<UserInteractionDetailsWhere>;
  node?: InputMaybe<UserWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>;
};

export type ProjectUsersConnectOrCreateFieldInput = {
  where: UserConnectOrCreateWhere;
  onCreate: ProjectUsersConnectOrCreateFieldInputOnCreate;
};

export type ProjectUsersConnectOrCreateFieldInputOnCreate = {
  node: UserOnCreateInput;
  edge?: InputMaybe<UserInteractionDetailsCreateInput>;
};

export type ProjectUsersCreateFieldInput = {
  node: UserCreateInput;
  edge?: InputMaybe<UserInteractionDetailsCreateInput>;
};

export type ProjectUsersDeleteFieldInput = {
  where?: InputMaybe<ProjectUsersConnectionWhere>;
};

export type ProjectUsersDisconnectFieldInput = {
  where?: InputMaybe<ProjectUsersConnectionWhere>;
};

export type ProjectUsersEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectUsersEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectUsersEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectUsersEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProjectUsersFieldInput = {
  connectOrCreate?: InputMaybe<Array<ProjectUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectUsersCreateFieldInput>>;
  connect?: InputMaybe<Array<ProjectUsersConnectFieldInput>>;
};

export type ProjectUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProjectUsersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ProjectUsersNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProjectUsersNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  email_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  email_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  email_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  email_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  familyName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  familyName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  familyName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  familyName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  familyName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  familyName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  familyName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  familyName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  familyName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  familyName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  familyName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  familyName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  familyName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  familyName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  familyName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  familyName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  familyName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  familyName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  familyName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  familyName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  familyName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  GivenName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  GivenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  GivenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  GivenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  GivenName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  GivenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  GivenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  GivenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  GivenName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  GivenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  GivenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  GivenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  GivenName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  GivenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  GivenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  GivenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  GivenName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  GivenName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  GivenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  GivenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  GivenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProjectUsersUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
  edge?: InputMaybe<UserInteractionDetailsUpdateInput>;
};

export type ProjectUsersUpdateFieldInput = {
  where?: InputMaybe<ProjectUsersConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<ProjectUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProjectUsersCreateFieldInput>>;
  connect?: InputMaybe<Array<ProjectUsersConnectFieldInput>>;
  update?: InputMaybe<ProjectUsersUpdateConnectionInput>;
  delete?: InputMaybe<Array<ProjectUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProjectUsersDisconnectFieldInput>>;
};

export type ProjectWhere = {
  OR?: InputMaybe<Array<ProjectWhere>>;
  AND?: InputMaybe<Array<ProjectWhere>>;
  NOT?: InputMaybe<ProjectWhere>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  uniqueName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  uniqueName_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  uniqueName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  uniqueName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  uniqueName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  uniqueName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>;
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  website?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  website_NOT?: InputMaybe<Scalars["String"]["input"]>;
  website_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  website_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  website_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  website_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  website_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  website_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  website_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  website_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  problem?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  problem_NOT?: InputMaybe<Scalars["String"]["input"]>;
  problem_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  problem_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  problem_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  problem_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  problem_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  problem_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  problem_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  problem_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  solution?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  solution_NOT?: InputMaybe<Scalars["String"]["input"]>;
  solution_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  solution_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  solution_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  solution_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  solution_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  solution_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  solution_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  solution_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  employees?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  employees_NOT?: InputMaybe<Scalars["String"]["input"]>;
  employees_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  employees_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  employees_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  employees_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  employees_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  employees_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  employees_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  employees_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  context?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  context_NOT?: InputMaybe<Scalars["String"]["input"]>;
  context_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  context_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  context_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  context_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  context_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  context_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  context_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  context_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Use `impacts_SOME` instead. */
  impacts?: InputMaybe<ImpactWhere>;
  /** @deprecated Use `impacts_NONE` instead. */
  impacts_NOT?: InputMaybe<ImpactWhere>;
  impactsAggregate?: InputMaybe<ProjectImpactsAggregateInput>;
  /** Return Projects where all of the related Impacts match this filter */
  impacts_ALL?: InputMaybe<ImpactWhere>;
  /** Return Projects where none of the related Impacts match this filter */
  impacts_NONE?: InputMaybe<ImpactWhere>;
  /** Return Projects where one of the related Impacts match this filter */
  impacts_SINGLE?: InputMaybe<ImpactWhere>;
  /** Return Projects where some of the related Impacts match this filter */
  impacts_SOME?: InputMaybe<ImpactWhere>;
  /** @deprecated Use `impactAreas_SOME` instead. */
  impactAreas?: InputMaybe<ImpactAreaWhere>;
  /** @deprecated Use `impactAreas_NONE` instead. */
  impactAreas_NOT?: InputMaybe<ImpactAreaWhere>;
  impactAreasAggregate?: InputMaybe<ProjectImpactAreasAggregateInput>;
  /** Return Projects where all of the related ImpactAreas match this filter */
  impactAreas_ALL?: InputMaybe<ImpactAreaWhere>;
  /** Return Projects where none of the related ImpactAreas match this filter */
  impactAreas_NONE?: InputMaybe<ImpactAreaWhere>;
  /** Return Projects where one of the related ImpactAreas match this filter */
  impactAreas_SINGLE?: InputMaybe<ImpactAreaWhere>;
  /** Return Projects where some of the related ImpactAreas match this filter */
  impactAreas_SOME?: InputMaybe<ImpactAreaWhere>;
  /** @deprecated Use `statuses_SOME` instead. */
  statuses?: InputMaybe<StatusWhere>;
  /** @deprecated Use `statuses_NONE` instead. */
  statuses_NOT?: InputMaybe<StatusWhere>;
  statusesAggregate?: InputMaybe<ProjectStatusesAggregateInput>;
  /** Return Projects where all of the related Statuses match this filter */
  statuses_ALL?: InputMaybe<StatusWhere>;
  /** Return Projects where none of the related Statuses match this filter */
  statuses_NONE?: InputMaybe<StatusWhere>;
  /** Return Projects where one of the related Statuses match this filter */
  statuses_SINGLE?: InputMaybe<StatusWhere>;
  /** Return Projects where some of the related Statuses match this filter */
  statuses_SOME?: InputMaybe<StatusWhere>;
  /** @deprecated Use `users_SOME` instead. */
  users?: InputMaybe<UserWhere>;
  /** @deprecated Use `users_NONE` instead. */
  users_NOT?: InputMaybe<UserWhere>;
  usersAggregate?: InputMaybe<ProjectUsersAggregateInput>;
  /** Return Projects where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>;
  /** Return Projects where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>;
  /** Return Projects where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>;
  /** Return Projects where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>;
  /** @deprecated Use `impactsConnection_SOME` instead. */
  impactsConnection?: InputMaybe<ProjectImpactsConnectionWhere>;
  /** @deprecated Use `impactsConnection_NONE` instead. */
  impactsConnection_NOT?: InputMaybe<ProjectImpactsConnectionWhere>;
  /** Return Projects where all of the related ProjectImpactsConnections match this filter */
  impactsConnection_ALL?: InputMaybe<ProjectImpactsConnectionWhere>;
  /** Return Projects where none of the related ProjectImpactsConnections match this filter */
  impactsConnection_NONE?: InputMaybe<ProjectImpactsConnectionWhere>;
  /** Return Projects where one of the related ProjectImpactsConnections match this filter */
  impactsConnection_SINGLE?: InputMaybe<ProjectImpactsConnectionWhere>;
  /** Return Projects where some of the related ProjectImpactsConnections match this filter */
  impactsConnection_SOME?: InputMaybe<ProjectImpactsConnectionWhere>;
  /** @deprecated Use `impactAreasConnection_SOME` instead. */
  impactAreasConnection?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  /** @deprecated Use `impactAreasConnection_NONE` instead. */
  impactAreasConnection_NOT?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  /** Return Projects where all of the related ProjectImpactAreasConnections match this filter */
  impactAreasConnection_ALL?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  /** Return Projects where none of the related ProjectImpactAreasConnections match this filter */
  impactAreasConnection_NONE?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  /** Return Projects where one of the related ProjectImpactAreasConnections match this filter */
  impactAreasConnection_SINGLE?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  /** Return Projects where some of the related ProjectImpactAreasConnections match this filter */
  impactAreasConnection_SOME?: InputMaybe<ProjectImpactAreasConnectionWhere>;
  contextsConnection?: InputMaybe<ProjectContextsConnectionWhere>;
  contextsConnection_NOT?: InputMaybe<ProjectContextsConnectionWhere>;
  /** @deprecated Use `statusesConnection_SOME` instead. */
  statusesConnection?: InputMaybe<ProjectStatusesConnectionWhere>;
  /** @deprecated Use `statusesConnection_NONE` instead. */
  statusesConnection_NOT?: InputMaybe<ProjectStatusesConnectionWhere>;
  /** Return Projects where all of the related ProjectStatusesConnections match this filter */
  statusesConnection_ALL?: InputMaybe<ProjectStatusesConnectionWhere>;
  /** Return Projects where none of the related ProjectStatusesConnections match this filter */
  statusesConnection_NONE?: InputMaybe<ProjectStatusesConnectionWhere>;
  /** Return Projects where one of the related ProjectStatusesConnections match this filter */
  statusesConnection_SINGLE?: InputMaybe<ProjectStatusesConnectionWhere>;
  /** Return Projects where some of the related ProjectStatusesConnections match this filter */
  statusesConnection_SOME?: InputMaybe<ProjectStatusesConnectionWhere>;
  /** @deprecated Use `usersConnection_SOME` instead. */
  usersConnection?: InputMaybe<ProjectUsersConnectionWhere>;
  /** @deprecated Use `usersConnection_NONE` instead. */
  usersConnection_NOT?: InputMaybe<ProjectUsersConnectionWhere>;
  /** Return Projects where all of the related ProjectUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<ProjectUsersConnectionWhere>;
  /** Return Projects where none of the related ProjectUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<ProjectUsersConnectionWhere>;
  /** Return Projects where one of the related ProjectUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<ProjectUsersConnectionWhere>;
  /** Return Projects where some of the related ProjectUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<ProjectUsersConnectionWhere>;
};

export type QueryOptions = {
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StatusConnectInput = {
  projects?: InputMaybe<Array<StatusProjectsConnectFieldInput>>;
};

export type StatusConnectOrCreateInput = {
  projects?: InputMaybe<Array<StatusProjectsConnectOrCreateFieldInput>>;
};

export type StatusConnectOrCreateWhere = {
  node: StatusUniqueWhere;
};

export type StatusConnectWhere = {
  node: StatusWhere;
};

export type StatusCreateInput = {
  name: ProjectStatus;
  projects?: InputMaybe<StatusProjectsFieldInput>;
};

export type StatusDeleteInput = {
  projects?: InputMaybe<Array<StatusProjectsDeleteFieldInput>>;
};

export type StatusDisconnectInput = {
  projects?: InputMaybe<Array<StatusProjectsDisconnectFieldInput>>;
};

export type StatusOnCreateInput = {
  name: ProjectStatus;
};

export type StatusOptions = {
  /** Specify one or more StatusSort objects to sort Statuses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StatusSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StatusProjectsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<StatusProjectsAggregateInput>>;
  OR?: InputMaybe<Array<StatusProjectsAggregateInput>>;
  NOT?: InputMaybe<StatusProjectsAggregateInput>;
  node?: InputMaybe<StatusProjectsNodeAggregationWhereInput>;
  edge?: InputMaybe<StatusProjectsEdgeAggregationWhereInput>;
};

export type StatusProjectsConnectFieldInput = {
  where?: InputMaybe<ProjectConnectWhere>;
  connect?: InputMaybe<Array<ProjectConnectInput>>;
  edge?: InputMaybe<ProjectStatusDetailsCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type StatusProjectsConnectionSort = {
  edge?: InputMaybe<ProjectStatusDetailsSort>;
  node?: InputMaybe<ProjectSort>;
};

export type StatusProjectsConnectionWhere = {
  AND?: InputMaybe<Array<StatusProjectsConnectionWhere>>;
  OR?: InputMaybe<Array<StatusProjectsConnectionWhere>>;
  NOT?: InputMaybe<StatusProjectsConnectionWhere>;
  edge?: InputMaybe<ProjectStatusDetailsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ProjectStatusDetailsWhere>;
  node?: InputMaybe<ProjectWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ProjectWhere>;
};

export type StatusProjectsConnectOrCreateFieldInput = {
  where: ProjectConnectOrCreateWhere;
  onCreate: StatusProjectsConnectOrCreateFieldInputOnCreate;
};

export type StatusProjectsConnectOrCreateFieldInputOnCreate = {
  node: ProjectOnCreateInput;
  edge?: InputMaybe<ProjectStatusDetailsCreateInput>;
};

export type StatusProjectsCreateFieldInput = {
  node: ProjectCreateInput;
  edge?: InputMaybe<ProjectStatusDetailsCreateInput>;
};

export type StatusProjectsDeleteFieldInput = {
  where?: InputMaybe<StatusProjectsConnectionWhere>;
  delete?: InputMaybe<ProjectDeleteInput>;
};

export type StatusProjectsDisconnectFieldInput = {
  where?: InputMaybe<StatusProjectsConnectionWhere>;
  disconnect?: InputMaybe<ProjectDisconnectInput>;
};

export type StatusProjectsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<StatusProjectsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<StatusProjectsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<StatusProjectsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  message_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  message_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  message_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  message_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  dump_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  dump_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  dump_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  dump_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  timestamp_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type StatusProjectsFieldInput = {
  connectOrCreate?: InputMaybe<Array<StatusProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StatusProjectsCreateFieldInput>>;
  connect?: InputMaybe<Array<StatusProjectsConnectFieldInput>>;
};

export type StatusProjectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StatusProjectsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<StatusProjectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StatusProjectsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  uniqueName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  uniqueName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  uniqueName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  website_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  website_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  website_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  website_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  problem_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  problem_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  problem_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  problem_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  solution_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  solution_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  solution_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  solution_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  employees_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  employees_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  employees_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  employees_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  context_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  context_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  context_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  context_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type StatusProjectsUpdateConnectionInput = {
  node?: InputMaybe<ProjectUpdateInput>;
  edge?: InputMaybe<ProjectStatusDetailsUpdateInput>;
};

export type StatusProjectsUpdateFieldInput = {
  where?: InputMaybe<StatusProjectsConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<StatusProjectsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StatusProjectsCreateFieldInput>>;
  connect?: InputMaybe<Array<StatusProjectsConnectFieldInput>>;
  update?: InputMaybe<StatusProjectsUpdateConnectionInput>;
  delete?: InputMaybe<Array<StatusProjectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<StatusProjectsDisconnectFieldInput>>;
};

export type StatusRelationInput = {
  projects?: InputMaybe<Array<StatusProjectsCreateFieldInput>>;
};

/** Fields to sort Statuses by. The order in which sorts are applied is not guaranteed when specifying many fields in one StatusSort object. */
export type StatusSort = {
  name?: InputMaybe<SortDirection>;
};

export type StatusUniqueWhere = {
  name?: InputMaybe<ProjectStatus>;
};

export type StatusUpdateInput = {
  name?: InputMaybe<ProjectStatus>;
  projects?: InputMaybe<Array<StatusProjectsUpdateFieldInput>>;
};

export type StatusWhere = {
  OR?: InputMaybe<Array<StatusWhere>>;
  AND?: InputMaybe<Array<StatusWhere>>;
  NOT?: InputMaybe<StatusWhere>;
  name?: InputMaybe<ProjectStatus>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<ProjectStatus>;
  name_IN?: InputMaybe<Array<ProjectStatus>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<ProjectStatus>>;
  /** @deprecated Use `projects_SOME` instead. */
  projects?: InputMaybe<ProjectWhere>;
  /** @deprecated Use `projects_NONE` instead. */
  projects_NOT?: InputMaybe<ProjectWhere>;
  projectsAggregate?: InputMaybe<StatusProjectsAggregateInput>;
  /** Return Statuses where all of the related Projects match this filter */
  projects_ALL?: InputMaybe<ProjectWhere>;
  /** Return Statuses where none of the related Projects match this filter */
  projects_NONE?: InputMaybe<ProjectWhere>;
  /** Return Statuses where one of the related Projects match this filter */
  projects_SINGLE?: InputMaybe<ProjectWhere>;
  /** Return Statuses where some of the related Projects match this filter */
  projects_SOME?: InputMaybe<ProjectWhere>;
  /** @deprecated Use `projectsConnection_SOME` instead. */
  projectsConnection?: InputMaybe<StatusProjectsConnectionWhere>;
  /** @deprecated Use `projectsConnection_NONE` instead. */
  projectsConnection_NOT?: InputMaybe<StatusProjectsConnectionWhere>;
  /** Return Statuses where all of the related StatusProjectsConnections match this filter */
  projectsConnection_ALL?: InputMaybe<StatusProjectsConnectionWhere>;
  /** Return Statuses where none of the related StatusProjectsConnections match this filter */
  projectsConnection_NONE?: InputMaybe<StatusProjectsConnectionWhere>;
  /** Return Statuses where one of the related StatusProjectsConnections match this filter */
  projectsConnection_SINGLE?: InputMaybe<StatusProjectsConnectionWhere>;
  /** Return Statuses where some of the related StatusProjectsConnections match this filter */
  projectsConnection_SOME?: InputMaybe<StatusProjectsConnectionWhere>;
};

export type UnifiedContextWhere = {
  Context?: InputMaybe<ContextWhere>;
  GeoContext?: InputMaybe<GeoContextWhere>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  email: Scalars["String"]["input"];
  familyName?: InputMaybe<Scalars["String"]["input"]>;
  GivenName?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserInteractionDetailsCreateInput = {
  message?: InputMaybe<Scalars["String"]["input"]>;
  dump?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserInteractionDetailsSort = {
  message?: InputMaybe<SortDirection>;
  dump?: InputMaybe<SortDirection>;
  timestamp?: InputMaybe<SortDirection>;
};

export type UserInteractionDetailsUpdateInput = {
  message?: InputMaybe<Scalars["String"]["input"]>;
  dump?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserInteractionDetailsWhere = {
  OR?: InputMaybe<Array<UserInteractionDetailsWhere>>;
  AND?: InputMaybe<Array<UserInteractionDetailsWhere>>;
  NOT?: InputMaybe<UserInteractionDetailsWhere>;
  message?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  message_NOT?: InputMaybe<Scalars["String"]["input"]>;
  message_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  message_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  message_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  message_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  message_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  message_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  message_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  message_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dump?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dump_NOT?: InputMaybe<Scalars["String"]["input"]>;
  dump_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dump_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  dump_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  dump_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  dump_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dump_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dump_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  dump_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timestamp_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timestamp_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  timestamp_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  timestamp_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type UserOnCreateInput = {
  email: Scalars["String"]["input"];
  familyName?: InputMaybe<Scalars["String"]["input"]>;
  GivenName?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserOptions = {
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  email?: InputMaybe<SortDirection>;
  familyName?: InputMaybe<SortDirection>;
  GivenName?: InputMaybe<SortDirection>;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  familyName?: InputMaybe<Scalars["String"]["input"]>;
  GivenName?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserWhere = {
  OR?: InputMaybe<Array<UserWhere>>;
  AND?: InputMaybe<Array<UserWhere>>;
  NOT?: InputMaybe<UserWhere>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT?: InputMaybe<Scalars["String"]["input"]>;
  email_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  email_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  email_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  email_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  email_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  familyName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  familyName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  familyName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  familyName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  familyName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  familyName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  familyName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  familyName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  familyName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  familyName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  GivenName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  GivenName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  GivenName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  GivenName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  GivenName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  GivenName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  GivenName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  GivenName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  GivenName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  GivenName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
};

export interface StatusAggregateSelectionInput {
  count?: boolean;
}

export declare class StatusModel {
  public find(args?: {
    where?: StatusWhere;

    options?: StatusOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Status[]>;
  public create(args: {
    input: StatusCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateStatusesMutationResponse>;
  public update(args: {
    where?: StatusWhere;
    update?: StatusUpdateInput;
    connect?: StatusConnectInput;
    disconnect?: StatusDisconnectInput;
    create?: StatusCreateInput;
    connectOrCreate?: StatusConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateStatusesMutationResponse>;
  public delete(args: {
    where?: StatusWhere;
    delete?: StatusDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: StatusWhere;

    aggregate: StatusAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<StatusAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface UserAggregateSelectionInput {
  count?: boolean;
  email?: StringAggregateInputNonNullable;
  familyName?: StringAggregateInputNullable;
  GivenName?: StringAggregateInputNullable;
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere;

    options?: UserOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<User[]>;
  public create(args: {
    input: UserCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateUsersMutationResponse>;
  public update(args: {
    where?: UserWhere;
    update?: UserUpdateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateUsersMutationResponse>;
  public delete(args: {
    where?: UserWhere;

    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: UserWhere;

    aggregate: UserAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<UserAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface ProjectAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNullable;
  uniqueName?: StringAggregateInputNonNullable;
  name?: StringAggregateInputNonNullable;
  website?: StringAggregateInputNullable;
  problem?: StringAggregateInputNullable;
  solution?: StringAggregateInputNullable;
  employees?: StringAggregateInputNullable;
  context?: StringAggregateInputNullable;
}

export declare class ProjectModel {
  public find(args?: {
    where?: ProjectWhere;

    options?: ProjectOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Project[]>;
  public create(args: {
    input: ProjectCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateProjectsMutationResponse>;
  public update(args: {
    where?: ProjectWhere;
    update?: ProjectUpdateInput;
    connect?: ProjectConnectInput;
    disconnect?: ProjectDisconnectInput;
    create?: ProjectCreateInput;
    connectOrCreate?: ProjectConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateProjectsMutationResponse>;
  public delete(args: {
    where?: ProjectWhere;
    delete?: ProjectDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ProjectWhere;

    aggregate: ProjectAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ProjectAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface ImpactAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
}

export declare class ImpactModel {
  public find(args?: {
    where?: ImpactWhere;

    options?: ImpactOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Impact[]>;
  public create(args: {
    input: ImpactCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateImpactsMutationResponse>;
  public update(args: {
    where?: ImpactWhere;
    update?: ImpactUpdateInput;
    connect?: ImpactConnectInput;
    disconnect?: ImpactDisconnectInput;
    create?: ImpactCreateInput;
    connectOrCreate?: ImpactConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateImpactsMutationResponse>;
  public delete(args: {
    where?: ImpactWhere;
    delete?: ImpactDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ImpactWhere;

    aggregate: ImpactAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ImpactAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface ImpactAreaAggregateSelectionInput {
  count?: boolean;
  uniqueName?: StringAggregateInputNonNullable;
  context?: StringAggregateInputNullable;
  description?: StringAggregateInputNullable;
  name?: StringAggregateInputNonNullable;
  questions?: StringAggregateInputNullable;
}

export declare class ImpactAreaModel {
  public find(args?: {
    where?: ImpactAreaWhere;

    options?: ImpactAreaOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<ImpactArea[]>;
  public create(args: {
    input: ImpactAreaCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateImpactAreasMutationResponse>;
  public update(args: {
    where?: ImpactAreaWhere;
    update?: ImpactAreaUpdateInput;
    connect?: ImpactAreaConnectInput;
    disconnect?: ImpactAreaDisconnectInput;
    create?: ImpactAreaCreateInput;
    connectOrCreate?: ImpactAreaConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateImpactAreasMutationResponse>;
  public delete(args: {
    where?: ImpactAreaWhere;
    delete?: ImpactAreaDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ImpactAreaWhere;

    aggregate: ImpactAreaAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ImpactAreaAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface ImpactCategoryAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
}

export declare class ImpactCategoryModel {
  public find(args?: {
    where?: ImpactCategoryWhere;

    options?: ImpactCategoryOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<ImpactCategory[]>;
  public create(args: {
    input: ImpactCategoryCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateImpactCategoriesMutationResponse>;
  public update(args: {
    where?: ImpactCategoryWhere;
    update?: ImpactCategoryUpdateInput;
    connect?: ImpactCategoryConnectInput;
    disconnect?: ImpactCategoryDisconnectInput;
    create?: ImpactCategoryCreateInput;
    connectOrCreate?: ImpactCategoryConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateImpactCategoriesMutationResponse>;
  public delete(args: {
    where?: ImpactCategoryWhere;
    delete?: ImpactCategoryDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ImpactCategoryWhere;

    aggregate: ImpactCategoryAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ImpactCategoryAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DoughnutCategoryAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
}

export declare class DoughnutCategoryModel {
  public find(args?: {
    where?: DoughnutCategoryWhere;

    options?: DoughnutCategoryOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<DoughnutCategory[]>;
  public create(args: {
    input: DoughnutCategoryCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateDoughnutCategoriesMutationResponse>;
  public update(args: {
    where?: DoughnutCategoryWhere;
    update?: DoughnutCategoryUpdateInput;
    connect?: DoughnutCategoryConnectInput;
    disconnect?: DoughnutCategoryDisconnectInput;
    create?: DoughnutCategoryCreateInput;
    connectOrCreate?: DoughnutCategoryConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateDoughnutCategoriesMutationResponse>;
  public delete(args: {
    where?: DoughnutCategoryWhere;
    delete?: DoughnutCategoryDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: DoughnutCategoryWhere;

    aggregate: DoughnutCategoryAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<DoughnutCategoryAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface ContextAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNullable;
  name?: StringAggregateInputNullable;
  description?: StringAggregateInputNonNullable;
}

export declare class ContextModel {
  public find(args?: {
    where?: ContextWhere;

    options?: ContextOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Context[]>;
  public create(args: {
    input: ContextCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateContextsMutationResponse>;
  public update(args: {
    where?: ContextWhere;
    update?: ContextUpdateInput;
    connect?: ContextConnectInput;
    disconnect?: ContextDisconnectInput;
    create?: ContextCreateInput;
    connectOrCreate?: ContextConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateContextsMutationResponse>;
  public delete(args: {
    where?: ContextWhere;
    delete?: ContextDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ContextWhere;

    aggregate: ContextAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ContextAggregateSelection>;
}

export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface IdAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface GeoContextAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNullable;
  name?: StringAggregateInputNullable;
  state?: StringAggregateInputNullable;
  city?: StringAggregateInputNullable;
  description?: StringAggregateInputNonNullable;
}

export declare class GeoContextModel {
  public find(args?: {
    where?: GeoContextWhere;

    options?: GeoContextOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<GeoContext[]>;
  public create(args: {
    input: GeoContextCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateGeoContextsMutationResponse>;
  public update(args: {
    where?: GeoContextWhere;
    update?: GeoContextUpdateInput;
    connect?: GeoContextConnectInput;
    disconnect?: GeoContextDisconnectInput;
    create?: GeoContextCreateInput;
    connectOrCreate?: GeoContextConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateGeoContextsMutationResponse>;
  public delete(args: {
    where?: GeoContextWhere;
    delete?: GeoContextDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: GeoContextWhere;

    aggregate: GeoContextAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<GeoContextAggregateSelection>;
}

export interface ModelMap {
  Status: StatusModel;
  User: UserModel;
  Project: ProjectModel;
  Impact: ImpactModel;
  ImpactArea: ImpactAreaModel;
  ImpactCategory: ImpactCategoryModel;
  DoughnutCategory: DoughnutCategoryModel;
  Context: ContextModel;
  GeoContext: GeoContextModel;
}
