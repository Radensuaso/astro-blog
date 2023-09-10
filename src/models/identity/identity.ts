import type { IIdentity } from './identity.d';

/**
 * Identity class
 *
 * @class Identity
 * @implements {IIdentity} -
 *
 * Properties
 *
 * @property {string} firstName - First name
 * @property {string} country - Country
 * @property {string} occupation - Occupation
 * @property {string[]} hobbies - Hobbies
 * @property {string[]} skills - Skills
 * @property {boolean} happy - Happy
 * @property {boolean} finished - Finished
 * @property {number} goal - Goal
 *
 * @param {IIdentity} identity
 * @example const identity = new Identity({ firstName: 'John',
 * country: 'USA',
 * occupation: 'Developer',
 * hobbies: ['Soccer', 'Basketball'],
 * skills: ['JavaScript', 'TypeScript'],
 * happy: true,
 * finished: false,
 * goal: 3
 * });
 */
export class Identity implements IIdentity {
  firstName: string;
  country: string;
  occupation: string;
  hobbies: string[];
  skills: string[];
  happy: boolean;
  finished: boolean;
  goal: number;

  constructor(identity: IIdentity) {
    this.firstName = identity.firstName;
    this.country = identity.country;
    this.occupation = identity.occupation;
    this.hobbies = identity.hobbies;
    this.skills = identity.skills;
    this.happy = identity.happy;
    this.finished = identity.finished;
    this.goal = identity.goal;
  }
}
