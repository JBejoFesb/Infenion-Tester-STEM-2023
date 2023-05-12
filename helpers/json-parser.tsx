import L1 from "../data/L1.json";
import L2 from "../data/L2.json";
import M1 from "../data/M1.json";
import M2 from "../data/M2.json";

export interface IProjectSample {
    FamilyName: string,
    ProductName: string,
    Name: string,
    Id: number,
}

export interface IInputCondition {
    Parameter: string;
    Min: number;
    Typical: number;
    Max: number;
    TimeBetweenPoints: number;
    Id: number;
}

export interface IProjectInformation {
    Name: string,
    Samples: IProjectSample[],
    InputConditions: IInputCondition[],
    Id: number;
}

export interface ITestPoint {
    Value: number,
    Unit: null
}

export interface ITestPointCollection {
    InputConditionId: number,
    SampleIds: number[],
    TestPoints: ITestPoint[],
    Id: number,
}

export interface ILoadedData {
    Project: IProjectInformation,
    TestPointCollections: ITestPointCollection[],
}

const loadJSONData = () => {
    return {'L1': L1 as ILoadedData,
            'L2': L2 as ILoadedData,
            'M1': M1 as ILoadedData,
            'M2': M2 as ILoadedData
        };
}

export default loadJSONData;