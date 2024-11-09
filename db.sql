USE [Jlearning]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 11/10/2024 2:34:56 AM ******/
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
/****** Object:  Table [dbo].[Blog]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Blog](
	[blog_avatar_url] [nvarchar](max) NULL,
	[blog_id] [int] IDENTITY(1,1) NOT NULL,
	[blog_category_id] [int] NULL,
	[created_date] [date] NOT NULL,
	[blog_name] [nvarchar](100) NULL,
	[blog_description] [nvarchar](500) NULL,
	[status] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[blog_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Blog_Category]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Blog_Category](
	[blog_category_id] [int] IDENTITY(1,1) NOT NULL,
	[name] [nvarchar](200) NULL,
PRIMARY KEY CLUSTERED 
(
	[blog_category_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Blog_Details]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Blog_Details](
	[blog_details_id] [int] IDENTITY(1,1) NOT NULL,
	[header] [nvarchar](200) NULL,
	[description] [nvarchar](max) NULL,
	[blog_img_url] [nvarchar](max) NULL,
	[blog_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[blog_details_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Calendar]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Calendar](
	[calendar_id] [int] IDENTITY(1,1) NOT NULL,
	[class_id] [int] NULL,
	[start_time] [time](7) NOT NULL,
	[end_time] [time](7) NOT NULL,
	[day_of_weeks] [nvarchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[calendar_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Chapter]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Chapter](
	[chapter_id] [int] IDENTITY(1,1) NOT NULL,
	[chapter_name] [nvarchar](200) NULL,
	[description] [nvarchar](500) NULL,
	[course_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[chapter_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Class_Member]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Class_Member](
	[student_email] [nvarchar](100) NOT NULL,
	[class_id] [int] NOT NULL,
	[enrollment_date] [date] NULL,
	[status] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[student_email] ASC,
	[class_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Classes]    Script Date: 11/10/2024 2:34:56 AM ******/
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
/****** Object:  Table [dbo].[Contact]    Script Date: 11/10/2024 2:34:56 AM ******/
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
/****** Object:  Table [dbo].[Course]    Script Date: 11/10/2024 2:34:56 AM ******/
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
/****** Object:  Table [dbo].[Feedback]    Script Date: 11/10/2024 2:34:56 AM ******/
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
/****** Object:  Table [dbo].[GRADES]    Script Date: 11/10/2024 2:34:56 AM ******/
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
/****** Object:  Table [dbo].[Lesson]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lesson](
	[lesson_id] [int] IDENTITY(1,1) NOT NULL,
	[lesson_name] [nvarchar](200) NULL,
	[description] [nvarchar](500) NULL,
	[video_url] [nvarchar](max) NULL,
	[material_url] [nvarchar](max) NULL,
	[chapter_id] [int] NULL,
	[duration] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[lesson_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Lesson_Done]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lesson_Done](
	[lesson_id] [int] NOT NULL,
	[email] [nvarchar](100) NOT NULL,
	[course_id] [int] NOT NULL,
 CONSTRAINT [PK_Lesson_Done] PRIMARY KEY CLUSTERED 
(
	[lesson_id] ASC,
	[email] ASC,
	[course_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payment]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payment](
	[payment_id] [int] IDENTITY(1,1) NOT NULL,
	[email] [nvarchar](100) NULL,
	[course_id] [int] NULL,
	[amount] [float] NULL,
	[created_date] [date] NULL,
	[course_name] [nvarchar](max) NULL,
	[phone] [nvarchar](10) NULL,
	[address] [nvarchar](max) NULL,
	[name] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[payment_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Question]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Question](
	[question_id] [int] IDENTITY(1,1) NOT NULL,
	[description] [nvarchar](200) NULL,
	[answer_1] [nvarchar](200) NULL,
	[answer_2] [nvarchar](200) NULL,
	[answer_3] [nvarchar](200) NULL,
	[answer_4] [nvarchar](200) NULL,
	[correct_answer] [int] NULL,
	[test_id] [int] NULL,
	[explaination] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[question_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Registration_Form]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Registration_Form](
	[student_email] [nvarchar](100) NOT NULL,
	[class_id] [int] NOT NULL,
	[course_id] [int] NOT NULL,
	[status] [int] NULL,
	[created_date] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[student_email] ASC,
	[class_id] ASC,
	[course_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 11/10/2024 2:34:56 AM ******/
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
/****** Object:  Table [dbo].[Students]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Students](
	[student_email] [nvarchar](100) NOT NULL,
	[class_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[student_email] ASC,
	[class_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Support]    Script Date: 11/10/2024 2:34:56 AM ******/
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
/****** Object:  Table [dbo].[Test]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Test](
	[test_id] [int] IDENTITY(1,1) NOT NULL,
	[test_name] [nvarchar](200) NULL,
	[chapter_id] [int] NULL,
	[course_id] [int] NULL,
	[description] [nvarchar](300) NULL,
	[duration] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[test_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Test_Done]    Script Date: 11/10/2024 2:34:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Test_Done](
	[email] [nvarchar](100) NOT NULL,
	[test_id] [int] NOT NULL,
	[course_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[email] ASC,
	[test_id] ASC,
	[course_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Course]    Script Date: 11/10/2024 2:34:56 AM ******/
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
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'nguyenthanhlam@gmail.com', N'Nguyễn Thành Lâm', N'Abc1234!', N'https://img.freepik.com/premium-photo/avatar-anime-boy-with-fire-background-front-profile-face-child-with-flames_967743-602.jpg', N'0385981077', N'Hà Nội', NULL, 1, 3, 1, CAST(N'2001-07-18' AS Date), N'', NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'staff@gmail.com', N'Staff ', N'Abc1234!', NULL, N'039874524', N'Hà Nội', NULL, 0, 2, 1, CAST(N'2001-07-20' AS Date), NULL, NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'student@gmail.com', N'Student', N'Abc1234!', N'https://yt3.googleusercontent.com/ytc/AL5GRJUCfVHiY_T0o_KOKqH85MEsTZoEFs0uE4anTUdN5A=s900-c-k-c0x00ffffff-no-rj', NULL, NULL, NULL, NULL, 4, 1, NULL, NULL, NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'teacher@gmail.com', N'Teacher', N'Abc1234!', N'https://img.freepik.com/premium-photo/cute-3d-boy-avatar-character-hd-8k-wallpaper-stock-photographic-image_949228-28934.jpg', N'035789478', N'Hà Nội', NULL, NULL, 3, 1, CAST(N'2001-07-20' AS Date), NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[Blog] ON 

