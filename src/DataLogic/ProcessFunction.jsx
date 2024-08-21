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
  let extraSec = +min * 60;
  let totalSec = extraSec + +sec;
  return totalSec;
}

// Remove Duplicate Entries - Name & CLass
export function removeDup(obj) {
  const seen = new Set();
  const result = obj.filter((item) => {
    const key = `${item.Player}-${item.Class}`;
    if (seen.has(key)) {
      return false;
    } else {
      seen.add(key);
      return true;
    }
  });
  return result;
}

// Convert Time to Sec
export function convertToSec(time) {
  const [min, sec] = time.split(":");

  let minToSec = +min * 60;
  let totalSec = minToSec + +sec;

  return totalSec;
}

export const pfpStore = [
  `Arccueid`,
  `Haki`,
  `Mekuna`,
  `小爸爸五花肉`,
  `打灯龙路过`,
  `蓝萌君`,
  `鳳華`,
  `King Pig`,
];
