export type RouteType = {
    routeNumber: number;
    floor: number;
    id?: number;
  };
export type AreaType = {
    id: number,
      routesId: number,
      areaNumber: string,
      roomName: string,
  };
export type TodoType = {
    areasId: number
    duty: string
    id:number

  };
export type PossibleProblemsType = {
  id:number,
  todoId:number,
  possibleProblem:string,
  reaction:string,
};
