import * as React from 'react'

const storage = window.localStorage;
const userToken = 'userToken';

let token = storage.getItem(userToken);

const setToken = (newToken: string) => {
  token = newToken;
  localStorage.setItem(userToken, token);
}

export function useLoginToken(): [string | null, (newToken: string) => void] {
  return [token, setToken];
}