


type  JsonPrimitive = number | string | null | boolean
type  JSONObject = {[key : string] :JSONValue} 
type  JSONArray = JSONValue[]
type  JSONValue = JsonPrimitive | JSONObject | JSONArray


