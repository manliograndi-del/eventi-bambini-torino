(function (root) {
  'use strict';
  function romeDate(date = new Date()) { return new Intl.DateTimeFormat('en-CA', {timeZone:'Europe/Rome',year:'numeric',month:'2-digit',day:'2-digit'}).format(date); }
  function weekDates(now = new Date(), count = 7) {
    const first = romeDate(now);
    return Array.from({length:count}, (_, i) => { const day = new Date(first + 'T12:00:00Z'); day.setUTCDate(day.getUTCDate() + i); return day.toISOString().slice(0,10); });
  }
  function occurrenceDate(value) { return value.length === 10 ? value : romeDate(new Date(value)); }
  function upcoming(value, event, now = new Date()) {
    if (occurrenceDate(value) < romeDate(now)) return false;
    const end = event.occurrenceEnds?.[value];
    return !end || new Date(end) > now;
  }
  function coverage(events, now = new Date(), count = 13) { return weekDates(now, count).map(date => ({date, count:events.filter(e => e.status === 'published' && !e.isExample && e.occurrences.some(value => occurrenceDate(value) === date && upcoming(value,e,now))).length})); }
  const api = {romeDate, weekDates, occurrenceDate, upcoming, coverage};
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.Calendar = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
