/* eslint-disable prettier/prettier */
import { SlateRange} from "@wangeditor/editor";

export interface IPersMarkerData {
  type: string;
  properties?: SlateRange;
  newProperties?: SlateRange;
}
