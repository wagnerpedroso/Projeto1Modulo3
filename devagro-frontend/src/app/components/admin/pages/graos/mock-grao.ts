import { Object } from './grain';

export const GRAIN: Object[] = JSON.parse(
  String(localStorage.getItem('grainList'))
);
