/** 경과 시간을 계산해주는 함수 */
const calcElapsedTime = (date: string) => {
  const wroteTime = new Date(Date.parse(date)).valueOf();
  const currentTime = new Date().valueOf();

  const diff = (currentTime - wroteTime) / 1000;

  const formatter = new Intl.RelativeTimeFormat("ko", {
    numeric: "auto",
  });

  const times = [
    { name: "year", milliSeconds: 60 * 60 * 24 * 365 },
    { name: "month", milliSeconds: 60 * 60 * 24 * 30 },
    { name: "day", milliSeconds: 60 * 60 * 24 },
    { name: "hour", milliSeconds: 60 * 60 },
    { name: "minute", milliSeconds: 60 },
  ] as const;

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return formatter.format(-betweenTime, value.name);
    }
  }
  return "방금 전";
};

export default calcElapsedTime;
