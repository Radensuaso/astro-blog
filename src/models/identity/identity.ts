/**
 * Identity class
 *
 * @class Identity
 *
 * Types of Identity
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
export class Identity {
  firstName: string;
  country: string;
  occupation: string;
  hobbies: string[];
  skills: string[];
  happy: boolean;
  finished: boolean;
  goal: number;
  /**
   * Creates an instance of Identity.
   * @param {Identity} identity - Identity
   * @example const identity = new Identity({
   * firstName: 'John',
   * country: 'USA',
   * occupation: 'Developer',
   * hobbies: ['Soccer', 'Basketball'],
   * skills: ['JavaScript', 'TypeScript', 'Node.js', 'React', 'Angular', 'Vue']
   * happy: true,
   * finished: false,
   * goal: 100
   * });
   */
  constructor(identity: Identity) {
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
