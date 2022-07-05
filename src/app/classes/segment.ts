import { Table } from './table';

export class Segment {
  public name: string = '';
  public icon: { [key: string]: any } = {};
  public description: string = '';
  public tables: Table[] = [];
}
