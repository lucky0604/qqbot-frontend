import localforage from 'localforage';
import settings from '@/config/settings';

/**
 * 获取本地存储的Token
 * @returns
 */
export const getToken = async (): Promise<string | null> => {
  return await localforage.getItem(settings.siteTokenKey);
};

/**
 * 存储Token到本地
 * @param token
 * @returns
 */
export const setToken = async (token: string): Promise<boolean> => {
  try {
    await localforage.setItem(settings.siteTokenKey, token);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * 移除本地存储的Token
 * @returns
 */
export const removeToken = async (): Promise<boolean> => {
  try {
    await localforage.removeItem(settings.siteTokenKey);
    return true;
  } catch (error) {
    return false;
  }
};
