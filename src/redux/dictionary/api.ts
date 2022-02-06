import axios from 'axios';

const DICTIONARY_API_URL = 'https://www.moedict.tw';
const RAW_DICTIONARY_PATH = `${DICTIONARY_API_URL}/uni/`;

export const getRawDefinitions = (word: string) => axios.get(`${RAW_DICTIONARY_PATH}${word}`);
