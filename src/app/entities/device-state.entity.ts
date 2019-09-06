import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("state")
export class DeviceState {
  @JsonProperty("time", Number)
  public time: number;
  @JsonProperty("min", Number)
  public min: number;
  @JsonProperty("max", Number)
  public max: number;
  @JsonProperty("avg", Number)
  public avg: number;
}
