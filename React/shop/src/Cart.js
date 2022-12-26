import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./store";
export function Cart() {
  let dispatch = useDispatch(); // store.js에게 요청을 보내줌
  let user = useSelector((state) => state.user);
  let a = useSelector((state) => state.stock);
  let carts = useSelector((state) => state.cart);

  return (
    <>
      {user}
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        +
      </button>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>수정</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((item, index) => {
            return <Row cart={item}></Row>;
          })}
        </tbody>
      </Table>
    </>
  );
}

function Row({ cart }) {
  let dispatch = useDispatch(); // store.js에게 요청을 보내줌
  return (
    <>
      <tr>
        <td>{cart.id}</td>
        <td>{cart.name}</td>
        <td>{cart.count}</td>
        <td>
          <button
            onClick={() => {
              dispatch(changeName());
            }}
          >
            +
          </button>
        </td>
      </tr>
    </>
  );
}
