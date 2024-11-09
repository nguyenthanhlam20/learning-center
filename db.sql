USE [Jlearning]
GO
/****** Object:  Table [dbo].[Account]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Blog]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Blog_Category]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Blog_Details]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Chapter]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Class_Member]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Classes]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Contact]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Course]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Feedback]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[GRADES]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Lesson]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Lesson_Done]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Payment]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Question]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Registration_Form]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Role]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Students]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Support]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Test]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[Test_Done]    Script Date: 11/9/2024 4:42:05 PM ******/
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
/****** Object:  Table [dbo].[User_Course]    Script Date: 11/9/2024 4:42:05 PM ******/
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
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'a@gmail.com', N'aaa', N'aaa', N'aa', N'038591070', N'asds', 0, 0, 3, 1, NULL, NULL, NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'aaaa', N'asd', N'Abc1234!', N'asd', N'aaaa', N'asd', NULL, 0, 2, 0, CAST(N'2024-11-07' AS Date), N'aaaa', NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'admin', N'admin', N'admin', NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, NULL, NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'asd', N'asd', N'Abc1234!', N'asd', N'asd', N'asd', NULL, 1, 2, 1, CAST(N'2024-11-14' AS Date), N'asd', NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'staff@gmail.com', N'Staff ', N'Abc1234!', NULL, NULL, NULL, NULL, NULL, 2, 1, NULL, NULL, NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'student@gmail.com', N'Student', N'Abc1234!', N'https://yt3.googleusercontent.com/ytc/AL5GRJUCfVHiY_T0o_KOKqH85MEsTZoEFs0uE4anTUdN5A=s900-c-k-c0x00ffffff-no-rj', NULL, NULL, NULL, NULL, 4, 1, NULL, NULL, NULL)
INSERT [dbo].[Account] ([email], [name], [password], [avatar_url], [phone], [address], [year_of_birth], [gender], [role_id], [active_status], [date_of_birth], [description], [created_date]) VALUES (N'teacher@gmail.com', N'Teacher', N'Abc1234!', NULL, NULL, NULL, NULL, NULL, 3, 1, NULL, NULL, NULL)
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

INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [class_code], [status]) VALUES (1, 35, N'asdasdadasdasdasdasdadasdasdasdasdadasdasdasdasdadasdasdasdasdadasdasd', CAST(N'2024-11-09' AS Date), CAST(N'2024-11-09' AS Date), 11, 11, N'staff@gmail.com', N'teacher@gmail.com', N'asdasdasd', N'asdasdadasdasd', CAST(N'02:30:00' AS Time), CAST(N'02:30:00' AS Time), N'ISD', 1)
INSERT [dbo].[Classes] ([class_id], [course_id], [class_name], [start_date], [end_date], [number_of_student], [number_of_slots], [staff_email], [teacher_email], [room], [days_of_week], [start_time], [end_time], [class_code], [status]) VALUES (2, 31, N'string', CAST(N'2024-11-09' AS Date), CAST(N'2024-11-09' AS Date), 0, 0, N'staff@gmail.com', N'teacher@gmail.com', N'string', N'string', CAST(N'02:30:00' AS Time), CAST(N'02:30:00' AS Time), N'IOI', 1)
SET IDENTITY_INSERT [dbo].[Classes] OFF
GO
SET IDENTITY_INSERT [dbo].[Contact] ON 

INSERT [dbo].[Contact] ([contact_id], [email], [name], [request_date], [response_date], [status], [request_message], [response_message]) VALUES (3, N'john@gmail.com', N'John', CAST(N'2024-10-29' AS Date), NULL, NULL, N'Tôi là John, và tôi gặp khó khăn trong việc đăng nhập vào tài khoản của mình. Tôi đã thử reset mật khẩu nhưng vẫn không thể đăng nhập được. Rất mong được sự trợ giúp từ các bạn để tôi có thể truy cập vào tài khoản của mình một lần nữa.', NULL)
SET IDENTITY_INSERT [dbo].[Contact] OFF
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (31, N'https://th.bing.com/th/id/R.bcbacef2cd6621c9775e624f5d3a69a0?rik=sOLtqXwlPkgdPg&pid=ImgRaw&r=0', N'Khóa học N5 free', N'Khóa học tiếng Nhật N5 miễn phí toàn bộ: gồm đầy đủ các bài giảng chi tiết, dễ hiểu về ngữ pháp, từ vựng, hội thoại, nghe, đọc theo giáo trình Minna no nihongo và Kanji theo Look and learn.', 12, 0, 1, CAST(N'2023-06-10' AS Date), NULL, NULL, NULL)
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (35, N'https://th.bing.com/th/id/R.6b358a849d923633075c218b1b85e5f5?rik=kABveGvL1wC4xA&riu=http%3a%2f%2fwww.attainj.co.jp%2fonline-nihongo%2fimages%2fphoto%2fjlpt-n4-01.jpg&ehk=P8aVG%2f3SYkOl49KBlk1Xv835CCOLS307%2fivWr655AaA%3d&risl=&pid=ImgRaw&r=0', N'Khóa học N4', N'Mô tả khóa học N4', 22, 2000000, 1, CAST(N'2023-05-26' AS Date), NULL, NULL, NULL)
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (36, N'https://th.bing.com/th/id/R.d607f0d948d93c5cf37f2c27540c895b?rik=BlWfbkVx3wktAQ&pid=ImgRaw&r=0', N'Khóa học N3', N'Mô tả khóa học N3', 11, 3000000, 1, CAST(N'2023-06-12' AS Date), NULL, NULL, NULL)
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (37, N'data:image/jpeg;base64,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', N'Khóa học N2', N'Mô tả khóa học N2', 1, 4500000, 1, CAST(N'2023-06-05' AS Date), NULL, NULL, NULL)
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (38, N'https://th.bing.com/th/id/OIP.EIwniojjVwQ35pnKQRap_gHaEU?rs=1&pid=ImgDetMain', N'Khóa học N1', N'Mô tả khóa học N1', 11, 7000000, 1, CAST(N'2023-05-26' AS Date), NULL, NULL, NULL)
INSERT [dbo].[Course] ([course_id], [course_avatar_url], [course_name], [description], [duration], [price], [status], [created_at], [number_of_slots], [code], [level]) VALUES (39, N'https://th.bing.com/th/id/R.f9601a04406fb0b7b94ce81f5fb3c44c?rik=vqhneB73ERYl5g&pid=ImgRaw&r=0', N'Khóa học N1 nâng cao', N'Mô tả khóa học N1', 12, 10000000, 1, CAST(N'2023-05-30' AS Date), NULL, NULL, NULL)
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
