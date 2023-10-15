import 'reflect-metadata';

function classWithMetaData(metadata:Record<string, any>){
    return function (target: Function){
        //Add metadata
        Reflect.defineMetadata('classMetadata', metadata, target);
    }
}

//apply the decorator with metadata to a class
@classWithMetaData({version: '1.0', 
author:'Sudha'})
class MyClass{

}

//Access the metadata
const classMetadata = Reflect.getMetadata('classMetadata', MyClass);

console.log(classMetadata.version);