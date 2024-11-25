import { ObjectType } from "./Object.types";

export const Object = ({ name, messageCount = 10, isLoggedIn }: ObjectType) => {
  return (
    <div>
      <p>
        {isLoggedIn
          ? `Hi ${name}, You have ${messageCount} unread messages.`
          : "Welcome guest"}
      </p>
    </div>
  );
};
