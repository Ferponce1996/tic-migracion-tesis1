export interface Task{
    taskId: number;
    taskName: string;
    startDate: Date;
    endDate: Date;
    progress: number;
    duration: number;
    priority: string;
    parentId?:number ;
    approved?: false,
    isInExpandState?: boolean,

}