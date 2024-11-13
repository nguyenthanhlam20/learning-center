USE [SeedCenter]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[email] [nvarchar](100) NOT NULL,
	[name] [nvarchar](100) NOT NULL,
	[password] [nvarchar](100) NOT NULL,
	[avatar_url] [nvarchar](max) NULL,
	[phone] [nvarchar](10) NULL,
	[address] [nvarchar](200) NULL,
	[year_of_birth] [int] NULL,
	[gender] [bit] NULL,
	[role_id] [int] NOT NULL,
	[active_status] [bit] NOT NULL,
	[date_of_birth] [date] NULL,
	[description] [nvarchar](max) NULL,
	[created_date] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Class_Member]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Class_Member](
	[student_email] [nvarchar](100) NOT NULL,
	[class_id] [int] NOT NULL,
	[enrollment_date] [date] NULL,
	[status] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[student_email] ASC,
	[class_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Classes]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Classes](
	[class_id] [int] IDENTITY(1,1) NOT NULL,
	[course_id] [int] NULL,
	[class_name] [nvarchar](200) NOT NULL,
	[start_date] [date] NOT NULL,
	[end_date] [date] NOT NULL,
	[number_of_student] [int] NOT NULL,
	[number_of_slots] [int] NOT NULL,
	[staff_email] [nvarchar](100) NULL,
	[teacher_email] [nvarchar](100) NULL,
	[room] [nvarchar](100) NULL,
	[days_of_week] [nvarchar](200) NULL,
	[start_time] [time](7) NULL,
	[end_time] [time](7) NULL,
	[class_code] [varchar](50) NULL,
	[status] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[class_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Contact]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contact](
	[contact_id] [int] IDENTITY(1,1) NOT NULL,
	[email] [nvarchar](100) NULL,
	[name] [nvarchar](200) NULL,
	[request_date] [date] NULL,
	[response_date] [date] NULL,
	[status] [bit] NULL,
	[request_message] [nvarchar](max) NULL,
	[response_message] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[contact_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[course_id] [int] IDENTITY(1,1) NOT NULL,
	[course_avatar_url] [nvarchar](max) NULL,
	[course_name] [nvarchar](200) NULL,
	[description] [nvarchar](500) NULL,
	[duration] [int] NULL,
	[price] [float] NULL,
	[status] [bit] NULL,
	[created_at] [date] NULL,
	[number_of_slots] [int] NULL,
	[code] [varchar](100) NULL,
	[level] [nvarchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[course_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Feedback]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Feedback](
	[feedback_id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](100) NULL,
	[email] [nvarchar](100) NULL,
	[star] [int] NULL,
	[course_name] [nvarchar](500) NULL,
	[message] [nvarchar](500) NULL,
	[course_id] [int] NULL,
	[user_avatar_url] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[feedback_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GRADES]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GRADES](
	[grade_id] [int] IDENTITY(1,1) NOT NULL,
	[student_email] [nvarchar](100) NULL,
	[class_id] [int] NULL,
	[grade_name] [nvarchar](50) NULL,
	[listening] [decimal](3, 1) NULL,
	[reading] [decimal](3, 1) NULL,
	[writing] [decimal](3, 1) NULL,
	[speaking] [decimal](3, 1) NULL,
	[overall] [decimal](3, 1) NULL,
	[created_at] [date] NULL,
	[updated_at] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[grade_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payment]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payment](
	[payment_id] [int] IDENTITY(1,1) NOT NULL,
	[payment_method] [nvarchar](100) NOT NULL,
	[class_id] [int] NULL,
	[course_id] [int] NULL,
	[student_email] [nvarchar](100) NULL,
	[amount] [decimal](18, 0) NOT NULL,
	[payment_date] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[payment_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Registration_Form]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Registration_Form](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[student_email] [nvarchar](100) NOT NULL,
	[class_id] [int] NOT NULL,
	[course_id] [int] NOT NULL,
	[status] [int] NULL,
	[response] [nvarchar](500) NULL,
	[created_date] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[role_id] [int] IDENTITY(1,1) NOT NULL,
	[role_name] [nvarchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[role_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Support]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Support](
	[support_id] [int] IDENTITY(1,1) NOT NULL,
	[support_name] [nvarchar](200) NULL,
	[message] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[support_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Course]    Script Date: 11/14/2024 2:48:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Course](
	[course_id] [int] NOT NULL,
	[email] [nvarchar](100) NOT NULL,
	[enrolled_date] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[course_id] ASC,
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'admin', N'admin', N'admin', NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, NULL, NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'lengocbao@gmail.com', N'Lê Ngọc Bảo', N'Abc1234!', N'https://wallpapercave.com/wp/wp7172074.jpg', N'0385984070', N'Hà Nội', NULL, 0, 2, 1, CAST(N'2001-06-10' AS Date), N'', NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'nguyenthanhlam@gmail.com', N'Nguyễn Thành Lâm', N'Abc1234!', N'https://img.freepik.com/premium-photo/avatar-anime-boy-with-fire-background-front-profile-face-child-with-flames_967743-602.jpg', N'0385981077', N'Hà Nội', NULL, 0, 3, 1, CAST(N'2001-07-18' AS Date), N'Thầy luôn nỗ lực mang đến cho học viên kiến thức cần thiết qua các bài giảng dễ hiểu và thực tế.', NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'nguyenthuylinh@gmail.com', N'Lê Thùy Linh', N'Abc1234!', N'https://static.vecteezy.com/system/resources/previews/030/652/284/non_2x/cute-kawaii-girl-free-photo.jpg', N'0397841458', N'Hà Nội', NULL, 0, 3, 1, CAST(N'2001-07-07' AS Date), N'Cô là giảng viên nhiệt huyết, tận tâm, luôn hỗ trợ và truyền cảm hứng học tập.






', NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'staff@gmail.com', N'Staff ', N'Abc1234!', N'https://img.freepik.com/premium-photo/capybara-animal-chibi-cartoon-style-isolated-plain-background_1232269-2473.jpg', N'039874524', N'Hà Nội', NULL, 0, 2, 1, CAST(N'2001-07-20' AS Date), NULL, NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'student@gmail.com', N'Lê Bảo Ngân', N'Abc1234!', N'https://img.freepik.com/premium-photo/aer-work-anime-girl-with-flowers-painting-generative-ai_849906-6858.jpg', N'99999999', N'Hà Nội', NULL, 0, 4, 1, CAST(N'2001-07-26' AS Date), N'adasd', NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'teacher@gmail.com', N'Hoàng An', N'Abc1234!', N'https://img.freepik.com/premium-photo/cute-asian-girl-kawaii-anime-avatar-art_1165404-71511.jpg', N'035789478', N'Hà Nội', NULL, NULL, 3, 1, CAST(N'2001-07-20' AS Date), N'Cô là một giảng viên tận tâm với nhiều năm kinh nghiệm trong lĩnh vực giảng dạy học viên.', NULL)
GO
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'student@gmail.com', 1, CAST(N'2024-11-09' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'student@gmail.com', 16, CAST(N'2024-11-11' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'student@gmail.com', 17, CAST(N'2021-11-11' AS Date), 1)
GO
SET IDENTITY_INSERT [dbo].[Classes] ON 

INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [class_code], [status]) VALUES (1, 35, N'Lớp học IELTS cơ bản', CAST(N'2024-11-09' AS Date), CAST(N'2024-11-09' AS Date), 11, 11, N'staff@gmail.com', N'teacher@gmail.com', N'P202', N'T2, T4', CAST(N'02:30:00' AS Time), CAST(N'02:30:00' AS Time), N'ISD', 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [class_code], [status]) VALUES (2, 31, N'Lớp học IELTS nâng cao', CAST(N'2024-11-09' AS Date), CAST(N'2024-11-09' AS Date), 0, 0, N'staff@gmail.com', N'teacher@gmail.com', N'P203', N'T5, T6', CAST(N'02:30:00' AS Time), CAST(N'02:30:00' AS Time), N'IOI', 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [class_code], [status]) VALUES (16, 35, N'Lớp học IELTS cần thiết', CAST(N'2024-11-05' AS Date), CAST(N'2025-01-01' AS Date), 0, 20, N'staff@gmail.com', N'nguyenthanhlam@gmail.com', N'P204', N'T3, T5', CAST(N'01:00:00' AS Time), CAST(N'03:00:00' AS Time), N'ISD', 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [class_code], [status]) VALUES (17, 35, N'Lớp học IELTS bổ sung', CAST(N'2024-12-05' AS Date), CAST(N'2025-02-02' AS Date), 0, 15, N'staff@gmail.com', N'nguyenthuylinh@gmail.com', N'P205', N'T4, T6', CAST(N'07:00:00' AS Time), CAST(N'09:00:00' AS Time), N'ISD', 1)
SET IDENTITY_INSERT [dbo].[Classes] OFF
GO
SET IDENTITY_INSERT [dbo].[Contact] ON 

INSERT [dbo].[Contact] ([contact_id], [email], [name], [request_date], [response_date], [status], [request_message], [response_message]) VALUES (3, N'john@gmail.com', N'John', CAST(N'2024-10-29' AS Date), NULL, NULL, N'Tôi là John, và tôi gặp khó khăn trong việc đăng nhập vào tài khoản của mình. Tôi đã thử reset mật khẩu nhưng vẫn không thể đăng nhập được. Rất mong được sự trợ giúp từ các bạn để tôi có thể truy cập vào tài khoản của mình một lần nữa.', NULL)
SET IDENTITY_INSERT [dbo].[Contact] OFF
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (31, N'https://ktdcgroup.vn/wp-content/uploads/2023/04/WEB_THUMNAIL-POST-Thi%E1%BA%BFt-k%E1%BA%BF-KV-kh%C3%B3a-IELTS-h%C3%A8_Update19042023.jpg', N'Khóa IELTS Hè Cấp Tốc', N'Mô tả khóa IELTS Hè Cấp Tốc', 12, 10000, 1, CAST(N'2023-06-10' AS Date), 2, N'ISM', N'Mới bắt đầu')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (35, N'https://taec.edu.vn/wp-content/uploads/2023/08/1-II-0-5.0-01.jpg', N'Khoá Học IELTS Introduction', N'Mô tả khóa học IELTS Introduction', 22, 2000000, 1, CAST(N'2023-05-26' AS Date), 3, N'ISD', N'Mới bắt đầu')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (36, N'https://onthiielts.com.vn/wp-content/uploads/2022/10/ielts-intensive-1.jpg', N'Khóa học IELTS cấp tốc', N'Mô tả khóa học IELTS cấp tốc', 11, 3000000, 1, CAST(N'2023-06-12' AS Date), 4, N'IOI', N'Trung bình')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (37, N'https://www.aland.edu.vn/uploads/images/crop/960x576/2019/07/practice/khoa-ielts-online-band-5-5.jpg', N'Khóa học IELTS Online Band 5.5', N'Mô tả khóa học IELTS Online Band 5.5', 1, 4500000, 1, CAST(N'2023-06-05' AS Date), 5, N'PIO', N'Nâng cao')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (38, N'https://istarenglish.edu.vn/wp-content/uploads/2020/12/ielts-banner.jpg', N'Khoá học IELTS GENERAL', N'Mô tả khóa học IELTS GENERAL', 11, 7000000, 1, CAST(N'2023-05-26' AS Date), 6, N'ISF', N'Trung bình')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (39, N'https://aten.edu.vn/wp-content/uploads/2022/12/khoa-hoc-ielts-online-cho-nguoi-mat-goc-ban-da-biet-chua-so-1.jpg', N'Khóa học IELTS online cho người mất gốc', N'Mô tả khóa học IELTS online cho người mất gốc', 12, 10000000, 1, CAST(N'2023-05-30' AS Date), 7, N'ISR', N'Nâng cao')
SET IDENTITY_INSERT [dbo].[Course] OFF
GO
SET IDENTITY_INSERT [dbo].[Feedback] ON 

INSERT [dbo].[Feedback] ([feedback_id], [name], [email], [star], [course_name], [message], [course_id], [user_avatar_url]) VALUES (4, N'Student', N'student@gmail.com', 5, N'Khóa học N5 free', N'Khóa học rất hay và bổ ích', 31, NULL)
INSERT [dbo].[Feedback] ([feedback_id], [name], [email], [star], [course_name], [message], [course_id], [user_avatar_url]) VALUES (5, N'Student', N'student@gmail.com', 5, N'Khóa học N4', N'Nội dung khóa học đầy đủ chi tiết', 35, NULL)
INSERT [dbo].[Feedback] ([feedback_id], [name], [email], [star], [course_name], [message], [course_id], [user_avatar_url]) VALUES (6, N'Student', N'student@gmail.com', 5, N'Khóa học N1', N'Khóa học khá thú vị', 38, N'https://yt3.googleusercontent.com/ytc/AL5GRJUCfVHiY_T0o_KOKqH85MEsTZoEFs0uE4anTUdN5A=s900-c-k-c0x00ffffff-no-rj')
SET IDENTITY_INSERT [dbo].[Feedback] OFF
GO
SET IDENTITY_INSERT [dbo].[GRADES] ON 

INSERT [dbo].[GRADES] ([grade_id], [student_email], [class_id], [grade_name], [listening], [reading], [writing], [speaking], [overall], [created_at], [updated_at]) VALUES (1, N'student@gmail.com', 1, N'Điểm cuối khóa', CAST(10.0 AS Decimal(3, 1)), CAST(5.0 AS Decimal(3, 1)), CAST(5.0 AS Decimal(3, 1)), CAST(5.0 AS Decimal(3, 1)), CAST(6.3 AS Decimal(3, 1)), CAST(N'2024-11-14' AS Date), CAST(N'2024-11-14' AS Date))
SET IDENTITY_INSERT [dbo].[GRADES] OFF
GO
SET IDENTITY_INSERT [dbo].[Payment] ON 

INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (1, N'Chuyển khoản', 16, 36, N'student@gmail.com', CAST(3000000 AS Decimal(18, 0)), CAST(N'2024-11-12' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (4, N'Chuyển khoản', 1, 35, N'student@gmail.com', CAST(2000000 AS Decimal(18, 0)), CAST(N'2024-11-12' AS Date))
SET IDENTITY_INSERT [dbo].[Payment] OFF
GO
SET IDENTITY_INSERT [dbo].[Registration_Form] ON 

INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (8, N'student@gmail.com', 17, 35, 3, N'asdasd', CAST(N'2024-11-12' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (12, N'student@gmail.com', 16, 35, 2, NULL, CAST(N'2024-11-12' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (13, N'student@gmail.com', 17, 35, 1, NULL, CAST(N'2024-11-12' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (14, N'student@gmail.com', 1, 35, 4, NULL, CAST(N'2024-11-12' AS Date))
SET IDENTITY_INSERT [dbo].[Registration_Form] OFF
GO
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (1, N'admin')
INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (2, N'staff')
INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (3, N'teacher')
INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (4, N'student')
SET IDENTITY_INSERT [dbo].[Role] OFF
GO
SET IDENTITY_INSERT [dbo].[Support] ON 

INSERT [dbo].[Support] ([support_id], [support_name], [message]) VALUES (14, N'THÔNG TIN CÁC KHÓA HỌC IELTS TẠI TRUNG TÂM ', N'Trung tâm của chúng tôi cung cấp một loạt các khóa học luyện thi IELTS đa dạng, phù hợp cho mọi đối tượng học viên từ trình độ cơ bản đến nâng cao. Mỗi khóa học được thiết kế nhằm giúp học viên phát triển toàn diện các kỹ năng nghe, nói, đọc và viết theo tiêu chuẩn của kỳ thi IELTS quốc tế.

Chúng tôi có các khóa học IELTS Foundation dành cho người mới bắt đầu, giúp xây dựng nền tảng tiếng Anh vững chắc. Tiếp theo là các khóa IELTS Intermediate và Advanced, nâng cao khả năng tư duy, phân tích và kỹ năng ngôn ngữ để giúp học viên tự tin chinh phục những mục tiêu điểm cao trong kỳ thi.

Bên cạnh đó, trung tâm còn tổ chức các lớp học chuyên biệt về từng kỹ năng như IELTS Speaking, Writing, Reading và Listening. Đây là lựa chọn lý tưởng cho những học viên muốn tập trung cải thiện các kỹ năng yếu hoặc hoàn thiện kỹ năng còn thiếu.

Mỗi khóa học được giảng dạy bởi đội ngũ giáo viên giàu kinh nghiệm, sở hữu chứng chỉ quốc tế và đã đạt điểm cao trong kỳ thi IELTS. Phương pháp giảng dạy thực tiễn, tương tác và các bài thi thử định kỳ tại trung tâm sẽ giúp học viên tiến bộ nhanh chóng, làm quen với cấu trúc đề thi và phát triển chiến lược làm bài hiệu quả.

Với phương châm “Học thật – Thi thật – Đạt điểm cao,” trung tâm cam kết mang đến môi trường học tập chuyên nghiệp và chất lượng, đồng hành cùng học viên trên con đường đạt được mục tiêu IELTS của mình. Hãy liên hệ ngay với chúng tôi để được tư vấn chi tiết về các khóa học và tìm ra lộ trình học tập phù hợp nhất cho bạn!')
INSERT [dbo].[Support] ([support_id], [support_name], [message]) VALUES (15, N'NỘI QUY HỌC TẬP TẠI TRUNG TÂM ', N'Từ ngày 24/05.2020, các khóa học trên Website sẽ áp dụng tính phí gia hạn khi hết thời hạn.

Mức phí gia hạn:

- Nộp phí 200.000 gia hạn 6 tháng/ khóa học đã mua.
- Nộp phí 350.000 gia hạn 1 năm/ khóa học đã mua.
- Nộp phí 500.000 gia hạn 18 tháng/ khóa học đã mua.

Mức phí trên áp dụng chung cho tất cả các khóa học/ combo. 
 

 
Cách thức gia hạn:

- Khi khóa học bạn đã mua nhưng vì lí do nào đó chưa học xong, hãy liên hệ qua fanpage: https://www.facebook.com/hoctiengnhatcolamđể gia hạn khóa học. 

- Hình thức chuyển khoản: Bạn chỉ cần ghi nội dung chuyển khoản như sau: "Giahan +mail mà bạn đã đăng ký khóa học trên Web"
Ví dụ: mail bạn đăng ký khóa học trên web là Thuhana123@gmail.com ==> Bạn cần gia hạn khóa đã mua thêm 6 tháng thì bạn Chuyển khoản 200.000 vào 1 trong các số tài khoản của cô Lam, ghi nội dung chuyển khoản là "Giahan Thuhana123gmail.com" là bên Web sẽ tự gia hạn.

- Trường hợp bạn đã chuyển khoản gia hạn nhưng chưa được gia hạn thì hãy liên hệ qua fanpage hoặc Hotline để được hỗ trợ nhé.')
INSERT [dbo].[Support] ([support_id], [support_name], [message]) VALUES (16, N'HƯỚNG DẪN THANH TOÁN KHÓA HỌC', N'Bước 1: Bạn đăng ký nick học online bằng cách: ấn nút đăng ký, rồi bạn chỉ cần gõ tên, sau đó nhập địa chỉ mail rồi nhập mật khẩu 2 lần là tạo xong nick 😉

Tạo nick xong thì bạn gửi chuyển khoản học phí rồi báo qua hotline 0372232268 hoặc fanpage https://www.facebook.com/hoctiengnhatcolam để bên mình kiểm tra và kích hoạt sớm nhất có thể😉

Lưu ý phần nội dung chuyển khoản thì bạn ghi mail mà bạn đăng ký trên web hoặc mã đơn hàng nha 😉 

Trường hợp bạn không ghi được nội dung chuyển khoản thì hãy chụp lại ảnh bill chuyển nhé 😉

 

🏦Vietcombank 

Số tài khoản: 0541000319729

Chủ TK: Dao Thanh Lam

Chi nhánh: Chương Dương (Hà Nội)

 

🏦BIDV

Số tài khoản: 15110000800839

Chủ TK: Dao Thanh Lam

Chi nhánh: Thành Đô (Hà Nội)

 

🏦Agribank 

Số tài khoản: 2200205413647

Chủ TK: Dao Thanh Lam

Chi nhánh: Hà Tây

 

🏦Vietinbank

Số tài khoản: 103872706595

Chủ TK: Dao Thanh Lam

Chi nhánh: Bắc Hà Nội

 

🏦Techcombank

Số tài khoản: 19034580790014

Chủ TK: Dao Thanh Lam

 

Chi nhánh: Sài Đồng (Hà Nội)')
SET IDENTITY_INSERT [dbo].[Support] OFF
GO
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (35, N'student@gmail.com', CAST(N'2024-10-29' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (36, N'student@gmail.com', CAST(N'2024-11-11' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (38, N'student@gmail.com', CAST(N'2024-10-29' AS Date))
GO
ALTER TABLE [dbo].[Account] ADD  DEFAULT ((1)) FOR [active_status]
GO
ALTER TABLE [dbo].[Account]  WITH CHECK ADD FOREIGN KEY([role_id])
REFERENCES [dbo].[Role] ([role_id])
GO
ALTER TABLE [dbo].[Class_Member]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Class_Member]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Classes]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Classes]  WITH NOCHECK ADD FOREIGN KEY([staff_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Classes]  WITH NOCHECK ADD FOREIGN KEY([teacher_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD  CONSTRAINT [FK_Feedback_Course] FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Feedback] CHECK CONSTRAINT [FK_Feedback_Course]
GO
ALTER TABLE [dbo].[GRADES]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[GRADES]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Registration_Form]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Registration_Form]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Registration_Form]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[User_Course]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[User_Course]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[Account] ([email])
GO
