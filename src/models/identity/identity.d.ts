/**
 * Identity interface
 *
 * @interface IIdentity
 *
 * @type {string} firstName - First name
 * @type {string} country - Country
 * @type {string} occupation - Occupation
 * @type {string[]} hobbies - Hobbies
 * @type {string[]} skills - Skills
 * @type {boolean} happy - Happy
 * @type {boolean} finished - Finished
 * @type {number} goal - Goal
 */
export interface IIdentity {
  firstName: string;
  country: string;
  occupation: string;
  hobbies: string[];
  skills: string[];
  happy: boolean;
  finished: boolean;
  goal: number;
}
