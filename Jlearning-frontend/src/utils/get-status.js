import { Status } from "../constants/status";

export default function getStatus(status) {
  switch (parseInt(status)) {
    case Status.PENDING:
      return { color: "#0288d1", message: "Chờ xác nhận" };
    case Status.CONFIRM:
      return { color: "gray", message: "Chờ thanh toán" };
    case Status.CANCEL:
      return { color: "red", message: "Đã hủy" };
    default:
      return { color: "#526E48", message: "Thành công" };
  }
}
