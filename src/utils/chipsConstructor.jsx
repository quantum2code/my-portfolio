import Chips from "../components/Chips";

export function chipsConstructor(arr) {
  return arr.map((item,idx) => <Chips key={idx} content={`${item}`} />);
}
