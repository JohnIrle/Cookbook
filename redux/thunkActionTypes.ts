// Action constants
export const PERSON_LOADING = "PERSON_LOADING";
export const PERSON_SUCCESS = "PERSON_SUCCESS";
export const PERSON_FAIL = "PERSON_FAIL";

export const PERSON_DELETE_SUCCESS = "PERSON_DELETE_SUCCESS";
export const PERSON_DELETE_FAIL = "PERSON_DELETE_FAIL";

export type Person = {
  firstName: string;
  lastName: string;
  height: number;
};

// Attaching types to actions to type guard reducers
// and actions with Dispatch types
export interface PersonLoading {
  type: typeof PERSON_LOADING;
}

export interface PersonSuccess {
  type: typeof PERSON_SUCCESS;
  payload: Person[];
}

export interface PersonFail {
  type: typeof PERSON_FAIL;
  payload?: string;
}

export interface PersonDeleteSuccess {
  type: typeof PERSON_DELETE_SUCCESS;
}

export interface PersonDeleteFail {
  type: typeof PERSON_DELETE_FAIL;
}

// This union type can guard the reducers
// and restrict actions to dispatch types
export type PersonDispatchTypes =
  | PersonSuccess
  | PersonLoading
  | PersonFail
  | PersonDeleteSuccess
  | PersonDeleteFail;
