
// response GET

export interface IResponseGoogle {
  status: string;
  token: string;
};

export interface IResponseShopifySuccess {
  shop_logo_url: string;
  shop_name: string;
  token: string;
  status: string;
};

export interface IResponseShopifyFailure {
  status: string;
  message: string;
};

export interface IResponseShopify {
  shop_logo_url?: string;
  shop_name?: string;
  token?: string;
  status?: string;
  message?: string;
};
export interface IResponseQueryShopify {
  status: string;
  endpointName: string;
  requestId: string;
  originalArgs: string;
  startedTimeStamp: number;
  data: IResponseShopifySuccess;
  fulfilledTimeStamp: number;
  isUninitialized: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  currentData: IResponseShopifySuccess;
  isFetching: boolean;
}

// response POST

export interface IResponsePOST {
  status: string;
  message: string;
};

export interface IBodyPOST {
  name: string;
  email: string;
  password: string;
  shop_token: string;
  google_token: string;
};

// UpdatePost POST

export interface IArgUpdatePost {
  type: string;
  endpointName: string;
  originalArgs: IBodyPOST;
  track: boolean;
};

export interface IRootArgUpdatePost {
  arg: IArgUpdatePost;
  requestId: string;
};

// result POST

export interface IRootResultPOST {
  status: string;
  isUninitialized: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  originalArgs: IBodyPOST;
};





