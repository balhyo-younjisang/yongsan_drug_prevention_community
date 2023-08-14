/** 유저의 검사 점수를 계산하는 함수, 만약 검사 결과가 올바르지 않으면 경고창 */
export const calculateTestScore = (
  userAnswer: { id: number; answer: string; question: string }[]
) => {
  let score = 0;
  let flag = false;
  userAnswer.map((obj) => {
    if (obj.answer === "") flag = true; // 체크를 하지 않았다면

    if (obj.id === 3) {
      score += obj.answer === "y" ? 0 : 1;
    } else {
      score += obj.answer === "y" ? 1 : 0;
    }
  });

  if (flag) {
    score = NaN;
  }

  return score;
};
