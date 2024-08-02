import ClickEvent from "./components/event/ClickEvent";
import Input from "./components/event/Input";
import { Children, StringChildren } from "./components/props/Children";
import ListOfNestedObject from "./components/props/ListOfNestedObject";
import { NestedObject } from "./components/props/NestedObject";
import { Object } from "./components/props/Object";
import { Status } from "./components/props/StringLiteral";
import Css from "./components/style/Container";
import Box from "./ThemeConsumingBox";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UserContextProvider } from "./context/UserContext";
import User from "./User";
import Private from "./auth/Private";
import Profile from "./auth/Profile";
import List from "./generic/List";
import RandomNumber from "./components/propRestriction/RandomNumber";

const nameList = [
  {
    first: "Bruce",
    last: "Wayne",
  },
  {
    first: "Clark",
    last: "Kent",
  },
  {
    first: "Princess",
    last: "Diana",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Props</h1>
      <Object name="Wontae" messageCount={5} isLoggedIn={true}></Object>
      <NestedObject
        name={{
          first: "Clark",
          last: "Diana",
        }}
      ></NestedObject>
      <ListOfNestedObject names={nameList}></ListOfNestedObject>
      <p>----------</p>
      <Status status="success" />
      <Children>
        <StringChildren>
          Here goes the string type children of this component!
        </StringChildren>
      </Children>
      <ClickEvent
        handleClick={(event, id) => console.log(event, id)}
      ></ClickEvent>
      <Input value="" handleChange={(event) => console.log(event)}></Input>
      <Css styles={{ background: "red" }}></Css>
      {/* 틀린 Css property를 주거나(오타라던지), 맞는 value를 주면(display: 0)이라던지 TS 에러 발생 */}

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Private isLoggedIn={true} component={Profile}></Private>

      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          { first: "Wontae", last: "Choi" },
          { first: "Yuna", last: "Kim" },
        ]}
        onClick={(item) => console.log(item)}
      />
      {/* 처음 봤는데... prop value가 true면 그냥 isPositive로 써도 된다  */}
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
