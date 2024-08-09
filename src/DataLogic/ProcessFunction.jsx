export function BreakList(arr, target) {
  // Find Page Amount
  let totalPages = [];
  let eachPages = [];
  let pageNeeded = Math.ceil(arr.length / target);
  for (let j = 1; j <= pageNeeded; j++) {
    let temp = j;
    totalPages.push(temp);
  }
  // Assign runs
  eachPages[0] = arr.slice(0, target);
  for (let i = 1; i < pageNeeded - 1; i++) {
    eachPages[i] = arr.slice(i * target, (i + 1) * target);
  }
  eachPages[totalPages.length - 1] = arr.slice(
    (pageNeeded - 1) * target,
    arr.length
  );
  return { eachPages, totalPages };
}

export function addRankProperty(arr) {
  if (!Array.isArray(arr)) {
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i].Rank = i + 1;
  }
}

// Process Skills string
export function ReturnSkillIcon(str) {
  let boonArr = str.split(",");
  let finalized = boonArr.map((item) => item.trim());
  return finalized;
}

// Rewrite to m/s
export function writeTimeInMS(string) {
  const [min, sec] = string.split(":");
  return `${min}:${sec}`;
}
