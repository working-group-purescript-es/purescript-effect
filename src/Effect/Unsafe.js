"use strict";

export const unsafePerformEffect = function (f) {
  return f();
};
