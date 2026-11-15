import assert from "node:assert/strict";
import test from "node:test";
import { getCountdownParts } from "./countdown.ts";
import { invitationConfig } from "./invitationConfig.ts";

const wedding = invitationConfig.celebrations.find(event => event.id === "wedding")!;
const target = Date.parse(invitationConfig.countdownTarget);

test("wedding ceremony is 25 November 2026, 9:12 a.m. IST", () => {
  assert.equal(new Date(Date.parse(wedding.start)).toISOString(), "2026-11-25T03:42:00.000Z");
});

test("countdown reaches zero at the wedding muhurtham in India", () => {
  assert.equal(new Date(target).toISOString(), "2026-11-25T03:42:00.000Z");
});

test("counts down to the November wedding in IST", () => {
  assert.deepEqual(getCountdownParts(target, Date.parse("2026-11-13T14:26:50+05:30")), {
    days: 11, hours: 18, minutes: 45, seconds: 10, complete: false,
  });
});

test("equivalent international clock readings give the same countdown", () => {
  const ist = Date.parse("2026-11-24T09:12:00+05:30");
  const utc = Date.parse("2026-11-24T03:42:00Z");
  const newYork = Date.parse("2026-11-23T22:42:00-05:00");
  const expected = { days: 1, hours: 0, minutes: 0, seconds: 0, complete: false };
  for (const now of [ist, utc, newYork]) assert.deepEqual(getCountdownParts(target, now), expected);
});

test("wedding muhurtham completes the countdown", () => {
  assert.deepEqual(getCountdownParts(target, Date.parse("2026-11-25T09:12:00+05:30")), {
    days: 0, hours: 0, minutes: 0, seconds: 0, complete: true,
  });
});

test("does not finish a fraction of a second before the wedding muhurtham", () => {
  assert.deepEqual(getCountdownParts(target, target - 1), {
    days: 0, hours: 0, minutes: 0, seconds: 1, complete: false,
  });
});

test("finishes on the wedding date and never shows negative values", () => {
  for (const now of [target, target + 86400000]) {
    assert.deepEqual(getCountdownParts(target, now), {
      days: 0, hours: 0, minutes: 0, seconds: 0, complete: true,
    });
  }
});

test("updates days, hours, minutes and seconds as the current time advances", () => {
  assert.deepEqual(getCountdownParts(target, target - 86401000), {
    days: 1, hours: 0, minutes: 0, seconds: 1, complete: false,
  });
  assert.deepEqual(getCountdownParts(target, target - 86400000), {
    days: 1, hours: 0, minutes: 0, seconds: 0, complete: false,
  });
  assert.deepEqual(getCountdownParts(target, target - 86399000), {
    days: 0, hours: 23, minutes: 59, seconds: 59, complete: false,
  });
});

