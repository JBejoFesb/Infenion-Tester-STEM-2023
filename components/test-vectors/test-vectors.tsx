import React, { useState } from "react";
import { IInputCondition, ILoadedData, ITestPoint } from "../../helpers/json-parser";

export interface ITestVectorRow {
  Index: number,
  IsUsed: boolean,
  InputConditions: IInputCondition[]
}

export interface ITestVector {
  table: ITestVectorRow[],
}

export interface ITestVectorData {
  data: ILoadedData | undefined
}

export interface ITestPoints {
  testPoints: ITestPoint[][],
  inputCondition: number[],
}

const AllTables: React.FC<ITestVectorData> = ({ data }) => {
  let samples = data?.Project.Samples;
  let InputConditions = data?.Project.InputConditions;
  let testPointCollections = data?.TestPointCollections;

  if (samples != undefined && testPointCollections != undefined) { 
    for (let i = 0; i < samples.length; i++) {
      let infoHolder: ITestPoints = {testPoints: [], inputCondition: []};
      
      for (let j = 0; j < testPointCollections.length; j++) {

        if (samples[i].Id in testPointCollections[j].SampleIds) {
          infoHolder.testPoints.push(testPointCollections[j].TestPoints);
          infoHolder.inputCondition.push(testPointCollections[j].InputConditionId);
        }
      }
      console.log(infoHolder);

      let rows = 1;

      for (let j = 0; j < infoHolder.testPoints.length; j++) {
        for (let k = 0; k < infoHolder.testPoints[j].length; k++) {
          let thing = infoHolder.testPoints[j];
          rows = rows * thing[k]; //AAAAAAAAAAAAAA
        }
      }
    }
  }

  return (
    <></>
  )
};

export default AllTables;