import type { NextPage } from "next";
import { getMessage } from "../features/ncdc";

const Ncdc: NextPage = () => {
  const alertMessage = () => {
    const messages = getMessage();
    alert(messages);
  };

  return (
    <div>
      <h1>NC</h1>
      <div>
        <div>
          <button id="alert-message" onClick={alertMessage}>
            メッセージ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ncdc;
