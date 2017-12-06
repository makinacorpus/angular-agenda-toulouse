export class Geometry {
  type: string;
  coordinates: Number[]
}

export class Event {
  datasetid: string;
  fields: any;
  geometry?: Geometry;
  record_timestamp: string;
}
