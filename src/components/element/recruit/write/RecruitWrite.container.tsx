import { useState } from "react";
import RecruitWritePresenter from "./RecruitWrite.presenter";

function RecruitWriteContainer() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <RecruitWritePresenter startDate={startDate} setStartDate={setStartDate} />
  );
}

export default RecruitWriteContainer;
