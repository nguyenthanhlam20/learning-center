USE [SeedCenter]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Account](
	[email] [nvarchar](100) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[password] [nvarchar](100) NOT NULL,
	[avatar_url] [nvarchar](1000) NULL,
	[phone] [nvarchar](10) NULL,
	[address] [nvarchar](200) NULL,
	[gender] [bit] NULL,
	[role_id] [int] NOT NULL,
	[active_status] [bit] NOT NULL,
	[date_of_birth] [date] NULL,
	[description] [nvarchar](500) NULL,
	[created_date] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Class_Member]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Class_Member](
	[student_email] [nvarchar](100) NOT NULL,
	[class_id] [int] NOT NULL,
	[enrollment_date] [date] NOT NULL,
	[status] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[student_email] ASC,
	[class_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Classes]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Classes](
	[class_id] [int] IDENTITY(1,1) NOT NULL,
	[course_id] [int] NULL,
	[class_name] [nvarchar](50) NOT NULL,
	[start_date] [date] NOT NULL,
	[end_date] [date] NOT NULL,
	[number_of_student] [int] NOT NULL,
	[number_of_slots] [int] NOT NULL,
	[staff_email] [nvarchar](100) NOT NULL,
	[teacher_email] [nvarchar](100) NOT NULL,
	[room] [nvarchar](50) NOT NULL,
	[days_of_week] [nvarchar](50) NOT NULL,
	[start_time] [time](7) NOT NULL,
	[end_time] [time](7) NOT NULL,
	[status] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[class_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Contact]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Contact](
	[contact_id] [int] IDENTITY(1,1) NOT NULL,
	[email] [nvarchar](100) NOT NULL,
	[name] [nvarchar](50) NOT NULL,
	[request_date] [date] NULL,
	[response_date] [date] NULL,
	[status] [bit] NULL,
	[request_message] [nvarchar](500) NOT NULL,
	[response_message] [nvarchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[contact_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[course_id] [int] IDENTITY(1,1) NOT NULL,
	[course_avatar_url] [nvarchar](1000) NULL,
	[course_name] [nvarchar](100) NOT NULL,
	[description] [nvarchar](500) NULL,
	[price] [float] NOT NULL,
	[status] [bit] NOT NULL,
	[created_at] [date] NOT NULL,
	[number_of_slots] [int] NULL,
	[code] [varchar](100) NOT NULL,
	[level] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[course_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Feedback]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Feedback](
	[feedback_id] [int] IDENTITY(1,1) NOT NULL,
	[email] [nvarchar](100) NOT NULL,
	[star] [int] NOT NULL,
	[message] [nvarchar](500) NULL,
	[course_id] [int] NOT NULL,
	[class_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[feedback_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GRADES]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GRADES](
	[grade_id] [int] IDENTITY(1,1) NOT NULL,
	[student_email] [nvarchar](100) NOT NULL,
	[class_id] [int] NOT NULL,
	[grade_name] [nvarchar](50) NOT NULL,
	[listening] [decimal](3, 1) NULL,
	[reading] [decimal](3, 1) NULL,
	[writing] [decimal](3, 1) NULL,
	[speaking] [decimal](3, 1) NULL,
	[overall] [decimal](3, 1) NULL,
	[created_at] [date] NOT NULL,
	[updated_at] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[grade_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payment]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payment](
	[payment_id] [int] IDENTITY(1,1) NOT NULL,
	[payment_method] [nvarchar](50) NOT NULL,
	[class_id] [int] NOT NULL,
	[course_id] [int] NOT NULL,
	[student_email] [nvarchar](100) NOT NULL,
	[amount] [decimal](18, 0) NOT NULL,
	[payment_date] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[payment_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Registration_Form]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Registration_Form](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[student_email] [nvarchar](100) NOT NULL,
	[class_id] [int] NOT NULL,
	[course_id] [int] NOT NULL,
	[status] [int] NOT NULL,
	[response] [nvarchar](500) NULL,
	[created_date] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[role_id] [int] IDENTITY(1,1) NOT NULL,
	[role_name] [nvarchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[role_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Support]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Support](
	[support_id] [int] IDENTITY(1,1) NOT NULL,
	[support_name] [nvarchar](200) NOT NULL,
	[message] [nvarchar](4000) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[support_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Course]    Script Date: 11/27/2024 12:01:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Course](
	[course_id] [int] NOT NULL,
	[email] [nvarchar](100) NOT NULL,
	[enrolled_date] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[course_id] ASC,
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'admin', N'admin', N'admin', NULL, NULL, NULL, NULL, 1, 1, NULL, NULL, CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'bao@gmail.com', N'Bùi Gia Bảo', N'abc1234!', NULL, N'0987168198', N'Nghĩa Ô, Hà Nội', 0, 4, 1, CAST(N'2008-10-10' AS Date), NULL, CAST(N'2024-06-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'chau@gmail.com', N'Nguyễn Ngọc Minh Châu', N'Abc1234!', N'https://th.bing.com/th/id/OIP.QS4-tuRyVA8XYd25zE4s9QHaHa?rs=1&pid=ImgDetMain', N'0987334560', N'Hà Nội', 0, 2, 1, CAST(N'2003-02-25' AS Date), N'', CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'daohoangan2k3@gmail.com', N'Nguyễn Văn Dũng ', N'Abc1234!', N'https://toplist.vn/images/800px/vo-canh-758344.jpg', N'0986890970', N'Hà Nội', 1, 2, 1, CAST(N'1996-07-14' AS Date), N'', CAST(N'2024-01-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'ha@gmail.com', N'Bùi Việt Hà', N'Abc1234!', N'https://live.staticflickr.com/427/30797484514_6f8e33cefd_b.jpg', N'098618289', N'Hà Nội', 0, 2, 1, CAST(N'2003-11-10' AS Date), N'', CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'hang@gmail.com', N'Lê Thị Thanh Hằng', N'Abc1234!', NULL, N'0985715179', N'Hà Nội', 0, 4, 1, CAST(N'2003-10-10' AS Date), NULL, CAST(N'2024-05-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'huyen@gmail.com', N'Đào Thị Thảo Huyền', N'Abc1234!', N'https://th.bing.com/th/id/OIP.4BqPSPZBD6eRK0ovVnXB-gHaE7?w=640&h=426&rs=1&pid=ImgDetMain', N'0918189080', N'Hà Nội', 0, 3, 1, CAST(N'2002-10-20' AS Date), N'Cô là giảng viên nhiệt huyết, tận tâm, luôn hỗ trợ và truyền cảm hứng học tập.', CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'lan@gmail.com', N'Lê Ngọc Minh Lan', N'Abc1234!', N'https://photos.hancinema.net/photos/fullsizephoto1649043.jpg', N'0987665433', N'Hưng Yên', 1, 3, 1, CAST(N'2000-10-15' AS Date), N'', CAST(N'2024-04-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'le@gmail.com', N'Lê Thị Linh', N'12345', N'https://th.bing.com/th/id/OIP.U_VcsLqnFjJnQJsQIMLySwHaE8?w=1920&h=1281&rs=1&pid=ImgDetMain', N'090929eeii', N'Hà Nội ', 0, 2, 1, CAST(N'2003-06-12' AS Date), NULL, CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'le2@gmail.com', N'Lê lê lê ', N'Abc1234!', NULL, NULL, NULL, 0, 4, 1, NULL, NULL, CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'Leminhan@gmail.com', N'Lê Minh An', N'Abc1234!', N'https://hotgirlviet.vn/wp-content/uploads/2021/02/Hoang-Phuong-Uyen-2.jpg', N'0965545321', N'Hà Nội', 0, 2, 1, CAST(N'2003-09-13' AS Date), NULL, CAST(N'2024-03-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'lengocbao@gmail.com', N'Lê Ngọc Bảo', N'Abc1234!', N'https://images.pexels.com/photos/6821977/pexels-photo-6821977.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', N'0385984070', N'Hà Nội', 0, 2, 1, CAST(N'2001-06-10' AS Date), N'', CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'ly@gmail.com', N'Vũ Hương Ly', N'Abc1234!', N'https://p4.wallpaperbetter.com/wallpaper/336/932/1023/women-model-brunette-asian-wallpaper-preview.jpg', N'0965564343', N'Hà Nội', 0, 2, 1, CAST(N'2003-02-12' AS Date), N'', CAST(N'2024-10-11' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'nguyenthanhlam@gmail.com', N'Nguyễn Thành Lâm', N'Abc1234!', N'https://mpics.mgronline.com/pics/Images/560000013247601.JPEG', N'0385981077', N'Hà Nội', 1, 3, 1, CAST(N'2001-07-18' AS Date), N'Thầy luôn nỗ lực mang đến cho học viên kiến thức cần thiết qua các bài giảng dễ hiểu và thực tế.', CAST(N'2024-10-13' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'nguyenthuylinh@gmail.com', N'Lê Thùy Linh', N'Abc1234!', N'https://th.bing.com/th/id/OIP.frqvSSjUyekuURjjyeP-ZwHaE7?w=860&h=573&rs=1&pid=ImgDetMain', N'0397841458', N'Hà Nội', 0, 3, 1, CAST(N'2001-07-07' AS Date), N'Cô là giảng viên nhiệt huyết, tận tâm, luôn hỗ trợ và truyền cảm hứng học tập.', CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'quyen@gmail.com', N'Nguyễn Ngọc Quyên', N'abc1234!', NULL, N'0919370900', NULL, 0, 4, 1, NULL, NULL, CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'staff@gmail.com', N'Nguyễn Tuấn Anh', N'Abc1234!', N'https://image.posttoday.com/media/content/2017/12/27/F81BEED156AD4A5D8F60F60D2A3E132C.jpg', N'0398745240', N'Hà Nội', 1, 2, 1, CAST(N'2001-07-20' AS Date), N'Nhân viên xuất sắc', CAST(N'2024-10-15' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'student@gmail.com', N'Lê Bảo Ngân', N'Abc1234!', N'https://img.freepik.com/premium-photo/aer-work-anime-girl-with-flowers-painting-generative-ai_849906-6858.jpg', N'0983488179', N'Hà Nội', 0, 4, 1, CAST(N'2001-07-26' AS Date), N'adasd', CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'teacher@gmail.com', N'Lê Hoàng An', N'Abc1234!', N'https://nguoinoitieng.tv/images/nnt/105/0/bibl.jpg', N'035789478', N'Hà Nội', 0, 3, 1, CAST(N'2001-07-20' AS Date), N'Cô là một giảng viên tận tâm với nhiều năm kinh nghiệm trong lĩnh vực giảng dạy học viên.', CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'teacher2@gmail.com', N'Bùi Thúy Quỳnh', N'Abc1234!', N'https://i0.wp.com/peoplaid.com/wp-content/uploads/2021/07/Xyra-Ballesteros.jpg?w=495&ssl=1', N'0385987080', N'Hà Nội ', 0, 3, 1, CAST(N'2024-11-05' AS Date), N'Là một giáo viên giảng dạy xuất sắc – cô Bùi Thúy Quỳnh hiện đang là giáo viên giảng dạy tại Seed Center', CAST(N'2024-10-15' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'toan@gmail.com', N'Hoàng Minh Toàn', N'abc1234!', NULL, N'0963365643', N'Hai Bà Trưng, Hà Nội', 1, 4, 1, CAST(N'2003-10-20' AS Date), NULL, CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'tram@gmail.com', N'Nguyễn Bích Trâm', N'abc1234!', NULL, N'0983488179', N'Hà Nội', 0, 4, 1, CAST(N'2007-01-12' AS Date), NULL, CAST(N'2024-10-20' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'tung@gmail.com', N'Nguyễn Sơn Tùng', N'abc1234!', NULL, N'0983466719', NULL, 0, 4, 1, NULL, NULL, CAST(N'2024-10-22' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'tung2@gmail.com', N'Tạ Thị Thư', N'Abc1234!', N'https://img5.thuthuatphanmem.vn/uploads/2021/11/20/anh-nguoi-that-2k-dep_043412455.jpg', N'0963365643', N'Hà Nội', 0, 3, 1, CAST(N'2001-12-24' AS Date), N'Cô là giảng viên nhiệt huyết, tận tâm, luôn hỗ trợ và truyền cảm hứng học tập.', CAST(N'2024-10-10' AS Date))
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'yen@gmail.com', N'Đào Thị Hải Yến', N'Abc1234!', N'https://img5.thuthuatphanmem.vn/uploads/2021/11/20/anh-gai-xinh-nguoi-that-de-thuong_043411378.jpg', N'0965564347', N'Hà Nội', 0, 2, 1, CAST(N'2003-10-20' AS Date), N'', CAST(N'2024-10-10' AS Date))
GO
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'bao@gmail.com', 2, CAST(N'2024-11-16' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'hang@gmail.com', 19, CAST(N'2024-11-16' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'hang@gmail.com', 24, CAST(N'2024-11-16' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'hang@gmail.com', 27, CAST(N'2024-11-23' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'student@gmail.com', 1, CAST(N'2024-11-09' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'student@gmail.com', 16, CAST(N'2024-11-11' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'student@gmail.com', 17, CAST(N'2024-11-24' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'student@gmail.com', 18, CAST(N'2024-11-16' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'student@gmail.com', 19, CAST(N'2024-11-19' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'toan@gmail.com', 21, CAST(N'2024-11-16' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'tram@gmail.com', 1, CAST(N'2024-11-16' AS Date), 1)
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'tram@gmail.com', 20, CAST(N'2024-11-16' AS Date), 1)
GO
SET IDENTITY_INSERT [dbo].[Classes] ON 

INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (1, 35, N'Lớp học IELTS cơ bản', CAST(N'2024-11-09' AS Date), CAST(N'2024-11-09' AS Date), 11, 24, N'staff@gmail.com', N'teacher@gmail.com', N'P202', N'T2, T4', CAST(N'02:30:00' AS Time), CAST(N'02:30:00' AS Time), 0)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (2, 31, N'Lớp học IELTS nâng cao', CAST(N'2024-11-09' AS Date), CAST(N'2024-11-09' AS Date), 24, 20, N'staff@gmail.com', N'teacher@gmail.com', N'P203', N'T5, T6', CAST(N'09:30:00' AS Time), CAST(N'11:30:00' AS Time), 0)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (16, 35, N'Lớp học IELTS cần thiết', CAST(N'2024-11-09' AS Date), CAST(N'2025-01-01' AS Date), 18, 24, N'staff@gmail.com', N'nguyenthanhlam@gmail.com', N'P204', N'T3, T5', CAST(N'01:00:00' AS Time), CAST(N'03:00:00' AS Time), 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (17, 35, N'Lớp học IELTS bổ sung', CAST(N'2024-12-05' AS Date), CAST(N'2025-02-02' AS Date), 15, 24, N'staff@gmail.com', N'nguyenthuylinh@gmail.com', N'P205', N'T4, T6', CAST(N'07:00:00' AS Time), CAST(N'09:00:00' AS Time), 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (18, 31, N'Lớp học IELTS basic', CAST(N'2024-11-20' AS Date), CAST(N'2025-01-20' AS Date), 20, 20, N'staff@gmail.com', N'teacher@gmail.com', N'P101', N'T4, T6', CAST(N'19:00:02' AS Time), CAST(N'21:00:02' AS Time), 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (19, 36, N'Pre-Senior 6.0+', CAST(N'2024-12-11' AS Date), CAST(N'2025-03-01' AS Date), 20, 20, N'daohoangan2k3@gmail.com', N'nguyenthanhlam@gmail.com', N'P105', N'T5, T7', CAST(N'20:00:44' AS Time), CAST(N'22:00:44' AS Time), 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (20, 31, N'Lớp học IELTS vỡ lòng', CAST(N'2024-02-01' AS Date), CAST(N'2024-05-01' AS Date), 24, 20, N'ha@gmail.com', N'nguyenthuylinh@gmail.com', N'P209', N'T3, T7', CAST(N'09:00:26' AS Time), CAST(N'11:00:26' AS Time), 0)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (21, 38, N'Lớp IELTS cơ sở', CAST(N'2023-10-20' AS Date), CAST(N'2024-01-30' AS Date), 20, 24, N'ha@gmail.com', N'tung2@gmail.com', N'P109', N'T4, T5', CAST(N'20:00:09' AS Time), CAST(N'22:00:09' AS Time), 0)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (22, 36, N'IELTS Masterclass', CAST(N'2023-10-10' AS Date), CAST(N'2024-01-01' AS Date), 20, 20, N'ha@gmail.com', N'teacher@gmail.com', N'P202', N'T3, T7 ', CAST(N'20:00:03' AS Time), CAST(N'22:00:03' AS Time), 0)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (23, 35, N'IELTS Beginner', CAST(N'2024-11-30' AS Date), CAST(N'2025-04-30' AS Date), 20, 24, N'le@gmail.com', N'huyen@gmail.com', N'P205', N'T3, T7', CAST(N'07:00:45' AS Time), CAST(N'09:00:45' AS Time), 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (24, 39, N'IELTS 3.5-4.5', CAST(N'2024-09-11' AS Date), CAST(N'2024-12-31' AS Date), 15, 35, N'staff@gmail.com', N'teacher@gmail.com', N'P303', N'T4, T6', CAST(N'17:30:36' AS Time), CAST(N'19:30:36' AS Time), 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (25, 41, N'Lớp IELTS Prep 01', CAST(N'2024-11-20' AS Date), CAST(N'2025-02-04' AS Date), 20, 28, N'Leminhan@gmail.com', N'teacher@gmail.com', N'P206', N'T4, T5', CAST(N'17:00:09' AS Time), CAST(N'19:00:09' AS Time), 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (27, 41, N'IELTS Prep for Beginners 1', CAST(N'2024-07-22' AS Date), CAST(N'2024-11-27' AS Date), 15, 28, N'le@gmail.com', N'nguyenthanhlam@gmail.com', N'P201', N'T3, T7', CAST(N'18:00:06' AS Time), CAST(N'20:00:06' AS Time), 0)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [status]) VALUES (28, 35, N'IELTS Basic 001', CAST(N'2024-06-20' AS Date), CAST(N'2024-11-25' AS Date), 15, 24, N'ha@gmail.com', N'teacher@gmail.com', N'P109', N'T2, T4', CAST(N'08:00:14' AS Time), CAST(N'10:00:14' AS Time), 0)
SET IDENTITY_INSERT [dbo].[Classes] OFF
GO
SET IDENTITY_INSERT [dbo].[Contact] ON 

INSERT [dbo].[Contact] ([contact_id], [email], [name], [request_date], [response_date], [status], [request_message], [response_message]) VALUES (3, N'john@gmail.com', N'John', CAST(N'2024-10-29' AS Date), NULL, NULL, N'Tôi là John, và tôi gặp khó khăn trong việc đăng nhập vào tài khoản của mình. Tôi đã thử reset mật khẩu nhưng vẫn không thể đăng nhập được. Rất mong được sự trợ giúp từ các bạn để tôi có thể truy cập vào tài khoản của mình một lần nữa.', NULL)
INSERT [dbo].[Contact] ([contact_id], [email], [name], [request_date], [response_date], [status], [request_message], [response_message]) VALUES (4, N'le2@gmail.com', N'Lê Quốc Toản', NULL, CAST(N'2024-11-15' AS Date), 1, N'Tôi muốn biết thêm về khóa học IELTS Hè cấp tốc', N'Luyện thi IELTS cấp tốc trong thời gian ngắn, đảm bảo nắm vững kiến thức, tăng trình độ nhanh chóng chỉ sau 36 giờ học. Cánh cửa du học rộng mở, điểm IELTS càng cao thì cơ hội săn học bổng toàn phần càng lớn. Cơ hội bước vào các trường THPT chuyên dễ dàng hơn. Cơ hội được xét tuyển riêng vào các trường Đại học lớn.')
INSERT [dbo].[Contact] ([contact_id], [email], [name], [request_date], [response_date], [status], [request_message], [response_message]) VALUES (5, N'student@gmail.com', N'Lê Bảo Bảo', NULL, CAST(N'2024-11-15' AS Date), 1, N'Tôi thắc mắc về các quy tắc trong lớp học của trung tâm mình', N'Bạn có thể đọc thêm ở trang Hỗ trợ nhé!')
INSERT [dbo].[Contact] ([contact_id], [email], [name], [request_date], [response_date], [status], [request_message], [response_message]) VALUES (6, N'student@gmail.com', N'Lê Bảo Bình', CAST(N'2024-11-16' AS Date), NULL, NULL, N'Trung tâm có yêu cầu thi đầu vào không?', NULL)
INSERT [dbo].[Contact] ([contact_id], [email], [name], [request_date], [response_date], [status], [request_message], [response_message]) VALUES (7, N'student@gmail.com', N'Lê Bảo Bình', CAST(N'2024-11-19' AS Date), NULL, NULL, N'Em muốn tìm hiểu về khóa học của trung tâm', NULL)
SET IDENTITY_INSERT [dbo].[Contact] OFF
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (31, N'https://ktdcgroup.vn/wp-content/uploads/2023/04/WEB_THUMNAIL-POST-Thi%E1%BA%BFt-k%E1%BA%BF-KV-kh%C3%B3a-IELTS-h%C3%A8_Update19042023.jpg', N'Khóa IELTS Hè Cấp Tốc', N'Mô tả khóa IELTS Hè Cấp Tốc', 3500000, 0, CAST(N'2023-05-26' AS Date), 20, N'IFD', N'Trung bình')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (35, N'https://taec.edu.vn/wp-content/uploads/2023/08/1-II-0-5.0-01.jpg', N'Khoá Học IELTS Introduction', N'Mô tả khóa học IELTS Introduction', 2000000, 1, CAST(N'2023-05-26' AS Date), 24, N'ISD', N'Mới bắt đầu')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (36, N'https://media.zim.vn/65efcd84f0e11b4c376e7a85/kinh-nghiem-luyen-thi-ielts-cap-toc.jpg', N'Khóa học IELTS cấp tốc', N'Khóa học IELTS cấp tốc được thiết kế dành cho những ai cần cải thiện điểm số IELTS trong thời gian ngắn. Chương trình bao gồm các kỹ năng nghe, nói, đọc, viết và cung cấp cho học viên những chiến lược hiệu quả để làm bài thi.

Mục Tiêu Khóa Học:
- Nâng cao kỹ năng Nghe, Nói, Đọc, Viết để đạt điểm cao trong kỳ thi IELTS.
- Cung cấp kiến thức về cấu trúc đề thi và các loại câu hỏi thường gặp.
Hướng dẫn cách quản lý thời gian và áp dụng kỹ thuật làm bài hiệu quả.', 3000000, 1, CAST(N'2023-06-12' AS Date), 20, N'IOI', N'Nâng cao')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (37, N'https://ielts.roadtoabroad.co.in/wp-content/uploads/2019/09/IELTS-Writing-task1-paid-course-1024x570.jpg', N'Khóa học IELTS Writing Masterclass', N'Mô tả khóa học IELTS Online Band 5.5', 4500000, 1, CAST(N'2023-06-05' AS Date), 30, N'PIO', N'Trung bình')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (38, N'https://i.ytimg.com/vi/1VAIllgsFi0/maxresdefault.jpg', N'Khoá học IELTS GENERAL', N'Mô tả khóa học IELTS GENERAL', 7000000, 1, CAST(N'2023-05-26' AS Date), 24, N'ISF', N'Trung bình')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (39, N'https://res.edu.vn/wp-content/uploads/2022/02/lo-trinh-hoc-ielts-cho-nguoi-mat-goc.jpg', N'Khóa học IELTS Zero to Hero', N'Mô tả khóa học IELTS cho người mất gốc', 10000000, 1, CAST(N'2023-05-30' AS Date), 35, N'ISR', N'Nâng cao')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (41, N'https://clccorp.vn/wp-content/uploads/2023/12/KHOA-IELTS-PREP.png', N'Khóa học IELTS Prep', N'Thời gian: 28 buổi
Cam kết đầu ra ít nhất 6.0 IELTS bằng văn bản pháp lý
Luyện tập bài thi IELTS theo chuyên đề kĩ năng toàn diện', 3000000, 1, CAST(N'2024-11-16' AS Date), 28, N'PRP', N'Trung bình')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (42, N'https://i.ytimg.com/vi/5bgzu9tx0hA/maxresdefault.jpg', N'Khóa học IELTS Express', N'Khóa học cho người học viên trung cấp', 10000000, 1, CAST(N'2024-11-19' AS Date), 30, N'IES', N'Trung bình')
SET IDENTITY_INSERT [dbo].[Course] OFF
GO
SET IDENTITY_INSERT [dbo].[Feedback] ON 

INSERT [dbo].[Feedback] ([feedback_id], [email], [star], [message], [course_id], [class_id]) VALUES (1, N'student@gmail.com', 4, N' Hơi Okay', 35, 1)
SET IDENTITY_INSERT [dbo].[Feedback] OFF
GO
SET IDENTITY_INSERT [dbo].[GRADES] ON 

INSERT [dbo].[GRADES] ([grade_id], [student_email], [class_id], [grade_name], [listening], [reading], [writing], [speaking], [overall], [created_at], [updated_at]) VALUES (1, N'student@gmail.com', 1, N'Điểm cuối khóa', CAST(9.0 AS Decimal(3, 1)), CAST(7.0 AS Decimal(3, 1)), CAST(5.0 AS Decimal(3, 1)), CAST(5.0 AS Decimal(3, 1)), CAST(6.5 AS Decimal(3, 1)), CAST(N'2024-11-14' AS Date), CAST(N'2024-11-23' AS Date))
INSERT [dbo].[GRADES] ([grade_id], [student_email], [class_id], [grade_name], [listening], [reading], [writing], [speaking], [overall], [created_at], [updated_at]) VALUES (2, N'tram@gmail.com', 1, N'Điểm cuối khóa', CAST(6.5 AS Decimal(3, 1)), CAST(7.5 AS Decimal(3, 1)), CAST(6.0 AS Decimal(3, 1)), CAST(6.0 AS Decimal(3, 1)), CAST(6.5 AS Decimal(3, 1)), CAST(N'2024-11-23' AS Date), NULL)
SET IDENTITY_INSERT [dbo].[GRADES] OFF
GO
SET IDENTITY_INSERT [dbo].[Payment] ON 

INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (1, N'Chuyển khoản', 16, 36, N'student@gmail.com', CAST(3000000 AS Decimal(18, 0)), CAST(N'2024-11-12' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (4, N'Chuyển khoản', 1, 35, N'student@gmail.com', CAST(2000000 AS Decimal(18, 0)), CAST(N'2024-11-12' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (5, N'Tiền mặt', 18, 35, N'student@gmail.com', CAST(2000000 AS Decimal(18, 0)), CAST(N'2024-11-16' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (6, N'Chuyển khoản', 1, 35, N'tram@gmail.com', CAST(2000000 AS Decimal(18, 0)), CAST(N'2024-11-15' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (7, N'Chuyển khoản', 20, 31, N'tram@gmail.com', CAST(3500000 AS Decimal(18, 0)), CAST(N'2024-11-15' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (8, N'Chuyển khoản', 21, 38, N'toan@gmail.com', CAST(7000000 AS Decimal(18, 0)), CAST(N'2024-11-15' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (9, N'Tiền mặt', 2, 31, N'bao@gmail.com', CAST(3500000 AS Decimal(18, 0)), CAST(N'2024-11-16' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (10, N'Tiền mặt', 19, 36, N'hang@gmail.com', CAST(3000000 AS Decimal(18, 0)), CAST(N'2024-11-16' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (11, N'Chuyển khoản', 24, 39, N'hang@gmail.com', CAST(10000000 AS Decimal(18, 0)), CAST(N'2024-11-15' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (12, N'Tiền mặt', 16, 35, N'student@gmail.com', CAST(2000000 AS Decimal(18, 0)), CAST(N'2024-11-16' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (13, N'Chuyển khoản', 19, 36, N'student@gmail.com', CAST(3000000 AS Decimal(18, 0)), CAST(N'2024-11-19' AS Date))
INSERT [dbo].[Payment] ([payment_id], [payment_method], [class_id], [course_id], [student_email], [amount], [payment_date]) VALUES (14, N'Chuyển khoản', 27, 41, N'hang@gmail.com', CAST(3000000 AS Decimal(18, 0)), CAST(N'2024-11-23' AS Date))
SET IDENTITY_INSERT [dbo].[Payment] OFF
GO
SET IDENTITY_INSERT [dbo].[Registration_Form] ON 

INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (8, N'student@gmail.com', 17, 35, 1, N'', CAST(N'2024-11-12' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (12, N'student@gmail.com', 16, 35, 4, NULL, CAST(N'2024-11-12' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (13, N'student@gmail.com', 17, 35, 2, NULL, CAST(N'2024-11-12' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (14, N'student@gmail.com', 1, 35, 4, NULL, CAST(N'2024-11-12' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (15, N'student@gmail.com', 18, 35, 4, NULL, CAST(N'2024-11-14' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (16, N'bao@gmail.com', 2, 31, 4, NULL, CAST(N'2024-11-14' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (17, N'hang@gmail.com', 19, 36, 4, NULL, CAST(N'2024-11-15' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (18, N'tram@gmail.com', 1, 35, 4, NULL, CAST(N'2024-11-15' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (19, N'tram@gmail.com', 20, 31, 2, NULL, CAST(N'2024-11-15' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (20, N'toan@gmail.com', 21, 38, 2, NULL, CAST(N'2024-11-15' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (21, N'toan@gmail.com', 19, 36, 2, NULL, CAST(N'2024-11-15' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (22, N'hang@gmail.com', 24, 39, 2, NULL, CAST(N'2024-11-15' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (23, N'student@gmail.com', 19, 36, 4, NULL, CAST(N'2024-11-19' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (24, N'tung@gmail.com', 24, 39, 1, NULL, CAST(N'2024-11-20' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (25, N'quyen@gmail.com', 1, 35, 3, N'Lớp học đã kết thúc', CAST(N'2024-11-20' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (26, N'hang@gmail.com', 27, 41, 4, NULL, CAST(N'2024-11-23' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (27, N'quyen@gmail.com', 28, 35, 1, NULL, CAST(N'2024-11-23' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (28, N'tung@gmail.com', 28, 35, 1, NULL, CAST(N'2024-11-23' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (29, N'toan@gmail.com', 18, 31, 1, NULL, CAST(N'2024-11-23' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (30, N'quyen@gmail.com', 18, 31, 1, NULL, CAST(N'2024-11-24' AS Date))
INSERT [dbo].[Registration_Form] ([id], [student_email], [class_id], [course_id], [status], [response], [created_date]) VALUES (31, N'bao@gmail.com', 18, 31, 1, NULL, CAST(N'2024-11-24' AS Date))
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
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (31, N'bao@gmail.com', CAST(N'2024-11-16' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (31, N'tram@gmail.com', CAST(N'2024-11-16' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (35, N'student@gmail.com', CAST(N'2024-10-29' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (35, N'tram@gmail.com', CAST(N'2024-11-16' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (36, N'hang@gmail.com', CAST(N'2024-11-16' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (36, N'student@gmail.com', CAST(N'2024-11-11' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (38, N'student@gmail.com', CAST(N'2024-10-29' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (38, N'toan@gmail.com', CAST(N'2024-11-16' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (39, N'hang@gmail.com', CAST(N'2024-11-16' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (41, N'hang@gmail.com', CAST(N'2024-11-23' AS Date))
GO
ALTER TABLE [dbo].[Account] ADD  DEFAULT ((1)) FOR [active_status]
GO
ALTER TABLE [dbo].[Account]  WITH CHECK ADD FOREIGN KEY([role_id])
REFERENCES [dbo].[Role] ([role_id])
GO
ALTER TABLE [dbo].[Account]  WITH CHECK ADD FOREIGN KEY([role_id])
REFERENCES [dbo].[Role] ([role_id])
GO
ALTER TABLE [dbo].[Class_Member]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Class_Member]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Class_Member]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Class_Member]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Classes]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Classes]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Classes]  WITH NOCHECK ADD FOREIGN KEY([staff_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Classes]  WITH NOCHECK ADD FOREIGN KEY([staff_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Classes]  WITH NOCHECK ADD FOREIGN KEY([teacher_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Classes]  WITH NOCHECK ADD FOREIGN KEY([teacher_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Feedback]  WITH CHECK ADD FOREIGN KEY([email])
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
ALTER TABLE [dbo].[GRADES]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[GRADES]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[GRADES]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Registration_Form]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Registration_Form]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Registration_Form]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Registration_Form]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Registration_Form]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Registration_Form]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[User_Course]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[User_Course]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[User_Course]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[User_Course]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[Account] ([email])
GO
