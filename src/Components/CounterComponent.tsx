import React, { useEffect } from "react";
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  FETCH_USERS,
} from "../Redux/Action";
import { useAppDispatch, useAppSelector } from "../Redux/Hook";
import { getUsers, getValue } from "../Redux/Selector";

function CounterComponent() {
  const value = useAppSelector(getValue);
  const users = useAppSelector(getUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FETCH_USERS());
  }, []);

  return (
    <>
      <div className="my-20">
        <p className="text-4xl">{value}</p>
        <div className="flex justify-center my-10">
          <div className="mx-10">
            <button
              className="px-4 py-2 bg-green-500 rounded-lg"
              onClick={() => {
                dispatch(COUNTER_INCREMENT());
              }}
            >
              INCREMENT
            </button>
          </div>
          <div className="mx-10">
            <button
              className="px-4 py-2 bg-red-500 rounded-lg"
              onClick={() => {
                dispatch(COUNTER_DECREMENT());
              }}
            >
              DECREMENT
            </button>
          </div>
        </div>
      </div>
      <div>
        {users.map((user: any) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  );
}

export default CounterComponent;
