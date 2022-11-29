import { useState } from "react";
import SignupPresenter from "./Signup.presenter";

function SignupContainer() {
  const [timerTime, setTimerTime] = useState(180);

  const onClickSendEmailToken = () => {
    if (timerTime !== 180) {
      setTimerTime(180);
      return;
    }

    const timer = setInterval((timerTime) => {
      setTimerTime((prev) => {
        prev - 1;
        if (prev <= 0) {
          clearInterval(timer);
          return 180;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <SignupPresenter
      timerTime={timerTime}
      onClickSendEmailToken={onClickSendEmailToken}
    />
  );
}

export default SignupContainer;
