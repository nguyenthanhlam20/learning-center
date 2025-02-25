﻿using MailKit.Net.Smtp;
using MimeKit;
using MailKit.Security;

namespace WebApi
{
    public class EmailServices
    {

        private static string senderEmail = "nguyenthanhlam1070@gmail.com";
        private static string senderName = "Seed Center Website";
        private static string senderPassword = "uuwq azae badg xvlc";

        public static void SendEmail(string recipientEmail, string subject, string body)
        {
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(senderName, senderEmail));
                message.To.Add(new MailboxAddress("", recipientEmail));

                message.Subject = subject;

                message.Body = new TextPart("plain")
                {
                    Text = body
                };

                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                    client.Authenticate(senderEmail, senderPassword);
                    client.Send(message);
                    client.Disconnect(true);
                }
            }
            catch (Exception)
            {


            }
        }

        public static void SendHtmlEmail(string recipientEmail, string subject, string htmlBody)
        {
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(senderName, senderEmail));
                message.To.Add(new MailboxAddress("", recipientEmail));

                message.Subject = subject;

                var body = new TextPart("html")
                {
                    Text = htmlBody
                };

                var multipart = new Multipart("alternative");
                multipart.Add(body);

                message.Body = multipart;

                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                    client.Authenticate(senderEmail, senderPassword);
                    client.Send(message);
                    client.Disconnect(true);
                }
            }
            catch (Exception)
            {
                Console.WriteLine("send mail error");
            }
        }

        public static void SendHtmlLinkEmail(string recipientEmail, string subject, string linkUrl)
        {
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(senderName, senderEmail));
                message.To.Add(new MailboxAddress("", recipientEmail));

                message.Subject = subject;

                var htmlBody = $@"
            <html>
            <body>
                <h3>Xin chào, đây là đường dẫn thay đổi mật khẩu của bạn!</h3>
                <p>Try cập <a href='{linkUrl}'>tại đây </a> để thay đổi mật khẩu</p>
                <p>Cảm ơn vì đã tin tưởng và sử dụng dịch vụ của chúng tôi!</p>
            </body>
            </html>";

                var body = new TextPart("html")
                {
                    Text = htmlBody
                };

                var multipart = new Multipart("alternative");
                multipart.Add(body);

                message.Body = multipart;

                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                    client.Authenticate(senderEmail, senderPassword);
                    client.Send(message);
                    client.Disconnect(true);
                }

            }
            catch (Exception)
            {


            }
        }
    }
}
