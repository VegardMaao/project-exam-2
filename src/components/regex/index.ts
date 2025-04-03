/* eslint-disable @typescript-eslint/no-explicit-any */
export const emailRegex: any = `[A-Za-z0-9._%+-]*@stud.noroff.no`;
// It may seem silly that I set a regEx to be "any" type,
// but TS gave me an error (in login.tsx) that said my regEx can't be a string?
// I found no other solution in the moment of writing, this works for some reason
