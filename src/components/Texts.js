import React from "react";
import { useSelector } from "react-redux";
import {List, Transition} from 'semantic-ui-react'
export default function Texts() {
  const messages = useSelector((state) => state.messages);

  return (
    <div className="messages">
      <Transition.Group
        as={List}
        duration={700}
        divided
        size="medium"
        verticalAlign="middle"
      >
        {messages.length > 0 && messages.map((elem, index) => <p key={index}>{elem}</p>)}
      </Transition.Group>
    </div>
  );
}
