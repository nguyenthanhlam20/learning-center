using AutoMapper;
using BusinessObjects.DTO;
using BusinessObjects.DTO.Payment;
using BusinessObjects.Models;
using Microsoft.AspNetCore.Mvc;
using Reporitories;

namespace WebApi.Controllers
{
    [Route("api/payment")]
    [ApiController]
    public class PaymentController(IMapper mapper, SeedCenterContext context) : ControllerBase
    {
        private IPaymentRepository repository = new PaymentRepository();
        private readonly SeedCenterContext _context = context;

        private readonly IMapper _mapper = mapper;


        // POST api/<LessonController>
        [HttpPost("insert")]
        public ActionResult InsertPayment([FromBody] InsertPaymentDTO paymentDTO)
        {

            try
            {
                var account = _context.Accounts.FirstOrDefault(x => x.Email == paymentDTO.StudentEmail);
                if (account is null) return NotFound();

                account.Name = paymentDTO.StudentName;
                account.Phone = paymentDTO.StudentPhone;
                account.Address = paymentDTO.Address;
                account.DateOfBirth = DateTime.TryParse(paymentDTO.DateOfBirth, out var result) ? result : DateTime.Now;
                _context.SaveChanges();


                var existAccount = _context.Accounts.Any(x => x.Email == paymentDTO.StudentEmail);
                if (!existAccount) return Ok(new ResponseDTO(false, "Địa chỉ email không tồn tại trong hệ thống"));

                var existPayment = _context.Payments.FirstOrDefault(x => x.StudentEmail == paymentDTO.StudentEmail
                        && x.ClassId == paymentDTO.ClassId && x.CourseId == paymentDTO.CourseId);
                if (existPayment != null) return Ok(new ResponseDTO(false, "Hóa đơn thanh toán đã tồn tại"));

                var payment = _mapper.Map<Payment>(paymentDTO);
                var paymentId = repository.InsertPayment(payment);
                if (paymentId > 0)
                {
                    SendOrderEmail(paymentId);

                    if (paymentDTO.RegisterId != null)
                    {
                        repository.UpdateRegisterStatus(paymentDTO.RegisterId ?? 0);

                        var existClassMember = _context.ClassMembers
                                .FirstOrDefault(x => x.ClassId == paymentDTO.ClassId
                                && x.StudentEmail == paymentDTO.StudentEmail);
                        if (existClassMember is not null) return Ok(new ResponseDTO(false, "Thành viên lớp đã tồn tại"));

                        if (existClassMember is not null)
                        {
                            existClassMember.Status = true;
                        }
                        else
                        {
                            _context.ClassMembers.Add(new ClassMember()
                            {
                                ClassId = paymentDTO.ClassId ?? 0,
                                StudentEmail = paymentDTO.StudentEmail!,
                                EnrollmentDate = DateTime.Now,
                                Status = true
                            });
                        }

                        var existUserCourse = _context.UserCourses.Any(x => x.Email == paymentDTO.StudentEmail
                        && x.CourseId == paymentDTO.CourseId);

                        if(!existUserCourse)
                        {
                            _context.UserCourses.Add(new UserCourse()
                            {
                                CourseId = paymentDTO.CourseId ?? 0,
                                Email = payment.StudentEmail!,
                                EnrolledDate = DateTime.Now,
                            });
                        }

                        _context.SaveChanges();
                    }

                    return Ok(new ResponseDTO(true, "Thanh toán hóa đơn thành công"));
                }
            }
            catch (Exception)
            {


            }
            return Ok(new ResponseDTO(false, "Thanh toán hóa đơn thất bại"));
        }


