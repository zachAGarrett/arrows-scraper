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
  /** A date, represented as a 'yyyy-mm-dd' string */
  Date: { input: any; output: any };
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any };
};

export type Query = {
  __typename?: "Query";
  arrows: Array<Arrow>;
  arrowsConnection: ArrowsConnection;
  arrowsAggregate: ArrowAggregateSelection;
  sets: Array<Set>;
  setsConnection: SetsConnection;
  setsAggregate: SetAggregateSelection;
  targets: Array<Target>;
  targetsConnection: TargetsConnection;
  targetsAggregate: TargetAggregateSelection;
  matches: Array<Match>;
  matchesConnection: MatchesConnection;
  matchesAggregate: MatchAggregateSelection;
  events: Array<Event>;
  eventsConnection: EventsConnection;
  eventsAggregate: EventAggregateSelection;
  competitions: Array<Competition>;
  competitionsConnection: CompetitionsConnection;
  competitionsAggregate: CompetitionAggregateSelection;
  athletes: Array<Athlete>;
  athletesConnection: AthletesConnection;
  athletesAggregate: AthleteAggregateSelection;
  nations: Array<Nation>;
  nationsConnection: NationsConnection;
  nationsAggregate: NationAggregateSelection;
  divisions: Array<Division>;
  divisionsConnection: DivisionsConnection;
  divisionsAggregate: DivisionAggregateSelection;
  dataSources: Array<DataSource>;
  dataSourcesConnection: DataSourcesConnection;
  dataSourcesAggregate: DataSourceAggregateSelection;
};

export type QueryArrowsArgs = {
  where?: InputMaybe<ArrowWhere>;
  options?: InputMaybe<ArrowOptions>;
};

export type QueryArrowsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<ArrowWhere>;
  sort?: InputMaybe<Array<InputMaybe<ArrowSort>>>;
};

export type QueryArrowsAggregateArgs = {
  where?: InputMaybe<ArrowWhere>;
};

export type QuerySetsArgs = {
  where?: InputMaybe<SetWhere>;
  options?: InputMaybe<SetOptions>;
};

export type QuerySetsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<SetWhere>;
  sort?: InputMaybe<Array<InputMaybe<SetSort>>>;
};

export type QuerySetsAggregateArgs = {
  where?: InputMaybe<SetWhere>;
};

export type QueryTargetsArgs = {
  where?: InputMaybe<TargetWhere>;
  options?: InputMaybe<TargetOptions>;
};

export type QueryTargetsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<TargetWhere>;
  sort?: InputMaybe<Array<InputMaybe<TargetSort>>>;
};

export type QueryTargetsAggregateArgs = {
  where?: InputMaybe<TargetWhere>;
};

export type QueryMatchesArgs = {
  where?: InputMaybe<MatchWhere>;
  options?: InputMaybe<MatchOptions>;
};

export type QueryMatchesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<MatchWhere>;
  sort?: InputMaybe<Array<InputMaybe<MatchSort>>>;
};

export type QueryMatchesAggregateArgs = {
  where?: InputMaybe<MatchWhere>;
};

export type QueryEventsArgs = {
  where?: InputMaybe<EventWhere>;
  options?: InputMaybe<EventOptions>;
};

export type QueryEventsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<EventWhere>;
  sort?: InputMaybe<Array<InputMaybe<EventSort>>>;
};

export type QueryEventsAggregateArgs = {
  where?: InputMaybe<EventWhere>;
};

export type QueryCompetitionsArgs = {
  where?: InputMaybe<CompetitionWhere>;
  options?: InputMaybe<CompetitionOptions>;
};

export type QueryCompetitionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<CompetitionWhere>;
  sort?: InputMaybe<Array<InputMaybe<CompetitionSort>>>;
};

export type QueryCompetitionsAggregateArgs = {
  where?: InputMaybe<CompetitionWhere>;
};

export type QueryAthletesArgs = {
  where?: InputMaybe<AthleteWhere>;
  options?: InputMaybe<AthleteOptions>;
};

export type QueryAthletesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<AthleteWhere>;
  sort?: InputMaybe<Array<InputMaybe<AthleteSort>>>;
};

export type QueryAthletesAggregateArgs = {
  where?: InputMaybe<AthleteWhere>;
};

export type QueryNationsArgs = {
  where?: InputMaybe<NationWhere>;
  options?: InputMaybe<NationOptions>;
};

export type QueryNationsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<NationWhere>;
  sort?: InputMaybe<Array<InputMaybe<NationSort>>>;
};

export type QueryNationsAggregateArgs = {
  where?: InputMaybe<NationWhere>;
};

export type QueryDivisionsArgs = {
  where?: InputMaybe<DivisionWhere>;
  options?: InputMaybe<DivisionOptions>;
};

export type QueryDivisionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<DivisionWhere>;
  sort?: InputMaybe<Array<InputMaybe<DivisionSort>>>;
};

export type QueryDivisionsAggregateArgs = {
  where?: InputMaybe<DivisionWhere>;
};

export type QueryDataSourcesArgs = {
  where?: InputMaybe<DataSourceWhere>;
  options?: InputMaybe<DataSourceOptions>;
};

export type QueryDataSourcesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  where?: InputMaybe<DataSourceWhere>;
  sort?: InputMaybe<Array<InputMaybe<DataSourceSort>>>;
};

export type QueryDataSourcesAggregateArgs = {
  where?: InputMaybe<DataSourceWhere>;
};

export type Mutation = {
  __typename?: "Mutation";
  createArrows: CreateArrowsMutationResponse;
  deleteArrows: DeleteInfo;
  updateArrows: UpdateArrowsMutationResponse;
  createSets: CreateSetsMutationResponse;
  deleteSets: DeleteInfo;
  updateSets: UpdateSetsMutationResponse;
  createTargets: CreateTargetsMutationResponse;
  deleteTargets: DeleteInfo;
  updateTargets: UpdateTargetsMutationResponse;
  createMatches: CreateMatchesMutationResponse;
  deleteMatches: DeleteInfo;
  updateMatches: UpdateMatchesMutationResponse;
  createEvents: CreateEventsMutationResponse;
  deleteEvents: DeleteInfo;
  updateEvents: UpdateEventsMutationResponse;
  createCompetitions: CreateCompetitionsMutationResponse;
  deleteCompetitions: DeleteInfo;
  updateCompetitions: UpdateCompetitionsMutationResponse;
  createAthletes: CreateAthletesMutationResponse;
  deleteAthletes: DeleteInfo;
  updateAthletes: UpdateAthletesMutationResponse;
  createNations: CreateNationsMutationResponse;
  deleteNations: DeleteInfo;
  updateNations: UpdateNationsMutationResponse;
  createDivisions: CreateDivisionsMutationResponse;
  deleteDivisions: DeleteInfo;
  updateDivisions: UpdateDivisionsMutationResponse;
  createDataSources: CreateDataSourcesMutationResponse;
  deleteDataSources: DeleteInfo;
  updateDataSources: UpdateDataSourcesMutationResponse;
};

export type MutationCreateArrowsArgs = {
  input: Array<ArrowCreateInput>;
};

export type MutationDeleteArrowsArgs = {
  where?: InputMaybe<ArrowWhere>;
  delete?: InputMaybe<ArrowDeleteInput>;
};

export type MutationUpdateArrowsArgs = {
  where?: InputMaybe<ArrowWhere>;
  update?: InputMaybe<ArrowUpdateInput>;
  connect?: InputMaybe<ArrowConnectInput>;
  disconnect?: InputMaybe<ArrowDisconnectInput>;
  create?: InputMaybe<ArrowRelationInput>;
  delete?: InputMaybe<ArrowDeleteInput>;
};

export type MutationCreateSetsArgs = {
  input: Array<SetCreateInput>;
};

export type MutationDeleteSetsArgs = {
  where?: InputMaybe<SetWhere>;
  delete?: InputMaybe<SetDeleteInput>;
};

export type MutationUpdateSetsArgs = {
  where?: InputMaybe<SetWhere>;
  update?: InputMaybe<SetUpdateInput>;
  connect?: InputMaybe<SetConnectInput>;
  disconnect?: InputMaybe<SetDisconnectInput>;
  create?: InputMaybe<SetRelationInput>;
  delete?: InputMaybe<SetDeleteInput>;
  connectOrCreate?: InputMaybe<SetConnectOrCreateInput>;
};

export type MutationCreateTargetsArgs = {
  input: Array<TargetCreateInput>;
};

export type MutationDeleteTargetsArgs = {
  where?: InputMaybe<TargetWhere>;
  delete?: InputMaybe<TargetDeleteInput>;
};

export type MutationUpdateTargetsArgs = {
  where?: InputMaybe<TargetWhere>;
  update?: InputMaybe<TargetUpdateInput>;
  connect?: InputMaybe<TargetConnectInput>;
  disconnect?: InputMaybe<TargetDisconnectInput>;
  create?: InputMaybe<TargetRelationInput>;
  delete?: InputMaybe<TargetDeleteInput>;
};

export type MutationCreateMatchesArgs = {
  input: Array<MatchCreateInput>;
};

export type MutationDeleteMatchesArgs = {
  where?: InputMaybe<MatchWhere>;
  delete?: InputMaybe<MatchDeleteInput>;
};

export type MutationUpdateMatchesArgs = {
  where?: InputMaybe<MatchWhere>;
  update?: InputMaybe<MatchUpdateInput>;
  connect?: InputMaybe<MatchConnectInput>;
  disconnect?: InputMaybe<MatchDisconnectInput>;
  create?: InputMaybe<MatchRelationInput>;
  delete?: InputMaybe<MatchDeleteInput>;
  connectOrCreate?: InputMaybe<MatchConnectOrCreateInput>;
};

export type MutationCreateEventsArgs = {
  input: Array<EventCreateInput>;
};

export type MutationDeleteEventsArgs = {
  where?: InputMaybe<EventWhere>;
  delete?: InputMaybe<EventDeleteInput>;
};

export type MutationUpdateEventsArgs = {
  where?: InputMaybe<EventWhere>;
  update?: InputMaybe<EventUpdateInput>;
  connect?: InputMaybe<EventConnectInput>;
  disconnect?: InputMaybe<EventDisconnectInput>;
  create?: InputMaybe<EventRelationInput>;
  delete?: InputMaybe<EventDeleteInput>;
  connectOrCreate?: InputMaybe<EventConnectOrCreateInput>;
};

export type MutationCreateCompetitionsArgs = {
  input: Array<CompetitionCreateInput>;
};

export type MutationDeleteCompetitionsArgs = {
  where?: InputMaybe<CompetitionWhere>;
  delete?: InputMaybe<CompetitionDeleteInput>;
};

export type MutationUpdateCompetitionsArgs = {
  where?: InputMaybe<CompetitionWhere>;
  update?: InputMaybe<CompetitionUpdateInput>;
  connect?: InputMaybe<CompetitionConnectInput>;
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
  create?: InputMaybe<CompetitionRelationInput>;
  delete?: InputMaybe<CompetitionDeleteInput>;
  connectOrCreate?: InputMaybe<CompetitionConnectOrCreateInput>;
};

export type MutationCreateAthletesArgs = {
  input: Array<AthleteCreateInput>;
};

export type MutationDeleteAthletesArgs = {
  where?: InputMaybe<AthleteWhere>;
  delete?: InputMaybe<AthleteDeleteInput>;
};

export type MutationUpdateAthletesArgs = {
  where?: InputMaybe<AthleteWhere>;
  update?: InputMaybe<AthleteUpdateInput>;
  connect?: InputMaybe<AthleteConnectInput>;
  disconnect?: InputMaybe<AthleteDisconnectInput>;
  create?: InputMaybe<AthleteRelationInput>;
  delete?: InputMaybe<AthleteDeleteInput>;
  connectOrCreate?: InputMaybe<AthleteConnectOrCreateInput>;
};

export type MutationCreateNationsArgs = {
  input: Array<NationCreateInput>;
};

export type MutationDeleteNationsArgs = {
  where?: InputMaybe<NationWhere>;
  delete?: InputMaybe<NationDeleteInput>;
};

export type MutationUpdateNationsArgs = {
  where?: InputMaybe<NationWhere>;
  update?: InputMaybe<NationUpdateInput>;
  connect?: InputMaybe<NationConnectInput>;
  disconnect?: InputMaybe<NationDisconnectInput>;
  create?: InputMaybe<NationRelationInput>;
  delete?: InputMaybe<NationDeleteInput>;
};

export type MutationCreateDivisionsArgs = {
  input: Array<DivisionCreateInput>;
};

export type MutationDeleteDivisionsArgs = {
  where?: InputMaybe<DivisionWhere>;
  delete?: InputMaybe<DivisionDeleteInput>;
};

export type MutationUpdateDivisionsArgs = {
  where?: InputMaybe<DivisionWhere>;
  update?: InputMaybe<DivisionUpdateInput>;
  connect?: InputMaybe<DivisionConnectInput>;
  disconnect?: InputMaybe<DivisionDisconnectInput>;
  create?: InputMaybe<DivisionRelationInput>;
  delete?: InputMaybe<DivisionDeleteInput>;
  connectOrCreate?: InputMaybe<DivisionConnectOrCreateInput>;
};

export type MutationCreateDataSourcesArgs = {
  input: Array<DataSourceCreateInput>;
};

export type MutationDeleteDataSourcesArgs = {
  where?: InputMaybe<DataSourceWhere>;
  delete?: InputMaybe<DataSourceDeleteInput>;
};

export type MutationUpdateDataSourcesArgs = {
  where?: InputMaybe<DataSourceWhere>;
  update?: InputMaybe<DataSourceUpdateInput>;
  connect?: InputMaybe<DataSourceConnectInput>;
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
  create?: InputMaybe<DataSourceRelationInput>;
  delete?: InputMaybe<DataSourceDeleteInput>;
};

export enum DataSourceType {
  /** A data source on the internet */
  Web = "WEB",
}

export enum MatchGender {
  /** Male match gender */
  M = "M",
  /** Female match gender */
  F = "F",
  /** Mixed gender match */
  X = "X",
}

export enum MatchStyle {
  /** Qualification event */
  Qual = "QUAL",
  /** Elimination event */
  Elim = "ELIM",
}

export enum NameOrder {
  /** First / Last */
  F = "F",
  /** Last / First */
  L = "L",
}

