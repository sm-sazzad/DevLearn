import { IDataType } from "../Components/DataType";

export const DataFatch = async (): Promise<IDataType[]> => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
}