export interface Employee {
  id: number;
  name: string;
  designation: string;
  location: string;
  status?: EmployeeStatus;
}

export enum EmployeeStatus {
  ACTIVE = 'active',
  TEMP_SUSPENDED = 'temporarily suspended',
  INACTIVE = 'inactive',
  TERMINATED = 'Terminated',
}

export enum ExportTabs {
  ALL_EMPLOYEES = 'All Employees',
  ACTIVE = 'Active Employees',
  INACTIVE = 'Inactive Employees',
  TEMP_SUSPENDED = 'Temporarily Suspended Employees',
  TERMINATED = 'Terminated Employees',
}
export const Sample_employees: Employee[] = [
  { id: 1, name: 'Shibu', designation: 'Manager', location: 'Thrissur', status: EmployeeStatus.ACTIVE },
  { id: 2, name: 'Murgam T', designation: 'HR', location: 'Chennai', status: EmployeeStatus.TEMP_SUSPENDED },
  { id: 3, name: 'Tony', designation: 'Designer', location: 'Banglore', status: EmployeeStatus.INACTIVE },
  { id: 4, name: 'Pearly', designation: 'Developer', location: 'Pune', status: EmployeeStatus.TERMINATED },
];
