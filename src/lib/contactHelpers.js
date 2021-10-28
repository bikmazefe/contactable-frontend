function getInitials(contacts = {}) {
  const keys = Object.keys(contacts) || [];

  return keys;
}

function search(list, query) {
  if (!query.length) return list;

  const q = query.toUpperCase();
  return list.filter((item) => {
    const values = Object.values(item).map((val) => {
      if (includeInSearch(val)) return val.toUpperCase();
    });
    return values.some((val) => val && val.includes(q));
  });
}

// exclude non-string values and timestamps
function includeInSearch(val) {
  return typeof val == "string" && new Date(val) === "Invalid Date";
}

export { getInitials, search };
