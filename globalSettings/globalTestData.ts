export declare class globalTestData {
  /**
   * Purpose: Setting up a global data field
   *
   * @param - field - The field name to set
   * @param - value - The value to set for the field
   * @returns A Promise that resolves when the data is set
   */
  
  static setdata(field: string, value: any): Promise<void>;
  /**
   * Purpose: Getting a specific global data value
   *
   * @param - field - The field name whose value should be retrieved
   * @returns A Promise that resolves with the value for the specified field
   */
  
  static getdata(field: string): Promise<string>;
  /**
   * Purpose: Delete a specific global data field
   *
   * @param - field - The field name to delete
   * @returns A Promise that resolves when the field is deleted
   */
  
  static deletedata(field: string): Promise<void>;
  /**
   * Purpose: Clear all global data in local storage
   * 
   * @params - None
   * @returns - A Promise that resolves when all data is cleared
   */
  static cleardata(): Promise<void>;
}