INSERT [dbo].[Blog] ([blog_avatar_url], [blog_id], [blog_category_id], [created_date], [blog_name], [blog_description], [status]) VALUES (N'https://th.bing.com/th/id/OIP.1uCB9rx8Hf5us3igq7w-2QAAAA?rs=1&pid=ImgDetMain', 11, 2, CAST(N'2023-05-30' AS Date), N'Cách chuyển tên sang tiếng Nhật', N'Chắc hẳn ai học tiếng Nhật đều muốn biết tên tiếng Nhật của mình là gì? tên của mình chuyển sang tiếng Nhật sẽ thành như thế nào? Đặc biệt đối với các bạn làm hồ sơ đi du học, làm hồ sơ xin việc để ứng tuyển vào 1 doanh nghiệp Nhật, hay làm hồ sơ đi lao động tại Nhật, bạn chắc chắn sẽ phải biết cách chuyển tên của mình sang tiếng Nhật một cách chuẩn xác nhất có thể', 1)
INSERT [dbo].[Blog] ([blog_avatar_url], [blog_id], [blog_category_id], [created_date], [blog_name], [blog_description], [status]) VALUES (N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-details-3.png?alt=media&token=2cd378f1-bafd-409f-90bf-5a666ba70ee7', 12, 3, CAST(N'2023-05-17' AS Date), N'Tiếng Nhật có bao nhiêu loại chữ?', N'Là bảng chữ Latinh như tiếng Anh hay tiếng Việt không dấu mà chúng ta sử dụng nên không cần học viết loại này mà chỉ cần quan tâm cách đọc kiểu Nhật. Người ta gọi chữ Latinh này là ローマ字 (Ro-maji).', 1)
INSERT [dbo].[Blog] ([blog_avatar_url], [blog_id], [blog_category_id], [created_date], [blog_name], [blog_description], [status]) VALUES (N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-5.png?alt=media&token=365acb7f-67ac-409b-a4aa-3347cd0ecf4b', 13, 1, CAST(N'0001-01-01' AS Date), N'Đi du lịch Nhật Bản bạn cần biết những văn hóa này', N'Ai cũng biết Nhật Bản là một quốc gia văn minh với nền kinh tế cực kỳ phát triển. Cũng chính vì vậy mà văn hóa Nhật Bản cũng có nhiều đặc biệt.', 1)
INSERT [dbo].[Blog] ([blog_avatar_url], [blog_id], [blog_category_id], [created_date], [blog_name], [blog_description], [status]) VALUES (N'https://firebasestorage.googleapis.com/v0/b/jlearning-90346.appspot.com/o/course%2Fimages%2Fblog-2.png?alt=media&token=dc27295a-0541-43b6-ad2a-5b7db76ee53e', 14, 1, CAST(N'2023-05-25' AS Date), N'Lý do Nhật Bản được gọi là đất nước mặt trời mọc', N'Nhật Bản còn được mọi người biết đến với tên gọi đất nước mặt trời mọc, vậy từ đâu mà đất nước này lại có cái tên gọi như vậy và ngay cả trên quốc kỳ Nhật Bản cũng là biểu tượng hình tròn đỏ của mặt trời.', 1)
INSERT [dbo].[Blog] ([blog_avatar_url], [blog_id], [blog_category_id], [created_date], [blog_name], [blog_description], [status]) VALUES (N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-6.png?alt=media&token=29e3a943-5201-4edf-94d5-358200f0d3c8', 15, 1, CAST(N'2023-05-30' AS Date), N'Đám cưới người Nhật Bản tổ chức như thế nào?', N'Nhật Bản là một quốc gia Châu Á. Do đó, nét văn hóa của Nhật Bản cũng có nét tương đồng giống Việt Nam chúng ta. Tuy nhiên, đám cưới của người Nhật cũng có những điểm riêng và đặc biệt của nó.', 1)
INSERT [dbo].[Blog] ([blog_avatar_url], [blog_id], [blog_category_id], [created_date], [blog_name], [blog_description], [status]) VALUES (N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-3.png?alt=media&token=5b65f563-e844-42dc-bd3f-a6a896019e8d', 16, 2, CAST(N'2023-05-27' AS Date), N'Nhật Bản ra mắt siêu robot mới Lovot', N'Giống như một sinh vật lai giữa chim cú và chim cánh cụt, Lovot được thiết kế để hoạt động trong nhà. Việc của nó chỉ là đi lang thang khắp nơi, nài nỉ bạn ôm nó. Giống như một con thú cưng không cần chăm sóc, Lovot được thiết kế để giúp người sở hữu có thể thư giãn sau một ngày làm việc dài và mệt mỏi.', 1)
INSERT [dbo].[Blog] ([blog_avatar_url], [blog_id], [blog_category_id], [created_date], [blog_name], [blog_description], [status]) VALUES (N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-7.png?alt=media&token=4fbbad4e-9da5-4f46-9837-290b22717d03', 17, 2, CAST(N'2023-05-15' AS Date), N'Nhật Bản đánh bại Iran tại bán kết Asian Cup 2019', N'Đội tuyển Iran được đánh giá rất cao tại Asian Cup 2019 đã bất ngờ thất bại trước Nhật Bản', 1)
SET IDENTITY_INSERT [dbo].[Blog] OFF
GO
SET IDENTITY_INSERT [dbo].[Blog_Category] ON 

INSERT [dbo].[Blog_Category] ([blog_category_id], [name]) VALUES (1, N'Văn hóa Nhật Bản')
INSERT [dbo].[Blog_Category] ([blog_category_id], [name]) VALUES (2, N'Tin tức sự kiện')
INSERT [dbo].[Blog_Category] ([blog_category_id], [name]) VALUES (3, N'Kinh nghiệm học TIếng Nhật')
SET IDENTITY_INSERT [dbo].[Blog_Category] OFF
GO
SET IDENTITY_INSERT [dbo].[Blog_Details] ON 

INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (8, N'Tên người Nhật thì thường được viết bằng chữ Kanji và phiên âm sang Hiragana.ssss', N'Nhật có cách đọc giống với cách phát âm trong tiếng Việt nhất để đọc ra tên chúng ta. Ví dụ từ Nguyên sẽ được chuyển thành từ có cách phát âm gần giống nhất là グエン(Guen- do tiếng Nhật vốn không có chữ Ng), hay như Phương sẽ được chuyển thành フオン(Fuon). Do hệ thống âm của tiếng Nhật với tiếng Việt khác nhau nhiều, hệ thống âm tiếng Nhật không đủ để phiên hết cách từ tiếng Việt nên sẽ có nhiều tên khi phiên âm sang bị trùng nhau như Tân, Tấn, Thắng, Thăng đều được phiên âm thành タン(tan)….v..v..', N'https://firebasestorage.googleapis.com/v0/b/jlearning-90346.appspot.com/o/blog%2Fimages%2Fblog-details-1.png?alt=media&token=79ce4d77-abfd-410c-8124-d138fcc479a4', 11)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (9, N'Hay như chữ Pha : trong tiếng Nhật vốn không có chữ Pha mà chỉ có Fu hay Ha, do vậy phải lấy chữ Fu viết to + chữ a viết nhỏ ファ để tạo ra chữ Pha.', N'Nên hiểu rằng không có quy chuẩn nào để chuyển âm từ Việt sang Nhật, không có khái niệm đúng/ sai nào cụ thể cả, miễn sao khi đọc ra gần giống với phát âm tiếng Việt nhất là được.', N'https://firebasestorage.googleapis.com/v0/b/jlearning-90346.appspot.com/o/blog%2Fimages%2Fblog-details-2.png?alt=media&token=50c8773e-1e69-49e9-8d31-9414f123193b', 11)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (10, N'Cùng tìm hiểu cách chuyển tên từ Việt sang Nhật qua bảng sau nha ^^', N'Tiếng Nhật gồm 3 loại chữ chính thống và 1 loại không chính thống.

     A. Loại không chính thống:

Là bảng chữ Latinh như tiếng Anh hay tiếng Việt không dấu mà chúng ta sử dụng nên không cần học viết loại này mà chỉ cần quan tâm cách đọc kiểu Nhật. Người ta gọi chữ Latinh này là ローマ字 (Ro-maji).', N'https://firebasestorage.googleapis.com/v0/b/jlearning-90346.appspot.com/o/blog%2Fimages%2Fblog-details-3.png?alt=media&token=c23bd3fe-2504-4575-9f33-c48d66e889c1', 11)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (11, N'A. Loại không chính thống:', N'Là bảng chữ Latinh như tiếng Anh hay tiếng Việt không dấu mà chúng ta sử dụng nên không cần học viết loại này mà chỉ cần quan tâm cách đọc kiểu Nhật. Người ta gọi chữ Latinh này là ローマ字 (Ro-maji).', N'https://firebasestorage.googleapis.com/v0/b/jlearning-90346.appspot.com/o/blog%2Fimages%2Fblog-details-4.png?alt=media&token=f7581d7b-c309-470c-92cf-9a94bdb6125b', 11)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (12, N'A. Loại không chính thống', N'Là bảng chữ Latinh như tiếng Anh hay tiếng Việt không dấu mà chúng ta sử dụng nên không cần học viết loại này mà chỉ cần quan tâm cách đọc kiểu Nhật. Người ta gọi chữ Latinh này là ローマ字 (Ro-maji)', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-details-4.png?alt=media&token=cbc5625f-abaa-48f5-891b-ed809153b521', 12)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (13, N'B.  3 loại chính thống:', N'Ba loại chính lần lượt là Kanji, Hiragana và Katakana.
Trong 1 câu tiếng Nhật có thể có cả 3 loại chữ xuất hiện.

Rốt cuộc tại sao lại cần nhiều loại chữ như vậy nhỉ. Cùng tìm hiểu chức năng từng loại chữ nha ^^', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-details-5.png?alt=media&token=609aaa44-8c4e-45cc-a75d-80ccb88e9d9a', 12)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (14, N'1.  Chữ Kanji (Chữ Hán):', N'Trong 3 loại chữ thì Hiragana và Katakana có bảng chữ riêng để học thuộc, mỗi bảng chữ gồm 46 chữ cái. Kanji thì không đơn giản như vậy vì trên thực tế là không hề có bảng chữ Kanji. Chính người Nhật cũng phải học Kanji từ tiểu học lên đến đại học. Nếu không biết Kanji người Nhật cũng chẳng thể đọc nổi báo Nhật. Chữ Kanji được du nhập từ Hán tự Trung Quốc bởi các nhà sư. Hiện nay vẫn được duy trì khoảng 1945 Hán tự trong tiếng Nhật (Chữ Kanji là kiểu chữ Phổn thể- mẫu chữ cũ của Trung Quốc)

Người Việt xưa cũng dùng Hán Nôm nhưng nay đã loại bỏ gần như hoàn toàn (chỉ còn thấy trong các câu đối, lễ bái..) và chỉ dùng chữ Quốc ngữ hiện tại. Vậy tại sao Nhật không bỏ chữ Hán đi mà vẫn duy trì nhỉ, cùng xem ví dụ sau nhé:

にわにはにわにわとりがいます。(Viết bằng Hiragana)

Niwanihaniwaniwatorigaimasu.     (Phiên âm sang Ro-maji)

Các bạn thử đọc câu trên xem ạ :p Các bạn đã bị méo mồm khi đọc chưa ^^. Lại còn không hiểu như này thì từ chữ cái nào đến chữ cái nào là một từ nữa @@ Nếu có Kanji và nếu bạn học Kanji thì lại rất đơn giản như sau:

庭には二羽  鶏がいます。

Nếu bạn là người biết tiếng Nhật, đọc được Kanji thì câu trên nhìn rất nhanh ra phần nghĩa của các chữ Hán, rất dễ để cắt được từ đâu đến đâu là một từ vựng hay đâu là trợ từ trong công thức.

Chữ 庭 (にわ) đầu tiên có nghĩa là vườn, đọc là niwa.

2 chữ tiếp theo viết là niha には nhưng lại đọc là niwa vì khi đó は đóng vai trò là trợ từ trong câu, dịch cụm庭にはđó là ở trong vườn

2 chữ Hán sau đó二羽(đọc là にわ-niwa) thì có nghĩa là 2 con (cách đếm gà vịt)

Còn 1 cặp にわ (niwa) cuối cùng là にわ trong 鶏（にわとり-niwatori）có nghĩa là con gà

Vậy khi đó – khi đã học Kanji rồi thì việc đọc cũng dễ dàng để cắt chữ mà về phần nghĩa của câu cũng dịch nhanh được thành “Ở trong vườn có 2 con gà”.

è Vậy vai trò đầu tiên của chữ Hán chính là để dễ dàng đọc, hiểu câu nhanh hơn. Nhìn thoát ý nhanh hơn.

Không chỉ vậy, trong tiếng Nhật còn có rất nhiều từ đồng âm khác nghĩa:

Ví dụ như cùng phát âm là “Kaeru” nhưng tùy theo chữ Hán khác lại có nghĩa khác nhau:

·         帰る：trở về

·         変える：thay đổi

·         買える：có thể mua

·         蛙：con ếch

Hay như cùng phát âm là  “Jishin” nhưng lại có tận 6 nghĩa khác nhau:

·         自身：bản thân

·         地震：động đất

·         自信：tự tin

·         磁針：kim nam châm (la bàn)

·         時針：kim giờ

·         磁心：từ tính (nam châm)

Cùng 1 phát âm nhưng có thể nhận diện nghĩa nhanh chóng qua chữ Hán

è Vậy vai trò thứ 2 của chữ Hán chính là giúp phân biệt rõ các từ đồng âm để tránh nhầm nghĩa của câu.

Chữ Hán xuất hiện ở mọi nơi, nếu không học chữ Hán sẽ không thể thuận lợi hay dễ dàng tồn tại được ở Nhật đâu các bạn nhé. Điều quan trọng nữa là trong tất cả các bài thi năng lực tiếng Nhật thì đều có chữ Hán cả, bạn không học chữ Hán thì sẽ ra sao chắc các bạn tự biết rồi nhé ^^

 

Giờ cùng tìm hiểu 2 bảng chữ chuẩn chữ do người Nhật tạo ra nào ^^ Gọi là 2 bảng nhưng thực ra chỉ là học 2 cách viết chữ thôi, còn cách đọc, cách ghép chữ thì tương tự nhau các bạn ạ. Chữ Hiragana có nét viết mềm mại nên còn được gọi là “chữ Mềm”, còn chữ Katakana nét viết cứng hơn nên còn được gọi là “chữ Cứng”', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-details-6.png?alt=media&token=d6e16e55-c629-4472-ad0a-dbbb9048cfe5', 12)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (15, N'2. Chữ Hiragana (Chữ mềm):', N'   Bảng chữ Hiragana hay còn gọi là bảng chữ mềm trước là 50 chữ nay lược còn tổng 46 chữ. Đây là bảng chữ chính nhất trong tiếng Nhật.

 

·         Kanji dùng để viết 1 vài danh từ, động từ, tính từ có thể viết bằng chữ Hán nhưng không thể hiện được thì/ thể của các từ đó. Do đó, Hiragana ra đời để viết các từ gốc Nhật, biểu thị ngữ pháp như thể hiện thì, thể của từ, viết liên từ, phó từ, trợ từ ..v..v', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-details-7.png?alt=media&token=1dd6306f-ced9-4f4e-ab8f-136907f66b67', 12)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (23, N'Không nhận tiền tip', N'“Phục vụ như người Nhật” là câu nói chỉ sự chu đáo, tận tình trong phong cách làm dịch vụ của người Nhật. Hơn nữa, ở Nhật các hóa đơn trong nhà hàng, khách sạn đã tính bao gồm thêm chi phí dịch vụ phát sinh.', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-details-8.png?alt=media&token=013a98ae-2333-4e9d-96fc-adf8d59bef33', 13)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (25, N'Không giữ cửa cho người khác', N'Bạn đừng bất ngờ khi ở Nhật người khác không có thói quen giữ cửa cho người đi sau. Họ không có thói quen này, nên kể cả việc lên xuống taxi bạn cũng nên chủ động mở và đóng cửa. Thậm chí, nhiều người dân Nhật sẽ bất ngờ nếu họ được bạn giữ mở cửa đấy!', N'', 13)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (26, N'Bỏ giày dép ra ngoài cửa', N'Nếu bạn đã từng tìm hiểu qua văn hóa Hàn, thì sẽ nhận ra một nét văn hóa Nhật Bản khá giống nhau. Đó là trước khi bước vào một nhà hàng, quán ăn, hay vào nhà một người Nhật bạn phải để dép bên ngoài và hãy chú ý, nếu có giá dép thì đặt lên giá thật gọn gàng.', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/blog%2Fimages%2Fblog-details-10.png?alt=media&token=69f081db-3d2b-4afe-ae50-7b514d468745', 13)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (27, N'Nhật Bản còn có các mỹ danh “xứ sở anh đào”,', N'Được biết  đến với các mỹ danh “ đất nước mặt trời mọc” “ xứ sở hoa anh đào” “ xứ phù tang”. Nhật bản luôn là một điều bí ẩn, khơi gợi sự tìm tòi, khám phá trong mỗi người. Mỗi một tên gọi lại mang một một ý nghĩa, gắn liền với đất nước con người nơi đây. Dưới đây chúng ta sẽ cùng tìm  hiểu rõ hơn về tên gọi đất nước Nhật bản.

Theo Bách khoa toàn thư mở Wikipedia thì tên "Nhật Bản" là viết theo theo âm Hán. Hai chữ "Nhật Bản" có nghĩa là "gốc của Mặt Trời" và như thế, được hiểu là "đất nước Mặt Trời mọc".

Nằm ở cực Đông của Châu Á nên  Nhật Bản cũng là nước đầu tiên nhìn thấy Mặt trời mọc vào mỗi sớm. Tổ tiên của họ là nữ thần Mặt Trời Amaterasu (Thái dương thần nữ). Không chỉ biết đến với loài hoa anh đào, Nhật Bản còn được gọi là “ đất nước hoa cúc”. Những bông hoa cúc 16 cánh xòe ra giống như Mặt Trời đang tỏa chiếu là biểu tượng của Hoàng gia và Quốc huy Nhật Bản hiện nay.

Nhật Bản còn có các mỹ danh “xứ sở anh đào”, vì loài hoa này trải dài khắp dọc đất nước, những cánh hoa thoắt nở thoắt tan, được người Nhật yêu thích, phản ánh tinh thần nhạy cảm, yêu cái đẹp.

Phù Tang cũng là một trong những tên gọi khi nhắc tời Nhật Bản. Cây phù tang thực chất là loại cây dâu. Theo truyền thuyết cổ phương Đông có cây dâu rỗng lòng gọi là Phù Tang hay Khổng Tang, là nơi thần Mặt Trời nghỉ dưỡng trước khi cưỡi xe lửa du hành ngang qua bầu trời từ Đông sang Tây, do đó Phù Tang hàm nghĩa văn chương chỉ nơi Mặt Trời mọc.', N'', 14)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (28, N'Đám cưới của người Nhật – Lễ cưới chính thức', N'Bài viết này chúng ta cùng nhau đi tìm hiểu để xem người Nhật Bản tổ chức đám cưới như thế nào nhé. Cũng giống như phong tục cưới hỏi của người Việt Nam thuở trước. Hôn nhân của nam và nữ có 2 loại:

+ Hôn nhân sắp đặt: Do mai mối mà có cuộc hôn nhân đó.
+ Hôn nhân tự do: Là do 2 bên cùng yêu thương nhau từ trước rồi tiến đến hôn nhân.

Xem ngày cưới
Người Nhật cũng khá mê tín như người Việt và người Nhật đều rất quan trọng ngày tổ chức hôn lễ. Vì nếu lựa chọn được ngày tốt, thì họ tin rằng không chỉ có hôn nhân hạnh phúc bền vững, con cái đề huề. Mà, nó còn giúp cho công việc sau này của cặp vợ chồng trẻ đó được thuận buồm xuôi gió cũng như khi mua đất xây nhà…

Do vậy, ngày cưới được cả 2 bên xem xét rất kỹ lưỡng. Riêng điều này rất giống với Việt Nam và đều có chung phong tục xem ngày cưới. Tất nhiên, mục đích xem ngày tốt hay xấu này chỉ đi đến điều cuối cùng là: Hạnh phúc lứa đôi được trọn vẹn và xua tan đi những điều xấu không may mắn.

Trước khi làm lễ cưới chính thức
Trước khi làm lễ cưới chính thức, nhà gái sẽ có bữa liên hoan chia tay con gái của mình. Bữa tiệc liên hoàn này, cô dâu không chỉ chia ta gia đình, chia tay họ hàng mà còn chia tay cả hàng xóm nữa. Tất nhiên, cô dâu sẽ nhận được những lời cầum chúc về đám cưới trọn vẹn và hôn nhân viên mãn.

Để bước vào lễ cưới chính thức, người Nhật và người Việt đều dành trang phục đặc biệt cho cô dâu và chú rể. Nếu như ở Việt Nam, trước kia trang phục cưới truyền thống của cô dâu chính là chiếc áo dài. Còn Nhật Bản, thì cô dâu sẽ mặc kimono trắng và đội trên đầu chiếc mũ trắng trùm kín đầu có tên là tsuno-kakushi.

Bạn sẽ thấy rằng, đám cưới của người Nhật sẽ không khác là mấy so với người Việt chúng ta. Bởi cả người Việt lẫn người Nhật đều mang trong mình dòng máu của người Châu Á.', N'', 15)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (29, N'Lovot là đứa con tinh thần của Kaname Hayashi', N'Giống như một sinh vật lai giữa chim cú và chim cánh cụt, Lovot được thiết kế để hoạt động trong nhà. Việc của nó chỉ là đi lang thang khắp nơi, nài nỉ bạn ôm nó. Giống như một con thú cưng không cần chăm sóc, Lovot được thiết kế để giúp người sở hữu có thể thư giãn sau một ngày làm việc dài và mệt mỏi.

Lovot là đứa con tinh thần của Kaname Hayashi, một nhà cựu thiết kế và phát triển xe đua công thức một. Ông cũng từng làm việc trong dự án robot Pepper của tỷ phú lừng danh Masayoshi Son.

"Con robot này chẳng thể làm gì giúp bạn. Trên thực tế, nó còn có thể gây vướng chân. Mọi thứ về con robot này là nó được thiết kế để đốn tim bạn", Hayashi, nhà phát triển Lovot, nhận định.

Hayashi bắt đầu xây dựng Groove X Inc. ba năm trước với mục tiêu làm ra và bán những con robot thân thiện, chẳng hạn như R2-D2 hay Doraemon. Bằng việc rút kinh nghiệm từng những thiết kế trước và tăng cường trí tuệ nhân tạo, Hayashi đánh cược sản phẩm của mình sẽ thành công khi những người khác thất bại.

Lovot không thể nói nhưng nó có thể tạo ra những âm thanh như tiếng mèo kêu hoặc tiếng chim hót. Tuy nhiên, nó không thể tương tác giống như các chúng ta làm với Siri trên iPhone. Robot cao 40 cm này cũng không thể phát nhạc hay kết nối với lịch trình của bạn vì chó và mèo mà bạn nuôi cũng không làm những điều đó.



Tuy nhiên, điểm nhấn của nó là đôi mắt, với những cơ thế hiển thị đầy cảm xúc. Trong khi đó, nó được trang bị hàng loạt cảm biến với phần cứng mạnh thường được dùng cho các dòng xe tự lái. Điều đó cho phép Lovot có thể nhận thức được những gì diễn ra xung quanh và hành động giống những gì chủ nhân cua rnos mong đợi.

Theo Hayashi, chip của Lovot là loại thường được dùng trong công nghiệp, cho phép nó tự học và điều khiển chính xác các cảm biết của robot. Theo Hayashi, Lovot thông minh hơn một chú chuột Hamster.

Trong khi đó, nhiệt lượng tỏa ra của robot được tính toán chính xác nhằm giúp nó "ấm áp" như một con người. Với trọng lượng khoảng 3kg, Lovot có cân nặng bằng một em bé sơ sinh và phù hợp để bế ẵm. Hơn 50 cảm biến khiến nó rất thông minh. Nếu bạn đối xử thô bạo với nó, nó sẽ nhớ và tránh xa bạn. Ngược lại, bạn ôm ấp nó, nó sẽ ngủ trên đùi bạn.

Lovot cũng trang bị 3 camera 180 độ, cho phép đo chiều sâu và cả nhiệt độ. Nhờ những máy quay này, nó có thể lập bản đồ môi trường xung quanh, nhớ 1.000 người và phân biệt 100 người cùng lúc.

Tuy nhiên, sản phẩm này không hề rẻ. Nó có giá 3.000 USD nhưng cho phép trả góp hàng tháng với 90 USD/tháng. Công ty của Hayashi dự kiến sẽ bán robot này vào cuối năm tới, chủ yếu tập trung vào phụ nữ và người già.', N'', 16)
INSERT [dbo].[Blog_Details] ([blog_details_id], [header], [description], [blog_img_url], [blog_id]) VALUES (30, N'Đội tuyển Iran được đánh giá rất cao tại Asian Cup 2019', N'Thậm chí, khi đối đầu “Samurai xanh”, Iran tiếp tục được xếp cửa trên. Nhật Bản không chơi quá tưng bừng từ đầu giải. Thêm nữa, trận thắng chật vật trước đội tuyển Việt Nam ở tứ kết càng khiến sức mạnh của đội bóng từng 4 lần vô địch Asian Cup bị đặt dấu hỏi.

Thế nhưng Iran lại thi đấu vô cùng thất vọng. Chính xác hơn, đội bóng của HLV Queiroz sai lầm khi đánh giá thấp Nhật Bản. Họ gặp bế tắc, nôn nóng và vỡ trận trước lối chơi lỳ lợm, giàu tính kỷ luật của “Samurai xanh”. Tỷ số 0-3 thực sự là cú sốc cho người hâm mộ Iran.

Tại Việt Nam, khi chứng kiến trận bán kết, nhiều người hâm mộ cũng không dám tin vào kết quả. Việt Nam từng đối đầu trực tiếp với cả 2 đội tại Asian Cup 2019 nên lập tức đã có nhiều so sánh trên mạng xã hội.

Có không ít cư dân mạng bày tỏ quan điểm tiếc nuối cho Iran bởi Nhật Bản quá khôn ngoan. Cho đến tận bán kết, đội bóng áo xanh vẫn giấu bài và có cảm giác họ vẫn chưa bung hết sức.

Ngược lại, cũng có nhiều ý kiến châm chọc Iran, thậm chí cho rằng Iran không bằng Việt Nam nếu lấy Nhật Bản là thước đo. Tại tứ kết, thầy trò HLV Park Hang Seo chỉ chịu thua “Samurai xanh” 1 bàn duy nhất từ chấm phạt đền. Vì thế, có tài khoản facebook còn hóm hỉnh suy ra Việt Nam đã thắng Iran 2-0.

Tuy nhiên có lẽ đây chỉ là những bình luận mang tính vui đùa bởi thực tế sự chênh lệch giữa ĐT Việt Nam và ĐT Iran đã được thể hiện rõ qua cuộc chạm trán giữa 2 đội ở vòng bảng (Iran thắng 2-0).', N'', 17)
SET IDENTITY_INSERT [dbo].[Blog_Details] OFF
GO
SET IDENTITY_INSERT [dbo].[Chapter] ON 

INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (36, N'Chương 1', N'Nhập môn', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (37, N'Chương 2', N'Giới thiệu về tên, tuổi, quê quán, nghề nghiệp', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (38, N'Chương 3', N'Giới thiệu về đồ vật', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (39, N'Chương 4', N'Giới thiệu về địa điểm', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (40, N'Chương 5', N'Cách nói về thời gian thực hiện hành động', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (41, N'Chương 6', N'Cách nói về sự di chuyển', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (42, N'Chương 7', N'Miêu tả hành động', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (43, N'Chương 1', N'Thể khả năng', 35)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (44, N'Chương 2', N'Mẫu câu trạng thái với tự động từ', 35)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (45, N'Chương 8', N'Mô tả 8', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (46, N'Chương 9', N'Mô tả 9', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (47, N'Chương 10', N'Mô tả 10', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (48, N'Chương 11', N'Mô tả 11', 31)
INSERT [dbo].[Chapter] ([chapter_id], [chapter_name], [description], [course_id]) VALUES (52, N'Chương 1', N'Mô tả 1', 39)
SET IDENTITY_INSERT [dbo].[Chapter] OFF
GO
INSERT [dbo].[Class_Member] ([student_email], [class_id], [enrollment_date], [status]) VALUES (N'student@gmail.com', 1, CAST(N'2024-11-09' AS Date), 1)
GO
SET IDENTITY_INSERT [dbo].[Classes] ON 

INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [class_code], [status]) VALUES (1, 35, N'Lớp học IELTS cơ bản', CAST(N'2024-11-09' AS Date), CAST(N'2024-11-09' AS Date), 11, 11, N'staff@gmail.com', N'teacher@gmail.com', N'P202', N'asdasdadasdasd', CAST(N'02:30:00' AS Time), CAST(N'02:30:00' AS Time), N'ISD', 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [class_code], [status]) VALUES (2, 31, N'Lớp học IELTS nâng cao', CAST(N'2024-11-09' AS Date), CAST(N'2024-11-09' AS Date), 0, 0, N'staff@gmail.com', N'teacher@gmail.com', N'P203', N'string', CAST(N'02:30:00' AS Time), CAST(N'02:30:00' AS Time), N'IOI', 1)
SET IDENTITY_INSERT [dbo].[Classes] OFF
GO
SET IDENTITY_INSERT [dbo].[Contact] ON 

INSERT [dbo].[Contact] ([contact_id], [email], [name], [request_date], [response_date], [status], [request_message], [response_message]) VALUES (3, N'john@gmail.com', N'John', CAST(N'2024-10-29' AS Date), NULL, NULL, N'Tôi là John, và tôi gặp khó khăn trong việc đăng nhập vào tài khoản của mình. Tôi đã thử reset mật khẩu nhưng vẫn không thể đăng nhập được. Rất mong được sự trợ giúp từ các bạn để tôi có thể truy cập vào tài khoản của mình một lần nữa.', NULL)
SET IDENTITY_INSERT [dbo].[Contact] OFF
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (31, N'https://ktdcgroup.vn/wp-content/uploads/2023/04/WEB_THUMNAIL-POST-Thi%E1%BA%BFt-k%E1%BA%BF-KV-kh%C3%B3a-IELTS-h%C3%A8_Update19042023.jpg', N'Khóa IELTS Hè Cấp Tốc', N'Khóa IELTS Hè Cấp Tốc', 12, 10000, 1, CAST(N'2023-06-10' AS Date), 2, N'ISM', N'Mới bắt đầu')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (35, N'data:image/jpeg;base64,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', N'Khoá Học IELTS Introduction', N'Mô tả khóa học N4', 22, 2000000, 1, CAST(N'2023-05-26' AS Date), 3, N'ISD', N'Mới bắt đầu')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (36, N'https://onthiielts.com.vn/wp-content/uploads/2022/10/ielts-intensive-1.jpg', N'Khóa học IELTS cấp tốc', N'Mô tả khóa học N3', 11, 3000000, 1, CAST(N'2023-06-12' AS Date), 4, N'IOI', N'Trung bình')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (37, N'https://www.aland.edu.vn/uploads/images/crop/960x576/2019/07/practice/khoa-ielts-online-band-5-5.jpg', N'Khóa học IELTS Online Band 5.5', N'Mô tả khóa học N2', 1, 4500000, 1, CAST(N'2023-06-05' AS Date), 5, N'PIO', N'Nâng cao')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (38, N'https://istarenglish.edu.vn/wp-content/uploads/2020/12/ielts-banner.jpg', N'Khoá học IELTS GENERAL', N'Mô tả khóa học N1', 11, 7000000, 1, CAST(N'2023-05-26' AS Date), 6, N'ISF', N'Trung bình')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (39, N'https://aten.edu.vn/wp-content/uploads/2022/12/khoa-hoc-ielts-online-cho-nguoi-mat-goc-ban-da-biet-chua-so-1.jpg', N'Khóa học IELTS online cho người mất gốc', N'Mô tả khóa học N1', 12, 10000000, 1, CAST(N'2023-05-30' AS Date), 7, N'ISR', N'Nâng cao')
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (40, N'asd', N'ád', N'asdasd', NULL, 32234, 1, CAST(N'2024-11-09' AS Date), 1, N'asdasd', N'Trung bình')
SET IDENTITY_INSERT [dbo].[Course] OFF
GO
SET IDENTITY_INSERT [dbo].[Feedback] ON 

INSERT [dbo].[Feedback] ([feedback_id], [name], [email], [star], [course_name], [message], [course_id], [user_avatar_url]) VALUES (4, N'Student', N'student@gmail.com', 5, N'Khóa học N5 free', N'Khóa học rất hay và bổ ích', 31, NULL)
INSERT [dbo].[Feedback] ([feedback_id], [name], [email], [star], [course_name], [message], [course_id], [user_avatar_url]) VALUES (5, N'Student', N'student@gmail.com', 5, N'Khóa học N4', N'Nội dung khóa học đầy đủ chi tiết', 35, NULL)
INSERT [dbo].[Feedback] ([feedback_id], [name], [email], [star], [course_name], [message], [course_id], [user_avatar_url]) VALUES (6, N'Student', N'student@gmail.com', 5, N'Khóa học N1', N'Khóa học khá thú vị', 38, N'https://yt3.googleusercontent.com/ytc/AL5GRJUCfVHiY_T0o_KOKqH85MEsTZoEFs0uE4anTUdN5A=s900-c-k-c0x00ffffff-no-rj')
SET IDENTITY_INSERT [dbo].[Feedback] OFF
GO
SET IDENTITY_INSERT [dbo].[Lesson] ON 

INSERT [dbo].[Lesson] ([lesson_id], [lesson_name], [description], [video_url], [material_url], [chapter_id], [duration]) VALUES (15, N'Bảng chữ cái Hiragana', N'Bảng chữ cái Hiragana là một hệ thống chữ viết phục vụ cho ngôn ngữ tiếng Nhật. Nó được sử dụng chủ yếu để viết các từ ngữ không phải là chữ Hán (kanji) và không thuộc bảng chữ cái Katakana. Bảng chữ cái Hiragana bao gồm 46 ký tự cơ bản, bao gồm âm tiết và âm đơn. Dưới đây là bảng chữ cái Hiragana với các ký tự và âm ', N'https://firebasestorage.googleapis.com/v0/b/jlearning-90346.appspot.com/o/course%2Fvideos%2Fvideo-1.mp4?alt=media&token=5b5088a9-a05e-4257-9428-5039ec2a4a78', N'https://drive.google.com/drive/folders/1ZRIRvkmV9j7JlZkKw20hXGXDFqMLS840?usp=sharing', 36, 0)
INSERT [dbo].[Lesson] ([lesson_id], [lesson_name], [description], [video_url], [material_url], [chapter_id], [duration]) VALUES (16, N'Âm đục, âm ghép Hiragana', N'Mô tả bài học', N'https://firebasestorage.googleapis.com/v0/b/jlearning-90346.appspot.com/o/course%2Fvideos%2Fvideo-2.mp4?alt=media&token=b04768d1-39f4-4054-b27c-92ece7bf3c63', N'https://drive.google.com/drive/folders/1ZRIRvkmV9j7JlZkKw20hXGXDFqMLS840', 36, 0)
INSERT [dbo].[Lesson] ([lesson_id], [lesson_name], [description], [video_url], [material_url], [chapter_id], [duration]) VALUES (17, N'Ghép chữ ', N'Mô tả bài học ghép chữ', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/course%2Fvideos%2Fvideo-3.mp4?alt=media&token=f90cfb3c-ac27-4678-a112-3354336248d9', N'https://drive.google.com/drive/folders/1ZRIRvkmV9j7JlZkKw20hXGXDFqMLS840', 36, NULL)
INSERT [dbo].[Lesson] ([lesson_id], [lesson_name], [description], [video_url], [material_url], [chapter_id], [duration]) VALUES (18, N'Ghép chữ Katakana', N'Mô tả bài học ', N'https://firebasestorage.googleapis.com/v0/b/jlearning-90346.appspot.com/o/course%2Fvideos%2Fvideo-3.mp4?alt=media&token=1391209e-4ab8-4ab1-bdf3-09519d799e11', N'https://drive.google.com/drive/folders/1ZRIRvkmV9j7JlZkKw20hXGXDFqMLS840', 36, 0)
INSERT [dbo].[Lesson] ([lesson_id], [lesson_name], [description], [video_url], [material_url], [chapter_id], [duration]) VALUES (19, N'Đếm số, đếm tuổi', N'Mô tả bài học', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/course%2Fvideos%2Fvideo-5.mp4?alt=media&token=cfc3081c-3fa5-4194-a209-5bb19960e485', N'https://drive.google.com/drive/folders/1ZRIRvkmV9j7JlZkKw20hXGXDFqMLS840', 37, NULL)
INSERT [dbo].[Lesson] ([lesson_id], [lesson_name], [description], [video_url], [material_url], [chapter_id], [duration]) VALUES (20, N'Giới thiệu giáo trình ', N'Mô tả bài học ', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/course%2Fvideos%2Fvideo-6.mp4?alt=media&token=abd0f291-945f-4115-850d-aa6b2d413bb8', N'https://drive.google.com/drive/folders/1ZRIRvkmV9j7JlZkKw20hXGXDFqMLS840', 37, NULL)
INSERT [dbo].[Lesson] ([lesson_id], [lesson_name], [description], [video_url], [material_url], [chapter_id], [duration]) VALUES (21, N'Giới thiệu bản thân', N'Mô tả bài học ', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/course%2Fvideos%2Fvideo-7.mp4?alt=media&token=c1a14949-7959-4811-840b-42a4dcdc5300', N'https://drive.google.com/drive/folders/1ZRIRvkmV9j7JlZkKw20hXGXDFqMLS840', 37, NULL)
INSERT [dbo].[Lesson] ([lesson_id], [lesson_name], [description], [video_url], [material_url], [chapter_id], [duration]) VALUES (22, N'Các câu giao tiếp cơ bản', N'Mô tả bài học', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/course%2Fvideos%2Fvideo-9.mp4?alt=media&token=8c3ea3d4-6fe8-4156-88e2-5fa377cfdf5f', N'https://drive.google.com/drive/folders/1ZRIRvkmV9j7JlZkKw20hXGXDFqMLS840', 37, NULL)
INSERT [dbo].[Lesson] ([lesson_id], [lesson_name], [description], [video_url], [material_url], [chapter_id], [duration]) VALUES (23, N'Đếm giá tiền ', N'Mô tả bài học', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/course%2Fvideos%2Fvideo-9.mp4?alt=media&token=60db3196-d11a-4e34-8f4a-8c197bdba628', N'https://drive.google.com/drive/folders/1ZRIRvkmV9j7JlZkKw20hXGXDFqMLS840', 38, NULL)
INSERT [dbo].[Lesson] ([lesson_id], [lesson_name], [description], [video_url], [material_url], [chapter_id], [duration]) VALUES (24, N'Hội thoại ', N'Mô tả bài học', N'https://firebasestorage.googleapis.com/v0/b/flearning-131be.appspot.com/o/course%2Fvideos%2Fvideo-9.mp4?alt=media&token=7d12b5a1-633d-45cd-a01c-011635815e89', N'https://drive.google.com/drive/folders/1ZRIRvkmV9j7JlZkKw20hXGXDFqMLS840', 38, NULL)
SET IDENTITY_INSERT [dbo].[Lesson] OFF
GO
SET IDENTITY_INSERT [dbo].[Payment] ON 

INSERT [dbo].[Payment] ([payment_id], [email], [course_id], [amount], [created_date], [course_name], [phone], [address], [name]) VALUES (8, N'student@gmail.com', 35, 2000000, CAST(N'2024-10-29' AS Date), N'Khóa học N4', N'0123456789', N'Hà Nội', N'Student')
INSERT [dbo].[Payment] ([payment_id], [email], [course_id], [amount], [created_date], [course_name], [phone], [address], [name]) VALUES (10, N'student@gmail.com', 38, 7000000, CAST(N'2024-10-29' AS Date), N'Khóa học N1', N'0123456789', N'Hà Nội', N'Student')
SET IDENTITY_INSERT [dbo].[Payment] OFF
GO
SET IDENTITY_INSERT [dbo].[Question] ON 

INSERT [dbo].[Question] ([question_id], [description], [answer_1], [answer_2], [answer_3], [answer_4], [correct_answer], [test_id], [explaination]) VALUES (10, N'ざっし', N'Bút chì', N'Bút chì', N'Bút chì', N'Bút chì', 1, 23, N'Giải thích câu 1')
INSERT [dbo].[Question] ([question_id], [description], [answer_1], [answer_2], [answer_3], [answer_4], [correct_answer], [test_id], [explaination]) VALUES (11, N'かばん', N'Đồng hồ', N'Ví da', N'Vali', N'Cặp sách', 2, 23, N'')
INSERT [dbo].[Question] ([question_id], [description], [answer_1], [answer_2], [answer_3], [answer_4], [correct_answer], [test_id], [explaination]) VALUES (12, N'ノート', N'Sách', N'Vở', N'Báo', N' Sổ tay', 2, 23, N'')
INSERT [dbo].[Question] ([question_id], [description], [answer_1], [answer_2], [answer_3], [answer_4], [correct_answer], [test_id], [explaination]) VALUES (13, N'かぎ', N'Chìa khoá', N'Cửa', N'Ổ khoá', N'Cây đủ', 2, 23, N'')
INSERT [dbo].[Question] ([question_id], [description], [answer_1], [answer_2], [answer_3], [answer_4], [correct_answer], [test_id], [explaination]) VALUES (14, N'てちょう', N'Tạp chí', N'Nhật ký', N'Sổ tay', N'Bản kế hoạch', 2, 23, N'')
INSERT [dbo].[Question] ([question_id], [description], [answer_1], [answer_2], [answer_3], [answer_4], [correct_answer], [test_id], [explaination]) VALUES (23, N'Chọn đáp án sai', N'1 + 1 = 3', N'1 + 1 = 2', N'1 + 1 = 20', N'1 + 1 = 10', 3, 25, N'Đáp án này sai là vì nó sai')
SET IDENTITY_INSERT [dbo].[Question] OFF
GO
INSERT [dbo].[Registration_Form] ([student_email], [class_id], [course_id], [status], [created_date]) VALUES (N'student@gmail.com', 1, 35, 1, CAST(N'2024-11-09' AS Date))
GO
SET IDENTITY_INSERT [dbo].[Role] ON 

INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (1, N'admin')
INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (2, N'staff')
INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (3, N'teacher')
INSERT [dbo].[Role] ([role_id], [role_name]) VALUES (4, N'student')
SET IDENTITY_INSERT [dbo].[Role] OFF
GO
SET IDENTITY_INSERT [dbo].[Support] ON 

INSERT [dbo].[Support] ([support_id], [support_name], [message]) VALUES (14, N'THÔNG TIN KHÓA HỌC N5, N4', N'Mình giới thiệu qua về khoá của mình chút nha 😉
Khoá online của mình là bạn vào học theo sự hướng dẫn của giáo viên trên những video quay sẵn chi tiết như khi đi học trên lớp, có bài tập đầy đủ 😉 Bạn có thể xem lại nhiều lần và học bất cứ lúc nào 😉 Trong khoá học sẽ có đủ các nội dung sau: từ vựng, ngữ pháp, hội thoại, chữ Kanji (dưới dạng video) và bài tập nghe hiểu có giải đáp, phần đọc hiểu cùng các bài tập trắc nghiệm khác ^^ Bạn vào link sau để xem mẫu các bài học thử nha😉 
🌸N5: https://tiengnhatcolam.vn/khoa-hoc/17-khoa-hoc-n5
 
🌸N4: https://tiengnhatcolam.vn/khoa-hoc/18-khoa-hoc-n4
Về học phí thì hiện bên mình có các gói sau:
👉🏻Gói N5 full từ Nhập môn đến Bài 25 đang có chương trình ưu đãi giảm từ 800 còn 500 😉 
👉🏻Gói N4 từ Bài 26-50 thì đang giảm từ 1.200 còn 700 😉
Sẽ là rẻ nhất nếu bạn mua combo N5+N4 thì giảm chỉ còn 1 triệu cho cả 2 khoá thôi ạ 😊')
INSERT [dbo].[Support] ([support_id], [support_name], [message]) VALUES (15, N'VỀ VẤN ĐỀ GIA HẠN KHÓA HỌC ONLINE', N'Từ ngày 24/05.2020, các khóa học trên Website sẽ áp dụng tính phí gia hạn khi hết thời hạn.

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
SET IDENTITY_INSERT [dbo].[Test] ON 

INSERT [dbo].[Test] ([test_id], [test_name], [chapter_id], [course_id], [description], [duration]) VALUES (23, N'Bài kiểm tra 1', 36, 31, N'Mô tả bài kiểm tra 1', 30)
INSERT [dbo].[Test] ([test_id], [test_name], [chapter_id], [course_id], [description], [duration]) VALUES (25, N'Bài kiểm tra 2', 37, 31, N'Mô tả bài kiểm tra 2', 11)
INSERT [dbo].[Test] ([test_id], [test_name], [chapter_id], [course_id], [description], [duration]) VALUES (26, N'Bài kiểm tra 3', 38, 31, N'Mô tả bài kiểm tra 3', 11)
SET IDENTITY_INSERT [dbo].[Test] OFF
GO
INSERT [dbo].[Test_Done] ([email], [test_id], [course_id]) VALUES (N'student@gmail.com', 23, 31)
GO
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (35, N'student@gmail.com', CAST(N'2024-10-29' AS Date))
INSERT [dbo].[User_Course] ([course_id], [email], [enrolled_date]) VALUES (38, N'student@gmail.com', CAST(N'2024-10-29' AS Date))
GO
ALTER TABLE [dbo].[Account] ADD  DEFAULT ((1)) FOR [active_status]
GO
ALTER TABLE [dbo].[Account]  WITH CHECK ADD FOREIGN KEY([role_id])
REFERENCES [dbo].[Role] ([role_id])
GO
ALTER TABLE [dbo].[Blog]  WITH CHECK ADD FOREIGN KEY([blog_category_id])
REFERENCES [dbo].[Blog_Category] ([blog_category_id])
GO
ALTER TABLE [dbo].[Blog_Details]  WITH CHECK ADD FOREIGN KEY([blog_id])
REFERENCES [dbo].[Blog] ([blog_id])
GO
ALTER TABLE [dbo].[Calendar]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Chapter]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
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
ALTER TABLE [dbo].[Lesson]  WITH CHECK ADD FOREIGN KEY([chapter_id])
REFERENCES [dbo].[Chapter] ([chapter_id])
GO
ALTER TABLE [dbo].[Lesson_Done]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Lesson_Done]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Lesson_Done]  WITH CHECK ADD FOREIGN KEY([lesson_id])
REFERENCES [dbo].[Lesson] ([lesson_id])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Question]  WITH CHECK ADD FOREIGN KEY([test_id])
REFERENCES [dbo].[Test] ([test_id])
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
ALTER TABLE [dbo].[Students]  WITH CHECK ADD FOREIGN KEY([class_id])
REFERENCES [dbo].[Classes] ([class_id])
GO
ALTER TABLE [dbo].[Students]  WITH CHECK ADD FOREIGN KEY([student_email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Test]  WITH CHECK ADD FOREIGN KEY([chapter_id])
REFERENCES [dbo].[Chapter] ([chapter_id])
GO
ALTER TABLE [dbo].[Test_Done]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[Test_Done]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[Account] ([email])
GO
ALTER TABLE [dbo].[Test_Done]  WITH CHECK ADD FOREIGN KEY([test_id])
REFERENCES [dbo].[Test] ([test_id])
GO
ALTER TABLE [dbo].[User_Course]  WITH CHECK ADD FOREIGN KEY([course_id])
REFERENCES [dbo].[Course] ([course_id])
GO
ALTER TABLE [dbo].[User_Course]  WITH CHECK ADD FOREIGN KEY([email])
REFERENCES [dbo].[Account] ([email])
GO
