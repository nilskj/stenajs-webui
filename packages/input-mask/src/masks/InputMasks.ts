export const InputMasks = {
  CREDIT_CARD: [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  TIME: [/[012]/, /\d/, ":", /[012345]/, /\d/],
  ISO_DATE: [/\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/], // 2019-12-29
};