        private void SendOrderEmail(int paymentId)
        {
            var payment = repository.GetPaymentById(paymentId);
            var paymentDTO = _mapper.Map<PaymentDTO>(payment);

            string htmlBody = $@"
            <html>
            <head>
                <title>Hóa Đơn Mua Khóa Học</title>
                <style>
                    /* Your invoice styling goes here */
                    table {{
                        border-collapse: collapse;
                        width: 100%;
                        font-family: Arial, sans-serif;
                    }}
                    th, td {{
                        border: 1px solid #ddd;
                        padding: 12px;
                    }}
                    th {{
                        background-color: #f2f2f2;
                    }}
                    tr:nth-child(even) {{
                        background-color: #f2f2f2;
                    }}
                    body {{
                        font-family: Arial, sans-serif;
                    }}
                    .invoice {{
                        max-width: 800px;
                        margin: 0 auto;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        padding: 20px;
                        background-color: #fff;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }}
                    .invoice-header {{
                        text-align: center;
                        margin-bottom: 20px;
                    }}
                    .invoice-header h2 {{
                        margin: 0;
                    }}
                    .invoice-logo {{
                        display: block;
                        max-width: 200px;
                        margin: 0 auto;
                        margin-bottom: 20px;
                    }}
                    .invoice-footer {{
                        text-align: center;
                        margin-top: 20px;
                        font-size: 12px;
                        color: #888;
                    }}
                </style>
            </head>
            <body>
                <div class='invoice'>
                    <div class='invoice-header'>
                        <h2>Hóa Đơn Mua Khóa Học</h2>
                    </div>
                    <div class='invoice-details'>
                        <table>
                            <tr>
                                <th>Khách hàng</th>
                                <td>{paymentDTO.StudentEmailNavigation!.Name}</td>
                            </tr>
                            <tr>
                                <th>Tên khóa học</th>
                                <td>{paymentDTO.Course!.CourseName}</td>
                            </tr>
                            <tr>
                                <th>Giá</th>
                                <td>{paymentDTO.Amount.ToString("N0") + "đ"}</td>
                            </tr>
                            <tr>
                                <th>Ngày mua</th>
                                <td>{DateTime.Now}</td>
                            </tr>
                            <tr>
                                <th>Nhà cung cấp</th>
                                <td>{"Seed Center"}</td>
                            </tr>
                        </table>
                    </div>
                    <div class='invoice-footer'>
                        <p>Cảm ơn vì đã tin tưởng và dùng dịch vụ của chúng tôi!</p>
                    </div>
                </div>
            </body>
            </html>
            ";

            EmailServices.SendHtmlEmail(paymentDTO.StudentEmail ?? "", "Hóa Đơn Mua Khóa Học Tại Seed Center", htmlBody);
        }


        // POST api/<LessonController>
        [HttpPost("create")]
        public ActionResult CreatePayment([FromBody] InsertPaymentDTO paymentDTO)
        {
            string vnp_Returnurl = "http://localhost:3000/authen/payment/result"; //URL nhan ket qua tra ve 
            string vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
            string vnp_TmnCode = "BYWK6NZN";
            string vnp_HashSecret = "WIRKFXVKGQS9PJ9DOMCG7YZPYC20D3HR"; //Chuoi bi mat

            //Get payment input
            OrderInfo order = new OrderInfo();
            order.OrderId = DateTime.Now.Ticks; // Giả lập mã giao dịch hệ thống merchant gửi sang VNPAY
            order.Amount = (double)paymentDTO.Amount; // Giả lập số tiền thanh toán hệ thống merchant gửi sang VNPAY 100,000 VND
            order.Status = "0"; //0: Trạng thái thanh toán "chờ thanh toán" hoặc "Pending" khởi tạo giao dịch chưa có IPN
            order.CreatedDate = DateTime.Now;
            //Save order to db

            Console.WriteLine("Amount: " + order.Amount);
            //Build URL for VNPAY
            VnPayLibrary vnpay = new VnPayLibrary();

            vnpay.AddRequestData("vnp_Version", VnPayLibrary.VERSION);
            vnpay.AddRequestData("vnp_Command", "pay");
            vnpay.AddRequestData("vnp_TmnCode", vnp_TmnCode);
            vnpay.AddRequestData("vnp_Amount", (order.Amount * 100).ToString()); //Số tiền thanh toán. Số tiền không mang các ký tự phân tách thập phân, phần nghìn, ký tự tiền tệ. Để gửi số tiền thanh toán là 100,000 VND (một trăm nghìn VNĐ) thì merchant cần nhân thêm 100 lần (khử phần thập phân), sau đó gửi sang VNPAY là: 10000000
            vnpay.AddRequestData("vnp_BankCode", "");

            vnpay.AddRequestData("vnp_CreateDate", order.CreatedDate.ToString("yyyyMMddHHmmss"));
            vnpay.AddRequestData("vnp_CurrCode", "VND");
            vnpay.AddRequestData("vnp_IpAddr", "127.0.0.1");

            vnpay.AddRequestData("vnp_Locale", "vn");
            vnpay.AddRequestData("vnp_OrderInfo", "Thanh toan don hang:" + order.OrderId);
            vnpay.AddRequestData("vnp_OrderType", "other"); //default value: other

            vnpay.AddRequestData("vnp_ReturnUrl", vnp_Returnurl);
            vnpay.AddRequestData("vnp_TxnRef", order.OrderId.ToString()); // Mã tham chiếu của giao dịch tại hệ thống của merchant. Mã này là duy nhất dùng để phân biệt các đơn hàng gửi sang VNPAY. Không được trùng lặp trong ngày

            //Add Params of 2.1.0 Version
            //Billing

            string paymentUrl = vnpay.CreateRequestUrl(vnp_Url, vnp_HashSecret);
            Console.WriteLine(paymentUrl);

            var result = new
            {
                data = paymentDTO,
                url = paymentUrl,
            };
            return Ok(result);
        }

        [HttpGet("get")]
        public ActionResult GetPayments()
        {
            IEnumerable<Payment> payments = repository.GetPayments();
            IEnumerable<PaymentDTO> paymentDTOs = _mapper.Map<IEnumerable<PaymentDTO>>(payments);
            return Ok(paymentDTOs);
        }

        [HttpPost("get/by-user")]
        public ActionResult GetPaymentsByUser([FromBody] GetPaymentDTO GetPaymentDTO)
        {
            IEnumerable<Payment> payments = repository.GetPaymentsByUser(GetPaymentDTO.Email);
            IEnumerable<PaymentDTO> paymentDTOs = _mapper.Map<IEnumerable<PaymentDTO>>(payments);
            return Ok(paymentDTOs);
        }
    }
}
