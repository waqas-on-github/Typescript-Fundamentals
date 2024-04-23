// create type from other type on condition '

type isNumber<T> = T extends number ? "number" : "other"


type withNumber = isNumber<number>
type withString = isNumber<string>



// 

export type TypeName<T> = 

    T extends  string ? 'string' : 
    T extends  number ? 'number' : 
    T extends  boolean ? 'boolean' : 
    T extends  undefined ? 'undefined' : 
    T extends  symbol ? 'symbol' : 
    T extends  bigint ? 'bigint' : 
    T extends  Function ? 'function' : 
    T extends null ? 'null' :
    "object"    


function typeName<T> (t:T) : TypeName<T> {
    return typeof t as TypeName<T>
}