export enum Result {
  /** Win */
  W = "W",
  /** Loss */
  L = "L",
  /** Draw */
  D = "D",
}

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export type ArrowOf = {
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type AthleteCompetes = {
  eloDelta?: Maybe<Scalars["Int"]["output"]>;
};

export type AthleteShoots = {
  eloDelta?: Maybe<Scalars["Int"]["output"]>;
  result?: Maybe<Result>;
};

export type EventOf = {
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type InDataSource = {
  id?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type MatchOf = {
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type SetAtTarget = {
  /** Distance of the target in meters */
  distance: Scalars["Int"]["output"];
};

export type SetOf = {
  number: Scalars["Int"]["output"];
};

export type Arrow = {
  __typename?: "Arrow";
  value: Scalars["Int"]["output"];
  offset?: Maybe<Scalars["Float"]["output"]>;
  angle?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  verified: Scalars["Boolean"]["output"];
  recordedAt?: Maybe<Scalars["DateTime"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  set: Set;
  setAggregate?: Maybe<ArrowSetSetAggregationSelection>;
  setConnection: ArrowSetConnection;
};

export type ArrowSetArgs = {
  where?: InputMaybe<SetWhere>;
  options?: InputMaybe<SetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArrowSetAggregateArgs = {
  where?: InputMaybe<SetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ArrowSetConnectionArgs = {
  where?: InputMaybe<ArrowSetConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<ArrowSetConnectionSort>>;
};

export type ArrowAggregateSelection = {
  __typename?: "ArrowAggregateSelection";
  count: Scalars["Int"]["output"];
  value: IntAggregateSelectionNonNullable;
  offset: FloatAggregateSelectionNullable;
  angle: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  recordedAt: DateTimeAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type ArrowEdge = {
  __typename?: "ArrowEdge";
  cursor: Scalars["String"]["output"];
  node: Arrow;
};

export type ArrowsConnection = {
  __typename?: "ArrowsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<ArrowEdge>;
};

export type ArrowSetConnection = {
  __typename?: "ArrowSetConnection";
  edges: Array<ArrowSetRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type ArrowSetRelationship = ArrowOf & {
  __typename?: "ArrowSetRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type ArrowSetSetAggregationSelection = {
  __typename?: "ArrowSetSetAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<ArrowSetSetNodeAggregateSelection>;
  edge?: Maybe<ArrowSetSetEdgeAggregateSelection>;
};

export type ArrowSetSetEdgeAggregateSelection = {
  __typename?: "ArrowSetSetEdgeAggregateSelection";
  number: IntAggregateSelectionNullable;
};

export type ArrowSetSetNodeAggregateSelection = {
  __typename?: "ArrowSetSetNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type Athlete = {
  __typename?: "Athlete";
  familyName?: Maybe<Scalars["String"]["output"]>;
  givenName?: Maybe<Scalars["String"]["output"]>;
  elimElo?: Maybe<Scalars["Int"]["output"]>;
  qualElo?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  verified: Scalars["Boolean"]["output"];
  nameOrder?: Maybe<NameOrder>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  sets: Array<Set>;
  setsAggregate?: Maybe<AthleteSetSetsAggregationSelection>;
  matches: Array<Event>;
  matchesAggregate?: Maybe<AthleteEventMatchesAggregationSelection>;
  divisions: Array<Division>;
  divisionsAggregate?: Maybe<AthleteDivisionDivisionsAggregationSelection>;
  competitions: Array<Competition>;
  competitionsAggregate?: Maybe<AthleteCompetitionCompetitionsAggregationSelection>;
  dataSources: Array<DataSource>;
  dataSourcesAggregate?: Maybe<AthleteDataSourceDataSourcesAggregationSelection>;
  nations: Array<Nation>;
  nationsAggregate?: Maybe<AthleteNationNationsAggregationSelection>;
  setsConnection: AthleteSetsConnection;
  matchesConnection: AthleteMatchesConnection;
  divisionsConnection: AthleteDivisionsConnection;
  competitionsConnection: AthleteCompetitionsConnection;
  dataSourcesConnection: AthleteDataSourcesConnection;
  nationsConnection: AthleteNationsConnection;
};

export type AthleteSetsArgs = {
  where?: InputMaybe<SetWhere>;
  options?: InputMaybe<SetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteSetsAggregateArgs = {
  where?: InputMaybe<SetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteMatchesArgs = {
  where?: InputMaybe<EventWhere>;
  options?: InputMaybe<EventOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteMatchesAggregateArgs = {
  where?: InputMaybe<EventWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteDivisionsArgs = {
  where?: InputMaybe<DivisionWhere>;
  options?: InputMaybe<DivisionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteDivisionsAggregateArgs = {
  where?: InputMaybe<DivisionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteCompetitionsArgs = {
  where?: InputMaybe<CompetitionWhere>;
  options?: InputMaybe<CompetitionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteCompetitionsAggregateArgs = {
  where?: InputMaybe<CompetitionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteDataSourcesArgs = {
  where?: InputMaybe<DataSourceWhere>;
  options?: InputMaybe<DataSourceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteDataSourcesAggregateArgs = {
  where?: InputMaybe<DataSourceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteNationsArgs = {
  where?: InputMaybe<NationWhere>;
  options?: InputMaybe<NationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteNationsAggregateArgs = {
  where?: InputMaybe<NationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AthleteSetsConnectionArgs = {
  where?: InputMaybe<AthleteSetsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<AthleteSetsConnectionSort>>;
};

export type AthleteMatchesConnectionArgs = {
  where?: InputMaybe<AthleteMatchesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<AthleteMatchesConnectionSort>>;
};

export type AthleteDivisionsConnectionArgs = {
  where?: InputMaybe<AthleteDivisionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<AthleteDivisionsConnectionSort>>;
};

export type AthleteCompetitionsConnectionArgs = {
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<AthleteCompetitionsConnectionSort>>;
};

export type AthleteDataSourcesConnectionArgs = {
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<AthleteDataSourcesConnectionSort>>;
};

export type AthleteNationsConnectionArgs = {
  where?: InputMaybe<AthleteNationsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<AthleteNationsConnectionSort>>;
};

export type AthleteAggregateSelection = {
  __typename?: "AthleteAggregateSelection";
  count: Scalars["Int"]["output"];
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  elimElo: IntAggregateSelectionNullable;
  qualElo: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteCompetitionCompetitionsAggregationSelection = {
  __typename?: "AthleteCompetitionCompetitionsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<AthleteCompetitionCompetitionsNodeAggregateSelection>;
};

export type AthleteCompetitionCompetitionsNodeAggregateSelection = {
  __typename?: "AthleteCompetitionCompetitionsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteCompetitionsConnection = {
  __typename?: "AthleteCompetitionsConnection";
  edges: Array<AthleteCompetitionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type AthleteCompetitionsRelationship = {
  __typename?: "AthleteCompetitionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Competition;
};

export type AthleteDataSourceDataSourcesAggregationSelection = {
  __typename?: "AthleteDataSourceDataSourcesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<AthleteDataSourceDataSourcesNodeAggregateSelection>;
  edge?: Maybe<AthleteDataSourceDataSourcesEdgeAggregateSelection>;
};

export type AthleteDataSourceDataSourcesEdgeAggregateSelection = {
  __typename?: "AthleteDataSourceDataSourcesEdgeAggregateSelection";
  id: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteDataSourceDataSourcesNodeAggregateSelection = {
  __typename?: "AthleteDataSourceDataSourcesNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteDataSourcesConnection = {
  __typename?: "AthleteDataSourcesConnection";
  edges: Array<AthleteDataSourcesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type AthleteDataSourcesRelationship = InDataSource & {
  __typename?: "AthleteDataSourcesRelationship";
  cursor: Scalars["String"]["output"];
  node: DataSource;
  id?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type AthleteDivisionDivisionsAggregationSelection = {
  __typename?: "AthleteDivisionDivisionsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<AthleteDivisionDivisionsNodeAggregateSelection>;
};

export type AthleteDivisionDivisionsNodeAggregateSelection = {
  __typename?: "AthleteDivisionDivisionsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteDivisionsConnection = {
  __typename?: "AthleteDivisionsConnection";
  edges: Array<AthleteDivisionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type AthleteDivisionsRelationship = {
  __typename?: "AthleteDivisionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Division;
};

export type AthleteEdge = {
  __typename?: "AthleteEdge";
  cursor: Scalars["String"]["output"];
  node: Athlete;
};

export type AthleteEventMatchesAggregationSelection = {
  __typename?: "AthleteEventMatchesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<AthleteEventMatchesNodeAggregateSelection>;
  edge?: Maybe<AthleteEventMatchesEdgeAggregateSelection>;
};

export type AthleteEventMatchesEdgeAggregateSelection = {
  __typename?: "AthleteEventMatchesEdgeAggregateSelection";
  eloDelta: IntAggregateSelectionNullable;
};

export type AthleteEventMatchesNodeAggregateSelection = {
  __typename?: "AthleteEventMatchesNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteMatchesConnection = {
  __typename?: "AthleteMatchesConnection";
  edges: Array<AthleteMatchesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type AthleteMatchesRelationship = AthleteCompetes & {
  __typename?: "AthleteMatchesRelationship";
  cursor: Scalars["String"]["output"];
  node: Event;
  eloDelta?: Maybe<Scalars["Int"]["output"]>;
};

export type AthleteNationNationsAggregationSelection = {
  __typename?: "AthleteNationNationsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<AthleteNationNationsNodeAggregateSelection>;
};

export type AthleteNationNationsNodeAggregateSelection = {
  __typename?: "AthleteNationNationsNodeAggregateSelection";
  name: StringAggregateSelectionNullable;
  code: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteNationsConnection = {
  __typename?: "AthleteNationsConnection";
  edges: Array<AthleteNationsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type AthleteNationsRelationship = {
  __typename?: "AthleteNationsRelationship";
  cursor: Scalars["String"]["output"];
  node: Nation;
};

export type AthletesConnection = {
  __typename?: "AthletesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<AthleteEdge>;
};

export type AthleteSetsConnection = {
  __typename?: "AthleteSetsConnection";
  edges: Array<AthleteSetsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type AthleteSetSetsAggregationSelection = {
  __typename?: "AthleteSetSetsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<AthleteSetSetsNodeAggregateSelection>;
  edge?: Maybe<AthleteSetSetsEdgeAggregateSelection>;
};

export type AthleteSetSetsEdgeAggregateSelection = {
  __typename?: "AthleteSetSetsEdgeAggregateSelection";
  eloDelta: IntAggregateSelectionNullable;
};

export type AthleteSetSetsNodeAggregateSelection = {
  __typename?: "AthleteSetSetsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type AthleteSetsRelationship = AthleteShoots & {
  __typename?: "AthleteSetsRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
  eloDelta?: Maybe<Scalars["Int"]["output"]>;
  result?: Maybe<Result>;
};

export type Competition = {
  __typename?: "Competition";
  complete: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  processed: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  verified: Scalars["Boolean"]["output"];
  start: Scalars["Date"]["output"];
  end: Scalars["Date"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  events: Array<Event>;
  eventsAggregate?: Maybe<CompetitionEventEventsAggregationSelection>;
  dataSources: Array<DataSource>;
  dataSourcesAggregate?: Maybe<CompetitionDataSourceDataSourcesAggregationSelection>;
  nation?: Maybe<Nation>;
  nationAggregate?: Maybe<CompetitionNationNationAggregationSelection>;
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<CompetitionAthleteAthletesAggregationSelection>;
  eventsConnection: CompetitionEventsConnection;
  dataSourcesConnection: CompetitionDataSourcesConnection;
  nationConnection: CompetitionNationConnection;
  athletesConnection: CompetitionAthletesConnection;
};

export type CompetitionEventsArgs = {
  where?: InputMaybe<EventWhere>;
  options?: InputMaybe<EventOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CompetitionEventsAggregateArgs = {
  where?: InputMaybe<EventWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CompetitionDataSourcesArgs = {
  where?: InputMaybe<DataSourceWhere>;
  options?: InputMaybe<DataSourceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CompetitionDataSourcesAggregateArgs = {
  where?: InputMaybe<DataSourceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CompetitionNationArgs = {
  where?: InputMaybe<NationWhere>;
  options?: InputMaybe<NationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CompetitionNationAggregateArgs = {
  where?: InputMaybe<NationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CompetitionAthletesArgs = {
  where?: InputMaybe<AthleteWhere>;
  options?: InputMaybe<AthleteOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CompetitionAthletesAggregateArgs = {
  where?: InputMaybe<AthleteWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type CompetitionEventsConnectionArgs = {
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CompetitionEventsConnectionSort>>;
};

export type CompetitionDataSourcesConnectionArgs = {
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CompetitionDataSourcesConnectionSort>>;
};

export type CompetitionNationConnectionArgs = {
  where?: InputMaybe<CompetitionNationConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CompetitionNationConnectionSort>>;
};

export type CompetitionAthletesConnectionArgs = {
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<CompetitionAthletesConnectionSort>>;
};

export type CompetitionAggregateSelection = {
  __typename?: "CompetitionAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionAthleteAthletesAggregationSelection = {
  __typename?: "CompetitionAthleteAthletesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CompetitionAthleteAthletesNodeAggregateSelection>;
};

export type CompetitionAthleteAthletesNodeAggregateSelection = {
  __typename?: "CompetitionAthleteAthletesNodeAggregateSelection";
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  elimElo: IntAggregateSelectionNullable;
  qualElo: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionAthletesConnection = {
  __typename?: "CompetitionAthletesConnection";
  edges: Array<CompetitionAthletesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CompetitionAthletesRelationship = {
  __typename?: "CompetitionAthletesRelationship";
  cursor: Scalars["String"]["output"];
  node: Athlete;
};

export type CompetitionDataSourceDataSourcesAggregationSelection = {
  __typename?: "CompetitionDataSourceDataSourcesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CompetitionDataSourceDataSourcesNodeAggregateSelection>;
  edge?: Maybe<CompetitionDataSourceDataSourcesEdgeAggregateSelection>;
};

export type CompetitionDataSourceDataSourcesEdgeAggregateSelection = {
  __typename?: "CompetitionDataSourceDataSourcesEdgeAggregateSelection";
  id: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionDataSourceDataSourcesNodeAggregateSelection = {
  __typename?: "CompetitionDataSourceDataSourcesNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionDataSourcesConnection = {
  __typename?: "CompetitionDataSourcesConnection";
  edges: Array<CompetitionDataSourcesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CompetitionDataSourcesRelationship = InDataSource & {
  __typename?: "CompetitionDataSourcesRelationship";
  cursor: Scalars["String"]["output"];
  node: DataSource;
  id?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type CompetitionEdge = {
  __typename?: "CompetitionEdge";
  cursor: Scalars["String"]["output"];
  node: Competition;
};

export type CompetitionEventEventsAggregationSelection = {
  __typename?: "CompetitionEventEventsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CompetitionEventEventsNodeAggregateSelection>;
  edge?: Maybe<CompetitionEventEventsEdgeAggregateSelection>;
};

export type CompetitionEventEventsEdgeAggregateSelection = {
  __typename?: "CompetitionEventEventsEdgeAggregateSelection";
  number: IntAggregateSelectionNullable;
};

export type CompetitionEventEventsNodeAggregateSelection = {
  __typename?: "CompetitionEventEventsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionEventsConnection = {
  __typename?: "CompetitionEventsConnection";
  edges: Array<CompetitionEventsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CompetitionEventsRelationship = EventOf & {
  __typename?: "CompetitionEventsRelationship";
  cursor: Scalars["String"]["output"];
  node: Event;
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type CompetitionNationConnection = {
  __typename?: "CompetitionNationConnection";
  edges: Array<CompetitionNationRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type CompetitionNationNationAggregationSelection = {
  __typename?: "CompetitionNationNationAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<CompetitionNationNationNodeAggregateSelection>;
};

export type CompetitionNationNationNodeAggregateSelection = {
  __typename?: "CompetitionNationNationNodeAggregateSelection";
  name: StringAggregateSelectionNullable;
  code: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type CompetitionNationRelationship = {
  __typename?: "CompetitionNationRelationship";
  cursor: Scalars["String"]["output"];
  node: Nation;
};

export type CompetitionsConnection = {
  __typename?: "CompetitionsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<CompetitionEdge>;
};

export type CreateArrowsMutationResponse = {
  __typename?: "CreateArrowsMutationResponse";
  info: CreateInfo;
  arrows: Array<Arrow>;
};

export type CreateAthletesMutationResponse = {
  __typename?: "CreateAthletesMutationResponse";
  info: CreateInfo;
  athletes: Array<Athlete>;
};

export type CreateCompetitionsMutationResponse = {
  __typename?: "CreateCompetitionsMutationResponse";
  info: CreateInfo;
  competitions: Array<Competition>;
};

export type CreateDataSourcesMutationResponse = {
  __typename?: "CreateDataSourcesMutationResponse";
  info: CreateInfo;
  dataSources: Array<DataSource>;
};

export type CreateDivisionsMutationResponse = {
  __typename?: "CreateDivisionsMutationResponse";
  info: CreateInfo;
  divisions: Array<Division>;
};

export type CreateEventsMutationResponse = {
  __typename?: "CreateEventsMutationResponse";
  info: CreateInfo;
  events: Array<Event>;
};

export type CreateInfo = {
  __typename?: "CreateInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesCreated: Scalars["Int"]["output"];
  relationshipsCreated: Scalars["Int"]["output"];
};

export type CreateMatchesMutationResponse = {
  __typename?: "CreateMatchesMutationResponse";
  info: CreateInfo;
  matches: Array<Match>;
};

export type CreateNationsMutationResponse = {
  __typename?: "CreateNationsMutationResponse";
  info: CreateInfo;
  nations: Array<Nation>;
};

export type CreateSetsMutationResponse = {
  __typename?: "CreateSetsMutationResponse";
  info: CreateInfo;
  sets: Array<Set>;
};

export type CreateTargetsMutationResponse = {
  __typename?: "CreateTargetsMutationResponse";
  info: CreateInfo;
  targets: Array<Target>;
};

export type DataSource = {
  __typename?: "DataSource";
  name: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  verified: Scalars["Boolean"]["output"];
  type: DataSourceType;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<DataSourceAthleteAthletesAggregationSelection>;
  competitions: Array<Competition>;
  competitionsAggregate?: Maybe<DataSourceCompetitionCompetitionsAggregationSelection>;
  events: Array<Event>;
  eventsAggregate?: Maybe<DataSourceEventEventsAggregationSelection>;
  athletesConnection: DataSourceAthletesConnection;
  competitionsConnection: DataSourceCompetitionsConnection;
  eventsConnection: DataSourceEventsConnection;
};

export type DataSourceAthletesArgs = {
  where?: InputMaybe<AthleteWhere>;
  options?: InputMaybe<AthleteOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DataSourceAthletesAggregateArgs = {
  where?: InputMaybe<AthleteWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DataSourceCompetitionsArgs = {
  where?: InputMaybe<CompetitionWhere>;
  options?: InputMaybe<CompetitionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DataSourceCompetitionsAggregateArgs = {
  where?: InputMaybe<CompetitionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DataSourceEventsArgs = {
  where?: InputMaybe<EventWhere>;
  options?: InputMaybe<EventOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DataSourceEventsAggregateArgs = {
  where?: InputMaybe<EventWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DataSourceAthletesConnectionArgs = {
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<DataSourceAthletesConnectionSort>>;
};

export type DataSourceCompetitionsConnectionArgs = {
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<DataSourceCompetitionsConnectionSort>>;
};

export type DataSourceEventsConnectionArgs = {
  where?: InputMaybe<DataSourceEventsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<DataSourceEventsConnectionSort>>;
};

export type DataSourceAggregateSelection = {
  __typename?: "DataSourceAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceAthleteAthletesAggregationSelection = {
  __typename?: "DataSourceAthleteAthletesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<DataSourceAthleteAthletesNodeAggregateSelection>;
  edge?: Maybe<DataSourceAthleteAthletesEdgeAggregateSelection>;
};

export type DataSourceAthleteAthletesEdgeAggregateSelection = {
  __typename?: "DataSourceAthleteAthletesEdgeAggregateSelection";
  id: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceAthleteAthletesNodeAggregateSelection = {
  __typename?: "DataSourceAthleteAthletesNodeAggregateSelection";
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  elimElo: IntAggregateSelectionNullable;
  qualElo: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceAthletesConnection = {
  __typename?: "DataSourceAthletesConnection";
  edges: Array<DataSourceAthletesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type DataSourceAthletesRelationship = InDataSource & {
  __typename?: "DataSourceAthletesRelationship";
  cursor: Scalars["String"]["output"];
  node: Athlete;
  id?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DataSourceCompetitionCompetitionsAggregationSelection = {
  __typename?: "DataSourceCompetitionCompetitionsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<DataSourceCompetitionCompetitionsNodeAggregateSelection>;
  edge?: Maybe<DataSourceCompetitionCompetitionsEdgeAggregateSelection>;
};

export type DataSourceCompetitionCompetitionsEdgeAggregateSelection = {
  __typename?: "DataSourceCompetitionCompetitionsEdgeAggregateSelection";
  id: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceCompetitionCompetitionsNodeAggregateSelection = {
  __typename?: "DataSourceCompetitionCompetitionsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceCompetitionsConnection = {
  __typename?: "DataSourceCompetitionsConnection";
  edges: Array<DataSourceCompetitionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type DataSourceCompetitionsRelationship = InDataSource & {
  __typename?: "DataSourceCompetitionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Competition;
  id?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DataSourceEdge = {
  __typename?: "DataSourceEdge";
  cursor: Scalars["String"]["output"];
  node: DataSource;
};

export type DataSourceEventEventsAggregationSelection = {
  __typename?: "DataSourceEventEventsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<DataSourceEventEventsNodeAggregateSelection>;
  edge?: Maybe<DataSourceEventEventsEdgeAggregateSelection>;
};

export type DataSourceEventEventsEdgeAggregateSelection = {
  __typename?: "DataSourceEventEventsEdgeAggregateSelection";
  id: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceEventEventsNodeAggregateSelection = {
  __typename?: "DataSourceEventEventsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DataSourceEventsConnection = {
  __typename?: "DataSourceEventsConnection";
  edges: Array<DataSourceEventsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type DataSourceEventsRelationship = InDataSource & {
  __typename?: "DataSourceEventsRelationship";
  cursor: Scalars["String"]["output"];
  node: Event;
  id?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DataSourcesConnection = {
  __typename?: "DataSourcesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<DataSourceEdge>;
};

export type DateTimeAggregateSelectionNonNullable = {
  __typename?: "DateTimeAggregateSelectionNonNullable";
  min: Scalars["DateTime"]["output"];
  max: Scalars["DateTime"]["output"];
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: "DateTimeAggregateSelectionNullable";
  min?: Maybe<Scalars["DateTime"]["output"]>;
  max?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DeleteInfo = {
  __typename?: "DeleteInfo";
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>;
  nodesDeleted: Scalars["Int"]["output"];
  relationshipsDeleted: Scalars["Int"]["output"];
};

export type Division = {
  __typename?: "Division";
  name: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  verified: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  dataSources: Array<DataSource>;
  dataSourcesAggregate?: Maybe<DivisionDataSourceDataSourcesAggregationSelection>;
  matches: Array<Match>;
  matchesAggregate?: Maybe<DivisionMatchMatchesAggregationSelection>;
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<DivisionAthleteAthletesAggregationSelection>;
  dataSourcesConnection: DivisionDataSourcesConnection;
  matchesConnection: DivisionMatchesConnection;
  athletesConnection: DivisionAthletesConnection;
};

export type DivisionDataSourcesArgs = {
  where?: InputMaybe<DataSourceWhere>;
  options?: InputMaybe<DataSourceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DivisionDataSourcesAggregateArgs = {
  where?: InputMaybe<DataSourceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DivisionMatchesArgs = {
  where?: InputMaybe<MatchWhere>;
  options?: InputMaybe<MatchOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DivisionMatchesAggregateArgs = {
  where?: InputMaybe<MatchWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DivisionAthletesArgs = {
  where?: InputMaybe<AthleteWhere>;
  options?: InputMaybe<AthleteOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DivisionAthletesAggregateArgs = {
  where?: InputMaybe<AthleteWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DivisionDataSourcesConnectionArgs = {
  where?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<DivisionDataSourcesConnectionSort>>;
};

export type DivisionMatchesConnectionArgs = {
  where?: InputMaybe<DivisionMatchesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<DivisionMatchesConnectionSort>>;
};

export type DivisionAthletesConnectionArgs = {
  where?: InputMaybe<DivisionAthletesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<DivisionAthletesConnectionSort>>;
};

export type DivisionAggregateSelection = {
  __typename?: "DivisionAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DivisionAthleteAthletesAggregationSelection = {
  __typename?: "DivisionAthleteAthletesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<DivisionAthleteAthletesNodeAggregateSelection>;
};

export type DivisionAthleteAthletesNodeAggregateSelection = {
  __typename?: "DivisionAthleteAthletesNodeAggregateSelection";
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  elimElo: IntAggregateSelectionNullable;
  qualElo: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DivisionAthletesConnection = {
  __typename?: "DivisionAthletesConnection";
  edges: Array<DivisionAthletesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type DivisionAthletesRelationship = {
  __typename?: "DivisionAthletesRelationship";
  cursor: Scalars["String"]["output"];
  node: Athlete;
};

export type DivisionDataSourceDataSourcesAggregationSelection = {
  __typename?: "DivisionDataSourceDataSourcesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<DivisionDataSourceDataSourcesNodeAggregateSelection>;
  edge?: Maybe<DivisionDataSourceDataSourcesEdgeAggregateSelection>;
};

export type DivisionDataSourceDataSourcesEdgeAggregateSelection = {
  __typename?: "DivisionDataSourceDataSourcesEdgeAggregateSelection";
  id: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DivisionDataSourceDataSourcesNodeAggregateSelection = {
  __typename?: "DivisionDataSourceDataSourcesNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DivisionDataSourcesConnection = {
  __typename?: "DivisionDataSourcesConnection";
  edges: Array<DivisionDataSourcesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type DivisionDataSourcesRelationship = InDataSource & {
  __typename?: "DivisionDataSourcesRelationship";
  cursor: Scalars["String"]["output"];
  node: DataSource;
  id?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type DivisionEdge = {
  __typename?: "DivisionEdge";
  cursor: Scalars["String"]["output"];
  node: Division;
};

export type DivisionMatchesConnection = {
  __typename?: "DivisionMatchesConnection";
  edges: Array<DivisionMatchesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type DivisionMatchesRelationship = {
  __typename?: "DivisionMatchesRelationship";
  cursor: Scalars["String"]["output"];
  node: Match;
};

export type DivisionMatchMatchesAggregationSelection = {
  __typename?: "DivisionMatchMatchesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<DivisionMatchMatchesNodeAggregateSelection>;
};

export type DivisionMatchMatchesNodeAggregateSelection = {
  __typename?: "DivisionMatchMatchesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type DivisionsConnection = {
  __typename?: "DivisionsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<DivisionEdge>;
};

export type Event = {
  __typename?: "Event";
  name: Scalars["String"]["output"];
  complete?: Maybe<Scalars["Boolean"]["output"]>;
  processed: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  verified: Scalars["Boolean"]["output"];
  start: Scalars["Date"]["output"];
  end: Scalars["Date"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  matches: Array<Match>;
  matchesAggregate?: Maybe<EventMatchMatchesAggregationSelection>;
  competition?: Maybe<Competition>;
  competitionAggregate?: Maybe<EventCompetitionCompetitionAggregationSelection>;
  dataSources: Array<DataSource>;
  dataSourcesAggregate?: Maybe<EventDataSourceDataSourcesAggregationSelection>;
  matchesConnection: EventMatchesConnection;
  competitionConnection: EventCompetitionConnection;
  dataSourcesConnection: EventDataSourcesConnection;
};

export type EventMatchesArgs = {
  where?: InputMaybe<MatchWhere>;
  options?: InputMaybe<MatchOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EventMatchesAggregateArgs = {
  where?: InputMaybe<MatchWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EventCompetitionArgs = {
  where?: InputMaybe<CompetitionWhere>;
  options?: InputMaybe<CompetitionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EventCompetitionAggregateArgs = {
  where?: InputMaybe<CompetitionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EventDataSourcesArgs = {
  where?: InputMaybe<DataSourceWhere>;
  options?: InputMaybe<DataSourceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EventDataSourcesAggregateArgs = {
  where?: InputMaybe<DataSourceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EventMatchesConnectionArgs = {
  where?: InputMaybe<EventMatchesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<EventMatchesConnectionSort>>;
};

export type EventCompetitionConnectionArgs = {
  where?: InputMaybe<EventCompetitionConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<EventCompetitionConnectionSort>>;
};

export type EventDataSourcesConnectionArgs = {
  where?: InputMaybe<EventDataSourcesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<EventDataSourcesConnectionSort>>;
};

export type EventAggregateSelection = {
  __typename?: "EventAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type EventCompetitionCompetitionAggregationSelection = {
  __typename?: "EventCompetitionCompetitionAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<EventCompetitionCompetitionNodeAggregateSelection>;
  edge?: Maybe<EventCompetitionCompetitionEdgeAggregateSelection>;
};

export type EventCompetitionCompetitionEdgeAggregateSelection = {
  __typename?: "EventCompetitionCompetitionEdgeAggregateSelection";
  number: IntAggregateSelectionNullable;
};

export type EventCompetitionCompetitionNodeAggregateSelection = {
  __typename?: "EventCompetitionCompetitionNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type EventCompetitionConnection = {
  __typename?: "EventCompetitionConnection";
  edges: Array<EventCompetitionRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type EventCompetitionRelationship = EventOf & {
  __typename?: "EventCompetitionRelationship";
  cursor: Scalars["String"]["output"];
  node: Competition;
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type EventDataSourceDataSourcesAggregationSelection = {
  __typename?: "EventDataSourceDataSourcesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<EventDataSourceDataSourcesNodeAggregateSelection>;
  edge?: Maybe<EventDataSourceDataSourcesEdgeAggregateSelection>;
};

export type EventDataSourceDataSourcesEdgeAggregateSelection = {
  __typename?: "EventDataSourceDataSourcesEdgeAggregateSelection";
  id: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type EventDataSourceDataSourcesNodeAggregateSelection = {
  __typename?: "EventDataSourceDataSourcesNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type EventDataSourcesConnection = {
  __typename?: "EventDataSourcesConnection";
  edges: Array<EventDataSourcesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type EventDataSourcesRelationship = InDataSource & {
  __typename?: "EventDataSourcesRelationship";
  cursor: Scalars["String"]["output"];
  node: DataSource;
  id?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type EventEdge = {
  __typename?: "EventEdge";
  cursor: Scalars["String"]["output"];
  node: Event;
};

export type EventMatchesConnection = {
  __typename?: "EventMatchesConnection";
  edges: Array<EventMatchesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type EventMatchesRelationship = MatchOf & {
  __typename?: "EventMatchesRelationship";
  cursor: Scalars["String"]["output"];
  node: Match;
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type EventMatchMatchesAggregationSelection = {
  __typename?: "EventMatchMatchesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<EventMatchMatchesNodeAggregateSelection>;
  edge?: Maybe<EventMatchMatchesEdgeAggregateSelection>;
};

export type EventMatchMatchesEdgeAggregateSelection = {
  __typename?: "EventMatchMatchesEdgeAggregateSelection";
  number: IntAggregateSelectionNullable;
};

export type EventMatchMatchesNodeAggregateSelection = {
  __typename?: "EventMatchMatchesNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type EventsConnection = {
  __typename?: "EventsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<EventEdge>;
};

export type FloatAggregateSelectionNullable = {
  __typename?: "FloatAggregateSelectionNullable";
  max?: Maybe<Scalars["Float"]["output"]>;
  min?: Maybe<Scalars["Float"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Float"]["output"]>;
};

export type IdAggregateSelectionNonNullable = {
  __typename?: "IDAggregateSelectionNonNullable";
  shortest: Scalars["ID"]["output"];
  longest: Scalars["ID"]["output"];
};

export type IntAggregateSelectionNonNullable = {
  __typename?: "IntAggregateSelectionNonNullable";
  max: Scalars["Int"]["output"];
  min: Scalars["Int"]["output"];
  average: Scalars["Float"]["output"];
  sum: Scalars["Int"]["output"];
};

export type IntAggregateSelectionNullable = {
  __typename?: "IntAggregateSelectionNullable";
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
  average?: Maybe<Scalars["Float"]["output"]>;
  sum?: Maybe<Scalars["Int"]["output"]>;
};

export type Match = {
  __typename?: "Match";
  complete: Scalars["Boolean"]["output"];
  processed: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  verified: Scalars["Boolean"]["output"];
  style: MatchStyle;
  gender: MatchGender;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  sets: Array<Set>;
  setsAggregate?: Maybe<MatchSetSetsAggregationSelection>;
  event?: Maybe<Event>;
  eventAggregate?: Maybe<MatchEventEventAggregationSelection>;
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<MatchAthleteAthletesAggregationSelection>;
  division: Division;
  divisionAggregate?: Maybe<MatchDivisionDivisionAggregationSelection>;
  dataSources: Array<DataSource>;
  dataSourcesAggregate?: Maybe<MatchDataSourceDataSourcesAggregationSelection>;
  setsConnection: MatchSetsConnection;
  eventConnection: MatchEventConnection;
  athletesConnection: MatchAthletesConnection;
  divisionConnection: MatchDivisionConnection;
  dataSourcesConnection: MatchDataSourcesConnection;
};

export type MatchSetsArgs = {
  where?: InputMaybe<SetWhere>;
  options?: InputMaybe<SetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MatchSetsAggregateArgs = {
  where?: InputMaybe<SetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MatchEventArgs = {
  where?: InputMaybe<EventWhere>;
  options?: InputMaybe<EventOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MatchEventAggregateArgs = {
  where?: InputMaybe<EventWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MatchAthletesArgs = {
  where?: InputMaybe<AthleteWhere>;
  options?: InputMaybe<AthleteOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MatchAthletesAggregateArgs = {
  where?: InputMaybe<AthleteWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MatchDivisionArgs = {
  where?: InputMaybe<DivisionWhere>;
  options?: InputMaybe<DivisionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MatchDivisionAggregateArgs = {
  where?: InputMaybe<DivisionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MatchDataSourcesArgs = {
  where?: InputMaybe<DataSourceWhere>;
  options?: InputMaybe<DataSourceOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MatchDataSourcesAggregateArgs = {
  where?: InputMaybe<DataSourceWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MatchSetsConnectionArgs = {
  where?: InputMaybe<MatchSetsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MatchSetsConnectionSort>>;
};

export type MatchEventConnectionArgs = {
  where?: InputMaybe<MatchEventConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MatchEventConnectionSort>>;
};

export type MatchAthletesConnectionArgs = {
  where?: InputMaybe<MatchAthletesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MatchAthletesConnectionSort>>;
};

export type MatchDivisionConnectionArgs = {
  where?: InputMaybe<MatchDivisionConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MatchDivisionConnectionSort>>;
};

export type MatchDataSourcesConnectionArgs = {
  where?: InputMaybe<MatchDataSourcesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<MatchDataSourcesConnectionSort>>;
};

export type MatchAggregateSelection = {
  __typename?: "MatchAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type MatchAthleteAthletesAggregationSelection = {
  __typename?: "MatchAthleteAthletesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MatchAthleteAthletesNodeAggregateSelection>;
  edge?: Maybe<MatchAthleteAthletesEdgeAggregateSelection>;
};

export type MatchAthleteAthletesEdgeAggregateSelection = {
  __typename?: "MatchAthleteAthletesEdgeAggregateSelection";
  eloDelta: IntAggregateSelectionNullable;
};

export type MatchAthleteAthletesNodeAggregateSelection = {
  __typename?: "MatchAthleteAthletesNodeAggregateSelection";
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  elimElo: IntAggregateSelectionNullable;
  qualElo: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type MatchAthletesConnection = {
  __typename?: "MatchAthletesConnection";
  edges: Array<MatchAthletesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MatchAthletesRelationship = AthleteCompetes & {
  __typename?: "MatchAthletesRelationship";
  cursor: Scalars["String"]["output"];
  node: Athlete;
  eloDelta?: Maybe<Scalars["Int"]["output"]>;
};

export type MatchDataSourceDataSourcesAggregationSelection = {
  __typename?: "MatchDataSourceDataSourcesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MatchDataSourceDataSourcesNodeAggregateSelection>;
  edge?: Maybe<MatchDataSourceDataSourcesEdgeAggregateSelection>;
};

export type MatchDataSourceDataSourcesEdgeAggregateSelection = {
  __typename?: "MatchDataSourceDataSourcesEdgeAggregateSelection";
  id: StringAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type MatchDataSourceDataSourcesNodeAggregateSelection = {
  __typename?: "MatchDataSourceDataSourcesNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type MatchDataSourcesConnection = {
  __typename?: "MatchDataSourcesConnection";
  edges: Array<MatchDataSourcesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MatchDataSourcesRelationship = InDataSource & {
  __typename?: "MatchDataSourcesRelationship";
  cursor: Scalars["String"]["output"];
  node: DataSource;
  id?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type MatchDivisionConnection = {
  __typename?: "MatchDivisionConnection";
  edges: Array<MatchDivisionRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MatchDivisionDivisionAggregationSelection = {
  __typename?: "MatchDivisionDivisionAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MatchDivisionDivisionNodeAggregateSelection>;
};

export type MatchDivisionDivisionNodeAggregateSelection = {
  __typename?: "MatchDivisionDivisionNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type MatchDivisionRelationship = {
  __typename?: "MatchDivisionRelationship";
  cursor: Scalars["String"]["output"];
  node: Division;
};

export type MatchEdge = {
  __typename?: "MatchEdge";
  cursor: Scalars["String"]["output"];
  node: Match;
};

export type MatchesConnection = {
  __typename?: "MatchesConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<MatchEdge>;
};

export type MatchEventConnection = {
  __typename?: "MatchEventConnection";
  edges: Array<MatchEventRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MatchEventEventAggregationSelection = {
  __typename?: "MatchEventEventAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MatchEventEventNodeAggregateSelection>;
  edge?: Maybe<MatchEventEventEdgeAggregateSelection>;
};

export type MatchEventEventEdgeAggregateSelection = {
  __typename?: "MatchEventEventEdgeAggregateSelection";
  number: IntAggregateSelectionNullable;
};

export type MatchEventEventNodeAggregateSelection = {
  __typename?: "MatchEventEventNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type MatchEventRelationship = MatchOf & {
  __typename?: "MatchEventRelationship";
  cursor: Scalars["String"]["output"];
  node: Event;
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type MatchSetsConnection = {
  __typename?: "MatchSetsConnection";
  edges: Array<MatchSetsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type MatchSetSetsAggregationSelection = {
  __typename?: "MatchSetSetsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<MatchSetSetsNodeAggregateSelection>;
  edge?: Maybe<MatchSetSetsEdgeAggregateSelection>;
};

export type MatchSetSetsEdgeAggregateSelection = {
  __typename?: "MatchSetSetsEdgeAggregateSelection";
  number: IntAggregateSelectionNonNullable;
};

export type MatchSetSetsNodeAggregateSelection = {
  __typename?: "MatchSetSetsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type MatchSetsRelationship = SetOf & {
  __typename?: "MatchSetsRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
  number: Scalars["Int"]["output"];
};

export type Nation = {
  __typename?: "Nation";
  name?: Maybe<Scalars["String"]["output"]>;
  code: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  verified: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  competitions: Array<Competition>;
  competitionsAggregate?: Maybe<NationCompetitionCompetitionsAggregationSelection>;
  athletes: Array<Athlete>;
  athletesAggregate?: Maybe<NationAthleteAthletesAggregationSelection>;
  competitionsConnection: NationCompetitionsConnection;
  athletesConnection: NationAthletesConnection;
};

export type NationCompetitionsArgs = {
  where?: InputMaybe<CompetitionWhere>;
  options?: InputMaybe<CompetitionOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NationCompetitionsAggregateArgs = {
  where?: InputMaybe<CompetitionWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NationAthletesArgs = {
  where?: InputMaybe<AthleteWhere>;
  options?: InputMaybe<AthleteOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NationAthletesAggregateArgs = {
  where?: InputMaybe<AthleteWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type NationCompetitionsConnectionArgs = {
  where?: InputMaybe<NationCompetitionsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<NationCompetitionsConnectionSort>>;
};

export type NationAthletesConnectionArgs = {
  where?: InputMaybe<NationAthletesConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<NationAthletesConnectionSort>>;
};

export type NationAggregateSelection = {
  __typename?: "NationAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNullable;
  code: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type NationAthleteAthletesAggregationSelection = {
  __typename?: "NationAthleteAthletesAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<NationAthleteAthletesNodeAggregateSelection>;
};

export type NationAthleteAthletesNodeAggregateSelection = {
  __typename?: "NationAthleteAthletesNodeAggregateSelection";
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  elimElo: IntAggregateSelectionNullable;
  qualElo: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type NationAthletesConnection = {
  __typename?: "NationAthletesConnection";
  edges: Array<NationAthletesRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type NationAthletesRelationship = {
  __typename?: "NationAthletesRelationship";
  cursor: Scalars["String"]["output"];
  node: Athlete;
};

export type NationCompetitionCompetitionsAggregationSelection = {
  __typename?: "NationCompetitionCompetitionsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<NationCompetitionCompetitionsNodeAggregateSelection>;
};

export type NationCompetitionCompetitionsNodeAggregateSelection = {
  __typename?: "NationCompetitionCompetitionsNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type NationCompetitionsConnection = {
  __typename?: "NationCompetitionsConnection";
  edges: Array<NationCompetitionsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type NationCompetitionsRelationship = {
  __typename?: "NationCompetitionsRelationship";
  cursor: Scalars["String"]["output"];
  node: Competition;
};

export type NationEdge = {
  __typename?: "NationEdge";
  cursor: Scalars["String"]["output"];
  node: Nation;
};

export type NationsConnection = {
  __typename?: "NationsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<NationEdge>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo";
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
  endCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Set = {
  __typename?: "Set";
  complete: Scalars["Boolean"]["output"];
  arrowsInOrder: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  verified: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  target: Target;
  targetAggregate?: Maybe<SetTargetTargetAggregationSelection>;
  arrows: Array<Arrow>;
  arrowsAggregate?: Maybe<SetArrowArrowsAggregationSelection>;
  sets: Array<Set>;
  setsAggregate?: Maybe<SetSetSetsAggregationSelection>;
  match?: Maybe<Match>;
  matchAggregate?: Maybe<SetMatchMatchAggregationSelection>;
  athlete: Athlete;
  athleteAggregate?: Maybe<SetAthleteAthleteAggregationSelection>;
  nation?: Maybe<Nation>;
  nationAggregate?: Maybe<SetNationNationAggregationSelection>;
  targetConnection: SetTargetConnection;
  arrowsConnection: SetArrowsConnection;
  setsConnection: SetSetsConnection;
  matchConnection: SetMatchConnection;
  athleteConnection: SetAthleteConnection;
  nationConnection: SetNationConnection;
};

export type SetTargetArgs = {
  where?: InputMaybe<TargetWhere>;
  options?: InputMaybe<TargetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetTargetAggregateArgs = {
  where?: InputMaybe<TargetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetArrowsArgs = {
  where?: InputMaybe<ArrowWhere>;
  options?: InputMaybe<ArrowOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetArrowsAggregateArgs = {
  where?: InputMaybe<ArrowWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetSetsArgs = {
  where?: InputMaybe<SetWhere>;
  options?: InputMaybe<SetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetSetsAggregateArgs = {
  where?: InputMaybe<SetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetMatchArgs = {
  where?: InputMaybe<MatchWhere>;
  options?: InputMaybe<MatchOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetMatchAggregateArgs = {
  where?: InputMaybe<MatchWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetAthleteArgs = {
  where?: InputMaybe<AthleteWhere>;
  options?: InputMaybe<AthleteOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetAthleteAggregateArgs = {
  where?: InputMaybe<AthleteWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetNationArgs = {
  where?: InputMaybe<NationWhere>;
  options?: InputMaybe<NationOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetNationAggregateArgs = {
  where?: InputMaybe<NationWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type SetTargetConnectionArgs = {
  where?: InputMaybe<SetTargetConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SetTargetConnectionSort>>;
};

export type SetArrowsConnectionArgs = {
  where?: InputMaybe<SetArrowsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SetArrowsConnectionSort>>;
};

export type SetSetsConnectionArgs = {
  where?: InputMaybe<SetSetsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SetSetsConnectionSort>>;
};

export type SetMatchConnectionArgs = {
  where?: InputMaybe<SetMatchConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SetMatchConnectionSort>>;
};

export type SetAthleteConnectionArgs = {
  where?: InputMaybe<SetAthleteConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SetAthleteConnectionSort>>;
};

export type SetNationConnectionArgs = {
  where?: InputMaybe<SetNationConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<SetNationConnectionSort>>;
};

export type SetAggregateSelection = {
  __typename?: "SetAggregateSelection";
  count: Scalars["Int"]["output"];
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type SetArrowArrowsAggregationSelection = {
  __typename?: "SetArrowArrowsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SetArrowArrowsNodeAggregateSelection>;
  edge?: Maybe<SetArrowArrowsEdgeAggregateSelection>;
};

export type SetArrowArrowsEdgeAggregateSelection = {
  __typename?: "SetArrowArrowsEdgeAggregateSelection";
  number: IntAggregateSelectionNullable;
};

export type SetArrowArrowsNodeAggregateSelection = {
  __typename?: "SetArrowArrowsNodeAggregateSelection";
  value: IntAggregateSelectionNonNullable;
  offset: FloatAggregateSelectionNullable;
  angle: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  recordedAt: DateTimeAggregateSelectionNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type SetArrowsConnection = {
  __typename?: "SetArrowsConnection";
  edges: Array<SetArrowsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SetArrowsRelationship = ArrowOf & {
  __typename?: "SetArrowsRelationship";
  cursor: Scalars["String"]["output"];
  node: Arrow;
  number?: Maybe<Scalars["Int"]["output"]>;
};

export type SetAthleteAthleteAggregationSelection = {
  __typename?: "SetAthleteAthleteAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SetAthleteAthleteNodeAggregateSelection>;
  edge?: Maybe<SetAthleteAthleteEdgeAggregateSelection>;
};

export type SetAthleteAthleteEdgeAggregateSelection = {
  __typename?: "SetAthleteAthleteEdgeAggregateSelection";
  eloDelta: IntAggregateSelectionNullable;
};

export type SetAthleteAthleteNodeAggregateSelection = {
  __typename?: "SetAthleteAthleteNodeAggregateSelection";
  familyName: StringAggregateSelectionNullable;
  givenName: StringAggregateSelectionNullable;
  elimElo: IntAggregateSelectionNullable;
  qualElo: IntAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type SetAthleteConnection = {
  __typename?: "SetAthleteConnection";
  edges: Array<SetAthleteRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SetAthleteRelationship = AthleteShoots & {
  __typename?: "SetAthleteRelationship";
  cursor: Scalars["String"]["output"];
  node: Athlete;
  eloDelta?: Maybe<Scalars["Int"]["output"]>;
  result?: Maybe<Result>;
};

export type SetEdge = {
  __typename?: "SetEdge";
  cursor: Scalars["String"]["output"];
  node: Set;
};

export type SetMatchConnection = {
  __typename?: "SetMatchConnection";
  edges: Array<SetMatchRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SetMatchMatchAggregationSelection = {
  __typename?: "SetMatchMatchAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SetMatchMatchNodeAggregateSelection>;
  edge?: Maybe<SetMatchMatchEdgeAggregateSelection>;
};

export type SetMatchMatchEdgeAggregateSelection = {
  __typename?: "SetMatchMatchEdgeAggregateSelection";
  number: IntAggregateSelectionNonNullable;
};

export type SetMatchMatchNodeAggregateSelection = {
  __typename?: "SetMatchMatchNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type SetMatchRelationship = SetOf & {
  __typename?: "SetMatchRelationship";
  cursor: Scalars["String"]["output"];
  node: Match;
  number: Scalars["Int"]["output"];
};

export type SetNationConnection = {
  __typename?: "SetNationConnection";
  edges: Array<SetNationRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SetNationNationAggregationSelection = {
  __typename?: "SetNationNationAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SetNationNationNodeAggregateSelection>;
};

export type SetNationNationNodeAggregateSelection = {
  __typename?: "SetNationNationNodeAggregateSelection";
  name: StringAggregateSelectionNullable;
  code: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type SetNationRelationship = {
  __typename?: "SetNationRelationship";
  cursor: Scalars["String"]["output"];
  node: Nation;
};

export type SetsConnection = {
  __typename?: "SetsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<SetEdge>;
};

export type SetSetsConnection = {
  __typename?: "SetSetsConnection";
  edges: Array<SetSetsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SetSetSetsAggregationSelection = {
  __typename?: "SetSetSetsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SetSetSetsNodeAggregateSelection>;
};

export type SetSetSetsNodeAggregateSelection = {
  __typename?: "SetSetSetsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type SetSetsRelationship = {
  __typename?: "SetSetsRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
};

export type SetTargetConnection = {
  __typename?: "SetTargetConnection";
  edges: Array<SetTargetRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type SetTargetRelationship = SetAtTarget & {
  __typename?: "SetTargetRelationship";
  cursor: Scalars["String"]["output"];
  node: Target;
  /** Distance of the target in meters */
  distance: Scalars["Int"]["output"];
};

export type SetTargetTargetAggregationSelection = {
  __typename?: "SetTargetTargetAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<SetTargetTargetNodeAggregateSelection>;
  edge?: Maybe<SetTargetTargetEdgeAggregateSelection>;
};

export type SetTargetTargetEdgeAggregateSelection = {
  __typename?: "SetTargetTargetEdgeAggregateSelection";
  distance: IntAggregateSelectionNonNullable;
};

export type SetTargetTargetNodeAggregateSelection = {
  __typename?: "SetTargetTargetNodeAggregateSelection";
  name: StringAggregateSelectionNonNullable;
  rings: IntAggregateSelectionNonNullable;
  radius: IntAggregateSelectionNonNullable;
  max: IntAggregateSelectionNonNullable;
  min: IntAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
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

export type Target = {
  __typename?: "Target";
  name: Scalars["String"]["output"];
  rings: Scalars["Int"]["output"];
  radius: Scalars["Int"]["output"];
  max: Scalars["Int"]["output"];
  min: Scalars["Int"]["output"];
  xRing: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  verified: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  sets: Array<Set>;
  setsAggregate?: Maybe<TargetSetSetsAggregationSelection>;
  setsConnection: TargetSetsConnection;
};

export type TargetSetsArgs = {
  where?: InputMaybe<SetWhere>;
  options?: InputMaybe<SetOptions>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TargetSetsAggregateArgs = {
  where?: InputMaybe<SetWhere>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TargetSetsConnectionArgs = {
  where?: InputMaybe<TargetSetsConnectionWhere>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  directed?: InputMaybe<Scalars["Boolean"]["input"]>;
  sort?: InputMaybe<Array<TargetSetsConnectionSort>>;
};

export type TargetAggregateSelection = {
  __typename?: "TargetAggregateSelection";
  count: Scalars["Int"]["output"];
  name: StringAggregateSelectionNonNullable;
  rings: IntAggregateSelectionNonNullable;
  radius: IntAggregateSelectionNonNullable;
  max: IntAggregateSelectionNonNullable;
  min: IntAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type TargetEdge = {
  __typename?: "TargetEdge";
  cursor: Scalars["String"]["output"];
  node: Target;
};

export type TargetsConnection = {
  __typename?: "TargetsConnection";
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
  edges: Array<TargetEdge>;
};

export type TargetSetsConnection = {
  __typename?: "TargetSetsConnection";
  edges: Array<TargetSetsRelationship>;
  totalCount: Scalars["Int"]["output"];
  pageInfo: PageInfo;
};

export type TargetSetSetsAggregationSelection = {
  __typename?: "TargetSetSetsAggregationSelection";
  count: Scalars["Int"]["output"];
  node?: Maybe<TargetSetSetsNodeAggregateSelection>;
  edge?: Maybe<TargetSetSetsEdgeAggregateSelection>;
};

export type TargetSetSetsEdgeAggregateSelection = {
  __typename?: "TargetSetSetsEdgeAggregateSelection";
  distance: IntAggregateSelectionNonNullable;
};

export type TargetSetSetsNodeAggregateSelection = {
  __typename?: "TargetSetSetsNodeAggregateSelection";
  id: IdAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type TargetSetsRelationship = SetAtTarget & {
  __typename?: "TargetSetsRelationship";
  cursor: Scalars["String"]["output"];
  node: Set;
  /** Distance of the target in meters */
  distance: Scalars["Int"]["output"];
};

export type UpdateArrowsMutationResponse = {
  __typename?: "UpdateArrowsMutationResponse";
  info: UpdateInfo;
  arrows: Array<Arrow>;
};

export type UpdateAthletesMutationResponse = {
  __typename?: "UpdateAthletesMutationResponse";
  info: UpdateInfo;
  athletes: Array<Athlete>;
};

export type UpdateCompetitionsMutationResponse = {
  __typename?: "UpdateCompetitionsMutationResponse";
  info: UpdateInfo;
  competitions: Array<Competition>;
};

export type UpdateDataSourcesMutationResponse = {
  __typename?: "UpdateDataSourcesMutationResponse";
  info: UpdateInfo;
  dataSources: Array<DataSource>;
};

export type UpdateDivisionsMutationResponse = {
  __typename?: "UpdateDivisionsMutationResponse";
  info: UpdateInfo;
  divisions: Array<Division>;
};

export type UpdateEventsMutationResponse = {
  __typename?: "UpdateEventsMutationResponse";
  info: UpdateInfo;
  events: Array<Event>;
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

export type UpdateMatchesMutationResponse = {
  __typename?: "UpdateMatchesMutationResponse";
  info: UpdateInfo;
  matches: Array<Match>;
};

export type UpdateNationsMutationResponse = {
  __typename?: "UpdateNationsMutationResponse";
  info: UpdateInfo;
  nations: Array<Nation>;
};

export type UpdateSetsMutationResponse = {
  __typename?: "UpdateSetsMutationResponse";
  info: UpdateInfo;
  sets: Array<Set>;
};

export type UpdateTargetsMutationResponse = {
  __typename?: "UpdateTargetsMutationResponse";
  info: UpdateInfo;
  targets: Array<Target>;
};

export type ArrowConnectInput = {
  set?: InputMaybe<ArrowSetConnectFieldInput>;
};

export type ArrowConnectWhere = {
  node: ArrowWhere;
};

export type ArrowCreateInput = {
  value: Scalars["Int"]["input"];
  offset?: InputMaybe<Scalars["Float"]["input"]>;
  angle?: InputMaybe<Scalars["Int"]["input"]>;
  verified?: Scalars["Boolean"]["input"];
  recordedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  set?: InputMaybe<ArrowSetFieldInput>;
};

export type ArrowDeleteInput = {
  set?: InputMaybe<ArrowSetDeleteFieldInput>;
};

export type ArrowDisconnectInput = {
  set?: InputMaybe<ArrowSetDisconnectFieldInput>;
};

export type ArrowOfCreateInput = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowOfSort = {
  number?: InputMaybe<SortDirection>;
};

export type ArrowOfUpdateInput = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  number_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowOfWhere = {
  OR?: InputMaybe<Array<ArrowOfWhere>>;
  AND?: InputMaybe<Array<ArrowOfWhere>>;
  NOT?: InputMaybe<ArrowOfWhere>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  number_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  number_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  number_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowOptions = {
  /** Specify one or more ArrowSort objects to sort Arrows by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ArrowSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowRelationInput = {
  set?: InputMaybe<ArrowSetCreateFieldInput>;
};

export type ArrowSetAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<ArrowSetAggregateInput>>;
  OR?: InputMaybe<Array<ArrowSetAggregateInput>>;
  NOT?: InputMaybe<ArrowSetAggregateInput>;
  node?: InputMaybe<ArrowSetNodeAggregationWhereInput>;
  edge?: InputMaybe<ArrowSetEdgeAggregationWhereInput>;
};

export type ArrowSetConnectFieldInput = {
  where?: InputMaybe<SetConnectWhere>;
  connect?: InputMaybe<SetConnectInput>;
  edge?: InputMaybe<ArrowOfCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type ArrowSetConnectionSort = {
  edge?: InputMaybe<ArrowOfSort>;
  node?: InputMaybe<SetSort>;
};

export type ArrowSetConnectionWhere = {
  AND?: InputMaybe<Array<ArrowSetConnectionWhere>>;
  OR?: InputMaybe<Array<ArrowSetConnectionWhere>>;
  NOT?: InputMaybe<ArrowSetConnectionWhere>;
  edge?: InputMaybe<ArrowOfWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ArrowOfWhere>;
  node?: InputMaybe<SetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SetWhere>;
};

export type ArrowSetCreateFieldInput = {
  node: SetCreateInput;
  edge?: InputMaybe<ArrowOfCreateInput>;
};

export type ArrowSetDeleteFieldInput = {
  where?: InputMaybe<ArrowSetConnectionWhere>;
  delete?: InputMaybe<SetDeleteInput>;
};

export type ArrowSetDisconnectFieldInput = {
  where?: InputMaybe<ArrowSetConnectionWhere>;
  disconnect?: InputMaybe<SetDisconnectInput>;
};

export type ArrowSetEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArrowSetEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ArrowSetEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<ArrowSetEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ArrowSetFieldInput = {
  create?: InputMaybe<ArrowSetCreateFieldInput>;
  connect?: InputMaybe<ArrowSetConnectFieldInput>;
};

export type ArrowSetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ArrowSetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<ArrowSetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ArrowSetNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ArrowSetUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
  edge?: InputMaybe<ArrowOfUpdateInput>;
};

export type ArrowSetUpdateFieldInput = {
  where?: InputMaybe<ArrowSetConnectionWhere>;
  create?: InputMaybe<ArrowSetCreateFieldInput>;
  connect?: InputMaybe<ArrowSetConnectFieldInput>;
  update?: InputMaybe<ArrowSetUpdateConnectionInput>;
  delete?: InputMaybe<ArrowSetDeleteFieldInput>;
  disconnect?: InputMaybe<ArrowSetDisconnectFieldInput>;
};

/** Fields to sort Arrows by. The order in which sorts are applied is not guaranteed when specifying many fields in one ArrowSort object. */
export type ArrowSort = {
  value?: InputMaybe<SortDirection>;
  offset?: InputMaybe<SortDirection>;
  angle?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  recordedAt?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type ArrowUpdateInput = {
  value?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Float"]["input"]>;
  angle?: InputMaybe<Scalars["Int"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  recordedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  value_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  value_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  offset_ADD?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>;
  angle_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  angle_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  set?: InputMaybe<ArrowSetUpdateFieldInput>;
};

export type ArrowWhere = {
  OR?: InputMaybe<Array<ArrowWhere>>;
  AND?: InputMaybe<Array<ArrowWhere>>;
  NOT?: InputMaybe<ArrowWhere>;
  value?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  value_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  value_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  value_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  value_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  offset_NOT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  offset_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  offset_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  angle_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  angle_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  angle_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  angle_LT?: InputMaybe<Scalars["Int"]["input"]>;
  angle_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  angle_GT?: InputMaybe<Scalars["Int"]["input"]>;
  angle_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  recordedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  recordedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  recordedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  recordedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  set?: InputMaybe<SetWhere>;
  set_NOT?: InputMaybe<SetWhere>;
  setAggregate?: InputMaybe<ArrowSetAggregateInput>;
  setConnection?: InputMaybe<ArrowSetConnectionWhere>;
  setConnection_NOT?: InputMaybe<ArrowSetConnectionWhere>;
};

export type AthleteCompetesCreateInput = {
  eloDelta?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AthleteCompetesSort = {
  eloDelta?: InputMaybe<SortDirection>;
};

export type AthleteCompetesUpdateInput = {
  eloDelta?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AthleteCompetesWhere = {
  OR?: InputMaybe<Array<AthleteCompetesWhere>>;
  AND?: InputMaybe<Array<AthleteCompetesWhere>>;
  NOT?: InputMaybe<AthleteCompetesWhere>;
  eloDelta?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  eloDelta_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  eloDelta_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  eloDelta_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_GTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AthleteCompetitionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<AthleteCompetitionsAggregateInput>>;
  OR?: InputMaybe<Array<AthleteCompetitionsAggregateInput>>;
  NOT?: InputMaybe<AthleteCompetitionsAggregateInput>;
  node?: InputMaybe<AthleteCompetitionsNodeAggregationWhereInput>;
};

export type AthleteCompetitionsConnectFieldInput = {
  where?: InputMaybe<CompetitionConnectWhere>;
  connect?: InputMaybe<Array<CompetitionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type AthleteCompetitionsConnectionSort = {
  node?: InputMaybe<CompetitionSort>;
};

export type AthleteCompetitionsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteCompetitionsConnectionWhere>>;
  OR?: InputMaybe<Array<AthleteCompetitionsConnectionWhere>>;
  NOT?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  node?: InputMaybe<CompetitionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CompetitionWhere>;
};

export type AthleteCompetitionsCreateFieldInput = {
  node: CompetitionCreateInput;
};

export type AthleteCompetitionsDeleteFieldInput = {
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  delete?: InputMaybe<CompetitionDeleteInput>;
};

export type AthleteCompetitionsDisconnectFieldInput = {
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
};

export type AthleteCompetitionsFieldInput = {
  create?: InputMaybe<Array<AthleteCompetitionsCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteCompetitionsConnectFieldInput>>;
};

export type AthleteCompetitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteCompetitionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AthleteCompetitionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteCompetitionsNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AthleteCompetitionsUpdateConnectionInput = {
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type AthleteCompetitionsUpdateFieldInput = {
  where?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  create?: InputMaybe<Array<AthleteCompetitionsCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteCompetitionsConnectFieldInput>>;
  update?: InputMaybe<AthleteCompetitionsUpdateConnectionInput>;
  delete?: InputMaybe<Array<AthleteCompetitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteCompetitionsDisconnectFieldInput>>;
};

export type AthleteConnectInput = {
  sets?: InputMaybe<Array<AthleteSetsConnectFieldInput>>;
  matches?: InputMaybe<Array<AthleteMatchesConnectFieldInput>>;
  divisions?: InputMaybe<Array<AthleteDivisionsConnectFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsConnectFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesConnectFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsConnectFieldInput>>;
};

export type AthleteConnectOrCreateInput = {
  divisions?: InputMaybe<Array<AthleteDivisionsConnectOrCreateFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesConnectOrCreateFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsConnectOrCreateFieldInput>>;
};

export type AthleteConnectWhere = {
  node: AthleteWhere;
};

export type AthleteCreateInput = {
  familyName?: InputMaybe<Scalars["String"]["input"]>;
  givenName?: InputMaybe<Scalars["String"]["input"]>;
  elimElo?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo?: InputMaybe<Scalars["Int"]["input"]>;
  verified?: Scalars["Boolean"]["input"];
  nameOrder?: InputMaybe<NameOrder>;
  sets?: InputMaybe<AthleteSetsFieldInput>;
  matches?: InputMaybe<AthleteMatchesFieldInput>;
  divisions?: InputMaybe<AthleteDivisionsFieldInput>;
  competitions?: InputMaybe<AthleteCompetitionsFieldInput>;
  dataSources?: InputMaybe<AthleteDataSourcesFieldInput>;
  nations?: InputMaybe<AthleteNationsFieldInput>;
};

export type AthleteDataSourcesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<AthleteDataSourcesAggregateInput>>;
  OR?: InputMaybe<Array<AthleteDataSourcesAggregateInput>>;
  NOT?: InputMaybe<AthleteDataSourcesAggregateInput>;
  node?: InputMaybe<AthleteDataSourcesNodeAggregationWhereInput>;
  edge?: InputMaybe<AthleteDataSourcesEdgeAggregationWhereInput>;
};

export type AthleteDataSourcesConnectFieldInput = {
  where?: InputMaybe<DataSourceConnectWhere>;
  connect?: InputMaybe<Array<DataSourceConnectInput>>;
  edge?: InputMaybe<InDataSourceCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type AthleteDataSourcesConnectionSort = {
  edge?: InputMaybe<InDataSourceSort>;
  node?: InputMaybe<DataSourceSort>;
};

export type AthleteDataSourcesConnectionWhere = {
  AND?: InputMaybe<Array<AthleteDataSourcesConnectionWhere>>;
  OR?: InputMaybe<Array<AthleteDataSourcesConnectionWhere>>;
  NOT?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  edge?: InputMaybe<InDataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InDataSourceWhere>;
  node?: InputMaybe<DataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<DataSourceWhere>;
};

export type AthleteDataSourcesConnectOrCreateFieldInput = {
  where: DataSourceConnectOrCreateWhere;
  onCreate: AthleteDataSourcesConnectOrCreateFieldInputOnCreate;
};

export type AthleteDataSourcesConnectOrCreateFieldInputOnCreate = {
  node: DataSourceOnCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type AthleteDataSourcesCreateFieldInput = {
  node: DataSourceCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type AthleteDataSourcesDeleteFieldInput = {
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  delete?: InputMaybe<DataSourceDeleteInput>;
};

export type AthleteDataSourcesDisconnectFieldInput = {
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
};

export type AthleteDataSourcesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteDataSourcesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AthleteDataSourcesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteDataSourcesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AthleteDataSourcesFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<AthleteDataSourcesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<AthleteDataSourcesCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteDataSourcesConnectFieldInput>>;
};

export type AthleteDataSourcesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteDataSourcesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AthleteDataSourcesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteDataSourcesNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AthleteDataSourcesUpdateConnectionInput = {
  node?: InputMaybe<DataSourceUpdateInput>;
  edge?: InputMaybe<InDataSourceUpdateInput>;
};

export type AthleteDataSourcesUpdateFieldInput = {
  where?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<AthleteDataSourcesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<AthleteDataSourcesCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteDataSourcesConnectFieldInput>>;
  update?: InputMaybe<AthleteDataSourcesUpdateConnectionInput>;
  delete?: InputMaybe<Array<AthleteDataSourcesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteDataSourcesDisconnectFieldInput>>;
};

export type AthleteDeleteInput = {
  sets?: InputMaybe<Array<AthleteSetsDeleteFieldInput>>;
  matches?: InputMaybe<Array<AthleteMatchesDeleteFieldInput>>;
  divisions?: InputMaybe<Array<AthleteDivisionsDeleteFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsDeleteFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesDeleteFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsDeleteFieldInput>>;
};

export type AthleteDisconnectInput = {
  sets?: InputMaybe<Array<AthleteSetsDisconnectFieldInput>>;
  matches?: InputMaybe<Array<AthleteMatchesDisconnectFieldInput>>;
  divisions?: InputMaybe<Array<AthleteDivisionsDisconnectFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsDisconnectFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesDisconnectFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsDisconnectFieldInput>>;
};

export type AthleteDivisionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<AthleteDivisionsAggregateInput>>;
  OR?: InputMaybe<Array<AthleteDivisionsAggregateInput>>;
  NOT?: InputMaybe<AthleteDivisionsAggregateInput>;
  node?: InputMaybe<AthleteDivisionsNodeAggregationWhereInput>;
};

export type AthleteDivisionsConnectFieldInput = {
  where?: InputMaybe<DivisionConnectWhere>;
  connect?: InputMaybe<Array<DivisionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type AthleteDivisionsConnectionSort = {
  node?: InputMaybe<DivisionSort>;
};

export type AthleteDivisionsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteDivisionsConnectionWhere>>;
  OR?: InputMaybe<Array<AthleteDivisionsConnectionWhere>>;
  NOT?: InputMaybe<AthleteDivisionsConnectionWhere>;
  node?: InputMaybe<DivisionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<DivisionWhere>;
};

export type AthleteDivisionsConnectOrCreateFieldInput = {
  where: DivisionConnectOrCreateWhere;
  onCreate: AthleteDivisionsConnectOrCreateFieldInputOnCreate;
};

export type AthleteDivisionsConnectOrCreateFieldInputOnCreate = {
  node: DivisionOnCreateInput;
};

export type AthleteDivisionsCreateFieldInput = {
  node: DivisionCreateInput;
};

export type AthleteDivisionsDeleteFieldInput = {
  where?: InputMaybe<AthleteDivisionsConnectionWhere>;
  delete?: InputMaybe<DivisionDeleteInput>;
};

export type AthleteDivisionsDisconnectFieldInput = {
  where?: InputMaybe<AthleteDivisionsConnectionWhere>;
  disconnect?: InputMaybe<DivisionDisconnectInput>;
};

export type AthleteDivisionsFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<AthleteDivisionsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<AthleteDivisionsCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteDivisionsConnectFieldInput>>;
};

export type AthleteDivisionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteDivisionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AthleteDivisionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteDivisionsNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AthleteDivisionsUpdateConnectionInput = {
  node?: InputMaybe<DivisionUpdateInput>;
};

export type AthleteDivisionsUpdateFieldInput = {
  where?: InputMaybe<AthleteDivisionsConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<AthleteDivisionsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<AthleteDivisionsCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteDivisionsConnectFieldInput>>;
  update?: InputMaybe<AthleteDivisionsUpdateConnectionInput>;
  delete?: InputMaybe<Array<AthleteDivisionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteDivisionsDisconnectFieldInput>>;
};

export type AthleteMatchesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<AthleteMatchesAggregateInput>>;
  OR?: InputMaybe<Array<AthleteMatchesAggregateInput>>;
  NOT?: InputMaybe<AthleteMatchesAggregateInput>;
  node?: InputMaybe<AthleteMatchesNodeAggregationWhereInput>;
  edge?: InputMaybe<AthleteMatchesEdgeAggregationWhereInput>;
};

export type AthleteMatchesConnectFieldInput = {
  where?: InputMaybe<EventConnectWhere>;
  connect?: InputMaybe<Array<EventConnectInput>>;
  edge?: InputMaybe<AthleteCompetesCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type AthleteMatchesConnectionSort = {
  edge?: InputMaybe<AthleteCompetesSort>;
  node?: InputMaybe<EventSort>;
};

export type AthleteMatchesConnectionWhere = {
  AND?: InputMaybe<Array<AthleteMatchesConnectionWhere>>;
  OR?: InputMaybe<Array<AthleteMatchesConnectionWhere>>;
  NOT?: InputMaybe<AthleteMatchesConnectionWhere>;
  edge?: InputMaybe<AthleteCompetesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<AthleteCompetesWhere>;
  node?: InputMaybe<EventWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<EventWhere>;
};

export type AthleteMatchesCreateFieldInput = {
  node: EventCreateInput;
  edge?: InputMaybe<AthleteCompetesCreateInput>;
};

export type AthleteMatchesDeleteFieldInput = {
  where?: InputMaybe<AthleteMatchesConnectionWhere>;
  delete?: InputMaybe<EventDeleteInput>;
};

export type AthleteMatchesDisconnectFieldInput = {
  where?: InputMaybe<AthleteMatchesConnectionWhere>;
  disconnect?: InputMaybe<EventDisconnectInput>;
};

export type AthleteMatchesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteMatchesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AthleteMatchesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteMatchesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AthleteMatchesFieldInput = {
  create?: InputMaybe<Array<AthleteMatchesCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteMatchesConnectFieldInput>>;
};

export type AthleteMatchesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteMatchesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AthleteMatchesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteMatchesNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AthleteMatchesUpdateConnectionInput = {
  node?: InputMaybe<EventUpdateInput>;
  edge?: InputMaybe<AthleteCompetesUpdateInput>;
};

export type AthleteMatchesUpdateFieldInput = {
  where?: InputMaybe<AthleteMatchesConnectionWhere>;
  create?: InputMaybe<Array<AthleteMatchesCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteMatchesConnectFieldInput>>;
  update?: InputMaybe<AthleteMatchesUpdateConnectionInput>;
  delete?: InputMaybe<Array<AthleteMatchesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteMatchesDisconnectFieldInput>>;
};

export type AthleteNationsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<AthleteNationsAggregateInput>>;
  OR?: InputMaybe<Array<AthleteNationsAggregateInput>>;
  NOT?: InputMaybe<AthleteNationsAggregateInput>;
  node?: InputMaybe<AthleteNationsNodeAggregationWhereInput>;
};

export type AthleteNationsConnectFieldInput = {
  where?: InputMaybe<NationConnectWhere>;
  connect?: InputMaybe<Array<NationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type AthleteNationsConnectionSort = {
  node?: InputMaybe<NationSort>;
};

export type AthleteNationsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteNationsConnectionWhere>>;
  OR?: InputMaybe<Array<AthleteNationsConnectionWhere>>;
  NOT?: InputMaybe<AthleteNationsConnectionWhere>;
  node?: InputMaybe<NationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<NationWhere>;
};

export type AthleteNationsConnectOrCreateFieldInput = {
  where: NationConnectOrCreateWhere;
  onCreate: AthleteNationsConnectOrCreateFieldInputOnCreate;
};

export type AthleteNationsConnectOrCreateFieldInputOnCreate = {
  node: NationOnCreateInput;
};

export type AthleteNationsCreateFieldInput = {
  node: NationCreateInput;
};

export type AthleteNationsDeleteFieldInput = {
  where?: InputMaybe<AthleteNationsConnectionWhere>;
  delete?: InputMaybe<NationDeleteInput>;
};

export type AthleteNationsDisconnectFieldInput = {
  where?: InputMaybe<AthleteNationsConnectionWhere>;
  disconnect?: InputMaybe<NationDisconnectInput>;
};

export type AthleteNationsFieldInput = {
  connectOrCreate?: InputMaybe<Array<AthleteNationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteNationsCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteNationsConnectFieldInput>>;
};

export type AthleteNationsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteNationsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AthleteNationsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteNationsNodeAggregationWhereInput>;
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
  code_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AthleteNationsUpdateConnectionInput = {
  node?: InputMaybe<NationUpdateInput>;
};

export type AthleteNationsUpdateFieldInput = {
  where?: InputMaybe<AthleteNationsConnectionWhere>;
  connectOrCreate?: InputMaybe<Array<AthleteNationsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<AthleteNationsCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteNationsConnectFieldInput>>;
  update?: InputMaybe<AthleteNationsUpdateConnectionInput>;
  delete?: InputMaybe<Array<AthleteNationsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteNationsDisconnectFieldInput>>;
};

export type AthleteOptions = {
  /** Specify one or more AthleteSort objects to sort Athletes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<AthleteSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AthleteRelationInput = {
  sets?: InputMaybe<Array<AthleteSetsCreateFieldInput>>;
  matches?: InputMaybe<Array<AthleteMatchesCreateFieldInput>>;
  divisions?: InputMaybe<Array<AthleteDivisionsCreateFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsCreateFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesCreateFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsCreateFieldInput>>;
};

export type AthleteSetsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<AthleteSetsAggregateInput>>;
  OR?: InputMaybe<Array<AthleteSetsAggregateInput>>;
  NOT?: InputMaybe<AthleteSetsAggregateInput>;
  node?: InputMaybe<AthleteSetsNodeAggregationWhereInput>;
  edge?: InputMaybe<AthleteSetsEdgeAggregationWhereInput>;
};

export type AthleteSetsConnectFieldInput = {
  where?: InputMaybe<SetConnectWhere>;
  connect?: InputMaybe<Array<SetConnectInput>>;
  edge?: InputMaybe<AthleteShootsCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type AthleteSetsConnectionSort = {
  edge?: InputMaybe<AthleteShootsSort>;
  node?: InputMaybe<SetSort>;
};

export type AthleteSetsConnectionWhere = {
  AND?: InputMaybe<Array<AthleteSetsConnectionWhere>>;
  OR?: InputMaybe<Array<AthleteSetsConnectionWhere>>;
  NOT?: InputMaybe<AthleteSetsConnectionWhere>;
  edge?: InputMaybe<AthleteShootsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<AthleteShootsWhere>;
  node?: InputMaybe<SetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SetWhere>;
};

export type AthleteSetsCreateFieldInput = {
  node: SetCreateInput;
  edge?: InputMaybe<AthleteShootsCreateInput>;
};

export type AthleteSetsDeleteFieldInput = {
  where?: InputMaybe<AthleteSetsConnectionWhere>;
  delete?: InputMaybe<SetDeleteInput>;
};

export type AthleteSetsDisconnectFieldInput = {
  where?: InputMaybe<AthleteSetsConnectionWhere>;
  disconnect?: InputMaybe<SetDisconnectInput>;
};

export type AthleteSetsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteSetsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AthleteSetsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteSetsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AthleteSetsFieldInput = {
  create?: InputMaybe<Array<AthleteSetsCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteSetsConnectFieldInput>>;
};

export type AthleteSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<AthleteSetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<AthleteSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<AthleteSetsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AthleteSetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
  edge?: InputMaybe<AthleteShootsUpdateInput>;
};

export type AthleteSetsUpdateFieldInput = {
  where?: InputMaybe<AthleteSetsConnectionWhere>;
  create?: InputMaybe<Array<AthleteSetsCreateFieldInput>>;
  connect?: InputMaybe<Array<AthleteSetsConnectFieldInput>>;
  update?: InputMaybe<AthleteSetsUpdateConnectionInput>;
  delete?: InputMaybe<Array<AthleteSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<AthleteSetsDisconnectFieldInput>>;
};

export type AthleteShootsCreateInput = {
  eloDelta?: InputMaybe<Scalars["Int"]["input"]>;
  result?: InputMaybe<Result>;
};

export type AthleteShootsSort = {
  eloDelta?: InputMaybe<SortDirection>;
  result?: InputMaybe<SortDirection>;
};

export type AthleteShootsUpdateInput = {
  eloDelta?: InputMaybe<Scalars["Int"]["input"]>;
  result?: InputMaybe<Result>;
  eloDelta_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AthleteShootsWhere = {
  OR?: InputMaybe<Array<AthleteShootsWhere>>;
  AND?: InputMaybe<Array<AthleteShootsWhere>>;
  NOT?: InputMaybe<AthleteShootsWhere>;
  eloDelta?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  eloDelta_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  eloDelta_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  eloDelta_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  result?: InputMaybe<Result>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  result_NOT?: InputMaybe<Result>;
  result_IN?: InputMaybe<Array<InputMaybe<Result>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  result_NOT_IN?: InputMaybe<Array<InputMaybe<Result>>>;
};

/** Fields to sort Athletes by. The order in which sorts are applied is not guaranteed when specifying many fields in one AthleteSort object. */
export type AthleteSort = {
  familyName?: InputMaybe<SortDirection>;
  givenName?: InputMaybe<SortDirection>;
  elimElo?: InputMaybe<SortDirection>;
  qualElo?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  nameOrder?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type AthleteUpdateInput = {
  familyName?: InputMaybe<Scalars["String"]["input"]>;
  givenName?: InputMaybe<Scalars["String"]["input"]>;
  elimElo?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo?: InputMaybe<Scalars["Int"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  nameOrder?: InputMaybe<NameOrder>;
  elimElo_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  sets?: InputMaybe<Array<AthleteSetsUpdateFieldInput>>;
  matches?: InputMaybe<Array<AthleteMatchesUpdateFieldInput>>;
  divisions?: InputMaybe<Array<AthleteDivisionsUpdateFieldInput>>;
  competitions?: InputMaybe<Array<AthleteCompetitionsUpdateFieldInput>>;
  dataSources?: InputMaybe<Array<AthleteDataSourcesUpdateFieldInput>>;
  nations?: InputMaybe<Array<AthleteNationsUpdateFieldInput>>;
};

export type AthleteWhere = {
  OR?: InputMaybe<Array<AthleteWhere>>;
  AND?: InputMaybe<Array<AthleteWhere>>;
  NOT?: InputMaybe<AthleteWhere>;
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
  givenName?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  givenName_NOT?: InputMaybe<Scalars["String"]["input"]>;
  givenName_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  givenName_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  givenName_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  givenName_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  givenName_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  givenName_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  givenName_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  givenName_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  elimElo?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  elimElo_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  elimElo_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  elimElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  qualElo_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  qualElo_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  qualElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  nameOrder?: InputMaybe<NameOrder>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  nameOrder_NOT?: InputMaybe<NameOrder>;
  nameOrder_IN?: InputMaybe<Array<InputMaybe<NameOrder>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  nameOrder_NOT_IN?: InputMaybe<Array<InputMaybe<NameOrder>>>;
  /** @deprecated Use `sets_SOME` instead. */
  sets?: InputMaybe<SetWhere>;
  /** @deprecated Use `sets_NONE` instead. */
  sets_NOT?: InputMaybe<SetWhere>;
  setsAggregate?: InputMaybe<AthleteSetsAggregateInput>;
  /** Return Athletes where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Athletes where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Athletes where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Athletes where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
  /** @deprecated Use `matches_SOME` instead. */
  matches?: InputMaybe<EventWhere>;
  /** @deprecated Use `matches_NONE` instead. */
  matches_NOT?: InputMaybe<EventWhere>;
  matchesAggregate?: InputMaybe<AthleteMatchesAggregateInput>;
  /** Return Athletes where all of the related Events match this filter */
  matches_ALL?: InputMaybe<EventWhere>;
  /** Return Athletes where none of the related Events match this filter */
  matches_NONE?: InputMaybe<EventWhere>;
  /** Return Athletes where one of the related Events match this filter */
  matches_SINGLE?: InputMaybe<EventWhere>;
  /** Return Athletes where some of the related Events match this filter */
  matches_SOME?: InputMaybe<EventWhere>;
  /** @deprecated Use `divisions_SOME` instead. */
  divisions?: InputMaybe<DivisionWhere>;
  /** @deprecated Use `divisions_NONE` instead. */
  divisions_NOT?: InputMaybe<DivisionWhere>;
  divisionsAggregate?: InputMaybe<AthleteDivisionsAggregateInput>;
  /** Return Athletes where all of the related Divisions match this filter */
  divisions_ALL?: InputMaybe<DivisionWhere>;
  /** Return Athletes where none of the related Divisions match this filter */
  divisions_NONE?: InputMaybe<DivisionWhere>;
  /** Return Athletes where one of the related Divisions match this filter */
  divisions_SINGLE?: InputMaybe<DivisionWhere>;
  /** Return Athletes where some of the related Divisions match this filter */
  divisions_SOME?: InputMaybe<DivisionWhere>;
  /** @deprecated Use `competitions_SOME` instead. */
  competitions?: InputMaybe<CompetitionWhere>;
  /** @deprecated Use `competitions_NONE` instead. */
  competitions_NOT?: InputMaybe<CompetitionWhere>;
  competitionsAggregate?: InputMaybe<AthleteCompetitionsAggregateInput>;
  /** Return Athletes where all of the related Competitions match this filter */
  competitions_ALL?: InputMaybe<CompetitionWhere>;
  /** Return Athletes where none of the related Competitions match this filter */
  competitions_NONE?: InputMaybe<CompetitionWhere>;
  /** Return Athletes where one of the related Competitions match this filter */
  competitions_SINGLE?: InputMaybe<CompetitionWhere>;
  /** Return Athletes where some of the related Competitions match this filter */
  competitions_SOME?: InputMaybe<CompetitionWhere>;
  /** @deprecated Use `dataSources_SOME` instead. */
  dataSources?: InputMaybe<DataSourceWhere>;
  /** @deprecated Use `dataSources_NONE` instead. */
  dataSources_NOT?: InputMaybe<DataSourceWhere>;
  dataSourcesAggregate?: InputMaybe<AthleteDataSourcesAggregateInput>;
  /** Return Athletes where all of the related DataSources match this filter */
  dataSources_ALL?: InputMaybe<DataSourceWhere>;
  /** Return Athletes where none of the related DataSources match this filter */
  dataSources_NONE?: InputMaybe<DataSourceWhere>;
  /** Return Athletes where one of the related DataSources match this filter */
  dataSources_SINGLE?: InputMaybe<DataSourceWhere>;
  /** Return Athletes where some of the related DataSources match this filter */
  dataSources_SOME?: InputMaybe<DataSourceWhere>;
  /** @deprecated Use `nations_SOME` instead. */
  nations?: InputMaybe<NationWhere>;
  /** @deprecated Use `nations_NONE` instead. */
  nations_NOT?: InputMaybe<NationWhere>;
  nationsAggregate?: InputMaybe<AthleteNationsAggregateInput>;
  /** Return Athletes where all of the related Nations match this filter */
  nations_ALL?: InputMaybe<NationWhere>;
  /** Return Athletes where none of the related Nations match this filter */
  nations_NONE?: InputMaybe<NationWhere>;
  /** Return Athletes where one of the related Nations match this filter */
  nations_SINGLE?: InputMaybe<NationWhere>;
  /** Return Athletes where some of the related Nations match this filter */
  nations_SOME?: InputMaybe<NationWhere>;
  /** @deprecated Use `setsConnection_SOME` instead. */
  setsConnection?: InputMaybe<AthleteSetsConnectionWhere>;
  /** @deprecated Use `setsConnection_NONE` instead. */
  setsConnection_NOT?: InputMaybe<AthleteSetsConnectionWhere>;
  /** Return Athletes where all of the related AthleteSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<AthleteSetsConnectionWhere>;
  /** Return Athletes where none of the related AthleteSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<AthleteSetsConnectionWhere>;
  /** Return Athletes where one of the related AthleteSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<AthleteSetsConnectionWhere>;
  /** Return Athletes where some of the related AthleteSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<AthleteSetsConnectionWhere>;
  /** @deprecated Use `matchesConnection_SOME` instead. */
  matchesConnection?: InputMaybe<AthleteMatchesConnectionWhere>;
  /** @deprecated Use `matchesConnection_NONE` instead. */
  matchesConnection_NOT?: InputMaybe<AthleteMatchesConnectionWhere>;
  /** Return Athletes where all of the related AthleteMatchesConnections match this filter */
  matchesConnection_ALL?: InputMaybe<AthleteMatchesConnectionWhere>;
  /** Return Athletes where none of the related AthleteMatchesConnections match this filter */
  matchesConnection_NONE?: InputMaybe<AthleteMatchesConnectionWhere>;
  /** Return Athletes where one of the related AthleteMatchesConnections match this filter */
  matchesConnection_SINGLE?: InputMaybe<AthleteMatchesConnectionWhere>;
  /** Return Athletes where some of the related AthleteMatchesConnections match this filter */
  matchesConnection_SOME?: InputMaybe<AthleteMatchesConnectionWhere>;
  /** @deprecated Use `divisionsConnection_SOME` instead. */
  divisionsConnection?: InputMaybe<AthleteDivisionsConnectionWhere>;
  /** @deprecated Use `divisionsConnection_NONE` instead. */
  divisionsConnection_NOT?: InputMaybe<AthleteDivisionsConnectionWhere>;
  /** Return Athletes where all of the related AthleteDivisionsConnections match this filter */
  divisionsConnection_ALL?: InputMaybe<AthleteDivisionsConnectionWhere>;
  /** Return Athletes where none of the related AthleteDivisionsConnections match this filter */
  divisionsConnection_NONE?: InputMaybe<AthleteDivisionsConnectionWhere>;
  /** Return Athletes where one of the related AthleteDivisionsConnections match this filter */
  divisionsConnection_SINGLE?: InputMaybe<AthleteDivisionsConnectionWhere>;
  /** Return Athletes where some of the related AthleteDivisionsConnections match this filter */
  divisionsConnection_SOME?: InputMaybe<AthleteDivisionsConnectionWhere>;
  /** @deprecated Use `competitionsConnection_SOME` instead. */
  competitionsConnection?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** @deprecated Use `competitionsConnection_NONE` instead. */
  competitionsConnection_NOT?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where all of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_ALL?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where none of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_NONE?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where one of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_SINGLE?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** Return Athletes where some of the related AthleteCompetitionsConnections match this filter */
  competitionsConnection_SOME?: InputMaybe<AthleteCompetitionsConnectionWhere>;
  /** @deprecated Use `dataSourcesConnection_SOME` instead. */
  dataSourcesConnection?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** @deprecated Use `dataSourcesConnection_NONE` instead. */
  dataSourcesConnection_NOT?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where all of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_ALL?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where none of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_NONE?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where one of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_SINGLE?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** Return Athletes where some of the related AthleteDataSourcesConnections match this filter */
  dataSourcesConnection_SOME?: InputMaybe<AthleteDataSourcesConnectionWhere>;
  /** @deprecated Use `nationsConnection_SOME` instead. */
  nationsConnection?: InputMaybe<AthleteNationsConnectionWhere>;
  /** @deprecated Use `nationsConnection_NONE` instead. */
  nationsConnection_NOT?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where all of the related AthleteNationsConnections match this filter */
  nationsConnection_ALL?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where none of the related AthleteNationsConnections match this filter */
  nationsConnection_NONE?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where one of the related AthleteNationsConnections match this filter */
  nationsConnection_SINGLE?: InputMaybe<AthleteNationsConnectionWhere>;
  /** Return Athletes where some of the related AthleteNationsConnections match this filter */
  nationsConnection_SOME?: InputMaybe<AthleteNationsConnectionWhere>;
};

export type CompetitionAthletesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CompetitionAthletesAggregateInput>>;
  OR?: InputMaybe<Array<CompetitionAthletesAggregateInput>>;
  NOT?: InputMaybe<CompetitionAthletesAggregateInput>;
  node?: InputMaybe<CompetitionAthletesNodeAggregationWhereInput>;
};

export type CompetitionAthletesConnectFieldInput = {
  where?: InputMaybe<AthleteConnectWhere>;
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type CompetitionAthletesConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type CompetitionAthletesConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionAthletesConnectionWhere>>;
  OR?: InputMaybe<Array<CompetitionAthletesConnectionWhere>>;
  NOT?: InputMaybe<CompetitionAthletesConnectionWhere>;
  node?: InputMaybe<AthleteWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<AthleteWhere>;
};

export type CompetitionAthletesCreateFieldInput = {
  node: AthleteCreateInput;
};

export type CompetitionAthletesDeleteFieldInput = {
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
  delete?: InputMaybe<AthleteDeleteInput>;
};

export type CompetitionAthletesDisconnectFieldInput = {
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
  disconnect?: InputMaybe<AthleteDisconnectInput>;
};

export type CompetitionAthletesFieldInput = {
  create?: InputMaybe<Array<CompetitionAthletesCreateFieldInput>>;
  connect?: InputMaybe<Array<CompetitionAthletesConnectFieldInput>>;
};

export type CompetitionAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionAthletesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CompetitionAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionAthletesNodeAggregationWhereInput>;
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
  givenName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CompetitionAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type CompetitionAthletesUpdateFieldInput = {
  where?: InputMaybe<CompetitionAthletesConnectionWhere>;
  create?: InputMaybe<Array<CompetitionAthletesCreateFieldInput>>;
  connect?: InputMaybe<Array<CompetitionAthletesConnectFieldInput>>;
  update?: InputMaybe<CompetitionAthletesUpdateConnectionInput>;
  delete?: InputMaybe<Array<CompetitionAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionAthletesDisconnectFieldInput>>;
};

export type CompetitionConnectInput = {
  events?: InputMaybe<Array<CompetitionEventsConnectFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesConnectFieldInput>>;
  nation?: InputMaybe<CompetitionNationConnectFieldInput>;
  athletes?: InputMaybe<Array<CompetitionAthletesConnectFieldInput>>;
};

export type CompetitionConnectOrCreateInput = {
  dataSources?: InputMaybe<
    Array<CompetitionDataSourcesConnectOrCreateFieldInput>
  >;
  nation?: InputMaybe<CompetitionNationConnectOrCreateFieldInput>;
};

export type CompetitionConnectWhere = {
  node: CompetitionWhere;
};

export type CompetitionCreateInput = {
  complete?: Scalars["Boolean"]["input"];
  name: Scalars["String"]["input"];
  processed?: Scalars["Boolean"]["input"];
  verified?: Scalars["Boolean"]["input"];
  start: Scalars["Date"]["input"];
  end: Scalars["Date"]["input"];
  events?: InputMaybe<CompetitionEventsFieldInput>;
  dataSources?: InputMaybe<CompetitionDataSourcesFieldInput>;
  nation?: InputMaybe<CompetitionNationFieldInput>;
  athletes?: InputMaybe<CompetitionAthletesFieldInput>;
};

export type CompetitionDataSourcesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CompetitionDataSourcesAggregateInput>>;
  OR?: InputMaybe<Array<CompetitionDataSourcesAggregateInput>>;
  NOT?: InputMaybe<CompetitionDataSourcesAggregateInput>;
  node?: InputMaybe<CompetitionDataSourcesNodeAggregationWhereInput>;
  edge?: InputMaybe<CompetitionDataSourcesEdgeAggregationWhereInput>;
};

export type CompetitionDataSourcesConnectFieldInput = {
  where?: InputMaybe<DataSourceConnectWhere>;
  connect?: InputMaybe<Array<DataSourceConnectInput>>;
  edge?: InputMaybe<InDataSourceCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type CompetitionDataSourcesConnectionSort = {
  edge?: InputMaybe<InDataSourceSort>;
  node?: InputMaybe<DataSourceSort>;
};

export type CompetitionDataSourcesConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionDataSourcesConnectionWhere>>;
  OR?: InputMaybe<Array<CompetitionDataSourcesConnectionWhere>>;
  NOT?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  edge?: InputMaybe<InDataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InDataSourceWhere>;
  node?: InputMaybe<DataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<DataSourceWhere>;
};

export type CompetitionDataSourcesConnectOrCreateFieldInput = {
  where: DataSourceConnectOrCreateWhere;
  onCreate: CompetitionDataSourcesConnectOrCreateFieldInputOnCreate;
};

export type CompetitionDataSourcesConnectOrCreateFieldInputOnCreate = {
  node: DataSourceOnCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type CompetitionDataSourcesCreateFieldInput = {
  node: DataSourceCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type CompetitionDataSourcesDeleteFieldInput = {
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  delete?: InputMaybe<DataSourceDeleteInput>;
};

export type CompetitionDataSourcesDisconnectFieldInput = {
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
};

export type CompetitionDataSourcesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionDataSourcesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CompetitionDataSourcesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionDataSourcesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CompetitionDataSourcesFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<CompetitionDataSourcesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<CompetitionDataSourcesCreateFieldInput>>;
  connect?: InputMaybe<Array<CompetitionDataSourcesConnectFieldInput>>;
};

export type CompetitionDataSourcesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionDataSourcesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CompetitionDataSourcesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionDataSourcesNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CompetitionDataSourcesUpdateConnectionInput = {
  node?: InputMaybe<DataSourceUpdateInput>;
  edge?: InputMaybe<InDataSourceUpdateInput>;
};

export type CompetitionDataSourcesUpdateFieldInput = {
  where?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<CompetitionDataSourcesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<CompetitionDataSourcesCreateFieldInput>>;
  connect?: InputMaybe<Array<CompetitionDataSourcesConnectFieldInput>>;
  update?: InputMaybe<CompetitionDataSourcesUpdateConnectionInput>;
  delete?: InputMaybe<Array<CompetitionDataSourcesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionDataSourcesDisconnectFieldInput>>;
};

export type CompetitionDeleteInput = {
  events?: InputMaybe<Array<CompetitionEventsDeleteFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesDeleteFieldInput>>;
  nation?: InputMaybe<CompetitionNationDeleteFieldInput>;
  athletes?: InputMaybe<Array<CompetitionAthletesDeleteFieldInput>>;
};

export type CompetitionDisconnectInput = {
  events?: InputMaybe<Array<CompetitionEventsDisconnectFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesDisconnectFieldInput>>;
  nation?: InputMaybe<CompetitionNationDisconnectFieldInput>;
  athletes?: InputMaybe<Array<CompetitionAthletesDisconnectFieldInput>>;
};

export type CompetitionEventsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CompetitionEventsAggregateInput>>;
  OR?: InputMaybe<Array<CompetitionEventsAggregateInput>>;
  NOT?: InputMaybe<CompetitionEventsAggregateInput>;
  node?: InputMaybe<CompetitionEventsNodeAggregationWhereInput>;
  edge?: InputMaybe<CompetitionEventsEdgeAggregationWhereInput>;
};

export type CompetitionEventsConnectFieldInput = {
  where?: InputMaybe<EventConnectWhere>;
  connect?: InputMaybe<Array<EventConnectInput>>;
  edge?: InputMaybe<EventOfCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type CompetitionEventsConnectionSort = {
  edge?: InputMaybe<EventOfSort>;
  node?: InputMaybe<EventSort>;
};

export type CompetitionEventsConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionEventsConnectionWhere>>;
  OR?: InputMaybe<Array<CompetitionEventsConnectionWhere>>;
  NOT?: InputMaybe<CompetitionEventsConnectionWhere>;
  edge?: InputMaybe<EventOfWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<EventOfWhere>;
  node?: InputMaybe<EventWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<EventWhere>;
};

export type CompetitionEventsCreateFieldInput = {
  node: EventCreateInput;
  edge?: InputMaybe<EventOfCreateInput>;
};

export type CompetitionEventsDeleteFieldInput = {
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
  delete?: InputMaybe<EventDeleteInput>;
};

export type CompetitionEventsDisconnectFieldInput = {
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
  disconnect?: InputMaybe<EventDisconnectInput>;
};

export type CompetitionEventsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionEventsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CompetitionEventsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionEventsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CompetitionEventsFieldInput = {
  create?: InputMaybe<Array<CompetitionEventsCreateFieldInput>>;
  connect?: InputMaybe<Array<CompetitionEventsConnectFieldInput>>;
};

export type CompetitionEventsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionEventsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CompetitionEventsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionEventsNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CompetitionEventsUpdateConnectionInput = {
  node?: InputMaybe<EventUpdateInput>;
  edge?: InputMaybe<EventOfUpdateInput>;
};

export type CompetitionEventsUpdateFieldInput = {
  where?: InputMaybe<CompetitionEventsConnectionWhere>;
  create?: InputMaybe<Array<CompetitionEventsCreateFieldInput>>;
  connect?: InputMaybe<Array<CompetitionEventsConnectFieldInput>>;
  update?: InputMaybe<CompetitionEventsUpdateConnectionInput>;
  delete?: InputMaybe<Array<CompetitionEventsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompetitionEventsDisconnectFieldInput>>;
};

export type CompetitionNationAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<CompetitionNationAggregateInput>>;
  OR?: InputMaybe<Array<CompetitionNationAggregateInput>>;
  NOT?: InputMaybe<CompetitionNationAggregateInput>;
  node?: InputMaybe<CompetitionNationNodeAggregationWhereInput>;
};

export type CompetitionNationConnectFieldInput = {
  where?: InputMaybe<NationConnectWhere>;
  connect?: InputMaybe<NationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type CompetitionNationConnectionSort = {
  node?: InputMaybe<NationSort>;
};

export type CompetitionNationConnectionWhere = {
  AND?: InputMaybe<Array<CompetitionNationConnectionWhere>>;
  OR?: InputMaybe<Array<CompetitionNationConnectionWhere>>;
  NOT?: InputMaybe<CompetitionNationConnectionWhere>;
  node?: InputMaybe<NationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<NationWhere>;
};

export type CompetitionNationConnectOrCreateFieldInput = {
  where: NationConnectOrCreateWhere;
  onCreate: CompetitionNationConnectOrCreateFieldInputOnCreate;
};

export type CompetitionNationConnectOrCreateFieldInputOnCreate = {
  node: NationOnCreateInput;
};

export type CompetitionNationCreateFieldInput = {
  node: NationCreateInput;
};

export type CompetitionNationDeleteFieldInput = {
  where?: InputMaybe<CompetitionNationConnectionWhere>;
  delete?: InputMaybe<NationDeleteInput>;
};

export type CompetitionNationDisconnectFieldInput = {
  where?: InputMaybe<CompetitionNationConnectionWhere>;
  disconnect?: InputMaybe<NationDisconnectInput>;
};

export type CompetitionNationFieldInput = {
  connectOrCreate?: InputMaybe<CompetitionNationConnectOrCreateFieldInput>;
  create?: InputMaybe<CompetitionNationCreateFieldInput>;
  connect?: InputMaybe<CompetitionNationConnectFieldInput>;
};

export type CompetitionNationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompetitionNationNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<CompetitionNationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompetitionNationNodeAggregationWhereInput>;
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
  code_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CompetitionNationUpdateConnectionInput = {
  node?: InputMaybe<NationUpdateInput>;
};

export type CompetitionNationUpdateFieldInput = {
  where?: InputMaybe<CompetitionNationConnectionWhere>;
  connectOrCreate?: InputMaybe<CompetitionNationConnectOrCreateFieldInput>;
  create?: InputMaybe<CompetitionNationCreateFieldInput>;
  connect?: InputMaybe<CompetitionNationConnectFieldInput>;
  update?: InputMaybe<CompetitionNationUpdateConnectionInput>;
  delete?: InputMaybe<CompetitionNationDeleteFieldInput>;
  disconnect?: InputMaybe<CompetitionNationDisconnectFieldInput>;
};

export type CompetitionOptions = {
  /** Specify one or more CompetitionSort objects to sort Competitions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CompetitionSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type CompetitionRelationInput = {
  events?: InputMaybe<Array<CompetitionEventsCreateFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesCreateFieldInput>>;
  nation?: InputMaybe<CompetitionNationCreateFieldInput>;
  athletes?: InputMaybe<Array<CompetitionAthletesCreateFieldInput>>;
};

/** Fields to sort Competitions by. The order in which sorts are applied is not guaranteed when specifying many fields in one CompetitionSort object. */
export type CompetitionSort = {
  complete?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  processed?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  start?: InputMaybe<SortDirection>;
  end?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type CompetitionUpdateInput = {
  complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  processed?: InputMaybe<Scalars["Boolean"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  start?: InputMaybe<Scalars["Date"]["input"]>;
  end?: InputMaybe<Scalars["Date"]["input"]>;
  events?: InputMaybe<Array<CompetitionEventsUpdateFieldInput>>;
  dataSources?: InputMaybe<Array<CompetitionDataSourcesUpdateFieldInput>>;
  nation?: InputMaybe<CompetitionNationUpdateFieldInput>;
  athletes?: InputMaybe<Array<CompetitionAthletesUpdateFieldInput>>;
};

export type CompetitionWhere = {
  OR?: InputMaybe<Array<CompetitionWhere>>;
  AND?: InputMaybe<Array<CompetitionWhere>>;
  NOT?: InputMaybe<CompetitionWhere>;
  complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  complete_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
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
  processed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  processed_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  start?: InputMaybe<Scalars["Date"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_NOT?: InputMaybe<Scalars["Date"]["input"]>;
  start_IN?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_NOT_IN?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  start_LT?: InputMaybe<Scalars["Date"]["input"]>;
  start_LTE?: InputMaybe<Scalars["Date"]["input"]>;
  start_GT?: InputMaybe<Scalars["Date"]["input"]>;
  start_GTE?: InputMaybe<Scalars["Date"]["input"]>;
  end?: InputMaybe<Scalars["Date"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_NOT?: InputMaybe<Scalars["Date"]["input"]>;
  end_IN?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_NOT_IN?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  end_LT?: InputMaybe<Scalars["Date"]["input"]>;
  end_LTE?: InputMaybe<Scalars["Date"]["input"]>;
  end_GT?: InputMaybe<Scalars["Date"]["input"]>;
  end_GTE?: InputMaybe<Scalars["Date"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Use `events_SOME` instead. */
  events?: InputMaybe<EventWhere>;
  /** @deprecated Use `events_NONE` instead. */
  events_NOT?: InputMaybe<EventWhere>;
  eventsAggregate?: InputMaybe<CompetitionEventsAggregateInput>;
  /** Return Competitions where all of the related Events match this filter */
  events_ALL?: InputMaybe<EventWhere>;
  /** Return Competitions where none of the related Events match this filter */
  events_NONE?: InputMaybe<EventWhere>;
  /** Return Competitions where one of the related Events match this filter */
  events_SINGLE?: InputMaybe<EventWhere>;
  /** Return Competitions where some of the related Events match this filter */
  events_SOME?: InputMaybe<EventWhere>;
  /** @deprecated Use `dataSources_SOME` instead. */
  dataSources?: InputMaybe<DataSourceWhere>;
  /** @deprecated Use `dataSources_NONE` instead. */
  dataSources_NOT?: InputMaybe<DataSourceWhere>;
  dataSourcesAggregate?: InputMaybe<CompetitionDataSourcesAggregateInput>;
  /** Return Competitions where all of the related DataSources match this filter */
  dataSources_ALL?: InputMaybe<DataSourceWhere>;
  /** Return Competitions where none of the related DataSources match this filter */
  dataSources_NONE?: InputMaybe<DataSourceWhere>;
  /** Return Competitions where one of the related DataSources match this filter */
  dataSources_SINGLE?: InputMaybe<DataSourceWhere>;
  /** Return Competitions where some of the related DataSources match this filter */
  dataSources_SOME?: InputMaybe<DataSourceWhere>;
  nation?: InputMaybe<NationWhere>;
  nation_NOT?: InputMaybe<NationWhere>;
  nationAggregate?: InputMaybe<CompetitionNationAggregateInput>;
  /** @deprecated Use `athletes_SOME` instead. */
  athletes?: InputMaybe<AthleteWhere>;
  /** @deprecated Use `athletes_NONE` instead. */
  athletes_NOT?: InputMaybe<AthleteWhere>;
  athletesAggregate?: InputMaybe<CompetitionAthletesAggregateInput>;
  /** Return Competitions where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Competitions where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Competitions where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Competitions where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  /** @deprecated Use `eventsConnection_SOME` instead. */
  eventsConnection?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** @deprecated Use `eventsConnection_NONE` instead. */
  eventsConnection_NOT?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where all of the related CompetitionEventsConnections match this filter */
  eventsConnection_ALL?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where none of the related CompetitionEventsConnections match this filter */
  eventsConnection_NONE?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where one of the related CompetitionEventsConnections match this filter */
  eventsConnection_SINGLE?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** Return Competitions where some of the related CompetitionEventsConnections match this filter */
  eventsConnection_SOME?: InputMaybe<CompetitionEventsConnectionWhere>;
  /** @deprecated Use `dataSourcesConnection_SOME` instead. */
  dataSourcesConnection?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** @deprecated Use `dataSourcesConnection_NONE` instead. */
  dataSourcesConnection_NOT?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where all of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_ALL?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where none of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_NONE?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where one of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_SINGLE?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  /** Return Competitions where some of the related CompetitionDataSourcesConnections match this filter */
  dataSourcesConnection_SOME?: InputMaybe<CompetitionDataSourcesConnectionWhere>;
  nationConnection?: InputMaybe<CompetitionNationConnectionWhere>;
  nationConnection_NOT?: InputMaybe<CompetitionNationConnectionWhere>;
  /** @deprecated Use `athletesConnection_SOME` instead. */
  athletesConnection?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** @deprecated Use `athletesConnection_NONE` instead. */
  athletesConnection_NOT?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where all of the related CompetitionAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where none of the related CompetitionAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where one of the related CompetitionAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<CompetitionAthletesConnectionWhere>;
  /** Return Competitions where some of the related CompetitionAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<CompetitionAthletesConnectionWhere>;
};

export type DataSourceAthletesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<DataSourceAthletesAggregateInput>>;
  OR?: InputMaybe<Array<DataSourceAthletesAggregateInput>>;
  NOT?: InputMaybe<DataSourceAthletesAggregateInput>;
  node?: InputMaybe<DataSourceAthletesNodeAggregationWhereInput>;
  edge?: InputMaybe<DataSourceAthletesEdgeAggregationWhereInput>;
};

export type DataSourceAthletesConnectFieldInput = {
  where?: InputMaybe<AthleteConnectWhere>;
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  edge?: InputMaybe<InDataSourceCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type DataSourceAthletesConnectionSort = {
  edge?: InputMaybe<InDataSourceSort>;
  node?: InputMaybe<AthleteSort>;
};

export type DataSourceAthletesConnectionWhere = {
  AND?: InputMaybe<Array<DataSourceAthletesConnectionWhere>>;
  OR?: InputMaybe<Array<DataSourceAthletesConnectionWhere>>;
  NOT?: InputMaybe<DataSourceAthletesConnectionWhere>;
  edge?: InputMaybe<InDataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InDataSourceWhere>;
  node?: InputMaybe<AthleteWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<AthleteWhere>;
};

export type DataSourceAthletesCreateFieldInput = {
  node: AthleteCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type DataSourceAthletesDeleteFieldInput = {
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
  delete?: InputMaybe<AthleteDeleteInput>;
};

export type DataSourceAthletesDisconnectFieldInput = {
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
  disconnect?: InputMaybe<AthleteDisconnectInput>;
};

export type DataSourceAthletesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceAthletesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataSourceAthletesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceAthletesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DataSourceAthletesFieldInput = {
  create?: InputMaybe<Array<DataSourceAthletesCreateFieldInput>>;
  connect?: InputMaybe<Array<DataSourceAthletesConnectFieldInput>>;
};

export type DataSourceAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceAthletesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataSourceAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceAthletesNodeAggregationWhereInput>;
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
  givenName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DataSourceAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
  edge?: InputMaybe<InDataSourceUpdateInput>;
};

export type DataSourceAthletesUpdateFieldInput = {
  where?: InputMaybe<DataSourceAthletesConnectionWhere>;
  create?: InputMaybe<Array<DataSourceAthletesCreateFieldInput>>;
  connect?: InputMaybe<Array<DataSourceAthletesConnectFieldInput>>;
  update?: InputMaybe<DataSourceAthletesUpdateConnectionInput>;
  delete?: InputMaybe<Array<DataSourceAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DataSourceAthletesDisconnectFieldInput>>;
};

export type DataSourceCompetitionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<DataSourceCompetitionsAggregateInput>>;
  OR?: InputMaybe<Array<DataSourceCompetitionsAggregateInput>>;
  NOT?: InputMaybe<DataSourceCompetitionsAggregateInput>;
  node?: InputMaybe<DataSourceCompetitionsNodeAggregationWhereInput>;
  edge?: InputMaybe<DataSourceCompetitionsEdgeAggregationWhereInput>;
};

export type DataSourceCompetitionsConnectFieldInput = {
  where?: InputMaybe<CompetitionConnectWhere>;
  connect?: InputMaybe<Array<CompetitionConnectInput>>;
  edge?: InputMaybe<InDataSourceCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type DataSourceCompetitionsConnectionSort = {
  edge?: InputMaybe<InDataSourceSort>;
  node?: InputMaybe<CompetitionSort>;
};

export type DataSourceCompetitionsConnectionWhere = {
  AND?: InputMaybe<Array<DataSourceCompetitionsConnectionWhere>>;
  OR?: InputMaybe<Array<DataSourceCompetitionsConnectionWhere>>;
  NOT?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  edge?: InputMaybe<InDataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InDataSourceWhere>;
  node?: InputMaybe<CompetitionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CompetitionWhere>;
};

export type DataSourceCompetitionsCreateFieldInput = {
  node: CompetitionCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type DataSourceCompetitionsDeleteFieldInput = {
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  delete?: InputMaybe<CompetitionDeleteInput>;
};

export type DataSourceCompetitionsDisconnectFieldInput = {
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
};

export type DataSourceCompetitionsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceCompetitionsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataSourceCompetitionsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceCompetitionsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DataSourceCompetitionsFieldInput = {
  create?: InputMaybe<Array<DataSourceCompetitionsCreateFieldInput>>;
  connect?: InputMaybe<Array<DataSourceCompetitionsConnectFieldInput>>;
};

export type DataSourceCompetitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceCompetitionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataSourceCompetitionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceCompetitionsNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DataSourceCompetitionsUpdateConnectionInput = {
  node?: InputMaybe<CompetitionUpdateInput>;
  edge?: InputMaybe<InDataSourceUpdateInput>;
};

export type DataSourceCompetitionsUpdateFieldInput = {
  where?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  create?: InputMaybe<Array<DataSourceCompetitionsCreateFieldInput>>;
  connect?: InputMaybe<Array<DataSourceCompetitionsConnectFieldInput>>;
  update?: InputMaybe<DataSourceCompetitionsUpdateConnectionInput>;
  delete?: InputMaybe<Array<DataSourceCompetitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DataSourceCompetitionsDisconnectFieldInput>>;
};

export type DataSourceConnectInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesConnectFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsConnectFieldInput>>;
  events?: InputMaybe<Array<DataSourceEventsConnectFieldInput>>;
};

export type DataSourceConnectOrCreateWhere = {
  node: DataSourceUniqueWhere;
};

export type DataSourceConnectWhere = {
  node: DataSourceWhere;
};

export type DataSourceCreateInput = {
  name: Scalars["String"]["input"];
  verified?: Scalars["Boolean"]["input"];
  type: DataSourceType;
  athletes?: InputMaybe<DataSourceAthletesFieldInput>;
  competitions?: InputMaybe<DataSourceCompetitionsFieldInput>;
  events?: InputMaybe<DataSourceEventsFieldInput>;
};

export type DataSourceDeleteInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesDeleteFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsDeleteFieldInput>>;
  events?: InputMaybe<Array<DataSourceEventsDeleteFieldInput>>;
};

export type DataSourceDisconnectInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesDisconnectFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsDisconnectFieldInput>>;
  events?: InputMaybe<Array<DataSourceEventsDisconnectFieldInput>>;
};

export type DataSourceEventsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<DataSourceEventsAggregateInput>>;
  OR?: InputMaybe<Array<DataSourceEventsAggregateInput>>;
  NOT?: InputMaybe<DataSourceEventsAggregateInput>;
  node?: InputMaybe<DataSourceEventsNodeAggregationWhereInput>;
  edge?: InputMaybe<DataSourceEventsEdgeAggregationWhereInput>;
};

export type DataSourceEventsConnectFieldInput = {
  where?: InputMaybe<EventConnectWhere>;
  connect?: InputMaybe<Array<EventConnectInput>>;
  edge?: InputMaybe<InDataSourceCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type DataSourceEventsConnectionSort = {
  edge?: InputMaybe<InDataSourceSort>;
  node?: InputMaybe<EventSort>;
};

export type DataSourceEventsConnectionWhere = {
  AND?: InputMaybe<Array<DataSourceEventsConnectionWhere>>;
  OR?: InputMaybe<Array<DataSourceEventsConnectionWhere>>;
  NOT?: InputMaybe<DataSourceEventsConnectionWhere>;
  edge?: InputMaybe<InDataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InDataSourceWhere>;
  node?: InputMaybe<EventWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<EventWhere>;
};

export type DataSourceEventsCreateFieldInput = {
  node: EventCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type DataSourceEventsDeleteFieldInput = {
  where?: InputMaybe<DataSourceEventsConnectionWhere>;
  delete?: InputMaybe<EventDeleteInput>;
};

export type DataSourceEventsDisconnectFieldInput = {
  where?: InputMaybe<DataSourceEventsConnectionWhere>;
  disconnect?: InputMaybe<EventDisconnectInput>;
};

export type DataSourceEventsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceEventsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataSourceEventsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceEventsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DataSourceEventsFieldInput = {
  create?: InputMaybe<Array<DataSourceEventsCreateFieldInput>>;
  connect?: InputMaybe<Array<DataSourceEventsConnectFieldInput>>;
};

export type DataSourceEventsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DataSourceEventsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DataSourceEventsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DataSourceEventsNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DataSourceEventsUpdateConnectionInput = {
  node?: InputMaybe<EventUpdateInput>;
  edge?: InputMaybe<InDataSourceUpdateInput>;
};

export type DataSourceEventsUpdateFieldInput = {
  where?: InputMaybe<DataSourceEventsConnectionWhere>;
  create?: InputMaybe<Array<DataSourceEventsCreateFieldInput>>;
  connect?: InputMaybe<Array<DataSourceEventsConnectFieldInput>>;
  update?: InputMaybe<DataSourceEventsUpdateConnectionInput>;
  delete?: InputMaybe<Array<DataSourceEventsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DataSourceEventsDisconnectFieldInput>>;
};

export type DataSourceOnCreateInput = {
  name: Scalars["String"]["input"];
  verified?: Scalars["Boolean"]["input"];
  type: DataSourceType;
};

export type DataSourceOptions = {
  /** Specify one or more DataSourceSort objects to sort DataSources by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DataSourceSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DataSourceRelationInput = {
  athletes?: InputMaybe<Array<DataSourceAthletesCreateFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsCreateFieldInput>>;
  events?: InputMaybe<Array<DataSourceEventsCreateFieldInput>>;
};

/** Fields to sort DataSources by. The order in which sorts are applied is not guaranteed when specifying many fields in one DataSourceSort object. */
export type DataSourceSort = {
  name?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type DataSourceUniqueWhere = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type DataSourceUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  type?: InputMaybe<DataSourceType>;
  athletes?: InputMaybe<Array<DataSourceAthletesUpdateFieldInput>>;
  competitions?: InputMaybe<Array<DataSourceCompetitionsUpdateFieldInput>>;
  events?: InputMaybe<Array<DataSourceEventsUpdateFieldInput>>;
};

export type DataSourceWhere = {
  OR?: InputMaybe<Array<DataSourceWhere>>;
  AND?: InputMaybe<Array<DataSourceWhere>>;
  NOT?: InputMaybe<DataSourceWhere>;
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
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  type?: InputMaybe<DataSourceType>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT?: InputMaybe<DataSourceType>;
  type_IN?: InputMaybe<Array<DataSourceType>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  type_NOT_IN?: InputMaybe<Array<DataSourceType>>;
  /** @deprecated Use `athletes_SOME` instead. */
  athletes?: InputMaybe<AthleteWhere>;
  /** @deprecated Use `athletes_NONE` instead. */
  athletes_NOT?: InputMaybe<AthleteWhere>;
  athletesAggregate?: InputMaybe<DataSourceAthletesAggregateInput>;
  /** Return DataSources where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return DataSources where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return DataSources where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return DataSources where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  /** @deprecated Use `competitions_SOME` instead. */
  competitions?: InputMaybe<CompetitionWhere>;
  /** @deprecated Use `competitions_NONE` instead. */
  competitions_NOT?: InputMaybe<CompetitionWhere>;
  competitionsAggregate?: InputMaybe<DataSourceCompetitionsAggregateInput>;
  /** Return DataSources where all of the related Competitions match this filter */
  competitions_ALL?: InputMaybe<CompetitionWhere>;
  /** Return DataSources where none of the related Competitions match this filter */
  competitions_NONE?: InputMaybe<CompetitionWhere>;
  /** Return DataSources where one of the related Competitions match this filter */
  competitions_SINGLE?: InputMaybe<CompetitionWhere>;
  /** Return DataSources where some of the related Competitions match this filter */
  competitions_SOME?: InputMaybe<CompetitionWhere>;
  /** @deprecated Use `events_SOME` instead. */
  events?: InputMaybe<EventWhere>;
  /** @deprecated Use `events_NONE` instead. */
  events_NOT?: InputMaybe<EventWhere>;
  eventsAggregate?: InputMaybe<DataSourceEventsAggregateInput>;
  /** Return DataSources where all of the related Events match this filter */
  events_ALL?: InputMaybe<EventWhere>;
  /** Return DataSources where none of the related Events match this filter */
  events_NONE?: InputMaybe<EventWhere>;
  /** Return DataSources where one of the related Events match this filter */
  events_SINGLE?: InputMaybe<EventWhere>;
  /** Return DataSources where some of the related Events match this filter */
  events_SOME?: InputMaybe<EventWhere>;
  /** @deprecated Use `athletesConnection_SOME` instead. */
  athletesConnection?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** @deprecated Use `athletesConnection_NONE` instead. */
  athletesConnection_NOT?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where all of the related DataSourceAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where none of the related DataSourceAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where one of the related DataSourceAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** Return DataSources where some of the related DataSourceAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<DataSourceAthletesConnectionWhere>;
  /** @deprecated Use `competitionsConnection_SOME` instead. */
  competitionsConnection?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** @deprecated Use `competitionsConnection_NONE` instead. */
  competitionsConnection_NOT?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where all of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_ALL?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where none of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_NONE?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where one of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_SINGLE?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** Return DataSources where some of the related DataSourceCompetitionsConnections match this filter */
  competitionsConnection_SOME?: InputMaybe<DataSourceCompetitionsConnectionWhere>;
  /** @deprecated Use `eventsConnection_SOME` instead. */
  eventsConnection?: InputMaybe<DataSourceEventsConnectionWhere>;
  /** @deprecated Use `eventsConnection_NONE` instead. */
  eventsConnection_NOT?: InputMaybe<DataSourceEventsConnectionWhere>;
  /** Return DataSources where all of the related DataSourceEventsConnections match this filter */
  eventsConnection_ALL?: InputMaybe<DataSourceEventsConnectionWhere>;
  /** Return DataSources where none of the related DataSourceEventsConnections match this filter */
  eventsConnection_NONE?: InputMaybe<DataSourceEventsConnectionWhere>;
  /** Return DataSources where one of the related DataSourceEventsConnections match this filter */
  eventsConnection_SINGLE?: InputMaybe<DataSourceEventsConnectionWhere>;
  /** Return DataSources where some of the related DataSourceEventsConnections match this filter */
  eventsConnection_SOME?: InputMaybe<DataSourceEventsConnectionWhere>;
};

export type DivisionAthletesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<DivisionAthletesAggregateInput>>;
  OR?: InputMaybe<Array<DivisionAthletesAggregateInput>>;
  NOT?: InputMaybe<DivisionAthletesAggregateInput>;
  node?: InputMaybe<DivisionAthletesNodeAggregationWhereInput>;
};

export type DivisionAthletesConnectFieldInput = {
  where?: InputMaybe<AthleteConnectWhere>;
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type DivisionAthletesConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type DivisionAthletesConnectionWhere = {
  AND?: InputMaybe<Array<DivisionAthletesConnectionWhere>>;
  OR?: InputMaybe<Array<DivisionAthletesConnectionWhere>>;
  NOT?: InputMaybe<DivisionAthletesConnectionWhere>;
  node?: InputMaybe<AthleteWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<AthleteWhere>;
};

export type DivisionAthletesCreateFieldInput = {
  node: AthleteCreateInput;
};

export type DivisionAthletesDeleteFieldInput = {
  where?: InputMaybe<DivisionAthletesConnectionWhere>;
  delete?: InputMaybe<AthleteDeleteInput>;
};

export type DivisionAthletesDisconnectFieldInput = {
  where?: InputMaybe<DivisionAthletesConnectionWhere>;
  disconnect?: InputMaybe<AthleteDisconnectInput>;
};

export type DivisionAthletesFieldInput = {
  create?: InputMaybe<Array<DivisionAthletesCreateFieldInput>>;
  connect?: InputMaybe<Array<DivisionAthletesConnectFieldInput>>;
};

export type DivisionAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DivisionAthletesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DivisionAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DivisionAthletesNodeAggregationWhereInput>;
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
  givenName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DivisionAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type DivisionAthletesUpdateFieldInput = {
  where?: InputMaybe<DivisionAthletesConnectionWhere>;
  create?: InputMaybe<Array<DivisionAthletesCreateFieldInput>>;
  connect?: InputMaybe<Array<DivisionAthletesConnectFieldInput>>;
  update?: InputMaybe<DivisionAthletesUpdateConnectionInput>;
  delete?: InputMaybe<Array<DivisionAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DivisionAthletesDisconnectFieldInput>>;
};

export type DivisionConnectInput = {
  dataSources?: InputMaybe<Array<DivisionDataSourcesConnectFieldInput>>;
  matches?: InputMaybe<Array<DivisionMatchesConnectFieldInput>>;
  athletes?: InputMaybe<Array<DivisionAthletesConnectFieldInput>>;
};

export type DivisionConnectOrCreateInput = {
  dataSources?: InputMaybe<Array<DivisionDataSourcesConnectOrCreateFieldInput>>;
};

export type DivisionConnectOrCreateWhere = {
  node: DivisionUniqueWhere;
};

export type DivisionConnectWhere = {
  node: DivisionWhere;
};

export type DivisionCreateInput = {
  name: Scalars["String"]["input"];
  verified?: Scalars["Boolean"]["input"];
  dataSources?: InputMaybe<DivisionDataSourcesFieldInput>;
  matches?: InputMaybe<DivisionMatchesFieldInput>;
  athletes?: InputMaybe<DivisionAthletesFieldInput>;
};

export type DivisionDataSourcesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<DivisionDataSourcesAggregateInput>>;
  OR?: InputMaybe<Array<DivisionDataSourcesAggregateInput>>;
  NOT?: InputMaybe<DivisionDataSourcesAggregateInput>;
  node?: InputMaybe<DivisionDataSourcesNodeAggregationWhereInput>;
  edge?: InputMaybe<DivisionDataSourcesEdgeAggregationWhereInput>;
};

export type DivisionDataSourcesConnectFieldInput = {
  where?: InputMaybe<DataSourceConnectWhere>;
  connect?: InputMaybe<Array<DataSourceConnectInput>>;
  edge?: InputMaybe<InDataSourceCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type DivisionDataSourcesConnectionSort = {
  edge?: InputMaybe<InDataSourceSort>;
  node?: InputMaybe<DataSourceSort>;
};

export type DivisionDataSourcesConnectionWhere = {
  AND?: InputMaybe<Array<DivisionDataSourcesConnectionWhere>>;
  OR?: InputMaybe<Array<DivisionDataSourcesConnectionWhere>>;
  NOT?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  edge?: InputMaybe<InDataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InDataSourceWhere>;
  node?: InputMaybe<DataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<DataSourceWhere>;
};

export type DivisionDataSourcesConnectOrCreateFieldInput = {
  where: DataSourceConnectOrCreateWhere;
  onCreate: DivisionDataSourcesConnectOrCreateFieldInputOnCreate;
};

export type DivisionDataSourcesConnectOrCreateFieldInputOnCreate = {
  node: DataSourceOnCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type DivisionDataSourcesCreateFieldInput = {
  node: DataSourceCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type DivisionDataSourcesDeleteFieldInput = {
  where?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  delete?: InputMaybe<DataSourceDeleteInput>;
};

export type DivisionDataSourcesDisconnectFieldInput = {
  where?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
};

export type DivisionDataSourcesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<DivisionDataSourcesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DivisionDataSourcesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<DivisionDataSourcesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DivisionDataSourcesFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<DivisionDataSourcesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<DivisionDataSourcesCreateFieldInput>>;
  connect?: InputMaybe<Array<DivisionDataSourcesConnectFieldInput>>;
};

export type DivisionDataSourcesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DivisionDataSourcesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DivisionDataSourcesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DivisionDataSourcesNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DivisionDataSourcesUpdateConnectionInput = {
  node?: InputMaybe<DataSourceUpdateInput>;
  edge?: InputMaybe<InDataSourceUpdateInput>;
};

export type DivisionDataSourcesUpdateFieldInput = {
  where?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<DivisionDataSourcesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<DivisionDataSourcesCreateFieldInput>>;
  connect?: InputMaybe<Array<DivisionDataSourcesConnectFieldInput>>;
  update?: InputMaybe<DivisionDataSourcesUpdateConnectionInput>;
  delete?: InputMaybe<Array<DivisionDataSourcesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DivisionDataSourcesDisconnectFieldInput>>;
};

export type DivisionDeleteInput = {
  dataSources?: InputMaybe<Array<DivisionDataSourcesDeleteFieldInput>>;
  matches?: InputMaybe<Array<DivisionMatchesDeleteFieldInput>>;
  athletes?: InputMaybe<Array<DivisionAthletesDeleteFieldInput>>;
};

export type DivisionDisconnectInput = {
  dataSources?: InputMaybe<Array<DivisionDataSourcesDisconnectFieldInput>>;
  matches?: InputMaybe<Array<DivisionMatchesDisconnectFieldInput>>;
  athletes?: InputMaybe<Array<DivisionAthletesDisconnectFieldInput>>;
};

export type DivisionMatchesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<DivisionMatchesAggregateInput>>;
  OR?: InputMaybe<Array<DivisionMatchesAggregateInput>>;
  NOT?: InputMaybe<DivisionMatchesAggregateInput>;
  node?: InputMaybe<DivisionMatchesNodeAggregationWhereInput>;
};

export type DivisionMatchesConnectFieldInput = {
  where?: InputMaybe<MatchConnectWhere>;
  connect?: InputMaybe<Array<MatchConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type DivisionMatchesConnectionSort = {
  node?: InputMaybe<MatchSort>;
};

export type DivisionMatchesConnectionWhere = {
  AND?: InputMaybe<Array<DivisionMatchesConnectionWhere>>;
  OR?: InputMaybe<Array<DivisionMatchesConnectionWhere>>;
  NOT?: InputMaybe<DivisionMatchesConnectionWhere>;
  node?: InputMaybe<MatchWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MatchWhere>;
};

export type DivisionMatchesCreateFieldInput = {
  node: MatchCreateInput;
};

export type DivisionMatchesDeleteFieldInput = {
  where?: InputMaybe<DivisionMatchesConnectionWhere>;
  delete?: InputMaybe<MatchDeleteInput>;
};

export type DivisionMatchesDisconnectFieldInput = {
  where?: InputMaybe<DivisionMatchesConnectionWhere>;
  disconnect?: InputMaybe<MatchDisconnectInput>;
};

export type DivisionMatchesFieldInput = {
  create?: InputMaybe<Array<DivisionMatchesCreateFieldInput>>;
  connect?: InputMaybe<Array<DivisionMatchesConnectFieldInput>>;
};

export type DivisionMatchesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DivisionMatchesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DivisionMatchesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DivisionMatchesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DivisionMatchesUpdateConnectionInput = {
  node?: InputMaybe<MatchUpdateInput>;
};

export type DivisionMatchesUpdateFieldInput = {
  where?: InputMaybe<DivisionMatchesConnectionWhere>;
  create?: InputMaybe<Array<DivisionMatchesCreateFieldInput>>;
  connect?: InputMaybe<Array<DivisionMatchesConnectFieldInput>>;
  update?: InputMaybe<DivisionMatchesUpdateConnectionInput>;
  delete?: InputMaybe<Array<DivisionMatchesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DivisionMatchesDisconnectFieldInput>>;
};

export type DivisionOnCreateInput = {
  name: Scalars["String"]["input"];
  verified?: Scalars["Boolean"]["input"];
};

export type DivisionOptions = {
  /** Specify one or more DivisionSort objects to sort Divisions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DivisionSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type DivisionRelationInput = {
  dataSources?: InputMaybe<Array<DivisionDataSourcesCreateFieldInput>>;
  matches?: InputMaybe<Array<DivisionMatchesCreateFieldInput>>;
  athletes?: InputMaybe<Array<DivisionAthletesCreateFieldInput>>;
};

/** Fields to sort Divisions by. The order in which sorts are applied is not guaranteed when specifying many fields in one DivisionSort object. */
export type DivisionSort = {
  name?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type DivisionUniqueWhere = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type DivisionUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  dataSources?: InputMaybe<Array<DivisionDataSourcesUpdateFieldInput>>;
  matches?: InputMaybe<Array<DivisionMatchesUpdateFieldInput>>;
  athletes?: InputMaybe<Array<DivisionAthletesUpdateFieldInput>>;
};

export type DivisionWhere = {
  OR?: InputMaybe<Array<DivisionWhere>>;
  AND?: InputMaybe<Array<DivisionWhere>>;
  NOT?: InputMaybe<DivisionWhere>;
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
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Use `dataSources_SOME` instead. */
  dataSources?: InputMaybe<DataSourceWhere>;
  /** @deprecated Use `dataSources_NONE` instead. */
  dataSources_NOT?: InputMaybe<DataSourceWhere>;
  dataSourcesAggregate?: InputMaybe<DivisionDataSourcesAggregateInput>;
  /** Return Divisions where all of the related DataSources match this filter */
  dataSources_ALL?: InputMaybe<DataSourceWhere>;
  /** Return Divisions where none of the related DataSources match this filter */
  dataSources_NONE?: InputMaybe<DataSourceWhere>;
  /** Return Divisions where one of the related DataSources match this filter */
  dataSources_SINGLE?: InputMaybe<DataSourceWhere>;
  /** Return Divisions where some of the related DataSources match this filter */
  dataSources_SOME?: InputMaybe<DataSourceWhere>;
  /** @deprecated Use `matches_SOME` instead. */
  matches?: InputMaybe<MatchWhere>;
  /** @deprecated Use `matches_NONE` instead. */
  matches_NOT?: InputMaybe<MatchWhere>;
  matchesAggregate?: InputMaybe<DivisionMatchesAggregateInput>;
  /** Return Divisions where all of the related Matches match this filter */
  matches_ALL?: InputMaybe<MatchWhere>;
  /** Return Divisions where none of the related Matches match this filter */
  matches_NONE?: InputMaybe<MatchWhere>;
  /** Return Divisions where one of the related Matches match this filter */
  matches_SINGLE?: InputMaybe<MatchWhere>;
  /** Return Divisions where some of the related Matches match this filter */
  matches_SOME?: InputMaybe<MatchWhere>;
  /** @deprecated Use `athletes_SOME` instead. */
  athletes?: InputMaybe<AthleteWhere>;
  /** @deprecated Use `athletes_NONE` instead. */
  athletes_NOT?: InputMaybe<AthleteWhere>;
  athletesAggregate?: InputMaybe<DivisionAthletesAggregateInput>;
  /** Return Divisions where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Divisions where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Divisions where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Divisions where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  /** @deprecated Use `dataSourcesConnection_SOME` instead. */
  dataSourcesConnection?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  /** @deprecated Use `dataSourcesConnection_NONE` instead. */
  dataSourcesConnection_NOT?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  /** Return Divisions where all of the related DivisionDataSourcesConnections match this filter */
  dataSourcesConnection_ALL?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  /** Return Divisions where none of the related DivisionDataSourcesConnections match this filter */
  dataSourcesConnection_NONE?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  /** Return Divisions where one of the related DivisionDataSourcesConnections match this filter */
  dataSourcesConnection_SINGLE?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  /** Return Divisions where some of the related DivisionDataSourcesConnections match this filter */
  dataSourcesConnection_SOME?: InputMaybe<DivisionDataSourcesConnectionWhere>;
  /** @deprecated Use `matchesConnection_SOME` instead. */
  matchesConnection?: InputMaybe<DivisionMatchesConnectionWhere>;
  /** @deprecated Use `matchesConnection_NONE` instead. */
  matchesConnection_NOT?: InputMaybe<DivisionMatchesConnectionWhere>;
  /** Return Divisions where all of the related DivisionMatchesConnections match this filter */
  matchesConnection_ALL?: InputMaybe<DivisionMatchesConnectionWhere>;
  /** Return Divisions where none of the related DivisionMatchesConnections match this filter */
  matchesConnection_NONE?: InputMaybe<DivisionMatchesConnectionWhere>;
  /** Return Divisions where one of the related DivisionMatchesConnections match this filter */
  matchesConnection_SINGLE?: InputMaybe<DivisionMatchesConnectionWhere>;
  /** Return Divisions where some of the related DivisionMatchesConnections match this filter */
  matchesConnection_SOME?: InputMaybe<DivisionMatchesConnectionWhere>;
  /** @deprecated Use `athletesConnection_SOME` instead. */
  athletesConnection?: InputMaybe<DivisionAthletesConnectionWhere>;
  /** @deprecated Use `athletesConnection_NONE` instead. */
  athletesConnection_NOT?: InputMaybe<DivisionAthletesConnectionWhere>;
  /** Return Divisions where all of the related DivisionAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<DivisionAthletesConnectionWhere>;
  /** Return Divisions where none of the related DivisionAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<DivisionAthletesConnectionWhere>;
  /** Return Divisions where one of the related DivisionAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<DivisionAthletesConnectionWhere>;
  /** Return Divisions where some of the related DivisionAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<DivisionAthletesConnectionWhere>;
};

export type EventCompetitionAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<EventCompetitionAggregateInput>>;
  OR?: InputMaybe<Array<EventCompetitionAggregateInput>>;
  NOT?: InputMaybe<EventCompetitionAggregateInput>;
  node?: InputMaybe<EventCompetitionNodeAggregationWhereInput>;
  edge?: InputMaybe<EventCompetitionEdgeAggregationWhereInput>;
};

export type EventCompetitionConnectFieldInput = {
  where?: InputMaybe<CompetitionConnectWhere>;
  connect?: InputMaybe<CompetitionConnectInput>;
  edge?: InputMaybe<EventOfCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type EventCompetitionConnectionSort = {
  edge?: InputMaybe<EventOfSort>;
  node?: InputMaybe<CompetitionSort>;
};

export type EventCompetitionConnectionWhere = {
  AND?: InputMaybe<Array<EventCompetitionConnectionWhere>>;
  OR?: InputMaybe<Array<EventCompetitionConnectionWhere>>;
  NOT?: InputMaybe<EventCompetitionConnectionWhere>;
  edge?: InputMaybe<EventOfWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<EventOfWhere>;
  node?: InputMaybe<CompetitionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CompetitionWhere>;
};

export type EventCompetitionCreateFieldInput = {
  node: CompetitionCreateInput;
  edge?: InputMaybe<EventOfCreateInput>;
};

export type EventCompetitionDeleteFieldInput = {
  where?: InputMaybe<EventCompetitionConnectionWhere>;
  delete?: InputMaybe<CompetitionDeleteInput>;
};

export type EventCompetitionDisconnectFieldInput = {
  where?: InputMaybe<EventCompetitionConnectionWhere>;
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
};

export type EventCompetitionEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventCompetitionEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<EventCompetitionEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<EventCompetitionEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EventCompetitionFieldInput = {
  create?: InputMaybe<EventCompetitionCreateFieldInput>;
  connect?: InputMaybe<EventCompetitionConnectFieldInput>;
};

export type EventCompetitionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventCompetitionNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<EventCompetitionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EventCompetitionNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type EventCompetitionUpdateConnectionInput = {
  node?: InputMaybe<CompetitionUpdateInput>;
  edge?: InputMaybe<EventOfUpdateInput>;
};

export type EventCompetitionUpdateFieldInput = {
  where?: InputMaybe<EventCompetitionConnectionWhere>;
  create?: InputMaybe<EventCompetitionCreateFieldInput>;
  connect?: InputMaybe<EventCompetitionConnectFieldInput>;
  update?: InputMaybe<EventCompetitionUpdateConnectionInput>;
  delete?: InputMaybe<EventCompetitionDeleteFieldInput>;
  disconnect?: InputMaybe<EventCompetitionDisconnectFieldInput>;
};

export type EventConnectInput = {
  matches?: InputMaybe<Array<EventMatchesConnectFieldInput>>;
  competition?: InputMaybe<EventCompetitionConnectFieldInput>;
  dataSources?: InputMaybe<Array<EventDataSourcesConnectFieldInput>>;
};

export type EventConnectOrCreateInput = {
  dataSources?: InputMaybe<Array<EventDataSourcesConnectOrCreateFieldInput>>;
};

export type EventConnectWhere = {
  node: EventWhere;
};

export type EventCreateInput = {
  name: Scalars["String"]["input"];
  complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  processed?: Scalars["Boolean"]["input"];
  verified?: Scalars["Boolean"]["input"];
  start: Scalars["Date"]["input"];
  end: Scalars["Date"]["input"];
  matches?: InputMaybe<EventMatchesFieldInput>;
  competition?: InputMaybe<EventCompetitionFieldInput>;
  dataSources?: InputMaybe<EventDataSourcesFieldInput>;
};

export type EventDataSourcesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<EventDataSourcesAggregateInput>>;
  OR?: InputMaybe<Array<EventDataSourcesAggregateInput>>;
  NOT?: InputMaybe<EventDataSourcesAggregateInput>;
  node?: InputMaybe<EventDataSourcesNodeAggregationWhereInput>;
  edge?: InputMaybe<EventDataSourcesEdgeAggregationWhereInput>;
};

export type EventDataSourcesConnectFieldInput = {
  where?: InputMaybe<DataSourceConnectWhere>;
  connect?: InputMaybe<Array<DataSourceConnectInput>>;
  edge?: InputMaybe<InDataSourceCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type EventDataSourcesConnectionSort = {
  edge?: InputMaybe<InDataSourceSort>;
  node?: InputMaybe<DataSourceSort>;
};

export type EventDataSourcesConnectionWhere = {
  AND?: InputMaybe<Array<EventDataSourcesConnectionWhere>>;
  OR?: InputMaybe<Array<EventDataSourcesConnectionWhere>>;
  NOT?: InputMaybe<EventDataSourcesConnectionWhere>;
  edge?: InputMaybe<InDataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InDataSourceWhere>;
  node?: InputMaybe<DataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<DataSourceWhere>;
};

export type EventDataSourcesConnectOrCreateFieldInput = {
  where: DataSourceConnectOrCreateWhere;
  onCreate: EventDataSourcesConnectOrCreateFieldInputOnCreate;
};

export type EventDataSourcesConnectOrCreateFieldInputOnCreate = {
  node: DataSourceOnCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type EventDataSourcesCreateFieldInput = {
  node: DataSourceCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type EventDataSourcesDeleteFieldInput = {
  where?: InputMaybe<EventDataSourcesConnectionWhere>;
  delete?: InputMaybe<DataSourceDeleteInput>;
};

export type EventDataSourcesDisconnectFieldInput = {
  where?: InputMaybe<EventDataSourcesConnectionWhere>;
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
};

export type EventDataSourcesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventDataSourcesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<EventDataSourcesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<EventDataSourcesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type EventDataSourcesFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<EventDataSourcesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<EventDataSourcesCreateFieldInput>>;
  connect?: InputMaybe<Array<EventDataSourcesConnectFieldInput>>;
};

export type EventDataSourcesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventDataSourcesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<EventDataSourcesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EventDataSourcesNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type EventDataSourcesUpdateConnectionInput = {
  node?: InputMaybe<DataSourceUpdateInput>;
  edge?: InputMaybe<InDataSourceUpdateInput>;
};

export type EventDataSourcesUpdateFieldInput = {
  where?: InputMaybe<EventDataSourcesConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<EventDataSourcesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<EventDataSourcesCreateFieldInput>>;
  connect?: InputMaybe<Array<EventDataSourcesConnectFieldInput>>;
  update?: InputMaybe<EventDataSourcesUpdateConnectionInput>;
  delete?: InputMaybe<Array<EventDataSourcesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EventDataSourcesDisconnectFieldInput>>;
};

export type EventDeleteInput = {
  matches?: InputMaybe<Array<EventMatchesDeleteFieldInput>>;
  competition?: InputMaybe<EventCompetitionDeleteFieldInput>;
  dataSources?: InputMaybe<Array<EventDataSourcesDeleteFieldInput>>;
};

export type EventDisconnectInput = {
  matches?: InputMaybe<Array<EventMatchesDisconnectFieldInput>>;
  competition?: InputMaybe<EventCompetitionDisconnectFieldInput>;
  dataSources?: InputMaybe<Array<EventDataSourcesDisconnectFieldInput>>;
};

export type EventMatchesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<EventMatchesAggregateInput>>;
  OR?: InputMaybe<Array<EventMatchesAggregateInput>>;
  NOT?: InputMaybe<EventMatchesAggregateInput>;
  node?: InputMaybe<EventMatchesNodeAggregationWhereInput>;
  edge?: InputMaybe<EventMatchesEdgeAggregationWhereInput>;
};

export type EventMatchesConnectFieldInput = {
  where?: InputMaybe<MatchConnectWhere>;
  connect?: InputMaybe<Array<MatchConnectInput>>;
  edge?: InputMaybe<MatchOfCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type EventMatchesConnectionSort = {
  edge?: InputMaybe<MatchOfSort>;
  node?: InputMaybe<MatchSort>;
};

export type EventMatchesConnectionWhere = {
  AND?: InputMaybe<Array<EventMatchesConnectionWhere>>;
  OR?: InputMaybe<Array<EventMatchesConnectionWhere>>;
  NOT?: InputMaybe<EventMatchesConnectionWhere>;
  edge?: InputMaybe<MatchOfWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<MatchOfWhere>;
  node?: InputMaybe<MatchWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MatchWhere>;
};

export type EventMatchesCreateFieldInput = {
  node: MatchCreateInput;
  edge?: InputMaybe<MatchOfCreateInput>;
};

export type EventMatchesDeleteFieldInput = {
  where?: InputMaybe<EventMatchesConnectionWhere>;
  delete?: InputMaybe<MatchDeleteInput>;
};

export type EventMatchesDisconnectFieldInput = {
  where?: InputMaybe<EventMatchesConnectionWhere>;
  disconnect?: InputMaybe<MatchDisconnectInput>;
};

export type EventMatchesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventMatchesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<EventMatchesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<EventMatchesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EventMatchesFieldInput = {
  create?: InputMaybe<Array<EventMatchesCreateFieldInput>>;
  connect?: InputMaybe<Array<EventMatchesConnectFieldInput>>;
};

export type EventMatchesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<EventMatchesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<EventMatchesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<EventMatchesNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type EventMatchesUpdateConnectionInput = {
  node?: InputMaybe<MatchUpdateInput>;
  edge?: InputMaybe<MatchOfUpdateInput>;
};

export type EventMatchesUpdateFieldInput = {
  where?: InputMaybe<EventMatchesConnectionWhere>;
  create?: InputMaybe<Array<EventMatchesCreateFieldInput>>;
  connect?: InputMaybe<Array<EventMatchesConnectFieldInput>>;
  update?: InputMaybe<EventMatchesUpdateConnectionInput>;
  delete?: InputMaybe<Array<EventMatchesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<EventMatchesDisconnectFieldInput>>;
};

export type EventOfCreateInput = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EventOfSort = {
  number?: InputMaybe<SortDirection>;
};

export type EventOfUpdateInput = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  number_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EventOfWhere = {
  OR?: InputMaybe<Array<EventOfWhere>>;
  AND?: InputMaybe<Array<EventOfWhere>>;
  NOT?: InputMaybe<EventOfWhere>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  number_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  number_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  number_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EventOptions = {
  /** Specify one or more EventSort objects to sort Events by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<EventSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type EventRelationInput = {
  matches?: InputMaybe<Array<EventMatchesCreateFieldInput>>;
  competition?: InputMaybe<EventCompetitionCreateFieldInput>;
  dataSources?: InputMaybe<Array<EventDataSourcesCreateFieldInput>>;
};

/** Fields to sort Events by. The order in which sorts are applied is not guaranteed when specifying many fields in one EventSort object. */
export type EventSort = {
  name?: InputMaybe<SortDirection>;
  complete?: InputMaybe<SortDirection>;
  processed?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  start?: InputMaybe<SortDirection>;
  end?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type EventUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  processed?: InputMaybe<Scalars["Boolean"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  start?: InputMaybe<Scalars["Date"]["input"]>;
  end?: InputMaybe<Scalars["Date"]["input"]>;
  matches?: InputMaybe<Array<EventMatchesUpdateFieldInput>>;
  competition?: InputMaybe<EventCompetitionUpdateFieldInput>;
  dataSources?: InputMaybe<Array<EventDataSourcesUpdateFieldInput>>;
};

export type EventWhere = {
  OR?: InputMaybe<Array<EventWhere>>;
  AND?: InputMaybe<Array<EventWhere>>;
  NOT?: InputMaybe<EventWhere>;
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
  complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  complete_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  processed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  processed_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  start?: InputMaybe<Scalars["Date"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_NOT?: InputMaybe<Scalars["Date"]["input"]>;
  start_IN?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  start_NOT_IN?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  start_LT?: InputMaybe<Scalars["Date"]["input"]>;
  start_LTE?: InputMaybe<Scalars["Date"]["input"]>;
  start_GT?: InputMaybe<Scalars["Date"]["input"]>;
  start_GTE?: InputMaybe<Scalars["Date"]["input"]>;
  end?: InputMaybe<Scalars["Date"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_NOT?: InputMaybe<Scalars["Date"]["input"]>;
  end_IN?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  end_NOT_IN?: InputMaybe<Array<Scalars["Date"]["input"]>>;
  end_LT?: InputMaybe<Scalars["Date"]["input"]>;
  end_LTE?: InputMaybe<Scalars["Date"]["input"]>;
  end_GT?: InputMaybe<Scalars["Date"]["input"]>;
  end_GTE?: InputMaybe<Scalars["Date"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Use `matches_SOME` instead. */
  matches?: InputMaybe<MatchWhere>;
  /** @deprecated Use `matches_NONE` instead. */
  matches_NOT?: InputMaybe<MatchWhere>;
  matchesAggregate?: InputMaybe<EventMatchesAggregateInput>;
  /** Return Events where all of the related Matches match this filter */
  matches_ALL?: InputMaybe<MatchWhere>;
  /** Return Events where none of the related Matches match this filter */
  matches_NONE?: InputMaybe<MatchWhere>;
  /** Return Events where one of the related Matches match this filter */
  matches_SINGLE?: InputMaybe<MatchWhere>;
  /** Return Events where some of the related Matches match this filter */
  matches_SOME?: InputMaybe<MatchWhere>;
  competition?: InputMaybe<CompetitionWhere>;
  competition_NOT?: InputMaybe<CompetitionWhere>;
  competitionAggregate?: InputMaybe<EventCompetitionAggregateInput>;
  /** @deprecated Use `dataSources_SOME` instead. */
  dataSources?: InputMaybe<DataSourceWhere>;
  /** @deprecated Use `dataSources_NONE` instead. */
  dataSources_NOT?: InputMaybe<DataSourceWhere>;
  dataSourcesAggregate?: InputMaybe<EventDataSourcesAggregateInput>;
  /** Return Events where all of the related DataSources match this filter */
  dataSources_ALL?: InputMaybe<DataSourceWhere>;
  /** Return Events where none of the related DataSources match this filter */
  dataSources_NONE?: InputMaybe<DataSourceWhere>;
  /** Return Events where one of the related DataSources match this filter */
  dataSources_SINGLE?: InputMaybe<DataSourceWhere>;
  /** Return Events where some of the related DataSources match this filter */
  dataSources_SOME?: InputMaybe<DataSourceWhere>;
  /** @deprecated Use `matchesConnection_SOME` instead. */
  matchesConnection?: InputMaybe<EventMatchesConnectionWhere>;
  /** @deprecated Use `matchesConnection_NONE` instead. */
  matchesConnection_NOT?: InputMaybe<EventMatchesConnectionWhere>;
  /** Return Events where all of the related EventMatchesConnections match this filter */
  matchesConnection_ALL?: InputMaybe<EventMatchesConnectionWhere>;
  /** Return Events where none of the related EventMatchesConnections match this filter */
  matchesConnection_NONE?: InputMaybe<EventMatchesConnectionWhere>;
  /** Return Events where one of the related EventMatchesConnections match this filter */
  matchesConnection_SINGLE?: InputMaybe<EventMatchesConnectionWhere>;
  /** Return Events where some of the related EventMatchesConnections match this filter */
  matchesConnection_SOME?: InputMaybe<EventMatchesConnectionWhere>;
  competitionConnection?: InputMaybe<EventCompetitionConnectionWhere>;
  competitionConnection_NOT?: InputMaybe<EventCompetitionConnectionWhere>;
  /** @deprecated Use `dataSourcesConnection_SOME` instead. */
  dataSourcesConnection?: InputMaybe<EventDataSourcesConnectionWhere>;
  /** @deprecated Use `dataSourcesConnection_NONE` instead. */
  dataSourcesConnection_NOT?: InputMaybe<EventDataSourcesConnectionWhere>;
  /** Return Events where all of the related EventDataSourcesConnections match this filter */
  dataSourcesConnection_ALL?: InputMaybe<EventDataSourcesConnectionWhere>;
  /** Return Events where none of the related EventDataSourcesConnections match this filter */
  dataSourcesConnection_NONE?: InputMaybe<EventDataSourcesConnectionWhere>;
  /** Return Events where one of the related EventDataSourcesConnections match this filter */
  dataSourcesConnection_SINGLE?: InputMaybe<EventDataSourcesConnectionWhere>;
  /** Return Events where some of the related EventDataSourcesConnections match this filter */
  dataSourcesConnection_SOME?: InputMaybe<EventDataSourcesConnectionWhere>;
};

export type InDataSourceCreateInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type InDataSourceSort = {
  id?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type InDataSourceUpdateInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type InDataSourceWhere = {
  OR?: InputMaybe<Array<InDataSourceWhere>>;
  AND?: InputMaybe<Array<InDataSourceWhere>>;
  NOT?: InputMaybe<InDataSourceWhere>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["String"]["input"]>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  id_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MatchAthletesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MatchAthletesAggregateInput>>;
  OR?: InputMaybe<Array<MatchAthletesAggregateInput>>;
  NOT?: InputMaybe<MatchAthletesAggregateInput>;
  node?: InputMaybe<MatchAthletesNodeAggregationWhereInput>;
  edge?: InputMaybe<MatchAthletesEdgeAggregationWhereInput>;
};

export type MatchAthletesConnectFieldInput = {
  where?: InputMaybe<AthleteConnectWhere>;
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  edge?: InputMaybe<AthleteCompetesCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type MatchAthletesConnectionSort = {
  edge?: InputMaybe<AthleteCompetesSort>;
  node?: InputMaybe<AthleteSort>;
};

export type MatchAthletesConnectionWhere = {
  AND?: InputMaybe<Array<MatchAthletesConnectionWhere>>;
  OR?: InputMaybe<Array<MatchAthletesConnectionWhere>>;
  NOT?: InputMaybe<MatchAthletesConnectionWhere>;
  edge?: InputMaybe<AthleteCompetesWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<AthleteCompetesWhere>;
  node?: InputMaybe<AthleteWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<AthleteWhere>;
};

export type MatchAthletesCreateFieldInput = {
  node: AthleteCreateInput;
  edge?: InputMaybe<AthleteCompetesCreateInput>;
};

export type MatchAthletesDeleteFieldInput = {
  where?: InputMaybe<MatchAthletesConnectionWhere>;
  delete?: InputMaybe<AthleteDeleteInput>;
};

export type MatchAthletesDisconnectFieldInput = {
  where?: InputMaybe<MatchAthletesConnectionWhere>;
  disconnect?: InputMaybe<AthleteDisconnectInput>;
};

export type MatchAthletesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchAthletesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MatchAthletesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchAthletesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MatchAthletesFieldInput = {
  create?: InputMaybe<Array<MatchAthletesCreateFieldInput>>;
  connect?: InputMaybe<Array<MatchAthletesConnectFieldInput>>;
};

export type MatchAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchAthletesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MatchAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchAthletesNodeAggregationWhereInput>;
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
  givenName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MatchAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
  edge?: InputMaybe<AthleteCompetesUpdateInput>;
};

export type MatchAthletesUpdateFieldInput = {
  where?: InputMaybe<MatchAthletesConnectionWhere>;
  create?: InputMaybe<Array<MatchAthletesCreateFieldInput>>;
  connect?: InputMaybe<Array<MatchAthletesConnectFieldInput>>;
  update?: InputMaybe<MatchAthletesUpdateConnectionInput>;
  delete?: InputMaybe<Array<MatchAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MatchAthletesDisconnectFieldInput>>;
};

export type MatchConnectInput = {
  sets?: InputMaybe<Array<MatchSetsConnectFieldInput>>;
  event?: InputMaybe<MatchEventConnectFieldInput>;
  athletes?: InputMaybe<Array<MatchAthletesConnectFieldInput>>;
  division?: InputMaybe<MatchDivisionConnectFieldInput>;
  dataSources?: InputMaybe<Array<MatchDataSourcesConnectFieldInput>>;
};

export type MatchConnectOrCreateInput = {
  division?: InputMaybe<MatchDivisionConnectOrCreateFieldInput>;
  dataSources?: InputMaybe<Array<MatchDataSourcesConnectOrCreateFieldInput>>;
};

export type MatchConnectWhere = {
  node: MatchWhere;
};

export type MatchCreateInput = {
  complete?: Scalars["Boolean"]["input"];
  processed?: Scalars["Boolean"]["input"];
  verified?: Scalars["Boolean"]["input"];
  style: MatchStyle;
  gender: MatchGender;
  sets?: InputMaybe<MatchSetsFieldInput>;
  event?: InputMaybe<MatchEventFieldInput>;
  athletes?: InputMaybe<MatchAthletesFieldInput>;
  division?: InputMaybe<MatchDivisionFieldInput>;
  dataSources?: InputMaybe<MatchDataSourcesFieldInput>;
};

export type MatchDataSourcesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MatchDataSourcesAggregateInput>>;
  OR?: InputMaybe<Array<MatchDataSourcesAggregateInput>>;
  NOT?: InputMaybe<MatchDataSourcesAggregateInput>;
  node?: InputMaybe<MatchDataSourcesNodeAggregationWhereInput>;
  edge?: InputMaybe<MatchDataSourcesEdgeAggregationWhereInput>;
};

export type MatchDataSourcesConnectFieldInput = {
  where?: InputMaybe<DataSourceConnectWhere>;
  connect?: InputMaybe<Array<DataSourceConnectInput>>;
  edge?: InputMaybe<InDataSourceCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type MatchDataSourcesConnectionSort = {
  edge?: InputMaybe<InDataSourceSort>;
  node?: InputMaybe<DataSourceSort>;
};

export type MatchDataSourcesConnectionWhere = {
  AND?: InputMaybe<Array<MatchDataSourcesConnectionWhere>>;
  OR?: InputMaybe<Array<MatchDataSourcesConnectionWhere>>;
  NOT?: InputMaybe<MatchDataSourcesConnectionWhere>;
  edge?: InputMaybe<InDataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<InDataSourceWhere>;
  node?: InputMaybe<DataSourceWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<DataSourceWhere>;
};

export type MatchDataSourcesConnectOrCreateFieldInput = {
  where: DataSourceConnectOrCreateWhere;
  onCreate: MatchDataSourcesConnectOrCreateFieldInputOnCreate;
};

export type MatchDataSourcesConnectOrCreateFieldInputOnCreate = {
  node: DataSourceOnCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type MatchDataSourcesCreateFieldInput = {
  node: DataSourceCreateInput;
  edge?: InputMaybe<InDataSourceCreateInput>;
};

export type MatchDataSourcesDeleteFieldInput = {
  where?: InputMaybe<MatchDataSourcesConnectionWhere>;
  delete?: InputMaybe<DataSourceDeleteInput>;
};

export type MatchDataSourcesDisconnectFieldInput = {
  where?: InputMaybe<MatchDataSourcesConnectionWhere>;
  disconnect?: InputMaybe<DataSourceDisconnectInput>;
};

export type MatchDataSourcesEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchDataSourcesEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MatchDataSourcesEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchDataSourcesEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  id_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  id_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  id_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MatchDataSourcesFieldInput = {
  connectOrCreate?: InputMaybe<
    Array<MatchDataSourcesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<MatchDataSourcesCreateFieldInput>>;
  connect?: InputMaybe<Array<MatchDataSourcesConnectFieldInput>>;
};

export type MatchDataSourcesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchDataSourcesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MatchDataSourcesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchDataSourcesNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MatchDataSourcesUpdateConnectionInput = {
  node?: InputMaybe<DataSourceUpdateInput>;
  edge?: InputMaybe<InDataSourceUpdateInput>;
};

export type MatchDataSourcesUpdateFieldInput = {
  where?: InputMaybe<MatchDataSourcesConnectionWhere>;
  connectOrCreate?: InputMaybe<
    Array<MatchDataSourcesConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<MatchDataSourcesCreateFieldInput>>;
  connect?: InputMaybe<Array<MatchDataSourcesConnectFieldInput>>;
  update?: InputMaybe<MatchDataSourcesUpdateConnectionInput>;
  delete?: InputMaybe<Array<MatchDataSourcesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MatchDataSourcesDisconnectFieldInput>>;
};

export type MatchDeleteInput = {
  sets?: InputMaybe<Array<MatchSetsDeleteFieldInput>>;
  event?: InputMaybe<MatchEventDeleteFieldInput>;
  athletes?: InputMaybe<Array<MatchAthletesDeleteFieldInput>>;
  division?: InputMaybe<MatchDivisionDeleteFieldInput>;
  dataSources?: InputMaybe<Array<MatchDataSourcesDeleteFieldInput>>;
};

export type MatchDisconnectInput = {
  sets?: InputMaybe<Array<MatchSetsDisconnectFieldInput>>;
  event?: InputMaybe<MatchEventDisconnectFieldInput>;
  athletes?: InputMaybe<Array<MatchAthletesDisconnectFieldInput>>;
  division?: InputMaybe<MatchDivisionDisconnectFieldInput>;
  dataSources?: InputMaybe<Array<MatchDataSourcesDisconnectFieldInput>>;
};

export type MatchDivisionAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MatchDivisionAggregateInput>>;
  OR?: InputMaybe<Array<MatchDivisionAggregateInput>>;
  NOT?: InputMaybe<MatchDivisionAggregateInput>;
  node?: InputMaybe<MatchDivisionNodeAggregationWhereInput>;
};

export type MatchDivisionConnectFieldInput = {
  where?: InputMaybe<DivisionConnectWhere>;
  connect?: InputMaybe<DivisionConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type MatchDivisionConnectionSort = {
  node?: InputMaybe<DivisionSort>;
};

export type MatchDivisionConnectionWhere = {
  AND?: InputMaybe<Array<MatchDivisionConnectionWhere>>;
  OR?: InputMaybe<Array<MatchDivisionConnectionWhere>>;
  NOT?: InputMaybe<MatchDivisionConnectionWhere>;
  node?: InputMaybe<DivisionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<DivisionWhere>;
};

export type MatchDivisionConnectOrCreateFieldInput = {
  where: DivisionConnectOrCreateWhere;
  onCreate: MatchDivisionConnectOrCreateFieldInputOnCreate;
};

export type MatchDivisionConnectOrCreateFieldInputOnCreate = {
  node: DivisionOnCreateInput;
};

export type MatchDivisionCreateFieldInput = {
  node: DivisionCreateInput;
};

export type MatchDivisionDeleteFieldInput = {
  where?: InputMaybe<MatchDivisionConnectionWhere>;
  delete?: InputMaybe<DivisionDeleteInput>;
};

export type MatchDivisionDisconnectFieldInput = {
  where?: InputMaybe<MatchDivisionConnectionWhere>;
  disconnect?: InputMaybe<DivisionDisconnectInput>;
};

export type MatchDivisionFieldInput = {
  connectOrCreate?: InputMaybe<MatchDivisionConnectOrCreateFieldInput>;
  create?: InputMaybe<MatchDivisionCreateFieldInput>;
  connect?: InputMaybe<MatchDivisionConnectFieldInput>;
};

export type MatchDivisionNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchDivisionNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MatchDivisionNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchDivisionNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MatchDivisionUpdateConnectionInput = {
  node?: InputMaybe<DivisionUpdateInput>;
};

export type MatchDivisionUpdateFieldInput = {
  where?: InputMaybe<MatchDivisionConnectionWhere>;
  connectOrCreate?: InputMaybe<MatchDivisionConnectOrCreateFieldInput>;
  create?: InputMaybe<MatchDivisionCreateFieldInput>;
  connect?: InputMaybe<MatchDivisionConnectFieldInput>;
  update?: InputMaybe<MatchDivisionUpdateConnectionInput>;
  delete?: InputMaybe<MatchDivisionDeleteFieldInput>;
  disconnect?: InputMaybe<MatchDivisionDisconnectFieldInput>;
};

export type MatchEventAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MatchEventAggregateInput>>;
  OR?: InputMaybe<Array<MatchEventAggregateInput>>;
  NOT?: InputMaybe<MatchEventAggregateInput>;
  node?: InputMaybe<MatchEventNodeAggregationWhereInput>;
  edge?: InputMaybe<MatchEventEdgeAggregationWhereInput>;
};

export type MatchEventConnectFieldInput = {
  where?: InputMaybe<EventConnectWhere>;
  connect?: InputMaybe<EventConnectInput>;
  edge?: InputMaybe<MatchOfCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type MatchEventConnectionSort = {
  edge?: InputMaybe<MatchOfSort>;
  node?: InputMaybe<EventSort>;
};

export type MatchEventConnectionWhere = {
  AND?: InputMaybe<Array<MatchEventConnectionWhere>>;
  OR?: InputMaybe<Array<MatchEventConnectionWhere>>;
  NOT?: InputMaybe<MatchEventConnectionWhere>;
  edge?: InputMaybe<MatchOfWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<MatchOfWhere>;
  node?: InputMaybe<EventWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<EventWhere>;
};

export type MatchEventCreateFieldInput = {
  node: EventCreateInput;
  edge?: InputMaybe<MatchOfCreateInput>;
};

export type MatchEventDeleteFieldInput = {
  where?: InputMaybe<MatchEventConnectionWhere>;
  delete?: InputMaybe<EventDeleteInput>;
};

export type MatchEventDisconnectFieldInput = {
  where?: InputMaybe<MatchEventConnectionWhere>;
  disconnect?: InputMaybe<EventDisconnectInput>;
};

export type MatchEventEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchEventEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MatchEventEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchEventEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MatchEventFieldInput = {
  create?: InputMaybe<MatchEventCreateFieldInput>;
  connect?: InputMaybe<MatchEventConnectFieldInput>;
};

export type MatchEventNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchEventNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MatchEventNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchEventNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MatchEventUpdateConnectionInput = {
  node?: InputMaybe<EventUpdateInput>;
  edge?: InputMaybe<MatchOfUpdateInput>;
};

export type MatchEventUpdateFieldInput = {
  where?: InputMaybe<MatchEventConnectionWhere>;
  create?: InputMaybe<MatchEventCreateFieldInput>;
  connect?: InputMaybe<MatchEventConnectFieldInput>;
  update?: InputMaybe<MatchEventUpdateConnectionInput>;
  delete?: InputMaybe<MatchEventDeleteFieldInput>;
  disconnect?: InputMaybe<MatchEventDisconnectFieldInput>;
};

export type MatchOfCreateInput = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MatchOfSort = {
  number?: InputMaybe<SortDirection>;
};

export type MatchOfUpdateInput = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  number_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MatchOfWhere = {
  OR?: InputMaybe<Array<MatchOfWhere>>;
  AND?: InputMaybe<Array<MatchOfWhere>>;
  NOT?: InputMaybe<MatchOfWhere>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  number_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  number_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  number_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MatchOptions = {
  /** Specify one or more MatchSort objects to sort Matches by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MatchSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MatchRelationInput = {
  sets?: InputMaybe<Array<MatchSetsCreateFieldInput>>;
  event?: InputMaybe<MatchEventCreateFieldInput>;
  athletes?: InputMaybe<Array<MatchAthletesCreateFieldInput>>;
  division?: InputMaybe<MatchDivisionCreateFieldInput>;
  dataSources?: InputMaybe<Array<MatchDataSourcesCreateFieldInput>>;
};

export type MatchSetsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<MatchSetsAggregateInput>>;
  OR?: InputMaybe<Array<MatchSetsAggregateInput>>;
  NOT?: InputMaybe<MatchSetsAggregateInput>;
  node?: InputMaybe<MatchSetsNodeAggregationWhereInput>;
  edge?: InputMaybe<MatchSetsEdgeAggregationWhereInput>;
};

export type MatchSetsConnectFieldInput = {
  where?: InputMaybe<SetConnectWhere>;
  connect?: InputMaybe<Array<SetConnectInput>>;
  edge: SetOfCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type MatchSetsConnectionSort = {
  edge?: InputMaybe<SetOfSort>;
  node?: InputMaybe<SetSort>;
};

export type MatchSetsConnectionWhere = {
  AND?: InputMaybe<Array<MatchSetsConnectionWhere>>;
  OR?: InputMaybe<Array<MatchSetsConnectionWhere>>;
  NOT?: InputMaybe<MatchSetsConnectionWhere>;
  edge?: InputMaybe<SetOfWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<SetOfWhere>;
  node?: InputMaybe<SetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SetWhere>;
};

export type MatchSetsCreateFieldInput = {
  node: SetCreateInput;
  edge: SetOfCreateInput;
};

export type MatchSetsDeleteFieldInput = {
  where?: InputMaybe<MatchSetsConnectionWhere>;
  delete?: InputMaybe<SetDeleteInput>;
};

export type MatchSetsDisconnectFieldInput = {
  where?: InputMaybe<MatchSetsConnectionWhere>;
  disconnect?: InputMaybe<SetDisconnectInput>;
};

export type MatchSetsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchSetsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MatchSetsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchSetsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MatchSetsFieldInput = {
  create?: InputMaybe<Array<MatchSetsCreateFieldInput>>;
  connect?: InputMaybe<Array<MatchSetsConnectFieldInput>>;
};

export type MatchSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MatchSetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<MatchSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MatchSetsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type MatchSetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
  edge?: InputMaybe<SetOfUpdateInput>;
};

export type MatchSetsUpdateFieldInput = {
  where?: InputMaybe<MatchSetsConnectionWhere>;
  create?: InputMaybe<Array<MatchSetsCreateFieldInput>>;
  connect?: InputMaybe<Array<MatchSetsConnectFieldInput>>;
  update?: InputMaybe<MatchSetsUpdateConnectionInput>;
  delete?: InputMaybe<Array<MatchSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<MatchSetsDisconnectFieldInput>>;
};

/** Fields to sort Matches by. The order in which sorts are applied is not guaranteed when specifying many fields in one MatchSort object. */
export type MatchSort = {
  complete?: InputMaybe<SortDirection>;
  processed?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  style?: InputMaybe<SortDirection>;
  gender?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type MatchUpdateInput = {
  complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  processed?: InputMaybe<Scalars["Boolean"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  style?: InputMaybe<MatchStyle>;
  gender?: InputMaybe<MatchGender>;
  sets?: InputMaybe<Array<MatchSetsUpdateFieldInput>>;
  event?: InputMaybe<MatchEventUpdateFieldInput>;
  athletes?: InputMaybe<Array<MatchAthletesUpdateFieldInput>>;
  division?: InputMaybe<MatchDivisionUpdateFieldInput>;
  dataSources?: InputMaybe<Array<MatchDataSourcesUpdateFieldInput>>;
};

export type MatchWhere = {
  OR?: InputMaybe<Array<MatchWhere>>;
  AND?: InputMaybe<Array<MatchWhere>>;
  NOT?: InputMaybe<MatchWhere>;
  complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  complete_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  processed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  processed_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  style?: InputMaybe<MatchStyle>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  style_NOT?: InputMaybe<MatchStyle>;
  style_IN?: InputMaybe<Array<MatchStyle>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  style_NOT_IN?: InputMaybe<Array<MatchStyle>>;
  gender?: InputMaybe<MatchGender>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  gender_NOT?: InputMaybe<MatchGender>;
  gender_IN?: InputMaybe<Array<MatchGender>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  gender_NOT_IN?: InputMaybe<Array<MatchGender>>;
  /** @deprecated Use `sets_SOME` instead. */
  sets?: InputMaybe<SetWhere>;
  /** @deprecated Use `sets_NONE` instead. */
  sets_NOT?: InputMaybe<SetWhere>;
  setsAggregate?: InputMaybe<MatchSetsAggregateInput>;
  /** Return Matches where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Matches where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Matches where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Matches where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
  event?: InputMaybe<EventWhere>;
  event_NOT?: InputMaybe<EventWhere>;
  eventAggregate?: InputMaybe<MatchEventAggregateInput>;
  /** @deprecated Use `athletes_SOME` instead. */
  athletes?: InputMaybe<AthleteWhere>;
  /** @deprecated Use `athletes_NONE` instead. */
  athletes_NOT?: InputMaybe<AthleteWhere>;
  athletesAggregate?: InputMaybe<MatchAthletesAggregateInput>;
  /** Return Matches where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Matches where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Matches where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Matches where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  division?: InputMaybe<DivisionWhere>;
  division_NOT?: InputMaybe<DivisionWhere>;
  divisionAggregate?: InputMaybe<MatchDivisionAggregateInput>;
  /** @deprecated Use `dataSources_SOME` instead. */
  dataSources?: InputMaybe<DataSourceWhere>;
  /** @deprecated Use `dataSources_NONE` instead. */
  dataSources_NOT?: InputMaybe<DataSourceWhere>;
  dataSourcesAggregate?: InputMaybe<MatchDataSourcesAggregateInput>;
  /** Return Matches where all of the related DataSources match this filter */
  dataSources_ALL?: InputMaybe<DataSourceWhere>;
  /** Return Matches where none of the related DataSources match this filter */
  dataSources_NONE?: InputMaybe<DataSourceWhere>;
  /** Return Matches where one of the related DataSources match this filter */
  dataSources_SINGLE?: InputMaybe<DataSourceWhere>;
  /** Return Matches where some of the related DataSources match this filter */
  dataSources_SOME?: InputMaybe<DataSourceWhere>;
  /** @deprecated Use `setsConnection_SOME` instead. */
  setsConnection?: InputMaybe<MatchSetsConnectionWhere>;
  /** @deprecated Use `setsConnection_NONE` instead. */
  setsConnection_NOT?: InputMaybe<MatchSetsConnectionWhere>;
  /** Return Matches where all of the related MatchSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<MatchSetsConnectionWhere>;
  /** Return Matches where none of the related MatchSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<MatchSetsConnectionWhere>;
  /** Return Matches where one of the related MatchSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<MatchSetsConnectionWhere>;
  /** Return Matches where some of the related MatchSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<MatchSetsConnectionWhere>;
  eventConnection?: InputMaybe<MatchEventConnectionWhere>;
  eventConnection_NOT?: InputMaybe<MatchEventConnectionWhere>;
  /** @deprecated Use `athletesConnection_SOME` instead. */
  athletesConnection?: InputMaybe<MatchAthletesConnectionWhere>;
  /** @deprecated Use `athletesConnection_NONE` instead. */
  athletesConnection_NOT?: InputMaybe<MatchAthletesConnectionWhere>;
  /** Return Matches where all of the related MatchAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<MatchAthletesConnectionWhere>;
  /** Return Matches where none of the related MatchAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<MatchAthletesConnectionWhere>;
  /** Return Matches where one of the related MatchAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<MatchAthletesConnectionWhere>;
  /** Return Matches where some of the related MatchAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<MatchAthletesConnectionWhere>;
  divisionConnection?: InputMaybe<MatchDivisionConnectionWhere>;
  divisionConnection_NOT?: InputMaybe<MatchDivisionConnectionWhere>;
  /** @deprecated Use `dataSourcesConnection_SOME` instead. */
  dataSourcesConnection?: InputMaybe<MatchDataSourcesConnectionWhere>;
  /** @deprecated Use `dataSourcesConnection_NONE` instead. */
  dataSourcesConnection_NOT?: InputMaybe<MatchDataSourcesConnectionWhere>;
  /** Return Matches where all of the related MatchDataSourcesConnections match this filter */
  dataSourcesConnection_ALL?: InputMaybe<MatchDataSourcesConnectionWhere>;
  /** Return Matches where none of the related MatchDataSourcesConnections match this filter */
  dataSourcesConnection_NONE?: InputMaybe<MatchDataSourcesConnectionWhere>;
  /** Return Matches where one of the related MatchDataSourcesConnections match this filter */
  dataSourcesConnection_SINGLE?: InputMaybe<MatchDataSourcesConnectionWhere>;
  /** Return Matches where some of the related MatchDataSourcesConnections match this filter */
  dataSourcesConnection_SOME?: InputMaybe<MatchDataSourcesConnectionWhere>;
};

export type NationAthletesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<NationAthletesAggregateInput>>;
  OR?: InputMaybe<Array<NationAthletesAggregateInput>>;
  NOT?: InputMaybe<NationAthletesAggregateInput>;
  node?: InputMaybe<NationAthletesNodeAggregationWhereInput>;
};

export type NationAthletesConnectFieldInput = {
  where?: InputMaybe<AthleteConnectWhere>;
  connect?: InputMaybe<Array<AthleteConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type NationAthletesConnectionSort = {
  node?: InputMaybe<AthleteSort>;
};

export type NationAthletesConnectionWhere = {
  AND?: InputMaybe<Array<NationAthletesConnectionWhere>>;
  OR?: InputMaybe<Array<NationAthletesConnectionWhere>>;
  NOT?: InputMaybe<NationAthletesConnectionWhere>;
  node?: InputMaybe<AthleteWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<AthleteWhere>;
};

export type NationAthletesCreateFieldInput = {
  node: AthleteCreateInput;
};

export type NationAthletesDeleteFieldInput = {
  where?: InputMaybe<NationAthletesConnectionWhere>;
  delete?: InputMaybe<AthleteDeleteInput>;
};

export type NationAthletesDisconnectFieldInput = {
  where?: InputMaybe<NationAthletesConnectionWhere>;
  disconnect?: InputMaybe<AthleteDisconnectInput>;
};

export type NationAthletesFieldInput = {
  create?: InputMaybe<Array<NationAthletesCreateFieldInput>>;
  connect?: InputMaybe<Array<NationAthletesConnectFieldInput>>;
};

export type NationAthletesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NationAthletesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<NationAthletesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NationAthletesNodeAggregationWhereInput>;
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
  givenName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type NationAthletesUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
};

export type NationAthletesUpdateFieldInput = {
  where?: InputMaybe<NationAthletesConnectionWhere>;
  create?: InputMaybe<Array<NationAthletesCreateFieldInput>>;
  connect?: InputMaybe<Array<NationAthletesConnectFieldInput>>;
  update?: InputMaybe<NationAthletesUpdateConnectionInput>;
  delete?: InputMaybe<Array<NationAthletesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<NationAthletesDisconnectFieldInput>>;
};

export type NationCompetitionsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<NationCompetitionsAggregateInput>>;
  OR?: InputMaybe<Array<NationCompetitionsAggregateInput>>;
  NOT?: InputMaybe<NationCompetitionsAggregateInput>;
  node?: InputMaybe<NationCompetitionsNodeAggregationWhereInput>;
};

export type NationCompetitionsConnectFieldInput = {
  where?: InputMaybe<CompetitionConnectWhere>;
  connect?: InputMaybe<Array<CompetitionConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type NationCompetitionsConnectionSort = {
  node?: InputMaybe<CompetitionSort>;
};

export type NationCompetitionsConnectionWhere = {
  AND?: InputMaybe<Array<NationCompetitionsConnectionWhere>>;
  OR?: InputMaybe<Array<NationCompetitionsConnectionWhere>>;
  NOT?: InputMaybe<NationCompetitionsConnectionWhere>;
  node?: InputMaybe<CompetitionWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CompetitionWhere>;
};

export type NationCompetitionsCreateFieldInput = {
  node: CompetitionCreateInput;
};

export type NationCompetitionsDeleteFieldInput = {
  where?: InputMaybe<NationCompetitionsConnectionWhere>;
  delete?: InputMaybe<CompetitionDeleteInput>;
};

export type NationCompetitionsDisconnectFieldInput = {
  where?: InputMaybe<NationCompetitionsConnectionWhere>;
  disconnect?: InputMaybe<CompetitionDisconnectInput>;
};

export type NationCompetitionsFieldInput = {
  create?: InputMaybe<Array<NationCompetitionsCreateFieldInput>>;
  connect?: InputMaybe<Array<NationCompetitionsConnectFieldInput>>;
};

export type NationCompetitionsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<NationCompetitionsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<NationCompetitionsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<NationCompetitionsNodeAggregationWhereInput>;
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
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type NationCompetitionsUpdateConnectionInput = {
  node?: InputMaybe<CompetitionUpdateInput>;
};

export type NationCompetitionsUpdateFieldInput = {
  where?: InputMaybe<NationCompetitionsConnectionWhere>;
  create?: InputMaybe<Array<NationCompetitionsCreateFieldInput>>;
  connect?: InputMaybe<Array<NationCompetitionsConnectFieldInput>>;
  update?: InputMaybe<NationCompetitionsUpdateConnectionInput>;
  delete?: InputMaybe<Array<NationCompetitionsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<NationCompetitionsDisconnectFieldInput>>;
};

export type NationConnectInput = {
  competitions?: InputMaybe<Array<NationCompetitionsConnectFieldInput>>;
  athletes?: InputMaybe<Array<NationAthletesConnectFieldInput>>;
};

export type NationConnectOrCreateWhere = {
  node: NationUniqueWhere;
};

export type NationConnectWhere = {
  node: NationWhere;
};

export type NationCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  code: Scalars["String"]["input"];
  verified?: Scalars["Boolean"]["input"];
  competitions?: InputMaybe<NationCompetitionsFieldInput>;
  athletes?: InputMaybe<NationAthletesFieldInput>;
};

export type NationDeleteInput = {
  competitions?: InputMaybe<Array<NationCompetitionsDeleteFieldInput>>;
  athletes?: InputMaybe<Array<NationAthletesDeleteFieldInput>>;
};

export type NationDisconnectInput = {
  competitions?: InputMaybe<Array<NationCompetitionsDisconnectFieldInput>>;
  athletes?: InputMaybe<Array<NationAthletesDisconnectFieldInput>>;
};

export type NationOnCreateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  code: Scalars["String"]["input"];
  verified?: Scalars["Boolean"]["input"];
};

export type NationOptions = {
  /** Specify one or more NationSort objects to sort Nations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<NationSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type NationRelationInput = {
  competitions?: InputMaybe<Array<NationCompetitionsCreateFieldInput>>;
  athletes?: InputMaybe<Array<NationAthletesCreateFieldInput>>;
};

/** Fields to sort Nations by. The order in which sorts are applied is not guaranteed when specifying many fields in one NationSort object. */
export type NationSort = {
  name?: InputMaybe<SortDirection>;
  code?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type NationUniqueWhere = {
  code?: InputMaybe<Scalars["String"]["input"]>;
};

export type NationUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  competitions?: InputMaybe<Array<NationCompetitionsUpdateFieldInput>>;
  athletes?: InputMaybe<Array<NationAthletesUpdateFieldInput>>;
};

export type NationWhere = {
  OR?: InputMaybe<Array<NationWhere>>;
  AND?: InputMaybe<Array<NationWhere>>;
  NOT?: InputMaybe<NationWhere>;
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
  code?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  code_NOT?: InputMaybe<Scalars["String"]["input"]>;
  code_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  code_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>;
  code_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  code_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  code_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  code_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  code_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  code_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Use `competitions_SOME` instead. */
  competitions?: InputMaybe<CompetitionWhere>;
  /** @deprecated Use `competitions_NONE` instead. */
  competitions_NOT?: InputMaybe<CompetitionWhere>;
  competitionsAggregate?: InputMaybe<NationCompetitionsAggregateInput>;
  /** Return Nations where all of the related Competitions match this filter */
  competitions_ALL?: InputMaybe<CompetitionWhere>;
  /** Return Nations where none of the related Competitions match this filter */
  competitions_NONE?: InputMaybe<CompetitionWhere>;
  /** Return Nations where one of the related Competitions match this filter */
  competitions_SINGLE?: InputMaybe<CompetitionWhere>;
  /** Return Nations where some of the related Competitions match this filter */
  competitions_SOME?: InputMaybe<CompetitionWhere>;
  /** @deprecated Use `athletes_SOME` instead. */
  athletes?: InputMaybe<AthleteWhere>;
  /** @deprecated Use `athletes_NONE` instead. */
  athletes_NOT?: InputMaybe<AthleteWhere>;
  athletesAggregate?: InputMaybe<NationAthletesAggregateInput>;
  /** Return Nations where all of the related Athletes match this filter */
  athletes_ALL?: InputMaybe<AthleteWhere>;
  /** Return Nations where none of the related Athletes match this filter */
  athletes_NONE?: InputMaybe<AthleteWhere>;
  /** Return Nations where one of the related Athletes match this filter */
  athletes_SINGLE?: InputMaybe<AthleteWhere>;
  /** Return Nations where some of the related Athletes match this filter */
  athletes_SOME?: InputMaybe<AthleteWhere>;
  /** @deprecated Use `competitionsConnection_SOME` instead. */
  competitionsConnection?: InputMaybe<NationCompetitionsConnectionWhere>;
  /** @deprecated Use `competitionsConnection_NONE` instead. */
  competitionsConnection_NOT?: InputMaybe<NationCompetitionsConnectionWhere>;
  /** Return Nations where all of the related NationCompetitionsConnections match this filter */
  competitionsConnection_ALL?: InputMaybe<NationCompetitionsConnectionWhere>;
  /** Return Nations where none of the related NationCompetitionsConnections match this filter */
  competitionsConnection_NONE?: InputMaybe<NationCompetitionsConnectionWhere>;
  /** Return Nations where one of the related NationCompetitionsConnections match this filter */
  competitionsConnection_SINGLE?: InputMaybe<NationCompetitionsConnectionWhere>;
  /** Return Nations where some of the related NationCompetitionsConnections match this filter */
  competitionsConnection_SOME?: InputMaybe<NationCompetitionsConnectionWhere>;
  /** @deprecated Use `athletesConnection_SOME` instead. */
  athletesConnection?: InputMaybe<NationAthletesConnectionWhere>;
  /** @deprecated Use `athletesConnection_NONE` instead. */
  athletesConnection_NOT?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where all of the related NationAthletesConnections match this filter */
  athletesConnection_ALL?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where none of the related NationAthletesConnections match this filter */
  athletesConnection_NONE?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where one of the related NationAthletesConnections match this filter */
  athletesConnection_SINGLE?: InputMaybe<NationAthletesConnectionWhere>;
  /** Return Nations where some of the related NationAthletesConnections match this filter */
  athletesConnection_SOME?: InputMaybe<NationAthletesConnectionWhere>;
};

export type SetArrowsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SetArrowsAggregateInput>>;
  OR?: InputMaybe<Array<SetArrowsAggregateInput>>;
  NOT?: InputMaybe<SetArrowsAggregateInput>;
  node?: InputMaybe<SetArrowsNodeAggregationWhereInput>;
  edge?: InputMaybe<SetArrowsEdgeAggregationWhereInput>;
};

export type SetArrowsConnectFieldInput = {
  where?: InputMaybe<ArrowConnectWhere>;
  connect?: InputMaybe<Array<ArrowConnectInput>>;
  edge?: InputMaybe<ArrowOfCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type SetArrowsConnectionSort = {
  edge?: InputMaybe<ArrowOfSort>;
  node?: InputMaybe<ArrowSort>;
};

export type SetArrowsConnectionWhere = {
  AND?: InputMaybe<Array<SetArrowsConnectionWhere>>;
  OR?: InputMaybe<Array<SetArrowsConnectionWhere>>;
  NOT?: InputMaybe<SetArrowsConnectionWhere>;
  edge?: InputMaybe<ArrowOfWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<ArrowOfWhere>;
  node?: InputMaybe<ArrowWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ArrowWhere>;
};

export type SetArrowsCreateFieldInput = {
  node: ArrowCreateInput;
  edge?: InputMaybe<ArrowOfCreateInput>;
};

export type SetArrowsDeleteFieldInput = {
  where?: InputMaybe<SetArrowsConnectionWhere>;
  delete?: InputMaybe<ArrowDeleteInput>;
};

export type SetArrowsDisconnectFieldInput = {
  where?: InputMaybe<SetArrowsConnectionWhere>;
  disconnect?: InputMaybe<ArrowDisconnectInput>;
};

export type SetArrowsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetArrowsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SetArrowsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<SetArrowsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetArrowsFieldInput = {
  create?: InputMaybe<Array<SetArrowsCreateFieldInput>>;
  connect?: InputMaybe<Array<SetArrowsConnectFieldInput>>;
};

export type SetArrowsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetArrowsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SetArrowsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetArrowsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  value_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  value_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  value_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  value_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  value_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  value_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  value_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  value_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  value_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  value_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  offset_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  offset_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  offset_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  offset_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LT?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  offset_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MIN_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_MAX_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  offset_SUM_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  angle_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  angle_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  angle_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  angle_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  angle_GT?: InputMaybe<Scalars["Int"]["input"]>;
  angle_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  angle_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  angle_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  angle_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  angle_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  angle_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  angle_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  angle_LT?: InputMaybe<Scalars["Int"]["input"]>;
  angle_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  angle_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  angle_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  angle_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  angle_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  angle_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  angle_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  angle_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  recordedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  recordedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  recordedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  recordedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  recordedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  recordedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type SetArrowsUpdateConnectionInput = {
  node?: InputMaybe<ArrowUpdateInput>;
  edge?: InputMaybe<ArrowOfUpdateInput>;
};

export type SetArrowsUpdateFieldInput = {
  where?: InputMaybe<SetArrowsConnectionWhere>;
  create?: InputMaybe<Array<SetArrowsCreateFieldInput>>;
  connect?: InputMaybe<Array<SetArrowsConnectFieldInput>>;
  update?: InputMaybe<SetArrowsUpdateConnectionInput>;
  delete?: InputMaybe<Array<SetArrowsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SetArrowsDisconnectFieldInput>>;
};

export type SetAthleteAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SetAthleteAggregateInput>>;
  OR?: InputMaybe<Array<SetAthleteAggregateInput>>;
  NOT?: InputMaybe<SetAthleteAggregateInput>;
  node?: InputMaybe<SetAthleteNodeAggregationWhereInput>;
  edge?: InputMaybe<SetAthleteEdgeAggregationWhereInput>;
};

export type SetAthleteConnectFieldInput = {
  where?: InputMaybe<AthleteConnectWhere>;
  connect?: InputMaybe<AthleteConnectInput>;
  edge?: InputMaybe<AthleteShootsCreateInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type SetAthleteConnectionSort = {
  edge?: InputMaybe<AthleteShootsSort>;
  node?: InputMaybe<AthleteSort>;
};

export type SetAthleteConnectionWhere = {
  AND?: InputMaybe<Array<SetAthleteConnectionWhere>>;
  OR?: InputMaybe<Array<SetAthleteConnectionWhere>>;
  NOT?: InputMaybe<SetAthleteConnectionWhere>;
  edge?: InputMaybe<AthleteShootsWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<AthleteShootsWhere>;
  node?: InputMaybe<AthleteWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<AthleteWhere>;
};

export type SetAthleteCreateFieldInput = {
  node: AthleteCreateInput;
  edge?: InputMaybe<AthleteShootsCreateInput>;
};

export type SetAthleteDeleteFieldInput = {
  where?: InputMaybe<SetAthleteConnectionWhere>;
  delete?: InputMaybe<AthleteDeleteInput>;
};

export type SetAthleteDisconnectFieldInput = {
  where?: InputMaybe<SetAthleteConnectionWhere>;
  disconnect?: InputMaybe<AthleteDisconnectInput>;
};

export type SetAthleteEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetAthleteEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SetAthleteEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<SetAthleteEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  eloDelta_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  eloDelta_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  eloDelta_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetAthleteFieldInput = {
  create?: InputMaybe<SetAthleteCreateFieldInput>;
  connect?: InputMaybe<SetAthleteConnectFieldInput>;
};

export type SetAthleteNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetAthleteNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SetAthleteNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetAthleteNodeAggregationWhereInput>;
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
  givenName_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  givenName_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  givenName_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  givenName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  givenName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  elimElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  elimElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  elimElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  qualElo_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  qualElo_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  qualElo_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type SetAthleteUpdateConnectionInput = {
  node?: InputMaybe<AthleteUpdateInput>;
  edge?: InputMaybe<AthleteShootsUpdateInput>;
};

export type SetAthleteUpdateFieldInput = {
  where?: InputMaybe<SetAthleteConnectionWhere>;
  create?: InputMaybe<SetAthleteCreateFieldInput>;
  connect?: InputMaybe<SetAthleteConnectFieldInput>;
  update?: InputMaybe<SetAthleteUpdateConnectionInput>;
  delete?: InputMaybe<SetAthleteDeleteFieldInput>;
  disconnect?: InputMaybe<SetAthleteDisconnectFieldInput>;
};

export type SetAtTargetCreateInput = {
  distance: Scalars["Int"]["input"];
};

export type SetAtTargetSort = {
  distance?: InputMaybe<SortDirection>;
};

export type SetAtTargetUpdateInput = {
  distance?: InputMaybe<Scalars["Int"]["input"]>;
  distance_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetAtTargetWhere = {
  OR?: InputMaybe<Array<SetAtTargetWhere>>;
  AND?: InputMaybe<Array<SetAtTargetWhere>>;
  NOT?: InputMaybe<SetAtTargetWhere>;
  distance?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  distance_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  distance_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  distance_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_GTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetConnectInput = {
  target?: InputMaybe<SetTargetConnectFieldInput>;
  arrows?: InputMaybe<Array<SetArrowsConnectFieldInput>>;
  sets?: InputMaybe<Array<SetSetsConnectFieldInput>>;
  match?: InputMaybe<SetMatchConnectFieldInput>;
  athlete?: InputMaybe<SetAthleteConnectFieldInput>;
  nation?: InputMaybe<SetNationConnectFieldInput>;
};

export type SetConnectOrCreateInput = {
  target?: InputMaybe<SetTargetConnectOrCreateFieldInput>;
  nation?: InputMaybe<SetNationConnectOrCreateFieldInput>;
};

export type SetConnectWhere = {
  node: SetWhere;
};

export type SetCreateInput = {
  complete?: Scalars["Boolean"]["input"];
  arrowsInOrder: Scalars["Boolean"]["input"];
  verified?: Scalars["Boolean"]["input"];
  target?: InputMaybe<SetTargetFieldInput>;
  arrows?: InputMaybe<SetArrowsFieldInput>;
  sets?: InputMaybe<SetSetsFieldInput>;
  match?: InputMaybe<SetMatchFieldInput>;
  athlete?: InputMaybe<SetAthleteFieldInput>;
  nation?: InputMaybe<SetNationFieldInput>;
};

export type SetDeleteInput = {
  target?: InputMaybe<SetTargetDeleteFieldInput>;
  arrows?: InputMaybe<Array<SetArrowsDeleteFieldInput>>;
  sets?: InputMaybe<Array<SetSetsDeleteFieldInput>>;
  match?: InputMaybe<SetMatchDeleteFieldInput>;
  athlete?: InputMaybe<SetAthleteDeleteFieldInput>;
  nation?: InputMaybe<SetNationDeleteFieldInput>;
};

export type SetDisconnectInput = {
  target?: InputMaybe<SetTargetDisconnectFieldInput>;
  arrows?: InputMaybe<Array<SetArrowsDisconnectFieldInput>>;
  sets?: InputMaybe<Array<SetSetsDisconnectFieldInput>>;
  match?: InputMaybe<SetMatchDisconnectFieldInput>;
  athlete?: InputMaybe<SetAthleteDisconnectFieldInput>;
  nation?: InputMaybe<SetNationDisconnectFieldInput>;
};

export type SetMatchAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SetMatchAggregateInput>>;
  OR?: InputMaybe<Array<SetMatchAggregateInput>>;
  NOT?: InputMaybe<SetMatchAggregateInput>;
  node?: InputMaybe<SetMatchNodeAggregationWhereInput>;
  edge?: InputMaybe<SetMatchEdgeAggregationWhereInput>;
};

export type SetMatchConnectFieldInput = {
  where?: InputMaybe<MatchConnectWhere>;
  connect?: InputMaybe<MatchConnectInput>;
  edge: SetOfCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type SetMatchConnectionSort = {
  edge?: InputMaybe<SetOfSort>;
  node?: InputMaybe<MatchSort>;
};

export type SetMatchConnectionWhere = {
  AND?: InputMaybe<Array<SetMatchConnectionWhere>>;
  OR?: InputMaybe<Array<SetMatchConnectionWhere>>;
  NOT?: InputMaybe<SetMatchConnectionWhere>;
  edge?: InputMaybe<SetOfWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<SetOfWhere>;
  node?: InputMaybe<MatchWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MatchWhere>;
};

export type SetMatchCreateFieldInput = {
  node: MatchCreateInput;
  edge: SetOfCreateInput;
};

export type SetMatchDeleteFieldInput = {
  where?: InputMaybe<SetMatchConnectionWhere>;
  delete?: InputMaybe<MatchDeleteInput>;
};

export type SetMatchDisconnectFieldInput = {
  where?: InputMaybe<SetMatchConnectionWhere>;
  disconnect?: InputMaybe<MatchDisconnectInput>;
};

export type SetMatchEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetMatchEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SetMatchEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<SetMatchEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  number_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetMatchFieldInput = {
  create?: InputMaybe<SetMatchCreateFieldInput>;
  connect?: InputMaybe<SetMatchConnectFieldInput>;
};

export type SetMatchNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetMatchNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SetMatchNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetMatchNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type SetMatchUpdateConnectionInput = {
  node?: InputMaybe<MatchUpdateInput>;
  edge?: InputMaybe<SetOfUpdateInput>;
};

export type SetMatchUpdateFieldInput = {
  where?: InputMaybe<SetMatchConnectionWhere>;
  create?: InputMaybe<SetMatchCreateFieldInput>;
  connect?: InputMaybe<SetMatchConnectFieldInput>;
  update?: InputMaybe<SetMatchUpdateConnectionInput>;
  delete?: InputMaybe<SetMatchDeleteFieldInput>;
  disconnect?: InputMaybe<SetMatchDisconnectFieldInput>;
};

export type SetNationAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SetNationAggregateInput>>;
  OR?: InputMaybe<Array<SetNationAggregateInput>>;
  NOT?: InputMaybe<SetNationAggregateInput>;
  node?: InputMaybe<SetNationNodeAggregationWhereInput>;
};

export type SetNationConnectFieldInput = {
  where?: InputMaybe<NationConnectWhere>;
  connect?: InputMaybe<NationConnectInput>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type SetNationConnectionSort = {
  node?: InputMaybe<NationSort>;
};

export type SetNationConnectionWhere = {
  AND?: InputMaybe<Array<SetNationConnectionWhere>>;
  OR?: InputMaybe<Array<SetNationConnectionWhere>>;
  NOT?: InputMaybe<SetNationConnectionWhere>;
  node?: InputMaybe<NationWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<NationWhere>;
};

export type SetNationConnectOrCreateFieldInput = {
  where: NationConnectOrCreateWhere;
  onCreate: SetNationConnectOrCreateFieldInputOnCreate;
};

export type SetNationConnectOrCreateFieldInputOnCreate = {
  node: NationOnCreateInput;
};

export type SetNationCreateFieldInput = {
  node: NationCreateInput;
};

export type SetNationDeleteFieldInput = {
  where?: InputMaybe<SetNationConnectionWhere>;
  delete?: InputMaybe<NationDeleteInput>;
};

export type SetNationDisconnectFieldInput = {
  where?: InputMaybe<SetNationConnectionWhere>;
  disconnect?: InputMaybe<NationDisconnectInput>;
};

export type SetNationFieldInput = {
  connectOrCreate?: InputMaybe<SetNationConnectOrCreateFieldInput>;
  create?: InputMaybe<SetNationCreateFieldInput>;
  connect?: InputMaybe<SetNationConnectFieldInput>;
};

export type SetNationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetNationNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SetNationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetNationNodeAggregationWhereInput>;
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
  code_EQUAL?: InputMaybe<Scalars["String"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  code_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  code_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  code_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  code_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type SetNationUpdateConnectionInput = {
  node?: InputMaybe<NationUpdateInput>;
};

export type SetNationUpdateFieldInput = {
  where?: InputMaybe<SetNationConnectionWhere>;
  connectOrCreate?: InputMaybe<SetNationConnectOrCreateFieldInput>;
  create?: InputMaybe<SetNationCreateFieldInput>;
  connect?: InputMaybe<SetNationConnectFieldInput>;
  update?: InputMaybe<SetNationUpdateConnectionInput>;
  delete?: InputMaybe<SetNationDeleteFieldInput>;
  disconnect?: InputMaybe<SetNationDisconnectFieldInput>;
};

export type SetOfCreateInput = {
  number: Scalars["Int"]["input"];
};

export type SetOfSort = {
  number?: InputMaybe<SortDirection>;
};

export type SetOfUpdateInput = {
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  number_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetOfWhere = {
  OR?: InputMaybe<Array<SetOfWhere>>;
  AND?: InputMaybe<Array<SetOfWhere>>;
  NOT?: InputMaybe<SetOfWhere>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  number_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  number_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  number_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  number_LT?: InputMaybe<Scalars["Int"]["input"]>;
  number_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  number_GT?: InputMaybe<Scalars["Int"]["input"]>;
  number_GTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetOptions = {
  /** Specify one or more SetSort objects to sort Sets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SetSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetRelationInput = {
  target?: InputMaybe<SetTargetCreateFieldInput>;
  arrows?: InputMaybe<Array<SetArrowsCreateFieldInput>>;
  sets?: InputMaybe<Array<SetSetsCreateFieldInput>>;
  match?: InputMaybe<SetMatchCreateFieldInput>;
  athlete?: InputMaybe<SetAthleteCreateFieldInput>;
  nation?: InputMaybe<SetNationCreateFieldInput>;
};

export type SetSetsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SetSetsAggregateInput>>;
  OR?: InputMaybe<Array<SetSetsAggregateInput>>;
  NOT?: InputMaybe<SetSetsAggregateInput>;
  node?: InputMaybe<SetSetsNodeAggregationWhereInput>;
};

export type SetSetsConnectFieldInput = {
  where?: InputMaybe<SetConnectWhere>;
  connect?: InputMaybe<Array<SetConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type SetSetsConnectionSort = {
  node?: InputMaybe<SetSort>;
};

export type SetSetsConnectionWhere = {
  AND?: InputMaybe<Array<SetSetsConnectionWhere>>;
  OR?: InputMaybe<Array<SetSetsConnectionWhere>>;
  NOT?: InputMaybe<SetSetsConnectionWhere>;
  node?: InputMaybe<SetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SetWhere>;
};

export type SetSetsCreateFieldInput = {
  node: SetCreateInput;
};

export type SetSetsDeleteFieldInput = {
  where?: InputMaybe<SetSetsConnectionWhere>;
  delete?: InputMaybe<SetDeleteInput>;
};

export type SetSetsDisconnectFieldInput = {
  where?: InputMaybe<SetSetsConnectionWhere>;
  disconnect?: InputMaybe<SetDisconnectInput>;
};

export type SetSetsFieldInput = {
  create?: InputMaybe<Array<SetSetsCreateFieldInput>>;
  connect?: InputMaybe<Array<SetSetsConnectFieldInput>>;
};

export type SetSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetSetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SetSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetSetsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type SetSetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
};

export type SetSetsUpdateFieldInput = {
  where?: InputMaybe<SetSetsConnectionWhere>;
  create?: InputMaybe<Array<SetSetsCreateFieldInput>>;
  connect?: InputMaybe<Array<SetSetsConnectFieldInput>>;
  update?: InputMaybe<SetSetsUpdateConnectionInput>;
  delete?: InputMaybe<Array<SetSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<SetSetsDisconnectFieldInput>>;
};

/** Fields to sort Sets by. The order in which sorts are applied is not guaranteed when specifying many fields in one SetSort object. */
export type SetSort = {
  complete?: InputMaybe<SortDirection>;
  arrowsInOrder?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type SetTargetAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<SetTargetAggregateInput>>;
  OR?: InputMaybe<Array<SetTargetAggregateInput>>;
  NOT?: InputMaybe<SetTargetAggregateInput>;
  node?: InputMaybe<SetTargetNodeAggregationWhereInput>;
  edge?: InputMaybe<SetTargetEdgeAggregationWhereInput>;
};

export type SetTargetConnectFieldInput = {
  where?: InputMaybe<TargetConnectWhere>;
  connect?: InputMaybe<TargetConnectInput>;
  edge: SetAtTargetCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type SetTargetConnectionSort = {
  edge?: InputMaybe<SetAtTargetSort>;
  node?: InputMaybe<TargetSort>;
};

export type SetTargetConnectionWhere = {
  AND?: InputMaybe<Array<SetTargetConnectionWhere>>;
  OR?: InputMaybe<Array<SetTargetConnectionWhere>>;
  NOT?: InputMaybe<SetTargetConnectionWhere>;
  edge?: InputMaybe<SetAtTargetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<SetAtTargetWhere>;
  node?: InputMaybe<TargetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TargetWhere>;
};

export type SetTargetConnectOrCreateFieldInput = {
  where: TargetConnectOrCreateWhere;
  onCreate: SetTargetConnectOrCreateFieldInputOnCreate;
};

export type SetTargetConnectOrCreateFieldInputOnCreate = {
  node: TargetOnCreateInput;
  edge: SetAtTargetCreateInput;
};

export type SetTargetCreateFieldInput = {
  node: TargetCreateInput;
  edge: SetAtTargetCreateInput;
};

export type SetTargetDeleteFieldInput = {
  where?: InputMaybe<SetTargetConnectionWhere>;
  delete?: InputMaybe<TargetDeleteInput>;
};

export type SetTargetDisconnectFieldInput = {
  where?: InputMaybe<SetTargetConnectionWhere>;
  disconnect?: InputMaybe<TargetDisconnectInput>;
};

export type SetTargetEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetTargetEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SetTargetEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<SetTargetEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  distance_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  distance_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  distance_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  distance_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  distance_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  distance_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SetTargetFieldInput = {
  connectOrCreate?: InputMaybe<SetTargetConnectOrCreateFieldInput>;
  create?: InputMaybe<SetTargetCreateFieldInput>;
  connect?: InputMaybe<SetTargetConnectFieldInput>;
};

export type SetTargetNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SetTargetNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<SetTargetNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SetTargetNodeAggregationWhereInput>;
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
  rings_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  rings_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  rings_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  rings_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rings_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  rings_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rings_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  rings_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rings_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  rings_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  rings_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  rings_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  radius_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  radius_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  radius_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  radius_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  radius_GT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  radius_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  radius_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  radius_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  radius_LT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  radius_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  radius_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  radius_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  max_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  max_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  max_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  max_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  max_GT?: InputMaybe<Scalars["Int"]["input"]>;
  max_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  max_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  max_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  max_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  max_LT?: InputMaybe<Scalars["Int"]["input"]>;
  max_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  max_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  max_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  max_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  max_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  min_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  min_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  min_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  min_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  min_GT?: InputMaybe<Scalars["Int"]["input"]>;
  min_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  min_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  min_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  min_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  min_LT?: InputMaybe<Scalars["Int"]["input"]>;
  min_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  min_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  min_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  min_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  min_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type SetTargetUpdateConnectionInput = {
  node?: InputMaybe<TargetUpdateInput>;
  edge?: InputMaybe<SetAtTargetUpdateInput>;
};

export type SetTargetUpdateFieldInput = {
  where?: InputMaybe<SetTargetConnectionWhere>;
  connectOrCreate?: InputMaybe<SetTargetConnectOrCreateFieldInput>;
  create?: InputMaybe<SetTargetCreateFieldInput>;
  connect?: InputMaybe<SetTargetConnectFieldInput>;
  update?: InputMaybe<SetTargetUpdateConnectionInput>;
  delete?: InputMaybe<SetTargetDeleteFieldInput>;
  disconnect?: InputMaybe<SetTargetDisconnectFieldInput>;
};

export type SetUpdateInput = {
  complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  arrowsInOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  target?: InputMaybe<SetTargetUpdateFieldInput>;
  arrows?: InputMaybe<Array<SetArrowsUpdateFieldInput>>;
  sets?: InputMaybe<Array<SetSetsUpdateFieldInput>>;
  match?: InputMaybe<SetMatchUpdateFieldInput>;
  athlete?: InputMaybe<SetAthleteUpdateFieldInput>;
  nation?: InputMaybe<SetNationUpdateFieldInput>;
};

export type SetWhere = {
  OR?: InputMaybe<Array<SetWhere>>;
  AND?: InputMaybe<Array<SetWhere>>;
  NOT?: InputMaybe<SetWhere>;
  complete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  complete_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  arrowsInOrder?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  arrowsInOrder_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  target?: InputMaybe<TargetWhere>;
  target_NOT?: InputMaybe<TargetWhere>;
  targetAggregate?: InputMaybe<SetTargetAggregateInput>;
  /** @deprecated Use `arrows_SOME` instead. */
  arrows?: InputMaybe<ArrowWhere>;
  /** @deprecated Use `arrows_NONE` instead. */
  arrows_NOT?: InputMaybe<ArrowWhere>;
  arrowsAggregate?: InputMaybe<SetArrowsAggregateInput>;
  /** Return Sets where all of the related Arrows match this filter */
  arrows_ALL?: InputMaybe<ArrowWhere>;
  /** Return Sets where none of the related Arrows match this filter */
  arrows_NONE?: InputMaybe<ArrowWhere>;
  /** Return Sets where one of the related Arrows match this filter */
  arrows_SINGLE?: InputMaybe<ArrowWhere>;
  /** Return Sets where some of the related Arrows match this filter */
  arrows_SOME?: InputMaybe<ArrowWhere>;
  /** @deprecated Use `sets_SOME` instead. */
  sets?: InputMaybe<SetWhere>;
  /** @deprecated Use `sets_NONE` instead. */
  sets_NOT?: InputMaybe<SetWhere>;
  setsAggregate?: InputMaybe<SetSetsAggregateInput>;
  /** Return Sets where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Sets where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Sets where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Sets where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
  match?: InputMaybe<MatchWhere>;
  match_NOT?: InputMaybe<MatchWhere>;
  matchAggregate?: InputMaybe<SetMatchAggregateInput>;
  athlete?: InputMaybe<AthleteWhere>;
  athlete_NOT?: InputMaybe<AthleteWhere>;
  athleteAggregate?: InputMaybe<SetAthleteAggregateInput>;
  nation?: InputMaybe<NationWhere>;
  nation_NOT?: InputMaybe<NationWhere>;
  nationAggregate?: InputMaybe<SetNationAggregateInput>;
  targetConnection?: InputMaybe<SetTargetConnectionWhere>;
  targetConnection_NOT?: InputMaybe<SetTargetConnectionWhere>;
  /** @deprecated Use `arrowsConnection_SOME` instead. */
  arrowsConnection?: InputMaybe<SetArrowsConnectionWhere>;
  /** @deprecated Use `arrowsConnection_NONE` instead. */
  arrowsConnection_NOT?: InputMaybe<SetArrowsConnectionWhere>;
  /** Return Sets where all of the related SetArrowsConnections match this filter */
  arrowsConnection_ALL?: InputMaybe<SetArrowsConnectionWhere>;
  /** Return Sets where none of the related SetArrowsConnections match this filter */
  arrowsConnection_NONE?: InputMaybe<SetArrowsConnectionWhere>;
  /** Return Sets where one of the related SetArrowsConnections match this filter */
  arrowsConnection_SINGLE?: InputMaybe<SetArrowsConnectionWhere>;
  /** Return Sets where some of the related SetArrowsConnections match this filter */
  arrowsConnection_SOME?: InputMaybe<SetArrowsConnectionWhere>;
  /** @deprecated Use `setsConnection_SOME` instead. */
  setsConnection?: InputMaybe<SetSetsConnectionWhere>;
  /** @deprecated Use `setsConnection_NONE` instead. */
  setsConnection_NOT?: InputMaybe<SetSetsConnectionWhere>;
  /** Return Sets where all of the related SetSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<SetSetsConnectionWhere>;
  /** Return Sets where none of the related SetSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<SetSetsConnectionWhere>;
  /** Return Sets where one of the related SetSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<SetSetsConnectionWhere>;
  /** Return Sets where some of the related SetSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<SetSetsConnectionWhere>;
  matchConnection?: InputMaybe<SetMatchConnectionWhere>;
  matchConnection_NOT?: InputMaybe<SetMatchConnectionWhere>;
  athleteConnection?: InputMaybe<SetAthleteConnectionWhere>;
  athleteConnection_NOT?: InputMaybe<SetAthleteConnectionWhere>;
  nationConnection?: InputMaybe<SetNationConnectionWhere>;
  nationConnection_NOT?: InputMaybe<SetNationConnectionWhere>;
};

export type TargetConnectInput = {
  sets?: InputMaybe<Array<TargetSetsConnectFieldInput>>;
};

export type TargetConnectOrCreateWhere = {
  node: TargetUniqueWhere;
};

export type TargetConnectWhere = {
  node: TargetWhere;
};

export type TargetCreateInput = {
  name: Scalars["String"]["input"];
  rings: Scalars["Int"]["input"];
  radius: Scalars["Int"]["input"];
  max: Scalars["Int"]["input"];
  min: Scalars["Int"]["input"];
  xRing: Scalars["Boolean"]["input"];
  verified?: Scalars["Boolean"]["input"];
  sets?: InputMaybe<TargetSetsFieldInput>;
};

export type TargetDeleteInput = {
  sets?: InputMaybe<Array<TargetSetsDeleteFieldInput>>;
};

export type TargetDisconnectInput = {
  sets?: InputMaybe<Array<TargetSetsDisconnectFieldInput>>;
};

export type TargetOnCreateInput = {
  name: Scalars["String"]["input"];
  rings: Scalars["Int"]["input"];
  radius: Scalars["Int"]["input"];
  max: Scalars["Int"]["input"];
  min: Scalars["Int"]["input"];
  xRing: Scalars["Boolean"]["input"];
  verified?: Scalars["Boolean"]["input"];
};

export type TargetOptions = {
  /** Specify one or more TargetSort objects to sort Targets by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TargetSort>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TargetRelationInput = {
  sets?: InputMaybe<Array<TargetSetsCreateFieldInput>>;
};

export type TargetSetsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>;
  count_LT?: InputMaybe<Scalars["Int"]["input"]>;
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  count_GT?: InputMaybe<Scalars["Int"]["input"]>;
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  AND?: InputMaybe<Array<TargetSetsAggregateInput>>;
  OR?: InputMaybe<Array<TargetSetsAggregateInput>>;
  NOT?: InputMaybe<TargetSetsAggregateInput>;
  node?: InputMaybe<TargetSetsNodeAggregationWhereInput>;
  edge?: InputMaybe<TargetSetsEdgeAggregationWhereInput>;
};

export type TargetSetsConnectFieldInput = {
  where?: InputMaybe<SetConnectWhere>;
  connect?: InputMaybe<Array<SetConnectInput>>;
  edge: SetAtTargetCreateInput;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"];
};

export type TargetSetsConnectionSort = {
  edge?: InputMaybe<SetAtTargetSort>;
  node?: InputMaybe<SetSort>;
};

export type TargetSetsConnectionWhere = {
  AND?: InputMaybe<Array<TargetSetsConnectionWhere>>;
  OR?: InputMaybe<Array<TargetSetsConnectionWhere>>;
  NOT?: InputMaybe<TargetSetsConnectionWhere>;
  edge?: InputMaybe<SetAtTargetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<SetAtTargetWhere>;
  node?: InputMaybe<SetWhere>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SetWhere>;
};

export type TargetSetsCreateFieldInput = {
  node: SetCreateInput;
  edge: SetAtTargetCreateInput;
};

export type TargetSetsDeleteFieldInput = {
  where?: InputMaybe<TargetSetsConnectionWhere>;
  delete?: InputMaybe<SetDeleteInput>;
};

export type TargetSetsDisconnectFieldInput = {
  where?: InputMaybe<TargetSetsConnectionWhere>;
  disconnect?: InputMaybe<SetDisconnectInput>;
};

export type TargetSetsEdgeAggregationWhereInput = {
  AND?: InputMaybe<Array<TargetSetsEdgeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TargetSetsEdgeAggregationWhereInput>>;
  NOT?: InputMaybe<TargetSetsEdgeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  distance_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  distance_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MIN_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_EQUAL?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  distance_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MIN_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_GT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_GT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  distance_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MIN_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  distance_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MIN_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_LT?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_LT?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  distance_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>;
  distance_MIN_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_MAX_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  distance_SUM_LTE?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TargetSetsFieldInput = {
  create?: InputMaybe<Array<TargetSetsCreateFieldInput>>;
  connect?: InputMaybe<Array<TargetSetsConnectFieldInput>>;
};

export type TargetSetsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TargetSetsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TargetSetsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<TargetSetsNodeAggregationWhereInput>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type TargetSetsUpdateConnectionInput = {
  node?: InputMaybe<SetUpdateInput>;
  edge?: InputMaybe<SetAtTargetUpdateInput>;
};

export type TargetSetsUpdateFieldInput = {
  where?: InputMaybe<TargetSetsConnectionWhere>;
  create?: InputMaybe<Array<TargetSetsCreateFieldInput>>;
  connect?: InputMaybe<Array<TargetSetsConnectFieldInput>>;
  update?: InputMaybe<TargetSetsUpdateConnectionInput>;
  delete?: InputMaybe<Array<TargetSetsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TargetSetsDisconnectFieldInput>>;
};

/** Fields to sort Targets by. The order in which sorts are applied is not guaranteed when specifying many fields in one TargetSort object. */
export type TargetSort = {
  name?: InputMaybe<SortDirection>;
  rings?: InputMaybe<SortDirection>;
  radius?: InputMaybe<SortDirection>;
  max?: InputMaybe<SortDirection>;
  min?: InputMaybe<SortDirection>;
  xRing?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  verified?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type TargetUniqueWhere = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type TargetUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  rings?: InputMaybe<Scalars["Int"]["input"]>;
  radius?: InputMaybe<Scalars["Int"]["input"]>;
  max?: InputMaybe<Scalars["Int"]["input"]>;
  min?: InputMaybe<Scalars["Int"]["input"]>;
  xRing?: InputMaybe<Scalars["Boolean"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  rings_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  max_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  max_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  min_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  min_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>;
  sets?: InputMaybe<Array<TargetSetsUpdateFieldInput>>;
};

export type TargetWhere = {
  OR?: InputMaybe<Array<TargetWhere>>;
  AND?: InputMaybe<Array<TargetWhere>>;
  NOT?: InputMaybe<TargetWhere>;
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
  rings?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  rings_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  rings_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  rings_LT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  rings_GT?: InputMaybe<Scalars["Int"]["input"]>;
  rings_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  radius_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  radius_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  radius_LT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  radius_GT?: InputMaybe<Scalars["Int"]["input"]>;
  radius_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  max?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  max_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  max_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  max_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  max_LT?: InputMaybe<Scalars["Int"]["input"]>;
  max_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  max_GT?: InputMaybe<Scalars["Int"]["input"]>;
  max_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  min?: InputMaybe<Scalars["Int"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  min_NOT?: InputMaybe<Scalars["Int"]["input"]>;
  min_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  min_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  min_LT?: InputMaybe<Scalars["Int"]["input"]>;
  min_LTE?: InputMaybe<Scalars["Int"]["input"]>;
  min_GT?: InputMaybe<Scalars["Int"]["input"]>;
  min_GTE?: InputMaybe<Scalars["Int"]["input"]>;
  xRing?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  xRing_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>;
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>;
  verified?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  verified_NOT?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  createdAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  createdAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  updatedAt_NOT_IN?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** @deprecated Use `sets_SOME` instead. */
  sets?: InputMaybe<SetWhere>;
  /** @deprecated Use `sets_NONE` instead. */
  sets_NOT?: InputMaybe<SetWhere>;
  setsAggregate?: InputMaybe<TargetSetsAggregateInput>;
  /** Return Targets where all of the related Sets match this filter */
  sets_ALL?: InputMaybe<SetWhere>;
  /** Return Targets where none of the related Sets match this filter */
  sets_NONE?: InputMaybe<SetWhere>;
  /** Return Targets where one of the related Sets match this filter */
  sets_SINGLE?: InputMaybe<SetWhere>;
  /** Return Targets where some of the related Sets match this filter */
  sets_SOME?: InputMaybe<SetWhere>;
  /** @deprecated Use `setsConnection_SOME` instead. */
  setsConnection?: InputMaybe<TargetSetsConnectionWhere>;
  /** @deprecated Use `setsConnection_NONE` instead. */
  setsConnection_NOT?: InputMaybe<TargetSetsConnectionWhere>;
  /** Return Targets where all of the related TargetSetsConnections match this filter */
  setsConnection_ALL?: InputMaybe<TargetSetsConnectionWhere>;
  /** Return Targets where none of the related TargetSetsConnections match this filter */
  setsConnection_NONE?: InputMaybe<TargetSetsConnectionWhere>;
  /** Return Targets where one of the related TargetSetsConnections match this filter */
  setsConnection_SINGLE?: InputMaybe<TargetSetsConnectionWhere>;
  /** Return Targets where some of the related TargetSetsConnections match this filter */
  setsConnection_SOME?: InputMaybe<TargetSetsConnectionWhere>;
};

export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface ArrowAggregateSelectionInput {
  count?: boolean;
  value?: IntAggregateInputNonNullable;
  offset?: FloatAggregateInputNullable;
  angle?: IntAggregateInputNullable;
  id?: IdAggregateInputNonNullable;
  recordedAt?: DateTimeAggregateInputNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class ArrowModel {
  public find(args?: {
    where?: ArrowWhere;

    options?: ArrowOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Arrow[]>;
  public create(args: {
    input: ArrowCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateArrowsMutationResponse>;
  public update(args: {
    where?: ArrowWhere;
    update?: ArrowUpdateInput;
    connect?: ArrowConnectInput;
    disconnect?: ArrowDisconnectInput;
    create?: ArrowCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateArrowsMutationResponse>;
  public delete(args: {
    where?: ArrowWhere;
    delete?: ArrowDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: ArrowWhere;

    aggregate: ArrowAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<ArrowAggregateSelection>;
}

export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface SetAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class SetModel {
  public find(args?: {
    where?: SetWhere;

    options?: SetOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Set[]>;
  public create(args: {
    input: SetCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateSetsMutationResponse>;
  public update(args: {
    where?: SetWhere;
    update?: SetUpdateInput;
    connect?: SetConnectInput;
    disconnect?: SetDisconnectInput;
    create?: SetCreateInput;
    connectOrCreate?: SetConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateSetsMutationResponse>;
  public delete(args: {
    where?: SetWhere;
    delete?: SetDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: SetWhere;

    aggregate: SetAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<SetAggregateSelection>;
}

export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface TargetAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
  rings?: IntAggregateInputNonNullable;
  radius?: IntAggregateInputNonNullable;
  max?: IntAggregateInputNonNullable;
  min?: IntAggregateInputNonNullable;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class TargetModel {
  public find(args?: {
    where?: TargetWhere;

    options?: TargetOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Target[]>;
  public create(args: {
    input: TargetCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateTargetsMutationResponse>;
  public update(args: {
    where?: TargetWhere;
    update?: TargetUpdateInput;
    connect?: TargetConnectInput;
    disconnect?: TargetDisconnectInput;
    create?: TargetCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateTargetsMutationResponse>;
  public delete(args: {
    where?: TargetWhere;
    delete?: TargetDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: TargetWhere;

    aggregate: TargetAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<TargetAggregateSelection>;
}

export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface MatchAggregateSelectionInput {
  count?: boolean;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class MatchModel {
  public find(args?: {
    where?: MatchWhere;

    options?: MatchOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Match[]>;
  public create(args: {
    input: MatchCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateMatchesMutationResponse>;
  public update(args: {
    where?: MatchWhere;
    update?: MatchUpdateInput;
    connect?: MatchConnectInput;
    disconnect?: MatchDisconnectInput;
    create?: MatchCreateInput;
    connectOrCreate?: MatchConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateMatchesMutationResponse>;
  public delete(args: {
    where?: MatchWhere;
    delete?: MatchDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: MatchWhere;

    aggregate: MatchAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<MatchAggregateSelection>;
}

export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface EventAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class EventModel {
  public find(args?: {
    where?: EventWhere;

    options?: EventOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Event[]>;
  public create(args: {
    input: EventCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateEventsMutationResponse>;
  public update(args: {
    where?: EventWhere;
    update?: EventUpdateInput;
    connect?: EventConnectInput;
    disconnect?: EventDisconnectInput;
    create?: EventCreateInput;
    connectOrCreate?: EventConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateEventsMutationResponse>;
  public delete(args: {
    where?: EventWhere;
    delete?: EventDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: EventWhere;

    aggregate: EventAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<EventAggregateSelection>;
}

export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface CompetitionAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class CompetitionModel {
  public find(args?: {
    where?: CompetitionWhere;

    options?: CompetitionOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Competition[]>;
  public create(args: {
    input: CompetitionCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateCompetitionsMutationResponse>;
  public update(args: {
    where?: CompetitionWhere;
    update?: CompetitionUpdateInput;
    connect?: CompetitionConnectInput;
    disconnect?: CompetitionDisconnectInput;
    create?: CompetitionCreateInput;
    connectOrCreate?: CompetitionConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateCompetitionsMutationResponse>;
  public delete(args: {
    where?: CompetitionWhere;
    delete?: CompetitionDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: CompetitionWhere;

    aggregate: CompetitionAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<CompetitionAggregateSelection>;
}

export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface AthleteAggregateSelectionInput {
  count?: boolean;
  familyName?: StringAggregateInputNullable;
  givenName?: StringAggregateInputNullable;
  elimElo?: IntAggregateInputNullable;
  qualElo?: IntAggregateInputNullable;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class AthleteModel {
  public find(args?: {
    where?: AthleteWhere;

    options?: AthleteOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Athlete[]>;
  public create(args: {
    input: AthleteCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateAthletesMutationResponse>;
  public update(args: {
    where?: AthleteWhere;
    update?: AthleteUpdateInput;
    connect?: AthleteConnectInput;
    disconnect?: AthleteDisconnectInput;
    create?: AthleteCreateInput;
    connectOrCreate?: AthleteConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateAthletesMutationResponse>;
  public delete(args: {
    where?: AthleteWhere;
    delete?: AthleteDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: AthleteWhere;

    aggregate: AthleteAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<AthleteAggregateSelection>;
}

export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface NationAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNullable;
  code?: StringAggregateInputNonNullable;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class NationModel {
  public find(args?: {
    where?: NationWhere;

    options?: NationOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Nation[]>;
  public create(args: {
    input: NationCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateNationsMutationResponse>;
  public update(args: {
    where?: NationWhere;
    update?: NationUpdateInput;
    connect?: NationConnectInput;
    disconnect?: NationDisconnectInput;
    create?: NationCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateNationsMutationResponse>;
  public delete(args: {
    where?: NationWhere;
    delete?: NationDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: NationWhere;

    aggregate: NationAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<NationAggregateSelection>;
}

export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DivisionAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class DivisionModel {
  public find(args?: {
    where?: DivisionWhere;

    options?: DivisionOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<Division[]>;
  public create(args: {
    input: DivisionCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateDivisionsMutationResponse>;
  public update(args: {
    where?: DivisionWhere;
    update?: DivisionUpdateInput;
    connect?: DivisionConnectInput;
    disconnect?: DivisionDisconnectInput;
    create?: DivisionCreateInput;
    connectOrCreate?: DivisionConnectOrCreateInput;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateDivisionsMutationResponse>;
  public delete(args: {
    where?: DivisionWhere;
    delete?: DivisionDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: DivisionWhere;

    aggregate: DivisionAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<DivisionAggregateSelection>;
}

export interface IntAggregateInputNonNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface FloatAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IntAggregateInputNullable {
  max?: boolean;
  min?: boolean;
  average?: boolean;
  sum?: boolean;
}
export interface IdAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DateTimeAggregateInputNullable {
  min?: boolean;
  max?: boolean;
}
export interface DateTimeAggregateInputNonNullable {
  min?: boolean;
  max?: boolean;
}
export interface StringAggregateInputNonNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface StringAggregateInputNullable {
  shortest?: boolean;
  longest?: boolean;
}
export interface DataSourceAggregateSelectionInput {
  count?: boolean;
  name?: StringAggregateInputNonNullable;
  id?: IdAggregateInputNonNullable;
  createdAt?: DateTimeAggregateInputNonNullable;
  updatedAt?: DateTimeAggregateInputNullable;
}

export declare class DataSourceModel {
  public find(args?: {
    where?: DataSourceWhere;

    options?: DataSourceOptions;
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<DataSource[]>;
  public create(args: {
    input: DataSourceCreateInput[];
    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<CreateDataSourcesMutationResponse>;
  public update(args: {
    where?: DataSourceWhere;
    update?: DataSourceUpdateInput;
    connect?: DataSourceConnectInput;
    disconnect?: DataSourceDisconnectInput;
    create?: DataSourceCreateInput;

    selectionSet?: string | DocumentNode | SelectionSetNode;
    args?: any;
    context?: any;
    rootValue?: any;
  }): Promise<UpdateDataSourcesMutationResponse>;
  public delete(args: {
    where?: DataSourceWhere;
    delete?: DataSourceDeleteInput;
    context?: any;
    rootValue?: any;
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>;
  public aggregate(args: {
    where?: DataSourceWhere;

    aggregate: DataSourceAggregateSelectionInput;
    context?: any;
    rootValue?: any;
  }): Promise<DataSourceAggregateSelection>;
}

export interface ModelMap {
  Arrow: ArrowModel;
  Set: SetModel;
  Target: TargetModel;
  Match: MatchModel;
  Event: EventModel;
  Competition: CompetitionModel;
  Athlete: AthleteModel;
  Nation: NationModel;
  Division: DivisionModel;
  DataSource: DataSourceModel;
}
